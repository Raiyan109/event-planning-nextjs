import Link from "next/link"



const Header = () => {
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</Link>
                    </li>
                    <li className="flex">
                        <Link href="/add" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Add Event</Link>
                    </li>
                    <li className="flex">
                        <Link href="/event-list" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">All Events</Link>
                    </li>
                    <li className="flex">
                        <Link href="/manage" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Manage Events</Link>
                    </li>
                </ul>

            </div>
        </header>
    )
}

export default Header
