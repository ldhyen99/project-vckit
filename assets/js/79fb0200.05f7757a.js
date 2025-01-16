"use strict";(self.webpackChunkvckit_documentation=self.webpackChunkvckit_documentation||[]).push([[9769],{6961:(e,n,t)=>{t.d(n,{Ay:()=>a});var i=t(4848),s=t(8453);function r(e){const n={admonition:"admonition",p:"p",...(0,s.R)(),...e.components};return(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Please note that this content is under development and is not ready for implementation. This status message will be updated as content development progresses."})})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},4920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(4848),s=t(8453),r=t(6961);const a={sidebar_label:"Installation",sidebar_position:1},o="Installation",l={id:"get-started/api-server-get-started/installation",title:"Installation",description:"Prerequisites",source:"@site/versioned_docs/version-1.0.0/get-started/api-server-get-started/installation.md",sourceDirName:"get-started/api-server-get-started",slug:"/get-started/api-server-get-started/installation",permalink:"/docs/get-started/api-server-get-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/uncefact/project-vckit/tree/main/versioned_docs/version-1.0.0/get-started/api-server-get-started/installation.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_label:"Installation",sidebar_position:1},sidebar:"getStartedSideBar",previous:{title:"API Server",permalink:"/docs/category/api-server"},next:{title:"Basic Operations",permalink:"/docs/get-started/api-server-get-started/basic-operations"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone VCkit from github",id:"clone-vckit-from-github",level:2},{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Initialize the agent configuration",id:"initialize-the-agent-configuration",level:2},{value:"Optional: Configure the agent",id:"optional-configure-the-agent",level:2},{value:"Key Type",id:"key-type",level:3},{value:"Usage",id:"usage",level:3},{value:"Start the local server",id:"start-the-local-server",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(r.Ay,{}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js"})," version 20.12.2"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://pnpm.io/",children:"pnpm"})," version 8.14.1"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://yarnpkg.com/",children:"yarn"})," version 1.22.22"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Notice"}),": You should install the pnpm package manager globally on your machine by using the npm package manager. You can install pnpm by running the following command: ",(0,i.jsx)(n.code,{children:"npm install -g pnpm@8.14.1"}),". Using ",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/corepack.html",children:"Corepack"})," to install pnpm that will have some conflicts with the project dependencies that are using yarn package manager to install and build."]})}),"\n",(0,i.jsx)(n.p,{children:"This project has been tested and optimized for Node.js version v20.12.2 and pnpm version 8.14.1. Please note that using a Node.js version later than v20.12.2 may result incorrect functionality and potential bugs. It is strongly recommended to use these specific versions for running and testing the project. Deviating from these versions may result in unforeseen compatibility issues or unexpected behavior."}),"\n",(0,i.jsx)(n.h2,{id:"clone-vckit-from-github",children:"Clone VCkit from github"}),"\n",(0,i.jsx)(n.p,{children:"Let's start by cloning the VCkit repository at the URL below."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"https://github.com/uncefact/project-vckit.git\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Let's install the dependencies of this project by running this command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd project-vckit & pnpm install\n"})}),"\n",(0,i.jsx)(n.p,{children:"...then run this command to build the project"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm build\n"})}),"\n",(0,i.jsx)(n.h2,{id:"initialize-the-agent-configuration",children:"Initialize the agent configuration"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To understand more about the agent file structure and how to config it, read ",(0,i.jsx)(n.a,{href:"/docs/agent-configuration/config-agent-file",children:"here"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"pnpm vckit config"})," command will create a ",(0,i.jsx)(n.code,{children:"agent.yml"})," file in the root of the project. This file contains the configuration for the Veramo agent. You can edit this file to configure the agent to your needs. The default configuration is sufficient to get started."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm vckit config\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After run this command, you will have an ",(0,i.jsx)(n.code,{children:"agent.yml"})," file in your root directory."]}),"\n",(0,i.jsx)(n.h2,{id:"optional-configure-the-agent",children:"Optional: Configure the agent"}),"\n",(0,i.jsxs)(n.p,{children:["You can configure the agent by editing the ",(0,i.jsx)(n.code,{children:"agent.yml"})," file in the root of the project. You can change the ",(0,i.jsx)(n.code,{children:"infuraProjectId"})," and ",(0,i.jsx)(n.code,{children:"dbEncryptionKey"})," to your own values."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently, the ",(0,i.jsx)(n.code,{children:"infuraProjectId"})," and ",(0,i.jsx)(n.code,{children:"dbEncryptionKey"})," are set to the default values. That mean you can use the default values to run the project. However, it is recommended to change the default values to your own values."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Infura Project ID"})}),"\n",(0,i.jsxs)(n.p,{children:["To create your own Infura Project ID, visit ",(0,i.jsx)(n.a,{href:"https://www.infura.io",children:"https://www.infura.io"})," and follow the instruction."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Database Encryption Key"})}),"\n",(0,i.jsx)(n.p,{children:"The Database Encryption Key is used to encrypt private key material while at rest or in memory. This ensures that sensitive data is protected even if the storage medium is compromised."}),"\n",(0,i.jsx)(n.h3,{id:"key-type",children:"Key Type"}),"\n",(0,i.jsx)(n.p,{children:"This key type is an X25519 key."}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you want to generate a new key, you can use the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm vckit config gen-key\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result for example:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"X25519 raw private key (hex encoded):\n4ae7b7d37d82998a759c5d6241e602de5784a05c11be3812c3d31cb854e9be21\nYou can use this key with @veramo/kms-local#SecretBox or replace the default agent.yml 'dbEncryptionKey' constant"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Update the ",(0,i.jsx)(n.code,{children:"dbEncryptionKey"})," in the ",(0,i.jsx)(n.code,{children:"agent.yml"})," file with the generated key."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"dbEncryptionKey: 4ae7b7d37d82998a759c5d6241e602de5784a05c11be3812c3d31cb854e9be21\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"WARNING"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"dbEncryptionKey"})," is a sensitive value. Do not share it with anyone. If you lose the key, you will not be able to decrypt the data stored in the database."]}),"\n",(0,i.jsx)(n.li,{children:"In a production environment, please do not use the default key in a production environment."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"start-the-local-server",children:"Start the local server"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm vckit server\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now you can check the api documentation at ",(0,i.jsx)(n.a,{href:"http://localhost:3332/api-docs",children:"http://localhost:3332/api-docs"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);