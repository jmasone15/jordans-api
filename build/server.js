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
// Dependencies
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const wordRoutes_1 = __importDefault(require("./routes/wordRoutes"));
const linkRoutes_1 = __importDefault(require("./routes/linkRoutes"));
dotenv_1.default.config();
// Initilization
const app = (0, express_1.default)();
const PORT = process.env.PORT || "3001";
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("tiny"));
app.use((0, cors_1.default)());
app.use("/word", wordRoutes_1.default);
app.use("/l", linkRoutes_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbConnect = yield mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log(`🔋 [database]: MongoDB Connected: ${dbConnect.connection.host}`);
        console.log(`⚡️ [server]: Server Listening at: http://localhost:${PORT}`);
    }
    catch (error) {
        console.error(error);
    }
}));
