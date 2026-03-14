const LocationSection = () => {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="serif text-4xl mb-6">Ubicación y Horarios</h2>
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider text-xs mb-1">Dirección</p>
              <p className="text-lg">Calle La Unión, Flores, Petén, Guatemala</p>
            </div>
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider text-xs mb-1">Horarios</p>
              <p className="text-lg">
                Lunes a Domingo<br />
                12:00 PM — 10:00 PM
              </p>
            </div>
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider text-xs mb-1">Contacto</p>
              <a href="tel:+50242197555" className="text-2xl font-medium hover:text-accent transition-colors">
                +502 4219-7555
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 h-96 rounded-2xl overflow-hidden card-shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.3456789!2d-89.89!3d16.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU1JzQ4LjAiTiA4OcKwNTMnMjQuMCJX!5e0!3m2!1sen!2sgt!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación de Terrazzo"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
