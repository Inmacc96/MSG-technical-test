# MicroStock-Growth-technical-test

This code belongs to the MicroStock Growth technical access test.

## 📌 Table of contents

- [Introduction](#introduction)
- [Usage](#🔧-usage)
- [Built with](#🛠-built-with)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Deploy](#📦-deployment)
- [Links](#🖇-links)
- [Author](#👩🏽-author)

## 🚀 Introduction

The application consists of two parts:

- The **login** page, where you will find a form to log in with your username and password. It has two buttons:

     1. The first button redirects you to the fileUpload page after doing some basic validations.
     2. The second button sends the content of the form to the server, which checks if the username is *Growth* and if the encrypted password sent from the form matches *password*.

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

Finally, you will have the server at http://localhost:8081/ and the client at http://locahost:3000/.

## 🛠 Built with

### Frontend

- [react JS](https://reactjs.org/)
- [react-router-dom](https://reactrouter.com/)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [react-drag-drop-files](https://www.npmjs.com/package/react-drag-drop-files)
- [axios](https://axios-http.com/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [ant-design](https://ant.design/)

### Backend

- [express](https://expressjs.com/)
- [multer](https://www.npmjs.com/package/multer)
- [cors](https://www.npmjs.com/package/cors)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

### 📦 Deployment

- [Netlify](https://www.netlify.com/)
- [Heroku](https://www.heroku.com)

## 🖇 Links

- Solution URL: [https://github.com/Inmacc96/MSG-technical-test.git](https://github.com/Inmacc96/MSG-technical-test.git)
- Live Site URL:

## 👩🏽 Author

- GitHub - [inmacc96](https://github.com/Inmacc96)
- LinkedIn - [Inma Caballero Carrero](https://www.linkedin.com/in/inmacaballerocarrero/)
