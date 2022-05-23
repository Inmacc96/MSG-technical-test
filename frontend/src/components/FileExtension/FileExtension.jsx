import {
  FileImageFilled,
  FilePdfFilled,
  FileZipFilled,
  FileWordFilled,
  FileExcelFilled,
  FilePptFilled,
  FileFilled,
  FileMarkdownFilled,
} from "@ant-design/icons";
import { getExtensionFile } from "../../helpers";

const extensionsImages = [
  "png",
  "jpg",
  "jpeg",
  "gif",
  "tiff",
  "psd",
  "eps",
  "ai",
  "indd",
];

const FileExtension = ({ file }) => {
  return (
    <div className="files-extension">
      {extensionsImages.includes(getExtensionFile(file)) ? (
        <FileImageFilled style={{ fontSize: "30px", color: "#3b7a47" }} />
      ) : getExtensionFile(file) === "pdf" ? (
        <FilePdfFilled style={{ fontSize: "30px", color: "#F93943" }} />
      ) : getExtensionFile(file) === "zip" ? (
        <FileZipFilled style={{ fontSize: "30px", color: "#f7ce68" }} />
      ) : getExtensionFile(file)?.includes("wordprocessingml.document") ? (
        <FileWordFilled style={{ fontSize: "30px", color: "#445e93" }} />
      ) : getExtensionFile(file)?.includes("spreadsheetml.sheet") ? (
        <FileExcelFilled style={{ fontSize: "30px", color: "#3b7a47" }} />
      ) : getExtensionFile(file)?.includes("presentationml.presentation") ? (
        <FilePptFilled style={{ fontSize: "30px", color: "#F93943" }} />
      ) : getExtensionFile(file) === "mkd" ? (
        <FileMarkdownFilled style={{ fontSize: "30px", color: "#445e93" }} />
      ) : (
        <FileFilled style={{ fontSize: "30px", color: "#5e5e5e" }} />
      )}
    </div>
  );
};

export default FileExtension;
