"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const config_1 = require("./config");
const comment_1 = require("./router/comment");
const article_1 = require("./router/article");
const cors_1 = __importDefault(require("cors"));
const bodyParser = require("body-parser");
const app = (0, express_1.default)();
try {
    (0, mongoose_1.connect)(config_1.MONGO);
    console.log("we are connected to db");
}
catch (err) {
    console.log(err);
}
app.use("/api/new-comment", comment_1.CommentRouter);
app.use("/api/articles-list", article_1.ArticlesRouter);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3500"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express_1.default.urlencoded({ extended: false })); // используем промежуточный обрабтчик, который позволяет получать данные из формочек
app.use((0, cors_1.default)());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   res.status(200).send("server side");
// });
app.listen(config_1.PORT, () => console.log("Server is listened"));
