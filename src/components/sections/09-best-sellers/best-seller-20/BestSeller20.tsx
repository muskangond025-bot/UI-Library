import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  badge: string | null;
}

interface BestSeller20Props {
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

export function BestSeller20({ section }: BestSeller20Props) {
  const { content, style } = section;

  // Expecting at least 3 products for the podium
  const rank1 = content.products[0];
  const rank2 = content.products[1];
  const rank3 = content.products[2];

  // Animation variants
  const podiumVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring" as const,
        bounce: 0.4
      }
    })
  };

  const getMedalColor = (rank: number) => {
    if (rank === 1) return '#FBBF24'; // Gold
    if (rank === 2) return '#94A3B8'; // Silver
    if (rank === 3) return '#B45309'; // Bronze
    return '#FFFFFF';
  };

  const PodiumCard = ({ product, rank, heightClass, custom }: { product: Product, rank: number, heightClass: string, custom: number }) => {
    if (!product) return null;
    const medalColor = getMedalColor(rank);

    return (
      <motion.div
        custom={custom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={podiumVariants}
        className={`w-full md:w-1/3 flex flex-col justify-end ${heightClass} relative group`}
      >
        {/* Product Card */}
        <div className="relative w-full flex-1 bg-white/5 border-t border-x border-white/10 rounded-t-3xl overflow-hidden cursor-pointer transition-transform duration-500 group-hover:-translate-y-4">
          <img 
            src={product.image} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{product.name}</h3>
            <p className="text-lg font-light mb-2">{product.price}</p>
            <div className="flex items-center gap-1 text-yellow-400 mb-4">
              <Star size={14} fill="currentColor" />
              <span className="font-bold text-sm text-white">{product.rating}</span>
            </div>
            <button className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Shop
            </button>
          </div>
        </div>

        {/* Podium Base */}
        <div 
          className="h-24 md:h-32 w-full flex flex-col items-center justify-center relative shadow-2xl"
          style={{ backgroundColor: medalColor }}
        >
          <div className="absolute inset-0 bg-black/20" /> {/* Subtle shadow for depth */}
          <div className="relative z-10 flex items-center justify-center gap-2">
            <Trophy size={24} className="text-black/80" />
            <span className="text-4xl font-black text-black/80">{rank}</span>
          </div>
          {product.badge && (
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest text-black/60 mt-1">
              {product.badge}
            </span>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 overflow-hidden"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="text-center mb-16 md:mb-24">
        <p className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: style.accentColor }}>
          {content.subtitle}
        </p>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          {content.title}
        </h2>
      </div>

      <div className="w-full max-w-5xl h-[600px] flex flex-col md:flex-row items-end justify-center gap-4 md:gap-0 px-4 md:px-12">
        {/* Mobile order: 1, 2, 3. Desktop order: 2, 1, 3 for podium effect */}
        
        {/* Rank 2 (Left on Desktop, Middle on Mobile) */}
        <div className="hidden md:flex w-1/3 h-full items-end">
          <PodiumCard product={rank2} rank={2} heightClass="h-[75%]" custom={1} />
        </div>

        {/* Rank 1 (Center on Desktop, Top on Mobile) */}
        <PodiumCard product={rank1} rank={1} heightClass="h-[95%] md:h-[100%]" custom={0} />

        {/* Rank 2 for Mobile */}
        <div className="flex md:hidden w-full h-[300px]">
          <PodiumCard product={rank2} rank={2} heightClass="h-full" custom={1} />
        </div>

        {/* Rank 3 (Right on Desktop, Bottom on Mobile) */}
        <div className="w-full md:w-1/3 h-[300px] md:h-full flex items-end">
          <PodiumCard product={rank3} rank={3} heightClass="h-[100%] md:h-[60%]" custom={2} />
        </div>
      </div>
    </div>
  );
}
