---
sidebar_position: 1
---

# Backend

## Requirements for local & production

1. install nodejs and npm and check the versions you should have node version above v16 check node version by `node -v`
2. install cross-env globally `npm i -g cross-env` & `npm install -g @nestjs/cli`
3. install [Redis](https://redis.io) this used for socket.io connection for cluster mode support
4. install [mongodb](https://www.mongodb.com/try/download/community-kubernetes-operator) mim v4.4 or above v6 is
   recommended
5. create aws account and register new S3 bucket make sure to have this data
- Follow this video for more info [Link](https://www.youtube.com/watch?v=NZElg91l_ms&t=585s)

- S3_ACCESS_KEY_ID="AKIA--------"
- S3_SECRET_KEY="ax2nDid-------"
- BUCKET_REGION="eu------"
- BUCKET="-------"


## .env files

1. You have **.env.development** and **.env.production**
2. `.env.development` put the data of development in this file
3. `.env.production` put the data of production in this file

- `DB_URL`="mongodb://127.0.0.1:27017/v_chat_sdk_v2" **mongo db full url**
- `JWT_SECRET`="a%dyFjcZp*xL$Qbek" **very storage password**
- `REDIS_URL`="redis://localhost:6379" put the url of your **REDIS** server
- `issuer`="v_chat_sdk_v2@gmail.com"
- `audience`="chat.vchatsdk.com"

- `encryptHashKey`="V_CHAT_SDK_V2_VERY_STRONG_KEY" very storage password this `must` be same as flutter encryptHashKey

- `isOneSignalEnabled` ="true" if you support onesignal
- `isFirebaseFcmEnabled` ="true" if you support firebase fcm then you should update `firebase.adminsdk.json` file by
  your firebase account real file.
- `oneSignalAppId`="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
- `oneSignalApiKey`="xxxxxxxxxxxx"
- `S3_ACCESS_KEY_ID`="AKxxxxxxxxxx" s3 access key from the console
- `S3_SECRET_KEY`="xxxxxx" s3 secret access key from the console
- `BUCKET_REGION`="xxxxx" 
- `BUCKET`="xxxxxxx" **bucket name**
- `NODE_ENV`=`development` production for `.env.production`
- `ignoreEnvFile`="false" set this to true if you will inject the env variables from the OS system level if you will use
   the .env.* file the let it false
- `EDIT_MODE` ="false" for do some urgent apis updates set to to **false** now

### How to get `firebase.adminsdk.json`
- if this step not done correctly the notifications of chat will not arrive follow this
  to get your file [Link](https://www.youtube.com/watch?v=cXOzbKDXTh0)
- then update `firebase.adminsdk.json` by yours

### How to onesignalKeys 
- create firebase account and follow this steps [Link](https://www.youtube.com/watch?v=FOkgfsTwvC4)

### run the code
1. `npm i` or `npm i --force` if some problem happens
2. `npm run start:dev` 
3. if you see `app run in development` then your code is ready for development server in production you should see `production`
4. for production run `npm run build` then `npm run start:prod`
5. access the server for development in `localhost:3001` for production in port `80` if you need to change this update
6. update this line in `src/main.js` `await app.listen(isDev ? 3001 : 80);`

### Docker ready
- if your have docker run into your system then you can go by run the `Dockerfile`
- this `Dockerfile` only up the v_chat_sdk without mongodb or redis you need to manage it by your self
- you need to run redis container and mongo db if you save the mongo db inside the same machine and update the `.env.production`

### information's
1. the app not use Persistent Data inside the system for chats it saved in `mongo` media in `S3`

### some errors may happen 
1. if you see `ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist
   TypeError: Configuration key "JWT_SECRET" does not exist` this means the nestjs cant read your `.env.*` file 
2. to fix this make sure you inject the environment variable