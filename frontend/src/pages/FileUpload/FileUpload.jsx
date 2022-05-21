import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axiosInstance from "../../utils/axios";

import "./FileUpload.css";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (files) => {
    setSelectedFiles(files);

    let formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    axiosInstance.post("/upload_file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader
        name="files"
        multiple={true}
        hoverTitle="Drop here"
        handleChange={handleChange}
      />
    </div>
  );
};

export default FileUpload;
