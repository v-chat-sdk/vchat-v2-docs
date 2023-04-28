---
sidebar_position: 1
id: intro
title: Flutter intro
---

## project structure

- we have mono repo for handle flutter clint our project divided into some packages add the required following packages

1. [v_chat_sdk_core](https://pub.dev/packages/v_chat_sdk_core) **required** witch contains all http requests
   and `VChatController` and handling the `socket.io` connections
2. [v_chat_room_page](https://pub.dev/packages/v_chat_room_page) **required** contains all about room ui page
3. [v_chat_message_page](https://pub.dev/packages/v_chat_message_page)**required**  contains all about message ui page
4. [v_chat_utils](https://pub.dev/packages/v_chat_utils)**required**  contains all utils and some translate for the all packages
5. [v_chat_firebase_fcm](https://pub.dev/packages/v_chat_firebase_fcm) optional for support `FCM` push notifications
6. [v_chat_one_signal](https://pub.dev/packages/v_chat_one_signal) optional for support one_signal push notifications
7. [v_chat_receive_share](https://pub.dev/packages/v_chat_receive_share)  optional for support receiving media from
   other apps
8. [v_chat_web_rtc](https://pub.dev/packages/v_chat_web_rtc) optional for add support to webRtc calls

## android setup

- update this section in `android/build.gradle`

```groovy
buildscript {
    ext.kotlin_version = '1.7.10'
    repositories {
        google()
        mavenCentral()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:7.1.2'
        classpath 'com.google.gms:google-services:4.3.13'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}
```

- update this section in `android/app/build.gradle`
- enable `multiDexEnabled true`
- update `compileSdkVersion 33`
- `apply plugin: 'com.google.gms.google-services'` if you use firebase FCM
- if you will use fcm connect you app by firebase
  flutter [cli](https://firebase.google.com/docs/flutter/setup?platform=android)
- if you use OneSignal then connect and configure
  this [info](https://documentation.onesignal.com/docs/flutter-sdk-setup)
- Add These Permissions files to android/app/src/main/AndroidManifest.xml

```xml

<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
```

-Add These Tags to Application Tage

```
android:requestLegacyExternalStorage="true"
android:usesCleartextTraffic="true" <!-- only if you use http not https, or you're testing the app-->
```

# Ios permissions

1. update and uncomment Podfile min version to 10.0 =>platform :ios, '`10.0'`
2. add these permissions on the `ios/Runner/Info.plist`

```
<key>NSCameraUsageDescription</key>
    	<string>to allow user to take photo and video for his ads and upload it to server</string>
    	<key>NSMicrophoneUsageDescription</key>
        	<string>to allow user to take video with voice for more info and add it to his ads and upload it to server</string>
        	<key>NSPhotoLibraryAddUsageDescription</key>
        	<string>vchatsdk would like to save photos from the app chat to your gallery</string>
        	<key>NSPhotoLibraryUsageDescription</key>
        	<string>to allow user to select photo for his ads and upload it to server</string>
        	<key>UIBackgroundModes</key>
        	<array>
        		<string>fetch</string>
        		<string>remote-notification</string>
        	</array>
        	<key>NSAppTransportSecurity</key>
  <dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```

- replace all vchatsdk by your app name <br />

## some important notes

1. while init the controller and pass
   the `await VChatController.init( vChatConfig: VChatConfig(encryptHashKey:"$$THIS KEY$$""))`
2. `$$THIS KEY$$` in above code must be the same as the .env `encryptHashKey` must be the same otherwise will users will
   face login problem!