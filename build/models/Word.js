"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const wordSchema = new mongoose_1.Schema({
    word: {
        type: String,
        required: true,
        unique: true
    },
    common: {
        type: Boolean,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("Word", wordSchema);
