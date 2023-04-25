"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),p=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return r?o.createElement(f,l(l({ref:t},u),{},{components:r})):o.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:4,id:"room_page",title:"Flutter room page package"},l=void 0,c={unversionedId:"flutter/room_page",id:"flutter/room_page",title:"Flutter room page package",description:"how to render the rooms tab",source:"@site/docs/flutter/v_chat_room_page.md",sourceDirName:"flutter",slug:"/flutter/room_page",permalink:"/vchat-v2-docs/docs/flutter/room_page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/flutter/v_chat_room_page.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"room_page",title:"Flutter room page package"},sidebar:"tutorialSidebar",previous:{title:"Flutter message page package",permalink:"/vchat-v2-docs/docs/flutter/message_page"}},i={},p=[{value:"how to render the rooms tab",id:"how-to-render-the-rooms-tab",level:2},{value:"how to update theme",id:"how-to-update-theme",level:2}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-to-render-the-rooms-tab"},"how to render the rooms tab"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"you need to create VRoomController in your page controller state"),(0,n.kt)("li",{parentName:"ul"},"don't forget to dispose it")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"final vRoomController = VRoomController();\nVChatPage(\n      useIconForRoomItem: false, //set this to run to only show the user icon for chats slider\n      appBar: AppBar(\n        title: const Text('Chats Tab View'),\n        centerTitle: true,\n      ),\n   //   floatingActionButton: FloatingActionButton(\n   //    onPressed: controller.onCreateGroupOrBroadcast,\n   //     child: const Icon(Icons.add),\n   //   ),\n      controller: controller.vRoomController,\n    )\n")),(0,n.kt)("h2",{id:"how-to-update-theme"},"how to update theme"))}m.isMDXComponent=!0}}]);