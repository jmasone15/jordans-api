import { Schema, model } from "mongoose";

export interface ILink {
    target: string;
    key: string;
    active: boolean;
}

const linkSchema = new Schema<ILink>({
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

export default model<ILink>("Link", linkSchema);
