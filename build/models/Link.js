"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const linkSchema = new mongoose_1.Schema({
    target: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true,
        unique: true
    },
    active: {
        type: Boolean,
        required: true
    }
});
exports.default = (0, mongoose_1.model)("Link", linkSchema);
