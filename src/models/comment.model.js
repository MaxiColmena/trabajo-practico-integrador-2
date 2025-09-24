import { Schema, model} from "mongoose";

const ObjectId = Schema.Types.ObjectId

const CommentSchema = new mongoose.Schema({
content: {
      type: String,
      minLength: 5,
      maxLength: 500,
      required: true,
    },
    author: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    article: {
      type: ObjectId,
      ref: "Article",
      required: true,
    },
  },
  {
    timestamps: true,
});

export const CommentModel = model("Comment", CommentSchema);