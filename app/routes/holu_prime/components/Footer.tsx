import { Phone, Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="py-10 bg-holu-dark border-t border-holu-green/20 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Holu Prime. Todos los derechos reservados.</p>
      <p className="mt-2">
        Desarrollado por <span className="text-holu-green font-semibold">Luminia</span>
      </p>
    </footer>
  );
}
