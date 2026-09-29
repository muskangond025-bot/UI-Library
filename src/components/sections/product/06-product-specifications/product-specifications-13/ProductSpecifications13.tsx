import React from 'react';

const specs = [
  { id: "display", title: "Display", content: "6.7-inch Super Retina XDR display with ProMotion. 2796-by-1290-pixel resolution at 460 ppi. 2,000,000:1 contrast ratio (typical)." },
  { id: "camera", title: "Camera", content: "Pro camera system. 48MP Main: 24 mm, f/1.78 aperture. 12MP Ultra Wide: 13 mm, f/2.2 aperture. 12MP 5x Telephoto: 120 mm, f/2.8 aperture." },
  { id: "battery", title: "Power & Battery", content: "Video playback: Up to 29 hours. Fast-charge capable: Up to 50% charge in around 30 minutes with 20W adapter." },
  { id: "sensors", title: "Sensors", content: "Face ID. LiDAR Scanner. Barometer. High dynamic range gyro. High-g accelerometer. Proximity sensor. Dual ambient light sensors." }
];

export default function ProductSpecifications13({ data }: { data: any }) {
  // Simple CSS sticky layout, highly robust
  return (
    <section className="bg-white min-h-screen text-black">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 relative">
        
        {/* Sticky Sidebar Navigation */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <h2 className="text-sm font-bold tracking-widest text-neutral-400 mb-8 uppercase">Technical Specs</h2>
            <nav className="flex flex-col gap-4">
              {specs.map((spec) => (
                <a 
                  key={spec.id} 
                  href={`#spec-${spec.id}`}
                  className="text-2xl font-bold text-neutral-300 hover:text-black transition-colors"
                >
                  {spec.title}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="md:w-2/3">
          {specs.map((spec) => (
            <div key={spec.id} id={`spec-${spec.id}`} className="min-h-[50vh] pt-24 border-b border-neutral-200 last:border-0">
              <h3 className="text-4xl md:text-6xl font-black mb-8">{spec.title}</h3>
              <p className="text-2xl text-neutral-500 font-light leading-relaxed">{spec.content}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
