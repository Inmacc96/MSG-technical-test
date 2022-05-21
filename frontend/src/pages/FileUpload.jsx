import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const FileUpload = () => {
  const [file, setFile] = useState([]);

  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div>
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader
        name="file"
        multiple={true}
        hoverTitle="Drop here"
        handleChange={handleChange}
      />
    </div>
  );
};

export default FileUpload;
