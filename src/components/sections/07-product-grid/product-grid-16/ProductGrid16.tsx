import React from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  badge: string | null;
}

interface ProductGrid16Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      products: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function ProductGrid16({ section }: ProductGrid16Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative min-h-screen w-full font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="w-full border-b-2 border-current px-4 md:px-12 py-8 flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold uppercase" style={{ color: style.accentColor }}>
            [ {content.subtitle} ]
          </p>
          <p className="text-xs uppercase mt-2">TOTAL_ITEMS: {content.products.length}</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {content.products.map((product, index) => (
          <div 
            key={product.id}
            className="group relative border-b-2 border-r-2 border-current flex flex-col cursor-pointer bg-transparent hover:bg-current transition-colors duration-300"
          >
            <div className="p-4 border-b-2 border-current flex justify-between items-center group-hover:text-white transition-colors duration-300" style={{ color: 'inherit' }}>
              <span className="text-xs uppercase">ID_{product.id}</span>
              {product.badge && (
                <span className="px-2 py-1 text-xs font-bold border-2 border-current uppercase">
                  {product.badge}
                </span>
              )}
            </div>
            
            <div className="relative w-full aspect-[3/4] p-8 filter grayscale group-hover:grayscale-0 group-hover:invert transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover border-2 border-current"
              />
            </div>

            <div className="p-6 flex flex-col gap-4 group-hover:text-white transition-colors duration-300" style={{ color: 'inherit' }}>
              <div>
                <p className="text-xs uppercase mb-1" style={{ color: style.accentColor }}>// {product.category}</p>
                <h3 className="text-2xl font-bold uppercase break-words">{product.name}</h3>
              </div>
              <div className="flex justify-between items-end mt-auto pt-4 border-t-2 border-current">
                <p className="text-xl font-bold">{product.price}</p>
                <span className="text-xs font-bold uppercase underline">ADD_CART</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
