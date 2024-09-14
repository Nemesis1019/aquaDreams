import { useState } from 'react';

import { aquaDreamsLogo } from '../../routes';

export function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4  z-10 w-full top-0 fixed">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Título */}
        <div className="flex flex-row text-blue-500 text-2xl font-bold justify-center items-center">
            <img className="w-[20px]" src={aquaDreamsLogo} />
            <p>aquaDreams</p>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-4 text-blue-500 font-bold text-[15px]">
          <a href="#home" className=" hover:text-gray-300">Inicio</a>
          <a href="#about" className=" hover:text-gray-300">Sobre Nosotros</a>
          <a href="#jobs" className=" hover:text-gray-300">Nuestro trabajo</a>
          <a href="#services" className=" hover:text-gray-300">Servicios</a>
          <a href="#clients" className=" hover:text-gray-300">Clientes</a>
          <a href="#contact" className=" hover:text-gray-300">Contacto</a>
        </div>

        {/* Botón para Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500 focus:outline-none">
            {/* Icono del menú */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white text-blue-500 w-[50%]">
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#home" className="block  py-2 px-4 hover:bg-blue-700">Inicio</a>
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#about" className="block  py-2 px-4 hover:bg-blue-700">Sobre Nosotros</a>
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#jobs" className="block  py-2 px-4 hover:bg-blue-700">Nuestro trabajo</a>
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#services" className="block  py-2 px-4 hover:bg-blue-700">Servicios</a>
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#clients" className="block  py-2 px-4 hover:bg-blue-700">Clientes</a>
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#contact" className="block  py-2 px-4 hover:bg-blue-700">Contacto</a>
        </div>
      )}
    </nav>
  );
};

