---
sidebar_position: 4
id: room_page
title: Flutter room page package
---

## how to render the rooms tab

- you need to create VRoomController in your page controller state
- don't forget to dispose it

```
final vRoomController = VRoomController();
VChatPage(
      useIconForRoomItem: false, //set this to run to only show the user icon for chats slider
      appBar: AppBar(
        title: const Text('Chats Tab View'),
        centerTitle: true,
      ),
   //   floatingActionButton: FloatingActionButton(
   //    onPressed: controller.onCreateGroupOrBroadcast,
   //     child: const Icon(Icons.add),
   //   ),
      controller: controller.vRoomController,
    )
```

- make sure `final vRoomController = VRoomController();` will be created `once` while app life cycle!
- so you can call it in initState method of base home screen scaffold do some debugs to insure it call once

## how to update theme