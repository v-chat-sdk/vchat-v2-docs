"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[9861],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return t?o.createElement(k,r(r({ref:n},d),{},{components:t})):o.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2469:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const i={sidebar_position:1,id:"intro",title:"Backend installation"},r=void 0,l={unversionedId:"backend/intro",id:"backend/intro",title:"Backend installation",description:"Local & Production Environment Setup",source:"@site/docs/backend/intro.md",sourceDirName:"backend",slug:"/backend/intro",permalink:"/vchat-v2-docs/docs/backend/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",title:"Backend installation"},sidebar:"tutorialSidebar",previous:{title:"vchat-sdk-V2",permalink:"/vchat-v2-docs/docs/intro"},next:{title:"Apis",permalink:"/vchat-v2-docs/docs/backend/apis"}},p={},s=[{value:"Local &amp; Production Environment Setup",id:"local--production-environment-setup",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Environment Configuration",id:"environment-configuration",level:3},{value:"Obtaining <code>firebase.adminsdk.json</code>",id:"obtaining-firebaseadminsdkjson",level:3},{value:"Obtaining OneSignal Keys",id:"obtaining-onesignal-keys",level:3},{value:"Running the Code (Without Docker)",id:"running-the-code-without-docker",level:3},{value:"Running the Code (With Docker)",id:"running-the-code-with-docker",level:3},{value:"Additional Information",id:"additional-information",level:3},{value:"Common Errors",id:"common-errors",level:3},{value:"Need More Support?",id:"need-more-support",level:3},{value:"Contact",id:"contact",level:3}],d={toc:s},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"local--production-environment-setup"},"Local & Production Environment Setup"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Node.js (version ",(0,a.kt)("inlineCode",{parentName:"p"},"v16")," or higher) and npm. Check the Node.js version using ",(0,a.kt)("inlineCode",{parentName:"p"},"node -v"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install only if you not ",(0,a.kt)("inlineCode",{parentName:"p"},"docker user")," cross-env ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -g cross-env")," for managing production or development\nenvironments and pm2 for manage production deploy by ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -g pm2"),"\nCLI (",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g @nestjs/cli"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("a",{parentName:"p",href:"https://www.mongodb.com/try/download/community-kubernetes-operator"},"MongoDB")," (minimum ",(0,a.kt)("inlineCode",{parentName:"p"},"v4.4"),",\nrecommended ",(0,a.kt)("inlineCode",{parentName:"p"},"v6"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create an AWS account and register a new S3 bucket. Keep the following information handy:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AWS_ACCESS_KEY_ID"),(0,a.kt)("li",{parentName:"ul"},"AWS_SECRET_ACCESS_KEY"),(0,a.kt)("li",{parentName:"ul"},"BUCKET_REGION"),(0,a.kt)("li",{parentName:"ul"},"BUCKET")),(0,a.kt)("p",{parentName:"li"},"For more information, follow this ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NZElg91l_ms&t=585s"},"video tutorial"),"."))),(0,a.kt)("h3",{id:"environment-configuration"},"Environment Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Two environment files are available: ",(0,a.kt)("strong",{parentName:"p"},".env.development")," and ",(0,a.kt)("strong",{parentName:"p"},".env.production"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update ",(0,a.kt)("strong",{parentName:"p"},".env.production")," with production data:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'DB_URL="mongodb://127.0.0.1:27017/v_chat_sdk_v2" # MongoDB full URL\nJWT_SECRET="a%dyFjcZp*xL$Qbek" # Secure password\nissuer="v_chat_sdk_v2@gmail.com"\naudience="chat.vchatsdk.com"\nencryptHashKey="V_CHAT_SDK_V2_VERY_STRONG_KEY" # Must be the same as the Flutter encryptHashKey and unchangeable\nisOneSignalEnabled="true" # Set to true if using OneSignal\nisFirebaseFcmEnabled="true" # Set to true if using Firebase FCM, and update the firebase.adminsdk.json file\noneSignalAppId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" # Leave empty if not using OneSignal push\noneSignalApiKey="xxxxxxxxxxxx" # Leave empty if not using OneSignal push\nAWS_ACCESS_KEY_ID="AKxxxxxxxxxx" # S3 access key from the console\nAWS_SECRET_ACCESS_KEY="xxxxxx" # S3 secret access key from the console\nBUCKET_REGION="xxxxx" # S3 bucket region\nBUCKET="xxxxxxx" # S3 bucket name\nNODE_ENV="production" # For .env.production file\nignoreEnvFile="false" # Set to true if injecting environment variables from the OS system level\nEDIT_MODE="false" # Set to false for urgent API updates\nPORT="3001" # Use 80 for production, set the Node.js exported port\n')),(0,a.kt)("p",{parentName:"li"},"Note: Changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"encryptHashKey")," will cause old logins to fail. A solution for safe updates will be provided in\nfuture updates."))),(0,a.kt)("h3",{id:"obtaining-firebaseadminsdkjson"},"Obtaining ",(0,a.kt)("inlineCode",{parentName:"h3"},"firebase.adminsdk.json")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure the firebase account is the same as the one used in flutter app."),(0,a.kt)("li",{parentName:"ol"},"To ensure chat notifications work properly, follow ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cXOzbKDXTh0"},"this video")," to\nobtain the ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase.adminsdk.json")," file."),(0,a.kt)("li",{parentName:"ol"},"Replace the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"firebase.adminsdk.json")," file with your new one.")),(0,a.kt)("h3",{id:"obtaining-onesignal-keys"},"Obtaining OneSignal Keys"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a Firebase account and follow ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FOkgfsTwvC4"},"this video")," to obtain OneSignal\nkeys.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the following fields with your OneSignal keys:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'oneSignalAppId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"\noneSignalApiKey="xxxxxxxxxxxx"\n')))),(0,a.kt)("h3",{id:"running-the-code-without-docker"},"Running the Code (Without Docker)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open a terminal in the ",(0,a.kt)("inlineCode",{parentName:"li"},"backend")," root folder."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i --force")," if issues occur."),(0,a.kt)("li",{parentName:"ol"},"Generate a ",(0,a.kt)("inlineCode",{parentName:"li"},"dist")," folder ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run build"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run start:prod"),". for live console logs if you run in production mode. in your vps server then you should\nrun ",(0,a.kt)("inlineCode",{parentName:"li"},"pm2 start ecosystem.config.js --only normal --env production"),". to see logs run ",(0,a.kt)("inlineCode",{parentName:"li"},"pm2 logs")),(0,a.kt)("li",{parentName:"ol"},"If you see ",(0,a.kt)("inlineCode",{parentName:"li"},"app run in production,")," your code is production-ready."),(0,a.kt)("li",{parentName:"ol"},"Access the development server at ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost:80")," and production server at port ",(0,a.kt)("inlineCode",{parentName:"li"},"80"),". Update the port\nin ",(0,a.kt)("inlineCode",{parentName:"li"},".env.production")," if necessary."),(0,a.kt)("li",{parentName:"ol"},"Update the ",(0,a.kt)("inlineCode",{parentName:"li"},"PORT")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file if using Docker, and ensure you update the environment variable in the OS (env).")),(0,a.kt)("h3",{id:"running-the-code-with-docker"},"Running the Code (With Docker)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com"},"Docker")," and Docker Compose."),(0,a.kt)("li",{parentName:"ol"},"update ",(0,a.kt)("inlineCode",{parentName:"li"},".env.production")," this keys from ",(0,a.kt)("inlineCode",{parentName:"li"},"mongodb://127.0.0.1:27017/v_chat_sdk_v2"),"\nto ",(0,a.kt)("inlineCode",{parentName:"li"},"mongodb://v_mongodb:27017/v_chat_sdk_v2")),(0,a.kt)("li",{parentName:"ol"},"Run the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile")," if Docker is already installed on your system. Note that this only sets up v_chat_sdk and\ndoesn't include MongoDB or Redis. You need to manage these separately OR."),(0,a.kt)("li",{parentName:"ol"},"Use a ",(0,a.kt)("inlineCode",{parentName:"li"},"compose file")," witch manage all dependency together."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose up")," to start the containers and view logs, or run ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to run in the\nbackground.")),(0,a.kt)("h3",{id:"additional-information"},"Additional Information"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The app doesn't use persistent data for chats, which are saved in MongoDB, while media is stored in S3."),(0,a.kt)("li",{parentName:"ol"},"To ensure V_Chat_v2 is working, visit ",(0,a.kt)("inlineCode",{parentName:"li"},"HOST_OR_IP:PORT"),'. If you see "Congratulations V_Chat_v2 working successfully,"\nit is functioning correctly.')),(0,a.kt)("h3",{id:"common-errors"},"Common Errors"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you encounter the error ",(0,a.kt)("inlineCode",{parentName:"p"},'ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist'),", it means NestJS\ncannot read your ",(0,a.kt)("inlineCode",{parentName:"p"},".env.production")," file."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To fix this, ensure you have injected the environment variable or that ",(0,a.kt)("inlineCode",{parentName:"li"},".env.production")," exists in the root of the\nproject. It may be ignored by .git."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you see the\nerror ",(0,a.kt)("inlineCode",{parentName:"p"},"The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services"),"\n, it means you have enabled FCM but have not ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cXOzbKDXTh0"},"configured")," it."))),(0,a.kt)("h3",{id:"need-more-support"},"Need More Support?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"after purchasing this code you will get one free setup for the server side."),(0,a.kt)("li",{parentName:"ul"},"so you need to follow up this steps to get your server side ready to use."),(0,a.kt)("li",{parentName:"ul"},"configure the ",(0,a.kt)("inlineCode",{parentName:"li"},".env.production")," file with your own data. as shown above. and the firebase fcm file collect it from\nyour\nfirebase account. and configure the s3 or send me the data and i will configure it for you."),(0,a.kt)("li",{parentName:"ul"},"create ",(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu")," server and send me the ip address and the ssh key to access it."),(0,a.kt)("li",{parentName:"ul"},"To enable free SSL from Let's Encrypt for your domain, you will need to point the DNS of your domain to our VPS\nhosting service. For example, if your domain is ",(0,a.kt)("inlineCode",{parentName:"li"},"example.com"),", you can create a subdomain named ",(0,a.kt)("inlineCode",{parentName:"li"},"vchat.example.com"),"\nand\npoint it to our ",(0,a.kt)("inlineCode",{parentName:"li"},"VPS")," server. Additionally, it is important to add a wildcard route for ",(0,a.kt)("inlineCode",{parentName:"li"},"*.vchat.example.com")," to\nensure\nproper functioning."),(0,a.kt)("li",{parentName:"ul"},"collect all data and send you purchasing key from ",(0,a.kt)("inlineCode",{parentName:"li"},"codecanyou")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"hatemragapdev@gmail.com")," to get your free setup.")),(0,a.kt)("h3",{id:"contact"},"Contact"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you need further assistance, contact the developer at ",(0,a.kt)("inlineCode",{parentName:"li"},"hatemragapdev@gmail.com")," or via Skype\nat ",(0,a.kt)("inlineCode",{parentName:"li"},"live:.cid.607250433850e3a6"),". The developer offers server deployment, free SSL configuration, database viewer, and\nbackup services for ",(0,a.kt)("strong",{parentName:"li"},"$100"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"after your free one")," This includes server-side deployment and amazon s3 setup and\nmigration of old users, if\nyou have an existing\nproduction app, within approximately 8 hours this will insure all about server side 100% configure."),(0,a.kt)("li",{parentName:"ul"},"For additional customizations, feel free to reach out my.")))}c.isMDXComponent=!0}}]);