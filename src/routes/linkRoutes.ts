import Link, { ILink } from "../models/Link";
import { Router, Request, Response } from "express";
import cors from "cors";

const router: Router = Router();
const corsPostOptions = {};

router.get("/:key", cors(), async (req: Request, res: Response) => {
    try {
        const targetLink = await Link.findOne({ key: req.params.key });

        if (!targetLink) {
            res.status(401).json({ message: "Not found" });
        } else {
            res.redirect(targetLink.target);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.post("/", cors(), async (req: Request, res: Response) => {
    try {
        const newLink = new Link<ILink>({
            target: req.body.target,
            key: req.body.key,
            active: true
        });

        await newLink.save();

        res.status(200).json(newLink);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

export default router;
