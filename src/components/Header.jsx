'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"



const Header = () => {
    const pathname = usePathname()
    return (
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link href="/" className={`${pathname === '/' ? 'active' : ''} flex items-center px-4`}>Home</Link>
                    </li>
                    <li className="flex">
                        <Link href="/add" className={`${pathname === '/add' ? 'active' : ''} flex items-center px-4`}>Add Event</Link>
                    </li>
                    <li className="flex">
                        <Link href="/event-list" className={`${pathname === '/event-list' ? 'active' : ''} flex items-center px-4`}>All Events</Link>
                    </li>
                    <li className="flex">
                        <Link href="/manage" className={`${pathname === '/manage' ? 'active' : ''} flex items-center px-4`}>Manage Events</Link>
                    </li>
                </ul>

            </div>
        </header>
    )
}

export default Header
