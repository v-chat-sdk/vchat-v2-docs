---
sidebar_position: 3
id: message_page
title: Flutter message page package
---

## how to render navigate to message page

- you need to create Wrapper around the

```dart
import 'package:flutter/material.dart';
import 'package:v_chat_message_page/v_chat_message_page.dart';
import 'package:v_chat_sdk_core/v_chat_sdk_core.dart';

class MyProjectMessagePageWrapper extends StatelessWidget {
  final VRoom room;

  const MyProjectMessagePageWrapper({
    Key? key,
    required this.room,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return VMessagePage(
      vRoom: room,
      vMessageConfig: VMessageConfig(
        googleMapsApiKey: "AzoisfXXXXXXXXXXXX", //your maps key
        isCallsAllowed: false,
      ),
    );
  }
}

```

- and set `MyProjectMessagePageWrapper` to the VChatController to vNavigator: VNavigator()

``` 
  toMessagePage: (context, vRoom) {
   Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => MyProjectMessagePageWrapper( room: vRoom,),
    ));
  },
```

- you can do some customizations check out all `VMessageConfig` class
- [vRoom]: The chat room for which the messages are displayed. This parameter is required.
- [isCallsAllowed]: A boolean value that indicates whether calls are allowed in the chat room. The default value is
  true.
- [currentTheme]: set current theme for the v chat message page you can check the dark mode and pass the correct theme
  you can pass [VLightMessageTheme] OR [VDarkMessageTheme]
- [onUserBlockAnother]: A callback function that is called when a user blocks another user. This parameter is optional.
- [onMessageAttachmentIconPress]: A callback function that is called when the user clicks on the attachment icon in the
  message input box. This parameter is optional and returns a future VAttachEnumRes instance.
- [onUserUnBlockAnother]: A callback function that is called when a user unblocks another user. This parameter is
  optional.
- [googleMapsApiKey]: A string value that represents the Google Maps API key. This parameter is optional.
- [maxMediaSize]: An integer value that represents the maximum size of the media files that can be uploaded. The default
  value is 50 MB.
- [compressImageQuality]: An integer value that represents the quality of the compressed image. The default value is 55.
- [maxRecordTime]: A Duration instance that represents the maximum duration of the recorded audio. The default value is
  30 minutes.

## how to update theme

- to update theme and render custom message this can be through the theme extensions inside `ThemeData` in `darkTheme`
  or `theme` inside the `MaterialApp`
- for `dark` theme use

``` 
darkTheme: ThemeData(
          extensions: [
            VMessageTheme.dark().copyWith(
              scaffoldDecoration:  BoxDecoration(
                color: Colors.green
              ),
              receiverTextStyle: TextStyle(),
               customMessageItem: (context, isMeSender, data) {
                  ///render here the custom message data is the map of data that you attached while send custom message
                },
              receiverBubbleColor: Colors.green
            ),
          ],
        ),
```

- for `light` theme use

```
   theme: ThemeData(
            extensions: [
                 VMessageTheme.dark().copyWith(
              scaffoldDecoration:  BoxDecoration(
                color: Colors.green
              ),
              receiverTextStyle: TextStyle(),
               customMessageItem: (context, isMeSender, data) {
                  ///render here the custom message data is the map of data that you attached while send custom message
                },
              receiverBubbleColor: Colors.green
            ),
            ],
          ),
```

## render custom message
