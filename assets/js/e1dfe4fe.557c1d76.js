"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3423],{1181:(e,n,o)=>{o.d(n,{Ay:()=>c,RM:()=>t});var i=o(4848),r=o(8453);const t=[{value:"Docker Instance",id:"docker-instance",level:2},{value:"Create the Docker Compose Project",id:"create-the-docker-compose-project",level:3},{value:"YOLO",id:"yolo",level:4},{value:"I&#39;ll Do it Myself",id:"ill-do-it-myself",level:4},{value:"Basic Configuration (No TLS, Localhost Only)",id:"basic-configuration-no-tls-localhost-only",level:3},{value:"DNS Configuration (Optional for localhost-only setup)",id:"dns-configuration-optional-for-localhost-only-setup",level:4},{value:"Configure the Docker Compose Project Environment",id:"configure-the-docker-compose-project-environment",level:4},{value:"Start the Docker Compose Project",id:"start-the-docker-compose-project",level:4},{value:"Expanded Configuration with TLS (Caddy or Traefik)",id:"expanded-configuration-with-tls-caddy-or-traefik",level:3},{value:"DNS Configuration for TLS",id:"dns-configuration-for-tls",level:4},{value:"Configure the Docker Compose File",id:"configure-the-docker-compose-file",level:4},{value:"Caddy Configuration",id:"caddy-configuration",level:4},{value:"Traefik Configuration",id:"traefik-configuration",level:4},{value:"Start the Docker Compose Project",id:"start-the-docker-compose-project-1",level:4},{value:"Set up a User Account",id:"set-up-a-user-account",level:3},{value:"Enable the User Environment",id:"enable-the-user-environment",level:3},{value:"Firewall Configuration",id:"firewall-configuration",level:3},{value:"Additional Configuration Options",id:"additional-configuration-options",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function s(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"docker-instance",children:"Docker Instance"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/70zJ_h4uiD8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,i.jsx)(n.p,{children:"This Docker Compose project creates a zrok instance supported by a OpenZiti controller and router. It supports flexible deployment configurations:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Basic Configuration"}),": Services exposed on localhost only (no TLS)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"With Caddy"}),": Services published using Caddy (TLS)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"With Traefik"}),": Services published using Traefik (TLS)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create-the-docker-compose-project",children:"Create the Docker Compose Project"}),"\n",(0,i.jsx)(n.p,{children:"Create a working directory on your Docker host and save these Docker Compose project files."}),"\n",(0,i.jsx)(n.h4,{id:"yolo",children:"YOLO"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run this script to download the files in the current directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl https://get.openziti.io/zrok-instance/fetch.bash | bash\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or, specify the Compose project directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl https://get.openziti.io/zrok-instance/fetch.bash | bash -s /path/to/compose/project/dir\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ill-do-it-myself",children:"I'll Do it Myself"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Get the zrok repo ZIP file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/openziti/zrok/archive/refs/heads/main.zip\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Unzip the zrok-instance files into the project directory."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"unzip -j -d . main.zip '*/docker/compose/zrok-instance/*'\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"basic-configuration-no-tls-localhost-only",children:"Basic Configuration (No TLS, Localhost Only)"}),"\n",(0,i.jsx)(n.p,{children:"This is the simplest way to get started with zrok, exposing services on localhost only, without TLS."}),"\n",(0,i.jsx)(n.h4,{id:"dns-configuration-optional-for-localhost-only-setup",children:"DNS Configuration (Optional for localhost-only setup)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["If you plan to use this beyond localhost, set up a wildcard record for the IP address where the zrok instance will run\n(e.g., if your DNS zone is ",(0,i.jsx)(n.code,{children:"share.example.com"}),", then your wildcard record is ",(0,i.jsx)(n.code,{children:"*.share.example.com"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"configure-the-docker-compose-project-environment",children:"Configure the Docker Compose Project Environment"}),"\n",(0,i.jsxs)(n.p,{children:["Create an ",(0,i.jsx)(n.code,{children:".env"})," file in the working directory with the minimal required configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title=".env minimal configuration"',children:"# Required settings\nZROK_DNS_ZONE=share.example.com\nZROK_USER_EMAIL=me@example.com\nZROK_USER_PWD=zrokuserpw\nZITI_PWD=zitiadminpw\nZROK_ADMIN_TOKEN=zroktoken\n\n# Expose services only on localhost (default)\nZROK_INSECURE_INTERFACE=127.0.0.1\n\n# Service ports\nZROK_CTRL_PORT=18080\nZROK_FRONTEND_PORT=8080\nZROK_OAUTH_PORT=8081\nZITI_CTRL_ADVERTISED_PORT=80\nZITI_ROUTER_PORT=3022\n"})}),"\n",(0,i.jsx)(n.h4,{id:"start-the-docker-compose-project",children:"Start the Docker Compose Project"}),"\n",(0,i.jsx)(n.p,{children:"Start the zrok instance:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose up --build --detach\n"})}),"\n",(0,i.jsx)(n.h3,{id:"expanded-configuration-with-tls-caddy-or-traefik",children:"Expanded Configuration with TLS (Caddy or Traefik)"}),"\n",(0,i.jsx)(n.p,{children:"For production deployments, you should use TLS. You can choose between Caddy or Traefik for TLS termination and reverse proxy to the zrok services. The ziti services are always published directly, not proxied, and they bring their own TLS."}),"\n",(0,i.jsx)(n.h4,{id:"dns-configuration-for-tls",children:"DNS Configuration for TLS"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ensure a wildcard record exists for the IP address where the zrok instance will run\n(e.g., if your DNS zone is ",(0,i.jsx)(n.code,{children:"share.example.com"}),", then your wildcard record is ",(0,i.jsx)(n.code,{children:"*.share.example.com"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Choose a DNS provider that supports automatic DNS challenge for obtaining wildcard certificates and for which a plugin is available in Caddy or Traefik."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"configure-the-docker-compose-file",children:"Configure the Docker Compose File"}),"\n",(0,i.jsxs)(n.p,{children:["Add this setting to your ",(0,i.jsx)(n.code,{children:".env"})," file to select which TLS provider to use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Use one of the following:\nCOMPOSE_FILE=compose.yml:compose.caddy.yml  # For Caddy\n# OR\nCOMPOSE_FILE=compose.yml:compose.traefik.yml  # For Traefik\n"})}),"\n",(0,i.jsx)(n.h4,{id:"caddy-configuration",children:"Caddy Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["If using Caddy, add these settings to your ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title=".env for Caddy"',children:"# Caddy TLS configuration\nCADDY_DNS_PLUGIN=cloudflare  # Plugin name for your DNS provider (see github.com/caddy-dns)\nCADDY_DNS_PLUGIN_TOKEN=abcd1234  # API token from your DNS provider\nCADDY_ACME_API=https://acme-v02.api.letsencrypt.org/directory  # ACME API endpoint\nCADDY_HTTPS_PORT=443  # HTTPS port (optional, defaults to 443)\nCADDY_INTERFACE=0.0.0.0  # Interface to bind to (optional, defaults to all interfaces)\n\n# For AWS Route53, uncomment and set these instead of CADDY_DNS_PLUGIN_TOKEN:\n# AWS_ACCESS_KEY_ID=your-access-key\n# AWS_SECRET_ACCESS_KEY=your-secret-key\n# AWS_REGION=your-region\n# AWS_SESSION_TOKEN=your-session-token  # Only if using temporary credentials\n"})}),"\n",(0,i.jsx)(n.h4,{id:"traefik-configuration",children:"Traefik Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["If using Traefik, add these settings to your ",(0,i.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title=".env for Traefik"',children:"# Traefik TLS configuration\nTRAEFIK_DNS_PROVIDER=digitalocean  # DNS provider for Traefik\nTRAEFIK_DNS_PROVIDER_TOKEN=abcd1234  # API token from your DNS provider\nTRAEFIK_ACME_API=https://acme-v02.api.letsencrypt.org/directory  # ACME API endpoint\nTRAEFIK_HTTPS_PORT=443  # HTTPS port (optional, defaults to 443)\nTRAEFIK_INTERFACE=0.0.0.0  # Interface to bind to (optional, defaults to all interfaces)\n\n# For AWS Route53, uncomment and set these instead of TRAEFIK_DNS_PROVIDER_TOKEN:\n# AWS_ACCESS_KEY_ID=your-access-key\n# AWS_SECRET_ACCESS_KEY=your-secret-key\n# AWS_REGION=your-region\n# AWS_SESSION_TOKEN=your-session-token  # Only if using temporary credentials\n"})}),"\n",(0,i.jsx)(n.h4,{id:"start-the-docker-compose-project-1",children:"Start the Docker Compose Project"}),"\n",(0,i.jsx)(n.p,{children:"Start the zrok instance with TLS support:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose up --build --detach\n"})}),"\n",(0,i.jsx)(n.h3,{id:"set-up-a-user-account",children:"Set up a User Account"}),"\n",(0,i.jsxs)(n.p,{children:["This step creates a user account. You will log in to the zrok web console with the account password created in this step. The ZROK_USER_EMAIL and ZROK_USER_PWD variables are set in the ",(0,i.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Create the first user account"',children:"docker compose exec zrok-controller bash -xc 'zrok admin create account ${ZROK_USER_EMAIL} ${ZROK_USER_PWD}'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-buttonless",metastring:'title="Example output"',children:"+ zrok admin create account me@example.com zrokuserpw\n[   0.000]    INFO zrok/controller/store.Open: database connected\n[   0.002]    INFO zrok/controller/store.(*Store).migrate: applied 0 migrations\nheMqncCyxZcx\n"})}),"\n",(0,i.jsx)(n.p,{children:"Create additional users by running the command again with a different email and password."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Create another user"',children:"docker compose exec zrok-controller zrok admin create account <email> <password>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"enable-the-user-environment",children:"Enable the User Environment"}),"\n",(0,i.jsx)(n.p,{children:"You must enable each device environment with the account token obtained when the account was created. This is separate from the account password that's used to log in to the web console."}),"\n",(0,i.jsxs)(n.p,{children:["Follow ",(0,i.jsx)(n.a,{href:"/docs/getting-started#installing-the-zrok-command",children:"the getting started guide"})," to install the zrok CLI on some device and enable a zrok environment."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure the environment with the zrok API endpoint:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# If using TLS (Caddy or Traefik)\nzrok config set apiEndpoint https://zrok.share.example.com\n\n# If using basic configuration (localhost, no TLS)\nzrok config set apiEndpoint http://localhost:18080\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Enable an environment on this device with the account token from the previous step."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"zrok enable heMqncCyxZcx\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"firewall-configuration",children:"Firewall Configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"443/tcp"})," - HTTPS for all services (Caddy or Traefik)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"80/tcp"})," - ziti ctrl plane"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"3022/tcp"})," - ziti data plane"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"additional-configuration-options",children:"Additional Configuration Options"}),"\n",(0,i.jsxs)(n.p,{children:["You can add these additional settings to your ",(0,i.jsx)(n.code,{children:".env"})," file for more customization:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# OAuth configuration for public shares\nZROK_OAUTH_HASH_KEY=oauthhashkeysecret\nZROK_OAUTH_GITHUB_CLIENT_ID=abcd1234\nZROK_OAUTH_GITHUB_CLIENT_SECRET=abcd1234\nZROK_OAUTH_GOOGLE_CLIENT_ID=abcd1234\nZROK_OAUTH_GOOGLE_CLIENT_SECRET=abcd1234\n"})}),"\n",(0,i.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the service logs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# View logs for a specific service\ndocker compose logs zrok-controller\ndocker compose logs zrok-frontend\ndocker compose logs ziti-quickstart\n\n# View logs for Caddy (if using)\ndocker compose logs caddy\n\n# View logs for Traefik (if using)\ndocker compose logs traefik\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Validate TLS configuration:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# For Caddy\ndocker compose exec caddy caddy validate --config /etc/caddy/Caddyfile\n\n# For Traefik\ndocker compose exec traefik traefik healthcheck\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check certificate status:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# For Caddy\ndocker compose exec caddy curl -s "http://localhost:2019/certificates"\n\n# For Traefik - view the ACME certificate file directly\ndocker compose exec traefik cat /etc/traefik/acme/acme.json | grep -A 5 "Certificates"\n'})}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},2465:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"guides/self-hosting/docker","title":"Self-hosting guide for Docker","description":"","source":"@site/../docs/guides/self-hosting/docker.mdx","sourceDirName":"guides/self-hosting","slug":"/guides/self-hosting/docker","permalink":"/docs/guides/self-hosting/docker","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/self-hosting/docker.mdx","tags":[],"version":"current","sidebarPosition":45,"frontMatter":{"title":"Self-hosting guide for Docker","sidebar_label":"Docker","sidebar_position":45},"sidebar":"tutorialSidebar","previous":{"title":"Personalized Frontend","permalink":"/docs/guides/self-hosting/personalized-frontend"},"next":{"title":"Kubernetes","permalink":"/docs/guides/self-hosting/kubernetes"}}');var r=o(4848),t=o(8453),s=o(1181);const c={title:"Self-hosting guide for Docker",sidebar_label:"Docker",sidebar_position:45},a=void 0,l={},d=[...s.RM];function h(e){return(0,r.jsx)(s.Ay,{})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h()}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var i=o(6540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);