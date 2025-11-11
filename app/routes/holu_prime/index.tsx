import type { Route } from "./+types";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export const meta: Route.MetaFunction = () => [
  // 🔹 Básico
  { title: "Holu Prime – App de hábitos y gimnasios inteligentes" },
  {
    name: "description",
    content:
      "Holu Prime es una aplicación que combina hábitos, rutinas de gimnasio y motivación personal para ayudarte a construir una vida saludable y constante.",
  },
  { name: "keywords", content: "Holu Prime, hábitos, gimnasio, salud, bienestar, motivación, app fitness" },

  // 🔹 Open Graph (Facebook / LinkedIn)
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Holu Prime – Supera tus hábitos. Alcanza tu Prime." },
  {
    property: "og:description",
    content:
      "Combina hábitos, gimnasios y motivación en una sola app que impulsa tu mejor versión. Disponible en Android y iOS.",
  },
  { property: "og:image", content: "/images/preview-holu-prime.png" },
  { property: "og:url", content: "https://holu.app/holu_prime" },
  { property: "og:site_name", content: "Holu Prime" },

  // 🔹 Twitter / X
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Holu Prime – App de hábitos y gimnasios" },
  {
    name: "twitter:description",
    content:
      "Transforma tus hábitos y rutinas con Holu Prime: seguimiento diario, progreso visible y motivación constante.",
  },
  { name: "twitter:image", content: "/images/preview-holu-prime.png" },

  // 🔹 App Store / Play Store
  { name: "apple-itunes-app", content: "app-id=1234567890" },
  { name: "google-play-app", content: "app-id=com.holufit" },

  // 🔹 Extra
  { name: "author", content: "Holu Team" },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
