import connectToDatabase from "@/lib/mongodb";
import { EventModel } from "@/models/event.model";
import { NextResponse } from "next/server";



export async function POST(req) {
    const { formValues } = await req.json();
    console.log(formValues, 'from POST');

    // return NextResponse.json({ message: "Hello World" });

    // Connect to MongoDB
    await connectToDatabase();
    try {
        const event = new EventModel({
            title: formValues.title,
            description: formValues.description,
            date: formValues.date,
            time: formValues.time,
            location: formValues.location
        });

        const eventCreated = await event.save();
        console.log(eventCreated);
        return NextResponse.json({
            message: "Event saved successfully",
            event: eventCreated
        });

    } catch (error) {
        console.log(error);

    }

}