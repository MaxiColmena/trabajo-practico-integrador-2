import { Schema, model} from "mongoose";

const TagSchema = new Schema({ //esto es un nuevo esquema
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 30,
    trim: true,
  },
  description: {
    type: String,
    maxLength: 200,
    required: false,
  },
  }, {
  timestamps: true, //esto crea createdAt y updatedAt
  versionKey: false //esto quita el __v que crea mongoose
});

export const TagModel = model("Tag", TagSchema);

