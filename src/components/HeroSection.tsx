import { InfiniteSlider } from "./core/infinite-slider";

const foodImages = [
  "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
];

const HeroSection = () => {
  return (
    <section id="top" className="relative h-svh w-full overflow-hidden flex flex-col items-center justify-center">
      {/* CAPA 1 - Cielo con puesta de sol (radial gradient) */}
      <div className="absolute inset-x-0 top-0 h-1/2 z-0 hero-sky" />

      {/* CAPA 2 - Reflejo en el agua (flipped sky + ripple lines) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 z-0 overflow-hidden">
        <div className="absolute inset-0 hero-sky" style={{ transform: 'scaleY(-1)', filter: 'blur(1px)' }} />
        <div className="absolute inset-0 hero-ripples" />
      </div>

      {/* Brillo del sol en el agua */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[5]"
        style={{
          width: 120,
          height: '50%',
          background: 'linear-gradient(to bottom, rgba(255,244,194,0.6), transparent)',
          filter: 'blur(40px)',
        }}
      />

      {/* Social Icons */}
      <div className="absolute top-8 right-8 z-30 flex gap-6">
        <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.269-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

      {/* Center Content */}
      <div className="relative z-20 text-center px-6 w-full max-w-7xl mx-auto">
        <h1 className="serif text-white text-5xl md:text-8xl mb-12 tracking-tight text-balance hero-title-shadow">
          Terrazzo <br />
          <span className="italic">Ristorante & Bar</span>
        </h1>

        {/* Food Slider */}
        <div className="w-full mb-12">
          <InfiniteSlider gap={16} speed={40}>
            {foodImages.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-64 h-40 object-cover rounded-lg shadow-xl flex-shrink-0"
                alt="Plato del restaurante"
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
