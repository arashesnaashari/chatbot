import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, email, password } = body;
    console.log("message");
    console.log(username);
    if (!username) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to communicate with ChatGPT", details: error.message },
      { status: 500 }
    );
  }
}
