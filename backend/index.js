import express from "express";
import cors from "cors";
import multer from "multer";

import upload from "./upload.js";

const app = express();

//Add the client URL to the CORS policy
const whiteList = ["http://localhost:3000"];
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

app.post("/upload_file", upload.array("files"), function (req, res) {
  if (!req.files) {
    throw Error("FILE_MISSING");
  } else {
    res.send({ status: "success" });
  }
});

