import { Schema, model } from "mongoose";

const ArticleSchema = new Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  img: { type: String, required: true },
});

export const Articles = model("articles", ArticleSchema);
