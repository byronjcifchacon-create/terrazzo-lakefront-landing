import React from 'react';

const favorites = [
  { price: "22", name: "Favorites 01", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "19", name: "Favorites 02", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "22", name: "Favorites 03", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
];

const special1 = [
  { price: "17", name: "Food Name 01", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "11", name: "Food Name 02", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "17", name: "Food Name 03", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "15", name: "Food Name 04", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
];

const special2 = [
  { price: "$10", name: "Menu Name 01", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "$15", name: "Menu Name", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "$10", name: "Menu Name", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
];

const drinks = [
  { price: "$10", name: "Dessert Name", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "$10", name: "Dessert Name", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
  { price: "$10", name: "Dessert Name", desc: "Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore" },
];

const MenuItem = ({ price, name, desc }: { price: string; name: string; desc: string }) => (
  <div className="flex items-start gap-4 mb-8">
    <div className="relative shrink-0 w-[46px] h-[46px] rounded-full bg-[#8A3B08] border-[1.5px] border-[#E59D2C] flex items-center justify-center shadow-lg mt-1">
      <span className="text-[#EBDDC5] font-bold text-[15px] tracking-tighter">{price}</span>
    </div>
    <div className="flex-1">
      <h4 className="text-[#EBDDC5] font-bold text-xl leading-tight inline-block mb-1 font-serif tracking-widest border-b-[1.5px] border-[#E59D2C] pb-[2px]">
        {name}
      </h4>
      <p className="text-[#EBDDC5] opacity-80 text-[12px] leading-snug w-full max-w-sm">{desc}</p>
    </div>
  </div>
);

const MenuSection = () => {
  return (
    <article className="w-full bg-[#2E4365] relative" id="menu">
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto relative font-sans overflow-hidden">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative z-10">
          
          {/* Left Section */}
          <div className="md:w-1/2 flex flex-col items-center">
              
            <h2 className="text-[#EBDDC5] font-serif text-5xl md:text-6xl font-black uppercase tracking-[0.2em] text-center mb-8 drop-shadow-xl leading-[1.1]">
              <span className="text-[#E59D2C] text-2xl tracking-[0.4em] font-medium font-sans block mb-2">THE</span>MENU
            </h2>

            {/* Circular Image Top */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[10px] border-[#8A3B08] shadow-2xl mb-16 shrink-0 aspect-square">
              <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=600" alt="Delicious Food" className="w-full h-full object-cover" />
            </div>

            <div className="w-full text-left pl-0 md:pl-4">
              <h3 className="text-[#F3D58D] font-serif text-[28px] font-bold mb-8 italic drop-shadow-md tracking-wider">Favorites Menu</h3>
              {favorites.map((item, i) => <MenuItem key={i} {...item} />)}
            </div>
            
             <div className="w-full text-left mt-8 pl-0 md:pl-4">
              <h3 className="text-[#F3D58D] font-serif text-[28px] font-bold mb-8 italic drop-shadow-md tracking-wider">Special Menu</h3>
              {special1.map((item, i) => <MenuItem key={i} {...item} />)}
            </div>

          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col pt-4 md:pt-[10%] pb-48 md:pb-0 relative">
              
            <div className="w-full text-left">
              <h3 className="text-[#F3D58D] font-serif text-[28px] font-bold mb-8 italic drop-shadow-md tracking-wider">Special Menu</h3>
              {special2.map((item, i) => <MenuItem key={i} {...item} />)}
            </div>

            <div className="w-full text-left mt-12 md:mt-16">
              <h3 className="text-[#F3D58D] font-serif text-[28px] font-bold mb-8 italic drop-shadow-md tracking-wider">Special Drinks</h3>
              {drinks.map((item, i) => <MenuItem key={i} {...item} />)}
            </div>

          </div>
          
        </div>

        {/* Absolute Image Bottom Right */}
        <div className="absolute -bottom-8 -right-8 w-64 h-64 md:w-96 md:h-96 rounded-tl-[100%] overflow-hidden border-t-[12px] border-l-[12px] border-[#2E4365] shadow-[0_0_50px_rgba(0,0,0,0.8)] z-0">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600" alt="Burger and Fries" className="w-full h-full object-cover" />
        </div>

      </section>
    </article>
  );
};

export default MenuSection;
