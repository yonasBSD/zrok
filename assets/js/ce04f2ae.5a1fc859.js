"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6289],{9429:(e,s,r)=>{r.d(s,{Ay:()=>c,RM:()=>o});var n=r(4848),t=r(8453);const o=[];function i(e){const s={a:"a",code:"code",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"proxy"})," mode forwards requests received by the frontend to the target server (",(0,n.jsx)(s.a,{href:"/docs/next/concepts/http",children:"more"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"web"})," mode serves a target folder as a file index web page (",(0,n.jsx)(s.a,{href:"/docs/next/concepts/files",children:"more"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"drive"})," mode serves a target folder with WebDAV (",(0,n.jsx)(s.a,{href:"/docs/next/guides/drives",children:"guide"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"caddy"})," mode runs the built-in Caddy server with the targeted Caddyfile (",(0,n.jsx)(s.a,{href:"pathname:///simple_reverse_proxy.Caddyfile",children:"example"}),")"]}),"\n"]})}function c(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},3222:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"concepts/sharing-private","title":"Private Shares","description":"zrok was built to share and access digital resources. A private share allows a resource to be","source":"@site/versioned_docs/version-0.4/concepts/sharing-private.mdx","sourceDirName":"concepts","slug":"/concepts/sharing-private","permalink":"/docs/concepts/sharing-private","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/versioned_docs/version-0.4/concepts/sharing-private.mdx","tags":[],"version":"0.4","sidebarPosition":0,"frontMatter":{"sidebar_position":0},"sidebar":"tutorialSidebar","previous":{"title":"Concepts","permalink":"/docs/concepts/"},"next":{"title":"Public Shares","permalink":"/docs/concepts/sharing-public"}}');var t=r(4848),o=r(8453),i=r(9429);const c={sidebar_position:0},a="Private Shares",d={},h=[{value:"Peer to Peer",id:"peer-to-peer",level:2},{value:"Private Backend Modes",id:"private-backend-modes",level:2},...i.RM];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"private-shares",children:"Private Shares"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"zrok"})," was built to share and access digital resources. A ",(0,t.jsx)(s.code,{children:"private"})," share allows a resource to be\naccessed on another user's system as if it were local to them. Privately shared resources can only be accessed by another ",(0,t.jsx)(s.code,{children:"zrok"})," user who has the details of your unique share. You are in control of who can access your ",(0,t.jsx)(s.code,{children:"private"})," shares by sharing the share token."]}),"\n",(0,t.jsxs)(s.p,{children:["Peer-to-peer private resource sharing is one of the things that makes ",(0,t.jsx)(s.code,{children:"zrok"})," unique."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"zrok"})," also provides ",(0,t.jsx)(s.code,{children:"public"})," sharing of resources with non-",(0,t.jsx)(s.code,{children:"zrok"})," users. Public resource sharing is limited to only resources that can be accessed over ",(0,t.jsx)(s.code,{children:"HTTP"})," or ",(0,t.jsx)(s.code,{children:"HTTPS"}),". ",(0,t.jsx)(s.code,{children:"private"})," sharing works with all of the resources types that ",(0,t.jsx)(s.code,{children:"zrok"})," supports."]}),"\n",(0,t.jsx)(s.p,{children:"Here's how private sharing works:"}),"\n",(0,t.jsx)(s.h2,{id:"peer-to-peer",children:"Peer to Peer"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"zrok_public_share",src:r(7827).A+"",width:"2200",height:"922"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"private"})," shares are accessed using the ",(0,t.jsx)(s.code,{children:"zrok access"})," command, and require the accessing user to have a ",(0,t.jsx)(s.code,{children:"zrok enable"}),"-d account on the same service instance where the share was created."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"private"})," share is identified by a ",(0,t.jsx)(s.em,{children:"share token"}),". The accessing user will use the share token, along with the ",(0,t.jsx)(s.code,{children:"zrok access"})," command to create a local endpoint on their system, which lets them use the shared resource as if it were local to their system."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"zrok"})," does not require you to open any firewall ports or otherwise compromise the security of your local system; there is never an attack surface open to the public internet. As soon as you terminate the ",(0,t.jsx)(s.code,{children:"zrok share"})," process, you immediately terminate any possible access to your shared resource."]}),"\n",(0,t.jsxs)(s.p,{children:["The shared resource can be a development web server to share with friends and colleagues, a webhook from a server running in the cloud which has ",(0,t.jsx)(s.code,{children:"zrok"})," running and has been instructed to ",(0,t.jsx)(s.code,{children:"access"})," the private resource. ",(0,t.jsx)(s.code,{children:"zrok"})," can also share files, websites, and low-level TCP and UDP network connections using the ",(0,t.jsx)(s.code,{children:"tunnel"})," backend.  What matters is that the access to the shared resource is not done in a public way, and can only be accessed by other ",(0,t.jsx)(s.code,{children:"zrok"})," users that have access to your share token."]}),"\n",(0,t.jsxs)(s.p,{children:["The peer-to-peer capabilities of ",(0,t.jsx)(s.code,{children:"zrok"})," are an important property of the underlying ",(0,t.jsx)(s.a,{href:"https://docs.openziti.io/docs/learn/introduction/",children:"OpenZiti"})," network that ",(0,t.jsx)(s.code,{children:"zrok"})," uses to provide connectivity between users and resources."]}),"\n",(0,t.jsxs)(s.p,{children:["Creating ",(0,t.jsx)(s.code,{children:"private"})," shares is easy and is accomplished using the ",(0,t.jsx)(s.code,{children:"zrok share private"})," command. Run ",(0,t.jsx)(s.code,{children:"zrok share private"})," to see the usage output and to further learn how to use the command."]}),"\n",(0,t.jsx)(s.h2,{id:"private-backend-modes",children:"Private Backend Modes"}),"\n",(0,t.jsxs)(s.p,{children:["The default backend mode is ",(0,t.jsx)(s.code,{children:"proxy"})," which targets an HTTP URL that must be reachable by the backend."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",metastring:'title="proxy example"',children:"zrok share private 80\n"})}),"\n",(0,t.jsx)(i.Ay,{}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"tcpTunnel"}),", ",(0,t.jsx)(s.code,{children:"udpTunnel"})," modes forward the data payload to the target server (",(0,t.jsx)(s.a,{href:"/docs/concepts/tunnels",children:"more"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"socks"})," mode provides a SOCKS5 dynamic proxy on the private access bind port that tunnels TCP payloads to the share backend where they are forwarded to their destinations (",(0,t.jsx)(s.a,{href:"https://blog.openziti.io/the-zrok-socks-backend",children:"blog"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"vpn"})," mode provides a network layer tunnel between the private access and the share backend (",(0,t.jsx)(s.a,{href:"/docs/guides/vpn/",children:"guide"}),")"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7827:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/zrok_private_share-3b4b2f89f7b5e6704d0b9078a701161e.png"},8453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>c});var n=r(6540);const t={},o=n.createContext(t);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);