import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden pt-24"
    >

      {/* Texto lado izquierdo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="z-10 max-w-2xl text-left md:w-1/2"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Supera tus hábitos. <br />Alcanza tu{" "}
          <span className="text-holu-green">Prime</span>.
        </h2>
        <p className="max-w-lg text-gray-300 mb-8">
          Holu Prime combina hábitos, gimnasios y motivación en una sola app que
          te impulsa a tu mejor versión.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            disabled
            className="bg-white text-black px-5 py-3 rounded-xl font-semibold flex items-center gap-2 opacity-60 cursor-not-allowed"
          >
            <img src="/images/appstore.png" alt="App Store"  />
            <span className="sr-only">App Store próximamente</span>
          </button>

          <button
            disabled
            className="bg-holu-green text-black px-5 py-3 rounded-xl font-semibold flex items-center gap-2 opacity-60 cursor-not-allowed"
          >
            <img src="/images/playstore.png" alt="Google Play"  />
            <span className="sr-only">Google Play próximamente</span>
          </button>
        </div>


      </motion.div>

      {/* Imagen del teléfono lado derecho */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mt-12 md:mt-0 md:w-1/2 flex justify-center"
      >
        <div className="relative w-[260px] md:w-[320px] lg:w-[380px]">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={'/images/phone.png'}
              alt="App Holu Prime"
              className="w-full drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
