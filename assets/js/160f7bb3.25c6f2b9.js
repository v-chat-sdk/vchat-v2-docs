"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||i;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1,id:"intro",title:"Backend installation"},r=void 0,l={unversionedId:"backend/intro",id:"backend/intro",title:"Backend installation",description:"Requirements for local & production",source:"@site/docs/backend/intro.md",sourceDirName:"backend",slug:"/backend/intro",permalink:"/vchat-v2-docs/docs/backend/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",title:"Backend installation"},sidebar:"tutorialSidebar",previous:{title:"vchat-sdk-V2",permalink:"/vchat-v2-docs/docs/intro"},next:{title:"Apis",permalink:"/vchat-v2-docs/docs/backend/apis"}},p={},s=[{value:"Requirements for local &amp; production",id:"requirements-for-local--production",level:2},{value:".env files",id:"env-files",level:2},{value:"How to get <code>firebase.adminsdk.json</code>",id:"how-to-get-firebaseadminsdkjson",level:3},{value:"How to onesignalKeys",id:"how-to-onesignalkeys",level:3},{value:"run the code",id:"run-the-code",level:3},{value:"Docker ready",id:"docker-ready",level:3},{value:"information&#39;s",id:"informations",level:3},{value:"some errors may happen",id:"some-errors-may-happen",level:3},{value:"Still need more support",id:"still-need-more-support",level:3}],m={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"requirements-for-local--production"},"Requirements for local & production"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"install nodejs and npm and check the versions you should have node version above v16 check node version by ",(0,o.kt)("inlineCode",{parentName:"li"},"node -v")),(0,o.kt)("li",{parentName:"ol"},"install cross-env globally ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i -g cross-env")," for manage to set the production or development env\n& ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install -g @nestjs/cli")," for build for nestjs"),(0,o.kt)("li",{parentName:"ol"},"install ",(0,o.kt)("a",{parentName:"li",href:"https://redis.io"},"Redis")," this used for socket.io connection for cluster mode support"),(0,o.kt)("li",{parentName:"ol"},"install ",(0,o.kt)("a",{parentName:"li",href:"https://www.mongodb.com/try/download/community-kubernetes-operator"},"mongodb")," mim v4.4 or above v6 is\nrecommended"),(0,o.kt)("li",{parentName:"ol"},"create aws account and register new S3 bucket make sure to have this data")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Follow this video for more info ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NZElg91l_ms&t=585s"},"Link")),(0,o.kt)("li",{parentName:"ul"},"update this values inside the .env.*")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'S3_ACCESS_KEY_ID="AKIA--------"'),(0,o.kt)("li",{parentName:"ol"},'S3_SECRET_KEY="ax2nDid-------"'),(0,o.kt)("li",{parentName:"ol"},'BUCKET_REGION="eu------"'),(0,o.kt)("li",{parentName:"ol"},'BUCKET="-------"')),(0,o.kt)("h2",{id:"env-files"},".env files"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You have ",(0,o.kt)("strong",{parentName:"li"},".env.development")," and ",(0,o.kt)("strong",{parentName:"li"},".env.production")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".env.development")," put the data of development in this file"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},".env.production")," put the data of production in this file")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DB_URL"),'="mongodb://127.0.0.1:27017/v_chat_sdk_v2" ',(0,o.kt)("strong",{parentName:"p"},"mongo db full url"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"JWT_SECRET"),'="a%dyFjcZp*xL$Qbek" ',(0,o.kt)("strong",{parentName:"p"},"very storage password"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"REDIS_URL"),'="redis://localhost:6379" put the url of your ',(0,o.kt)("strong",{parentName:"p"},"REDIS")," server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"issuer"),'="',(0,o.kt)("a",{parentName:"p",href:"mailto:v_chat_sdk_v2@gmail.com"},"v_chat_sdk_v2@gmail.com"),'"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"audience"),'="chat.vchatsdk.com"'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"encryptHashKey"),'="V_CHAT_SDK_V2_VERY_STRONG_KEY" very storage password this ',(0,o.kt)("inlineCode",{parentName:"li"},"must")," be same as\nflutter ",(0,o.kt)("inlineCode",{parentName:"li"},"encryptHashKey")," this key ",(0,o.kt)("inlineCode",{parentName:"li"},"not changeable")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"isOneSignalEnabled"),' ="true" if you support onesignal')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"isFirebaseFcmEnabled"),' ="true" if you support firebase fcm then you should update ',(0,o.kt)("inlineCode",{parentName:"p"},"firebase.adminsdk.json")," file by\nyour firebase account real file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"oneSignalAppId"),'="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"oneSignalApiKey"),'="xxxxxxxxxxxx"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"S3_ACCESS_KEY_ID"),'="AKxxxxxxxxxx" s3 access key from the console')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"S3_SECRET_KEY"),'="xxxxxx" s3 secret access key from the console')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"BUCKET_REGION"),'="xxxxx"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"BUCKET"),'="xxxxxxx" ',(0,o.kt)("strong",{parentName:"p"},"bucket name"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"NODE_ENV"),"=",(0,o.kt)("inlineCode",{parentName:"p"},"development")," production for ",(0,o.kt)("inlineCode",{parentName:"p"},".env.production"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ignoreEnvFile"),'="false" set this to true if you will inject the env variables from the OS system level if you will use\nthe .env.* file the let it false')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"EDIT_MODE"),' ="false" for do some urgent apis updates set to to ',(0,o.kt)("strong",{parentName:"p"},"false")," now")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PORT"),"=3001 set nodejs exported port to work"))),(0,o.kt)("h3",{id:"how-to-get-firebaseadminsdkjson"},"How to get ",(0,o.kt)("inlineCode",{parentName:"h3"},"firebase.adminsdk.json")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if this step not done correctly the notifications of chat will not arrive follow this\nto get your file ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cXOzbKDXTh0"},"Link")),(0,o.kt)("li",{parentName:"ul"},"then update ",(0,o.kt)("inlineCode",{parentName:"li"},"firebase.adminsdk.json")," by yours")),(0,o.kt)("h3",{id:"how-to-onesignalkeys"},"How to onesignalKeys"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create firebase account and follow this steps ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=FOkgfsTwvC4"},"Link")," to get the keys and\nupdate")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"oneSignalAppId"),'="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"oneSignalApiKey"),'="xxxxxxxxxxxx"')),(0,o.kt)("h3",{id:"run-the-code"},"run the code"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"open terminal in the ",(0,o.kt)("inlineCode",{parentName:"li"},"backend")," code root folder"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm i")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i --force")," if some problem happens"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm run start:dev")),(0,o.kt)("li",{parentName:"ol"},"if you see ",(0,o.kt)("inlineCode",{parentName:"li"},"app run in development")," then your code is ready for development server in production you should\nsee ",(0,o.kt)("inlineCode",{parentName:"li"},"production")),(0,o.kt)("li",{parentName:"ol"},"for production run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build")," then ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run start:prod")),(0,o.kt)("li",{parentName:"ol"},"access the server for development in ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:3001")," for production in port ",(0,o.kt)("inlineCode",{parentName:"li"},"80")," if you need to change this update"),(0,o.kt)("li",{parentName:"ol"},"update this line in ",(0,o.kt)("inlineCode",{parentName:"li"},".env file")," update ",(0,o.kt)("inlineCode",{parentName:"li"},"PORT"))),(0,o.kt)("h3",{id:"docker-ready"},"Docker ready"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if your have docker run into your system then you can go by run the ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile")),(0,o.kt)("li",{parentName:"ul"},"this ",(0,o.kt)("inlineCode",{parentName:"li"},"Dockerfile")," only up the v_chat_sdk without mongodb or redis you need to manage it by your self"),(0,o.kt)("li",{parentName:"ul"},"you need to run redis container and mongo db if you save the mongo db inside the same machine and update\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},".env.production")),(0,o.kt)("li",{parentName:"ul"},"You need to create docker container for mongodb and redis this is up to you if you already host mongodb in another vps\nor run ",(0,o.kt)("inlineCode",{parentName:"li"},"compose file")," for development or update the environments inside the docker compose if you will\nuser ",(0,o.kt)("inlineCode",{parentName:"li"},"compose file")),(0,o.kt)("li",{parentName:"ul"},"to run docker compose file make sure to update the environment inside the compose-file first then\nrun ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up -d"))),(0,o.kt)("h3",{id:"informations"},"information's"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the app not use Persistent Data inside the system for chats it saved in ",(0,o.kt)("inlineCode",{parentName:"li"},"mongo")," media in ",(0,o.kt)("inlineCode",{parentName:"li"},"S3"))),(0,o.kt)("h3",{id:"some-errors-may-happen"},"some errors may happen"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"if you see ",(0,o.kt)("inlineCode",{parentName:"li"},'ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist\nTypeError: Configuration key "JWT_SECRET" does not exist')," this means the nestjs cant read your ",(0,o.kt)("inlineCode",{parentName:"li"},".env.*")," file"),(0,o.kt)("li",{parentName:"ol"},"to fix this make sure you inject the environment variable or make sure the .env.production exist in the root of file\n.git may ignore it")),(0,o.kt)("h3",{id:"still-need-more-support"},"Still need more support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you can contact me at ",(0,o.kt)("inlineCode",{parentName:"li"},"hatemragapdev@gmail.com")," or skype ",(0,o.kt)("inlineCode",{parentName:"li"},"live:.cid.607250433850e3a6")," i offer server deployment and\nssl configuration for ",(0,o.kt)("strong",{parentName:"li"},"150$")," to deploy the\nserver side and migrate old users if you have already production app in about 8 hours"),(0,o.kt)("li",{parentName:"ul"},"iam available for more customizations contact me")))}u.isMDXComponent=!0}}]);