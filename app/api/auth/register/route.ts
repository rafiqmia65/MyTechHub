import { NextRequest, NextResponse } from "next/server";
import userModel from "@/models/userModel";
import { dbConnect } from "@/service/mongo";

// Handle POST request for user registration
export const POST = async (req: NextRequest) => {
  // Connect to MongoDB
  await dbConnect();

  try {
    const body = await req.json();

    // Save user data to the database
    const newUser = await userModel.create({
      name: body.name,
      email: body.email.trim().toLowerCase(), // standardize email
      photoUrl: body.photoUrl,
      phone: body.phone,
      password: body.password, // store hashed password
      address: body.address,
      role: "customer",
      accountCreatedAt: new Date(),
      updatedInfoAt: new Date(),
    });

    console.log("User Saved:", newUser);

    return NextResponse.json(
      { message: "User registered successfully", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { message: "Registration failed", error },
      { status: 500 }
    );
  }
};
