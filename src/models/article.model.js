import { Schema, model} from "mongoose";

const ObjectId = Schema.Types.ObjectId

const ArticleSchema = new mongoose.Schema({
title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 200,
    },
    content: {
      type: String,
      required: true,
      minLength: 50,
    },
    excerpt: {
      type: String,
      maxLength: 500,
      required: false
    },
    status: {
      type: String,
      enum: ["published", "archived"],
      default: "published",
    },
    author: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    tags: [
      {
        type: ObjectId,
        ref: "Tag",
      }],
  },
  {
    timestamps: true,
});

export const ArticleModel = model("Article", ArticleSchema);