'use client'
import { closestCorners, DndContext } from "@dnd-kit/core"
import Column from "./Column";
import { useState } from "react";

const generateUniqueId = () => Math.random().toString(36).substring(2, 9);
const Manage = () => {
    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];

    // Ensure each event has a unique ID
    const initializedEvents = existingEvents.map((event) => ({
        ...event,
        id: event.id || generateUniqueId(),
    }));

    const [events, setEvents] = useState(initializedEvents);
    console.log(events);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setEvents((events) => {
                const oldIndex = events.findIndex((event) => event.id === active.id);
                const newIndex = events.findIndex((event) => event.id === over.id);
                const newEvents = [...events];
                // newEvents.splice(oldIndex, 1);
                // newEvents.splice(newIndex, 0, events[oldIndex]);
                const [movedEvent] = newEvents.splice(oldIndex, 1);
                newEvents.splice(newIndex, 0, movedEvent);
                return newEvents;
            });
        }
    }
    return (
        <div className="container mx-auto">
            <h1>Manage your events</h1>

            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
                <Column events={events} />
            </DndContext>
        </div>
    )
}

export default Manage
