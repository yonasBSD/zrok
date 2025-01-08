"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3786],{6143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>w,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"guides/install/windows","title":"Install zrok in Windows","description":"Windows Binary","source":"@site/../docs/guides/install/windows.mdx","sourceDirName":"guides/install","slug":"/guides/install/windows","permalink":"/docs/guides/install/windows","draft":false,"unlisted":false,"editUrl":"https://github.com/openziti/zrok/blob/main/docs/../docs/guides/install/windows.mdx","tags":[],"version":"current","frontMatter":{"title":"Install zrok in Windows","sidebar_label":"Windows"},"sidebar":"tutorialSidebar","previous":{"title":"macOS","permalink":"/docs/guides/install/macos"},"next":{"title":"frontdoor","permalink":"/docs/guides/frontdoor"}}');var r=t(4848),o=t(8453),i=t(8151),a=t(595),l=t(1342);const d={title:"Install zrok in Windows",sidebar_label:"Windows"},c=void 0,u={},h=[{value:"Windows Binary",id:"windows-binary",level:2},{value:"Wintun for zrok VPN",id:"wintun-for-zrok-vpn",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"windows-binary",children:"Windows Binary"}),"\n",(0,r.jsx)(i.F,{children:(0,r.jsx)("div",{className:l.A.downloadContainer,children:(0,r.jsx)(a.A,{osName:"Windows",osLogo:"/img/logo-windows.svg"})})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["In PowerShell, install in ",(0,r.jsx)(n.code,{children:"%USERPROFILE%\\bin\\zrok.exe"})," and set the search path."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:'$binDir = Join-Path -Path $env:USERPROFILE -ChildPath "bin"\nNew-Item -Path $binDir -ItemType Directory -ErrorAction SilentlyContinue\n$latest = Get-ChildItem -Path .\\zrok*windows*.tar.gz | Sort-Object LastWriteTime | Select-Object -Last 1\ntar -xf $latest.FullName -C $binDir zrok.exe\n$currentPath = [System.Environment]::GetEnvironmentVariable(\'PATH\', [System.EnvironmentVariableTarget]::User)\nif ($currentPath -notlike "*$binDir*") {\n    $newPath = "$currentPath;$binDir"\n    [System.Environment]::SetEnvironmentVariable(\'PATH\', $newPath, [System.EnvironmentVariableTarget]::User)\n    $env:Path = $newPath\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["With the ",(0,r.jsx)(n.code,{children:"zrok"})," executable in your path, you can then execute the ",(0,r.jsx)(n.code,{children:"zrok"})," directly."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"zrok version\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-buttonless",metastring:'title="Output"',children:"\n _____ __ ___ | | __\n|_  / '__/ _ \\| |/ /\n / /| | | (_) |   <\n/___|_|  \\___/|_|\\_\\\n\nv0.4.0 [c889005]\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"wintun-for-zrok-vpn",children:"Wintun for zrok VPN"}),"\n",(0,r.jsxs)(n.p,{children:["On Windows, you must install Wintun to use zrok's VPN backend mode. See the ",(0,r.jsx)(n.a,{href:"/docs/guides/vpn/",children:"VPN guide"})," for more details."]})]})}function w(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},8151:(e,n,t)=>{t.d(n,{F:()=>a,d:()=>i});var s=t(6540),r=t(4848);const o=(0,s.createContext)([]),i=()=>(0,s.useContext)(o),a=e=>{let{children:n}=e;const[t,i]=(0,s.useState)([]);return(0,s.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.github.com/repos/openziti/zrok/releases/latest");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const n=(await e.json()).assets.map((e=>({name:e.name,url:e.browser_download_url,arch:e.name.replace(".tar.gz","").split("_")[3]})));console.log("Fetched assets:",n),i(n)}catch(e){console.error("Error fetching the release assets:",e)}})()}),[]),(0,r.jsx)(o.Provider,{value:t,children:n})}},595:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var s=t(8151),r=t(1342),o=t(5293),i=t(4848);const a=e=>{switch(e){case"amd64":return"x86_64";case"arm64":return"ARM64";case"armv7":return"ARM";default:return e.toUpperCase()}},l=e=>{let{osName:n,osLogo:t,infoText:l,guideLink:d}=e;const{colorMode:c}=(0,o.G)(),u=(0,s.d)();console.log("Assets in DownloadCard:",u);const h=(e=>{switch(e){case"Windows":return"windows";case"macOS":return"darwin";case"Linux":return"linux";default:return""}})(n),m=u.filter((e=>e.name.includes(h)));return console.log("Filtered assets for",n,"in DownloadCard:",m),(0,i.jsxs)("div",{className:r.A.downloadCard,children:[(0,i.jsx)("div",{className:r.A.imgContainer,children:(0,i.jsx)("img",{src:t,alt:`${n} logo`})}),(0,i.jsx)("h3",{children:n}),m.length>0&&(0,i.jsx)("ul",{children:m.map(((e,n)=>(0,i.jsx)("li",{className:r.A.downloadButtons,children:(0,i.jsx)("a",{href:e.url,className:r.A.downloadLinks,children:a(e.arch)})},n)))}),d&&(0,i.jsxs)("div",{className:r.A.cardFooter,children:[(0,i.jsx)("p",{children:l}),(0,i.jsx)("a",{href:d,children:"GUIDE"}),(0,i.jsx)("p",{})]})]})}},1342:(e,n,t)=>{t.d(n,{A:()=>s});const s={downloadContainer:"downloadContainer_nNgj",downloadCard:"downloadCard_D_EY",cardFooter:"cardFooter_Rhom",downloadButtons:"downloadButtons_NPAP",downloadLinks:"downloadLinks_thSu",imgContainer:"imgContainer_r0QA"}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);