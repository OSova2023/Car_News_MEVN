import { Articles } from "../models/article";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const getArticles = await Articles.find();
    if (!getArticles) throw new Error("No articles");
    res.status(200).send(getArticles);
  } catch (err) {
    res.status(500).send("Can't load articles");
  }
});

export const ArticlesRouter = router;
