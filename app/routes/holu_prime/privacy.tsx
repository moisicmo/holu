import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function Privacy() {
  return (
    <>
      <Navbar />

      <main className="pt-24 px-4">
        <div className="max-w-3xl mx-auto bg-white text-gray-800 rounded-lg shadow-sm p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-6">
            Política de Privacidad
          </h1>

          <p className="mb-6 leading-relaxed">
            En <strong>Holu Prime</strong>, la privacidad de nuestros usuarios es una prioridad.
            Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos
            la información cuando utilizas nuestra aplicación móvil y servicios asociados.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            1. Información que recopilamos
          </h2>
          <p className="mb-3">
            La aplicación puede recopilar la siguiente información:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Datos de identificación básicos</strong> (como correo electrónico,
              si el usuario lo proporciona).
            </li>
            <li>
              <strong>Token de notificaciones push</strong> para el envío de avisos.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            2. Uso de la información
          </h2>
          <p className="mb-3">
            Utilizamos la información recopilada para:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Proporcionar y mejorar</strong> el funcionamiento de la aplicación.
            </li>
            <li>
              <strong>Enviar notificaciones</strong> importantes relacionadas con el servicio.
            </li>
            <li>
              <strong>Analizar el uso</strong> de la app y mejorar la experiencia del usuario.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            3. Servicios de terceros
          </h2>
          <p className="mb-3">
            Holu Prime utiliza servicios de terceros que pueden recopilar información
            para su correcto funcionamiento, incluyendo:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Firebase (Google)</strong> para autenticación, notificaciones y análisis.
            </li>
          </ul>
          <p className="mb-6">
            Estos servicios se rigen por sus propias políticas de privacidad.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            4. Seguridad
          </h2>
          <p className="mb-6">
            Implementamos <strong>medidas técnicas y organizativas</strong> para proteger
            la información personal contra accesos no autorizados, pérdida o uso indebido.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            5. Privacidad de menores
          </h2>
          <p className="mb-6">
            La aplicación <strong>no está dirigida a menores de 13 años</strong> y no recopilamos
            conscientemente información personal de menores.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            6. Derechos del usuario
          </h2>
          <p className="mb-6">
            El usuario puede solicitar la <strong>actualización o eliminación</strong> de su
            información personal contactándonos a través del correo indicado abajo.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            7. Cambios en esta política
          </h2>
          <p className="mb-6">
            Nos reservamos el derecho de actualizar esta Política de Privacidad.
            Cualquier cambio será publicado en esta misma página.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            8. Contacto
          </h2>
          <p className="mb-2">
            Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
          </p>
          <p className="mb-6">
            📧 <strong>moisic.mo@gmail.com</strong>
          </p>

          <p className="text-sm text-gray-500 mt-10">
            Última actualización: {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
