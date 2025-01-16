"use strict";(self.webpackChunkvckit_documentation=self.webpackChunkvckit_documentation||[]).push([[833],{2056:(e,n,t)=>{t.d(n,{Ay:()=>o});var i=t(4848),r=t(8453);function s(e){const n={admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},3625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(4848),r=t(8453),s=t(2056);const o={},l="Credential OpenAttestation Plugin",a={id:"vckit-plugins/credential-oa",title:"Credential OpenAttestation Plugin",description:"- This plugin is used for issuing and verifying verifiable credential that adhere to OpenAttestation framework",source:"@site/docs/vckit-plugins/credential-oa.md",sourceDirName:"vckit-plugins",slug:"/vckit-plugins/credential-oa",permalink:"/docs/next/vckit-plugins/credential-oa",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/project-vckit/tree/main/docs/vckit-plugins/credential-oa.md",tags:[],version:"current",frontMatter:{},sidebar:"getStartedSideBar",previous:{title:"Credential Merkle Disclosure Proof",permalink:"/docs/next/vckit-plugins/credential-merkle-disclosure-proof"},next:{title:"Credential Router",permalink:"/docs/next/vckit-plugins/credential-router"}},c={},d=[{value:"Usage",id:"usage",level:2}];function u(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"credential-openattestation-plugin",children:"Credential OpenAttestation Plugin"}),"\n",(0,i.jsx)(s.Ay,{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This plugin is used for issuing and verifying verifiable credential that adhere to OpenAttestation framework"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add the plugin to your ",(0,i.jsx)(n.code,{children:"agent.yml"})," file"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"\n///... other declarations\n# Agent\nagent:\n  $require: '@veramo/core#Agent'\n  $args:\n    - schemaValidation: false\n      plugins:\n        /// ... other declarations\n        - $require: '@vckit/credential-oa#CredentialOA'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"And export the functions of the plugin to be used in the application"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- createVerifiableCredentialOA\n- verifyCredentialOA\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the CLI to quickly issue a credential"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm vckit credentialOA create\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": The credential OA plugin only supports issuing by DID ethr. You can use the ",(0,i.jsx)(n.code,{children:"@veramo/did-manager"})," plugin that should be configured in the ",(0,i.jsx)(n.code,{children:"agent.yml"})," file to create a DID ethr."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);