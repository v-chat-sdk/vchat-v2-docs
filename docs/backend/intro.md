---
sidebar_position: 1
id: intro
title: Backend installation
---

## Local & Production Environment Setup

### Requirements

1. Install Node.js (version `v16` or higher) and npm. Check the Node.js version using `node -v`.
2. Install only if you not `docker user` cross-env `npm i -g cross-env` for managing production or development
   environments and pm2 for manage production deploy by `npm i -g pm2`
   CLI (`npm install -g @nestjs/cli`).

3. Install [MongoDB](https://www.mongodb.com/try/download/community-kubernetes-operator) (minimum `v4.4`,
   recommended `v6`).
4. Create an AWS account and register a new S3 bucket. Keep the following information handy:

    - AWS_ACCESS_KEY_ID
    - AWS_SECRET_ACCESS_KEY
    - BUCKET_REGION
    - BUCKET

   For more information, follow this [video tutorial](https://www.youtube.com/watch?v=NZElg91l_ms&t=585s).

### Environment Configuration

1. Two environment files are available: **.env.development** and **.env.production**.
2. Update **.env.production** with production data:

   ```
   DB_URL="mongodb://127.0.0.1:27017/v_chat_sdk_v2" # MongoDB full URL
   JWT_SECRET="a%dyFjcZp*xL$Qbek" # Secure password
   issuer="v_chat_sdk_v2@gmail.com"
   audience="chat.vchatsdk.com"
   encryptHashKey="V_CHAT_SDK_V2_VERY_STRONG_KEY" # Must be the same as the Flutter encryptHashKey and unchangeable
   isOneSignalEnabled="true" # Set to true if using OneSignal
   isFirebaseFcmEnabled="true" # Set to true if using Firebase FCM, and update the firebase.adminsdk.json file
   oneSignalAppId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx" # Leave empty if not using OneSignal push
   oneSignalApiKey="xxxxxxxxxxxx" # Leave empty if not using OneSignal push
   AWS_ACCESS_KEY_ID="AKxxxxxxxxxx" # S3 access key from the console
   AWS_SECRET_ACCESS_KEY="xxxxxx" # S3 secret access key from the console
   BUCKET_REGION="xxxxx" # S3 bucket region
   BUCKET="xxxxxxx" # S3 bucket name
   NODE_ENV="production" # For .env.production file
   ignoreEnvFile="false" # Set to true if injecting environment variables from the OS system level
   EDIT_MODE="false" # Set to false for urgent API updates
   PORT="3001" # Use 80 for production, set the Node.js exported port
   ```

   Note: Changing the `encryptHashKey` will cause old logins to fail. A solution for safe updates will be provided in
   future updates.

### Obtaining `firebase.adminsdk.json`

1. Make sure the firebase account is the same as the one used in flutter app.
2. To ensure chat notifications work properly, follow [this video](https://www.youtube.com/watch?v=cXOzbKDXTh0) to
   obtain the `firebase.adminsdk.json` file.
3. Replace the existing `firebase.adminsdk.json` file with your new one.

### Obtaining OneSignal Keys

1. Create a Firebase account and follow [this video](https://www.youtube.com/watch?v=FOkgfsTwvC4) to obtain OneSignal
   keys.
2. Update the following fields with your OneSignal keys:

   ```
   oneSignalAppId="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxx"
   oneSignalApiKey="xxxxxxxxxxxx"
   ```

### Running the Code (Without Docker)

1. Open a terminal in the `backend` root folder.
2. Run `npm i` or `npm i --force` if issues occur.
3. Generate a `dist` folder `npm run build`.
4. Run `npm run start:prod`. for live console logs if you run in production mode. in your vps server then you should
   run `pm2 start ecosystem.config.js --only normal --env production`. to see logs run `pm2 logs`
5. If you see `app run in production,` your code is production-ready.
6. Access the development server at `localhost:80` and production server at port `80`. Update the port
   in `.env.production` if necessary.
7. Update the `PORT` in the `.env` file if using Docker, and ensure you update the environment variable in the OS (env).

### Running the Code (With Docker)

1. Install [Docker](https://www.docker.com) and Docker Compose.
2. update `.env.production` this keys from `mongodb://127.0.0.1:27017/v_chat_sdk_v2`
   to `mongodb://v_mongodb:27017/v_chat_sdk_v2`
3. Run the `Dockerfile` if Docker is already installed on your system. Note that this only sets up v_chat_sdk and
   doesn't include MongoDB or Redis. You need to manage these separately OR.
4. Use a `compose file` witch manage all dependency together.
5. Run `docker-compose up` to start the containers and view logs, or run `docker-compose up -d` to run in the
   background.

### Additional Information

1. The app doesn't use persistent data for chats, which are saved in MongoDB, while media is stored in S3.
2. To ensure V_Chat_v2 is working, visit `HOST_OR_IP:PORT`. If you see "Congratulations V_Chat_v2 working successfully,"
   it is functioning correctly.

### Common Errors

1. If you encounter the error `ERROR [ExceptionHandler] Configuration key "JWT_SECRET" does not exist`, it means NestJS
   cannot read your `.env.production` file.

    - To fix this, ensure you have injected the environment variable or that `.env.production` exists in the root of the
      project. It may be ignored by .git.

2. If you see the
   error `The default Firebase app does not exist. Make sure you call initializeApp() before using any of the Firebase services`
   , it means you have enabled FCM but have not [configured](https://www.youtube.com/watch?v=cXOzbKDXTh0) it.

### Need More Support?

- after purchasing this code you will get one free setup for the server side.
- so you need to follow up this steps to get your server side ready to use.
- configure the `.env.production` file with your own data. as shown above. and the firebase fcm file collect it from
  your
  firebase account. and configure the s3 or send me the data and i will configure it for you.
- create `ubuntu` server and send me the ip address and the ssh key to access it.
- To enable free SSL from Let's Encrypt for your domain, you will need to point the DNS of your domain to our VPS
  hosting service. For example, if your domain is `example.com`, you can create a subdomain named `vchat.example.com`
  and
  point it to our `VPS` server. Additionally, it is important to add a wildcard route for `*.vchat.example.com` to ensure
  proper functioning.
- collect all data and send you purchasing key from `codecanyou` to `hatemragapdev@gmail.com` to get your free setup.

### Contact

- If you need further assistance, contact the developer at `hatemragapdev@gmail.com` or via Skype
  at `live:.cid.607250433850e3a6`. The developer offers server deployment, free SSL configuration, database viewer, and
  backup services for **$100**. This includes server-side deployment and amazon s3 setup and migration of old users, if
  you have an existing
  production app, within approximately 8 hours this will insure all about server side 100% configure.
- For additional customizations, feel free to reach out my.