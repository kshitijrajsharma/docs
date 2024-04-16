"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[633],{1747:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=s(5893),r=s(1151);const a={title:"Admins"},t=void 0,o={id:"guides/admins",title:"Admins",description:"Overture Maps has announced the deprecation of the admins schema. We are replacing it with the new divisions schema, released in April 2024. The data for divisions will be available in the May 2024 release. The schema and the data for the two themes will coexist in the June and July releases. In the August 2024 release, admins will be removed from Overture Maps. We encourage you to begin the transition to divisions now.",source:"@site/docs/guides/admins.mdx",sourceDirName:"guides",slug:"/guides/admins",permalink:"/guides/admins",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Admins"},sidebar:"docs",previous:{title:"Buildings",permalink:"/guides/buildings"},next:{title:"Divisions",permalink:"/guides/divisions"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Key schema design choices",id:"key-schema-design-choices",level:2},{value:"Admin feature types",id:"admin-feature-types",level:2},{value:"Schema reference",id:"schema-reference",level:2}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Overture Maps ",(0,n.jsx)(i.a,{href:"/release-notes/",children:"has announced"})," the deprecation of the ",(0,n.jsx)(i.code,{children:"admins"})," schema. We are replacing it with the new ",(0,n.jsx)(i.code,{children:"divisions"})," schema, released in April 2024. The data for ",(0,n.jsx)(i.code,{children:"divisions"})," will be available in the May 2024 release. The schema ",(0,n.jsx)(i.em,{children:"and"})," the data for the two themes will coexist in the June and July releases. In the August 2024 release, ",(0,n.jsx)(i.code,{children:"admins"})," will be removed from Overture Maps. We encourage you to begin the transition to ",(0,n.jsx)(i.code,{children:"divisions"})," now."]})}),"\n",(0,n.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(i.p,{children:["The features in the Overture Maps ",(0,n.jsx)(i.code,{children:"admins"})," theme describe named localities in the real world including settlements, cities, regions, provinces, and countries. The ",(0,n.jsx)(i.code,{children:"admins"})," schema does not support the modeling of multiple geo-political views."]}),"\n",(0,n.jsx)(i.h2,{id:"key-schema-design-choices",children:"Key schema design choices"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Clear country definitions."})," There are no gaps or overlaps at the country level ",(0,n.jsx)(i.code,{children:"admin_level=1"})," in order to support visualization, sectioning, and other mapping use cases, even in cases of disputed boundaries. Additionally, all countries have been assigned an ",(0,n.jsx)(i.a,{href:"https://www.iso.org/iso-3166-country-codes.html",children:"ISO-3166-1"})," alpha-2 ISO country code. For some disputed areas and remote overseas territories, we have created custom ISO codes."]}),"\n",(0,n.jsx)(i.h2,{id:"admin-feature-types",children:"Admin feature types"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://docs.overturemaps.org/schema/reference/admins/locality",children:"locality"})," describes a named and typically populated place. There are two sub-types:","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"administrative localities model countries and their hierarchical subdivisions. Each administrative locality has an administrative level indicating its level within a country. Attributes like driving side and default language are also available."}),"\n",(0,n.jsx)(i.li,{children:"named localities model named places that are not part of a countries administrative hierarchy."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://docs.overturemaps.org/schema/reference/admins/locality-area",children:"locality area"})," adds land or maritime polygons to ",(0,n.jsx)(i.a,{href:"https://docs.overturemaps.org/schema/reference/admins/locality",children:"locality"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://docs.overturemaps.org/schema/reference/admins/administrative-boundary",children:"administrative boundary"})," provides a boundary line of administrative localities. This feature allows for an easy display of country borders and administrative subdivisions within countries. Boundaries shared by different administrative localities are represented by one line. A maritime attribute supports filtering on boundaries located within seas or oceans."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"schema-reference",children:"Schema reference"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://docs.overturemaps.org/schema/reference/admins/administrative-boundary",children:"Explore the schema reference for administrative boundaries"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://docs.overturemaps.org/schema/reference/admins/locality",children:"Explore the schema reference for the locality feature type"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"https://docs.overturemaps.org/schema/reference/admins/locality-area",children:"Explore the schema reference for the locality area feature type"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>o,a:()=>t});var n=s(7294);const r={},a=n.createContext(r);function t(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);