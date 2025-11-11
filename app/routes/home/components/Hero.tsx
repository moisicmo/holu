import { motion } from 'framer-motion';
export const Hero = () => {

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center px-6 md:px-20"
      style={{
        backgroundImage: 'url("/images/hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent z-0" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >

        {/* Contenido alineado a la izquierda */}
        <div className="relative z-10 max-w-2xl text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluciones que conectan personas con experiencias únicas
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Ideas, visión y tecnología, impulsamos productos digitales
            que transforman cómo las personas viajan, entrenan y viven su día a día.
          </p>
          <a
            href="#productos"
            className="inline-block bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Ver productos
          </a>
        </div>
      </motion.div>
    </section>
  );
};
