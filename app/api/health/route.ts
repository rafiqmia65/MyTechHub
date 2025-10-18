import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnect();

    return NextResponse.json(
      { status: "MyTechHub Server and DB are healthy" },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occurred";

    return NextResponse.json(
      { status: "MyTechHub DB connection failed", error: errorMessage },
      { status: 500 }
    );
  }
};
