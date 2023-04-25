"use strict";(self.webpackChunkvchat_v_2=self.webpackChunkvchat_v_2||[]).push([[712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1,id:"intro",title:"Flutter intro"},i=void 0,l={unversionedId:"flutter/intro",id:"flutter/intro",title:"Flutter intro",description:"project structure",source:"@site/docs/flutter/intro.md",sourceDirName:"flutter",slug:"/flutter/intro",permalink:"/vchat-v2-docs/docs/flutter/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/flutter/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",title:"Flutter intro"},sidebar:"tutorialSidebar",previous:{title:"Socket events",permalink:"/vchat-v2-docs/docs/backend/socket.io"}},s={},p=[{value:"project structure",id:"project-structure",level:2},{value:"android setup",id:"android-setup",level:2},{value:"some important notes",id:"some-important-notes",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"project-structure"},"project structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"we have mono repo for handle flutter clint our project divided into some packages")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_sdk_core"},"v_chat_sdk_core")," witch contains all http requests and ",(0,r.kt)("inlineCode",{parentName:"li"},"VChatController"),"\nand handling the ",(0,r.kt)("inlineCode",{parentName:"li"},"socket.io")," connections"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_room_page"},"v_chat_room_page")," contains all about room ui page"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_voice_player"},"v_chat_voice_player")," contains all about voice player item"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_message_page"},"v_chat_message_page")," contains all about message ui page"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_media_editor"},"v_chat_media_editor")," contains the media editor page functions usually\nthis open after user select image to share"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_input_ui"},"v_chat_input_ui")," contains all about message input bar ui and recorder\nfunctions in messages page"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_firebase_fcm"},"v_chat_firebase_fcm")," optional for support ",(0,r.kt)("inlineCode",{parentName:"li"},"FCM")," push notifications"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_one_signal"},"v_chat_one_signal")," optional for support one_signal push notifications"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_receive_share"},"v_chat_receive_share"),"  optional for support receiving media from\nother apps"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://pub.dev/packages/v_chat_web_rtc"},"v_chat_web_rtc")," optional for add support to webRtc calls")),(0,r.kt)("h2",{id:"android-setup"},"android setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"update this section in ",(0,r.kt)("inlineCode",{parentName:"li"},"android/build.gradle"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"buildscript {\n    ext.kotlin_version = '1.7.10'\n    repositories {\n        google()\n        mavenCentral()\n    }\n\n    dependencies {\n        classpath 'com.android.tools.build:gradle:7.1.2'\n        classpath 'com.google.gms:google-services:4.3.13'\n        classpath \"org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version\"\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"update this section in ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")),(0,r.kt)("li",{parentName:"ul"},"enable ",(0,r.kt)("inlineCode",{parentName:"li"},"multiDexEnabled true")),(0,r.kt)("li",{parentName:"ul"},"update ",(0,r.kt)("inlineCode",{parentName:"li"},"compileSdkVersion 33")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apply plugin: 'com.google.gms.google-services'")," if you use firebase FCM"),(0,r.kt)("li",{parentName:"ul"},"if you will use fcm connect you app by firebase\nflutter ",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/flutter/setup?platform=android"},"cli")),(0,r.kt)("li",{parentName:"ul"},"if you use OneSignal then connect and configure\nthis ",(0,r.kt)("a",{parentName:"li",href:"https://documentation.onesignal.com/docs/flutter-sdk-setup"},"info")),(0,r.kt)("li",{parentName:"ul"},"Add These Permissions files to android/app/src/main/AndroidManifest.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\n<uses-permission android:name="android.permission.INTERNET"/>\n<uses-permission android:name="android.permission.RECORD_AUDIO"/>\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>\n')),(0,r.kt)("p",null,"-Add These Tags to Application Tage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'android:requestLegacyExternalStorage="true"\nandroid:usesCleartextTraffic="true" \x3c!-- only if you use http not https, or you\'re testing the app--\x3e\n')),(0,r.kt)("h1",{id:"ios-permissions"},"Ios permissions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"update and uncomment Podfile min version to 10.0 =>platform :ios, '",(0,r.kt)("inlineCode",{parentName:"li"},"10.0'")),(0,r.kt)("li",{parentName:"ol"},"add these permissions on the ",(0,r.kt)("inlineCode",{parentName:"li"},"ios/Runner/Info.plist"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<key>NSCameraUsageDescription</key>\n        <string>to allow user to take photo and video for his ads and upload it to server</string>\n        <key>NSMicrophoneUsageDescription</key>\n            <string>to allow user to take video with voice for more info and add it to his ads and upload it to server</string>\n            <key>NSPhotoLibraryAddUsageDescription</key>\n            <string>vchatsdk would like to save photos from the app chat to your gallery</string>\n            <key>NSPhotoLibraryUsageDescription</key>\n            <string>to allow user to select photo for his ads and upload it to server</string>\n            <key>UIBackgroundModes</key>\n            <array>\n                <string>fetch</string>\n                <string>remote-notification</string>\n            </array>\n            <key>NSAppTransportSecurity</key>\n            <dict>\n                <key>NSAllowsArbitraryLoads</key>\n                <true/>\n</dict>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"replace all vchatsdk by your app name ",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"some-important-notes"},"some important notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"while init the controller and pass\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},'await VChatController.init( vChatConfig: VChatConfig(encryptHashKey:"$$THIS KEY$$""))')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$$THIS KEY$$")," in above code must be the same as the .env ",(0,r.kt)("inlineCode",{parentName:"li"},"encryptHashKey")," must be the same otherwise will users will\nface login problem!")))}d.isMDXComponent=!0}}]);