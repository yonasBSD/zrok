package main

import (
	"github.com/openziti/zrok/canary"
	"github.com/openziti/zrok/environment"
	"github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func init() {
	testCanaryCmd.AddCommand(newTestCanaryPeriodicCommand().cmd)
}

type testCanaryPeriodicCommand struct {
	cmd               *cobra.Command
	loopers           uint
	iterations        uint
	statusInterval    uint
	timeout           time.Duration
	minPayload        uint64
	maxPayload        uint64
	minDwell          time.Duration
	maxDwell          time.Duration
	minPacing         time.Duration
	maxPacing         time.Duration
	frontendSelection string
}

func newTestCanaryPeriodicCommand() *testCanaryPeriodicCommand {
	cmd := &cobra.Command{
		Use:   "periodic",
		Short: "Run a periodic canary inspection",
		Args:  cobra.NoArgs,
	}
	command := &testCanaryPeriodicCommand{cmd: cmd}
	cmd.Run = command.run
	cmd.Flags().UintVarP(&command.loopers, "loopers", "l", 1, "Number of concurrent loopers to start")
	cmd.Flags().UintVarP(&command.iterations, "iterations", "i", 1, "Number of iterations")
	cmd.Flags().UintVarP(&command.statusInterval, "status-interval", "S", 100, "Show status every # iterations")
	cmd.Flags().DurationVarP(&command.timeout, "timeout", "T", 30*time.Second, "Timeout when sending HTTP requests")
	cmd.Flags().Uint64Var(&command.minPayload, "min-payload", 64, "Minimum payload size in bytes")
	cmd.Flags().Uint64Var(&command.maxPayload, "max-payload", 10240, "Maximum payload size in bytes")
	cmd.Flags().DurationVar(&command.minDwell, "min-dwell", 1*time.Second, "Minimum dwell time")
	cmd.Flags().DurationVar(&command.maxDwell, "max-dwell", 1*time.Second, "Maximum dwell time")
	cmd.Flags().DurationVar(&command.minPacing, "min-pacing", 0, "Minimum pacing time")
	cmd.Flags().DurationVar(&command.maxPacing, "max-pacing", 0, "Maximum pacing time")
	cmd.Flags().StringVar(&command.frontendSelection, "frontend-selection", "public", "Select frontend selection")
	return command
}

func (cmd *testCanaryPeriodicCommand) run(_ *cobra.Command, _ []string) {
	root, err := environment.LoadRoot()
	if err != nil {
		panic(err)
	}

	if !root.IsEnabled() {
		logrus.Fatal("unable to load environment; did you 'zrok enable'?")
	}

	var loopers []*canary.PublicHttpLooper
	for i := uint(0); i < cmd.loopers; i++ {
		looperOpts := &canary.LooperOptions{
			Iterations:     cmd.iterations,
			StatusInterval: cmd.statusInterval,
			Timeout:        cmd.timeout,
			MinPayload:     cmd.minPayload,
			MaxPayload:     cmd.maxPayload,
			MinDwell:       cmd.minDwell,
			MaxDwell:       cmd.maxDwell,
			MinPacing:      cmd.minPacing,
			MaxPacing:      cmd.maxPacing,
		}
		looper := canary.NewPublicHttpLooper(i, cmd.frontendSelection, looperOpts, root)
		loopers = append(loopers, looper)
		go looper.Run()
	}

	c := make(chan os.Signal)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-c
		for _, looper := range loopers {
			looper.Abort()
		}
	}()

	for _, l := range loopers {
		<-l.Done()
	}

	results := make([]*canary.LooperResults, 0)
	for i := uint(0); i < cmd.loopers; i++ {
		results = append(results, loopers[i].Results())
	}
	canary.ReportLooperResults(results)

	os.Exit(0)
}
