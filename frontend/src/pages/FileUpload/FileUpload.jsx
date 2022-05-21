import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axiosInstance from "../../utils/axios";

import "./FileUpload.css";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState();

  const handleChange = (files) => {
    setProgress(0);
    setSelectedFiles(files);

    let formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    axiosInstance.post("/upload_file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (data) => {
        setProgress(Math.round(100 * (data.loaded / data.total)));
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
      {progress && (
        <div className="wrapper">
          <div className="progress-bar">
            <span
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            >
              {progress}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
