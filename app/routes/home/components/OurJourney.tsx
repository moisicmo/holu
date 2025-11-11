import { motion } from "framer-motion";

export const OurJourney = () => {
  return (
    <section id="ourjourney" className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Nacimos entre montañas... con ideas que soñaban alto</h2>

        <p className="text-center text-lg max-w-3xl mx-auto mb-12">
          En <strong>Holu</strong>, creemos que las mejores ideas no nacen perfectas, nacen con propósito.
          Iniciamos nuestro camino en Bolivia, entre la energía de jóvenes emprendedores y el impulso de querer cambiar el mundo
          desde lo cotidiano. A veces fallamos. A veces las cosas explotan. Pero de cada intento nace algo mejor, más fuerte, más funcional.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/muntain.jpg" alt="Montañas de Bolivia" className="w-full h-56 object-cover" />
              <div className="p-4 text-center font-medium">Nacimos en las alturas de los Andes</div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/fail.jpg" alt="Fracaso y fuego" className="w-full h-56 object-cover" />
              <div className="p-4 text-center font-medium">Sí, a veces fallamos en el camino...</div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src="/images/boysplay.jpg" alt="Niños jugando a construir un cohete" className="w-full h-56 object-cover" />
              <div className="p-4 text-center font-medium">...pero seguimos soñando con volar</div>
            </div>
          </div>
        </motion.div>
        <p className="text-center text-lg max-w-3xl mx-auto mt-12">
          Somos personas construyendo el futuro paso a paso. Cada producto, cada app, cada línea de código que escribimos tiene una historia,
          y creemos que vale la pena contarla. Este es solo el comienzo.
        </p>
      </div>
    </section>
  );
};
