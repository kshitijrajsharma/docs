"use strict";(self.webpackChunkoverture_how_to=self.webpackChunkoverture_how_to||[]).push([[912],{7171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(5893),r=t(1151);const i={title:"Buildings in kepler.gl"},o=void 0,s={id:"exploring-data/kepler-gl",title:"Buildings in kepler.gl",description:"In this tutorial, you'll query Overture's buildings theme and extract data by bounding box for a region in Hyderabad, India. Next, you'll pull the extracted data into kepler.gl and style it lightly so that you can see which buildings came from OpenStreetMap and which ones came from Microsoft ML Buildings dataset.",source:"@site/docs/exploring-data/kepler-gl.mdx",sourceDirName:"exploring-data",slug:"/exploring-data/kepler-gl",permalink:"/how-to/exploring-data/kepler-gl",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Buildings in kepler.gl"},sidebar:"docs",previous:{title:"Exploring Overture Data",permalink:"/how-to/exploring-data/"},next:{title:"Community Projects",permalink:"/how-to/exploring-data/community-projects"}},l={},d=[{value:"Query the data in AWS Athena",id:"query-the-data-in-aws-athena",level:2},{value:"Query the data using DuckDB",id:"query-the-data-using-duckdb",level:2},{value:"Explore the data in kepler.gl",id:"explore-the-data-in-keplergl",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"In this tutorial, you'll query Overture's buildings theme and extract data by bounding box for a region in Hyderabad, India. Next, you'll pull the extracted data into kepler.gl and style it lightly so that you can see which buildings came from OpenStreetMap and which ones came from Microsoft ML Buildings dataset."}),"\n",(0,a.jsx)(n.p,{children:"Requirements: you'll need an AWS account and access to an S3 bucket if you want to use Athena. If you're using DuckDB (we recommend 0.10.0), you'll need to install and load the spatial and S3 or Azure extensions. You do not an account on kepler.gl."}),"\n",(0,a.jsx)(n.h2,{id:"query-the-data-in-aws-athena",children:"Query the data in AWS Athena"}),"\n",(0,a.jsxs)(n.p,{children:["Follow the ",(0,a.jsx)(n.a,{href:"./../../accessing-data/cloud-services",children:"instructions for running Overture's set-up queries"})," in Amazon Athena. Then you can run this in the Athena query console:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT id, theme, class, CAST(sources AS JSON) AS sources, sources[1].dataset AS primary_source, CAST(names AS JSON) AS names, ST_GeomFromBinary(geometry) AS geometry\nFROM overture\nWHERE theme='buildings'\n   AND type='building'\n   AND  bbox.minx > 78.4194\n       AND bbox.maxx < 78.5129\n       AND bbox.miny > 17.3427\n       AND bbox.maxy < 17.4192\n"})}),"\n",(0,a.jsx)(n.p,{children:"This outputs around 106,000 buildings in a table view that you can download as a CSV file."}),"\n",(0,a.jsx)(n.h2,{id:"query-the-data-using-duckdb",children:"Query the data using DuckDB"}),"\n",(0,a.jsx)(n.p,{children:"Here's a similar query in DuckDB's flavor of SQL that outputs a GeoJSON file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"COPY (\n    SELECT\n       id,\n       level,\n       height,\n       JSON(names) AS names,\n       JSON(sources) AS sources,\n       ST_GeomFromWkb(geometry) AS geometry\n    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=buildings/type=*/*', filename=true, hive_partitioning=1)\n    WHERE \n       bbox.minx > 78.4194\n       AND bbox.maxx < 78.5129\n       AND bbox.miny > 17.3427\n       AND bbox.maxy < 17.4192\n       )\n     TO 'buildings_hyderabad.geojson'\n     WITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326'); \n"})}),"\n",(0,a.jsx)(n.h2,{id:"explore-the-data-in-keplergl",children:"Explore the data in kepler.gl"}),"\n",(0,a.jsxs)(n.p,{children:["Drag and drop the CSV or GeoJSON file into ",(0,a.jsx)(n.a,{href:"https://kepler.gl/demo",children:"kepler.gl"}),". Style the feature layer by choosing different colors based on the ",(0,a.jsx)(n.code,{children:"primary_source"})," field. Then you can explore the data sources that Overture conflated to create the buildings theme."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"kepler.gl example",src:t(626).Z+"",width:"1279",height:"772"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"kepler.gl gif",src:t(5923).Z+"",width:"1270",height:"772"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},626:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/kepler-overture-hyderabad-075eda9a6f53b5239a586e34f2009db5.png"},5923:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/kepler_overture_buildings_hyderabad-48f61bd38da94df6776371f57ab63d03.gif"},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(7294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);