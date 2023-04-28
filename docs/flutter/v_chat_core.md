---
sidebar_position: 2
id: core_package
title: Flutter core package
---

## about core package

- this package the boss of all packages
- the most important exported class is `VChatController` this can be used to `init` the package
- and create rooms and listen to events and perform custom http requests and listen to socket events and handle
  navigation and handle notifications
- you can start use the package by creating new file in the app lets call it `v_chat_config.dart`
- add the following code to it
- init method must be call `once` at app life cycle!

```dart
Future initVChat(GlobalKey<NavigatorState> navigatorKey) async {
  await VChatController.init(
    navigatorKey: navigatorKey,
    vChatConfig: VChatConfig(
      enableLog: kDebugMode,
      //optional
      enableEndToEndMessageEncryption: false,
      //optional not working yet
      maxGroupMembers: 512,
      //optional
      maxForward: 7,
      //optional
      maxBroadcastMembers: 512,
      //optional
      onReportUserPress: null,
      //optional
      googleMapsApiKey: "YOUR googleMapsApiKey",
      encryptHashKey: "V_CHAT_SDK_V2_VERY_STRONG_KEY",
      //must be same as the backend
      //
      baseUrl: "Your v chat base url for local run put localhost:3001 for local run on emulator put 10.0.2.2:3001",
      //
      vPush: VPush(
        enableVForegroundNotification: true,
        vPushConfig: const VLocalNotificationPushConfig(),
        fcmProvider: VChatFcmProver(),
        oneSignalProvider: VChatOneSignalProver(
          appId: "oneSignalKey",
        ),
      ),
    ),
    vNavigator: VNavigator(
      roomNavigator: vDefaultRoomNavigator,
      callNavigator: vDefaultCallNavigator,
      messageNavigator: VMessageNavigator(
        //this happens when user click on image in message page
        toImageViewer: vDefaultMessageNavigator.toImageViewer,
        //this happens when user click on show media drop down in message page
        toViewChatMedia: vDefaultMessageNavigator.toViewChatMedia,
        //this happens when user click on video in message page
        toVideoPlayer: vDefaultMessageNavigator.toVideoPlayer,
        //this happens when user click on see message information to know when the message send or delivered or seen at for `direct` chat
        toSingleChatMessageInfo:
        vDefaultMessageNavigator.toSingleChatMessageInfo,
        //when user click on notification or lunch the app from notification this function will call to open the message page
        toMessagePage: (context, vRoom) {
          return context.toPage(VMessagePage(
            vRoom: vRoom,
            //set message page configuration here
            vMessageConfig: VMessageConfig(
              googleMapsApiKey: dotenv.env['googleMapsApiKey'],
              //optional if null then no shar location
              isCallsAllowed: true,
              //optional if you want to override the the ui of the model sheet witch open when user want to pick image or media
              onMessageAttachmentIconPress: null,
              //optional if user press the un block action inside the chat will be block auto from v chat but you maybe want to do more
              onUserUnBlockAnother: null,
              //optional when internet connection week or lost there are red widget say connecting... you can hide it if you wish
              showDisconnectedWidget: true,
              //optional not working yet
              onMessageLongPress: null,
              //optional if user press the block action inside the chat will be block auto from v chat but you maybe want to do more
              onUserBlockAnother: null,
              //optional set max upload media size it now 50mb
              maxMediaSize: 1024 * 1024 * 50,
              //optional set the image Quality
              compressImageQuality: 55,
              //optional max Record Time (not working for now)
              maxRecordTime: const Duration(minutes: 30), //optional
            ),
          ));
        },
        //this happens when user click on see message information to know when the message send or delivered or seen at for `broadcast` chat
        toBroadcastChatMessageInfo:
        vDefaultMessageNavigator.toBroadcastChatMessageInfo,
        //this happens when user click on see message information to know when the message send or delivered or seen at for `group` chat
        toGroupChatMessageInfo: vDefaultMessageNavigator.toGroupChatMessageInfo,
        //when user click on group title or icon to open group information to know more about this group like group members and more data
        toGroupSettings: (context, data) {
          Navigator.of(context).push(MaterialPageRoute(
            //data her hold the VToChatSettingsModel data 
            builder: (context) => GroupRoomSettingsView(settingsModel: data),
          ));
        },
        //when user click on peer user in direct chat title or icon to open peer chat user page you should handle this out of v chat scope
        toSingleSettings: (context, data, identifier) {
          Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => SingleRoomSettingsView(settingsModel: data),
          ));
        },
        //when user click `broadcast` chat title or icon to open broadcast chat page you should handle this out of v chat scope
        toBroadcastSettings: (context, data) {
          Navigator.of(context).push(MaterialPageRoute(
            builder: (context) =>
                BroadcastRoomSettingsView(settingsModel: data),
          ));
        },
        //when user click on group mention or username inside group chat so need to open peer profile you should handle this out of v chat scope 
        toUserProfilePage: (context, identifier) {
          Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => PeerProfileView(identifier: identifier),
          ));
        },
      ),
    ),
  );
}
```

- `encryptHashKey` must be same as the backend so ask the backend about it! it must be secret dont share it
- you need to call this function in `main.dart` after `WidgetsFlutterBinding.ensureInitialized();`
- create `final _navigatorKey = GlobalKey<NavigatorState>();` and pass this key to the function and dont forget to add
  it to `MaterialApp` to `navigatorKey: _navigatorKey,` this used to let user navigate when clicking to notification
- `vChatConfig: VChatConfig()` this contain the configuration of the package
- `googleMapsApiKey` set it or ignore it if you ignore the send location in chat will disappear
- `encryptHashKey` must be strong and not changeable and must be same as `.env` file in backend
- `baseUrl` the sev base url of the v chat server without `/api or v1` just like `Uri.parse("http://localhost:3001")`
  or `Uri.parse("http://domain.com")`
- `VPush` setup notifications provider `enableVForegroundNotification` if this true then you will let v chat handle in
  app open notifications
- `vPushConfig` this will help for let you add custom sound later
- `fcmProvider` to support firebase fcm make sure to configure it
- `oneSignalProvider` to support oneSignal make sure to configure it
- `vNavigator` used to open some pages if you want to override it actions you can

#### to make the user online in the system you should call

- this api must be called after user login or register into your system the best place is in home `initState` page
- usually the home open when user already has access if not you can put conditions and handle it
- this endpoint responsible for connect the user and make him online and receive messages in realtime

``` 
///get user saved login data from your system
final data = VAppPref.getMap(SStorageKeys.myProfile);

///its recommended to set fullName if it available this data for the current login user
  await VChatController.I.profileApi.connect
   (
       identifier: data!['userId'],
       fullName:"name" it can be null
   );
```

## how to start new chat

- call this api form any where in your app forget the `identifier` is same as the id which used for `connect` the user
  in the sept above

```
await VChatController.I.roomApi.openChatWith(
  peerIdentifier: "identifier",
);
```

## how to support new languages

- there are two prebuilt language support `ar` and `en`
- you can override them as you want by do the following5
- in `MaterialApp` under `localizationsDelegates: []`  add this and make sure you add v_chat_utils to your pub.yaml
- then add this delegate `VTrans.delegate` and make sure this line is above the `VTrans.delegate` to works
- this method works with any translate package you use inside the your app

``` 
 localizationsDelegates: [
         GlobalMaterialLocalizations.delegate,
         GlobalWidgetsLocalizations.delegate,
         GlobalCupertinoLocalizations.delegate,
         VTrans.withDefaultOverrides(
             OverridesVChatAr(), const Locale("ar")), this line override the arbic lanague
         VTrans.addNewLocal(NewVChatLangTr(), const Locale("tr")), // this line add new language support
         VTrans.delegate, // make sure this is in the end of the list!!!
  ],
```

- to override just make new class call it `OverridesVChatAr`
- with the following data
- v chat not support `countryCode` only just `languageCode`

```
class OverridesVChatAr extends VArLocalizations {
 //here you can override methods like
  @override
  String get search {
    return "اوفررايد اختبار";
  }
 }
 ```

- same for English `OverridesVChatEn  extends VEnLocalizations {`

#### Add new

- for add new language create new class with the language name like `NewVChatLangTr`
- then create the class like `class NewVChatLangTr extends VChatLocalizationLabels {}` and override all keys as you want

#### to update v chat sdk language you need to call this `VChatController.I.updateLanguageCode("en");`

## do more

#### call v chat package native apis

- you will need to call v chat native apis for do the following
- to see group settings or get some data from offline data base if you want
- check all apis here `VChatController.I.roomApi.`
- you can call the api of create `new group`

``` 
  await VChatController.I.roomApi.createGroup(
          dto: CreateGroupDto(
            identifiers: users.map((e) => e.id).toList(),
            title: title,
            platformImage: image,
          ),
        );
```

- `create broadcast` also and get `group members` and `kick user` if you admin and other like add members all stuff
  supported there

#### you can listen to v chat socket streams also!

- for example you can listen to all `unread count of messages like`

``` 
    VChatController.I.nativeApi.streams.totalUnreadMessageCountStream.listen((total) { 
      ///do your logic here
    });
```

- check out the other apis for `advanced` use

#### send custom message

- you can make this by the following
- first get the user `room id` by
- `await VChatController.I.roomApi.getPeerRoom(peerIdentifier: peerIdentifier)`
- then send message by `VChatController.I.roomApi.sendCustomMessage(roomId: roomId, data: {})`

## Group apis

- you can create group chat by call you must have at lest one user to the list you must not includes your current login
  user id v chat will take care of it

``` 
 await VChatController.I.roomApi.createGroup(
          dto: CreateGroupDto(
            identifiers: users.map((e) => e.id).toList(),
            title: title,
            platformImage: image, // is nullable VPlatformFileSource class
          ),
        );
```

`VPlatformFileSource` is the way of send files to the v chat sdk you can create from file by
call  `VPlatformFileSource.fromPath(filePath: filePath)`

- you can get the curren login user group info by call `VChatController.I.roomApi.getGroupVMyGroupInfo(roomId: roomId);`
- this contains

```dart
class VMyGroupInfo {
  final bool isMeOut;
  final int membersCount;
  final int totalOnline;
  final VGroupMemberRole myRole; //my group role it can be member admin superAdmin
  final VMyGroupSettings? groupSettings; // this can be null only you kick from the group
}
```

- group roles `member admin superAdmin` member the joined user can only leave the group `admin` can kick user or admin
  and upgrade downgrade users he cant perform any action to the `superAdmin` the group creator can do anything if he
  leaves the random assign will add another user to be `superAdmin` if the group all users left and has only one user
  and
  he leaves the group will be deleted!
- any user in group can update group `name` , `image` and `description` you can call
- Image

``` 
VChatController.I.roomApi.updateGroupImage(
            roomId: roomId,
            file: image,
          );
```

- Title

``` 
 await VChatController.I.roomApi
              .updateGroupTitle(roomId: roomId, title: newTitle);
```

- Description

``` 
     await VChatController.I.roomApi
              .updateGroupDescription(roomId: roomId, description: newDescription);
```

- Mute and unmute works for all rooms

``` 
 await VChatController.I.roomApi
              .muteRoomNotification(roomId);
              
 await VChatController.I.roomApi
              .unMuteRoomNotification(roomId);
```

- Add group members if you `Admin` or `superAdmin` only
- `await VChatController.I.roomApi.addParticipantsToGroup(roomId, list);`
- Update user role if you are `admin` or `superAdmin`

``` 
await VChatController.I.roomApi.changeGroupMemberRole(
    roomId: roomId,
    peerIdentifier: identifier,
    role: VGroupMemberRole.admin,
);
```

- Kick user if you are `admin` or `superAdmin`

``` 
  await VChatController.I.roomApi.kickGroupUser(
          roomId: roomId,
          peerIdentifier: identifier,
        );
```

### notifications

- you need to install [overlay_support](https://pub.dev/packages/overlay_support)
- and wrap the `MaterialApp` with `OverlaySupport.global()` this will add support for in app notifications