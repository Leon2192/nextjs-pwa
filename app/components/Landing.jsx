'use client'

export default function Landing() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="max-w-7xl mx-auto p-8 flex lg:space-x-8">
                <div className="flex-1 text-red-500">
                    <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
                        ¡Bienvenido a nuestra Landing Page!
                    </h1>
                    <p className="text-lg lg:text-xl">
                        Descubre todo lo que tenemos para ofrecerte en nuestro sitio web.
                    </p>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center lg:items-center">
                    <div className="bg-white p-12 rounded-md text-center">
                        <div className="w-32 h-32 lg:w-48 lg:h-48 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            {/* Coloca aquí el enlace a tu logo */}
                            <img src="https://via.placeholder.com/150" alt="Logo" className="w-24 h-24 lg:w-36 lg:h-36" />
                        </div>
                        <h2 className="text-black text-lg lg:text-xl mb-2">Selecciona un país:</h2>
                        <select className="w-64 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="pais1">País 1</option>
                            <option value="pais2">País 2</option>
                            <option value="pais3">País 3</option>
                            <option value="pais4">País 4</option>
                            <option value="pais5">País 5</option>
                            <option value="pais6">País 6</option>
                            <option value="pais7">País 7</option>
                            <option value="pais8">País 8</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}