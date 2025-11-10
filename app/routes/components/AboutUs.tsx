import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">¿Quiénes somos?</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-700">
          <strong>Holu</strong> es una startup tecnológica que crea productos digitales para transformar rutinas diarias en experiencias significativas. No somos una consultora: construimos nuestras propias soluciones enfocadas en hábitos, turismo, y otras áreas del bienestar personal y social.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            {/* Misión */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Misión</h3>
              <p className="text-gray-600">
                Crear herramientas digitales que ayuden a las personas a construir mejores hábitos y descubrir experiencias auténticas, mejorando su calidad de vida y fomentando la conexión humana y tecnológica.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Visión</h3>
              <p className="text-gray-600">
                Ser una de las startups latinoamericanas con mayor impacto en la formación de hábitos positivos y experiencias transformadoras, escalando nuestras soluciones a nivel global.
              </p>
            </div>

            {/* Valores / Cultura */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Cultura Holu</h3>
              <p className="text-gray-600">
                Apostamos por la constancia, la empatía y la innovación. En Holu diseñamos para inspirar, no para impresionar. Cada producto que lanzamos es una extensión de lo que creemos: que el cambio comienza en lo cotidiano.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
