"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1,id:"intro",title:"vchat-sdk-V2"},i=void 0,s={unversionedId:"intro",id:"intro",title:"vchat-sdk-V2",description:"vchat-sdk is a Saas chat system that provides real-time messaging capabilities for your web or mobile applications. It",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/vchat-v2-docs/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",title:"vchat-sdk-V2"},sidebar:"tutorialSidebar",next:{title:"Backend installation",permalink:"/vchat-v2-docs/docs/backend/intro"}},l={},d=[{value:"About V_CHAT_SDK",id:"about-v_chat_sdk",level:2},{value:"About Micro Service",id:"about-micro-service",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"How V_CHAT_SDK works",id:"how-v_chat_sdk-works",level:2},{value:"technologies",id:"technologies",level:2},{value:"Server Requirements for vchat-sdk",id:"server-requirements-for-vchat-sdk",level:2},{value:"Features",id:"features",level:2},{value:"Information&#39;s",id:"informations",level:2},{value:"contact me",id:"contact-me",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"vchat-sdk is a Saas chat system that provides real-time messaging capabilities for your web or mobile applications. It\nis divided into two parts: the server-side and the client-side. The server-side is built using Node.js and Socket.IO for\nreal-time communication, and MongoDB for storing all data."),(0,r.kt)("p",null,"One of the unique features of vchat-sdk is that it does not depend on Firebase for storing any data, but it provides the\noption to enable push notifications using Firebase Cloud Messaging ",(0,r.kt)("inlineCode",{parentName:"p"},"FCM")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"OneSignal"),"."),(0,r.kt)("p",null,"Get started by ",(0,r.kt)("strong",{parentName:"p"},"creating a new app or existing app in production"),"."),(0,r.kt)("h2",{id:"about-v_chat_sdk"},"About V_CHAT_SDK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"this package which written in pure dart and nestjs for serverside help you to add chat functionality"),(0,r.kt)("li",{parentName:"ul"},"unlimited text/image/video/record/location/push notification/control of data"),(0,r.kt)("li",{parentName:"ul"},"to any existing or new flutter mobile project with any ",(0,r.kt)("strong",{parentName:"li"},"back-end")," service you use"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vchat-sdk")," is a easy way to integrate advanced real time message chat with 6 public api only \ud83d\udc4c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vchat-sdk")," use ",(0,r.kt)("strong",{parentName:"li"},"Node js")," as backend service and ",(0,r.kt)("strong",{parentName:"li"},"Firebase")," for (push notifications only) message database\nis ",(0,r.kt)("strong",{parentName:"li"},"Mongo DB"))),(0,r.kt)("h2",{id:"about-micro-service"},"About Micro Service"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"less load on your main server since chat has high traffic."),(0,r.kt)("li",{parentName:"ol"},"They enable scale. Scalability is about more than the ability to handle more volume. It\u2019s also about the effort\ninvolved. Microservices make it easier to identify scaling bottlenecks and then resolve those bottlenecks at a\nper-microservice level."),(0,r.kt)("li",{parentName:"ol"},"They are relatively easy to build and maintain. Their single-purpose design means they can be built and maintained by\nsmaller teams. Each team can be cross-functional while also specialise in a subset of the microservices in a\nsolution.")),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you want to have chat system in your app like whatsApp,facebook ...etc (perfect to social media apps)"),(0,r.kt)("li",{parentName:"ol"},"If you have ecommerce apps and want to add chat feature to the app like delivery or OLX or facebook markets"),(0,r.kt)("li",{parentName:"ol"},"Also, can be used for users real time chat support")),(0,r.kt)("h2",{id:"how-v_chat_sdk-works"},"How V_CHAT_SDK works"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vchat-sdk")," connected with your backend service."),(0,r.kt)("li",{parentName:"ul"},"vchat-sdk don't matter what is your backend code written because it will connect with it\nby public apis and run separately isolated but still connected by public apis"),(0,r.kt)("li",{parentName:"ul"},"When you register new user in your system you should call this public api"),(0,r.kt)("li",{parentName:"ul"},"so it will create separate database fro save users name,image,identifiers"),(0,r.kt)("li",{parentName:"ul"},"once the user connected successfully in your clint app usually this happens after success auth done"),(0,r.kt)("li",{parentName:"ul"},"you need to connect this user to v chat system, so he can contact with other users"),(0,r.kt)("li",{parentName:"ul"},"if you have already app run in production state, and you wish to integrate v chat you can do by migrate old users it\nwill be explained in backend section")),(0,r.kt)("h2",{id:"technologies"},"technologies"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For server side i use ",(0,r.kt)("a",{parentName:"li",href:"https://nestjs.com"},"Nestjs")," to build the code"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.mongodb.com/"},"mongodb")," for save chats text and users data"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://socket.io"},"socket.io")," for real time communication"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cloud-messaging"},"FCM")," or ",(0,r.kt)("a",{parentName:"li",href:"https://onesignal.com"},"onesignal")," for push notifications\nyou can choose between them onesignal is perfect for countries that firebase is blocked ore you can enable all and v\nchat will manage to direct the user to the available platform!"),(0,r.kt)("li",{parentName:"ol"},"Amazon (aws ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3"},"S3"),") for secure and save users media i use pre signed URL to let the users\naccess restrictions"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://webrtc.org"},"WebRtc")," for video and voice call but not stable 100% and need to\npaid ",(0,r.kt)("a",{parentName:"li",href:"https://webrtc.org/getting-started/turn-server"},"turn")," server so i will add supports for ",(0,r.kt)("a",{parentName:"li",href:"https://www.agora.io/en"},"agora.io")),(0,r.kt)("li",{parentName:"ol"},"Clint side sdk only we support ",(0,r.kt)("a",{parentName:"li",href:"https://flutter.dev"},"Flutter")," with this public ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hatemragab/v_chat_sdk"},"repo")," for support all ")),(0,r.kt)("h2",{id:"server-requirements-for-vchat-sdk"},"Server Requirements for vchat-sdk"),(0,r.kt)("p",null,"vchat-sdk is a lightweight Saas chat system that requires minimum server resources."),(0,r.kt)("p",null,"To run vchat-sdk, you need the following server specifications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 CPU core"),(0,r.kt)("li",{parentName:"ul"},"1 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"fast ssd storage"),(0,r.kt)("li",{parentName:"ul"},"any ubuntu version above 18"),(0,r.kt)("li",{parentName:"ul"},"we recommend to host in ",(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/"},"digitalocean"))),(0,r.kt)("p",null,"In addition, you need to have a MongoDB database to store data. You can host a free MongoDB database on MongoDB Atlas,\nwhich is a cloud-based database service that provides a simple and secure way to manage your data."),(0,r.kt)("p",null,"With these minimum server requirements, you can easily set up vchat-sdk and start using it to enable real-time messaging\nin your web or mobile applications."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"vchat-sdk supports the following features:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text, image, video, voice note, documents, location share"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk supports various message types, including text, images, videos, voice notes, documents, and location sharing (no live location share just pin share).files and videos and image can be downloaded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Direct, group, broadcast, order, system chats"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk supports various chat types, including direct messages, group chats, broadcast messages, order messages, and system messages manage group system (admin,superAdmin,members) like whatsApp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message status"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk supports various message statuses, including pending, send, error, sending, delivered,seen offline resend good support for week connections auto resend if failed with offline store for all types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compress images and edit"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk supports image compression and editing to optimize image size and quality.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"See message status for all room types"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk provides the ability to view message status for all room types.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Video call and voice for single rooms"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk supports video calls and voice messages for single rooms using ",(0,r.kt)("inlineCode",{parentName:"td"},"WebRTC"),"(Not 100% stable it need ",(0,r.kt)("a",{parentName:"td",href:"https://webrtc.org/getting-started/turn-server"},"turn")," server and this is paid server), so we will add ",(0,r.kt)("inlineCode",{parentName:"td"},"agora.io")," and you will have choose to use the suitable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Last seen and group (total online, total members count)"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk provides information about the last seen status of users and group statistics, including total online and total members count support for typing..., recording... status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Good voice player support"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk provides a good voice player that supports seeking, auto-playing the next message, and variable playback speeds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multi-platform support"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk supports all functions works on various platforms, including Android, iOS, web, macOS, and Windows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Offline message and chat storage"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk allows messages and chats to be downloaded offline for fast loading chats text are saved media for only 7 days after that they well be auto download and saved again for reduce phone storage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Public APIs ready to integrate"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk provides easy-to-use public APIs for integrating into your system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In-app notifications"),(0,r.kt)("td",{parentName:"tr",align:null},"vchat-sdk provides full support for in-app notifications using ",(0,r.kt)("inlineCode",{parentName:"td"},"FCM")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"OneSignal"),", and can detect if the device does not support FCM and will try to register with OneSignal if it is enabled and notification clicks handle to direct to chat page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"almost full customizable"),(0,r.kt)("td",{parentName:"tr",align:null},"you can customize the theme and actions done through the package")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prebuild for admin panel apis"),(0,r.kt)("td",{parentName:"tr",align:null},"there are apis to build your control panel so you can access and manage users and chats")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"records emojis and gif support"),(0,r.kt)("td",{parentName:"tr",align:null},"ban users mute chat leave group delete chat delete message from you and from all support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Messages features"),(0,r.kt)("td",{parentName:"tr",align:null},"forward to multi rooms (you can set max forward option) and reply and auto highlight to the the replied message share message outside and get message info when is send,delivered,seen delete from you only and delete form all receivers app accept share media from outside apps search are supported and more!!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rooms features"),(0,r.kt)("td",{parentName:"tr",align:null},"single room (direct chat) group,broadcast you can set max limit for users to be joined order room for manage orders chats like OLX or facebook market,system chat this for admin to notify or max contactus for live support  chat! users can delete room and search and more!!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"i18n"),(0,r.kt)("td",{parentName:"tr",align:null},"you can support any language to translate the app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configurations"),(0,r.kt)("td",{parentName:"tr",align:null},"you can set max limit for group members and broadcast and max forward,share message limit,max media upload size")))),(0,r.kt)("p",null,"With vchat-sdk, you can easily integrate real-time messaging into your applications without the need to build your own\nchat system from scratch."),(0,r.kt)("h2",{id:"informations"},"Information's"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"this is not full app this only apis to make the chat development faster and easy! if you want full app then you need\nto look at ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/hatemragab/superup"},"superUp"))),(0,r.kt)("li",{parentName:"ol"},"no prebuild admin panel ui but there are prebuild postman apis for integrate the chat panel to your system\nsee ",(0,r.kt)("a",{parentName:"li",href:"/vchat-v2-docs/docs/backend/apis"},"admin_apis")," section"),(0,r.kt)("li",{parentName:"ol"},"all apis you can see it before you buy the source code\nsee ",(0,r.kt)("a",{parentName:"li",href:"https://documenter.getpostman.com/view/24524392/2s93Jox6Dq"},"PostmanCollection")),(0,r.kt)("li",{parentName:"ol"},"need to see example of current ",(0,r.kt)("inlineCode",{parentName:"li"},"features"),"? then you need to see an open source clint app use v_chat_sdk here\nis ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/hatemragab/superup"},"superUp"))),(0,r.kt)("li",{parentName:"ol"},"if you want to build a web version form this package you can use flutter web all packages support web for flutter\nbut if you want to integrate with other projects like React or angular etc... you can do this by your self by\nintegrating the apis and build your components using\nour ",(0,r.kt)("a",{parentName:"li",href:"https://documenter.getpostman.com/view/24524392/2s93Jox6Dq"},"PostmanCollection")," collection ",(0,r.kt)("inlineCode",{parentName:"li"},"please read the docs\nthere i have explained app apis params there")," socket events explained ",(0,r.kt)("a",{parentName:"li",href:"/vchat-v2-docs/docs/backend/socket.io"},"here"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"/vchat-v2-docs/docs/backend/socket.io"},"socket.io")," events"),(0,r.kt)("li",{parentName:"ol"},"this project purchasing from ",(0,r.kt)("inlineCode",{parentName:"li"},"codecanyou")," has one time used ",(0,r.kt)("strong",{parentName:"li"},"peer project")," for multi project contactMe ",(0,r.kt)("inlineCode",{parentName:"li"},"hatemragapdev@gmail.com"))),(0,r.kt)("h2",{id:"contact-me"},"contact me"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you can contact me at ",(0,r.kt)("inlineCode",{parentName:"li"},"hatemragapdev@gmail.com")," or skype ",(0,r.kt)("inlineCode",{parentName:"li"},"live:.cid.607250433850e3a6")," "),(0,r.kt)("li",{parentName:"ul"},"iam offer server deployment for more info ","[visit]","(/vchat-v2-docs/docs/backend/intro#Still need more support)")))}u.isMDXComponent=!0}}]);