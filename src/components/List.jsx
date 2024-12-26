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

const List = () => {
    const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
    // Helper to format date-time strings
    const formatDateTime = (dateStr, time = "00:00") => {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day} ${time}`;
    };

    // Map events for the calendar
    const mappedEvents = existingEvents.map((eventItem) => ({
        id: Math.random().toString(36).substring(7), // Generate random ID
        title: eventItem.title,
        description: eventItem.description,
        location: eventItem.location,
        start: formatDateTime(eventItem.date, eventItem.time || "00:00"),
        end: formatDateTime(eventItem.date, "01:00"),
    }));


    const calendar = useCalendarApp({
        views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
        events: mappedEvents,
        selectedDate: new Date().toISOString().split('T')[0],
        plugins: [createDragAndDropPlugin(), createEventModalPlugin()]
    })
    return (
        <div>
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    )
}

export default List
