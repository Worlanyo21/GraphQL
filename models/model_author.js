import mongoose from "mongoose";
import { postSchema } from "./model_post";
const { Schema, model } = mongoose;

const schemaAuthor = new Schema({
  //defines the name of author
  name: {
    type: String,
    required: true,
  },

  //defines the details of the post
  posts: {
    type: [postSchema],
  },
});

const modelAuthor = model("author", schemaAuthor);

export default modelAuthor;
