import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="border-b mb-6">
            <nav className="max-w-4xl mx-auto p-4 flex gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'font-bold' : 'text-gray-600'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/variables"
                    className={({ isActive }) =>
                        isActive ? 'font-bold' : 'text-gray-600'
                    }
                >
                    Variables
                </NavLink>
            </nav>
        </header>
    )
}
