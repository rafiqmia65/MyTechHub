import { Schema, model, models, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  photoUrl?: string;
  phone?: string;
  password: string;
  address?: string;
  role: "admin" | "customer";
  accountCreatedAt: Date;
  updatedInfoAt?: Date;
}

// Schema
const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    photoUrl: { type: String, default: "" },
    phone: { type: String, default: "" },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // important for login security
    },
    address: { type: String, default: "" },
    role: { type: String, enum: ["admin", "customer"], default: "customer" },
    accountCreatedAt: { type: Date, default: Date.now, immutable: true },
    updatedInfoAt: { type: Date },
  },
  { versionKey: false, collection: "users" } // one unified collection
);

// Hash password before save
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  if (this.isModified()) {
    this.updatedInfoAt = new Date();
  }
  next();
});

const userModel = models.User || model<IUser>("User", userSchema);
export default userModel;
