"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1057],{942:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"guides/docker-share/docker_private_share_guide","title":"Docker Private Share","description":"Goal","source":"@site/../docs/guides/docker-share/docker_private_share_guide.md","sourceDirName":"guides/docker-share","slug":"/guides/docker-share/docker_private_share_guide","permalink":"/docs/guides/docker-share/docker_private_share_guide","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/docker-share/docker_private_share_guide.md","tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"title":"Docker Private Share","sidebar_position":20,"sidebar_label":"Private Share"},"sidebar":"tutorialSidebar","previous":{"title":"Public Share","permalink":"/docs/guides/docker-share/docker_public_share_guide"},"next":{"title":"Self Hosting","permalink":"/docs/category/self-hosting"}}');var o=n(4848),i=n(8453);const t={title:"Docker Private Share",sidebar_position:20,sidebar_label:"Private Share"},a=void 0,c={},l=[{value:"Goal",id:"goal",level:2},{value:"Overview",id:"overview",level:2},{value:"Walkthrough Video",id:"walkthrough-video",level:2},{value:"How it Works",id:"how-it-works",level:2},{value:"Before You Begin",id:"before-you-begin",level:2},{value:"Begin Sharing Privately with zrok in Docker",id:"begin-sharing-privately-with-zrok-in-docker",level:2},{value:"Access the Private Share",id:"access-the-private-share",level:2},{value:"Closed Permission Mode",id:"closed-permission-mode",level:2},{value:"Going Further with Private Access",id:"going-further-with-private-access",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"goal",children:"Goal"}),"\n",(0,o.jsx)(r.p,{children:"Privately share a Docker Compose service with a separate zrok environment and a permanent zrok share token."}),"\n",(0,o.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(r.p,{children:"With zrok, you can privately share a service that's running in Docker. You need a zrok private share running somewhere that it can reach the service you're sharing, and a zrok private access running somewhere else where you want to use the private share. Together, the private share and private access form a private point-to-point tunnel."}),"\n",(0,o.jsxs)(r.p,{children:["Here's a short article with an overview of ",(0,o.jsx)(r.a,{href:"/docs/concepts/sharing-private",children:"private sharing with zrok"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"walkthrough-video",children:"Walkthrough Video"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/HxyvtFAvwUE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,o.jsx)(r.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,o.jsx)(r.p,{children:"The Docker Compose project uses your zrok account token to reserve a private share token and keep sharing the backend target."}),"\n",(0,o.jsx)(r.p,{children:"When the project runs it will:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["enable a zrok environment unless ",(0,o.jsx)(r.code,{children:"/mnt/.zrok/environment.json"})," exists in the ",(0,o.jsx)(r.code,{children:"zrok_env"})," volume"]}),"\n",(0,o.jsxs)(r.li,{children:["reserve a private share token for the service unless ",(0,o.jsx)(r.code,{children:"/mnt/.zrok/reserved.json"})," exists"]}),"\n",(0,o.jsxs)(r.li,{children:["start sharing the target specified in the ",(0,o.jsx)(r.code,{children:"ZROK_TARGET"})," environment variable"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,o.jsxs)(r.p,{children:["To follow this guide you will need ",(0,o.jsx)(r.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"If you have installed Docker Desktop on macOS or Windows then you are all set."}),"\n",(0,o.jsx)(r.h2,{id:"begin-sharing-privately-with-zrok-in-docker",children:"Begin Sharing Privately with zrok in Docker"}),"\n",(0,o.jsx)(r.p,{children:"First, let's create the private share."}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Make a folder on your computer to use as a Docker Compose project for your zrok private share."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"In your terminal, change directory to your newly-created project folder."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Download ",(0,o.jsx)(r.a,{href:"pathname:///zrok-private-share/compose.yml",children:"the zrok-private-share Docker Compose project file"})," into your new project folder and make sure it's named ",(0,o.jsx)(r.code,{children:"compose.yml"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Copy your zrok environment token from the zrok web console to your clipboard and paste it in a file named ",(0,o.jsx)(r.code,{children:".env"})," in the same folder like this:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"If you are self-hosting zrok then it's important to set your API endpoint URL too. If you're using the hosted zrok service then you can skip this step."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'# file name ".env"\nZROK_API_ENDPOINT="https://zrok.example.com"\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Run your Compose project to start sharing the built-in demo web server:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose up\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Read the private share token from the output. One of the last lines is like this:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"zrok-private-share-1  | zrok access private wr3hpf2z5fiy\n"})}),"\n",(0,o.jsx)(r.p,{children:"Keep track of this token so you can use it in your zrok private access project."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"access-the-private-share",children:"Access the Private Share"}),"\n",(0,o.jsx)(r.p,{children:"Now that we have a private share we can access it with the zrok command or by running a separate Docker Compose project."}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Make a folder on your computer to use as a Docker Compose project for your zrok private access."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"In your terminal, change directory to your newly-created project folder."}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Download ",(0,o.jsx)(r.a,{href:"pathname:///zrok-private-access/compose.yml",children:"the zrok-private-access Docker Compose project file"})," into your new project folder and make sure it's named ",(0,o.jsx)(r.code,{children:"compose.yml"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Copy your zrok environment token from the zrok web console to your clipboard and paste it in a file named ",(0,o.jsx)(r.code,{children:".env"})," in the same folder like this:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Now copy the zrok private access token from the zrok private share project's output to your clipboard and paste it in the same file named ",(0,o.jsx)(r.code,{children:".env"})," here in your private share project folder like this:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'# file name ".env"\nZROK_ENABLE_TOKEN="8UL9-48rN0ua"\nZROK_ACCESS_TOKEN="wr3hpf2z5fiy"\n'})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsx)(r.p,{children:"Run your Compose project to start accessing the private share:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose up zrok-access\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Now your zrok private access proxy is ready on ",(0,o.jsx)(r.a,{href:"http://127.0.0.1:9191",children:"http://127.0.0.1:9191"}),". You can visit the demo web server in your browser."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"closed-permission-mode",children:"Closed Permission Mode"}),"\n",(0,o.jsx)(r.p,{children:'Normally, you need only the share token to access a private share. You can further restrict access with "closed" permission mode.'}),"\n",(0,o.jsx)(r.p,{children:"You must set the permission mode before you reserve the share."}),"\n",(0,o.jsx)(r.p,{children:"Only your own account can access the private share."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'ZROK_PERMISSION_MODE="closed"\n'})}),"\n",(0,o.jsx)(r.p,{children:"Grant access to additional zrok accounts."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'ZROK_ACCESS_GRANTS="bob@example.com alice@example.org"\n'})}),"\n",(0,o.jsxs)(r.p,{children:["You can adjust the access grants by running the CLI inside the ",(0,o.jsx)(r.code,{children:"zrok-share"})," container."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose exec zrok-share zrok modify ${ZROK_UNIQUE_NAME} --remove-access-grant bob@example.com\n"})}),"\n",(0,o.jsx)(r.h2,{id:"going-further-with-private-access",children:"Going Further with Private Access"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Try changing the demo web server used in the private share project. One alternative demo server is provided: ",(0,o.jsx)(r.code,{children:"httpbin"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["Try accessing the private share from ",(0,o.jsx)(r.em,{children:"inside"})," a container running in the private access project. One demo client is provided: ",(0,o.jsx)(r.code,{children:"demo-client"}),". You can run it like this."]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose up demo-client\n"})}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:["You'll see in the terminal output that the demo-client container is getting a response from the private share indicating the source IP of the request from the perspective of the demo server: ",(0,o.jsx)(r.code,{children:"httpbin"})," that's running in the private share project."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.h2,{id:"cleaning-up",children:"Cleaning Up"}),"\n",(0,o.jsx)(r.p,{children:'Run the "down" command in both Compose projects to destroy them when you\'re all done. This will stop the running containers and delete zrok environments\' storage volumes. Then delete the selected zrok environment by clicking "Actions" in the web console.'}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"docker compose down --remove-orphans --volumes\n"})})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function t(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);