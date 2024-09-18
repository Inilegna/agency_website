import Navbar from "./components/navbar/navbar";
import { DATA } from "./content";
import HeroSection from "./sections/heroSection/heroSection";

export default function Home() {
  const bannertext = Array(10).fill("Scrollez pour voir la suite");

  return (
    <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12 2xl:px-0">
      <Navbar />
      <main className="">
        <HeroSection />
        <div className="fixed bottom-0 right-0 bg-white h-40 w-1/2 md:w-72 p-6 z-0">
          <p className="text-primaryColor text-sm font-HKMedium uppercase truncate">
            {DATA.heroSection.seeServices}
          </p>
        </div>
        <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-10 flex items-center whitespace-nowrap overflow-x-auto">
          <div className="flex animate-infinite-scroll">
            {bannertext.map((text, index) => (
              <div
                key={index}
                className="flex items-center font-HKLight text-white/70 text-xs uppercase"
              >
                <div className="w-1 h-1 bg-white/70 rounded-full mx-3" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
