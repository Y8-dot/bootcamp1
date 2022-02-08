import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/141/141073.png" alt="Workflow" />
                            <img className="hidden lg:block h-8 w-auto" src="https://cdn-icons-png.flaticon.com/512/141/141073.png" alt="Workflow" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to='/'>
                                    Inicio
                                </Link>

                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='#'>
                                    Todos los juegos
                                </Link>

                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='#'>
                                    Crear Categoria
                                </Link>

                                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='/newuser'>
                                    Crear Usuario
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">

                    <Link className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" to='#'>
                        Dashboard
                    </Link>

                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='#'>
                        Team
                    </Link>

                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='#'>
                        Projects
                    </Link>

                    <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='#'>
                        Calendar
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
