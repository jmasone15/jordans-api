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
const Word_1 = __importDefault(require("../models/Word"));
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allWords = yield Word_1.default.find({ common: true });
        res.status(200).json(allWords);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
router.get("/single", (0, cors_1.default)(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allWords = yield Word_1.default.find({ common: true });
        const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
        res.status(200).json(randomWord);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
router.get("/valid/:word", (0, cors_1.default)(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const targetWord = yield Word_1.default.findOne({ word: req.params.word });
        const result = targetWord === null ? false : true;
        res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newWord = new Word_1.default({
            word: req.body.word,
            common: req.body.common === "common"
        });
        yield newWord.save();
        res.status(200).json(newWord);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}));
exports.default = router;
