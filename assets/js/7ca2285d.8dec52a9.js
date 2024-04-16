"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[810],{4458:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=a(5893),r=a(1151);const t={title:"Names"},o=void 0,i={id:"guides/feature-model/names",title:"Names",description:"Common names schema",source:"@site/docs/guides/feature-model/names.mdx",sourceDirName:"guides/feature-model",slug:"/guides/feature-model/names",permalink:"/guides/feature-model/names",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Names"},sidebar:"docs",previous:{title:"Overture Feature Model",permalink:"/guides/feature-model/"},next:{title:"Scoping Rules",permalink:"/guides/feature-model/scoping-rules"}},l={},c=[{value:"Common names schema",id:"common-names-schema",level:2},{value:"Primary",id:"primary",level:3},{value:"Variations",id:"variations",level:3},{value:"<code>common</code>",id:"common",level:4},{value:"<code>rules</code>",id:"rules",level:4}];function m(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"common-names-schema",children:"Common names schema"}),"\n",(0,s.jsx)(n.p,{children:"Named entities in Overture Map share a common name schema."}),"\n",(0,s.jsx)(n.h3,{id:"primary",children:"Primary"}),"\n",(0,s.jsxs)(n.p,{children:["If a feature has a name, expect the ",(0,s.jsx)(n.code,{children:"names"})," attribute to have at least one property: ",(0,s.jsx)(n.code,{children:"primary"}),'. This will always be populated with the localized name of a feature. Example: "Empire State Building" or "Eiffel Tower"']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"names:\n  primary: The White House\n"})}),"\n",(0,s.jsx)(n.h3,{id:"variations",children:"Variations"}),"\n",(0,s.jsx)(n.h4,{id:"common",children:(0,s.jsx)(n.code,{children:"common"})}),"\n",(0,s.jsx)(n.p,{children:"Common name variations are translations of a name."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"names:\n  common:\n    es: La Casa Blanca\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rules",children:(0,s.jsx)(n.code,{children:"rules"})}),"\n",(0,s.jsxs)(n.p,{children:["Additional variations such as ",(0,s.jsx)(n.em,{children:"official"}),", ",(0,s.jsx)(n.em,{children:"alternate"}),", or ",(0,s.jsx)(n.em,{children:"short"})," name variations exist as ",(0,s.jsx)(n.code,{children:"rules"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"names:\n  rules:\n    - variant: official\n      value: The White House\n    - variant: alternate\n      value: White House\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>o});var s=a(7294);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);