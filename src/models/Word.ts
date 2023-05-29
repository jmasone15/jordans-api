import { Schema, model } from "mongoose";

export interface IWord {
    word: string;
    common: Boolean;
}

const wordSchema = new Schema<IWord>({
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

export default model<IWord>("Word", wordSchema);
