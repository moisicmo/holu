import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCarousel } from './components/ProductCarousel';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import { OurJourney } from './components/OurJourney';
import type { Route } from './+types';


export const meta: Route.MetaFunction = () => [
  // 🔹 SEO principal
  { title: "Holu – Innovación para transformar hábitos y experiencias" },
  {
    name: "description",
    content:
      "Holu es una startup tecnológica que crea productos digitales para mejorar la vida de las personas. Diseñamos soluciones enfocadas en hábitos, bienestar, turismo y experiencias auténticas.",
  },

  // 🔹 Open Graph (Facebook / LinkedIn)
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Holu – Startup de innovación y bienestar digital" },
  {
    property: "og:description",
    content:
      "Creamos herramientas que convierten la rutina en experiencias significativas. Desde Holu Prime hasta Holu Travel, impulsamos un cambio positivo en la vida diaria.",
  },
  { property: "og:image", content: "/images/preview-holu.png" },
  { property: "og:url", content: "https://holu.app" },
  { property: "og:site_name", content: "Holu" },

  // 🔹 Twitter / X
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Holu – Transformando hábitos y experiencias" },
  {
    name: "twitter:description",
    content:
      "Startup tecnológica boliviana enfocada en innovación, bienestar y transformación digital de la vida cotidiana.",
  },
  { name: "twitter:image", content: "/images/preview-holu.png" },

  // 🔹 SEO técnico adicional
  { name: "keywords", content: "Holu, startup, tecnología, bienestar, hábitos, turismo, app boliviana" },
  { name: "author", content: "Holu Team" },
];


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurJourney />
      <ProductCarousel />
      <AboutUs />
      <Footer />
    </div>
  );
}