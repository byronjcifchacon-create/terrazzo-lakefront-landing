import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menú", href: "#menu" },
    { name: "Ubicación", href: "#location" },
    { name: "Contacto", href: "#footer" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-card/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#top")}
          className="serif text-2xl font-bold tracking-tight text-police-blue"
        >
          Terrazzo
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium uppercase tracking-widest text-police-blue hover:text-marigold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-police-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-card/95 backdrop-blur-lg z-[99] md:hidden transition-transform duration-300 flex flex-col items-center pt-12 gap-8",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-2xl font-serif font-bold text-police-blue hover:text-marigold transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
