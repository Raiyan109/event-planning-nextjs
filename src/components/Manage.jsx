'use client'
import { closestCorners, DndContext } from "@dnd-kit/core"
import Column from "./Column";
import { useState } from "react";


const Manage = () => {
    const [events, setEvents] = useState([
        { id: 1, title: "Event 1" },
        { id: 2, title: "Event 2" },
        { id: 3, title: "Event 3" },
        { id: 4, title: "Event 4" },
        { id: 5, title: "Event 5" },
    ]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            setEvents((events) => {
                const oldIndex = events.findIndex((event) => event.id === active.id);
                const newIndex = events.findIndex((event) => event.id === over.id);
                const newEvents = [...events];
                newEvents.splice(oldIndex, 1);
                newEvents.splice(newIndex, 0, events[oldIndex]);
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
