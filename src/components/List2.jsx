'use client'
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const List2 = () => {
    const [eventState, setEventState] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [filteredEvents, setFilteredEvents] = useState([]);

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
                console.error(error);
            }
        };
        getEvents();
    }, []);

    // Filter events by the selected date
    useEffect(() => {
        const dateString = selectedDate.toISOString().split("T")[0];
        const eventsForDate = eventState.filter(event => 
            event.start.startsWith(dateString) || event.end.startsWith(dateString)
        );
        setFilteredEvents(eventsForDate);
    }, [selectedDate, eventState]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Event Schedule</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Calendar */}
                <div>
                    <Calendar 
                        onChange={handleDateChange} 
                        value={selectedDate} 
                        className="border rounded-md shadow-lg p-2"
                    />
                </div>

                {/* Event List */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3">Events on {selectedDate.toDateString()}:</h2>
                    {filteredEvents.length > 0 ? (
                        <ul className="space-y-4">
                            {filteredEvents.map((event) => (
                                <li key={event.id} className="border rounded-md p-4 shadow-md bg-white">
                                    <h3 className="text-lg font-bold">{event.title}</h3>
                                    <p><strong>Description:</strong> {event.description}</p>
                                    <p><strong>Location:</strong> {event.location}</p>
                                    <p><strong>Start:</strong> {event.start}</p>
                                    <p><strong>End:</strong> {event.end}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No events scheduled for this day.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default List2
