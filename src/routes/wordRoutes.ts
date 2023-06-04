import Word, { IWord } from "../models/Word";
import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
    try {
        const allWords = await Word.find({ common: true });

        res.status(200).json(allWords);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.get("/single", async (req: Request, res: Response) => {
    try {
        const allWords = await Word.find({ common: true });

        const randomWord = allWords[Math.floor(Math.random() * allWords.length)];

        res.status(200).json(randomWord);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.get("/valid/:word", async (req: Request, res: Response) => {
    try {
        const targetWord = await Word.findOne({ word: req.params.word });
        const result = targetWord === null ? false : true;
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const newWord = new Word<IWord>({
            word: req.body.word,
            common: req.body.common === "common"
        });

        await newWord.save();

        res.status(200).json(newWord);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

export default router;
