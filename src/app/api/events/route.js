import connectToDatabase from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(req) {
    const { formValues } = await req.json();
    console.log(formValues, 'from POST');

    return NextResponse.json({ message: "Hello World" });

    // Connect to MongoDB
    await connectToDatabase();

}