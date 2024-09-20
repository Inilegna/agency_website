import Navbar from "./components/navbar/Navbar";
import HeroSection from "./sections/heroSection/heroSection";

export default function Home() {
  return (
    <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
