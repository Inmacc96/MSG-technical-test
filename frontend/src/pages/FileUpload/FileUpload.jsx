import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axiosInstance from "../../utils/axios";
import Spinner from "../../components/Spinner/Spinner";
import FileExtension from "../../components/FileExtension/FileExtension";
import { formatDate, formatBytes } from "../../helpers";

import "./FileUpload.css";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = async (files) => {
    const filesArray = Array.from(files);

    setSelectedFiles(filesArray);

    let formData = new FormData();
    for (let i = 0; i < filesArray.length; i++) {
      formData.append("files", filesArray[i]);
    }

    axiosInstance.post("/upload_file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (data) => {
        setProgress(Math.round(100 * (data.loaded / data.total)));
      },
    });

    setProgress(0);
  };

  return (
    <>
      <header className="header-fileupload">
        <h1>Drag & Drop Files</h1>
      </header>

      <div className="container-fileupload">
        <div className="dragdropfile-progress">
          <h2>Upload your files here</h2>
          <FileUploader
            name="files"
            multiple={true}
            hoverTitle="Drop here"
            handleChange={handleChange}
            classes="file-uploader"
          />

          {progress > 0 && progress < 100 && <Spinner />}

          {progress !== 0 && (
            <div className="progressbar">
              <div className="progressbar-info">
                <span className="progressbar-text">
                  {progress === 100
                    ? "Completed"
                    : progress == 0
                    ? ""
                    : "Loading"}
                </span>
                <span className="progressbar-amount">{progress}%</span>
              </div>
              <div className="bar">
                <div
                  className="progressbar-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <div className="container-files">
          <h2> Uploaded files</h2>
          <div className="files">
            {!selectedFiles || selectedFiles.length === 0 ? (
              <p className="no-filesuploaded">No files uploaded</p>
            ) : (
              progress === 100 &&
              selectedFiles.map((file) => (
                <div
                  className="file"
                  key={Date.now() + Math.random().toString(36).substr(2)}
                >
                  <FileExtension file={file} />
                  <div className="file-description">
                    <p className="file-name">{file.name}</p>
                    <p className="file-size-date">
                      {formatDate(file.lastModified)} - {formatBytes(file.size)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <footer className="footer-fileUpload">
        <p>&copy; 2022 - Made by Inma Caballero</p>
      </footer>
    </>
  );
};

export default FileUpload;
