import { InfiniteSlider } from '@/components/core/infinite-slider';

const countries = [
  { code: 'gt', name: 'Guatemala' },
  { code: 'mx', name: 'México' },
  { code: 'us', name: 'Estados Unidos' },
  { code: 'ca', name: 'Canadá' },
  { code: 'co', name: 'Colombia' },
  { code: 'ar', name: 'Argentina' },
  { code: 'br', name: 'Brasil' },
  { code: 'cr', name: 'Costa Rica' },
  { code: 'pa', name: 'Panamá' },
  { code: 'it', name: 'Italia' },
  { code: 'es', name: 'España' },
  { code: 'fr', name: 'Francia' },
  { code: 'de', name: 'Alemania' },
  { code: 'gb', name: 'Reino Unido' },
];

const FlagsSlider = () => {
  return (
    <div id="flags-ticker" className="bg-[#2E4365] py-10">
      <div className="text-center px-6 mb-6">
        <p className="uppercase text-[#E59D2C] text-xs tracking-[0.3em] mb-2">
          VISITANTES DE TODO EL MUNDO
        </p>
        <h2 className="font-serif text-white text-3xl md:text-4xl mb-3">
          ¿De dónde eres tú?
        </h2>
        <p className="text-white/70 text-sm max-w-[480px] mx-auto">
          Cada semana recibimos mesas de distintos rincones del planeta. Este es nuestro mapa de visitantes.
        </p>
      </div>

      <hr className="border-white/20 mb-6 mx-6" />

      <InfiniteSlider gap={32} speed={40}>
        {countries.map((country) => (
          <img
            key={country.code}
            src={`https://flagcdn.com/w160/${country.code}.png`}
            alt={country.name}
            className="h-12 w-auto rounded-[4px] shadow-sm flex-shrink-0"
          />
        ))}
      </InfiniteSlider>
    </div>
  );
};

export default FlagsSlider;
