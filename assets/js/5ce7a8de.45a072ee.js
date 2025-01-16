"use strict";(self.webpackChunkvckit_documentation=self.webpackChunkvckit_documentation||[]).push([[7230],{2056:(e,t,n)=>{n.d(t,{Ay:()=>s});var i=n(4848),r=n(8453);function o(e){const t={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function s(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},5780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(4848),r=n(8453),o=n(2056);const s={},a="Credential Router",c={id:"vckit-plugins/credential-router",title:"Credential Router",description:"This plugin is used to route for issuing and verifying verifiable credential that will navigate to the correct plugin based on the proof format of the credential.",source:"@site/docs/vckit-plugins/credential-router.md",sourceDirName:"vckit-plugins",slug:"/vckit-plugins/credential-router",permalink:"/docs/next/vckit-plugins/credential-router",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/project-vckit/tree/main/docs/vckit-plugins/credential-router.md",tags:[],version:"current",frontMatter:{},sidebar:"getStartedSideBar",previous:{title:"Credential OpenAttestation Plugin",permalink:"/docs/next/vckit-plugins/credential-oa"},next:{title:"Encrypted Storage",permalink:"/docs/next/vckit-plugins/encrypted-storage"}},l={},d=[{value:"Usage",id:"usage",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"credential-router",children:"Credential Router"}),"\n",(0,i.jsx)(o.Ay,{}),"\n",(0,i.jsx)(t.p,{children:"This plugin is used to route for issuing and verifying verifiable credential that will navigate to the correct plugin based on the proof format of the credential."}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Add this declaration to ",(0,i.jsx)(t.code,{children:"agent.yml"})," config file"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"# Agent\nagent:\n  $require: '@veramo/core#Agent'\n  $args:\n    - schemaValidation: false\n      plugins:\n        - $require: '@vckit/credential-router#CredentialRouter'\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"And export the functions of the plugin to be used in the application"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"- routeCreationVerifiableCredential\n- routeVerificationCredential\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);