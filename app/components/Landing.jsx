"use client";

import countriesData from "../db/countries.json"; // Ruta al archivo JSON

export default function Landing() {
  const countries = countriesData.countries;

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-blue-900"
      style={{ backgroundColor: "#040e25" }}
    >
      <div className="max-w-7xl mx-auto p-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="lg:flex-1 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2">
            <span className="text-blue-300">Bienvenidos a</span>{" "}
            <span className="text-pink-400">Solution Box</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-blue-300">
            Mayorista de <span className="text-teal-300">Informática</span> y{" "}
            <span className="text-teal-300">Telecomunicaciones</span>
          </h2>
          <h3 className="text-base lg:text-lg text-white">
            Somos un mayorista con origen en Argentina y una trayectoria de 20
            años. Contamos con 11 sedes y representamos a más de 50 marcas
            internacionales como AMD, DELL, INTEL, HUAWEI, CISCO, HP, SAMSUNG,
            entre otras.
          </h3>
          <div className="flex mt-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-1"
              >
                <img
                  src={`/flags/${country.name.toLowerCase()}.png`}
                  alt={country.name}
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:flex-1 flex flex-col justify-center items-center lg:items-center">
          <div className="bg-white p-16 rounded-md text-center shadow-md lg:w-96 lg:max-w-lg">
            <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              {/* Coloca aquí el enlace a tu logo */}
              <img
                src="/logosol.jpg"
                alt="Logo"
                className="w-40 h-40 lg:w-56 lg:h-56 rounded-full"
              />
            </div>
            <h2 className="text-black text-lg lg:text-xl mb-2">
              Selecciona un país:
            </h2>
            <div className="relative">
              <select className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 appearance-none">
                {countries.map((country) => (
                  <option key={country.name} value={country.url}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M6.3 9.3a1 1 0 011.4 0l3 3c.2.2.3.4.3.7s-.1.5-.3.7l-3 3a1 1 0 01-1.4-1.4L8.58 12H3a1 1 0 010-2h5.59l-1.3-1.3a1 1 0 010-1.4z" />
                </svg>
              </div>
            </div>
            <a
              href={countries[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-pink-400 hover:bg-pink-500 text-white px-12 py-2 rounded-md w-full">
                Visitar sitio
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
