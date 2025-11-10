import { Phone, Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Izquierda - Logo + Dirección */}
        <div className="flex flex-col gap-3">
          <img src="/images/logo.png" alt="Holu Logo" className="w-24" />
          {/* <Image src="/images/logo.png" alt="Holu Logo" width={120} height={40} /> */}
          <p className="text-sm flex items-center gap-2 mt-4">
            <MapPin size={16} /> Calle de la Innovación 123, Zona Villa Fatima, La Paz - Bolivia
          </p>
          <p className="text-sm flex items-center gap-2">
            <Phone size={16} /> +591 69917066
          </p>
          <p className="text-sm flex items-center gap-2">
            <Mail size={16} /> contacto@holu.com.bo
          </p>
        </div>

        {/* Medio - Navegación */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:underline">Inicio</a></li>
            <li><a href="#products" className="hover:underline">Productos</a></li>
            <li><a href="#about" className="hover:underline">¿Quiénes somos?</a></li>
          </ul>
        </div>

        {/* Derecha - Formulario de contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Escríbenos</h3>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Tu correo"
              className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none"
            />
            <textarea
              rows={3}
              placeholder="Tu mensaje"
              className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="my-10 border-t border-gray-800" />

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 text-2xl mb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Facebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Twitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <Instagram />
        </a>
      </div>

      {/* Copyright final */}
      <div className="text-center text-xs text-gray-500">
        Powered by Luminia © {new Date().getFullYear()}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
