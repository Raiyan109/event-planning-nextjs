'use client'

import { useState } from "react";

const EditModal = ({ event, closeModal, updateEventInState }) => {
    const [updatedEvent, setUpdatedEvent] = useState({ ...event });

    const handleChange = (e) => {
        setUpdatedEvent({ ...updatedEvent, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch(`/api/events`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedEvent),
            });
            const data = await res.json();
            if (data.message === "Event updated successfully") {
                updateEventInState(updatedEvent);
                closeModal();
                alert("Event updated successfully!");
            }
        } catch (error) {
            console.error("Failed to update event", error);
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">Update Event</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        value={updatedEvent.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full p-2 border rounded"
                    />
                    <textarea
                        name="description"
                        value={updatedEvent.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full p-2 border rounded"
                    ></textarea>
                    <input
                        type="text"
                        name="location"
                        value={updatedEvent.location}
                        onChange={handleChange}
                        placeholder="Location"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="datetime-local"
                        name="start"
                        value={updatedEvent.start}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="datetime-local"
                        name="end"
                        value={updatedEvent.end}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </form>
                <div className="flex justify-end gap-4 mt-4">
                    <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                    <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditModal