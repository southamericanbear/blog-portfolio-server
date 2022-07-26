const cloudinary = require("cloudinary");
cloudinary.config(process.env.CLOUDINARY_URL);

export const cloudinaryUpload = async (file: any) => {
  const { tempFilePath } = file;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath, {
    resource_type: "auto",
  });
  return secure_url;
};
