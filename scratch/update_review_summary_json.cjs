const fs = require('fs');
const path = require('path');

const baseDir = 'c:/UI Library/src/components/sections/product/21-review-summary';

const metadata = [
  {
    n: 1,
    title: "Luxury Rating Dashboard",
    description: "High-end luxury dashboard with rating number count-up animation, gold star accents, and verified breakdown."
  },
  {
    n: 2,
    title: "Editorial Rating Breakdown",
    description: "Magazine editorial breakdown featuring progressive rating bars fill and serif typography headers."
  },
  {
    n: 3,
    title: "Large Numerical Rating + Minimal Distribution",
    description: "Oversized numerical rating score paired with a circular progress ring draw and minimal sentiment tags."
  },
  {
    n: 4,
    title: "Horizontal Rating Spectrum",
    description: "Full-width horizontal rating spectrum sweep displaying percentage distribution bars and sentiment meters."
  },
  {
    n: 5,
    title: "Circular Rating Visualization",
    description: "SVG circular progress indicator drawing into view alongside recommendation percentages."
  },
  {
    n: 6,
    title: "Radial Rating Summary",
    description: "Radial chart visualization revealing customer satisfaction scores and rating distribution arcs."
  },
  {
    n: 7,
    title: "Vertical Rating Breakdown",
    description: "Vertical stacked rating breakdown with staggered metric entrance animations and score filters."
  },
  {
    n: 8,
    title: "Split Rating + Review Statistics",
    description: "Two-tone split container pairing score metrics on the left with verified review statistics on the right."
  },
  {
    n: 9,
    title: "Full-Width Review Intelligence Bar",
    description: "Full-bleed banner layout with percentage counter animations and sentiment keypoints."
  },
  {
    n: 10,
    title: "Minimal Typography-First Summary",
    description: "High-whitespace typography-first summary utilizing masked typography reveals and thin line rules."
  },
  {
    n: 11,
    title: "Magazine-Style Review Summary",
    description: "Editorial broadsheet layout with progressive editorial reveals, issue badges, and quote callouts."
  },
  {
    n: 12,
    title: "Layered Glass Rating Panel",
    description: "Multi-layered frosted glass paneling with layered panel entrance physics and specular light borders."
  },
  {
    n: 13,
    title: "Asymmetric Rating Composition",
    description: "Staggered bento rating composition with directional metric slide-up animation and feature scores."
  },
  {
    n: 14,
    title: "Progress-Bar Rating Analysis",
    description: "Segmented progress-bar analysis with rating illumination and detailed 1-to-5 star breakdowns."
  },
  {
    n: 15,
    title: "Compact Product Rating Strip",
    description: "Ultra-sleek high-density rating strip with subtle number morphing and compact pill CTAs."
  },
  {
    n: 16,
    title: "Large Featured Rating + Supporting Metrics",
    description: "Prominent featured 4.9 score showcase supported by sub-attribute meters (Fit, Quality, Comfort)."
  },
  {
    n: 17,
    title: "Data Visualization Inspired Summary",
    description: "Chart-like progressive draw visualization mapping rating distribution histograms and trend lines."
  },
  {
    n: 18,
    title: "Stacked Editorial Review Metrics",
    description: "Stacked metric cards with scroll-linked metric reveals and recommendation badge callouts."
  },
  {
    n: 19,
    title: "Interactive Rating Breakdown",
    description: "Interactive score filter breakdown with real-time rating highlight states and sentiment tabs."
  },
  {
    n: 20,
    title: "Premium Review Insights Showcase",
    description: "Full-featured executive review suite with minimal cinematic metric transitions and dual CTA triggers."
  }
];

metadata.forEach(item => {
  const dir = path.join(baseDir, `review-summary-${item.n}`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const jsonPath = path.join(dir, `review-summary-${item.n}.json`);
  const content = JSON.stringify({
    title: item.title,
    description: item.description,
    averageRating: 4.8,
    reviewCount: 324,
    recommendationPercentage: 94,
    verifiedReviewCount: 310,
    ratingDistribution: {
      "5": 248,
      "4": 52,
      "3": 14,
      "2": 6,
      "1": 4
    },
    attributes: [
      { name: "Build Quality", score: "4.9 / 5" },
      { name: "Comfort & Fit", score: "4.8 / 5" },
      { name: "Battery Life", score: "4.7 / 5" }
    ]
  }, null, 2);
  fs.writeFileSync(jsonPath, content, 'utf8');
  console.log(`Updated JSON for Review Summary ${item.n}: ${item.title}`);
});
