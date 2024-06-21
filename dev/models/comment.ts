import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  text: { type: String, required: true },
});

export const Comments = model("comments", CommentSchema);
