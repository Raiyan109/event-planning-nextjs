'use client'
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import Column from "./Column";
import { useEffect, useState } from "react";

import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const generateUniqueId = () => Math.random().toString(36).substring(2, 9);
const Manage = () => {
    // const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    const [eventState, setEventState] = useState([]);
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getEvents = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(`/api/events`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();
                console.log(data.event);
                setEventState(data.event);
                setIsLoading(false)
            } catch (error) {
                console.error(error);
            }
        };
        getEvents();
    }, []);

    // Ensure each event has a unique ID
    // const initializedEvents = eventState.map((event) => ({
    //     ...event,
    //     id: event.id || generateUniqueId(),
    // }));
    // Populate `events` when `eventState` is updated
    useEffect(() => {
        if (eventState.length > 0) {
            const initializedEvents = eventState.map((event) => ({
                ...event,
                id: event.id || generateUniqueId(),
            }));
            setEvents(initializedEvents);
        }
    }, [eventState]);


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

    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: { delay: 100 }
    }), useSensor(TouchSensor), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }))
    return (
        <div className="container mx-auto">
            <h1 className="text-center text-2xl py-4">Manage your events</h1>

            {isLoading ? <h1>Loading...</h1> : <DndContext onDragEnd={handleDragEnd} sensors={sensors} collisionDetection={closestCorners}>
                <Column events={events} setEvents={setEvents} />
            </DndContext>}
        </div>
    )
}

export default Manage
