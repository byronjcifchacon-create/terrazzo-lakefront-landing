const FooterSection = () => {
  return (
    <footer className="py-12 px-6 border-t border-border text-center" id="footer">
      <div className="max-w-6xl mx-auto">
        <h3 className="serif text-2xl mb-8">Terrazzo</h3>
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-12">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="mailto:info@terrazzoflores.com" className="hover:text-primary transition-colors">info@terrazzoflores.com</a>
          <span>Calle La Unión, Flores, Petén</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          &copy; 2025 Terrazzo Ristorante & Bar. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
