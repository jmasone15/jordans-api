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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Link_1 = __importDefault(require("../models/Link"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/:key", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const targetLink = yield Link_1.default.findOne({ key: req.params.key });
        if (!targetLink) {
            res.status(401).json({ message: "Not found" });
        }
        else {
            res.redirect("https://" + targetLink.target);
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const newLink = new Link_1.default({
            target: req.body.target,
            key: req.body.key,
            active: true
        });
        yield newLink.save();
        res.status(200).json(newLink);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
exports.default = router;
