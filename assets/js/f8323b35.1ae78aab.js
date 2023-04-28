"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4,id:"s3",title:"S3 policy"},o=void 0,c={unversionedId:"backend/s3",id:"backend/s3",title:"S3 policy",description:"- after create new account in aws and create the bucket like this Video",source:"@site/docs/backend/s3.md",sourceDirName:"backend",slug:"/backend/s3",permalink:"/vchat-v2-docs/docs/backend/s3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/s3.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"s3",title:"S3 policy"},sidebar:"tutorialSidebar",previous:{title:"Apis",permalink:"/vchat-v2-docs/docs/backend/apis"},next:{title:"Socket events",permalink:"/vchat-v2-docs/docs/backend/socket.io"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"after create new account in aws and create the bucket like this ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NZElg91l_ms&t=585s"},"Video")," "),(0,a.kt)("li",{parentName:"ul"},"select the bucket and make it ",(0,a.kt)("inlineCode",{parentName:"li"},"public")," don't worry we will set ",(0,a.kt)("inlineCode",{parentName:"li"},"polity"),(0,a.kt)("img",{src:n(3519).Z,width:"850",height:"712"})," "),(0,a.kt)("li",{parentName:"ul"},"uncheck all and save"),(0,a.kt)("li",{parentName:"ul"},"then scroll down and update ",(0,a.kt)("inlineCode",{parentName:"li"},"Bucket policy")," set it ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "AddPerm",\n            "Effect": "Allow",\n            "Principal": "*",\n            "Action": "s3:GetObject",\n            "Resource": "arn:aws:s3:::BUCKET_NAME/v-public/*"\n        }\n    ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3262).Z,width:"611",height:"475"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"update ",(0,a.kt)("inlineCode",{parentName:"li"},"BUCKET_NAME")," to your BUCKET_NAME and save this will only make ",(0,a.kt)("inlineCode",{parentName:"li"},"v-public")," folder is public only"),(0,a.kt)("li",{parentName:"ul"},"scroll down again until see ",(0,a.kt)("inlineCode",{parentName:"li"},"Cross-origin resource sharing (CORS)")),(0,a.kt)("li",{parentName:"ul"},"update value to ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "AllowedHeaders": [\n            "*"\n        ],\n        "AllowedMethods": [\n            "GET",\n            "PUT",\n            "POST",\n            "DELETE"\n        ],\n        "AllowedOrigins": [\n            "*"\n        ],\n        "ExposeHeaders": [\n            "x-amz-server-side-encryption",\n            "x-amz-request-id",\n            "x-amz-id-2"\n        ],\n        "MaxAgeSeconds": 3000\n    }\n]\n')))}d.isMDXComponent=!0},3519:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_1-8409257c59c4b18c87a5f747ef1440f4.png"},3262:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/s3_2-6feea331603e995150a8c17750d13612.png"}}]);