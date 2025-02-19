"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8675],{9429:(e,s,r)=>{r.d(s,{Ay:()=>t,RM:()=>i});var n=r(4848),c=r(8453);const i=[];function o(e){const s={a:"a",code:"code",li:"li",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"proxy"})," mode forwards requests received by the frontend to the target server (",(0,n.jsx)(s.a,{href:"/docs/next/concepts/http",children:"more"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"web"})," mode serves a target folder as a file index web page (",(0,n.jsx)(s.a,{href:"/docs/next/concepts/files",children:"more"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"drive"})," mode serves a target folder with WebDAV (",(0,n.jsx)(s.a,{href:"/docs/next/guides/drives",children:"guide"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"caddy"})," mode runs the built-in Caddy server with the targeted Caddyfile (",(0,n.jsx)(s.a,{href:"pathname:///simple_reverse_proxy.Caddyfile",children:"example"}),")"]}),"\n"]})}function t(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1806:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"concepts/sharing-public","title":"Public Shares","description":"zrok supports public sharing for web-based (HTTP and HTTPS) resources. These resources are easily shared with the general internet through public access points.","source":"@site/../docs/concepts/sharing-public.mdx","sourceDirName":"concepts","slug":"/concepts/sharing-public","permalink":"/docs/next/concepts/sharing-public","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/concepts/sharing-public.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Private Shares","permalink":"/docs/next/concepts/sharing-private"},"next":{"title":"Reserved Shares","permalink":"/docs/next/concepts/sharing-reserved"}}');var c=r(4848),i=r(8453),o=r(9429);const t={sidebar_position:10},d="Public Shares",a={},l=[{value:"Peer to Public",id:"peer-to-public",level:2},{value:"Public Backend Modes",id:"public-backend-modes",level:2},...o.RM];function h(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.header,{children:(0,c.jsx)(s.h1,{id:"public-shares",children:"Public Shares"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"zrok"})," supports ",(0,c.jsx)(s.code,{children:"public"})," sharing for web-based (HTTP and HTTPS) resources. These resources are easily shared with the general internet through public access points."]}),"\n",(0,c.jsx)(s.h2,{id:"peer-to-public",children:"Peer to Public"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"zrok_public_share",src:r(1055).A+"",width:"2200",height:"916"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"public"})," sharing is most useful when the person or service accessing your resources does not have ",(0,c.jsx)(s.code,{children:"zrok"})," running locally and cannot make use of the ",(0,c.jsx)(s.code,{children:"private"})," sharing mode built into ",(0,c.jsx)(s.code,{children:"zrok"}),". Many users share development web servers, webhooks, and other HTTP/HTTPS resources."]}),"\n",(0,c.jsxs)(s.p,{children:["As with ",(0,c.jsx)(s.code,{children:"private"})," sharing, ",(0,c.jsx)(s.code,{children:"public"})," sharing does not require you to open any firewall ports or otherwise compromise the security of your local environments. A ",(0,c.jsx)(s.code,{children:"public"})," share goes away as soon as you terminate the ",(0,c.jsx)(s.code,{children:"zrok share"})," command."]}),"\n",(0,c.jsxs)(s.p,{children:["Using ",(0,c.jsx)(s.code,{children:"public"})," shares is easy and is accomplished using the ",(0,c.jsx)(s.code,{children:"zrok share public"})," command. Run ",(0,c.jsx)(s.code,{children:"zrok share public"})," to see the command-line help and to learn how to use ",(0,c.jsx)(s.code,{children:"public"})," shares."]}),"\n",(0,c.jsx)(s.h2,{id:"public-backend-modes",children:"Public Backend Modes"}),"\n",(0,c.jsxs)(s.p,{children:["The default backend mode is ",(0,c.jsx)(s.code,{children:"proxy"})," which targets an HTTP URL that must be reachable by the backend."]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",metastring:'title="proxy example"',children:"zrok share public 80\n"})}),"\n",(0,c.jsx)(o.Ay,{})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},1055:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/zrok_public_share-1eec22cb798395c2bcd3ac10465f62ca.png"},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>t});var n=r(6540);const c={},i=n.createContext(c);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);