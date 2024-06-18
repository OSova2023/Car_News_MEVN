import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
});

export const Comments = model("comments", CommentSchema);
