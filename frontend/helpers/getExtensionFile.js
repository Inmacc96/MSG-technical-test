const getExtensionFile = (file) => {
  return file[0].type.split("/")[1];
};

export default getExtensionFile;
