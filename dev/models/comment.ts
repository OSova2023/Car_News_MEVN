import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  id: { type: Number, required: false },
  name: { type: String, required: true },
  text: { type: String, required: true },
});

export const Comments = model("comments", CommentSchema);
