import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema(
    {
        content: {
            type: String,
            ref: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }
)