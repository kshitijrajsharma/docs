"use strict";(self.webpackChunkoverture_schema=self.webpackChunkoverture_schema||[]).push([[333],{3536:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>v,contentTitle:()=>m,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>x});var s=i(4848),t=i(8453),r=i(1432),o=i(7595),d=i.n(o),a=i(6770),l=i(8285);const h='---\n"$schema": https://json-schema.org/draft/2020-12/schema\ntitle: boundary\ndescription:\n  Boundaries represent borders between divisions of the same subtype.\n  Some boundaries may be disputed by the divisions on one or both sides.\ntype: object\nproperties:     # JSON Schema: Top-level object properties.\n  id: { "$ref": ../defs.yaml#/$defs/propertyDefinitions/id }\n  geometry:\n    description:\n      Boundary\'s geometry which MUST be a LineString as defined by the\n      GeoJSON schema.\n    unevaluatedProperties: false\n    oneOf:\n      - "$ref": https://geojson.org/schema/LineString.json\n  properties:   # GeoJSON: top-level object \'properties\' property.\n    unevaluatedProperties: false\n    required: [subtype, class, divisions]\n    allOf:\n      - "$ref": ../defs.yaml#/$defs/propertyContainers/overtureFeaturePropertiesContainer\n    properties: # JSON Schema: properties within GeoJSON top-level object \'properties\' property\n      subtype: { "$ref": "./defs.yaml#/$defs/typeDefinitions/placetype" }\n      class:\n        type: string\n        enum:\n          - land        # None of the boundary geometry extends beyond the\n                        # coastline of either associated division.\n\n          - maritime    # All the boundary geometry extends beyond the\n                        # coastline of both associated divisions.\n      divisions:\n        description:\n          The two divisions to the left and right, respectively, of the\n          boundary line, along with an indication of whether they dispute\n          the boundary. The left- and right-hand sides of the boundary are\n          considered from the perspective of a person standing on the\n          line facing in the direction in which the geometry is oriented,\n          i.e. facing toward the end of the line.\n          \n          The first array element represents the left division. The second\n          element represents the right division.\n        type: array\n        items: { "$ref": ./defs.yaml#/$defs/typeDefinitions/boundarySideDivision }\n        minItems: 2\n        maxItems: 2\n        uniqueItems: true\n',c='---\nid: example:boundary:land\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates: [[0, 1], [1, 2]]\nproperties:\n  theme: divisions\n  type: boundary\n  update_time: "2024-02-23T22:00:28Z"\n  version: 0\n  subtype: region\n  class: land\n  divisions:\n    - division_id: example:division:region:left\n    - division_id: example:division:region:right\n',u='---\nid: example:boundary:disputed_both\ntype: Feature\ngeometry:\n  type: LineString\n  coordinates: [[0, 1], [1, 2]]\nproperties:\n  theme: divisions\n  type: boundary\n  update_time: "2024-02-23T21:51:29Z"\n  version: 0\n  subtype: country\n  class: land\n  divisions:\n    - division_id: example:division:country:left\n      is_disputing: true\n    - division_id: example:division:country:right\n      is_disputing: true\n';var p=i(1470),y=i(9365);const f={title:"boundary"},m="Boundary",b={id:"reference/divisions/boundary",title:"boundary",description:"A boundary is a border between divisions.",source:"@site/docs/reference/divisions/boundary.mdx",sourceDirName:"reference/divisions",slug:"/reference/divisions/boundary",permalink:"/schema/reference/divisions/boundary",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"boundary"},sidebar:"docs",previous:{title:"building_part",permalink:"/schema/reference/buildings/building_part"},next:{title:"division",permalink:"/schema/reference/divisions/division"}},v={},x=[{value:"Schema",id:"schema",level:2},{value:"Examples",id:"examples",level:2}];function g(e){const n={a:"a",h1:"h1",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"boundary",children:"Boundary"}),"\n",(0,s.jsxs)(n.p,{children:["A boundary is a border between ",(0,s.jsx)(n.a,{href:"division",children:"divisions"}),"."]}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Geometry Type"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"LineString"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Theme"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"divisions"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("td",{children:(0,s.jsx)("code",{children:"boundary"})})]})]})}),"\n",(0,s.jsxs)(n.p,{children:["A boundary is typically an officially-defined border\nbetween two ",(0,s.jsx)(n.a,{href:"division",children:"divisions"}),". In light of\ngeopolitical issues, some boundaries represent standalone\ndisputed or treaty lines and therefore do not coincide with the border\nof a division."]}),"\n",(0,s.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,s.jsxs)(p.default,{children:[(0,s.jsx)(y.default,{value:"browsable",label:"Browsable",default:!0,children:(0,s.jsx)(d(),{schema:(0,l.A)(h),resolverOptions:(0,a.A)({remote:!0,yamlBasePath:"/divisions"})})}),(0,s.jsx)(y.default,{value:"yaml",label:"YAML",default:!0,children:(0,s.jsx)(r.default,{language:"jsx",children:h})})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(p.default,{children:[(0,s.jsx)(y.default,{value:"1",label:"Boundary",default:!0,children:(0,s.jsx)(r.default,{language:"json",children:JSON.stringify((0,l.A)(c),null,2)})}),(0,s.jsx)(y.default,{value:"2",label:"Disputed Boundary",default:!0,children:(0,s.jsx)(r.default,{language:"json",children:JSON.stringify((0,l.A)(u),null,2)})})]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}}}]);