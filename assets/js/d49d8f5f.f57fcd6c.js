"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[45],{1705:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=s(5893),n=s(1151);const a={title:"Base"},i=void 0,c={id:"guides/base",title:"Base",description:"Overview",source:"@site/docs/guides/base.mdx",sourceDirName:"guides",slug:"/guides/base",permalink:"/guides/base",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Base"},sidebar:"docs",previous:{title:"Divisions",permalink:"/guides/divisions"},next:{title:"Transportation",permalink:"/guides/transportation/"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Schema design choices",id:"schema-design-choices",level:2},{value:"Current feature types",id:"current-feature-types",level:2},{value:"Schema reference",id:"schema-reference",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(r.p,{children:["The Overture Maps ",(0,t.jsx)(r.code,{children:"base"})," theme provides the land and water features that are necessary to render a complete basemap. These features are currently derived from the ",(0,t.jsx)(r.a,{href:"https://daylightmap.org/earth/",children:"Daylight Earth Tables"})," schema and include the ",(0,t.jsx)(r.a,{href:"https://daylightmap.org/coastlines.html",children:"Daylight Coastlines"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"schema-design-choices",children:"Schema design choices"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["basic classification of features into ",(0,t.jsx)(r.code,{children:"type"}),", ",(0,t.jsx)(r.code,{children:"subtype"})," and ",(0,t.jsx)(r.code,{children:"class"})," where appropriate."]}),"\n",(0,t.jsxs)(r.li,{children:["parsing and normalization of common OSM tags, such as ",(0,t.jsx)(r.code,{children:"height"})," and ",(0,t.jsx)(r.code,{children:"ele"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["extraction of consistent OSM tags, such as ",(0,t.jsx)(r.code,{children:"wikidata"})," to top-level properties."]}),"\n",(0,t.jsx)(r.li,{children:"direct pass-through of remaining relevant OSM tags."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"current-feature-types",children:"Current feature types"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/infrastructure",children:"infrastructure"}),": Infrastructure features such as communication towers and lines, piers, and bridges."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/land",children:"land"}),": physical representations of land surfaces. Global land derived from the inverse of OSM Coastlines. Translates ",(0,t.jsx)(r.code,{children:"natural"})," tags from OpenStreetMap."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/land-use",children:"land_use"}),": classifications of the human use of a section of land. Translates ",(0,t.jsx)(r.code,{children:"landuse"})," from OpenStreetMap tag from OpenStreetMap."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.overturemaps.org/reference/schema/base/water",children:"water"}),": physical representations of inland and ocean marine surfaces. Translates ",(0,t.jsx)(r.code,{children:"natural"})," and ",(0,t.jsx)(r.code,{children:"waterway"})," tags from OpenStreetMap."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"schema-reference",children:"Schema reference"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/infrastructure",children:"Explore the schema for the infrastructure feature type"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/land",children:"Explore the schema for the land feature type"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/land-use",children:"Explore the schema for the land use feature type"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://docs.overturemaps.org/schema/reference/base/water",children:"Explore the schema for the water feature type"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>i});var t=s(7294);const n={},a=t.createContext(n);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);