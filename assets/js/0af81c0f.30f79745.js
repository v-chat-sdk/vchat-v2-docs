"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[410],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(o),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return o?r.createElement(h,l(l({ref:t},s),{},{components:o})):r.createElement(h,l({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5594:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:4,id:"room_page",title:"Flutter room page package"},l=void 0,i={unversionedId:"flutter/room_page",id:"flutter/room_page",title:"Flutter room page package",description:"how to render the rooms tab",source:"@site/docs/flutter/v_chat_room_page.md",sourceDirName:"flutter",slug:"/flutter/room_page",permalink:"/vchat-v2-docs/docs/flutter/room_page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/flutter/v_chat_room_page.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"room_page",title:"Flutter room page package"},sidebar:"tutorialSidebar",previous:{title:"Flutter message page package",permalink:"/vchat-v2-docs/docs/flutter/message_page"}},c={},p=[{value:"how to render the rooms tab",id:"how-to-render-the-rooms-tab",level:2},{value:"how to update theme",id:"how-to-update-theme",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-to-render-the-rooms-tab"},"how to render the rooms tab"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"you need to create VRoomController in your page controller state"),(0,n.kt)("li",{parentName:"ul"},"don't forget to dispose it")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"final vRoomController = VRoomController();\nVChatPage(\n      useIconForRoomItem: false, //set this to run to only show the user icon for chats slider\n      appBar: AppBar(\n        title: const Text('Chats Tab View'),\n        centerTitle: true,\n      ),\n   //   floatingActionButton: FloatingActionButton(\n   //    onPressed: controller.onCreateGroupOrBroadcast,\n   //     child: const Icon(Icons.add),\n   //   ),\n      controller: controller.vRoomController,\n    )\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"make sure ",(0,n.kt)("inlineCode",{parentName:"li"},"final vRoomController = VRoomController();")," will be created ",(0,n.kt)("inlineCode",{parentName:"li"},"once")," while app life cycle!"),(0,n.kt)("li",{parentName:"ul"},"so you can call it in initState method of base home screen scaffold do some debugs to insure it call once")),(0,n.kt)("h2",{id:"how-to-update-theme"},"how to update theme"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"to update theme and render custom message this can be through the theme extensions inside ",(0,n.kt)("inlineCode",{parentName:"li"},"ThemeData")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"darkTheme"),"\nor ",(0,n.kt)("inlineCode",{parentName:"li"},"theme")," inside the ",(0,n.kt)("inlineCode",{parentName:"li"},"MaterialApp")),(0,n.kt)("li",{parentName:"ul"},"for ",(0,n.kt)("inlineCode",{parentName:"li"},"dark")," theme use")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"darkTheme: ThemeData(\n          extensions: [\n            VRoomTheme.light().copyWith(\n                scaffoldDecoration: VRoomTheme.light()\n                    .scaffoldDecoration\n                    .copyWith(color: lightColorScheme.background),\n              ),\n          ],\n        ),\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for ",(0,n.kt)("inlineCode",{parentName:"li"},"light")," theme use")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"   theme: ThemeData(\n            extensions: [\n            VRoomTheme.light().copyWith(\n                scaffoldDecoration: VRoomTheme.light()\n                    .scaffoldDecoration\n                    .copyWith(color: lightColorScheme.background),\n              ),\n            ],\n          ),\n")))}m.isMDXComponent=!0}}]);