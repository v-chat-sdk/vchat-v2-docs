"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[825],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,d=p["".concat(i,".").concat(g)]||p[g]||m[g]||o;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},308:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3,id:"message_page",title:"Flutter message page package"},s=void 0,l={unversionedId:"flutter/message_page",id:"flutter/message_page",title:"Flutter message page package",description:"how to render navigate to message page",source:"@site/docs/flutter/v_chat_message_page.md",sourceDirName:"flutter",slug:"/flutter/message_page",permalink:"/vchat-v2-docs/docs/flutter/message_page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/flutter/v_chat_message_page.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"message_page",title:"Flutter message page package"},sidebar:"tutorialSidebar",previous:{title:"Flutter core package",permalink:"/vchat-v2-docs/docs/flutter/core_package"},next:{title:"Flutter room page package",permalink:"/vchat-v2-docs/docs/flutter/room_page"}},i={},c=[{value:"how to render navigate to message page",id:"how-to-render-navigate-to-message-page",level:2},{value:"how to update theme",id:"how-to-update-theme",level:2},{value:"render custom message",id:"render-custom-message",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"how-to-render-navigate-to-message-page"},"how to render navigate to message page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"you need to create Wrapper around the")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\nimport 'package:v_chat_message_page/v_chat_message_page.dart';\nimport 'package:v_chat_sdk_core/v_chat_sdk_core.dart';\n\nclass MyProjectMessagePageWrapper extends StatelessWidget {\n  final VRoom room;\n\n  const MyProjectMessagePageWrapper({\n    Key? key,\n    required this.room,\n  }) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return VMessagePage(\n      vRoom: room,\n      vMessageConfig: VMessageConfig(\n        googleMapsApiKey: \"AzoisfXXXXXXXXXXXX\",\n        isCallsAllowed: false,\n      ),\n    );\n  }\n}\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"and set ",(0,n.kt)("inlineCode",{parentName:"li"},"MyProjectMessagePageWrapper")," to the VChatController to vNavigator: VNavigator()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  toMessagePage: (context, vRoom) {\n   Navigator.of(context).push(MaterialPageRoute(\n            builder: (context) => MyProjectMessagePageWrapper( room: vRoom,),\n    ));\n  },\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"you can do some customizations check out all ",(0,n.kt)("inlineCode",{parentName:"li"},"VMessageConfig")," class"),(0,n.kt)("li",{parentName:"ul"},"[vRoom]",": The chat room for which the messages are displayed. This parameter is required."),(0,n.kt)("li",{parentName:"ul"},"[isCallsAllowed]",": A boolean value that indicates whether calls are allowed in the chat room. The default value is true."),(0,n.kt)("li",{parentName:"ul"},"[currentTheme]",": set current theme for the v chat message page you can check the dark mode and pass the correct theme you can pass ","[VLightMessageTheme]"," OR ","[VDarkMessageTheme]"),(0,n.kt)("li",{parentName:"ul"},"[onUserBlockAnother]",": A callback function that is called when a user blocks another user. This parameter is optional."),(0,n.kt)("li",{parentName:"ul"},"[onMessageAttachmentIconPress]",": A callback function that is called when the user clicks on the attachment icon in the message input box. This parameter is optional and returns a future VAttachEnumRes instance."),(0,n.kt)("li",{parentName:"ul"},"[onUserUnBlockAnother]",": A callback function that is called when a user unblocks another user. This parameter is optional."),(0,n.kt)("li",{parentName:"ul"},"[googleMapsApiKey]",": A string value that represents the Google Maps API key. This parameter is optional."),(0,n.kt)("li",{parentName:"ul"},"[maxMediaSize]",": An integer value that represents the maximum size of the media files that can be uploaded. The default value is 50 MB."),(0,n.kt)("li",{parentName:"ul"},"[compressImageQuality]",": An integer value that represents the quality of the compressed image. The default value is 55."),(0,n.kt)("li",{parentName:"ul"},"[maxRecordTime]",": A Duration instance that represents the maximum duration of the recorded audio. The default value is 30 minutes.")),(0,n.kt)("h2",{id:"how-to-update-theme"},"how to update theme"),(0,n.kt)("h2",{id:"render-custom-message"},"render custom message"))}m.isMDXComponent=!0}}]);