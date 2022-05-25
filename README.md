# MicroStock-Growth-technical-test

This code belongs to the MicroStock Growth technical access test.

## 📌 Table of contents

- [Introduction](#🚀-introduction)
- [Usage](#🔧-usage)
  -[Environment variables](#📄-environment-variables)
- [Built with](#🛠-built-with)
  - [Frontend](#🖥-frontend)
  - [Backend](#⚙️-backend)
  - [Deploy](#📦-deployment)
- [Links](#🖇-links)
- [Author](#👩🏽-author)

## 🚀 Introduction

The application consists of two parts:

- The **login** page, where you will find a form to log in with your username and password. It has two buttons:

  1.  The first button redirects you to the fileUpload page after doing some basic validations.
  2.  The second button sends the content of the form to the server, which checks if the username is _Growth_ and if the encrypted password sent from the form matches _password_.

- The **fileUpload** page, where files can be uploaded to the server, shows a process bar while they are being uploaded and finally information about the uploaded files. In particular, the name, the extension, the date of the last modification and the size of the file.

## 🔧 Usage

To deploy the project locally, follow these steps:

1. Clone my repository with the command `git clone https://github.com/Inmacc96/MSG-technical-test.git`.
2. Access the backend folder from a terminal and run the following commands:

- `npm install`
- `npm start`

3. Next, access the frontend folder from another terminal and run the following commands:

- `npm install`
- `npm run dev`

Finally, you will have the server at http://localhost:8081 and the client at http://locahost:3000.

### 📄 Environment variables

It is important to add the *.env* file in the backend folder with the following content:

```
FRONTEND_URL="http://localhost:3000"
```

and the *.env* file in the frontend folder with the following:

```
VITE_API_URL="http://localhost:8081"
```

## 🛠 Built with

### 🖥 Frontend

- [react JS](https://reactjs.org/): Web library used.
- [react-router-dom](https://reactrouter.com/): To build the routing system.
- [react-toastify](https://www.npmjs.com/package/react-toastify): To add the notification to the API results
- [react-drag-drop-files](https://www.npmjs.com/package/react-drag-drop-files): Used to add the drag and drop file component.
- [axios](https://axios-http.com/): To make HTTP requests to the server.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Used to encrypt password
- [ant-design](https://ant.design/): To use the icons about the extension of the uploaded files.

### ⚙️ Backend

- [express](https://expressjs.com/): Node.js framework used.
- [multer](https://www.npmjs.com/package/multer): Used to upload files to the server.
- [cors](https://www.npmjs.com/package/cors): To allow our client to access the server's resources.
- [dotenv](https://www.npmjs.com/package/dotenv): To access environment variables.
- [body-parser](https://www.npmjs.com/package/body-parser): To read the HTTP request body.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Used to compare the encrypted password with the original password.

### 📦 Deployment

- [Heroku](https://www.heroku.com)

## 🖇 Links

- Solution URL: [https://github.com/Inmacc96/MSG-technical-test.git](https://github.com/Inmacc96/MSG-technical-test.git)
- Live Site URL: [https://msg-technical-test.herokuapp.com/](https://msg-technical-test.herokuapp.com/)

## 👩🏽 Author

- GitHub - [inmacc96](https://github.com/Inmacc96)
- LinkedIn - [Inma Caballero Carrero](https://www.linkedin.com/in/inmacaballerocarrero/)
