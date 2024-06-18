import express from "express";
import { connect } from "mongoose";
import { MONGO, PORT } from "./config";
import { CommentRouter } from "./router/comment";
import { ArticlesRouter } from "./router/article";

import cors from "cors";
const bodyParser = require("body-parser");

const app = express();

try {
  connect(MONGO);
  console.log("we are connected to db");
} catch (err) {
  console.log(err);
}

app.use("/api/new-comment", CommentRouter);
app.use("/api/articles-list", ArticlesRouter);

app.use(express.urlencoded({ extended: false })); // используем промежуточный обрабтчик, который позволяет получать данные из формочек
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.status(200).send("server side");
// });

app.listen(PORT, () => console.log("Server is listened"));
