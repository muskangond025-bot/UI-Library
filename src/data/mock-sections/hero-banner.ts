export const mockHeroBanner = {
  id: "hero-1",
  type: "hero-banner",
  variant: "default",
  settings: {
    eyebrow: "New Arrival",
    title: "Elevate Your Space",
    description: "Discover our new premium collection. Crafted with precision, designed for modern aesthetics and engineered to last a lifetime.",
    backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
    primaryAction: {
      label: "Shop Collection",
      url: "#"
    },
    secondaryAction: {
      label: "View Lookbook",
      url: "#"
    }
  },
  styles: {
    align: "center",
    theme: "dark",
    overlay: false
  }
};

export const mockHeroBanner2 = {
  id: "hero-2",
  type: "hero-banner",
  variant: "left-aligned",
  settings: {
    eyebrow: "Limited Edition",
    title: "Minimalist Perfection",
    description: "Embrace simplicity with our new architectural collection. Clean lines and bright spaces await. Experience the perfect harmony of form and function without the clutter.",
    backgroundImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1600",
    primaryAction: {
      label: "Explore Series",
      url: "#"
    }
  },
  styles: {
    align: "left",
    theme: "dark",
    overlay: true
  }
};
