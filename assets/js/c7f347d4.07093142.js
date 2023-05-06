"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[8749],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5570:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3,id:"apis",title:"Apis"},o=void 0,s={unversionedId:"backend/apis",id:"backend/apis",title:"Apis",description:"Postman apis (Advanced use)",source:"@site/docs/backend/apis.md",sourceDirName:"backend",slug:"/backend/apis",permalink:"/vchat-v2-docs/docs/backend/apis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/apis.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"apis",title:"Apis"},sidebar:"tutorialSidebar",previous:{title:"Backend installation",permalink:"/vchat-v2-docs/docs/backend/intro"},next:{title:"S3 policy",permalink:"/vchat-v2-docs/docs/backend/s3"}},l={},u=[{value:"Postman apis (Advanced use)",id:"postman-apis-advanced-use",level:2},{value:"some important notes",id:"some-important-notes",level:2},{value:"migrate old users",id:"migrate-old-users",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"postman-apis-advanced-use"},"Postman apis (Advanced use)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"this is ",(0,r.kt)("inlineCode",{parentName:"li"},"Advanced")," part you can ignore this part it unless you know to you do"),(0,r.kt)("li",{parentName:"ul"},"clone our postman collection from ",(0,r.kt)("a",{parentName:"li",href:"https://documenter.getpostman.com/view/24524392/2s93Jox6Dq"},"here")),(0,r.kt)("li",{parentName:"ul"},"all parameters all described there postman itself documents inside ",(0,r.kt)("inlineCode",{parentName:"li"},"v_chat_sdk_v2")," collection\n",(0,r.kt)("img",{alt:"IMAGE",src:a(2026).Z,width:"1031",height:"386"})),(0,r.kt)("li",{parentName:"ul"},"there are global environment in postman you need to update the ",(0,r.kt)("inlineCode",{parentName:"li"},"baseUrl")," to if development to ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost:3001/api/v2"),"\nupdate the ",(0,r.kt)("inlineCode",{parentName:"li"},"3001")," to your port see ",(0,r.kt)("inlineCode",{parentName:"li"},"IMAGE 1")),(0,r.kt)("li",{parentName:"ul"},"if production put the real server ip contact with the port and ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/v2")),(0,r.kt)("li",{parentName:"ul"},"usually you don't do anything with postman but for make sure the apis works correctly you need to test at lest one\nendpoint"),(0,r.kt)("li",{parentName:"ul"},"you need to update the postman v chat production env to your site configuration"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IMAGE 1"),(0,r.kt)("img",{alt:"IMAGE 1",src:a(897).Z,width:"1520",height:"545"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user1access")," user one access token to perform v chat actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseUrl")," the v chat base url"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rId")," current roomId"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mId")," current messageId"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"adminKeyVChat")," admin key to access the rooms data")),(0,r.kt)("h2",{id:"some-important-notes"},"some important notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"identifier")," it can be string only if number then call.toString() To establish a link communication between your\nsystem and v_chat, we use an intermediate called an\nidentifier. This identifier must be unique in your system, and we recommend using the user ",(0,r.kt)("inlineCode",{parentName:"li"},"ID")," in your database\nsystem\nas the identifier.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For example, when a user clicks on another user's name in v_chat, the default action is to open that user's page.\nHowever, this action should be handled outside of the v_chat scope, within your own system. To achieve this, we have\ncreated a callback function that passes the identifier to you, allowing you to handle the action of opening the peer\nuser's page and loading their data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"By using this identifier as the link between the two systems, you can seamlessly integrate the features of v_chat into\nyour own system and provide a smooth user experience for your users. If you have any questions or need further\nassistance with the integration process, please don't hesitate to contact us."))),(0,r.kt)("h2",{id:"migrate-old-users"},"migrate old users"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"there are plan to migrate your old users to v chat if you already do the chat in firebase then you can migrate or any\nplatform"),(0,r.kt)("li",{parentName:"ul"},"you need to export all users in phases and import all to the mongo db collection named users the json must be with\nthis format"),(0,r.kt)("li",{parentName:"ul"},"the system will migrate only after you restart the ",(0,r.kt)("inlineCode",{parentName:"li"},"node app")," make sure you restart the app after any migrations\nhappen")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "identifier": "YOUR STRING UNIQUE KEY FOR THIS USER THIS CAN BE THE ID IN YOUR DATABASE",\n    "fullName": "user chat name",\n    "userImages": {\n      "fullImage": "https://super-up-dev.s3.eu-west-3.amazonaws.com/default_user_image.png",\n      "chatImage": "https://super-up-dev.s3.eu-west-3.amazonaws.com/default_user_image.png",\n      "smallImage": "https://super-up-dev.s3.eu-west-3.amazonaws.com/default_user_image.png"\n    }\n  },\n  {\n    "identifier": "YOUR STRING UNIQUE KEY",\n    "fullName": "user chat name"\n  }\n]\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if you want to add user images add this add userImages key with the value with ",(0,r.kt)("inlineCode",{parentName:"li"},"full user image url")),(0,r.kt)("li",{parentName:"ul"},"if you dont have or want to use the default image then delete the userImages key"),(0,r.kt)("li",{parentName:"ul"},"don't worry if you enter the same user twice v_chat will ignore it for you"),(0,r.kt)("li",{parentName:"ul"},"if in your system have one user image you can put it as same for all ",(0,r.kt)("inlineCode",{parentName:"li"},"fullImage")," , ",(0,r.kt)("inlineCode",{parentName:"li"},"chatImage")," , ",(0,r.kt)("inlineCode",{parentName:"li"},'"smallImage"'))))}c.isMDXComponent=!0},2026:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman_docs-68fa6911a6775d60a3c96fe39dd149b2.png"},897:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/postman_env-552f5ea5fb54c58739243831bd20dfcc.png"}}]);