import { Schema, model, models, Document } from "mongoose";
import bcrypt from "bcryptjs";

// -----------------------------
// Define the User interface for TypeScript
// -----------------------------
export interface IUser extends Document {
  name: string;
  email: string;
  photoUrl?: string; 
  phone?: string; 
  password?: string | null; // Can be null for Google OAuth users
  address?: string; 
  role: "admin" | "customer"; // User role
  accountCreatedAt: Date; 
  updatedInfoAt?: Date | null; 
}

// -----------------------------
// Create the User schema
// -----------------------------
const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true, // Remove whitespace from both ends
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Ensure emails are unique
      lowercase: true, // Convert to lowercase before saving
      trim: true,
    },
    photoUrl: {
      type: String,
      default: "", // Default to empty string if not provided
    },
    phone: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      select: false, // Do not include password by default in queries
      default: null, // Allow null for OAuth users
      validate: {
        validator: function (v: string | null) {
          if (!v) return true; // Skip validation if password is null
          return v.length >= 6; // Minimum length 6
        },
        message: "Password must be at least 6 characters",
      },
    },
    address: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["admin", "customer"], // Only allow these values
      default: "customer",
    },
    accountCreatedAt: {
      type: Date,
      default: Date.now,
      immutable: true, // Cannot be changed once set
    },
    updatedInfoAt: {
      type: Date, // Updated whenever user info changes
    },
  },
  {
    versionKey: false, // Remove __v field
    collection: "users", // MongoDB collection name
  }
);

// -----------------------------
// Pre-save middleware: Hash password and update timestamp
// -----------------------------
userSchema.pre("save", async function (next) {
  // Hash password only if it is modified
  if (this.isModified("password") && this.password) {
    this.password = await bcrypt.hash(this.password, 10);
  }

  // Update 'updatedInfoAt' field whenever any user info is changed
  if (this.isModified()) {
    this.updatedInfoAt = new Date();
  }

  next();
});

// -----------------------------
// Export the User model
// -----------------------------
const User = models.User || model<IUser>("User", userSchema);
export default User;
