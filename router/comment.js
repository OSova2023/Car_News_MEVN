"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRouter = void 0;
const comment_1 = require("../models/comment");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newComment = new comment_1.Comments(req.query);
        const result = yield newComment.save();
        if (!result)
            throw new Error("Comment isn't saved");
        res.status(200);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getComments = yield comment_1.Comments.find();
        if (!getComments)
            throw new Error("No items");
        res.status(200).send(getComments);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield comment_1.Comments.deleteOne({ _id: req.params.id });
        if (!result)
            throw new Error("No items");
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500);
    }
}));
exports.CommentRouter = router;
