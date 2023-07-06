---
sidebar_position: 1
id: intro
title: Flutter intro
---

## Project Structure

The V Chat SDK project is a mono-repo designed to handle the Flutter client. It is divided into several packages,
including the following required and optional packages:

1. [v_chat_sdk_core](https://pub.dev/packages/v_chat_sdk_core) **(Required)** - Contains all HTTP requests,
   the `VChatController`, and manages `socket.io` connections. you can use this package only to build you ui from search
   its advanced use!
2. [v_chat_room_page](https://pub.dev/packages/v_chat_room_page) **(Required)** - Provides the UI for the chat room
   page.
3. [v_chat_message_page](https://pub.dev/packages/v_chat_message_page) **(Required)** - Provides the UI for the chat
   message page.
   Optional packages for extended functionality:

4. [v_chat_firebase_fcm](https://pub.dev/packages/v_chat_firebase_fcm) **(Optional)** - Adds support for Firebase Cloud
   Messaging (FCM)
   push notifications.
5. [v_chat_one_signal](https://pub.dev/packages/v_chat_one_signal) **(Optional)** - Adds support for OneSignal push notifications. See
   the [documentation](https://documentation.onesignal.com/docs/flutter-sdk-setup)  for configuration details.
6. [v_chat_receive_share](https://pub.dev/packages/v_chat_receive_share) **(Optional)** - Enables support for receiving media from
   other apps. Follow the [documentation](https://pub.dev/packages/share_handler) for configuration instructions.
7. [v_chat_web_rtc](https://pub.dev/packages/v_chat_web_rtc) **(Optional)** - Adds support for WebRTC calls. Configure it using
   the [documentation](https://pub.dev/packages/flutter_webrtc). Please note that this is not 100% stable and relies on
   some paid services for [TURN](https://webrtc.org/getting-started/turn-server) servers.

## android setup

- update this section in `android/build.gradle`
- for full android manifest app
  example [see](https://github.com/hatemragab/superup/blob/5924d613fa76e03eee520e65fbaa97c8f052a8ab/apps/super_up_app/android/app/src/main/AndroidManifest.xml)
- for full app apply v chat roles check
  out [this](https://github.com/hatemragab/superup/tree/5924d613fa76e03eee520e65fbaa97c8f052a8ab/apps/super_up_app/android)

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
        <!-- if you want to use loction share  -->
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
        <!--    if you will use webRtc-->
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS"/>
<queries>
<!-- If your app checks for SMS support -->
<intent>
    <action android:name="android.intent.action.VIEW"/>
    <data android:scheme="sms"/>
</intent>
<!-- If your app checks for call support -->
<intent>
    <action android:name="android.intent.action.VIEW"/>
    <data android:scheme="tel"/>
</intent>
<intent>
    <action android:name="android.intent.action.VIEW"/>
    <category android:name="android.intent.category.BROWSABLE"/>
    <data android:scheme="https"/>
</intent>
<intent>
    <action android:name="android.support.customtabs.action.CustomTabsService"/>
</intent>
<intent>
    <action android:name="android.intent.action.VIEW"/>
    <!-- If you don't know the MIME type in advance, set "mimeType" to "*/*". -->
    <data android:mimeType="image/*"/>
</intent>
<intent>
    <action android:name="android.intent.action.VIEW"/>
    <!-- If you don't know the MIME type in advance, set "mimeType" to "*/*". -->
    <data android:mimeType="*/*"/>
</intent>
<intent>
    <action android:name="android.intent.action.PROCESS_TEXT"/>
    <data android:mimeType="text/plain"/>
</intent>
<intent>
    <action android:name="android.intent.action.SEND"/>
    <!-- Replace with the MIME type that your app works with, if needed. -->
    <data android:mimeType="image/jpeg"/>
</intent>
<intent>
    <action android:name="android.intent.action.VIEW"/>
    <data
            android:host="com.android.contacts"
            android:mimeType="vnd.android.cursor.item/*"
            android:scheme="content"/>
</intent>
</queries>
```

- if you support share location you need to get the google api key and enable search for please that require you to
  enable billing
- and configure the app enable all service for map and for ios tool
- add this to your manifest `application` tag before   `</application>`

```xml

<meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="AIzaSyAP-xxxxxxxxxxxxxx"/> replase AIzaSyAP-xxxxxxxxxxxxxx with your key
```

- app crop activity

```xml

<activity
        android:name="com.yalantis.ucrop.UCropActivity"
        android:screenOrientation="portrait"
        android:theme="@style/Theme.AppCompat.Light.NoActionBar"/>
```

- if you enable `fcm` push then add this meta inside the `application` tag

```xml

<meta-data
        android:name="com.google.firebase.messaging.default_notification_channel_id"
        android:value="high_importance_channel"/>
```

-Add These Tags to Application Tage

```
android:requestLegacyExternalStorage="true"
android:usesCleartextTraffic="true" <!-- only if you use http not https, or you're testing the app-->
```

# Ios permissions

1. update and uncomment Podfile min version to 10.0 =>platform :ios, '`10.0'`
2. add these permissions on the `ios/Runner/Info.plist`
3. full example for app use v chat `Podfile` file can be
   founded [here](https://github.com/hatemragab/superup/blob/5924d613fa76e03eee520e65fbaa97c8f052a8ab/apps/super_up_app/ios/Podfile)
4. for `ios` full example can be
   founded [here](https://github.com/hatemragab/superup/tree/5924d613fa76e03eee520e65fbaa97c8f052a8ab/apps/super_up_app/ios)

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

- replace all `vchatsdk` by your app name <br />

## some important notes

1. while init the controller and pass
   the `await VChatController.init( vChatConfig: VChatConfig(encryptHashKey:"$$THIS KEY$$""))`
2. `$$THIS KEY$$` in above code must be the same as the .env `encryptHashKey` must be the same otherwise will users will
   face login problem!
 