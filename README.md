## React Contact Form App
This is a full stack contact form, build Node Express MongoDb Mongoose Nodemailer on server side and React js on client side

## Getting Started

### Prerequisites

Your machine should have npm(or yarn), NodeJS and MongoDB server installed to use this locally

### Installation

```js
git clone https://github.com/maxwell-kimaiyo/React-Node-contact-form.git
```

- Install server dependencies(in root directory)

```js
npm install
```

- Install client dependencies

```js
cd client
npm install
```

- You can either use your own local mongoDB database or any cloud database just change mongoURI and secretOrKey in config.js file

```js
export default {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/Contact',
};

```

- This app uses concurrently so you don't need to run 2 different instances for client and server, use this command in root directory to run the app.

```js
npm run dev
```


Let me know if you have any questions. [Email Maxwell](developerkimaiyo@gmail.com)