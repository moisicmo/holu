export const ProductCarousel = () => {
  const logos = [
    { name: 'Holu Fit', image: '/images/logo.png' },
    { name: 'Holu Travel', image: '/images/logo.png' },
    { name: 'Holu Store', image: '/images/logo.png' },
    { name: 'Holu Pet', image: '/images/logo.png' },
  ];
  const repeatedLogos = [...logos, ...logos];

  return (
    <section id="products" className="w-full py-16 bg-white overflow-hidden">
      <div className="relative">
        <div className="animate-marquee flex gap-12 w-max">
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.image}
                alt={logo.name}
                className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300
                           h-12 sm:h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
