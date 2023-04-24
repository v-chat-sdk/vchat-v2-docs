---
sidebar_position: 1
---

# Introduction to vchat-sdk-V2

vchat-sdk is a Saas chat system that provides real-time messaging capabilities for your web or mobile applications. It
is divided into two parts: the server-side and the client-side. The server-side is built using Node.js and Socket.IO for
real-time communication, and MongoDB for storing all data.

One of the unique features of vchat-sdk is that it does not depend on Firebase for storing any data, but it provides the
option to enable push notifications using Firebase Cloud Messaging (FCM) or OneSignal.

Get started by **creating a new app or existing app in production**.

## About V_CHAT_SDK

- this package which written in pure dart and nestjs for serverside help you to add chat functionality
- unlimited text/image/video/record/location/push notification/control of data
- to any existing or new flutter mobile project with any **back-end** service you use
- **vchat-sdk** is a easy way to integrate advanced real time message chat with 6 public api only 👌
- **vchat-sdk** use **Node js** as backend service and **Firebase** for (push notifications only) message database
  is **Mongo DB**

## About Micro Service

1. less load on your main server since chat has high traffic.
2. They enable scale. Scalability is about more than the ability to handle more volume. It’s also about the effort
   involved. Microservices make it easier to identify scaling bottlenecks and then resolve those bottlenecks at a
   per-microservice level.
3. They are relatively easy to build and maintain. Their single-purpose design means they can be built and maintained by
   smaller teams. Each team can be cross-functional while also specialise in a subset of the microservices in a
   solution.

## Use cases

1. If you want to have chat system in your app like whatsApp,facebook ...etc (perfect to social media apps)
2. If you have ecommerce apps and want to add chat feature to the app like delivery or OLX or facebook markets
3. Also, can be used for users real time chat support

## How V_CHAT_SDK works

- **vchat-sdk** connected with your backend service.
- vchat-sdk don't matter what is your backend code written because it will connect with it
  by public apis and run separately isolated but still connected by public apis
- When you register new user in your system you should call this public api
- so it will create separate database fro save users name,image,identifiers
- once the user connected successfully in your clint app usually this happens after success auth done
- you need to connect this user to v chat system so he can contact with other users
- if you have already app run in production state and you wish to integrate v chat you can do by migrate old users it
  will be explained in backend section

# Server Requirements for vchat-sdk

vchat-sdk is a lightweight Saas chat system that requires minimum server resources.

To run vchat-sdk, you need the following server specifications:

- 1 CPU core
- 1 GB RAM
- fast ssd storage
- any ubuntu version above 18
- we recommend to host in [digitalocean](https://www.digitalocean.com/)

In addition, you need to have a MongoDB database to store data. You can host a free MongoDB database on MongoDB Atlas,
which is a cloud-based database service that provides a simple and secure way to manage your data.

With these minimum server requirements, you can easily set up vchat-sdk and start using it to enable real-time messaging
in your web or mobile applications.

## Features

vchat-sdk supports the following features:

| Feature                                                   | Description                                                                                                                                                                                                                                                                                                        |
|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text, image, video, voice note, documents, location share | vchat-sdk supports various message types, including text, images, videos, voice notes, documents, and location sharing (no live location share just pin share).files and videos and image can be downloaded                                                                                                        |
| Direct, group, broadcast, order, system chats             | vchat-sdk supports various chat types, including direct messages, group chats, broadcast messages, order messages, and system messages manage group system (admin,superAdmin,members) like whatsApp                                                                                                                |
| Message status                                            | vchat-sdk supports various message statuses, including pending, send, error, sending, delivered,seen offline resend good support for week connections auto resend if failed with offline store for all types.                                                                                                      |
| Compress images and edit                                  | vchat-sdk supports image compression and editing to optimize image size and quality.                                                                                                                                                                                                                               |
| See message status for all room types                     | vchat-sdk provides the ability to view message status for all room types.                                                                                                                                                                                                                                          |
| Video call and voice for single rooms                     | vchat-sdk supports video calls and voice messages for single rooms using `WebRTC`. later we will add `agora.io` and you will have choose to use the suitable                                                                                                                                                       |
| Last seen and group (total online, total members count)   | vchat-sdk provides information about the last seen status of users and group statistics, including total online and total members count.                                                                                                                                                                           |
| Good voice player support                                 | vchat-sdk provides a good voice player that supports seeking, auto-playing the next message, and variable playback speeds.                                                                                                                                                                                         |
| Multi-platform support                                    | vchat-sdk supports various platforms, including Android, iOS, web, macOS, and Windows.                                                                                                                                                                                                                             |
| Offline message and chat storage                          | vchat-sdk allows messages and chats to be downloaded offline for fast loading chats text are saved media for only 7 days after that they well be auto download and saved again for reduce phone storage.                                                                                                           |
| Public APIs ready to integrate                            | vchat-sdk provides easy-to-use public APIs for integrating into your system.                                                                                                                                                                                                                                       |
| In-app notifications                                      | vchat-sdk provides full support for in-app notifications using `FCM` or `OneSignal`, and can detect if the device does not support FCM and will try to register with OneSignal if it is enabled.                                                                                                                   |
| almost full customizable                                  | you can customize the theme and actions done through the package                                                                                                                                                                                                                                                   |
| prebuild for admin panel apis                             | there are apis to build your control panel so you can access and manage users and chats                                                                                                                                                                                                                            |
| records emojis and gif support                            | ban users mute chat leave group delete chat delete message from you and from all support                                                                                                                                                                                                                           |
| Messages features                                         | forward to multi rooms (you can set max forward option) and reply and auto highlight to the the replied message share message outside and get message info when is send,delivered,seen delete from you only and delete form all receivers app accept share media from outside apps search are supported and more!! |
| Rooms features                                            | single room (direct chat) group,broadcast you can set max limit for users to be joined order room for manage orders chats like OLX or facebook market,system chat this for admin to notify or max contactus for live support  chat! users can delete room and search and more!!                                    |
| i18n                                                      | you can support any language to translate the app                                                                                                                                                                                                                                                                  |

With vchat-sdk, you can easily integrate real-time messaging into your applications without the need to build your own
chat system from scratch.

## Information's

1. this is not full app this only apis to make the chat development faster and easy! if you want full app then you need
   to look at **[superUp](https://github.com/hatemragab/superup)**
2. no prebuild admin panel ui but there are prebuild postman apis for integrate the chat panel to your system
   see [admin_apis](./backend/admin_apis.md) section
3. all apis you can see it before you buy the source code
   see [PostmanCollection](https://documenter.getpostman.com/view/24524392/2s93Jox6Dq)
4. need to see example of current `features`? then you need to see an open source clint app use v_chat_sdk here
   is **[superUp](https://github.com/hatemragab/superup)**
5. if you want to build a web version form this package you can use flutter web all of packages support web for flutter
   but if you want to integrate with other projects like React or angular etc... you can do this by your self by
   integrating the apis and build your components using
   our [PostmanCollection](https://documenter.getpostman.com/view/24524392/2s93Jox6Dq) collection
   and [socket.io](./backend/socket_io_apis.md) events