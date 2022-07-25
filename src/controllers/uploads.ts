import { Request, Response } from "express";
import cloudinary from "cloudinary";
import { cloudinaryUpload } from "../utils";
import Upload from "../models/Uploads";

interface IUploadRequest extends Request {
  files?: any;
}

export const getUploadFiles = async (req: Request, res: Response) => {
  try {
    const uploads = await Upload.find();
    res.status(200).json(uploads);
  } catch (error: any) {
    res
      .status(500)
      .json({
        msg: error.message,
        txt: "Something happened please reach the admin",
      });
  }
};

export const uploadFile = async (req: IUploadRequest, res: Response) => {
  try {
    const imgURL = await cloudinaryUpload(req.files.file);
    if (imgURL) {
      const upload = new Upload({
        url: imgURL,
      });
      await upload.save();
      res.status(200).send({ msg: "File uploaded successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};
