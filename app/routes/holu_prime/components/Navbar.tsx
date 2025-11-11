import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl bg-black bg-opacity-90 text-white px-6 py-3 shadow-xl rounded-2xl backdrop-blur-md flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <img
          src="/images/logo_holu_prime.png"
          alt="Holu Prime Logo"
          className="h-10 md:h-12 hover:opacity-90 transition"
        />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-green-400 transition-colors duration-200"
          >
            Inicio
          </Link>
        </li>
        <li>
          <a
            href="#features"
            className="hover:text-green-400 transition-colors duration-200"
          >
            Características
          </a>
        </li>
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
          <Link
            to="/"
            onClick={toggleMenu}
            className="hover:text-green-400 transition-colors duration-200"
          >
            Inicio
          </Link>
          <a
            href="#features"
            onClick={toggleMenu}
            className="hover:text-green-400 transition-colors duration-200"
          >
            Características
          </a>
        </div>
      )}
    </nav>
  );
};

