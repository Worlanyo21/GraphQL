import mongoose from "mongoose";
import { schemaComment } from "./model_comment";
const { Schema, model } = mongoose;

export const schemaPost = new Schema({

  //defines the title of post
  title: {
    type: String,
    required: true,
  },

  //defines the details of the blog
  details: {
    type: String,
  },

  //defines the date
  date: {
    type: Date,
    default: Date.now(),
  },

  //defines the author of post
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "author",
  },

  //defines the banner for the post
  banner: {
    type: String,
  },

  //displays all comments on post
  comments: {
    type: [schemaComment],
  },

  //displays the number of likes for a specific post
  likes: {
    type: Number,
    default: 0,
  },

  //shows the number of unlikes pertaining to post
  Unlikes: {
    type: Number,
    default: 0,
  },
});

const modelPost = model("post", schemaPost);

export default modelPost;
