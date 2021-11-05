import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const schemaComment = new Schema({
  //defines username of person who posted a comment
  userName: {
    type: String,
    required: true,
  },

  //defines comment that has been posted
  comment: {
    type: String,
  },
});

const modelComment = model("comment", schemaComment);

export default modelComment;
