import { Schema, model } from "mongoose";

import { IUser } from "@src/db/models/interface";

const UserSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  canvasData: {
    type: [Object],
    required: true,
    default: [],
  },
  phoneNo: {
    type: String,
  },
});

export const User = model<IUser>("User", UserSchema);
