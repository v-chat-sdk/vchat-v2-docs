---
sidebar_position: 1
id: intro
title: Backend installation
---

## Requirements for local & production

1. install nodejs and npm and check the versions you should have node version above `v16` check node version
   by `node -v`
2. install cross-env globally `npm i -g cross-env` for manage to set the production or development env
   & `npm install -g @nestjs/cli` for build for nestjs
3. install [Redis](https://redis.io) this used for socket.io connection for cluster mode support `must be v 7` or above
4. install [mongodb](https://www.mongodb.com/try/download/community-kubernetes-operator) mim `v4.4` or `v6` is
   recommended
5. create aws account and register new S3 bucket make sure to have this data

- Follow this video for more info [Link](https://www.youtube.com/watch?v=NZElg91l_ms&t=585s)
- after update you will need to update some policy
- update this values inside the .env.*

1. AWS_ACCESS_KEY_ID="AKIA--------"
2. AWS_SECRET_ACCESS_KEY="ax2nDid-------"
3. BUCKET_REGION="eu------"
4. BUCKET="-------"

## .env files

1. You have **.env.development** and **.env.production**
2. `.env.production` put the data of production in this file

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
- `AWS_ACCESS_KEY_ID`="AKxxxxxxxxxx" s3 access key from the console
- `AWS_SECRET_ACCESS_KEY`="xxxxxx" s3 secret access key from the console
- `BUCKET_REGION`="xxxxx" BUCKET_REGION
- `BUCKET`="xxxxxxx" **bucket name**
- `NODE_ENV`=`production` for `.env.production`
- `ignoreEnvFile`="false" set this to true if you will inject the env variables from the OS system level if you will use
  the .env.* file the let it false
- `EDIT_MODE` ="false" for do some urgent apis updates set to to **false** now
- `PORT`=`3001` and `80` for production set nodejs exported port to work

### How to get `firebase.adminsdk.json`

- if this step not done correctly the notifications of chat will not arrive follow this
  to get your file [Link](https://www.youtube.com/watch?v=cXOzbKDXTh0)
- then update `firebase.adminsdk.json` by yours

### How to onesignalKeys

- create firebase account and follow this steps [Link](https://www.youtube.com/watch?v=FOkgfsTwvC4) to get the keys and
  update

1. `oneSignalAppId`="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
2. `oneSignalApiKey`="xxxxxxxxxxxx"

### run the code (without docker)

1. open terminal in the `backend` code root folder
2. `npm i` or `npm i --force` if some problem happens
3. `npm run start:prod`
4. if you see `app run in production` then your code is ready for production
5. to get deploy dist folder run `npm run build` this will generate `dist` file witch can use to run in production
   server
6. access the server for development in `localhost:80` for production in port `80` if you need to change this
   update if you cant access the server at this `port 80` you can change this port at `.env.production file`
7. update this line in `.env file` update `PORT` if you run the docker then make sure to update
  then `environment variable os (env)`

### run the code (with docker)

1. install [docker](https://www.docker.com) and docker compose

- if your have docker run into your system then you can go by run the `Dockerfile`
- this `Dockerfile` only up the v_chat_sdk without mongodb or redis you need to manage it by your self
- you need to run redis container and mongo db if you save the mongo db inside the same machine and update
  the `.env.production`
- You need to create docker container for mongodb and redis this is up to you if you already host mongodb in another vps
  or run `compose file` for development or update the environments inside the docker compose if you will
  user `compose file`
- to run docker compose file run `docker-compose up` to see logs or for in background `docker-compose up -d`

### information's

1. the app not use Persistent Data inside the system for chats it saved in `mongo` media in `S3`
2. to insure the v chat works visit `HOST_OR_IP:PORT` if you see `Congratulations V_Chat_v2 working successfully`

### some errors may happen

1. if you see `ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist
   TypeError: Configuration key "JWT_SECRET" does not exist` this means the nestjs cant read your `.env.*` file

- to fix this make sure you inject the environment variable or make sure the .env.production exist in the root of file
  .git may ignore it
- `The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services.`
- this happens because you enabled FCM but not [configure](https://www.youtube.com/watch?v=cXOzbKDXTh0) it

### Still need more support

- you can contact me at `hatemragapdev@gmail.com` or skype `live:.cid.607250433850e3a6` i offer server deployment and
  free ssl configuration and database viewer and backup on the best for **150$** to deploy the
  server side and migrate old users if you have already production app in about 8 hours
- iam available for more customizations contact me