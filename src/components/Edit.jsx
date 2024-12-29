'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Edit = () => {
    const [eventState, setEventState] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const [formValues, setFormValues] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        location: "",
    });

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

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    // Save to localStorage
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission default behavior
        // const existingEvents = JSON.parse(localStorage.getItem("events")) || [];
        console.log(formValues);
        const res = await fetch(`/api/events`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify({ formValues }),
        });
        const data = await res.json();
        console.log(data);

        // localStorage.setItem("events", JSON.stringify([...existingEvents, formValues]));
        alert("Event saved successfully!");
        setFormValues({
            title: "",
            description: "",
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
            location: ""
        });
        router.push('/event-list')

    };
    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center h-screen">
                <div className="w-2/3 rounded-2xl bg-white border border-gray-300 shadow-lg">
                    <h1 className="text-center text-2xl py-4" >Update Event</h1>
                    <form className="flex flex-col gap-4 p-8" onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input placeholder="Event Title"
                                name="title"
                                value={formValues.title}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <label>Description</label>
                            <input placeholder="Event Description"
                                name="description"
                                value={formValues.description}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <label>Start Date</label>
                            <input placeholder="Event Start Date"
                                name="startDate"
                                value={formValues.startDate}
                                onChange={handleChange}
                                type="date" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <label>End Date</label>
                            <input placeholder="Event End Date"
                                name="endDate"
                                value={formValues.endDate}
                                onChange={handleChange}
                                type="date" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <label>Start Time</label>
                            <input placeholder="Event Start Time"
                                name="startTime"
                                value={formValues.startTime}
                                onChange={handleChange}
                                type="time" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <label>End Time</label>
                            <input placeholder="Event End Time"
                                name="endTime"
                                value={formValues.endTime}
                                onChange={handleChange}
                                type="time" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        <div>
                            <label>Location</label>
                            <input placeholder="Event Location"
                                name="location"
                                value={formValues.location}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                        </div>
                        {/* <label className="flex cursor-pointer items-center justify-between p-1">
            Accept terms of use
            <div className="relative inline-block">
                <input type="checkbox" className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
                <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
            </div>
        </label>
        <label className="flex cursor-pointer items-center justify-between p-1">
            Submit to newsletter
            <div className="relative inline-block">
                <input type="checkbox" className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white checked:border-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" />
                <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-gray-900"></span>
            </div>
        </label> */}
                        <button type="submit" className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit
