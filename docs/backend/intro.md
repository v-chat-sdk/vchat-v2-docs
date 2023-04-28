---
sidebar_position: 1
id: intro
title: Backend installation
---

## Requirements for local & production

1. install nodejs and npm and check the versions you should have node version above v16 check node version by `node -v`
2. install cross-env globally `npm i -g cross-env` for manage to set the production or development env
   & `npm install -g @nestjs/cli` for build for nestjs
3. install [Redis](https://redis.io) this used for socket.io connection for cluster mode support
4. install [mongodb](https://www.mongodb.com/try/download/community-kubernetes-operator) mim v4.4 or above v6 is
   recommended
5. create aws account and register new S3 bucket make sure to have this data

- Follow this video for more info [Link](https://www.youtube.com/watch?v=NZElg91l_ms&t=585s)
- after update you will need to update some policy
- update this values inside the .env.*

1. S3_ACCESS_KEY_ID="AKIA--------"
2. S3_SECRET_KEY="ax2nDid-------"
3. BUCKET_REGION="eu------"
4. BUCKET="-------"

## .env files

1. You have **.env.development** and **.env.production**
2. `.env.development` put the data of development in this file
3. `.env.production` put the data of production in this file

- `DB_URL`="mongodb://127.0.0.1:27017/v_chat_sdk_v2" **mongo db full url**
- `JWT_SECRET`="a%dyFjcZp*xL$Qbek" **very storage password**
- `REDIS_URL`="redis://localhost:6379" put the url of your **REDIS** server
- `issuer`="v_chat_sdk_v2@gmail.com"
- `audience`="chat.vchatsdk.com"
- `encryptHashKey`="V_CHAT_SDK_V2_VERY_STRONG_KEY" very storage password this `must` be same as
  flutter `encryptHashKey` this key `not changeable` if you change this key all old logins `will fail` please wait until
  next update i will found solution to let you update safely
- `isOneSignalEnabled` ="true" if you support onesignal
- `isFirebaseFcmEnabled` ="true" if you support firebase fcm then you should update `firebase.adminsdk.json` file by
  your firebase account real file.
- `oneSignalAppId`="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" leave this empty if you not support `onesignal_push`
- `oneSignalApiKey`="xxxxxxxxxxxx" leave this empty if you not support `onesignal_push`
- `S3_ACCESS_KEY_ID`="AKxxxxxxxxxx" s3 access key from the console
- `S3_SECRET_KEY`="xxxxxx" s3 secret access key from the console
- `BUCKET_REGION`="xxxxx" BUCKET_REGION
- `BUCKET`="xxxxxxx" **bucket name**
- `NODE_ENV`=`development` production for `.env.production`
- `ignoreEnvFile`="false" set this to true if you will inject the env variables from the OS system level if you will use
  the .env.* file the let it false
- `EDIT_MODE` ="false" for do some urgent apis updates set to to **false** now
- `PORT`=3001 set nodejs exported port to work

### How to get `firebase.adminsdk.json`

- if this step not done correctly the notifications of chat will not arrive follow this
  to get your file [Link](https://www.youtube.com/watch?v=cXOzbKDXTh0)
- then update `firebase.adminsdk.json` by yours

### How to onesignalKeys

- create firebase account and follow this steps [Link](https://www.youtube.com/watch?v=FOkgfsTwvC4) to get the keys and
  update

1. `oneSignalAppId`="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
2. `oneSignalApiKey`="xxxxxxxxxxxx"

### run the code

1. open terminal in the `backend` code root folder
2. `npm i` or `npm i --force` if some problem happens
3. `npm run start:dev`
4. if you see `app run in development` then your code is ready for development server in production you should
   see `production`
5. for production run `npm run build` then `npm run start:prod`
6. access the server for development in `localhost:3001/api/v2` for production in port `80` if you need to change this
   update

- update this line in `.env file` update `PORT` if you run the docker then make sure to update
  then `environment variable os (env)`

### Docker ready

- if your have docker run into your system then you can go by run the `Dockerfile`
- this `Dockerfile` only up the v_chat_sdk without mongodb or redis you need to manage it by your self
- you need to run redis container and mongo db if you save the mongo db inside the same machine and update
  the `.env.production`
- You need to create docker container for mongodb and redis this is up to you if you already host mongodb in another vps
  or run `compose file` for development or update the environments inside the docker compose if you will
  user `compose file`
- to run docker compose file make sure to update the environment inside the compose-file first then
  run `docker-compose up -d`

### information's

1. the app not use Persistent Data inside the system for chats it saved in `mongo` media in `S3`

### some errors may happen

1. if you see `ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist
   TypeError: Configuration key "JWT_SECRET" does not exist` this means the nestjs cant read your `.env.*` file

- to fix this make sure you inject the environment variable or make sure the .env.production exist in the root of file
  .git may ignore it
- `The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.`
- this happens because you enabled FCM but not [configure](https://www.youtube.com/watch?v=cXOzbKDXTh0) it

### Still need more support

- you can contact me at `hatemragapdev@gmail.com` or skype `live:.cid.607250433850e3a6` i offer server deployment and
  ssl configuration for **150$** to deploy the
  server side and migrate old users if you have already production app in about 8 hours
- iam available for more customizations contact me