import { Link } from "react-router";

export const ProductCarousel = () => {
  const products = [
    {
      name: "Holu Prime",
      image: "/images/logo_holu_prime.png",
      path: "/holu_prime",
      active: true,
    },
    {
      name: "Holu Travel",
      image: "/images/logo.png",
      path: "/holu_travel",
      active: false,
    },
  ];

  return (
    <section id="products" className="w-full bg-linear-to-b from-white to-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Ecosistema <span className="text-holu-green">Holu</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {products.map((p, index) =>
            p.active ? (
              // 🟢 Producto activo (clickeable)
              <Link
                to={p.path}
                key={index}
                className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 flex flex-col items-center justify-center w-full sm:w-80"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-20 w-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
              </Link>
            ) : (
              // 🔘 Producto deshabilitado (gris)
              <div
                key={index}
                className="bg-gray-100 rounded-2xl p-10 shadow-inner opacity-50 cursor-not-allowed flex flex-col items-center justify-center w-full sm:w-80"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-20 w-auto mb-4 object-contain grayscale"
                />
                <h3 className="text-xl font-semibold text-gray-400">{p.name}</h3>
                <p className="text-sm text-gray-400 mt-2">(Próximamente)</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
