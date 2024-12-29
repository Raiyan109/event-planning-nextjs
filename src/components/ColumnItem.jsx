'use client'
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities";
import Link from "next/link";
import { useState } from "react";
import EditModal from "./EditModal";

const ColumnItem = ({ id, title, description, location, start, end, events, setEvents }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({});

    const removeEvent = (id) => {
        console.log(id);
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
        alert("Event deleted successfully!");
    };

    const handleUpdateClick = () => {
        setCurrentEvent({ id, title, description, location, start, end });
        setIsModalOpen(true);
    };

    const updateEventInState = (updatedEvent) => {
        const updatedEvents = events.map((event) =>
            event.id === updatedEvent.id ? updatedEvent : event
        );
        setEvents(updatedEvents);
    };

    return (
        <>
            <div ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition }} {...attributes} {...listeners}>
                <div className="bg-white p-4 rounded-md shadow-md flex justify-between items-center">
                    <div>
                        <h1>Title: {title}</h1>
                        <h1>Description: {description}</h1>
                        <h1>Start: {start}</h1>
                        <h1>End: {end}</h1>
                        <h1>Location: {location}</h1>
                    </div>

                    <div className="flex gap-4">
                        {/* <Link href='/edit' className="z-20 bg-blue-500 p-2 rounded-md text-white">Update</Link> */}
                        <button onClick={handleUpdateClick} className="z-20 bg-blue-500 p-2 rounded-md text-white">
                            Update
                        </button>
                        <button onClick={() => removeEvent(id)} className="z-20 bg-red-500 p-2 rounded-md text-white">Delete</button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <EditModal
                    event={currentEvent}
                    closeModal={() => setIsModalOpen(false)}
                    updateEventInState={updateEventInState}
                />
            )}
        </>
    )
}

export default ColumnItem
