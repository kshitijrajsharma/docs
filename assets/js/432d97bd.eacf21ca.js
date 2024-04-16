"use strict";(self.webpackChunkoverture_documentation=self.webpackChunkoverture_documentation||[]).push([[944],{9313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var s=r(5893),a=r(1151),o=r(8859);const n={title:"Getting Data"},l=void 0,i={id:"getting-data/index",title:"Getting Data",description:"Overture Maps data release",source:"@site/docs/getting-data/index.mdx",sourceDirName:"getting-data",slug:"/getting-data/",permalink:"/getting-data/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Getting Data"},sidebar:"docs",previous:{title:"Introduction",permalink:"/"},next:{title:"Cloud Services",permalink:"/getting-data/cloud-services"}},c={},d=[{value:"Overture Maps data release",id:"overture-maps-data-release",level:2},{value:"Accessing in the cloud",id:"accessing-in-the-cloud",level:2},{value:"Direct download",id:"direct-download",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overture-maps-data-release",children:"Overture Maps data release"}),"\n",(0,s.jsx)(t.p,{children:"Overture Maps data is distributed as GeoParquet files available on both Amazon S3 and Microsoft Azure Blob Storage. You do not need AWS or Azure accounts to access the data."}),"\n",(0,s.jsx)(t.p,{children:"The data is available at the following locations:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Provider"}),(0,s.jsx)(t.th,{children:"Location"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Amazon S3"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"s3://overturemaps-us-west-2/release/"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Azure Blob Storage"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"https://overturemapswestus2.blob.core.windows.net/release/"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The latest release path is:"}),"\n",(0,s.jsx)(o.Z,{query:"__OVERTURE_RELEASE/",language:"text"}),"\n",(0,s.jsxs)(t.p,{children:["We ",(0,s.jsx)(t.em,{children:"strongly recommend"})," accessing the data in the cloud by querying it either ",(0,s.jsx)(t.a,{href:"locally",children:"locally"})," or via ",(0,s.jsx)(t.a,{href:"cloud-services",children:"cloud services"}),". This allows you to download only the subset of data you want:"]}),"\n",(0,s.jsx)(t.h2,{id:"accessing-in-the-cloud",children:"Accessing in the cloud"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"locally",children:"DuckDB (local)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"cloud-services/#amazon-athena-aws",children:"Amazon Athena"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"cloud-services/#microsft-synapse-azure",children:"Microsoft Synapse"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"However, it is also possible to download the geoparquet files directly:"}),"\n",(0,s.jsx)(t.h2,{id:"direct-download",children:"Direct download"}),"\n",(0,s.jsxs)(t.p,{children:["You can download the Parquet files directly from either Azure Blob Storage or Amazon S3 at the locations given above. ",(0,s.jsx)(t.strong,{children:"Note: the total size of all the files is over 200 GB."})]}),"\n",(0,s.jsxs)(t.p,{children:["After installing the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS CLI"}),", you can download the files from S3 using the below command. Set ",(0,s.jsx)(t.code,{children:"<DESTINATION>"})," to a local directory path to download the files, or to an ",(0,s.jsx)(t.code,{children:"s3://"})," path you control to copy them into your S3 bucket."]}),"\n",(0,s.jsx)(o.Z,{query:"aws s3 cp --region us-west-2 --no-sign-request --recursive s3://overturemaps-us-west-2/release/__OVERTURE_RELEASE/ <DESTINATION>",language:"text"}),"\n",(0,s.jsxs)(t.p,{children:["You can download the files from Azure Blob Storage using ",(0,s.jsx)(t.a,{href:"https://azure.microsoft.com/en-us/products/storage/storage-explorer/",children:"Azure Storage Explorer"})," or the ",(0,s.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&bc=%2Fazure%2Fstorage%2Fblobs%2Fbreadcrumb%2Ftoc.json#download-azcopy",children:"AzCopy"})," command. An example ",(0,s.jsx)(t.code,{children:"azcopy"})," command is given below."]}),"\n",(0,s.jsx)(o.Z,{query:'azcopy copy "https://overturemapswestus2.dfs.core.windows.net/release/__OVERTURE_RELEASE/" "<<local directory path>>"  --recursive',language:"text"})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8859:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(9286),a=r(2263),o=r(5893);function n(e){const{siteConfig:{customFields:t}}=(0,a.Z)();var r=e.query.replace("__OVERTURE_RELEASE",t.overtureRelease);r=r.replace("__ATHENA_OVERTURE_RELEASE","v"+t.overtureRelease.replaceAll(".","_").replaceAll("-","_"));var n=e.language||"sql";return(0,o.jsx)(s.Z,{language:n,title:e.title,children:r})}}}]);