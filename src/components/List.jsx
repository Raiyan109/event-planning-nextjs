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

const List = () => {
    const calendar = useCalendarApp({
        views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
        events: [
            {
                id: '1',
                title: 'Event 1',
                start: '2023-12-16',
                end: '2023-12-16',
            },
        ],
        selectedDate: '2023-12-16',
        // plugins: [eventsService]
    })
    return (
        <div>
            <ScheduleXCalendar calendarApp={calendar} />
        </div>
    )
}

export default List
