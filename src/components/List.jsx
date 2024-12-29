'use client'
import { ScheduleXCalendar, useCalendarApp } from "@schedule-x/react"
import {
    createViewDay,
    createViewMonthAgenda,
    createViewMonthGrid,
    createViewWeek,
} from '@schedule-x/calendar'
import '@schedule-x/theme-default/dist/index.css'
import '@schedule-x/theme-default/dist/calendar.css'
import { createDragAndDropPlugin } from '@schedule-x/drag-and-drop'
import { createEventModalPlugin } from '@schedule-x/event-modal'
import { useEffect, useState } from "react"
import { createEventsServicePlugin } from '@schedule-x/events-service'

const List = () => {
    const [eventState, setEventState] = useState([]);
    const eventsService = useState(() => createEventsServicePlugin())[0]
    // const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    //         setEventState(existingEvents);
    //     }
    // }, []);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const res = await fetch(`/api/events`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();
                console.log(data.event);
                setEventState(data.event);
            } catch (error) {
                console.log(error);
            }
        }
        getEvents();
    }, [])

    const formatDateTime = (dateStr, time = "00:00") => {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day} ${time}`;
    };
console.log(eventState);

    const mappedEvents = eventState.map((eventItem) => ({
        id: Math.random().toString(36).substring(7),
        title: eventItem.title,
        description: eventItem.description,
        location: eventItem.location,
        start: formatDateTime(eventItem.date, eventItem.time || "00:00"),
        end: formatDateTime(eventItem.date, "01:00"),
    }));
    console.log(mappedEvents);


    const calendar = useCalendarApp({
        views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
        events: mappedEvents,
        // events: [
        //     {
        //         id: '1',
        //         title: 'Event 1',
        //         start: '2023-12-16',
        //         end: '2023-12-16',
        //     },
        //     {
        //         id: '2',
        //         title: 'Event 2',
        //         start: '2023-12-16 03:00',
        //         end: '2023-12-16 05:00',
        //     },
        // ],
        selectedDate: new Date().toISOString().split('T')[0],
        plugins: [createDragAndDropPlugin(), createEventModalPlugin(),eventsService]
    })

    return (
        <div>
            {/* Render the calendar only after eventState is populated */}
            {eventState.length === 0 ? (
                <div>Loading events...</div>
            ) : (
            <ScheduleXCalendar calendarApp={calendar} />
            )}
        </div>
    )
}

export default List
