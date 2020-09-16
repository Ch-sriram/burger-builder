# Deploying an App to Firebase 🔥

1. Before deploying the app to firebase, we should always make sure that the app is bundled into the `/build` directory. In our specific case, we use **npm** to spit out the `/build` directory using **`npm run build`** script on the command-line.
2. Now we can deploy the contents of the `/build` directory onto firebase (where we choose the **Hosting** service). But before that, we can setup the Firebase CLI from these docs **[here](https://firebase.google.com/docs/cli/?authuser=0#install-cli-windows)**.
3. Instead of following the docs, we can:
   1. Install the `firebase-tools` &mdash; command: **`npm install -g firebase-tools`**.
   2. Once the `firebase-tools` are installed, we can authenticate by signing into the respective google account using the command: **`firebase login`**
   3. Then we initialize our project as a firebase project using the command: **`firebase init`**.  Choose the **Hosting: Configure and deploy Cloud Functions** option. After that, give the name of the directory where the entire project is built (eg. `build` directory in this case). Firebase CLI will present some options as follows:
      1. Configure as a single-page app (rewrite all urls to /index.html)? (y/N) &mdash; in our case it is 'y'.
      2. File build/index.html already exits. Overwrite? (y/N) &mdash; in our case it is 'N'.
   4. Finally, we deploy the project using the command: **`firebase deploy`**
