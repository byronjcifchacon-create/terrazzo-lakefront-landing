import { useState } from "react";

type MenuItem = { name: string; desc: string; price: string };

const menuData: Record<string, MenuItem[]> = {
  entradas: [
    { name: "Bruschetta Classica", desc: "Tomate cherry, albahaca y aceite de oliva.", price: "Q65" },
    { name: "Carpaccio di Manzo", desc: "Lomito, arúgula, alcaparras y parmesano.", price: "Q95" },
  ],
  pastas: [
    { name: "Fettuccine Alfredo", desc: "Salsa blanca cremosa y queso parmesano.", price: "Q110" },
    { name: "Lasagna Bolognese", desc: "Receta tradicional de la casa.", price: "Q125" },
  ],
  pizzas: [
    { name: "Margherita", desc: "Mozzarella, tomate y albahaca fresca.", price: "Q95" },
    { name: "Quattro Formaggi", desc: "Gorgonzola, parmesano, mozzarella y fontina.", price: "Q130" },
  ],
  bebidas: [
    { name: "Aperol Spritz", desc: "Prosecco, Aperol y soda.", price: "Q65" },
    { name: "Vino de la Casa", desc: "Copa de tinto o blanco italiano.", price: "Q55" },
  ],
  postres: [
    { name: "Tiramisù", desc: "Clásico italiano con mascarpone y café.", price: "Q55" },
    { name: "Panna Cotta", desc: "Con frutos rojos del bosque.", price: "Q45" },
  ],
};

const tabs = [
  { id: "entradas", label: "Entradas" },
  { id: "pastas", label: "Pastas" },
  { id: "pizzas", label: "Pizzas" },
  { id: "bebidas", label: "Bebidas" },
  { id: "postres", label: "Postres" },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("entradas");

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="menu">
      <div className="text-center mb-16">
        <h2 className="serif text-4xl md:text-5xl mb-4">Il Menù</h2>
        <div className="w-12 h-1 bg-primary mx-auto" />
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 md:gap-8 mb-12 border-b border-border overflow-x-auto no-scrollbar pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id ? "tab-active" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuData[activeTab]?.map((item) => (
          <div key={item.name} className="bg-card p-6 rounded-xl card-shadow flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
            </div>
            <span className="font-mono text-accent flex-shrink-0 ml-4">{item.price}</span>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-stone text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary transition-colors duration-300 shadow-lg"
        >
          Ver menú completo (PDF)
        </a>
      </div>
    </section>
  );
};

export default MenuSection;
