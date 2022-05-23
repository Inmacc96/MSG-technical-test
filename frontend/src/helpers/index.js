export const getExtensionFile = (file) => {
  return file.type?.split("/")[1];
};

export const formatDate = (date) => {
  const newDate = new Date(date);

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return newDate.toLocaleDateString("en-GB", options);
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
