"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articles = void 0;
const mongoose_1 = require("mongoose");
const ArticleSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    img: { type: String, required: true },
});
exports.Articles = (0, mongoose_1.model)("articles", ArticleSchema);
