import Word, { IWord } from "../models/Word";
import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const allWords = await Word.find({});

        res.status(200).json(allWords);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const newWord = new Word<IWord>({
            word: req.body.word,
            common: true
        });

        await newWord.save();

        res.status(200).json(newWord);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

export default router;
