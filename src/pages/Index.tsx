import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import FlagsSlider from "@/components/FlagsSlider";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MenuSection />
      <FlagsSlider />
      <LocationSection />
      <FooterSection />
    </main>
  );
};

export default Index;
