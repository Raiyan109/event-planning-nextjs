

const AddComponent = () => {
    return (
        <div className="flex items-center justify-center h-screen">

            <div className="w-96 rounded-2xl bg-white border border-gray-300 shadow-lg">
                <h1 className="text-center text-2xl py-4">Add Event</h1>
                <div className="flex flex-col gap-4 p-8">
                    <div>
                        <label>Title</label>
                        <input placeholder="Event Title" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                    </div>
                    <div>
                        <label>Description</label>
                        <input placeholder="Event Description" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                    </div>
                    <div>
                        <label>Date</label>
                        <input placeholder="Event Date" type="date" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                    </div>
                    <div>
                        <label>Time</label>
                        <input placeholder="Event Time" type="time" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                    </div>
                    <div>
                        <label>Location</label>
                        <input placeholder="Event Title" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-100" />
                    </div>
                    <label className="flex cursor-pointer items-center justify-between p-1">
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
                    </label>
                    <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddComponent
