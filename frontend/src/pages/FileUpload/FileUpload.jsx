import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axiosInstance from "../../utils/axios";
import Spinner from "../../components/Spinner/Spinner";

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
          />

          {progress > 0 && progress < 100 && <Spinner />}

          {!error && progress !== 0 && (
            <>
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
              <div className="progressbar">
                <div
                  className="progressbar-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </>
          )}
        </div>
      </div>

      <footer className="footer-fileUpload">
        <p>&copy; 2022 - Made by Inma Caballero</p>
      </footer>
    </>
  );
};

export default FileUpload;
