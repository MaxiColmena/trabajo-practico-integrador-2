import { Schema, model} from "mongoose";

const ObjectId = Schema.Types.ObjectId

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // Username único, no se puede repetir
    minLength: 3,
    maxLength: 20
},
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
    required: true
  },
  profile: {
    firstName: { type: String, minLength: 2, maxLength: 50, required: true },
    lastName: { type: String, minLength: 2, maxLength: 50, required: true },
    biography: { type: String, maxLength: 500, required: false },
    avatarUrl: { type: String, required: false, match: /^(https?:\/\/)([\w.-]+)\.([a-z\.]{2,})([\/\w .-])\/?$/i },
    birthdate: { type: Date, required}
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true
});

export const UserModel = model("User", UserSchema);