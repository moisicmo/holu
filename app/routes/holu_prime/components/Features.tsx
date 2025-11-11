export const Features = () => {
  const features = [
    {
      title: "Hábitos inteligentes",
      desc: "Crea, sigue y mejora tus hábitos con recordatorios personalizados.",
      icon: "💡",
    },
    {
      title: "Gimnasios conectados",
      desc: "Explora gimnasios cerca de ti, registra tus rutinas y progreso.",
      icon: "🏋️",
    },
    {
      title: "Motivación Prime",
      desc: "Recibe frases, retos y recompensas por mantener tu constancia.",
      icon: "🔥",
    },
  ];

  return (
    <section id="features" className="py-24 bg-holu-dark">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-12">Lo que hace única a <span className="text-holu-green">Holu Prime</span></h3>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="bg-holu-light/10 p-8 rounded-2xl hover:scale-105 transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
