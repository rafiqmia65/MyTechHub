import { Schema, model, models, Document } from "mongoose";

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

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    photoUrl: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    address: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["admin", "customer"],
      default: "customer",
    },
    accountCreatedAt: {
      type: Date,
      default: Date.now, // set once when created
      immutable: true, // prevents future changes
    },
    updatedInfoAt: {
      type: Date,
    },
  },
  {
    versionKey: false,
  }
);

// Middleware: update `updatedInfoAt` when document is modified
userSchema.pre("save", function (next) {
  if (this.isModified()) {
    this.updatedInfoAt = new Date();
  }
  next();
});

const userModel  = models.User || model<IUser>("User", userSchema);
export default userModel;
