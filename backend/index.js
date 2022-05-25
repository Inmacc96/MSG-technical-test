import express from "express";
import cors from "cors";
import multer from "multer";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import upload from "./upload.js";

const app = express();

dotenv.config();

//Add the client URL to the CORS policy
const whiteList = [process.env.FRONTEND_URL];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/ping", function (req, res) {
  res.json({ status: "OK" });
});

app.post("/upload_file", upload.array("files"), function (req, res) {
  if (!req.files) {
    throw Error("FILE_MISSING");
  } else {
    res.send({ status: "success" });
  }
});

//Error handling
app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.statusCode = 400;
    res.send({ code: err.code });
  } else if (err) {
    if (err.message == "FILE_MISSING") {
      res.statusCode = 400;
      res.send({ code: err.message });
    } else {
      res.statusCode = 500;
      res.send({ code: "GENERIC_ERROR" });
    }
  }
});

// EXTRA
app.use(bodyParser.json());

const checkPassword = async (username, password) => {
  const password_not_decrypted = "password";
  const result = await bcrypt.compare(password_not_decrypted, password);
  return result;
};

const authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  const responseAPI = {};

  // Check if the username is "Growth"
  if (username === "Growth") {
    responseAPI.msg = `Ok, your encrypted password is ${password}`;
  } else {
    responseAPI.msg = "NO";
  }

  // Check if the password is "password"
  responseAPI.isValidPassword = await checkPassword(username, password);

  res.json({ responseAPI });
};
app.post("/login", authenticateUser);

const port = process.env.PORT || 8081;

const server = app.listen(port, function () {
  console.log(`Server started at ${port}`);
  console.log(process.env.FRONTEND_URL);
});
