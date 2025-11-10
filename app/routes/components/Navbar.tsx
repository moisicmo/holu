import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl bg-black bg-opacity-90 text-white px-6 py-3 shadow-xl rounded-2xl backdrop-blur-md flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center space-x-3">
        <img src="/images/logo.png" alt="Holu Logo" className="h-10" />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li><a href="#hero" className="hover:text-green-400 transition-colors duration-200">Inicio</a></li>
        <li><a href="#products" className="hover:text-green-400 transition-colors duration-200">Productos</a></li>
        <li><a href="#about" className="hover:text-green-400 transition-colors duration-200">¿Quiénes somos?</a></li>
        <li><a href="#footer" className="hover:text-green-400 transition-colors duration-200">Contacto</a></li>
      </ul>

      {/* Mobile toggle button */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-black bg-opacity-95 rounded-xl p-6 flex flex-col space-y-4 md:hidden z-40">
          <a href="#hero" onClick={toggleMenu} className="hover:text-green-400 transition-colors duration-200">Inicio</a>
          <a href="#products" onClick={toggleMenu} className="hover:text-green-400 transition-colors duration-200">Productos</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-green-400 transition-colors duration-200">¿Quiénes somos?</a>
          <a href="#footer" onClick={toggleMenu} className="hover:text-green-400 transition-colors duration-200">Contacto</a>
        </div>
      )}
    </nav>
  );
};
