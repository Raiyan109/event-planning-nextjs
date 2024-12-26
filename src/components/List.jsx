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
    const calendar = useCalendarApp({
        views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
        events: [
            {
                id: '1',
                title: 'Event 1',
                description: 'Event 1',
                location: 'Pizza burg',
                start: '2024-12-26 03:00',
                end: '2024-12-26 04:00',
            },
            {
                id: '2',
                title: 'Event 2',
                description: 'Event 2',
                location: 'Pizza Hut',
                start: '2024-12-27 12:00',
                end: '2024-12-27 11:00',
            },
        ],
        selectedDate: '2024-12-26',
        plugins: [createDragAndDropPlugin(), createEventModalPlugin()]
    })
    return (
        <div>
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    )
}

export default List
