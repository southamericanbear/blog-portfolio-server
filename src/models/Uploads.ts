import { Schema, model } from "mongoose";

const UploadSchema = new Schema({
  url: String,
  typeOfFile: String,
});

UploadSchema.methods.toJSON = function () {
  const { __v, _id, ...upload } = this.toObject();

  return upload;
};

export default model("Upload", UploadSchema);
