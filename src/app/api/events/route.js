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
            startDate: formValues.startDate,
            endDate: formValues.endDate,
            startTime: formValues.startTime,
            endTime: formValues.endTime,
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

export async function GET(req) {

    // Connect to MongoDB
    await connectToDatabase();
    try {
        const events = await EventModel.find();

        const formattedEvents = events.map(event => ({
            id: event._id, // Assuming _id is the unique identifier
            title: event.title,
            description: event.description,
            location: event.location,
            start: `${event.startDate} ${event.startTime}`,
            end: `${event.endDate} ${event.endTime}`,
        }));

        return NextResponse.json({
            message: "Event saved successfully",
            event: formattedEvents
        });

    } catch (error) {
        console.log(error);

    }

}