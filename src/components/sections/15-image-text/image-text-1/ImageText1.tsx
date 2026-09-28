import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ImageText1Props {
  data: {
    content: {
      heading: string;
      subheading: string;
      description: string;
      features: string[];
      primaryAction: {
        label: string;
        url: string;
      };
      image: {
        url: string;
        alt: string;
      };
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
      imageAlignment: 'left' | 'right';
    };
  };
}

export default function ImageText1({ data }: ImageText1Props) {
  const isImageRight = data.style.imageAlignment === 'right';

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <div 
      className="w-full min-h-[80vh] flex items-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className={`max-w-7xl mx-auto w-full flex flex-col gap-16 lg:gap-24 items-center ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        
        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            variants={itemVariants}
            className="text-sm font-bold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: data.style.accentColor }}
          >
            {data.content.subheading}
          </motion.span>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            {data.content.heading}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl opacity-70 mb-10 leading-relaxed max-w-xl"
          >
            {data.content.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-10">
            {data.content.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={24} style={{ color: data.style.accentColor }} />
                <span className="text-lg font-medium opacity-90">{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <a 
              href={data.content.primaryAction.url}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: data.style.accentColor }}
            >
              {data.content.primaryAction.label}
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden group">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: isImageRight ? 50 : -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Parallax effect on hover using group-hover */}
            <img 
              src={data.content.image.url} 
              alt={data.content.image.alt}
              className="absolute inset-[-5%] w-[110%] h-[110%] object-cover transition-transform duration-1000 group-hover:-translate-y-4 group-hover:scale-105"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
