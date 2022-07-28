import { Schema, model } from "mongoose";

const PostSchema = new Schema({
  draft: {
    type: Boolean,
    default: true,
  },
  readyToPost: {
    type: Boolean,
    default: true,
  },
  dateToBePosted: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.methods.toJSON = function () {
  const { __v, _id, ...post } = this.toObject();
  post.uid = _id;
  return post;
};

export default model("Post", PostSchema);
