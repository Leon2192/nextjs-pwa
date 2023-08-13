"use client";

import countriesData from "../db/countries.json";

export default function Landing() {
  const countries = countriesData.countries;

  return (
    <div
      className="min-h-screen bg-blue-900"
      style={{ backgroundColor: "#2f3e46" }}
    >
      <div className="max-w-7xl mx-auto p-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="sm:flex-1 text-white flex justify-center items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">
              <span className="text-blue-300">Bienvenidos a</span>{" "}
              <span className="text-pink-400">Solution Box</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-300">
              Mayorista de <span className="text-teal-300">Informática</span> y{" "}
              <span className="text-teal-300">Telecomunicaciones</span>
            </h2>
            <h3 className="text-base sm:text-lg text-white">
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
        </div>
        <div className="sm:flex-1 flex flex-col justify-center items-center">
          <div className="bg-white p-6 rounded-md text-center shadow-md w-full sm:max-w-md">
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <img
                src="/logosol.jpg"
                alt="Logo"
                className="w-24 h-24 rounded-full"
              />
            </div>
            <h3 className="text-2xl text-blue-300 font-semibold mb-2">
              ¿A qué sucursal quieres acceder?
            </h3>
            <h2 className="text-base sm:text-lg text-black mb-2">
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
              <button
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md w-full"
                style={{ backgroundColor: "#fe5f55" }}
              >
                Visitar sitio
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
