import { Comments } from "../models/comment";
import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const newComment = new Comments(req.query);
    const result = await newComment.save();
    if (!result) throw new Error("Comment isn't saved");
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.get("/", async (req, res) => {
  try {
    const getComments = await Comments.find();
    if (!getComments) throw new Error("No items");
    res.status(200).send(getComments);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await Comments.deleteOne({ _id: req.params.id });
    if (!result) throw new Error("No items");
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

export const CommentRouter = router;
