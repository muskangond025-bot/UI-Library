"use client";
import React from 'react';
import { ArrowLeft, Monitor, Smartphone, Tablet } from 'lucide-react';
import FeaturedProductTab1 from '../sections/14-featured-product/featured-product-tab-1/FeaturedProductTab1';
import featuredProductTab1Data from '../sections/14-featured-product/featured-product-tab-1/featured-product-tab-1.json';
import FeaturedProductTab2 from '../sections/14-featured-product/featured-product-tab-2/FeaturedProductTab2';
import featuredProductTab2Data from '../sections/14-featured-product/featured-product-tab-2/featured-product-tab-2.json';
import FeaturedProductTab3 from '../sections/14-featured-product/featured-product-tab-3/FeaturedProductTab3';
import featuredProductTab3Data from '../sections/14-featured-product/featured-product-tab-3/featured-product-tab-3.json';
import FeaturedProductTab4 from '../sections/14-featured-product/featured-product-tab-4/FeaturedProductTab4';
import featuredProductTab4Data from '../sections/14-featured-product/featured-product-tab-4/featured-product-tab-4.json';
import FeaturedProductTab5 from '../sections/14-featured-product/featured-product-tab-5/FeaturedProductTab5';
import featuredProductTab5Data from '../sections/14-featured-product/featured-product-tab-5/featured-product-tab-5.json';
import FeaturedProductTab6 from '../sections/14-featured-product/featured-product-tab-6/FeaturedProductTab6';
import featuredProductTab6Data from '../sections/14-featured-product/featured-product-tab-6/featured-product-tab-6.json';
import FeaturedProductTab7 from '../sections/14-featured-product/featured-product-tab-7/FeaturedProductTab7';
import featuredProductTab7Data from '../sections/14-featured-product/featured-product-tab-7/featured-product-tab-7.json';
import FeaturedProductTab8 from '../sections/14-featured-product/featured-product-tab-8/FeaturedProductTab8';
import featuredProductTab8Data from '../sections/14-featured-product/featured-product-tab-8/featured-product-tab-8.json';
import FeaturedProductTab9 from '../sections/14-featured-product/featured-product-tab-9/FeaturedProductTab9';
import featuredProductTab9Data from '../sections/14-featured-product/featured-product-tab-9/featured-product-tab-9.json';
import FeaturedProductTab10 from '../sections/14-featured-product/featured-product-tab-10/FeaturedProductTab10';
import featuredProductTab10Data from '../sections/14-featured-product/featured-product-tab-10/featured-product-tab-10.json';
import FeaturedProductTab11 from '../sections/14-featured-product/featured-product-tab-11/FeaturedProductTab11';
import featuredProductTab11Data from '../sections/14-featured-product/featured-product-tab-11/featured-product-tab-11.json';
import FeaturedProductTab12 from '../sections/14-featured-product/featured-product-tab-12/FeaturedProductTab12';
import featuredProductTab12Data from '../sections/14-featured-product/featured-product-tab-12/featured-product-tab-12.json';
import FeaturedProductTab13 from '../sections/14-featured-product/featured-product-tab-13/FeaturedProductTab13';
import featuredProductTab13Data from '../sections/14-featured-product/featured-product-tab-13/featured-product-tab-13.json';
import FeaturedProductTab14 from '../sections/14-featured-product/featured-product-tab-14/FeaturedProductTab14';
import featuredProductTab14Data from '../sections/14-featured-product/featured-product-tab-14/featured-product-tab-14.json';
import FeaturedProductTab15 from '../sections/14-featured-product/featured-product-tab-15/FeaturedProductTab15';
import featuredProductTab15Data from '../sections/14-featured-product/featured-product-tab-15/featured-product-tab-15.json';
import FeaturedProductTab16 from '../sections/14-featured-product/featured-product-tab-16/FeaturedProductTab16';
import featuredProductTab16Data from '../sections/14-featured-product/featured-product-tab-16/featured-product-tab-16.json';
import FeaturedProductTab17 from '../sections/14-featured-product/featured-product-tab-17/FeaturedProductTab17';
import featuredProductTab17Data from '../sections/14-featured-product/featured-product-tab-17/featured-product-tab-17.json';
import FeaturedProductTab18 from '../sections/14-featured-product/featured-product-tab-18/FeaturedProductTab18';
import featuredProductTab18Data from '../sections/14-featured-product/featured-product-tab-18/featured-product-tab-18.json';
import FeaturedProductTab19 from '../sections/14-featured-product/featured-product-tab-19/FeaturedProductTab19';
import featuredProductTab19Data from '../sections/14-featured-product/featured-product-tab-19/featured-product-tab-19.json';
import FeaturedProductTab20 from '../sections/14-featured-product/featured-product-tab-20/FeaturedProductTab20';
import featuredProductTab20Data from '../sections/14-featured-product/featured-product-tab-20/featured-product-tab-20.json';
import ImageText1 from '../sections/15-image-text/image-text-1/ImageText1';
import imageText1Data from '../sections/15-image-text/image-text-1/image-text-1.json';
import ImageText2 from '../sections/15-image-text/image-text-2/ImageText2';
import imageText2Data from '../sections/15-image-text/image-text-2/image-text-2.json';
import ImageText3 from '../sections/15-image-text/image-text-3/ImageText3';
import imageText3Data from '../sections/15-image-text/image-text-3/image-text-3.json';
import ImageText4 from '../sections/15-image-text/image-text-4/ImageText4';
import imageText4Data from '../sections/15-image-text/image-text-4/image-text-4.json';
import ImageText5 from '../sections/15-image-text/image-text-5/ImageText5';
import imageText5Data from '../sections/15-image-text/image-text-5/image-text-5.json';
import ImageText6 from '../sections/15-image-text/image-text-6/ImageText6';
import imageText6Data from '../sections/15-image-text/image-text-6/image-text-6.json';
import ImageText7 from '../sections/15-image-text/image-text-7/ImageText7';
import imageText7Data from '../sections/15-image-text/image-text-7/image-text-7.json';
import ImageText8 from '../sections/15-image-text/image-text-8/ImageText8';
import imageText8Data from '../sections/15-image-text/image-text-8/image-text-8.json';
import ImageText9 from '../sections/15-image-text/image-text-9/ImageText9';
import imageText9Data from '../sections/15-image-text/image-text-9/image-text-9.json';
import ImageText10 from '../sections/15-image-text/image-text-10/ImageText10';
import imageText10Data from '../sections/15-image-text/image-text-10/image-text-10.json';
import ImageText11 from '../sections/15-image-text/image-text-11/ImageText11';
import imageText11Data from '../sections/15-image-text/image-text-11/image-text-11.json';
import ImageText12 from '../sections/15-image-text/image-text-12/ImageText12';
import imageText12Data from '../sections/15-image-text/image-text-12/image-text-12.json';
import ImageText13 from '../sections/15-image-text/image-text-13/ImageText13';
import imageText13Data from '../sections/15-image-text/image-text-13/image-text-13.json';
import ImageText14 from '../sections/15-image-text/image-text-14/ImageText14';
import imageText14Data from '../sections/15-image-text/image-text-14/image-text-14.json';
import ImageText15 from '../sections/15-image-text/image-text-15/ImageText15';
import imageText15Data from '../sections/15-image-text/image-text-15/image-text-15.json';
import ImageText16 from '../sections/15-image-text/image-text-16/ImageText16';
import imageText16Data from '../sections/15-image-text/image-text-16/image-text-16.json';
import ImageText17 from '../sections/15-image-text/image-text-17/ImageText17';
import imageText17Data from '../sections/15-image-text/image-text-17/image-text-17.json';
import ImageText18 from '../sections/15-image-text/image-text-18/ImageText18';
import imageText18Data from '../sections/15-image-text/image-text-18/image-text-18.json';
import ImageText19 from '../sections/15-image-text/image-text-19/ImageText19';
import imageText19Data from '../sections/15-image-text/image-text-19/image-text-19.json';
import ImageText20 from '../sections/15-image-text/image-text-20/ImageText20';
import imageText20Data from '../sections/15-image-text/image-text-20/image-text-20.json';
import SplitImage1 from '../sections/16-split-image-content/split-image-1/SplitImage1';
import splitImage1Data from '../sections/16-split-image-content/split-image-1/split-image-1.json';
import SplitImage2 from '../sections/16-split-image-content/split-image-2/SplitImage2';
import splitImage2Data from '../sections/16-split-image-content/split-image-2/split-image-2.json';
import SplitImage3 from '../sections/16-split-image-content/split-image-3/SplitImage3';
import splitImage3Data from '../sections/16-split-image-content/split-image-3/split-image-3.json';
import SplitImage4 from '../sections/16-split-image-content/split-image-4/SplitImage4';
import splitImage4Data from '../sections/16-split-image-content/split-image-4/split-image-4.json';
import SplitImage5 from '../sections/16-split-image-content/split-image-5/SplitImage5';
import splitImage5Data from '../sections/16-split-image-content/split-image-5/split-image-5.json';
import SplitImage6 from '../sections/16-split-image-content/split-image-6/SplitImage6';
import splitImage6Data from '../sections/16-split-image-content/split-image-6/split-image-6.json';
import SplitImage7 from '../sections/16-split-image-content/split-image-7/SplitImage7';
import splitImage7Data from '../sections/16-split-image-content/split-image-7/split-image-7.json';
import SplitImage8 from '../sections/16-split-image-content/split-image-8/SplitImage8';
import splitImage8Data from '../sections/16-split-image-content/split-image-8/split-image-8.json';
import SplitImage9 from '../sections/16-split-image-content/split-image-9/SplitImage9';
import splitImage9Data from '../sections/16-split-image-content/split-image-9/split-image-9.json';
import SplitImage10 from '../sections/16-split-image-content/split-image-10/SplitImage10';
import splitImage10Data from '../sections/16-split-image-content/split-image-10/split-image-10.json';
import SplitImage11 from '../sections/16-split-image-content/split-image-11/SplitImage11';
import splitImage11Data from '../sections/16-split-image-content/split-image-11/split-image-11.json';
import SplitImage12 from '../sections/16-split-image-content/split-image-12/SplitImage12';
import splitImage12Data from '../sections/16-split-image-content/split-image-12/split-image-12.json';
import SplitImage13 from '../sections/16-split-image-content/split-image-13/SplitImage13';
import splitImage13Data from '../sections/16-split-image-content/split-image-13/split-image-13.json';
import SplitImage14 from '../sections/16-split-image-content/split-image-14/SplitImage14';
import splitImage14Data from '../sections/16-split-image-content/split-image-14/split-image-14.json';
import SplitImage15 from '../sections/16-split-image-content/split-image-15/SplitImage15';
import splitImage15Data from '../sections/16-split-image-content/split-image-15/split-image-15.json';
import SplitImage16 from '../sections/16-split-image-content/split-image-16/SplitImage16';
import splitImage16Data from '../sections/16-split-image-content/split-image-16/split-image-16.json';
import SplitImage17 from '../sections/16-split-image-content/split-image-17/SplitImage17';
import splitImage17Data from '../sections/16-split-image-content/split-image-17/split-image-17.json';
import SplitImage18 from '../sections/16-split-image-content/split-image-18/SplitImage18';
import splitImage18Data from '../sections/16-split-image-content/split-image-18/split-image-18.json';
import SplitImage19 from '../sections/16-split-image-content/split-image-19/SplitImage19';
import splitImage19Data from '../sections/16-split-image-content/split-image-19/split-image-19.json';
import SplitImage20 from '../sections/16-split-image-content/split-image-20/SplitImage20';
import splitImage20Data from '../sections/16-split-image-content/split-image-20/split-image-20.json';
import PromoCard1 from '../sections/17-promotional-cards/promo-card-1/PromoCard1';
import promoCard1Data from '../sections/17-promotional-cards/promo-card-1/promo-card-1.json';
import PromoCard2 from '../sections/17-promotional-cards/promo-card-2/PromoCard2';
import promoCard2Data from '../sections/17-promotional-cards/promo-card-2/promo-card-2.json';
import PromoCard3 from '../sections/17-promotional-cards/promo-card-3/PromoCard3';
import promoCard3Data from '../sections/17-promotional-cards/promo-card-3/promo-card-3.json';
import PromoCard4 from '../sections/17-promotional-cards/promo-card-4/PromoCard4';
import promoCard4Data from '../sections/17-promotional-cards/promo-card-4/promo-card-4.json';
import PromoCard5 from '../sections/17-promotional-cards/promo-card-5/PromoCard5';
import promoCard5Data from '../sections/17-promotional-cards/promo-card-5/promo-card-5.json';
import PromoCard6 from '../sections/17-promotional-cards/promo-card-6/PromoCard6';
import promoCard6Data from '../sections/17-promotional-cards/promo-card-6/promo-card-6.json';
import PromoCard7 from '../sections/17-promotional-cards/promo-card-7/PromoCard7';
import promoCard7Data from '../sections/17-promotional-cards/promo-card-7/promo-card-7.json';
import PromoCard8 from '../sections/17-promotional-cards/promo-card-8/PromoCard8';
import promoCard8Data from '../sections/17-promotional-cards/promo-card-8/promo-card-8.json';
import PromoCard9 from '../sections/17-promotional-cards/promo-card-9/PromoCard9';
import promoCard9Data from '../sections/17-promotional-cards/promo-card-9/promo-card-9.json';
import PromoCard10 from '../sections/17-promotional-cards/promo-card-10/PromoCard10';
import promoCard10Data from '../sections/17-promotional-cards/promo-card-10/promo-card-10.json';
import PromoCard11 from '../sections/17-promotional-cards/promo-card-11/PromoCard11';
import promoCard11Data from '../sections/17-promotional-cards/promo-card-11/promo-card-11.json';
import PromoCard12 from '../sections/17-promotional-cards/promo-card-12/PromoCard12';
import promoCard12Data from '../sections/17-promotional-cards/promo-card-12/promo-card-12.json';
import PromoCard13 from '../sections/17-promotional-cards/promo-card-13/PromoCard13';
import promoCard13Data from '../sections/17-promotional-cards/promo-card-13/promo-card-13.json';
import PromoCard14 from '../sections/17-promotional-cards/promo-card-14/PromoCard14';
import promoCard14Data from '../sections/17-promotional-cards/promo-card-14/promo-card-14.json';
import PromoCard15 from '../sections/17-promotional-cards/promo-card-15/PromoCard15';
import promoCard15Data from '../sections/17-promotional-cards/promo-card-15/promo-card-15.json';
import PromoCard16 from '../sections/17-promotional-cards/promo-card-16/PromoCard16';
import promoCard16Data from '../sections/17-promotional-cards/promo-card-16/promo-card-16.json';
import PromoCard17 from '../sections/17-promotional-cards/promo-card-17/PromoCard17';
import promoCard17Data from '../sections/17-promotional-cards/promo-card-17/promo-card-17.json';
import PromoCard18 from '../sections/17-promotional-cards/promo-card-18/PromoCard18';
import promoCard18Data from '../sections/17-promotional-cards/promo-card-18/promo-card-18.json';
import PromoCard19 from '../sections/17-promotional-cards/promo-card-19/PromoCard19';
import promoCard19Data from '../sections/17-promotional-cards/promo-card-19/promo-card-19.json';
import PromoCard20 from '../sections/17-promotional-cards/promo-card-20/PromoCard20';
import promoCard20Data from '../sections/17-promotional-cards/promo-card-20/promo-card-20.json';
import WhyChooseUs1 from '../sections/18-why-choose-us/why-choose-us-1/WhyChooseUs1';
import whyChooseUs1Data from '../sections/18-why-choose-us/why-choose-us-1/why-choose-us-1.json';
import WhyChooseUs2 from '../sections/18-why-choose-us/why-choose-us-2/WhyChooseUs2';
import whyChooseUs2Data from '../sections/18-why-choose-us/why-choose-us-2/why-choose-us-2.json';
import WhyChooseUs3 from '../sections/18-why-choose-us/why-choose-us-3/WhyChooseUs3';
import whyChooseUs3Data from '../sections/18-why-choose-us/why-choose-us-3/why-choose-us-3.json';
import WhyChooseUs4 from '../sections/18-why-choose-us/why-choose-us-4/WhyChooseUs4';
import whyChooseUs4Data from '../sections/18-why-choose-us/why-choose-us-4/why-choose-us-4.json';
import WhyChooseUs5 from '../sections/18-why-choose-us/why-choose-us-5/WhyChooseUs5';
import whyChooseUs5Data from '../sections/18-why-choose-us/why-choose-us-5/why-choose-us-5.json';
import WhyChooseUs6 from '../sections/18-why-choose-us/why-choose-us-6/WhyChooseUs6';
import whyChooseUs6Data from '../sections/18-why-choose-us/why-choose-us-6/why-choose-us-6.json';
import WhyChooseUs7 from '../sections/18-why-choose-us/why-choose-us-7/WhyChooseUs7';
import whyChooseUs7Data from '../sections/18-why-choose-us/why-choose-us-7/why-choose-us-7.json';
import WhyChooseUs8 from '../sections/18-why-choose-us/why-choose-us-8/WhyChooseUs8';
import whyChooseUs8Data from '../sections/18-why-choose-us/why-choose-us-8/why-choose-us-8.json';
import WhyChooseUs9 from '../sections/18-why-choose-us/why-choose-us-9/WhyChooseUs9';
import whyChooseUs9Data from '../sections/18-why-choose-us/why-choose-us-9/why-choose-us-9.json';
import WhyChooseUs10 from '../sections/18-why-choose-us/why-choose-us-10/WhyChooseUs10';
import whyChooseUs10Data from '../sections/18-why-choose-us/why-choose-us-10/why-choose-us-10.json';
import WhyChooseUs11 from '../sections/18-why-choose-us/why-choose-us-11/WhyChooseUs11';
import whyChooseUs11Data from '../sections/18-why-choose-us/why-choose-us-11/why-choose-us-11.json';
import WhyChooseUs12 from '../sections/18-why-choose-us/why-choose-us-12/WhyChooseUs12';
import whyChooseUs12Data from '../sections/18-why-choose-us/why-choose-us-12/why-choose-us-12.json';
import WhyChooseUs13 from '../sections/18-why-choose-us/why-choose-us-13/WhyChooseUs13';
import whyChooseUs13Data from '../sections/18-why-choose-us/why-choose-us-13/why-choose-us-13.json';
import WhyChooseUs14 from '../sections/18-why-choose-us/why-choose-us-14/WhyChooseUs14';
import whyChooseUs14Data from '../sections/18-why-choose-us/why-choose-us-14/why-choose-us-14.json';
import WhyChooseUs15 from '../sections/18-why-choose-us/why-choose-us-15/WhyChooseUs15';
import whyChooseUs15Data from '../sections/18-why-choose-us/why-choose-us-15/why-choose-us-15.json';
import WhyChooseUs16 from '../sections/18-why-choose-us/why-choose-us-16/WhyChooseUs16';
import whyChooseUs16Data from '../sections/18-why-choose-us/why-choose-us-16/why-choose-us-16.json';
import WhyChooseUs17 from '../sections/18-why-choose-us/why-choose-us-17/WhyChooseUs17';
import whyChooseUs17Data from '../sections/18-why-choose-us/why-choose-us-17/why-choose-us-17.json';
import WhyChooseUs18 from '../sections/18-why-choose-us/why-choose-us-18/WhyChooseUs18';
import whyChooseUs18Data from '../sections/18-why-choose-us/why-choose-us-18/why-choose-us-18.json';
import WhyChooseUs19 from '../sections/18-why-choose-us/why-choose-us-19/WhyChooseUs19';
import whyChooseUs19Data from '../sections/18-why-choose-us/why-choose-us-19/why-choose-us-19.json';
import WhyChooseUs20 from '../sections/18-why-choose-us/why-choose-us-20/WhyChooseUs20';
import whyChooseUs20Data from '../sections/18-why-choose-us/why-choose-us-20/why-choose-us-20.json';
import BrandShowcase1 from '../sections/19-brand-showcase/brand-showcase-1/BrandShowcase1';
import brandShowcase1Data from '../sections/19-brand-showcase/brand-showcase-1/brand-showcase-1.json';
import BrandShowcase2 from '../sections/19-brand-showcase/brand-showcase-2/BrandShowcase2';
import brandShowcase2Data from '../sections/19-brand-showcase/brand-showcase-2/brand-showcase-2.json';
import BrandShowcase3 from '../sections/19-brand-showcase/brand-showcase-3/BrandShowcase3';
import brandShowcase3Data from '../sections/19-brand-showcase/brand-showcase-3/brand-showcase-3.json';
import BrandShowcase4 from '../sections/19-brand-showcase/brand-showcase-4/BrandShowcase4';
import brandShowcase4Data from '../sections/19-brand-showcase/brand-showcase-4/brand-showcase-4.json';
import BrandShowcase5 from '../sections/19-brand-showcase/brand-showcase-5/BrandShowcase5';
import brandShowcase5Data from '../sections/19-brand-showcase/brand-showcase-5/brand-showcase-5.json';
import BrandShowcase6 from '../sections/19-brand-showcase/brand-showcase-6/BrandShowcase6';
import brandShowcase6Data from '../sections/19-brand-showcase/brand-showcase-6/brand-showcase-6.json';
import BrandShowcase7 from '../sections/19-brand-showcase/brand-showcase-7/BrandShowcase7';
import brandShowcase7Data from '../sections/19-brand-showcase/brand-showcase-7/brand-showcase-7.json';
import BrandShowcase8 from '../sections/19-brand-showcase/brand-showcase-8/BrandShowcase8';
import brandShowcase8Data from '../sections/19-brand-showcase/brand-showcase-8/brand-showcase-8.json';
import BrandShowcase9 from '../sections/19-brand-showcase/brand-showcase-9/BrandShowcase9';
import brandShowcase9Data from '../sections/19-brand-showcase/brand-showcase-9/brand-showcase-9.json';
import BrandShowcase10 from '../sections/19-brand-showcase/brand-showcase-10/BrandShowcase10';
import brandShowcase10Data from '../sections/19-brand-showcase/brand-showcase-10/brand-showcase-10.json';
import BrandShowcase11 from '../sections/19-brand-showcase/brand-showcase-11/BrandShowcase11';
import brandShowcase11Data from '../sections/19-brand-showcase/brand-showcase-11/brand-showcase-11.json';
import BrandShowcase12 from '../sections/19-brand-showcase/brand-showcase-12/BrandShowcase12';
import brandShowcase12Data from '../sections/19-brand-showcase/brand-showcase-12/brand-showcase-12.json';
import BrandShowcase13 from '../sections/19-brand-showcase/brand-showcase-13/BrandShowcase13';
import brandShowcase13Data from '../sections/19-brand-showcase/brand-showcase-13/brand-showcase-13.json';
import BrandShowcase14 from '../sections/19-brand-showcase/brand-showcase-14/BrandShowcase14';
import brandShowcase14Data from '../sections/19-brand-showcase/brand-showcase-14/brand-showcase-14.json';
import BrandShowcase15 from '../sections/19-brand-showcase/brand-showcase-15/BrandShowcase15';
import brandShowcase15Data from '../sections/19-brand-showcase/brand-showcase-15/brand-showcase-15.json';
import BrandShowcase16 from '../sections/19-brand-showcase/brand-showcase-16/BrandShowcase16';
import brandShowcase16Data from '../sections/19-brand-showcase/brand-showcase-16/brand-showcase-16.json';
import BrandShowcase17 from '../sections/19-brand-showcase/brand-showcase-17/BrandShowcase17';
import brandShowcase17Data from '../sections/19-brand-showcase/brand-showcase-17/brand-showcase-17.json';
import BrandShowcase18 from '../sections/19-brand-showcase/brand-showcase-18/BrandShowcase18';
import brandShowcase18Data from '../sections/19-brand-showcase/brand-showcase-18/brand-showcase-18.json';
import BrandShowcase19 from '../sections/19-brand-showcase/brand-showcase-19/BrandShowcase19';
import brandShowcase19Data from '../sections/19-brand-showcase/brand-showcase-19/brand-showcase-19.json';
import BrandShowcase20 from '../sections/19-brand-showcase/brand-showcase-20/BrandShowcase20';
import brandShowcase20Data from '../sections/19-brand-showcase/brand-showcase-20/brand-showcase-20.json';
import Testimonial1 from '../sections/20-testimonials/testimonial-1/Testimonial1';
import testimonial1Data from '../sections/20-testimonials/testimonial-1/testimonial-1.json';
import Testimonial2 from '../sections/20-testimonials/testimonial-2/Testimonial2';
import testimonial2Data from '../sections/20-testimonials/testimonial-2/testimonial-2.json';
import Testimonial3 from '../sections/20-testimonials/testimonial-3/Testimonial3';
import testimonial3Data from '../sections/20-testimonials/testimonial-3/testimonial-3.json';
import Testimonial4 from '../sections/20-testimonials/testimonial-4/Testimonial4';
import testimonial4Data from '../sections/20-testimonials/testimonial-4/testimonial-4.json';
import Testimonial5 from '../sections/20-testimonials/testimonial-5/Testimonial5';
import testimonial5Data from '../sections/20-testimonials/testimonial-5/testimonial-5.json';
import Testimonial6 from '../sections/20-testimonials/testimonial-6/Testimonial6';
import testimonial6Data from '../sections/20-testimonials/testimonial-6/testimonial-6.json';
import Testimonial7 from '../sections/20-testimonials/testimonial-7/Testimonial7';
import testimonial7Data from '../sections/20-testimonials/testimonial-7/testimonial-7.json';
import Testimonial8 from '../sections/20-testimonials/testimonial-8/Testimonial8';
import testimonial8Data from '../sections/20-testimonials/testimonial-8/testimonial-8.json';
import Testimonial9 from '../sections/20-testimonials/testimonial-9/Testimonial9';
import testimonial9Data from '../sections/20-testimonials/testimonial-9/testimonial-9.json';
import Testimonial10 from '../sections/20-testimonials/testimonial-10/Testimonial10';
import testimonial10Data from '../sections/20-testimonials/testimonial-10/testimonial-10.json';
import Testimonial11 from '../sections/20-testimonials/testimonial-11/Testimonial11';
import testimonial11Data from '../sections/20-testimonials/testimonial-11/testimonial-11.json';
import Testimonial12 from '../sections/20-testimonials/testimonial-12/Testimonial12';
import testimonial12Data from '../sections/20-testimonials/testimonial-12/testimonial-12.json';
import Testimonial13 from '../sections/20-testimonials/testimonial-13/Testimonial13';
import testimonial13Data from '../sections/20-testimonials/testimonial-13/testimonial-13.json';
import Testimonial14 from '../sections/20-testimonials/testimonial-14/Testimonial14';
import testimonial14Data from '../sections/20-testimonials/testimonial-14/testimonial-14.json';
import Testimonial15 from '../sections/20-testimonials/testimonial-15/Testimonial15';
import testimonial15Data from '../sections/20-testimonials/testimonial-15/testimonial-15.json';
import Testimonial16 from '../sections/20-testimonials/testimonial-16/Testimonial16';
import testimonial16Data from '../sections/20-testimonials/testimonial-16/testimonial-16.json';
import Testimonial17 from '../sections/20-testimonials/testimonial-17/Testimonial17';
import testimonial17Data from '../sections/20-testimonials/testimonial-17/testimonial-17.json';
import Testimonial18 from '../sections/20-testimonials/testimonial-18/Testimonial18';
import testimonial18Data from '../sections/20-testimonials/testimonial-18/testimonial-18.json';
import Testimonial19 from '../sections/20-testimonials/testimonial-19/Testimonial19';
import testimonial19Data from '../sections/20-testimonials/testimonial-19/testimonial-19.json';
import Testimonial20 from '../sections/20-testimonials/testimonial-20/Testimonial20';
import testimonial20Data from '../sections/20-testimonials/testimonial-20/testimonial-20.json';
import CustomerReview1 from '../sections/21-customer-reviews/customer-review-1/CustomerReview1';
import customerReview1Data from '../sections/21-customer-reviews/customer-review-1/customer-review-1.json';
import CustomerReview2 from '../sections/21-customer-reviews/customer-review-2/CustomerReview2';
import customerReview2Data from '../sections/21-customer-reviews/customer-review-2/customer-review-2.json';
import CustomerReview3 from '../sections/21-customer-reviews/customer-review-3/CustomerReview3';
import customerReview3Data from '../sections/21-customer-reviews/customer-review-3/customer-review-3.json';
import CustomerReview4 from '../sections/21-customer-reviews/customer-review-4/CustomerReview4';
import customerReview4Data from '../sections/21-customer-reviews/customer-review-4/customer-review-4.json';
import CustomerReview5 from '../sections/21-customer-reviews/customer-review-5/CustomerReview5';
import customerReview5Data from '../sections/21-customer-reviews/customer-review-5/customer-review-5.json';
import CustomerReview6 from '../sections/21-customer-reviews/customer-review-6/CustomerReview6';
import customerReview6Data from '../sections/21-customer-reviews/customer-review-6/customer-review-6.json';
import CustomerReview7 from '../sections/21-customer-reviews/customer-review-7/CustomerReview7';
import customerReview7Data from '../sections/21-customer-reviews/customer-review-7/customer-review-7.json';
import CustomerReview8 from '../sections/21-customer-reviews/customer-review-8/CustomerReview8';
import customerReview8Data from '../sections/21-customer-reviews/customer-review-8/customer-review-8.json';
import CustomerReview9 from '../sections/21-customer-reviews/customer-review-9/CustomerReview9';
import customerReview9Data from '../sections/21-customer-reviews/customer-review-9/customer-review-9.json';
import CustomerReview10 from '../sections/21-customer-reviews/customer-review-10/CustomerReview10';
import customerReview10Data from '../sections/21-customer-reviews/customer-review-10/customer-review-10.json';
import CustomerReview11 from '../sections/21-customer-reviews/customer-review-11/CustomerReview11';
import customerReview11Data from '../sections/21-customer-reviews/customer-review-11/customer-review-11.json';
import CustomerReview12 from '../sections/21-customer-reviews/customer-review-12/CustomerReview12';
import customerReview12Data from '../sections/21-customer-reviews/customer-review-12/customer-review-12.json';
import CustomerReview13 from '../sections/21-customer-reviews/customer-review-13/CustomerReview13';
import customerReview13Data from '../sections/21-customer-reviews/customer-review-13/customer-review-13.json';
import CustomerReview14 from '../sections/21-customer-reviews/customer-review-14/CustomerReview14';
import customerReview14Data from '../sections/21-customer-reviews/customer-review-14/customer-review-14.json';
import CustomerReview15 from '../sections/21-customer-reviews/customer-review-15/CustomerReview15';
import customerReview15Data from '../sections/21-customer-reviews/customer-review-15/customer-review-15.json';
import CustomerReview16 from '../sections/21-customer-reviews/customer-review-16/CustomerReview16';
import customerReview16Data from '../sections/21-customer-reviews/customer-review-16/customer-review-16.json';
import CustomerReview17 from '../sections/21-customer-reviews/customer-review-17/CustomerReview17';
import customerReview17Data from '../sections/21-customer-reviews/customer-review-17/customer-review-17.json';
import CustomerReview18 from '../sections/21-customer-reviews/customer-review-18/CustomerReview18';
import customerReview18Data from '../sections/21-customer-reviews/customer-review-18/customer-review-18.json';
import CustomerReview19 from '../sections/21-customer-reviews/customer-review-19/CustomerReview19';
import customerReview19Data from '../sections/21-customer-reviews/customer-review-19/customer-review-19.json';
import CustomerReview20 from '../sections/21-customer-reviews/customer-review-20/CustomerReview20';
import customerReview20Data from '../sections/21-customer-reviews/customer-review-20/customer-review-20.json';
import VideoShowcase1 from '../sections/22-video-showcase/video-showcase-1/VideoShowcase1';
import videoShowcase1Data from '../sections/22-video-showcase/video-showcase-1/video-showcase-1.json';
import VideoShowcase2 from '../sections/22-video-showcase/video-showcase-2/VideoShowcase2';
import videoShowcase2Data from '../sections/22-video-showcase/video-showcase-2/video-showcase-2.json';
import VideoShowcase3 from '../sections/22-video-showcase/video-showcase-3/VideoShowcase3';
import videoShowcase3Data from '../sections/22-video-showcase/video-showcase-3/video-showcase-3.json';
import VideoShowcase4 from '../sections/22-video-showcase/video-showcase-4/VideoShowcase4';
import videoShowcase4Data from '../sections/22-video-showcase/video-showcase-4/video-showcase-4.json';
import VideoShowcase5 from '../sections/22-video-showcase/video-showcase-5/VideoShowcase5';
import videoShowcase5Data from '../sections/22-video-showcase/video-showcase-5/video-showcase-5.json';
import VideoShowcase6 from '../sections/22-video-showcase/video-showcase-6/VideoShowcase6';
import videoShowcase6Data from '../sections/22-video-showcase/video-showcase-6/video-showcase-6.json';
import VideoShowcase7 from '../sections/22-video-showcase/video-showcase-7/VideoShowcase7';
import videoShowcase7Data from '../sections/22-video-showcase/video-showcase-7/video-showcase-7.json';
import VideoShowcase8 from '../sections/22-video-showcase/video-showcase-8/VideoShowcase8';
import videoShowcase8Data from '../sections/22-video-showcase/video-showcase-8/video-showcase-8.json';
import VideoShowcase9 from '../sections/22-video-showcase/video-showcase-9/VideoShowcase9';
import videoShowcase9Data from '../sections/22-video-showcase/video-showcase-9/video-showcase-9.json';
import VideoShowcase10 from '../sections/22-video-showcase/video-showcase-10/VideoShowcase10';
import videoShowcase10Data from '../sections/22-video-showcase/video-showcase-10/video-showcase-10.json';
import VideoShowcase11 from '../sections/22-video-showcase/video-showcase-11/VideoShowcase11';
import videoShowcase11Data from '../sections/22-video-showcase/video-showcase-11/video-showcase-11.json';
import VideoShowcase12 from '../sections/22-video-showcase/video-showcase-12/VideoShowcase12';
import videoShowcase12Data from '../sections/22-video-showcase/video-showcase-12/video-showcase-12.json';
import VideoShowcase13 from '../sections/22-video-showcase/video-showcase-13/VideoShowcase13';
import videoShowcase13Data from '../sections/22-video-showcase/video-showcase-13/video-showcase-13.json';
import VideoShowcase14 from '../sections/22-video-showcase/video-showcase-14/VideoShowcase14';
import videoShowcase14Data from '../sections/22-video-showcase/video-showcase-14/video-showcase-14.json';
import VideoShowcase15 from '../sections/22-video-showcase/video-showcase-15/VideoShowcase15';
import videoShowcase15Data from '../sections/22-video-showcase/video-showcase-15/video-showcase-15.json';
import VideoShowcase16 from '../sections/22-video-showcase/video-showcase-16/VideoShowcase16';
import videoShowcase16Data from '../sections/22-video-showcase/video-showcase-16/video-showcase-16.json';
import VideoShowcase17 from '../sections/22-video-showcase/video-showcase-17/VideoShowcase17';
import videoShowcase17Data from '../sections/22-video-showcase/video-showcase-17/video-showcase-17.json';
import VideoShowcase18 from '../sections/22-video-showcase/video-showcase-18/VideoShowcase18';
import videoShowcase18Data from '../sections/22-video-showcase/video-showcase-18/video-showcase-18.json';
import VideoShowcase19 from '../sections/22-video-showcase/video-showcase-19/VideoShowcase19';
import videoShowcase19Data from '../sections/22-video-showcase/video-showcase-19/video-showcase-19.json';
import VideoShowcase20 from '../sections/22-video-showcase/video-showcase-20/VideoShowcase20';
import videoShowcase20Data from '../sections/22-video-showcase/video-showcase-20/video-showcase-20.json';
import BlogHighlight1 from '../sections/23-blog-highlights/blog-highlight-1/BlogHighlight1';
import blogHighlight1Data from '../sections/23-blog-highlights/blog-highlight-1/blog-highlight-1.json';
import BlogHighlight2 from '../sections/23-blog-highlights/blog-highlight-2/BlogHighlight2';
import blogHighlight2Data from '../sections/23-blog-highlights/blog-highlight-2/blog-highlight-2.json';
import BlogHighlight3 from '../sections/23-blog-highlights/blog-highlight-3/BlogHighlight3';
import blogHighlight3Data from '../sections/23-blog-highlights/blog-highlight-3/blog-highlight-3.json';
import BlogHighlight4 from '../sections/23-blog-highlights/blog-highlight-4/BlogHighlight4';
import blogHighlight4Data from '../sections/23-blog-highlights/blog-highlight-4/blog-highlight-4.json';
import BlogHighlight5 from '../sections/23-blog-highlights/blog-highlight-5/BlogHighlight5';
import blogHighlight5Data from '../sections/23-blog-highlights/blog-highlight-5/blog-highlight-5.json';
import BlogHighlight6 from '../sections/23-blog-highlights/blog-highlight-6/BlogHighlight6';
import blogHighlight6Data from '../sections/23-blog-highlights/blog-highlight-6/blog-highlight-6.json';
import BlogHighlight7 from '../sections/23-blog-highlights/blog-highlight-7/BlogHighlight7';
import blogHighlight7Data from '../sections/23-blog-highlights/blog-highlight-7/blog-highlight-7.json';
import BlogHighlight8 from '../sections/23-blog-highlights/blog-highlight-8/BlogHighlight8';
import blogHighlight8Data from '../sections/23-blog-highlights/blog-highlight-8/blog-highlight-8.json';
import BlogHighlight9 from '../sections/23-blog-highlights/blog-highlight-9/BlogHighlight9';
import blogHighlight9Data from '../sections/23-blog-highlights/blog-highlight-9/blog-highlight-9.json';
import BlogHighlight10 from '../sections/23-blog-highlights/blog-highlight-10/BlogHighlight10';
import blogHighlight10Data from '../sections/23-blog-highlights/blog-highlight-10/blog-highlight-10.json';
import BlogHighlight11 from '../sections/23-blog-highlights/blog-highlight-11/BlogHighlight11';
import blogHighlight11Data from '../sections/23-blog-highlights/blog-highlight-11/blog-highlight-11.json';
import BlogHighlight12 from '../sections/23-blog-highlights/blog-highlight-12/BlogHighlight12';
import blogHighlight12Data from '../sections/23-blog-highlights/blog-highlight-12/blog-highlight-12.json';
import BlogHighlight13 from '../sections/23-blog-highlights/blog-highlight-13/BlogHighlight13';
import blogHighlight13Data from '../sections/23-blog-highlights/blog-highlight-13/blog-highlight-13.json';
import BlogHighlight14 from '../sections/23-blog-highlights/blog-highlight-14/BlogHighlight14';
import blogHighlight14Data from '../sections/23-blog-highlights/blog-highlight-14/blog-highlight-14.json';
import BlogHighlight15 from '../sections/23-blog-highlights/blog-highlight-15/BlogHighlight15';
import blogHighlight15Data from '../sections/23-blog-highlights/blog-highlight-15/blog-highlight-15.json';
import BlogHighlight16 from '../sections/23-blog-highlights/blog-highlight-16/BlogHighlight16';
import blogHighlight16Data from '../sections/23-blog-highlights/blog-highlight-16/blog-highlight-16.json';
import BlogHighlight17 from '../sections/23-blog-highlights/blog-highlight-17/BlogHighlight17';
import blogHighlight17Data from '../sections/23-blog-highlights/blog-highlight-17/blog-highlight-17.json';
import BlogHighlight18 from '../sections/23-blog-highlights/blog-highlight-18/BlogHighlight18';
import blogHighlight18Data from '../sections/23-blog-highlights/blog-highlight-18/blog-highlight-18.json';
import BlogHighlight19 from '../sections/23-blog-highlights/blog-highlight-19/BlogHighlight19';
import blogHighlight19Data from '../sections/23-blog-highlights/blog-highlight-19/blog-highlight-19.json';
import BlogHighlight20 from '../sections/23-blog-highlights/blog-highlight-20/BlogHighlight20';
import blogHighlight20Data from '../sections/23-blog-highlights/blog-highlight-20/blog-highlight-20.json';
import BuyingGuide1 from '../sections/24-buying-guide/buying-guide-1/BuyingGuide1';
import buyingGuide1Data from '../sections/24-buying-guide/buying-guide-1/buying-guide-1.json';
import BuyingGuide2 from '../sections/24-buying-guide/buying-guide-2/BuyingGuide2';
import buyingGuide2Data from '../sections/24-buying-guide/buying-guide-2/buying-guide-2.json';
import BuyingGuide3 from '../sections/24-buying-guide/buying-guide-3/BuyingGuide3';
import buyingGuide3Data from '../sections/24-buying-guide/buying-guide-3/buying-guide-3.json';
import BuyingGuide4 from '../sections/24-buying-guide/buying-guide-4/BuyingGuide4';
import buyingGuide4Data from '../sections/24-buying-guide/buying-guide-4/buying-guide-4.json';
import BuyingGuide5 from '../sections/24-buying-guide/buying-guide-5/BuyingGuide5';
import buyingGuide5Data from '../sections/24-buying-guide/buying-guide-5/buying-guide-5.json';
import BuyingGuide6 from '../sections/24-buying-guide/buying-guide-6/BuyingGuide6';
import buyingGuide6Data from '../sections/24-buying-guide/buying-guide-6/buying-guide-6.json';
import BuyingGuide7 from '../sections/24-buying-guide/buying-guide-7/BuyingGuide7';
import buyingGuide7Data from '../sections/24-buying-guide/buying-guide-7/buying-guide-7.json';
import BuyingGuide8 from '../sections/24-buying-guide/buying-guide-8/BuyingGuide8';
import buyingGuide8Data from '../sections/24-buying-guide/buying-guide-8/buying-guide-8.json';
import BuyingGuide9 from '../sections/24-buying-guide/buying-guide-9/BuyingGuide9';
import buyingGuide9Data from '../sections/24-buying-guide/buying-guide-9/buying-guide-9.json';
import BuyingGuide10 from '../sections/24-buying-guide/buying-guide-10/BuyingGuide10';
import buyingGuide10Data from '../sections/24-buying-guide/buying-guide-10/buying-guide-10.json';
import BuyingGuide11 from '../sections/24-buying-guide/buying-guide-11/BuyingGuide11';
import buyingGuide11Data from '../sections/24-buying-guide/buying-guide-11/buying-guide-11.json';
import BuyingGuide12 from '../sections/24-buying-guide/buying-guide-12/BuyingGuide12';
import buyingGuide12Data from '../sections/24-buying-guide/buying-guide-12/buying-guide-12.json';
import BuyingGuide13 from '../sections/24-buying-guide/buying-guide-13/BuyingGuide13';
import buyingGuide13Data from '../sections/24-buying-guide/buying-guide-13/buying-guide-13.json';
import BuyingGuide14 from '../sections/24-buying-guide/buying-guide-14/BuyingGuide14';
import buyingGuide14Data from '../sections/24-buying-guide/buying-guide-14/buying-guide-14.json';
import BuyingGuide15 from '../sections/24-buying-guide/buying-guide-15/BuyingGuide15';
import buyingGuide15Data from '../sections/24-buying-guide/buying-guide-15/buying-guide-15.json';
import BuyingGuide16 from '../sections/24-buying-guide/buying-guide-16/BuyingGuide16';
import buyingGuide16Data from '../sections/24-buying-guide/buying-guide-16/buying-guide-16.json';
import BuyingGuide17 from '../sections/24-buying-guide/buying-guide-17/BuyingGuide17';
import buyingGuide17Data from '../sections/24-buying-guide/buying-guide-17/buying-guide-17.json';
import BuyingGuide18 from '../sections/24-buying-guide/buying-guide-18/BuyingGuide18';
import buyingGuide18Data from '../sections/24-buying-guide/buying-guide-18/buying-guide-18.json';
import BuyingGuide19 from '../sections/24-buying-guide/buying-guide-19/BuyingGuide19';
import buyingGuide19Data from '../sections/24-buying-guide/buying-guide-19/buying-guide-19.json';
import BuyingGuide20 from '../sections/24-buying-guide/buying-guide-20/BuyingGuide20';
import buyingGuide20Data from '../sections/24-buying-guide/buying-guide-20/buying-guide-20.json';
import Faq1 from '../sections/25-faq/faq-1/Faq1';
import faq1Data from '../sections/25-faq/faq-1/faq-1.json';
import Faq2 from '../sections/25-faq/faq-2/Faq2';
import faq2Data from '../sections/25-faq/faq-2/faq-2.json';
import Faq3 from '../sections/25-faq/faq-3/Faq3';
import faq3Data from '../sections/25-faq/faq-3/faq-3.json';
import Faq4 from '../sections/25-faq/faq-4/Faq4';
import faq4Data from '../sections/25-faq/faq-4/faq-4.json';
import Faq5 from '../sections/25-faq/faq-5/Faq5';
import faq5Data from '../sections/25-faq/faq-5/faq-5.json';
import Faq6 from '../sections/25-faq/faq-6/Faq6';
import faq6Data from '../sections/25-faq/faq-6/faq-6.json';
import Faq7 from '../sections/25-faq/faq-7/Faq7';
import faq7Data from '../sections/25-faq/faq-7/faq-7.json';
import Faq8 from '../sections/25-faq/faq-8/Faq8';
import faq8Data from '../sections/25-faq/faq-8/faq-8.json';
import Faq9 from '../sections/25-faq/faq-9/Faq9';
import faq9Data from '../sections/25-faq/faq-9/faq-9.json';
import Faq10 from '../sections/25-faq/faq-10/Faq10';
import faq10Data from '../sections/25-faq/faq-10/faq-10.json';
import Faq11 from '../sections/25-faq/faq-11/Faq11';
import faq11Data from '../sections/25-faq/faq-11/faq-11.json';
import Faq12 from '../sections/25-faq/faq-12/Faq12';
import faq12Data from '../sections/25-faq/faq-12/faq-12.json';
import Faq13 from '../sections/25-faq/faq-13/Faq13';
import faq13Data from '../sections/25-faq/faq-13/faq-13.json';
import Faq14 from '../sections/25-faq/faq-14/Faq14';
import faq14Data from '../sections/25-faq/faq-14/faq-14.json';
import Faq15 from '../sections/25-faq/faq-15/Faq15';
import faq15Data from '../sections/25-faq/faq-15/faq-15.json';
import Faq16 from '../sections/25-faq/faq-16/Faq16';
import faq16Data from '../sections/25-faq/faq-16/faq-16.json';
import Faq17 from '../sections/25-faq/faq-17/Faq17';
import faq17Data from '../sections/25-faq/faq-17/faq-17.json';
import Faq18 from '../sections/25-faq/faq-18/Faq18';
import faq18Data from '../sections/25-faq/faq-18/faq-18.json';
import Faq19 from '../sections/25-faq/faq-19/Faq19';
import faq19Data from '../sections/25-faq/faq-19/faq-19.json';
import Faq20 from '../sections/25-faq/faq-20/Faq20';
import faq20Data from '../sections/25-faq/faq-20/faq-20.json';
import Newsletter1 from '../sections/26-newsletter/newsletter-1/Newsletter1';
import newsletter1Data from '../sections/26-newsletter/newsletter-1/newsletter-1.json';
import Newsletter2 from '../sections/26-newsletter/newsletter-2/Newsletter2';
import newsletter2Data from '../sections/26-newsletter/newsletter-2/newsletter-2.json';
import Newsletter3 from '../sections/26-newsletter/newsletter-3/Newsletter3';
import newsletter3Data from '../sections/26-newsletter/newsletter-3/newsletter-3.json';
import Newsletter4 from '../sections/26-newsletter/newsletter-4/Newsletter4';
import newsletter4Data from '../sections/26-newsletter/newsletter-4/newsletter-4.json';
import Newsletter5 from '../sections/26-newsletter/newsletter-5/Newsletter5';
import newsletter5Data from '../sections/26-newsletter/newsletter-5/newsletter-5.json';
import Newsletter6 from '../sections/26-newsletter/newsletter-6/Newsletter6';
import newsletter6Data from '../sections/26-newsletter/newsletter-6/newsletter-6.json';
import Newsletter7 from '../sections/26-newsletter/newsletter-7/Newsletter7';
import newsletter7Data from '../sections/26-newsletter/newsletter-7/newsletter-7.json';
import Newsletter8 from '../sections/26-newsletter/newsletter-8/Newsletter8';
import newsletter8Data from '../sections/26-newsletter/newsletter-8/newsletter-8.json';
import Newsletter9 from '../sections/26-newsletter/newsletter-9/Newsletter9';
import newsletter9Data from '../sections/26-newsletter/newsletter-9/newsletter-9.json';
import Newsletter10 from '../sections/26-newsletter/newsletter-10/Newsletter10';
import newsletter10Data from '../sections/26-newsletter/newsletter-10/newsletter-10.json';
import Newsletter11 from '../sections/26-newsletter/newsletter-11/Newsletter11';
import newsletter11Data from '../sections/26-newsletter/newsletter-11/newsletter-11.json';
import Newsletter12 from '../sections/26-newsletter/newsletter-12/Newsletter12';
import newsletter12Data from '../sections/26-newsletter/newsletter-12/newsletter-12.json';
import Newsletter13 from '../sections/26-newsletter/newsletter-13/Newsletter13';
import newsletter13Data from '../sections/26-newsletter/newsletter-13/newsletter-13.json';
import Newsletter14 from '../sections/26-newsletter/newsletter-14/Newsletter14';
import newsletter14Data from '../sections/26-newsletter/newsletter-14/newsletter-14.json';
import Newsletter15 from '../sections/26-newsletter/newsletter-15/Newsletter15';
import newsletter15Data from '../sections/26-newsletter/newsletter-15/newsletter-15.json';
import Newsletter16 from '../sections/26-newsletter/newsletter-16/Newsletter16';
import newsletter16Data from '../sections/26-newsletter/newsletter-16/newsletter-16.json';
import Newsletter17 from '../sections/26-newsletter/newsletter-17/Newsletter17';
import newsletter17Data from '../sections/26-newsletter/newsletter-17/newsletter-17.json';
import Newsletter18 from '../sections/26-newsletter/newsletter-18/Newsletter18';
import newsletter18Data from '../sections/26-newsletter/newsletter-18/newsletter-18.json';
import Newsletter19 from '../sections/26-newsletter/newsletter-19/Newsletter19';
import newsletter19Data from '../sections/26-newsletter/newsletter-19/newsletter-19.json';
import Newsletter20 from '../sections/26-newsletter/newsletter-20/Newsletter20';
import newsletter20Data from '../sections/26-newsletter/newsletter-20/newsletter-20.json';
import banner1Data from '../sections/01-hero-banner/banner-1/banner-1.json';
import banner2Data from '../sections/01-hero-banner/banner-2/banner-2.json';
import banner3Data from '../sections/01-hero-banner/banner-3/banner-3.json';
import banner4Data from '../sections/01-hero-banner/banner-4/banner-4.json';
import banner5Data from '../sections/01-hero-banner/banner-5/banner-5.json';
import banner6Data from '../sections/01-hero-banner/banner-6/banner-6.json';
import banner7Data from '../sections/01-hero-banner/banner-7/banner-7.json';
import banner8Data from '../sections/01-hero-banner/banner-8/banner-8.json';
import banner9Data from '../sections/01-hero-banner/banner-9/banner-9.json';
import banner10Data from '../sections/01-hero-banner/banner-10/banner-10.json';
import banner11Data from '../sections/01-hero-banner/banner-11/banner-11.json';
import banner12Data from '../sections/01-hero-banner/banner-12/banner-12.json';
import banner13Data from '../sections/01-hero-banner/banner-13/banner-13.json';
import banner14Data from '../sections/01-hero-banner/banner-14/banner-14.json';
import banner15Data from '../sections/01-hero-banner/banner-15/banner-15.json';
import banner16Data from '../sections/01-hero-banner/banner-16/banner-16.json';
import banner17Data from '../sections/01-hero-banner/banner-17/banner-17.json';
import banner18Data from '../sections/01-hero-banner/banner-18/banner-18.json';
import banner19Data from '../sections/01-hero-banner/banner-19/banner-19.json';
import banner20Data from '../sections/01-hero-banner/banner-20/banner-20.json';
import heroCarousel1Data from '../sections/02-hero-carousel/hero-carousel-1/hero-carousel-1.json';
import heroCarousel2Data from '../sections/02-hero-carousel/hero-carousel-2/hero-carousel-2.json';
import heroCarousel3Data from '../sections/02-hero-carousel/hero-carousel-3/hero-carousel-3.json';
import heroCarousel4Data from '../sections/02-hero-carousel/hero-carousel-4/hero-carousel-4.json';
import heroCarousel5Data from '../sections/02-hero-carousel/hero-carousel-5/hero-carousel-5.json';
import heroCarousel6Data from '../sections/02-hero-carousel/hero-carousel-6/hero-carousel-6.json';
import heroCarousel7Data from '../sections/02-hero-carousel/hero-carousel-7/hero-carousel-7.json';
import heroCarousel8Data from '../sections/02-hero-carousel/hero-carousel-8/hero-carousel-8.json';
import heroCarousel9Data from '../sections/02-hero-carousel/hero-carousel-9/hero-carousel-9.json';
import heroCarousel10Data from '../sections/02-hero-carousel/hero-carousel-10/hero-carousel-10.json';
import heroCarousel11Data from '../sections/02-hero-carousel/hero-carousel-11/hero-carousel-11.json';
import heroCarousel12Data from '../sections/02-hero-carousel/hero-carousel-12/hero-carousel-12.json';
import heroCarousel13Data from '../sections/02-hero-carousel/hero-carousel-13/hero-carousel-13.json';
import heroCarousel14Data from '../sections/02-hero-carousel/hero-carousel-14/hero-carousel-14.json';
import heroCarousel15Data from '../sections/02-hero-carousel/hero-carousel-15/hero-carousel-15.json';
import heroCarousel16Data from '../sections/02-hero-carousel/hero-carousel-16/hero-carousel-16.json';
import heroCarousel17Data from '../sections/02-hero-carousel/hero-carousel-17/hero-carousel-17.json';
import heroCarousel18Data from '../sections/02-hero-carousel/hero-carousel-18/hero-carousel-18.json';
import heroCarousel19Data from '../sections/02-hero-carousel/hero-carousel-19/hero-carousel-19.json';
import heroCarousel20Data from '../sections/02-hero-carousel/hero-carousel-20/hero-carousel-20.json';
import promotionalBanner1Data from '../sections/03-promotional-banner/promotional-banner-1/promotional-banner-1.json';
import promotionalBanner2Data from '../sections/03-promotional-banner/promotional-banner-2/promotional-banner-2.json';
import promotionalBanner3Data from '../sections/03-promotional-banner/promotional-banner-3/promotional-banner-3.json';
import promotionalBanner4Data from '../sections/03-promotional-banner/promotional-banner-4/promotional-banner-4.json';
import promotionalBanner5Data from '../sections/03-promotional-banner/promotional-banner-5/promotional-banner-5.json';
import promotionalBanner6Data from '../sections/03-promotional-banner/promotional-banner-6/promotional-banner-6.json';
import promotionalBanner7Data from '../sections/03-promotional-banner/promotional-banner-7/promotional-banner-7.json';
import promotionalBanner8Data from '../sections/03-promotional-banner/promotional-banner-8/promotional-banner-8.json';
import promotionalBanner10Data from '../sections/03-promotional-banner/promotional-banner-10/promotional-banner-10.json';
import promotionalBanner11Data from '../sections/03-promotional-banner/promotional-banner-11/promotional-banner-11.json';
import promotionalBanner12Data from '../sections/03-promotional-banner/promotional-banner-12/promotional-banner-12.json';
import promotionalBanner13Data from '../sections/03-promotional-banner/promotional-banner-13/promotional-banner-13.json';
import promotionalBanner14Data from '../sections/03-promotional-banner/promotional-banner-14/promotional-banner-14.json';
import promotionalBanner16Data from '../sections/03-promotional-banner/promotional-banner-16/promotional-banner-16.json';
import promotionalBanner17Data from '../sections/03-promotional-banner/promotional-banner-17/promotional-banner-17.json';
import promotionalBanner18Data from '../sections/03-promotional-banner/promotional-banner-18/promotional-banner-18.json';
import promotionalBanner19Data from '../sections/03-promotional-banner/promotional-banner-19/promotional-banner-19.json';
import promotionalBanner20Data from '../sections/03-promotional-banner/promotional-banner-20/promotional-banner-20.json';
import featuredCategory1Data from '../sections/04-featured-categories/featured-category-1/featured-category-1.json';
import featuredCategory2Data from '../sections/04-featured-categories/featured-category-2/featured-category-2.json';
import featuredCategory3Data from '../sections/04-featured-categories/featured-category-3/featured-category-3.json';
import featuredCategory4Data from '../sections/04-featured-categories/featured-category-4/featured-category-4.json';
import featuredCategory5Data from '../sections/04-featured-categories/featured-category-5/featured-category-5.json';
import featuredCategory6Data from '../sections/04-featured-categories/featured-category-6/featured-category-6.json';
import featuredCategory7Data from '../sections/04-featured-categories/featured-category-7/featured-category-7.json';
import featuredCategory8Data from '../sections/04-featured-categories/featured-category-8/featured-category-8.json';
import featuredCategory9Data from '../sections/04-featured-categories/featured-category-9/featured-category-9.json';
import featuredCategory10Data from '../sections/04-featured-categories/featured-category-10/featured-category-10.json';
import featuredCategory11Data from '../sections/04-featured-categories/featured-category-11/featured-category-11.json';
import featuredCategory12Data from '../sections/04-featured-categories/featured-category-12/featured-category-12.json';
import featuredCategory13Data from '../sections/04-featured-categories/featured-category-13/featured-category-13.json';
import featuredCategory14Data from '../sections/04-featured-categories/featured-category-14/featured-category-14.json';
import featuredCategory15Data from '../sections/04-featured-categories/featured-category-15/featured-category-15.json';
import featuredCategory16Data from '../sections/04-featured-categories/featured-category-16/featured-category-16.json';
import featuredCategory17Data from '../sections/04-featured-categories/featured-category-17/featured-category-17.json';
import featuredCategory18Data from '../sections/04-featured-categories/featured-category-18/featured-category-18.json';
import featuredCategory19Data from '../sections/04-featured-categories/featured-category-19/featured-category-19.json';
import featuredCategory20Data from '../sections/04-featured-categories/featured-category-20/featured-category-20.json';
import categoryGrid1Data from '../sections/05-category-grid/category-grid-1/category-grid-1.json';
import categoryGrid2Data from '../sections/05-category-grid/category-grid-2/category-grid-2.json';
import categoryGrid3Data from '../sections/05-category-grid/category-grid-3/category-grid-3.json';
import categoryGrid4Data from '../sections/05-category-grid/category-grid-4/category-grid-4.json';
import categoryGrid5Data from '../sections/05-category-grid/category-grid-5/category-grid-5.json';
import categoryGrid6Data from '../sections/05-category-grid/category-grid-6/category-grid-6.json';
import categoryGrid7Data from '../sections/05-category-grid/category-grid-7/category-grid-7.json';
import categoryGrid8Data from '../sections/05-category-grid/category-grid-8/category-grid-8.json';
import categoryGrid9Data from '../sections/05-category-grid/category-grid-9/category-grid-9.json';
import categoryGrid10Data from '../sections/05-category-grid/category-grid-10/category-grid-10.json';
import categoryGrid11Data from '../sections/05-category-grid/category-grid-11/category-grid-11.json';
import categoryGrid12Data from '../sections/05-category-grid/category-grid-12/category-grid-12.json';
import categoryGrid13Data from '../sections/05-category-grid/category-grid-13/category-grid-13.json';
import categoryGrid14Data from '../sections/05-category-grid/category-grid-14/category-grid-14.json';
import categoryGrid15Data from '../sections/05-category-grid/category-grid-15/category-grid-15.json';
import categoryGrid16Data from '../sections/05-category-grid/category-grid-16/category-grid-16.json';
import categoryGrid17Data from '../sections/05-category-grid/category-grid-17/category-grid-17.json';
import categoryGrid18Data from '../sections/05-category-grid/category-grid-18/category-grid-18.json';
import categoryGrid19Data from '../sections/05-category-grid/category-grid-19/category-grid-19.json';
import categoryGrid20Data from '../sections/05-category-grid/category-grid-20/category-grid-20.json';
import { Banner1 } from '../sections/01-hero-banner/banner-1/Banner1';
import { Banner2 } from '../sections/01-hero-banner/banner-2/Banner2';
import { Banner3 } from '../sections/01-hero-banner/banner-3/Banner3';
import { Banner4 } from '../sections/01-hero-banner/banner-4/Banner4';
import { Banner5 } from '../sections/01-hero-banner/banner-5/Banner5';
import { Banner6 } from '../sections/01-hero-banner/banner-6/Banner6';
import { Banner7 } from '../sections/01-hero-banner/banner-7/Banner7';
import { Banner8 } from '../sections/01-hero-banner/banner-8/Banner8';
import { Banner9 } from '../sections/01-hero-banner/banner-9/Banner9';
import { Banner10 } from '../sections/01-hero-banner/banner-10/Banner10';
import { Banner11 } from '../sections/01-hero-banner/banner-11/Banner11';
import { Banner12 } from '../sections/01-hero-banner/banner-12/Banner12';
import { Banner13 } from '../sections/01-hero-banner/banner-13/Banner13';
import { Banner14 } from '../sections/01-hero-banner/banner-14/Banner14';
import { Banner15 } from '../sections/01-hero-banner/banner-15/Banner15';
import { Banner16 } from '../sections/01-hero-banner/banner-16/Banner16';
import { Banner17 } from '../sections/01-hero-banner/banner-17/Banner17';
import { Banner18 } from '../sections/01-hero-banner/banner-18/Banner18';
import { Banner19 } from '../sections/01-hero-banner/banner-19/Banner19';
import { Banner20 } from '../sections/01-hero-banner/banner-20/Banner20';
import { HeroCarousel1 } from '../sections/02-hero-carousel/hero-carousel-1/HeroCarousel1';
import { HeroCarousel2 } from '../sections/02-hero-carousel/hero-carousel-2/HeroCarousel2';
import { HeroCarousel3 } from '../sections/02-hero-carousel/hero-carousel-3/HeroCarousel3';
import { HeroCarousel4 } from '../sections/02-hero-carousel/hero-carousel-4/HeroCarousel4';
import { HeroCarousel5 } from '../sections/02-hero-carousel/hero-carousel-5/HeroCarousel5';
import { HeroCarousel6 } from '../sections/02-hero-carousel/hero-carousel-6/HeroCarousel6';
import { HeroCarousel7 } from '../sections/02-hero-carousel/hero-carousel-7/HeroCarousel7';
import { HeroCarousel8 } from '../sections/02-hero-carousel/hero-carousel-8/HeroCarousel8';
import { HeroCarousel9 } from '../sections/02-hero-carousel/hero-carousel-9/HeroCarousel9';
import { HeroCarousel10 } from '../sections/02-hero-carousel/hero-carousel-10/HeroCarousel10';
import { HeroCarousel11 } from '../sections/02-hero-carousel/hero-carousel-11/HeroCarousel11';
import { HeroCarousel12 } from '../sections/02-hero-carousel/hero-carousel-12/HeroCarousel12';
import { HeroCarousel13 } from '../sections/02-hero-carousel/hero-carousel-13/HeroCarousel13';
import { HeroCarousel14 } from '../sections/02-hero-carousel/hero-carousel-14/HeroCarousel14';
import { HeroCarousel15 } from '../sections/02-hero-carousel/hero-carousel-15/HeroCarousel15';
import { HeroCarousel16 } from '../sections/02-hero-carousel/hero-carousel-16/HeroCarousel16';
import { HeroCarousel17 } from '../sections/02-hero-carousel/hero-carousel-17/HeroCarousel17';
import { HeroCarousel18 } from '../sections/02-hero-carousel/hero-carousel-18/HeroCarousel18';
import { HeroCarousel19 } from '../sections/02-hero-carousel/hero-carousel-19/HeroCarousel19';
import { HeroCarousel20 } from '../sections/02-hero-carousel/hero-carousel-20/HeroCarousel20';
import { PromotionalBanner1 } from '../sections/03-promotional-banner/promotional-banner-1/PromotionalBanner1';
import { PromotionalBanner2 } from '../sections/03-promotional-banner/promotional-banner-2/PromotionalBanner2';
import { PromotionalBanner3 } from '../sections/03-promotional-banner/promotional-banner-3/PromotionalBanner3';
import { PromotionalBanner4 } from '../sections/03-promotional-banner/promotional-banner-4/PromotionalBanner4';
import { PromotionalBanner5 } from '../sections/03-promotional-banner/promotional-banner-5/PromotionalBanner5';
import { PromotionalBanner6 } from '../sections/03-promotional-banner/promotional-banner-6/PromotionalBanner6';
import { PromotionalBanner7 } from '../sections/03-promotional-banner/promotional-banner-7/PromotionalBanner7';
import { PromotionalBanner8 } from '../sections/03-promotional-banner/promotional-banner-8/PromotionalBanner8';
import { PromotionalBanner10 } from '../sections/03-promotional-banner/promotional-banner-10/PromotionalBanner10';
import { PromotionalBanner11 } from '../sections/03-promotional-banner/promotional-banner-11/PromotionalBanner11';
import { PromotionalBanner12 } from '../sections/03-promotional-banner/promotional-banner-12/PromotionalBanner12';
import { PromotionalBanner13 } from '../sections/03-promotional-banner/promotional-banner-13/PromotionalBanner13';
import { PromotionalBanner14 } from '../sections/03-promotional-banner/promotional-banner-14/PromotionalBanner14';
import { PromotionalBanner16 } from '../sections/03-promotional-banner/promotional-banner-16/PromotionalBanner16';
import { PromotionalBanner17 } from '../sections/03-promotional-banner/promotional-banner-17/PromotionalBanner17';
import { PromotionalBanner18 } from '../sections/03-promotional-banner/promotional-banner-18/PromotionalBanner18';
import { PromotionalBanner19 } from '../sections/03-promotional-banner/promotional-banner-19/PromotionalBanner19';
import { PromotionalBanner20 } from '../sections/03-promotional-banner/promotional-banner-20/PromotionalBanner20';
import { FeaturedCategory1 } from '../sections/04-featured-categories/featured-category-1/FeaturedCategory1';
import { FeaturedCategory2 } from '../sections/04-featured-categories/featured-category-2/FeaturedCategory2';
import { FeaturedCategory3 } from '../sections/04-featured-categories/featured-category-3/FeaturedCategory3';
import { FeaturedCategory4 } from '../sections/04-featured-categories/featured-category-4/FeaturedCategory4';
import { FeaturedCategory5 } from '../sections/04-featured-categories/featured-category-5/FeaturedCategory5';
import { FeaturedCategory6 } from '../sections/04-featured-categories/featured-category-6/FeaturedCategory6';
import { FeaturedCategory7 } from '../sections/04-featured-categories/featured-category-7/FeaturedCategory7';
import { FeaturedCategory8 } from '../sections/04-featured-categories/featured-category-8/FeaturedCategory8';
import { FeaturedCategory9 } from '../sections/04-featured-categories/featured-category-9/FeaturedCategory9';
import { FeaturedCategory10 } from '../sections/04-featured-categories/featured-category-10/FeaturedCategory10';
import { FeaturedCategory11 } from '../sections/04-featured-categories/featured-category-11/FeaturedCategory11';
import { FeaturedCategory12 } from '../sections/04-featured-categories/featured-category-12/FeaturedCategory12';
import { FeaturedCategory13 } from '../sections/04-featured-categories/featured-category-13/FeaturedCategory13';
import { FeaturedCategory14 } from '../sections/04-featured-categories/featured-category-14/FeaturedCategory14';
import { FeaturedCategory15 } from '../sections/04-featured-categories/featured-category-15/FeaturedCategory15';
import { FeaturedCategory16 } from '../sections/04-featured-categories/featured-category-16/FeaturedCategory16';
import { FeaturedCategory17 } from '../sections/04-featured-categories/featured-category-17/FeaturedCategory17';
import { FeaturedCategory18 } from '../sections/04-featured-categories/featured-category-18/FeaturedCategory18';
import { FeaturedCategory19 } from '../sections/04-featured-categories/featured-category-19/FeaturedCategory19';
import { FeaturedCategory20 } from '../sections/04-featured-categories/featured-category-20/FeaturedCategory20';
import { CategoryGrid1 } from '../sections/05-category-grid/category-grid-1/CategoryGrid1';
import { CategoryGrid2 } from '../sections/05-category-grid/category-grid-2/CategoryGrid2';
import { CategoryGrid3 } from '../sections/05-category-grid/category-grid-3/CategoryGrid3';
import { CategoryGrid4 } from '../sections/05-category-grid/category-grid-4/CategoryGrid4';
import { CategoryGrid5 } from '../sections/05-category-grid/category-grid-5/CategoryGrid5';
import { CategoryGrid6 } from '../sections/05-category-grid/category-grid-6/CategoryGrid6';
import { CategoryGrid7 } from '../sections/05-category-grid/category-grid-7/CategoryGrid7';
import { CategoryGrid8 } from '../sections/05-category-grid/category-grid-8/CategoryGrid8';
import { CategoryGrid9 } from '../sections/05-category-grid/category-grid-9/CategoryGrid9';
import { CategoryGrid10 } from '../sections/05-category-grid/category-grid-10/CategoryGrid10';
import { CategoryGrid11 } from '../sections/05-category-grid/category-grid-11/CategoryGrid11';
import { CategoryGrid12 } from '../sections/05-category-grid/category-grid-12/CategoryGrid12';
import { CategoryGrid13 } from '../sections/05-category-grid/category-grid-13/CategoryGrid13';
import { CategoryGrid14 } from '../sections/05-category-grid/category-grid-14/CategoryGrid14';
import { CategoryGrid15 } from '../sections/05-category-grid/category-grid-15/CategoryGrid15';
import { CategoryGrid16 } from '../sections/05-category-grid/category-grid-16/CategoryGrid16';
import { CategoryGrid17 } from '../sections/05-category-grid/category-grid-17/CategoryGrid17';
import { CategoryGrid18 } from '../sections/05-category-grid/category-grid-18/CategoryGrid18';
import { CategoryGrid19 } from '../sections/05-category-grid/category-grid-19/CategoryGrid19';
import { CategoryGrid20 } from '../sections/05-category-grid/category-grid-20/CategoryGrid20';
import { FeaturedCollection1 } from '../sections/06-featured-collections/featured-collection-1/FeaturedCollection1';
import featuredCollection1Data from '../sections/06-featured-collections/featured-collection-1/featured-collection-1.json';
import { FeaturedCollection2 } from '../sections/06-featured-collections/featured-collection-2/FeaturedCollection2';
import featuredCollection2Data from '../sections/06-featured-collections/featured-collection-2/featured-collection-2.json';
import { FeaturedCollection3 } from '../sections/06-featured-collections/featured-collection-3/FeaturedCollection3';
import featuredCollection3Data from '../sections/06-featured-collections/featured-collection-3/featured-collection-3.json';
import { FeaturedCollection4 } from '../sections/06-featured-collections/featured-collection-4/FeaturedCollection4';
import featuredCollection4Data from '../sections/06-featured-collections/featured-collection-4/featured-collection-4.json';
import { FeaturedCollection5 } from '../sections/06-featured-collections/featured-collection-5/FeaturedCollection5';
import featuredCollection5Data from '../sections/06-featured-collections/featured-collection-5/featured-collection-5.json';
import { FeaturedCollection6 } from '../sections/06-featured-collections/featured-collection-6/FeaturedCollection6';
import featuredCollection6Data from '../sections/06-featured-collections/featured-collection-6/featured-collection-6.json';
import { FeaturedCollection7 } from '../sections/06-featured-collections/featured-collection-7/FeaturedCollection7';
import featuredCollection7Data from '../sections/06-featured-collections/featured-collection-7/featured-collection-7.json';
import { FeaturedCollection8 } from '../sections/06-featured-collections/featured-collection-8/FeaturedCollection8';
import featuredCollection8Data from '../sections/06-featured-collections/featured-collection-8/featured-collection-8.json';
import { FeaturedCollection9 } from '../sections/06-featured-collections/featured-collection-9/FeaturedCollection9';
import featuredCollection9Data from '../sections/06-featured-collections/featured-collection-9/featured-collection-9.json';
import { FeaturedCollection10 } from '../sections/06-featured-collections/featured-collection-10/FeaturedCollection10';
import featuredCollection10Data from '../sections/06-featured-collections/featured-collection-10/featured-collection-10.json';
import { FeaturedCollection11 } from '../sections/06-featured-collections/featured-collection-11/FeaturedCollection11';
import featuredCollection11Data from '../sections/06-featured-collections/featured-collection-11/featured-collection-11.json';
import { FeaturedCollection12 } from '../sections/06-featured-collections/featured-collection-12/FeaturedCollection12';
import featuredCollection12Data from '../sections/06-featured-collections/featured-collection-12/featured-collection-12.json';
import { FeaturedCollection13 } from '../sections/06-featured-collections/featured-collection-13/FeaturedCollection13';
import featuredCollection13Data from '../sections/06-featured-collections/featured-collection-13/featured-collection-13.json';
import { FeaturedCollection14 } from '../sections/06-featured-collections/featured-collection-14/FeaturedCollection14';
import featuredCollection14Data from '../sections/06-featured-collections/featured-collection-14/featured-collection-14.json';
import { FeaturedCollection15 } from '../sections/06-featured-collections/featured-collection-15/FeaturedCollection15';
import featuredCollection15Data from '../sections/06-featured-collections/featured-collection-15/featured-collection-15.json';
import { FeaturedCollection16 } from '../sections/06-featured-collections/featured-collection-16/FeaturedCollection16';
import featuredCollection16Data from '../sections/06-featured-collections/featured-collection-16/featured-collection-16.json';
import { FeaturedCollection17 } from '../sections/06-featured-collections/featured-collection-17/FeaturedCollection17';
import featuredCollection17Data from '../sections/06-featured-collections/featured-collection-17/featured-collection-17.json';
import { FeaturedCollection18 } from '../sections/06-featured-collections/featured-collection-18/FeaturedCollection18';
import featuredCollection18Data from '../sections/06-featured-collections/featured-collection-18/featured-collection-18.json';
import { FeaturedCollection19 } from '../sections/06-featured-collections/featured-collection-19/FeaturedCollection19';
import featuredCollection19Data from '../sections/06-featured-collections/featured-collection-19/featured-collection-19.json';
import { FeaturedCollection20 } from '../sections/06-featured-collections/featured-collection-20/FeaturedCollection20';
import featuredCollection20Data from '../sections/06-featured-collections/featured-collection-20/featured-collection-20.json';
import { ProductGrid1 } from '../sections/07-product-grid/product-grid-1/ProductGrid1';
import productGrid1Data from '../sections/07-product-grid/product-grid-1/product-grid-1.json';
import { ProductGrid2 } from '../sections/07-product-grid/product-grid-2/ProductGrid2';
import productGrid2Data from '../sections/07-product-grid/product-grid-2/product-grid-2.json';
import { ProductGrid3 } from '../sections/07-product-grid/product-grid-3/ProductGrid3';
import productGrid3Data from '../sections/07-product-grid/product-grid-3/product-grid-3.json';
import { ProductGrid4 } from '../sections/07-product-grid/product-grid-4/ProductGrid4';
import productGrid4Data from '../sections/07-product-grid/product-grid-4/product-grid-4.json';
import { ProductGrid5 } from '../sections/07-product-grid/product-grid-5/ProductGrid5';
import productGrid5Data from '../sections/07-product-grid/product-grid-5/product-grid-5.json';
import { ProductGrid6 } from '../sections/07-product-grid/product-grid-6/ProductGrid6';
import productGrid6Data from '../sections/07-product-grid/product-grid-6/product-grid-6.json';
import { ProductGrid7 } from '../sections/07-product-grid/product-grid-7/ProductGrid7';
import productGrid7Data from '../sections/07-product-grid/product-grid-7/product-grid-7.json';
import { ProductGrid8 } from '../sections/07-product-grid/product-grid-8/ProductGrid8';
import productGrid8Data from '../sections/07-product-grid/product-grid-8/product-grid-8.json';
import { ProductGrid9 } from '../sections/07-product-grid/product-grid-9/ProductGrid9';
import productGrid9Data from '../sections/07-product-grid/product-grid-9/product-grid-9.json';
import { ProductGrid10 } from '../sections/07-product-grid/product-grid-10/ProductGrid10';
import productGrid10Data from '../sections/07-product-grid/product-grid-10/product-grid-10.json';
import { ProductGrid11 } from '../sections/07-product-grid/product-grid-11/ProductGrid11';
import productGrid11Data from '../sections/07-product-grid/product-grid-11/product-grid-11.json';
import { ProductGrid12 } from '../sections/07-product-grid/product-grid-12/ProductGrid12';
import productGrid12Data from '../sections/07-product-grid/product-grid-12/product-grid-12.json';
import { ProductGrid13 } from '../sections/07-product-grid/product-grid-13/ProductGrid13';
import productGrid13Data from '../sections/07-product-grid/product-grid-13/product-grid-13.json';
import { ProductGrid14 } from '../sections/07-product-grid/product-grid-14/ProductGrid14';
import productGrid14Data from '../sections/07-product-grid/product-grid-14/product-grid-14.json';
import { ProductGrid15 } from '../sections/07-product-grid/product-grid-15/ProductGrid15';
import productGrid15Data from '../sections/07-product-grid/product-grid-15/product-grid-15.json';
import { ProductGrid16 } from '../sections/07-product-grid/product-grid-16/ProductGrid16';
import productGrid16Data from '../sections/07-product-grid/product-grid-16/product-grid-16.json';
import { ProductGrid17 } from '../sections/07-product-grid/product-grid-17/ProductGrid17';
import productGrid17Data from '../sections/07-product-grid/product-grid-17/product-grid-17.json';
import { ProductGrid18 } from '../sections/07-product-grid/product-grid-18/ProductGrid18';
import productGrid18Data from '../sections/07-product-grid/product-grid-18/product-grid-18.json';
import { ProductGrid19 } from '../sections/07-product-grid/product-grid-19/ProductGrid19';
import productGrid19Data from '../sections/07-product-grid/product-grid-19/product-grid-19.json';
import { ProductGrid20 } from '../sections/07-product-grid/product-grid-20/ProductGrid20';
import productGrid20Data from '../sections/07-product-grid/product-grid-20/product-grid-20.json';
import { ProductCarousel1 } from '../sections/08-product-carousel/product-carousel-1/ProductCarousel1';
import productCarousel1Data from '../sections/08-product-carousel/product-carousel-1/product-carousel-1.json';
import { ProductCarousel2 } from '../sections/08-product-carousel/product-carousel-2/ProductCarousel2';
import productCarousel2Data from '../sections/08-product-carousel/product-carousel-2/product-carousel-2.json';
import { ProductCarousel3 } from '../sections/08-product-carousel/product-carousel-3/ProductCarousel3';
import productCarousel3Data from '../sections/08-product-carousel/product-carousel-3/product-carousel-3.json';
import { ProductCarousel4 } from '../sections/08-product-carousel/product-carousel-4/ProductCarousel4';
import productCarousel4Data from '../sections/08-product-carousel/product-carousel-4/product-carousel-4.json';
import { ProductCarousel5 } from '../sections/08-product-carousel/product-carousel-5/ProductCarousel5';
import productCarousel5Data from '../sections/08-product-carousel/product-carousel-5/product-carousel-5.json';
import { ProductCarousel6 } from '../sections/08-product-carousel/product-carousel-6/ProductCarousel6';
import productCarousel6Data from '../sections/08-product-carousel/product-carousel-6/product-carousel-6.json';
import { ProductCarousel7 } from '../sections/08-product-carousel/product-carousel-7/ProductCarousel7';
import productCarousel7Data from '../sections/08-product-carousel/product-carousel-7/product-carousel-7.json';
import { ProductCarousel8 } from '../sections/08-product-carousel/product-carousel-8/ProductCarousel8';
import productCarousel8Data from '../sections/08-product-carousel/product-carousel-8/product-carousel-8.json';
import { ProductCarousel9 } from '../sections/08-product-carousel/product-carousel-9/ProductCarousel9';
import productCarousel9Data from '../sections/08-product-carousel/product-carousel-9/product-carousel-9.json';
import { ProductCarousel10 } from '../sections/08-product-carousel/product-carousel-10/ProductCarousel10';
import productCarousel10Data from '../sections/08-product-carousel/product-carousel-10/product-carousel-10.json';
import { ProductCarousel11 } from '../sections/08-product-carousel/product-carousel-11/ProductCarousel11';
import productCarousel11Data from '../sections/08-product-carousel/product-carousel-11/product-carousel-11.json';
import { ProductCarousel12 } from '../sections/08-product-carousel/product-carousel-12/ProductCarousel12';
import productCarousel12Data from '../sections/08-product-carousel/product-carousel-12/product-carousel-12.json';
import { ProductCarousel13 } from '../sections/08-product-carousel/product-carousel-13/ProductCarousel13';
import productCarousel13Data from '../sections/08-product-carousel/product-carousel-13/product-carousel-13.json';
import { ProductCarousel14 } from '../sections/08-product-carousel/product-carousel-14/ProductCarousel14';
import productCarousel14Data from '../sections/08-product-carousel/product-carousel-14/product-carousel-14.json';
import { ProductCarousel15 } from '../sections/08-product-carousel/product-carousel-15/ProductCarousel15';
import productCarousel15Data from '../sections/08-product-carousel/product-carousel-15/product-carousel-15.json';
import { ProductCarousel16 } from '../sections/08-product-carousel/product-carousel-16/ProductCarousel16';
import productCarousel16Data from '../sections/08-product-carousel/product-carousel-16/product-carousel-16.json';
import { ProductCarousel17 } from '../sections/08-product-carousel/product-carousel-17/ProductCarousel17';
import productCarousel17Data from '../sections/08-product-carousel/product-carousel-17/product-carousel-17.json';
import { ProductCarousel18 } from '../sections/08-product-carousel/product-carousel-18/ProductCarousel18';
import productCarousel18Data from '../sections/08-product-carousel/product-carousel-18/product-carousel-18.json';
import { ProductCarousel19 } from '../sections/08-product-carousel/product-carousel-19/ProductCarousel19';
import productCarousel19Data from '../sections/08-product-carousel/product-carousel-19/product-carousel-19.json';
import { ProductCarousel20 } from '../sections/08-product-carousel/product-carousel-20/ProductCarousel20';
import productCarousel20Data from '../sections/08-product-carousel/product-carousel-20/product-carousel-20.json';
import { BestSeller1 } from '../sections/09-best-sellers/best-seller-1/BestSeller1';
import bestSeller1Data from '../sections/09-best-sellers/best-seller-1/best-seller-1.json';
import { BestSeller2 } from '../sections/09-best-sellers/best-seller-2/BestSeller2';
import bestSeller2Data from '../sections/09-best-sellers/best-seller-2/best-seller-2.json';
import { BestSeller3 } from '../sections/09-best-sellers/best-seller-3/BestSeller3';
import bestSeller3Data from '../sections/09-best-sellers/best-seller-3/best-seller-3.json';
import { BestSeller4 } from '../sections/09-best-sellers/best-seller-4/BestSeller4';
import bestSeller4Data from '../sections/09-best-sellers/best-seller-4/best-seller-4.json';
import { BestSeller5 } from '../sections/09-best-sellers/best-seller-5/BestSeller5';
import bestSeller5Data from '../sections/09-best-sellers/best-seller-5/best-seller-5.json';
import { BestSeller6 } from '../sections/09-best-sellers/best-seller-6/BestSeller6';
import bestSeller6Data from '../sections/09-best-sellers/best-seller-6/best-seller-6.json';
import { BestSeller7 } from '../sections/09-best-sellers/best-seller-7/BestSeller7';
import bestSeller7Data from '../sections/09-best-sellers/best-seller-7/best-seller-7.json';
import { BestSeller8 } from '../sections/09-best-sellers/best-seller-8/BestSeller8';
import bestSeller8Data from '../sections/09-best-sellers/best-seller-8/best-seller-8.json';
import { BestSeller9 } from '../sections/09-best-sellers/best-seller-9/BestSeller9';
import bestSeller9Data from '../sections/09-best-sellers/best-seller-9/best-seller-9.json';
import { BestSeller10 } from '../sections/09-best-sellers/best-seller-10/BestSeller10';
import bestSeller10Data from '../sections/09-best-sellers/best-seller-10/best-seller-10.json';
import { BestSeller11 } from '../sections/09-best-sellers/best-seller-11/BestSeller11';
import bestSeller11Data from '../sections/09-best-sellers/best-seller-11/best-seller-11.json';
import { BestSeller12 } from '../sections/09-best-sellers/best-seller-12/BestSeller12';
import bestSeller12Data from '../sections/09-best-sellers/best-seller-12/best-seller-12.json';
import { BestSeller13 } from '../sections/09-best-sellers/best-seller-13/BestSeller13';
import bestSeller13Data from '../sections/09-best-sellers/best-seller-13/best-seller-13.json';
import { BestSeller14 } from '../sections/09-best-sellers/best-seller-14/BestSeller14';
import bestSeller14Data from '../sections/09-best-sellers/best-seller-14/best-seller-14.json';
import { BestSeller15 } from '../sections/09-best-sellers/best-seller-15/BestSeller15';
import bestSeller15Data from '../sections/09-best-sellers/best-seller-15/best-seller-15.json';
import { BestSeller16 } from '../sections/09-best-sellers/best-seller-16/BestSeller16';
import bestSeller16Data from '../sections/09-best-sellers/best-seller-16/best-seller-16.json';
import { BestSeller17 } from '../sections/09-best-sellers/best-seller-17/BestSeller17';
import bestSeller17Data from '../sections/09-best-sellers/best-seller-17/best-seller-17.json';
import { BestSeller18 } from '../sections/09-best-sellers/best-seller-18/BestSeller18';
import bestSeller18Data from '../sections/09-best-sellers/best-seller-18/best-seller-18.json';
import { BestSeller19 } from '../sections/09-best-sellers/best-seller-19/BestSeller19';
import bestSeller19Data from '../sections/09-best-sellers/best-seller-19/best-seller-19.json';
import { BestSeller20 } from '../sections/09-best-sellers/best-seller-20/BestSeller20';
import bestSeller20Data from '../sections/09-best-sellers/best-seller-20/best-seller-20.json';
import { NewArrival1 } from '../sections/10-new-arrivals/new-arrival-1/NewArrival1';
import newArrival1Data from '../sections/10-new-arrivals/new-arrival-1/new-arrival-1.json';
import { NewArrival2 } from '../sections/10-new-arrivals/new-arrival-2/NewArrival2';
import newArrival2Data from '../sections/10-new-arrivals/new-arrival-2/new-arrival-2.json';
import { NewArrival3 } from '../sections/10-new-arrivals/new-arrival-3/NewArrival3';
import newArrival3Data from '../sections/10-new-arrivals/new-arrival-3/new-arrival-3.json';
import { NewArrival4 } from '../sections/10-new-arrivals/new-arrival-4/NewArrival4';
import newArrival4Data from '../sections/10-new-arrivals/new-arrival-4/new-arrival-4.json';
import { NewArrival5 } from '../sections/10-new-arrivals/new-arrival-5/NewArrival5';
import newArrival5Data from '../sections/10-new-arrivals/new-arrival-5/new-arrival-5.json';
import { NewArrival6 } from '../sections/10-new-arrivals/new-arrival-6/NewArrival6';
import newArrival6Data from '../sections/10-new-arrivals/new-arrival-6/new-arrival-6.json';
import { NewArrival7 } from '../sections/10-new-arrivals/new-arrival-7/NewArrival7';
import newArrival7Data from '../sections/10-new-arrivals/new-arrival-7/new-arrival-7.json';
import { NewArrival8 } from '../sections/10-new-arrivals/new-arrival-8/NewArrival8';
import newArrival8Data from '../sections/10-new-arrivals/new-arrival-8/new-arrival-8.json';
import { NewArrival9 } from '../sections/10-new-arrivals/new-arrival-9/NewArrival9';
import newArrival9Data from '../sections/10-new-arrivals/new-arrival-9/new-arrival-9.json';
import { NewArrival10 } from '../sections/10-new-arrivals/new-arrival-10/NewArrival10';
import newArrival10Data from '../sections/10-new-arrivals/new-arrival-10/new-arrival-10.json';
import { NewArrival11 } from '../sections/10-new-arrivals/new-arrival-11/NewArrival11';
import newArrival11Data from '../sections/10-new-arrivals/new-arrival-11/new-arrival-11.json';
import { NewArrival12 } from '../sections/10-new-arrivals/new-arrival-12/NewArrival12';
import newArrival12Data from '../sections/10-new-arrivals/new-arrival-12/new-arrival-12.json';
import { NewArrival13 } from '../sections/10-new-arrivals/new-arrival-13/NewArrival13';
import newArrival13Data from '../sections/10-new-arrivals/new-arrival-13/new-arrival-13.json';
import { NewArrival14 } from '../sections/10-new-arrivals/new-arrival-14/NewArrival14';
import newArrival14Data from '../sections/10-new-arrivals/new-arrival-14/new-arrival-14.json';
import { NewArrival15 } from '../sections/10-new-arrivals/new-arrival-15/NewArrival15';
import newArrival15Data from '../sections/10-new-arrivals/new-arrival-15/new-arrival-15.json';
import { NewArrival16 } from '../sections/10-new-arrivals/new-arrival-16/NewArrival16';
import newArrival16Data from '../sections/10-new-arrivals/new-arrival-16/new-arrival-16.json';
import { NewArrival17 } from '../sections/10-new-arrivals/new-arrival-17/NewArrival17';
import newArrival17Data from '../sections/10-new-arrivals/new-arrival-17/new-arrival-17.json';
import { NewArrival18 } from '../sections/10-new-arrivals/new-arrival-18/NewArrival18';
import newArrival18Data from '../sections/10-new-arrivals/new-arrival-18/new-arrival-18.json';
import { NewArrival19 } from '../sections/10-new-arrivals/new-arrival-19/NewArrival19';
import newArrival19Data from '../sections/10-new-arrivals/new-arrival-19/new-arrival-19.json';
import { NewArrival20 } from '../sections/10-new-arrivals/new-arrival-20/NewArrival20';
import newArrival20Data from '../sections/10-new-arrivals/new-arrival-20/new-arrival-20.json';
import { Trending1 } from '../sections/11-trending-products/trending-1/Trending1';
import trending1Data from '../sections/11-trending-products/trending-1/trending-1.json';
import { Trending2 } from '../sections/11-trending-products/trending-2/Trending2';
import trending2Data from '../sections/11-trending-products/trending-2/trending-2.json';
import { Trending3 } from '../sections/11-trending-products/trending-3/Trending3';
import trending3Data from '../sections/11-trending-products/trending-3/trending-3.json';
import { Trending4 } from '../sections/11-trending-products/trending-4/Trending4';
import trending4Data from '../sections/11-trending-products/trending-4/trending-4.json';
import { Trending5 } from '../sections/11-trending-products/trending-5/Trending5';
import trending5Data from '../sections/11-trending-products/trending-5/trending-5.json';
import { Trending6 } from '../sections/11-trending-products/trending-6/Trending6';
import trending6Data from '../sections/11-trending-products/trending-6/trending-6.json';
import { Trending7 } from '../sections/11-trending-products/trending-7/Trending7';
import trending7Data from '../sections/11-trending-products/trending-7/trending-7.json';
import { Trending8 } from '../sections/11-trending-products/trending-8/Trending8';
import trending8Data from '../sections/11-trending-products/trending-8/trending-8.json';
import { Trending9 } from '../sections/11-trending-products/trending-9/Trending9';
import trending9Data from '../sections/11-trending-products/trending-9/trending-9.json';
import { Trending10 } from '../sections/11-trending-products/trending-10/Trending10';
import trending10Data from '../sections/11-trending-products/trending-10/trending-10.json';
import { Trending11 } from '../sections/11-trending-products/trending-11/Trending11';
import trending11Data from '../sections/11-trending-products/trending-11/trending-11.json';
import { Trending12 } from '../sections/11-trending-products/trending-12/Trending12';
import trending12Data from '../sections/11-trending-products/trending-12/trending-12.json';
import { Trending13 } from '../sections/11-trending-products/trending-13/Trending13';
import trending13Data from '../sections/11-trending-products/trending-13/trending-13.json';
import { Trending14 } from '../sections/11-trending-products/trending-14/Trending14';
import trending14Data from '../sections/11-trending-products/trending-14/trending-14.json';
import { Trending15 } from '../sections/11-trending-products/trending-15/Trending15';
import trending15Data from '../sections/11-trending-products/trending-15/trending-15.json';
import { Trending16 } from '../sections/11-trending-products/trending-16/Trending16';
import trending16Data from '../sections/11-trending-products/trending-16/trending-16.json';
import { Trending17 } from '../sections/11-trending-products/trending-17/Trending17';
import trending17Data from '../sections/11-trending-products/trending-17/trending-17.json';
import { Trending18 } from '../sections/11-trending-products/trending-18/Trending18';
import trending18Data from '../sections/11-trending-products/trending-18/trending-18.json';
import { Trending19 } from '../sections/11-trending-products/trending-19/Trending19';
import trending19Data from '../sections/11-trending-products/trending-19/trending-19.json';
import { Trending20 } from '../sections/11-trending-products/trending-20/Trending20';
import trending20Data from '../sections/11-trending-products/trending-20/trending-20.json';

import { Sale1 } from '../sections/12-sale-products/sale-1/Sale1';
import sale1Data from '../sections/12-sale-products/sale-1/sale-1.json';
import { Sale2 } from '../sections/12-sale-products/sale-2/Sale2';
import sale2Data from '../sections/12-sale-products/sale-2/sale-2.json';
import { Sale3 } from '../sections/12-sale-products/sale-3/Sale3';
import sale3Data from '../sections/12-sale-products/sale-3/sale-3.json';
import { Sale4 } from '../sections/12-sale-products/sale-4/Sale4';
import sale4Data from '../sections/12-sale-products/sale-4/sale-4.json';
import { Sale5 } from '../sections/12-sale-products/sale-5/Sale5';
import sale5Data from '../sections/12-sale-products/sale-5/sale-5.json';
import { Sale6 } from '../sections/12-sale-products/sale-6/Sale6';
import sale6Data from '../sections/12-sale-products/sale-6/sale-6.json';
import { Sale7 } from '../sections/12-sale-products/sale-7/Sale7';
import sale7Data from '../sections/12-sale-products/sale-7/sale-7.json';
import { Sale8 } from '../sections/12-sale-products/sale-8/Sale8';
import sale8Data from '../sections/12-sale-products/sale-8/sale-8.json';
import { Sale9 } from '../sections/12-sale-products/sale-9/Sale9';
import sale9Data from '../sections/12-sale-products/sale-9/sale-9.json';
import { Sale10 } from '../sections/12-sale-products/sale-10/Sale10';
import sale10Data from '../sections/12-sale-products/sale-10/sale-10.json';
import { Sale11 } from '../sections/12-sale-products/sale-11/Sale11';
import sale11Data from '../sections/12-sale-products/sale-11/sale-11.json';
import { Sale12 } from '../sections/12-sale-products/sale-12/Sale12';
import sale12Data from '../sections/12-sale-products/sale-12/sale-12.json';
import { Sale13 } from '../sections/12-sale-products/sale-13/Sale13';
import sale13Data from '../sections/12-sale-products/sale-13/sale-13.json';
import { Sale14 } from '../sections/12-sale-products/sale-14/Sale14';
import sale14Data from '../sections/12-sale-products/sale-14/sale-14.json';
import { Sale15 } from '../sections/12-sale-products/sale-15/Sale15';
import sale15Data from '../sections/12-sale-products/sale-15/sale-15.json';
import { Sale16 } from '../sections/12-sale-products/sale-16/Sale16';
import sale16Data from '../sections/12-sale-products/sale-16/sale-16.json';
import { Sale17 } from '../sections/12-sale-products/sale-17/Sale17';
import sale17Data from '../sections/12-sale-products/sale-17/sale-17.json';
import { Sale18 } from '../sections/12-sale-products/sale-18/Sale18';
import sale18Data from '../sections/12-sale-products/sale-18/sale-18.json';
import { Sale19 } from '../sections/12-sale-products/sale-19/Sale19';
import sale19Data from '../sections/12-sale-products/sale-19/sale-19.json';
import { Sale20 } from '../sections/12-sale-products/sale-20/Sale20';
import sale20Data from '../sections/12-sale-products/sale-20/sale-20.json';

import { FlashSale1 } from '../sections/13-flash-sale/flash-sale-1/FlashSale1';
import flashSale1Data from '../sections/13-flash-sale/flash-sale-1/flash-sale-1.json';
import { FlashSale2 } from '../sections/13-flash-sale/flash-sale-2/FlashSale2';
import flashSale2Data from '../sections/13-flash-sale/flash-sale-2/flash-sale-2.json';
import { FlashSale3 } from '../sections/13-flash-sale/flash-sale-3/FlashSale3';
import flashSale3Data from '../sections/13-flash-sale/flash-sale-3/flash-sale-3.json';
import { FlashSale4 } from '../sections/13-flash-sale/flash-sale-4/FlashSale4';
import flashSale4Data from '../sections/13-flash-sale/flash-sale-4/flash-sale-4.json';
import { FlashSale5 } from '../sections/13-flash-sale/flash-sale-5/FlashSale5';
import flashSale5Data from '../sections/13-flash-sale/flash-sale-5/flash-sale-5.json';
import { FlashSale6 } from '../sections/13-flash-sale/flash-sale-6/FlashSale6';
import flashSale6Data from '../sections/13-flash-sale/flash-sale-6/flash-sale-6.json';
import { FlashSale7 } from '../sections/13-flash-sale/flash-sale-7/FlashSale7';
import flashSale7Data from '../sections/13-flash-sale/flash-sale-7/flash-sale-7.json';
import { FlashSale8 } from '../sections/13-flash-sale/flash-sale-8/FlashSale8';
import flashSale8Data from '../sections/13-flash-sale/flash-sale-8/flash-sale-8.json';
import { FlashSale9 } from '../sections/13-flash-sale/flash-sale-9/FlashSale9';
import flashSale9Data from '../sections/13-flash-sale/flash-sale-9/flash-sale-9.json';
import { FlashSale10 } from '../sections/13-flash-sale/flash-sale-10/FlashSale10';
import flashSale10Data from '../sections/13-flash-sale/flash-sale-10/flash-sale-10.json';
import { FlashSale11 } from '../sections/13-flash-sale/flash-sale-11/FlashSale11';
import flashSale11Data from '../sections/13-flash-sale/flash-sale-11/flash-sale-11.json';
import { FlashSale12 } from '../sections/13-flash-sale/flash-sale-12/FlashSale12';
import flashSale12Data from '../sections/13-flash-sale/flash-sale-12/flash-sale-12.json';
import { FlashSale13 } from '../sections/13-flash-sale/flash-sale-13/FlashSale13';
import flashSale13Data from '../sections/13-flash-sale/flash-sale-13/flash-sale-13.json';
import { FlashSale14 } from '../sections/13-flash-sale/flash-sale-14/FlashSale14';
import flashSale14Data from '../sections/13-flash-sale/flash-sale-14/flash-sale-14.json';
import { FlashSale15 } from '../sections/13-flash-sale/flash-sale-15/FlashSale15';
import flashSale15Data from '../sections/13-flash-sale/flash-sale-15/flash-sale-15.json';
import { FlashSale16 } from '../sections/13-flash-sale/flash-sale-16/FlashSale16';
import flashSale16Data from '../sections/13-flash-sale/flash-sale-16/flash-sale-16.json';
import { FlashSale17 } from '../sections/13-flash-sale/flash-sale-17/FlashSale17';
import flashSale17Data from '../sections/13-flash-sale/flash-sale-17/flash-sale-17.json';
import { FlashSale18 } from '../sections/13-flash-sale/flash-sale-18/FlashSale18';
import flashSale18Data from '../sections/13-flash-sale/flash-sale-18/flash-sale-18.json';
import { FlashSale19 } from '../sections/13-flash-sale/flash-sale-19/FlashSale19';
import flashSale19Data from '../sections/13-flash-sale/flash-sale-19/flash-sale-19.json';
import { FlashSale20 } from '../sections/13-flash-sale/flash-sale-20/FlashSale20';
import flashSale20Data from '../sections/13-flash-sale/flash-sale-20/flash-sale-20.json';
import ProductGallery1 from '../sections/product/01-product-gallery/product-gallery-1/ProductGallery1';
import productGallery1Data from '../sections/product/01-product-gallery/product-gallery-1/product-gallery-1.json';
import ProductGallery2 from '../sections/product/01-product-gallery/product-gallery-2/ProductGallery2';
import productGallery2Data from '../sections/product/01-product-gallery/product-gallery-2/product-gallery-2.json';
import ProductGallery3 from '../sections/product/01-product-gallery/product-gallery-3/ProductGallery3';
import productGallery3Data from '../sections/product/01-product-gallery/product-gallery-3/product-gallery-3.json';
import ProductGallery4 from '../sections/product/01-product-gallery/product-gallery-4/ProductGallery4';
import productGallery4Data from '../sections/product/01-product-gallery/product-gallery-4/product-gallery-4.json';
import ProductGallery5 from '../sections/product/01-product-gallery/product-gallery-5/ProductGallery5';
import productGallery5Data from '../sections/product/01-product-gallery/product-gallery-5/product-gallery-5.json';
import ProductGallery6 from '../sections/product/01-product-gallery/product-gallery-6/ProductGallery6';
import productGallery6Data from '../sections/product/01-product-gallery/product-gallery-6/product-gallery-6.json';
import ProductGallery7 from '../sections/product/01-product-gallery/product-gallery-7/ProductGallery7';
import productGallery7Data from '../sections/product/01-product-gallery/product-gallery-7/product-gallery-7.json';
import ProductGallery8 from '../sections/product/01-product-gallery/product-gallery-8/ProductGallery8';
import productGallery8Data from '../sections/product/01-product-gallery/product-gallery-8/product-gallery-8.json';
import ProductGallery9 from '../sections/product/01-product-gallery/product-gallery-9/ProductGallery9';
import productGallery9Data from '../sections/product/01-product-gallery/product-gallery-9/product-gallery-9.json';
import ProductGallery10 from '../sections/product/01-product-gallery/product-gallery-10/ProductGallery10';
import productGallery10Data from '../sections/product/01-product-gallery/product-gallery-10/product-gallery-10.json';
import ProductGallery11 from '../sections/product/01-product-gallery/product-gallery-11/ProductGallery11';
import productGallery11Data from '../sections/product/01-product-gallery/product-gallery-11/product-gallery-11.json';
import ProductGallery12 from '../sections/product/01-product-gallery/product-gallery-12/ProductGallery12';
import productGallery12Data from '../sections/product/01-product-gallery/product-gallery-12/product-gallery-12.json';
import ProductGallery13 from '../sections/product/01-product-gallery/product-gallery-13/ProductGallery13';
import productGallery13Data from '../sections/product/01-product-gallery/product-gallery-13/product-gallery-13.json';
import ProductGallery14 from '../sections/product/01-product-gallery/product-gallery-14/ProductGallery14';
import productGallery14Data from '../sections/product/01-product-gallery/product-gallery-14/product-gallery-14.json';
import ProductGallery15 from '../sections/product/01-product-gallery/product-gallery-15/ProductGallery15';
import productGallery15Data from '../sections/product/01-product-gallery/product-gallery-15/product-gallery-15.json';
import ProductGallery16 from '../sections/product/01-product-gallery/product-gallery-16/ProductGallery16';
import productGallery16Data from '../sections/product/01-product-gallery/product-gallery-16/product-gallery-16.json';
import ProductGallery17 from '../sections/product/01-product-gallery/product-gallery-17/ProductGallery17';
import productGallery17Data from '../sections/product/01-product-gallery/product-gallery-17/product-gallery-17.json';
import ProductGallery18 from '../sections/product/01-product-gallery/product-gallery-18/ProductGallery18';
import productGallery18Data from '../sections/product/01-product-gallery/product-gallery-18/product-gallery-18.json';
import ProductGallery19 from '../sections/product/01-product-gallery/product-gallery-19/ProductGallery19';
import productGallery19Data from '../sections/product/01-product-gallery/product-gallery-19/product-gallery-19.json';
import ProductGallery20 from '../sections/product/01-product-gallery/product-gallery-20/ProductGallery20';
import productGallery20Data from '../sections/product/01-product-gallery/product-gallery-20/product-gallery-20.json';

interface PreviewProps {
  sectionId: string;
  onBack: () => void;
}

export function SectionPreviewLayout({ sectionId, onBack }: PreviewProps) {
  const [viewport, setViewport] = React.useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  const isIframeMode = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('iframeMode') === 'true';

  // Derive mock data based on the new ID structure (banner-1, banner-2...)
  const sectionData = 
    sectionId === 'featured-product-1' ? featuredProductTab1Data :
    sectionId === 'featured-product-2' ? featuredProductTab2Data :
    sectionId === 'featured-product-3' ? featuredProductTab3Data :
    sectionId === 'featured-product-4' ? featuredProductTab4Data :
    sectionId === 'featured-product-5' ? featuredProductTab5Data :
    sectionId === 'featured-product-6' ? featuredProductTab6Data :
    sectionId === 'featured-product-7' ? featuredProductTab7Data :
    sectionId === 'featured-product-8' ? featuredProductTab8Data :
    sectionId === 'featured-product-9' ? featuredProductTab9Data :
    sectionId === 'featured-product-10' ? featuredProductTab10Data :
    sectionId === 'featured-product-11' ? featuredProductTab11Data :
    sectionId === 'featured-product-12' ? featuredProductTab12Data :
    sectionId === 'featured-product-13' ? featuredProductTab13Data :
    sectionId === 'featured-product-14' ? featuredProductTab14Data :
    sectionId === 'featured-product-15' ? featuredProductTab15Data :
    sectionId === 'featured-product-16' ? featuredProductTab16Data :
    sectionId === 'featured-product-17' ? featuredProductTab17Data :
    sectionId === 'featured-product-18' ? featuredProductTab18Data :
    sectionId === 'featured-product-19' ? featuredProductTab19Data :
    sectionId === 'featured-product-20' ? featuredProductTab20Data :
    sectionId === 'newsletter-20' ? newsletter20Data :
    sectionId === 'newsletter-19' ? newsletter19Data :
    sectionId === 'newsletter-18' ? newsletter18Data :
    sectionId === 'newsletter-17' ? newsletter17Data :
    sectionId === 'newsletter-16' ? newsletter16Data :
    sectionId === 'newsletter-15' ? newsletter15Data :
    sectionId === 'newsletter-14' ? newsletter14Data :
    sectionId === 'newsletter-13' ? newsletter13Data :
    sectionId === 'newsletter-12' ? newsletter12Data :
    sectionId === 'newsletter-11' ? newsletter11Data :
    sectionId === 'newsletter-10' ? newsletter10Data :
    sectionId === 'newsletter-9' ? newsletter9Data :
    sectionId === 'newsletter-8' ? newsletter8Data :
    sectionId === 'newsletter-7' ? newsletter7Data :
    sectionId === 'newsletter-6' ? newsletter6Data :
    sectionId === 'newsletter-5' ? newsletter5Data :
    sectionId === 'newsletter-4' ? newsletter4Data :
    sectionId === 'newsletter-3' ? newsletter3Data :
    sectionId === 'newsletter-2' ? newsletter2Data :
    sectionId === 'newsletter-1' ? newsletter1Data :
    sectionId === 'faq-20' ? faq20Data :
    sectionId === 'faq-19' ? faq19Data :
    sectionId === 'faq-18' ? faq18Data :
    sectionId === 'faq-17' ? faq17Data :
    sectionId === 'faq-16' ? faq16Data :
    sectionId === 'faq-15' ? faq15Data :
    sectionId === 'faq-14' ? faq14Data :
    sectionId === 'faq-13' ? faq13Data :
    sectionId === 'faq-12' ? faq12Data :
    sectionId === 'faq-11' ? faq11Data :
    sectionId === 'faq-10' ? faq10Data :
    sectionId === 'faq-9' ? faq9Data :
    sectionId === 'faq-8' ? faq8Data :
    sectionId === 'faq-7' ? faq7Data :
    sectionId === 'faq-6' ? faq6Data :
    sectionId === 'faq-5' ? faq5Data :
    sectionId === 'faq-4' ? faq4Data :
    sectionId === 'faq-3' ? faq3Data :
    sectionId === 'faq-2' ? faq2Data :
    sectionId === 'faq-1' ? faq1Data :
    sectionId === 'buying-guide-20' ? buyingGuide20Data :
    sectionId === 'buying-guide-19' ? buyingGuide19Data :
    sectionId === 'buying-guide-18' ? buyingGuide18Data :
    sectionId === 'buying-guide-17' ? buyingGuide17Data :
    sectionId === 'buying-guide-16' ? buyingGuide16Data :
    sectionId === 'buying-guide-15' ? buyingGuide15Data :
    sectionId === 'buying-guide-14' ? buyingGuide14Data :
    sectionId === 'buying-guide-13' ? buyingGuide13Data :
    sectionId === 'buying-guide-12' ? buyingGuide12Data :
    sectionId === 'buying-guide-11' ? buyingGuide11Data :
    sectionId === 'buying-guide-10' ? buyingGuide10Data :
    sectionId === 'buying-guide-9' ? buyingGuide9Data :
    sectionId === 'buying-guide-8' ? buyingGuide8Data :
    sectionId === 'buying-guide-7' ? buyingGuide7Data :
    sectionId === 'buying-guide-6' ? buyingGuide6Data :
    sectionId === 'buying-guide-5' ? buyingGuide5Data :
    sectionId === 'buying-guide-4' ? buyingGuide4Data :
    sectionId === 'buying-guide-3' ? buyingGuide3Data :
    sectionId === 'buying-guide-2' ? buyingGuide2Data :
    sectionId === 'buying-guide-1' ? buyingGuide1Data :
    sectionId === 'blog-highlight-20' ? blogHighlight20Data :
    sectionId === 'blog-highlight-19' ? blogHighlight19Data :
    sectionId === 'blog-highlight-18' ? blogHighlight18Data :
    sectionId === 'blog-highlight-17' ? blogHighlight17Data :
    sectionId === 'blog-highlight-16' ? blogHighlight16Data :
    sectionId === 'blog-highlight-15' ? blogHighlight15Data :
    sectionId === 'blog-highlight-14' ? blogHighlight14Data :
    sectionId === 'blog-highlight-13' ? blogHighlight13Data :
    sectionId === 'blog-highlight-12' ? blogHighlight12Data :
    sectionId === 'blog-highlight-11' ? blogHighlight11Data :
    sectionId === 'blog-highlight-10' ? blogHighlight10Data :
    sectionId === 'blog-highlight-9' ? blogHighlight9Data :
    sectionId === 'blog-highlight-8' ? blogHighlight8Data :
    sectionId === 'blog-highlight-7' ? blogHighlight7Data :
    sectionId === 'blog-highlight-6' ? blogHighlight6Data :
    sectionId === 'blog-highlight-5' ? blogHighlight5Data :
    sectionId === 'blog-highlight-4' ? blogHighlight4Data :
    sectionId === 'blog-highlight-3' ? blogHighlight3Data :
    sectionId === 'blog-highlight-2' ? blogHighlight2Data :
    sectionId === 'blog-highlight-1' ? blogHighlight1Data :
    sectionId === 'video-showcase-20' ? videoShowcase20Data :
    sectionId === 'video-showcase-19' ? videoShowcase19Data :
    sectionId === 'video-showcase-18' ? videoShowcase18Data :
    sectionId === 'video-showcase-17' ? videoShowcase17Data :
    sectionId === 'video-showcase-16' ? videoShowcase16Data :
    sectionId === 'video-showcase-15' ? videoShowcase15Data :
    sectionId === 'video-showcase-14' ? videoShowcase14Data :
    sectionId === 'video-showcase-13' ? videoShowcase13Data :
    sectionId === 'video-showcase-12' ? videoShowcase12Data :
    sectionId === 'video-showcase-11' ? videoShowcase11Data :
    sectionId === 'video-showcase-10' ? videoShowcase10Data :
    sectionId === 'video-showcase-9' ? videoShowcase9Data :
    sectionId === 'video-showcase-8' ? videoShowcase8Data :
    sectionId === 'video-showcase-7' ? videoShowcase7Data :
    sectionId === 'video-showcase-6' ? videoShowcase6Data :
    sectionId === 'video-showcase-5' ? videoShowcase5Data :
    sectionId === 'video-showcase-4' ? videoShowcase4Data :
    sectionId === 'video-showcase-3' ? videoShowcase3Data :
    sectionId === 'video-showcase-2' ? videoShowcase2Data :
    sectionId === 'video-showcase-1' ? videoShowcase1Data :
    sectionId === 'review-20' ? customerReview20Data :
    sectionId === 'review-19' ? customerReview19Data :
    sectionId === 'review-18' ? customerReview18Data :
    sectionId === 'review-17' ? customerReview17Data :
    sectionId === 'review-16' ? customerReview16Data :
    sectionId === 'review-15' ? customerReview15Data :
    sectionId === 'review-14' ? customerReview14Data :
    sectionId === 'review-13' ? customerReview13Data :
    sectionId === 'review-12' ? customerReview12Data :
    sectionId === 'review-11' ? customerReview11Data :
    sectionId === 'review-10' ? customerReview10Data :
    sectionId === 'review-9' ? customerReview9Data :
    sectionId === 'review-8' ? customerReview8Data :
    sectionId === 'review-7' ? customerReview7Data :
    sectionId === 'review-6' ? customerReview6Data :
    sectionId === 'review-5' ? customerReview5Data :
    sectionId === 'review-4' ? customerReview4Data :
    sectionId === 'review-3' ? customerReview3Data :
    sectionId === 'review-2' ? customerReview2Data :
    sectionId === 'review-1' ? customerReview1Data :
    sectionId === 'testimonial-20' ? testimonial20Data :
    sectionId === 'testimonial-19' ? testimonial19Data :
    sectionId === 'testimonial-18' ? testimonial18Data :
    sectionId === 'testimonial-17' ? testimonial17Data :
    sectionId === 'testimonial-16' ? testimonial16Data :
    sectionId === 'testimonial-15' ? testimonial15Data :
    sectionId === 'testimonial-14' ? testimonial14Data :
    sectionId === 'testimonial-13' ? testimonial13Data :
    sectionId === 'testimonial-12' ? testimonial12Data :
    sectionId === 'testimonial-11' ? testimonial11Data :
    sectionId === 'testimonial-10' ? testimonial10Data :
    sectionId === 'testimonial-9' ? testimonial9Data :
    sectionId === 'testimonial-8' ? testimonial8Data :
    sectionId === 'testimonial-7' ? testimonial7Data :
    sectionId === 'testimonial-6' ? testimonial6Data :
    sectionId === 'testimonial-5' ? testimonial5Data :
    sectionId === 'testimonial-4' ? testimonial4Data :
    sectionId === 'testimonial-3' ? testimonial3Data :
    sectionId === 'testimonial-2' ? testimonial2Data :
    sectionId === 'testimonial-1' ? testimonial1Data :
    sectionId === 'brand-showcase-20' ? brandShowcase20Data :
    sectionId === 'brand-showcase-19' ? brandShowcase19Data :
    sectionId === 'brand-showcase-18' ? brandShowcase18Data :
    sectionId === 'brand-showcase-17' ? brandShowcase17Data :
    sectionId === 'brand-showcase-16' ? brandShowcase16Data :
    sectionId === 'brand-showcase-15' ? brandShowcase15Data :
    sectionId === 'brand-showcase-14' ? brandShowcase14Data :
    sectionId === 'brand-showcase-13' ? brandShowcase13Data :
    sectionId === 'brand-showcase-12' ? brandShowcase12Data :
    sectionId === 'brand-showcase-11' ? brandShowcase11Data :
    sectionId === 'brand-showcase-10' ? brandShowcase10Data :
    sectionId === 'brand-showcase-9' ? brandShowcase9Data :
    sectionId === 'brand-showcase-8' ? brandShowcase8Data :
    sectionId === 'brand-showcase-7' ? brandShowcase7Data :
    sectionId === 'brand-showcase-6' ? brandShowcase6Data :
    sectionId === 'brand-showcase-5' ? brandShowcase5Data :
    sectionId === 'brand-showcase-4' ? brandShowcase4Data :
    sectionId === 'brand-showcase-3' ? brandShowcase3Data :
    sectionId === 'brand-showcase-2' ? brandShowcase2Data :
    sectionId === 'brand-showcase-1' ? brandShowcase1Data :
    sectionId === 'why-us-20' ? whyChooseUs20Data :
    sectionId === 'why-us-19' ? whyChooseUs19Data :
    sectionId === 'why-us-18' ? whyChooseUs18Data :
    sectionId === 'why-us-17' ? whyChooseUs17Data :
    sectionId === 'why-us-16' ? whyChooseUs16Data :
    sectionId === 'why-us-15' ? whyChooseUs15Data :
    sectionId === 'why-us-14' ? whyChooseUs14Data :
    sectionId === 'why-us-13' ? whyChooseUs13Data :
    sectionId === 'why-us-12' ? whyChooseUs12Data :
    sectionId === 'why-us-11' ? whyChooseUs11Data :
    sectionId === 'why-us-10' ? whyChooseUs10Data :
    sectionId === 'why-us-9' ? whyChooseUs9Data :
    sectionId === 'why-us-8' ? whyChooseUs8Data :
    sectionId === 'why-us-7' ? whyChooseUs7Data :
    sectionId === 'why-us-6' ? whyChooseUs6Data :
    sectionId === 'why-us-5' ? whyChooseUs5Data :
    sectionId === 'why-us-4' ? whyChooseUs4Data :
    sectionId === 'why-us-3' ? whyChooseUs3Data :
    sectionId === 'why-us-2' ? whyChooseUs2Data :
    sectionId === 'why-us-1' ? whyChooseUs1Data :
    sectionId === 'promo-card-20' ? promoCard20Data :
    sectionId === 'promo-card-19' ? promoCard19Data :
    sectionId === 'promo-card-18' ? promoCard18Data :
    sectionId === 'promo-card-17' ? promoCard17Data :
    sectionId === 'promo-card-16' ? promoCard16Data :
    sectionId === 'promo-card-15' ? promoCard15Data :
    sectionId === 'promo-card-14' ? promoCard14Data :
    sectionId === 'promo-card-13' ? promoCard13Data :
    sectionId === 'promo-card-12' ? promoCard12Data :
    sectionId === 'promo-card-11' ? promoCard11Data :
    sectionId === 'promo-card-10' ? promoCard10Data :
    sectionId === 'promo-card-9' ? promoCard9Data :
    sectionId === 'promo-card-8' ? promoCard8Data :
    sectionId === 'promo-card-7' ? promoCard7Data :
    sectionId === 'promo-card-6' ? promoCard6Data :
    sectionId === 'promo-card-5' ? promoCard5Data :
    sectionId === 'promo-card-4' ? promoCard4Data :
    sectionId === 'promo-card-3' ? promoCard3Data :
    sectionId === 'promo-card-2' ? promoCard2Data :
    sectionId === 'promo-card-1' ? promoCard1Data :
    sectionId === 'image-text-20' ? imageText20Data :
    sectionId === 'split-image-20' ? splitImage20Data :
    sectionId === 'split-image-19' ? splitImage19Data :
    sectionId === 'split-image-18' ? splitImage18Data :
    sectionId === 'split-image-17' ? splitImage17Data :
    sectionId === 'split-image-16' ? splitImage16Data :
    sectionId === 'split-image-15' ? splitImage15Data :
    sectionId === 'split-image-14' ? splitImage14Data :
    sectionId === 'split-image-13' ? splitImage13Data :
    sectionId === 'split-image-12' ? splitImage12Data :
    sectionId === 'split-image-11' ? splitImage11Data :
    sectionId === 'split-image-10' ? splitImage10Data :
    sectionId === 'split-image-9' ? splitImage9Data :
    sectionId === 'split-image-8' ? splitImage8Data :
    sectionId === 'split-image-7' ? splitImage7Data :
    sectionId === 'split-image-6' ? splitImage6Data :
    sectionId === 'split-image-5' ? splitImage5Data :
    sectionId === 'split-image-4' ? splitImage4Data :
    sectionId === 'split-image-3' ? splitImage3Data :
    sectionId === 'split-image-2' ? splitImage2Data :
    sectionId === 'split-image-1' ? splitImage1Data :
    sectionId === 'image-text-19' ? imageText19Data :
    sectionId === 'image-text-18' ? imageText18Data :
    sectionId === 'image-text-17' ? imageText17Data :
    sectionId === 'image-text-16' ? imageText16Data :
    sectionId === 'image-text-15' ? imageText15Data :
    sectionId === 'image-text-14' ? imageText14Data :
    sectionId === 'image-text-13' ? imageText13Data :
    sectionId === 'image-text-12' ? imageText12Data :
    sectionId === 'image-text-11' ? imageText11Data :
    sectionId === 'image-text-10' ? imageText10Data :
    sectionId === 'image-text-9' ? imageText9Data :
    sectionId === 'image-text-8' ? imageText8Data :
    sectionId === 'image-text-7' ? imageText7Data :
    sectionId === 'image-text-6' ? imageText6Data :
    sectionId === 'image-text-5' ? imageText5Data :
    sectionId === 'image-text-4' ? imageText4Data :
    sectionId === 'image-text-3' ? imageText3Data :
    sectionId === 'image-text-2' ? imageText2Data :
    sectionId === 'image-text-1' ? imageText1Data :
    sectionId === 'category-grid-20' ? categoryGrid20Data :
    sectionId === 'category-grid-19' ? categoryGrid19Data :
    sectionId === 'category-grid-18' ? categoryGrid18Data :
    sectionId === 'category-grid-17' ? categoryGrid17Data :
    sectionId === 'category-grid-16' ? categoryGrid16Data :
    sectionId === 'category-grid-15' ? categoryGrid15Data :
    sectionId === 'category-grid-14' ? categoryGrid14Data :
    sectionId === 'category-grid-13' ? categoryGrid13Data :
    sectionId === 'category-grid-12' ? categoryGrid12Data :
    sectionId === 'category-grid-11' ? categoryGrid11Data :
    sectionId === 'category-grid-10' ? categoryGrid10Data :
    sectionId === 'category-grid-9' ? categoryGrid9Data :
    sectionId === 'category-grid-8' ? categoryGrid8Data :
    sectionId === 'category-grid-7' ? categoryGrid7Data :
    sectionId === 'category-grid-6' ? categoryGrid6Data :
    sectionId === 'category-grid-5' ? categoryGrid5Data :
    sectionId === 'category-grid-4' ? categoryGrid4Data :
    sectionId === 'category-grid-3' ? categoryGrid3Data :
    sectionId === 'category-grid-2' ? categoryGrid2Data :
    sectionId === 'category-grid-1' ? categoryGrid1Data :
    sectionId === 'featured-category-20' ? featuredCategory20Data :
    sectionId === 'featured-product-1' ? featuredProductTab1Data :
    sectionId === 'featured-product-2' ? featuredProductTab2Data :
    sectionId === 'featured-product-3' ? featuredProductTab3Data :
    sectionId === 'featured-product-4' ? featuredProductTab4Data :
    sectionId === 'featured-product-5' ? featuredProductTab5Data :
    sectionId === 'featured-category-19' ? featuredCategory19Data :
    sectionId === 'featured-category-18' ? featuredCategory18Data :
    sectionId === 'featured-category-17' ? featuredCategory17Data :
    sectionId === 'featured-category-16' ? featuredCategory16Data :
    sectionId === 'featured-category-15' ? featuredCategory15Data :
    sectionId === 'featured-category-14' ? featuredCategory14Data :
    sectionId === 'featured-category-13' ? featuredCategory13Data :
    sectionId === 'featured-category-12' ? featuredCategory12Data :
    sectionId === 'featured-category-11' ? featuredCategory11Data :
    sectionId === 'featured-category-10' ? featuredCategory10Data :
    sectionId === 'featured-category-9' ? featuredCategory9Data :
    sectionId === 'featured-category-8' ? featuredCategory8Data :
    sectionId === 'featured-category-7' ? featuredCategory7Data :
    sectionId === 'featured-category-6' ? featuredCategory6Data :
    sectionId === 'featured-category-5' ? featuredCategory5Data :
    sectionId === 'featured-category-4' ? featuredCategory4Data :
    sectionId === 'featured-category-3' ? featuredCategory3Data :
    sectionId === 'featured-category-2' ? featuredCategory2Data :
    sectionId === 'featured-category-1' ? featuredCategory1Data :
    sectionId === 'promotional-banner-20' ? promotionalBanner20Data :
    sectionId === 'promotional-banner-19' ? promotionalBanner19Data :
    sectionId === 'promotional-banner-18' ? promotionalBanner18Data :
    sectionId === 'promotional-banner-17' ? promotionalBanner17Data :
    sectionId === 'promotional-banner-16' ? promotionalBanner16Data :
    sectionId === 'promotional-banner-14' ? promotionalBanner14Data :
    sectionId === 'promotional-banner-13' ? promotionalBanner13Data :
    sectionId === 'promotional-banner-12' ? promotionalBanner12Data :
    sectionId === 'promotional-banner-11' ? promotionalBanner11Data :
    sectionId === 'promotional-banner-10' ? promotionalBanner10Data :
    sectionId === 'promotional-banner-8' ? promotionalBanner8Data :
    sectionId === 'promotional-banner-7' ? promotionalBanner7Data :
    sectionId === 'promotional-banner-6' ? promotionalBanner6Data :
    sectionId === 'promotional-banner-5' ? promotionalBanner5Data :
    sectionId === 'promotional-banner-4' ? promotionalBanner4Data :
    sectionId === 'promotional-banner-3' ? promotionalBanner3Data :
    sectionId === 'promotional-banner-2' ? promotionalBanner2Data :
    sectionId === 'promotional-banner-1' ? promotionalBanner1Data :
    sectionId === 'hero-carousel-20' ? heroCarousel20Data :
    sectionId === 'hero-carousel-19' ? heroCarousel19Data :
    sectionId === 'hero-carousel-18' ? heroCarousel18Data :
    sectionId === 'hero-carousel-17' ? heroCarousel17Data :
    sectionId === 'hero-carousel-16' ? heroCarousel16Data :
    sectionId === 'hero-carousel-15' ? heroCarousel15Data :
    sectionId === 'hero-carousel-14' ? heroCarousel14Data :
    sectionId === 'hero-carousel-13' ? heroCarousel13Data :
    sectionId === 'hero-carousel-12' ? heroCarousel12Data :
    sectionId === 'hero-carousel-11' ? heroCarousel11Data :
    sectionId === 'hero-carousel-10' ? heroCarousel10Data :
    sectionId === 'hero-carousel-9' ? heroCarousel9Data :
    sectionId === 'hero-carousel-8' ? heroCarousel8Data :
    sectionId === 'hero-carousel-7' ? heroCarousel7Data :
    sectionId === 'hero-carousel-6' ? heroCarousel6Data :
    sectionId === 'hero-carousel-5' ? heroCarousel5Data :
    sectionId === 'hero-carousel-4' ? heroCarousel4Data :
    sectionId === 'hero-carousel-3' ? heroCarousel3Data :
    sectionId === 'hero-carousel-2' ? heroCarousel2Data :
    sectionId === 'hero-carousel-1' ? heroCarousel1Data :
    sectionId === 'banner-20' ? banner20Data : 
    sectionId === 'banner-19' ? banner19Data : 
    sectionId === 'banner-18' ? banner18Data : 
    sectionId === 'banner-17' ? banner17Data : 
    sectionId === 'banner-16' ? banner16Data : 
    sectionId === 'banner-15' ? banner15Data : 
    sectionId === 'banner-14' ? banner14Data : 
    sectionId === 'banner-13' ? banner13Data : 
    sectionId === 'banner-12' ? banner12Data : 
    sectionId === 'banner-11' ? banner11Data :
    sectionId === 'banner-10' ? banner10Data : 
    sectionId === 'banner-9' ? banner9Data : 
    sectionId === 'banner-8' ? banner8Data : 
    sectionId === 'banner-7' ? banner7Data : 
    sectionId === 'banner-6' ? banner6Data : 
    sectionId === 'banner-5' ? banner5Data : 
    sectionId === 'banner-4' ? banner4Data : 
    sectionId === 'banner-3' ? banner3Data : 
    sectionId === 'banner-2' ? banner2Data : 
    sectionId === 'banner-1' ? banner1Data : 
    sectionId === 'flash-sale-20' ? flashSale20Data :
    sectionId === 'flash-sale-19' ? flashSale19Data :
    sectionId === 'flash-sale-18' ? flashSale18Data :
    sectionId === 'flash-sale-17' ? flashSale17Data :
    sectionId === 'flash-sale-16' ? flashSale16Data :
    sectionId === 'flash-sale-15' ? flashSale15Data :
    sectionId === 'flash-sale-14' ? flashSale14Data :
    sectionId === 'flash-sale-13' ? flashSale13Data :
    sectionId === 'flash-sale-12' ? flashSale12Data :
    sectionId === 'flash-sale-11' ? flashSale11Data :
    sectionId === 'flash-sale-10' ? flashSale10Data :
    sectionId === 'flash-sale-9' ? flashSale9Data :
    sectionId === 'flash-sale-8' ? flashSale8Data :
    sectionId === 'flash-sale-7' ? flashSale7Data :
    sectionId === 'flash-sale-6' ? flashSale6Data :
    sectionId === 'flash-sale-5' ? flashSale5Data :
    sectionId === 'flash-sale-4' ? flashSale4Data :
    sectionId === 'flash-sale-3' ? flashSale3Data :
    sectionId === 'flash-sale-2' ? flashSale2Data :
    sectionId === 'flash-sale-1' ? flashSale1Data :
    sectionId === 'sale-20' ? sale20Data :
    sectionId === 'sale-19' ? sale19Data :
    sectionId === 'sale-18' ? sale18Data :
    sectionId === 'sale-17' ? sale17Data :
    sectionId === 'sale-16' ? sale16Data :
    sectionId === 'sale-15' ? sale15Data :
    sectionId === 'sale-14' ? sale14Data :
    sectionId === 'sale-13' ? sale13Data :
    sectionId === 'sale-12' ? sale12Data :
    sectionId === 'sale-11' ? sale11Data :
    sectionId === 'sale-10' ? sale10Data :
    sectionId === 'sale-9' ? sale9Data :
    sectionId === 'sale-8' ? sale8Data :
    sectionId === 'sale-7' ? sale7Data :
    sectionId === 'sale-6' ? sale6Data :
    sectionId === 'sale-5' ? sale5Data :
    sectionId === 'sale-4' ? sale4Data :
    sectionId === 'sale-3' ? sale3Data :
    sectionId === 'sale-2' ? sale2Data :
    sectionId === 'sale-1' ? sale1Data :
    sectionId === 'trending-20' ? trending20Data :
    sectionId === 'trending-19' ? trending19Data :
    sectionId === 'trending-18' ? trending18Data :
    sectionId === 'trending-17' ? trending17Data :
    sectionId === 'trending-16' ? trending16Data :
    sectionId === 'trending-15' ? trending15Data :
    sectionId === 'trending-14' ? trending14Data :
    sectionId === 'trending-13' ? trending13Data :
    sectionId === 'trending-12' ? trending12Data :
    sectionId === 'trending-11' ? trending11Data :
    sectionId === 'trending-10' ? trending10Data :
    sectionId === 'trending-9' ? trending9Data :
    sectionId === 'trending-8' ? trending8Data :
    sectionId === 'trending-7' ? trending7Data :
    sectionId === 'trending-6' ? trending6Data :
    sectionId === 'trending-5' ? trending5Data :
    sectionId === 'trending-4' ? trending4Data :
    sectionId === 'trending-3' ? trending3Data :
    sectionId === 'trending-2' ? trending2Data :
    sectionId === 'trending-1' ? trending1Data :
    sectionId === 'new-arrival-20' ? newArrival20Data :
    sectionId === 'new-arrival-19' ? newArrival19Data :
    sectionId === 'new-arrival-18' ? newArrival18Data :
    sectionId === 'new-arrival-17' ? newArrival17Data :
    sectionId === 'new-arrival-16' ? newArrival16Data :
    sectionId === 'new-arrival-15' ? newArrival15Data :
    sectionId === 'new-arrival-14' ? newArrival14Data :
    sectionId === 'new-arrival-13' ? newArrival13Data :
    sectionId === 'new-arrival-12' ? newArrival12Data :
    sectionId === 'new-arrival-11' ? newArrival11Data :
    sectionId === 'new-arrival-10' ? newArrival10Data :
    sectionId === 'new-arrival-9' ? newArrival9Data :
    sectionId === 'new-arrival-8' ? newArrival8Data :
    sectionId === 'new-arrival-7' ? newArrival7Data :
    sectionId === 'new-arrival-6' ? newArrival6Data :
    sectionId === 'new-arrival-5' ? newArrival5Data :
    sectionId === 'new-arrival-4' ? newArrival4Data :
    sectionId === 'new-arrival-3' ? newArrival3Data :
    sectionId === 'new-arrival-2' ? newArrival2Data :
    sectionId === 'new-arrival-1' ? newArrival1Data :
    sectionId === 'best-seller-20' ? bestSeller20Data :
    sectionId === 'best-seller-19' ? bestSeller19Data :
    sectionId === 'best-seller-18' ? bestSeller18Data :
    sectionId === 'best-seller-17' ? bestSeller17Data :
    sectionId === 'best-seller-16' ? bestSeller16Data :
    sectionId === 'best-seller-15' ? bestSeller15Data :
    sectionId === 'best-seller-14' ? bestSeller14Data :
    sectionId === 'best-seller-13' ? bestSeller13Data :
    sectionId === 'best-seller-12' ? bestSeller12Data :
    sectionId === 'best-seller-11' ? bestSeller11Data :
    sectionId === 'best-seller-10' ? bestSeller10Data :
    sectionId === 'best-seller-9' ? bestSeller9Data :
    sectionId === 'best-seller-8' ? bestSeller8Data :
    sectionId === 'best-seller-7' ? bestSeller7Data :
    sectionId === 'best-seller-6' ? bestSeller6Data :
    sectionId === 'best-seller-5' ? bestSeller5Data :
    sectionId === 'best-seller-4' ? bestSeller4Data :
    sectionId === 'best-seller-3' ? bestSeller3Data :
    sectionId === 'best-seller-2' ? bestSeller2Data :
    sectionId === 'best-seller-1' ? bestSeller1Data :
    sectionId === 'product-carousel-20' ? productCarousel20Data :
    sectionId === 'product-carousel-19' ? productCarousel19Data :
    sectionId === 'product-carousel-18' ? productCarousel18Data :
    sectionId === 'product-carousel-17' ? productCarousel17Data :
    sectionId === 'product-carousel-16' ? productCarousel16Data :
    sectionId === 'product-carousel-15' ? productCarousel15Data :
    sectionId === 'product-carousel-14' ? productCarousel14Data :
    sectionId === 'product-carousel-13' ? productCarousel13Data :
    sectionId === 'product-carousel-12' ? productCarousel12Data :
    sectionId === 'product-carousel-11' ? productCarousel11Data :
    sectionId === 'product-carousel-10' ? productCarousel10Data :
    sectionId === 'product-carousel-9' ? productCarousel9Data :
    sectionId === 'product-carousel-8' ? productCarousel8Data :
    sectionId === 'product-carousel-7' ? productCarousel7Data :
    sectionId === 'product-carousel-6' ? productCarousel6Data :
    sectionId === 'product-carousel-5' ? productCarousel5Data :
    sectionId === 'product-carousel-4' ? productCarousel4Data :
    sectionId === 'product-carousel-3' ? productCarousel3Data :
    sectionId === 'product-carousel-2' ? productCarousel2Data :
    sectionId === 'product-carousel-1' ? productCarousel1Data :
    sectionId === 'product-grid-20' ? productGrid20Data :
    sectionId === 'product-grid-19' ? productGrid19Data :
    sectionId === 'product-grid-18' ? productGrid18Data :
    sectionId === 'product-grid-17' ? productGrid17Data :
    sectionId === 'product-grid-16' ? productGrid16Data :
    sectionId === 'product-grid-15' ? productGrid15Data :
    sectionId === 'product-grid-14' ? productGrid14Data :
    sectionId === 'product-grid-13' ? productGrid13Data :
    sectionId === 'product-grid-12' ? productGrid12Data :
    sectionId === 'product-grid-11' ? productGrid11Data :
    sectionId === 'product-grid-10' ? productGrid10Data :
    sectionId === 'product-grid-9' ? productGrid9Data :
    sectionId === 'product-grid-8' ? productGrid8Data :
    sectionId === 'product-grid-7' ? productGrid7Data :
    sectionId === 'product-grid-6' ? productGrid6Data :
    sectionId === 'product-grid-5' ? productGrid5Data :
    sectionId === 'product-grid-4' ? productGrid4Data :
    sectionId === 'product-grid-3' ? productGrid3Data :
    sectionId === 'product-grid-2' ? productGrid2Data :
    sectionId === 'product-grid-1' ? productGrid1Data :
    sectionId === 'featured-collection-20' ? featuredCollection20Data :
    sectionId === 'featured-collection-19' ? featuredCollection19Data :
    sectionId === 'featured-collection-18' ? featuredCollection18Data :
    sectionId === 'featured-collection-17' ? featuredCollection17Data :
    sectionId === 'featured-collection-16' ? featuredCollection16Data :
    sectionId === 'featured-collection-15' ? featuredCollection15Data :
    sectionId === 'featured-collection-14' ? featuredCollection14Data :
    sectionId === 'featured-collection-13' ? featuredCollection13Data :
    sectionId === 'featured-collection-12' ? featuredCollection12Data :
    sectionId === 'featured-collection-11' ? featuredCollection11Data :
    sectionId === 'featured-collection-10' ? featuredCollection10Data :
    sectionId === 'featured-collection-9' ? featuredCollection9Data :
    sectionId === 'featured-collection-8' ? featuredCollection8Data :
    sectionId === 'featured-collection-7' ? featuredCollection7Data :
    sectionId === 'featured-collection-6' ? featuredCollection6Data :
    sectionId === 'featured-collection-5' ? featuredCollection5Data :
    sectionId === 'featured-collection-4' ? featuredCollection4Data :
    sectionId === 'featured-collection-3' ? featuredCollection3Data :
    sectionId === 'featured-collection-2' ? featuredCollection2Data :
    sectionId === 'featured-collection-1' ? featuredCollection1Data :
    { id: sectionId, type: 'hero-banner', settings: { title: `Coming Soon: ${sectionId}` }, styles: {} }; 

  const renderComponent = () => (
    <>
      {/* Render actual component */}
      {sectionId === 'category-grid-20' ? (
        <CategoryGrid20 section={sectionData as any} />
      ) : sectionId === 'category-grid-19' ? (
              <CategoryGrid19 section={sectionData as any} />
            ) : sectionId === 'category-grid-18' ? (
              <CategoryGrid18 section={sectionData as any} />
            ) : sectionId === 'category-grid-17' ? (
              <CategoryGrid17 section={sectionData as any} />
            ) : sectionId === 'category-grid-16' ? (
              <CategoryGrid16 section={sectionData as any} />
            ) : sectionId === 'category-grid-15' ? (
              <CategoryGrid15 section={sectionData as any} />
            ) : sectionId === 'category-grid-14' ? (
              <CategoryGrid14 section={sectionData as any} />
            ) : sectionId === 'category-grid-13' ? (
              <CategoryGrid13 section={sectionData as any} />
            ) : sectionId === 'category-grid-12' ? (
              <CategoryGrid12 section={sectionData as any} />
            ) : sectionId === 'category-grid-11' ? (
              <CategoryGrid11 section={sectionData as any} />
            ) : sectionId === 'category-grid-10' ? (
              <CategoryGrid10 section={sectionData as any} />
            ) : sectionId === 'category-grid-9' ? (
              <CategoryGrid9 section={sectionData as any} />
            ) : sectionId === 'category-grid-8' ? (
              <CategoryGrid8 section={sectionData as any} />
            ) : sectionId === 'category-grid-7' ? (
              <CategoryGrid7 section={sectionData as any} />
            ) : sectionId === 'category-grid-6' ? (
              <CategoryGrid6 section={sectionData as any} />
            ) : sectionId === 'category-grid-5' ? (
              <CategoryGrid5 section={sectionData as any} />
            ) : sectionId === 'category-grid-4' ? (
              <CategoryGrid4 section={sectionData as any} />
            ) : sectionId === 'category-grid-3' ? (
              <CategoryGrid3 section={sectionData as any} />
            ) : sectionId === 'category-grid-2' ? (
              <CategoryGrid2 section={sectionData as any} />
            ) : sectionId === 'category-grid-1' ? (
              <CategoryGrid1 section={sectionData as any} />
            ) : sectionId === 'featured-category-20' ? (
              <FeaturedCategory20 section={sectionData as any} />
            ) : sectionId === 'featured-category-19' ? (
              <FeaturedCategory19 section={sectionData as any} />
            ) : sectionId === 'featured-category-18' ? (
              <FeaturedCategory18 section={sectionData as any} />
            ) : sectionId === 'featured-category-17' ? (
              <FeaturedCategory17 section={sectionData as any} />
            ) : sectionId === 'featured-category-16' ? (
              <FeaturedCategory16 section={sectionData as any} />
            ) : sectionId === 'featured-category-15' ? (
              <FeaturedCategory15 section={sectionData as any} />
            ) : sectionId === 'featured-category-14' ? (
              <FeaturedCategory14 section={sectionData as any} />
            ) : sectionId === 'featured-category-13' ? (
              <FeaturedCategory13 section={sectionData as any} />
            ) : sectionId === 'featured-category-12' ? (
              <FeaturedCategory12 section={sectionData as any} />
            ) : sectionId === 'featured-category-11' ? (
              <FeaturedCategory11 section={sectionData as any} />
            ) : sectionId === 'featured-category-10' ? (
              <FeaturedCategory10 section={sectionData as any} />
            ) : sectionId === 'featured-category-9' ? (
              <FeaturedCategory9 section={sectionData as any} />
            ) : sectionId === 'featured-category-8' ? (
              <FeaturedCategory8 section={sectionData as any} />
            ) : sectionId === 'featured-category-7' ? (
              <FeaturedCategory7 section={sectionData as any} />
            ) : sectionId === 'featured-category-6' ? (
              <FeaturedCategory6 section={sectionData as any} />
            ) : sectionId === 'featured-category-5' ? (
              <FeaturedCategory5 section={sectionData as any} />
            ) : sectionId === 'featured-category-4' ? (
              <FeaturedCategory4 section={sectionData as any} />
            ) : sectionId === 'featured-category-3' ? (
              <FeaturedCategory3 section={sectionData as any} />
            ) : sectionId === 'featured-category-2' ? (
              <FeaturedCategory2 section={sectionData as any} />
            ) : sectionId === 'featured-category-1' ? (
              <FeaturedCategory1 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-20' ? (
              <PromotionalBanner20 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-19' ? (
              <PromotionalBanner19 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-18' ? (
              <PromotionalBanner18 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-17' ? (
              <PromotionalBanner17 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-16' ? (
              <PromotionalBanner16 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-14' ? (
              <PromotionalBanner14 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-13' ? (
              <PromotionalBanner13 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-12' ? (
              <PromotionalBanner12 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-11' ? (
              <PromotionalBanner11 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-10' ? (
              <PromotionalBanner10 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-8' ? (
              <PromotionalBanner8 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-7' ? (
              <PromotionalBanner7 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-6' ? (
              <PromotionalBanner6 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-5' ? (
              <PromotionalBanner5 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-4' ? (
              <PromotionalBanner4 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-3' ? (
              <PromotionalBanner3 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-2' ? (
              <PromotionalBanner2 section={sectionData as any} />
            ) : sectionId === 'promotional-banner-1' ? (
              <PromotionalBanner1 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-20' ? (
              <HeroCarousel20 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-19' ? (
              <HeroCarousel19 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-18' ? (
              <HeroCarousel18 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-17' ? (
              <HeroCarousel17 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-16' ? (
              <HeroCarousel16 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-15' ? (
              <HeroCarousel15 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-14' ? (
              <HeroCarousel14 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-13' ? (
              <HeroCarousel13 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-12' ? (
              <HeroCarousel12 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-11' ? (
              <HeroCarousel11 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-10' ? (
              <HeroCarousel10 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-9' ? (
              <HeroCarousel9 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-8' ? (
              <HeroCarousel8 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-7' ? (
              <HeroCarousel7 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-6' ? (
              <HeroCarousel6 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-5' ? (
              <HeroCarousel5 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-4' ? (
              <HeroCarousel4 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-3' ? (
              <HeroCarousel3 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-2' ? (
              <HeroCarousel2 section={sectionData as any} />
            ) : sectionId === 'hero-carousel-1' ? (
              <HeroCarousel1 section={sectionData as any} />
            ) : sectionId === 'banner-20' ? (
              <Banner20 section={sectionData as any} />
            ) : sectionId === 'banner-19' ? (
              <Banner19 section={sectionData as any} />
            ) : sectionId === 'banner-18' ? (
              <Banner18 section={sectionData as any} />
            ) : sectionId === 'banner-17' ? (
              <Banner17 section={sectionData as any} />
            ) : sectionId === 'banner-16' ? (
              <Banner16 section={sectionData as any} />
            ) : sectionId === 'banner-15' ? (
              <Banner15 section={sectionData as any} />
            ) : sectionId === 'banner-14' ? (
              <Banner14 section={sectionData as any} />
            ) : sectionId === 'banner-13' ? (
              <Banner13 section={sectionData as any} />
            ) : sectionId === 'banner-12' ? (
              <Banner12 section={sectionData as any} />
            ) : sectionId === 'banner-11' ? (
              <Banner11 section={sectionData as any} />
            ) : sectionId === 'banner-10' ? (
              <Banner10 section={sectionData as any} />
            ) : sectionId === 'banner-9' ? (
              <Banner9 section={sectionData as any} />
            ) : sectionId === 'banner-8' ? (
              <Banner8 section={sectionData as any} />
            ) : sectionId === 'banner-7' ? (
              <Banner7 section={sectionData as any} />
            ) : sectionId === 'banner-6' ? (
              <Banner6 section={sectionData as any} />
            ) : sectionId === 'banner-5' ? (
              <Banner5 section={sectionData as any} />
            ) : sectionId === 'banner-4' ? (
              <Banner4 section={sectionData as any} />
            ) : sectionId === 'banner-3' ? (
              <Banner3 section={sectionData as any} />
            ) : sectionId === 'banner-2' ? (
              <Banner2 section={sectionData as any} />
            ) : sectionId === 'banner-1' ? (
              <Banner1 section={sectionData as any} />
            ) : sectionId === 'featured-collection-20' ? (
              <FeaturedCollection20 section={sectionData as any} />
            ) : sectionId === 'featured-collection-19' ? (
              <FeaturedCollection19 section={sectionData as any} />
            ) : sectionId === 'featured-collection-18' ? (
              <FeaturedCollection18 section={sectionData as any} />
            ) : sectionId === 'featured-collection-17' ? (
              <FeaturedCollection17 section={sectionData as any} />
            ) : sectionId === 'featured-collection-16' ? (
              <FeaturedCollection16 section={sectionData as any} />
            ) : sectionId === 'featured-collection-15' ? (
              <FeaturedCollection15 section={sectionData as any} />
            ) : sectionId === 'featured-collection-14' ? (
              <FeaturedCollection14 section={sectionData as any} />
            ) : sectionId === 'featured-collection-13' ? (
              <FeaturedCollection13 section={sectionData as any} />
            ) : sectionId === 'featured-collection-12' ? (
              <FeaturedCollection12 section={sectionData as any} />
            ) : sectionId === 'featured-collection-11' ? (
              <FeaturedCollection11 section={sectionData as any} />
            ) : sectionId === 'featured-collection-10' ? (
              <FeaturedCollection10 section={sectionData as any} />
            ) : sectionId === 'featured-collection-9' ? (
              <FeaturedCollection9 section={sectionData as any} />
            ) : sectionId === 'featured-collection-8' ? (
              <FeaturedCollection8 section={sectionData as any} />
            ) : sectionId === 'featured-collection-7' ? (
              <FeaturedCollection7 section={sectionData as any} />
            ) : sectionId === 'featured-collection-6' ? (
              <FeaturedCollection6 section={sectionData as any} />
            ) : sectionId === 'featured-collection-5' ? (
              <FeaturedCollection5 section={sectionData as any} />
            ) : sectionId === 'featured-collection-4' ? (
              <FeaturedCollection4 section={sectionData as any} />
            ) : sectionId === 'featured-collection-3' ? (
              <FeaturedCollection3 section={sectionData as any} />
            ) : sectionId === 'featured-collection-2' ? (
              <FeaturedCollection2 section={sectionData as any} />
            ) : sectionId === 'featured-collection-1' ? (
              <FeaturedCollection1 section={sectionData as any} />
            ) : sectionId === 'flash-sale-20' ? (
              <FlashSale20 section={sectionData as any} />
            ) : sectionId === 'flash-sale-19' ? (
              <FlashSale19 section={sectionData as any} />
            ) : sectionId === 'flash-sale-18' ? (
              <FlashSale18 section={sectionData as any} />
            ) : sectionId === 'flash-sale-17' ? (
              <FlashSale17 section={sectionData as any} />
            ) : sectionId === 'flash-sale-16' ? (
              <FlashSale16 section={sectionData as any} />
            ) : sectionId === 'flash-sale-15' ? (
              <FlashSale15 section={sectionData as any} />
            ) : sectionId === 'flash-sale-14' ? (
              <FlashSale14 section={sectionData as any} />
            ) : sectionId === 'flash-sale-13' ? (
              <FlashSale13 section={sectionData as any} />
            ) : sectionId === 'flash-sale-12' ? (
              <FlashSale12 section={sectionData as any} />
            ) : sectionId === 'flash-sale-11' ? (
              <FlashSale11 section={sectionData as any} />
            ) : sectionId === 'flash-sale-10' ? (
              <FlashSale10 section={sectionData as any} />
            ) : sectionId === 'flash-sale-9' ? (
              <FlashSale9 section={sectionData as any} />
            ) : sectionId === 'flash-sale-8' ? (
              <FlashSale8 section={sectionData as any} />
            ) : sectionId === 'flash-sale-7' ? (
              <FlashSale7 section={sectionData as any} />
            ) : sectionId === 'flash-sale-6' ? (
              <FlashSale6 section={sectionData as any} />
            ) : sectionId === 'flash-sale-5' ? (
              <FlashSale5 section={sectionData as any} />
            ) : sectionId === 'flash-sale-4' ? (
              <FlashSale4 section={sectionData as any} />
            ) : sectionId === 'flash-sale-3' ? (
              <FlashSale3 section={sectionData as any} />
            ) : sectionId === 'flash-sale-2' ? (
              <FlashSale2 section={sectionData as any} />
            ) : sectionId === 'flash-sale-1' ? (
              <FlashSale1 section={sectionData as any} />
            ) : sectionId === 'sale-20' ? (
              <Sale20 section={sectionData as any} />
            ) : sectionId === 'sale-19' ? (
              <Sale19 section={sectionData as any} />
            ) : sectionId === 'sale-18' ? (
              <Sale18 section={sectionData as any} />
            ) : sectionId === 'sale-17' ? (
              <Sale17 section={sectionData as any} />
            ) : sectionId === 'sale-16' ? (
              <Sale16 section={sectionData as any} />
            ) : sectionId === 'sale-15' ? (
              <Sale15 section={sectionData as any} />
            ) : sectionId === 'sale-14' ? (
              <Sale14 section={sectionData as any} />
            ) : sectionId === 'sale-13' ? (
              <Sale13 section={sectionData as any} />
            ) : sectionId === 'sale-12' ? (
              <Sale12 section={sectionData as any} />
            ) : sectionId === 'sale-11' ? (
              <Sale11 section={sectionData as any} />
            ) : sectionId === 'sale-10' ? (
              <Sale10 section={sectionData as any} />
            ) : sectionId === 'sale-9' ? (
              <Sale9 section={sectionData as any} />
            ) : sectionId === 'sale-8' ? (
              <Sale8 section={sectionData as any} />
            ) : sectionId === 'sale-7' ? (
              <Sale7 section={sectionData as any} />
            ) : sectionId === 'sale-6' ? (
              <Sale6 section={sectionData as any} />
            ) : sectionId === 'sale-5' ? (
              <Sale5 section={sectionData as any} />
            ) : sectionId === 'sale-4' ? (
              <Sale4 section={sectionData as any} />
            ) : sectionId === 'sale-3' ? (
              <Sale3 section={sectionData as any} />
            ) : sectionId === 'sale-2' ? (
              <Sale2 section={sectionData as any} />
            ) : sectionId === 'sale-1' ? (
              <Sale1 section={sectionData as any} />
            ) : sectionId === 'trending-20' ? (
              <Trending20 section={sectionData as any} />
            ) : sectionId === 'trending-19' ? (
              <Trending19 section={sectionData as any} />
            ) : sectionId === 'trending-18' ? (
              <Trending18 section={sectionData as any} />
            ) : sectionId === 'trending-17' ? (
              <Trending17 section={sectionData as any} />
            ) : sectionId === 'trending-16' ? (
              <Trending16 section={sectionData as any} />
            ) : sectionId === 'trending-15' ? (
              <Trending15 section={sectionData as any} />
            ) : sectionId === 'trending-14' ? (
              <Trending14 section={sectionData as any} />
            ) : sectionId === 'trending-13' ? (
              <Trending13 section={sectionData as any} />
            ) : sectionId === 'trending-12' ? (
              <Trending12 section={sectionData as any} />
            ) : sectionId === 'trending-11' ? (
              <Trending11 section={sectionData as any} />
            ) : sectionId === 'trending-10' ? (
              <Trending10 section={sectionData as any} />
            ) : sectionId === 'trending-9' ? (
              <Trending9 section={sectionData as any} />
            ) : sectionId === 'trending-8' ? (
              <Trending8 section={sectionData as any} />
            ) : sectionId === 'trending-7' ? (
              <Trending7 section={sectionData as any} />
            ) : sectionId === 'trending-6' ? (
              <Trending6 section={sectionData as any} />
            ) : sectionId === 'trending-5' ? (
              <Trending5 section={sectionData as any} />
            ) : sectionId === 'trending-4' ? (
              <Trending4 section={sectionData as any} />
            ) : sectionId === 'trending-3' ? (
              <Trending3 section={sectionData as any} />
            ) : sectionId === 'trending-2' ? (
              <Trending2 section={sectionData as any} />
            ) : sectionId === 'trending-1' ? (
              <Trending1 section={sectionData as any} />
            ) : sectionId === 'new-arrival-20' ? (
              <NewArrival20 section={sectionData as any} />
            ) : sectionId === 'new-arrival-19' ? (
              <NewArrival19 section={sectionData as any} />
            ) : sectionId === 'new-arrival-18' ? (
              <NewArrival18 section={sectionData as any} />
            ) : sectionId === 'new-arrival-17' ? (
              <NewArrival17 section={sectionData as any} />
            ) : sectionId === 'new-arrival-16' ? (
              <NewArrival16 section={sectionData as any} />
            ) : sectionId === 'new-arrival-15' ? (
              <NewArrival15 section={sectionData as any} />
            ) : sectionId === 'new-arrival-14' ? (
              <NewArrival14 section={sectionData as any} />
            ) : sectionId === 'new-arrival-13' ? (
              <NewArrival13 section={sectionData as any} />
            ) : sectionId === 'new-arrival-12' ? (
              <NewArrival12 section={sectionData as any} />
            ) : sectionId === 'new-arrival-11' ? (
              <NewArrival11 section={sectionData as any} />
            ) : sectionId === 'new-arrival-10' ? (
              <NewArrival10 section={sectionData as any} />
            ) : sectionId === 'new-arrival-9' ? (
              <NewArrival9 section={sectionData as any} />
            ) : sectionId === 'new-arrival-8' ? (
              <NewArrival8 section={sectionData as any} />
            ) : sectionId === 'new-arrival-7' ? (
              <NewArrival7 section={sectionData as any} />
            ) : sectionId === 'new-arrival-6' ? (
              <NewArrival6 section={sectionData as any} />
            ) : sectionId === 'new-arrival-5' ? (
              <NewArrival5 section={sectionData as any} />
            ) : sectionId === 'new-arrival-4' ? (
              <NewArrival4 section={sectionData as any} />
            ) : sectionId === 'new-arrival-3' ? (
              <NewArrival3 section={sectionData as any} />
            ) : sectionId === 'new-arrival-2' ? (
              <NewArrival2 section={sectionData as any} />
            ) : sectionId === 'new-arrival-1' ? (
              <NewArrival1 section={sectionData as any} />
            ) : sectionId === 'best-seller-20' ? (
              <BestSeller20 section={sectionData as any} />
            ) : sectionId === 'best-seller-19' ? (
              <BestSeller19 section={sectionData as any} />
            ) : sectionId === 'best-seller-18' ? (
              <BestSeller18 section={sectionData as any} />
            ) : sectionId === 'best-seller-17' ? (
              <BestSeller17 section={sectionData as any} />
            ) : sectionId === 'best-seller-16' ? (
              <BestSeller16 section={sectionData as any} />
            ) : sectionId === 'best-seller-15' ? (
              <BestSeller15 section={sectionData as any} />
            ) : sectionId === 'best-seller-14' ? (
              <BestSeller14 section={sectionData as any} />
            ) : sectionId === 'best-seller-13' ? (
              <BestSeller13 section={sectionData as any} />
            ) : sectionId === 'best-seller-12' ? (
              <BestSeller12 section={sectionData as any} />
            ) : sectionId === 'best-seller-11' ? (
              <BestSeller11 section={sectionData as any} />
            ) : sectionId === 'best-seller-10' ? (
              <BestSeller10 section={sectionData as any} />
            ) : sectionId === 'best-seller-9' ? (
              <BestSeller9 section={sectionData as any} />
            ) : sectionId === 'best-seller-8' ? (
              <BestSeller8 section={sectionData as any} />
            ) : sectionId === 'best-seller-7' ? (
              <BestSeller7 section={sectionData as any} />
            ) : sectionId === 'best-seller-6' ? (
              <BestSeller6 section={sectionData as any} />
            ) : sectionId === 'best-seller-5' ? (
              <BestSeller5 section={sectionData as any} />
            ) : sectionId === 'best-seller-4' ? (
              <BestSeller4 section={sectionData as any} />
            ) : sectionId === 'best-seller-3' ? (
              <BestSeller3 section={sectionData as any} />
            ) : sectionId === 'best-seller-2' ? (
              <BestSeller2 section={sectionData as any} />
            ) : sectionId === 'best-seller-1' ? (
              <BestSeller1 section={sectionData as any} />
            ) : sectionId === 'product-carousel-20' ? (
              <ProductCarousel20 section={sectionData as any} />
            ) : sectionId === 'product-carousel-19' ? (
              <ProductCarousel19 section={sectionData as any} />
            ) : sectionId === 'product-carousel-18' ? (
              <ProductCarousel18 section={sectionData as any} />
            ) : sectionId === 'product-carousel-17' ? (
              <ProductCarousel17 section={sectionData as any} />
            ) : sectionId === 'product-carousel-16' ? (
              <ProductCarousel16 section={sectionData as any} />
            ) : sectionId === 'product-carousel-15' ? (
              <ProductCarousel15 section={sectionData as any} />
            ) : sectionId === 'product-carousel-14' ? (
              <ProductCarousel14 section={sectionData as any} />
            ) : sectionId === 'product-carousel-13' ? (
              <ProductCarousel13 section={sectionData as any} />
            ) : sectionId === 'product-carousel-12' ? (
              <ProductCarousel12 section={sectionData as any} />
            ) : sectionId === 'product-carousel-11' ? (
              <ProductCarousel11 section={sectionData as any} />
            ) : sectionId === 'product-carousel-10' ? (
              <ProductCarousel10 section={sectionData as any} />
            ) : sectionId === 'product-carousel-9' ? (
              <ProductCarousel9 section={sectionData as any} />
            ) : sectionId === 'product-carousel-8' ? (
              <ProductCarousel8 section={sectionData as any} />
            ) : sectionId === 'product-carousel-7' ? (
              <ProductCarousel7 section={sectionData as any} />
            ) : sectionId === 'product-carousel-6' ? (
              <ProductCarousel6 section={sectionData as any} />
            ) : sectionId === 'product-carousel-5' ? (
              <ProductCarousel5 section={sectionData as any} />
            ) : sectionId === 'product-carousel-4' ? (
              <ProductCarousel4 section={sectionData as any} />
            ) : sectionId === 'product-carousel-3' ? (
              <ProductCarousel3 section={sectionData as any} />
            ) : sectionId === 'product-carousel-2' ? (
              <ProductCarousel2 section={sectionData as any} />
            ) : sectionId === 'product-carousel-1' ? (
              <ProductCarousel1 section={sectionData as any} />
            ) : sectionId === 'product-grid-20' ? (
              <ProductGrid20 section={sectionData as any} />
            ) : sectionId === 'product-grid-19' ? (
              <ProductGrid19 section={sectionData as any} />
            ) : sectionId === 'product-grid-18' ? (
              <ProductGrid18 section={sectionData as any} />
            ) : sectionId === 'product-grid-17' ? (
              <ProductGrid17 section={sectionData as any} />
            ) : sectionId === 'product-grid-16' ? (
              <ProductGrid16 section={sectionData as any} />
            ) : sectionId === 'product-grid-15' ? (
              <ProductGrid15 section={sectionData as any} />
            ) : sectionId === 'product-grid-14' ? (
              <ProductGrid14 section={sectionData as any} />
            ) : sectionId === 'product-grid-13' ? (
              <ProductGrid13 section={sectionData as any} />
            ) : sectionId === 'product-grid-12' ? (
              <ProductGrid12 section={sectionData as any} />
            ) : sectionId === 'product-grid-11' ? (
              <ProductGrid11 section={sectionData as any} />
            ) : sectionId === 'product-grid-10' ? (
              <ProductGrid10 section={sectionData as any} />
            ) : sectionId === 'product-grid-9' ? (
              <ProductGrid9 section={sectionData as any} />
            ) : sectionId === 'product-grid-8' ? (
              <ProductGrid8 section={sectionData as any} />
            ) : sectionId === 'product-grid-7' ? (
              <ProductGrid7 section={sectionData as any} />
            ) : sectionId === 'product-grid-6' ? (
              <ProductGrid6 section={sectionData as any} />
            ) : sectionId === 'product-grid-5' ? (
              <ProductGrid5 section={sectionData as any} />
            ) : sectionId === 'product-grid-4' ? (
              <ProductGrid4 section={sectionData as any} />
            ) : sectionId === 'product-grid-3' ? (
              <ProductGrid3 section={sectionData as any} />
            ) : sectionId === 'product-grid-2' ? (
              <ProductGrid2 section={sectionData as any} />
            ) : sectionId === 'product-grid-1' ? (
              <ProductGrid1 section={sectionData as any} />
            ) : sectionId === 'newsletter-20' ? (
              <Newsletter20 data={sectionData as any} />
            ) : sectionId === 'newsletter-19' ? (
              <Newsletter19 data={sectionData as any} />
            ) : sectionId === 'newsletter-18' ? (
              <Newsletter18 data={sectionData as any} />
            ) : sectionId === 'newsletter-17' ? (
              <Newsletter17 data={sectionData as any} />
            ) : sectionId === 'newsletter-16' ? (
              <Newsletter16 data={sectionData as any} />
            ) : sectionId === 'newsletter-15' ? (
              <Newsletter15 data={sectionData as any} />
            ) : sectionId === 'newsletter-14' ? (
              <Newsletter14 data={sectionData as any} />
            ) : sectionId === 'newsletter-13' ? (
              <Newsletter13 data={sectionData as any} />
            ) : sectionId === 'newsletter-12' ? (
              <Newsletter12 data={sectionData as any} />
            ) : sectionId === 'newsletter-11' ? (
              <Newsletter11 data={sectionData as any} />
            ) : sectionId === 'newsletter-10' ? (
              <Newsletter10 data={sectionData as any} />
            ) : sectionId === 'newsletter-9' ? (
              <Newsletter9 data={sectionData as any} />
            ) : sectionId === 'newsletter-8' ? (
              <Newsletter8 data={sectionData as any} />
            ) : sectionId === 'newsletter-7' ? (
              <Newsletter7 data={sectionData as any} />
            ) : sectionId === 'newsletter-6' ? (
              <Newsletter6 data={sectionData as any} />
            ) : sectionId === 'newsletter-5' ? (
              <Newsletter5 data={sectionData as any} />
            ) : sectionId === 'newsletter-4' ? (
              <Newsletter4 data={sectionData as any} />
            ) : sectionId === 'newsletter-3' ? (
              <Newsletter3 data={sectionData as any} />
            ) : sectionId === 'newsletter-2' ? (
              <Newsletter2 data={sectionData as any} />
            ) : sectionId === 'newsletter-1' ? (
              <Newsletter1 data={sectionData as any} />
            ) : sectionId === 'faq-20' ? (
              <Faq20 data={sectionData as any} />
            ) : sectionId === 'faq-19' ? (
              <Faq19 data={sectionData as any} />
            ) : sectionId === 'faq-18' ? (
              <Faq18 data={sectionData as any} />
            ) : sectionId === 'faq-17' ? (
              <Faq17 data={sectionData as any} />
            ) : sectionId === 'faq-16' ? (
              <Faq16 data={sectionData as any} />
            ) : sectionId === 'faq-15' ? (
              <Faq15 data={sectionData as any} />
            ) : sectionId === 'faq-14' ? (
              <Faq14 data={sectionData as any} />
            ) : sectionId === 'faq-13' ? (
              <Faq13 data={sectionData as any} />
            ) : sectionId === 'faq-12' ? (
              <Faq12 data={sectionData as any} />
            ) : sectionId === 'faq-11' ? (
              <Faq11 data={sectionData as any} />
            ) : sectionId === 'faq-10' ? (
              <Faq10 data={sectionData as any} />
            ) : sectionId === 'faq-9' ? (
              <Faq9 data={sectionData as any} />
            ) : sectionId === 'faq-8' ? (
              <Faq8 data={sectionData as any} />
            ) : sectionId === 'faq-7' ? (
              <Faq7 data={sectionData as any} />
            ) : sectionId === 'faq-6' ? (
              <Faq6 data={sectionData as any} />
            ) : sectionId === 'faq-5' ? (
              <Faq5 data={sectionData as any} />
            ) : sectionId === 'faq-4' ? (
              <Faq4 data={sectionData as any} />
            ) : sectionId === 'faq-3' ? (
              <Faq3 data={sectionData as any} />
            ) : sectionId === 'faq-2' ? (
              <Faq2 data={sectionData as any} />
            ) : sectionId === 'faq-1' ? (
              <Faq1 data={sectionData as any} />
            ) : sectionId === 'buying-guide-20' ? (
              <BuyingGuide20 data={sectionData as any} />
            ) : sectionId === 'buying-guide-19' ? (
              <BuyingGuide19 data={sectionData as any} />
            ) : sectionId === 'buying-guide-18' ? (
              <BuyingGuide18 data={sectionData as any} />
            ) : sectionId === 'buying-guide-17' ? (
              <BuyingGuide17 data={sectionData as any} />
            ) : sectionId === 'buying-guide-16' ? (
              <BuyingGuide16 data={sectionData as any} />
            ) : sectionId === 'buying-guide-15' ? (
              <BuyingGuide15 data={sectionData as any} />
            ) : sectionId === 'buying-guide-14' ? (
              <BuyingGuide14 data={sectionData as any} />
            ) : sectionId === 'buying-guide-13' ? (
              <BuyingGuide13 data={sectionData as any} />
            ) : sectionId === 'buying-guide-12' ? (
              <BuyingGuide12 data={sectionData as any} />
            ) : sectionId === 'buying-guide-11' ? (
              <BuyingGuide11 data={sectionData as any} />
            ) : sectionId === 'buying-guide-10' ? (
              <BuyingGuide10 data={sectionData as any} />
            ) : sectionId === 'buying-guide-9' ? (
              <BuyingGuide9 data={sectionData as any} />
            ) : sectionId === 'buying-guide-8' ? (
              <BuyingGuide8 data={sectionData as any} />
            ) : sectionId === 'buying-guide-7' ? (
              <BuyingGuide7 data={sectionData as any} />
            ) : sectionId === 'buying-guide-6' ? (
              <BuyingGuide6 data={sectionData as any} />
            ) : sectionId === 'buying-guide-5' ? (
              <BuyingGuide5 data={sectionData as any} />
            ) : sectionId === 'buying-guide-4' ? (
              <BuyingGuide4 data={sectionData as any} />
            ) : sectionId === 'buying-guide-3' ? (
              <BuyingGuide3 data={sectionData as any} />
            ) : sectionId === 'buying-guide-2' ? (
              <BuyingGuide2 data={sectionData as any} />
            ) : sectionId === 'buying-guide-1' ? (
              <BuyingGuide1 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-20' ? (
              <BlogHighlight20 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-19' ? (
              <BlogHighlight19 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-18' ? (
              <BlogHighlight18 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-17' ? (
              <BlogHighlight17 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-16' ? (
              <BlogHighlight16 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-15' ? (
              <BlogHighlight15 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-14' ? (
              <BlogHighlight14 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-13' ? (
              <BlogHighlight13 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-12' ? (
              <BlogHighlight12 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-11' ? (
              <BlogHighlight11 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-10' ? (
              <BlogHighlight10 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-9' ? (
              <BlogHighlight9 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-8' ? (
              <BlogHighlight8 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-7' ? (
              <BlogHighlight7 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-6' ? (
              <BlogHighlight6 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-5' ? (
              <BlogHighlight5 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-4' ? (
              <BlogHighlight4 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-3' ? (
              <BlogHighlight3 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-2' ? (
              <BlogHighlight2 data={sectionData as any} />
            ) : sectionId === 'blog-highlight-1' ? (
              <BlogHighlight1 data={sectionData as any} />
            ) : sectionId === 'video-showcase-20' ? (
              <VideoShowcase20 data={sectionData as any} />
            ) : sectionId === 'video-showcase-19' ? (
              <VideoShowcase19 data={sectionData as any} />
            ) : sectionId === 'video-showcase-18' ? (
              <VideoShowcase18 data={sectionData as any} />
            ) : sectionId === 'video-showcase-17' ? (
              <VideoShowcase17 data={sectionData as any} />
            ) : sectionId === 'video-showcase-16' ? (
              <VideoShowcase16 data={sectionData as any} />
            ) : sectionId === 'video-showcase-15' ? (
              <VideoShowcase15 data={sectionData as any} />
            ) : sectionId === 'video-showcase-14' ? (
              <VideoShowcase14 data={sectionData as any} />
            ) : sectionId === 'video-showcase-13' ? (
              <VideoShowcase13 data={sectionData as any} />
            ) : sectionId === 'video-showcase-12' ? (
              <VideoShowcase12 data={sectionData as any} />
            ) : sectionId === 'video-showcase-11' ? (
              <VideoShowcase11 data={sectionData as any} />
            ) : sectionId === 'video-showcase-10' ? (
              <VideoShowcase10 data={sectionData as any} />
            ) : sectionId === 'video-showcase-9' ? (
              <VideoShowcase9 data={sectionData as any} />
            ) : sectionId === 'video-showcase-8' ? (
              <VideoShowcase8 data={sectionData as any} />
            ) : sectionId === 'video-showcase-7' ? (
              <VideoShowcase7 data={sectionData as any} />
            ) : sectionId === 'video-showcase-6' ? (
              <VideoShowcase6 data={sectionData as any} />
            ) : sectionId === 'video-showcase-5' ? (
              <VideoShowcase5 data={sectionData as any} />
            ) : sectionId === 'video-showcase-4' ? (
              <VideoShowcase4 data={sectionData as any} />
            ) : sectionId === 'video-showcase-3' ? (
              <VideoShowcase3 data={sectionData as any} />
            ) : sectionId === 'video-showcase-2' ? (
              <VideoShowcase2 data={sectionData as any} />
            ) : sectionId === 'video-showcase-1' ? (
              <VideoShowcase1 data={sectionData as any} />
            ) : sectionId === 'review-20' ? (
              <CustomerReview20 data={sectionData as any} />
            ) : sectionId === 'review-19' ? (
              <CustomerReview19 data={sectionData as any} />
            ) : sectionId === 'review-18' ? (
              <CustomerReview18 data={sectionData as any} />
            ) : sectionId === 'review-17' ? (
              <CustomerReview17 data={sectionData as any} />
            ) : sectionId === 'review-16' ? (
              <CustomerReview16 data={sectionData as any} />
            ) : sectionId === 'review-15' ? (
              <CustomerReview15 data={sectionData as any} />
            ) : sectionId === 'review-14' ? (
              <CustomerReview14 data={sectionData as any} />
            ) : sectionId === 'review-13' ? (
              <CustomerReview13 data={sectionData as any} />
            ) : sectionId === 'review-12' ? (
              <CustomerReview12 data={sectionData as any} />
            ) : sectionId === 'review-11' ? (
              <CustomerReview11 data={sectionData as any} />
            ) : sectionId === 'review-10' ? (
              <CustomerReview10 data={sectionData as any} />
            ) : sectionId === 'review-9' ? (
              <CustomerReview9 data={sectionData as any} />
            ) : sectionId === 'review-8' ? (
              <CustomerReview8 data={sectionData as any} />
            ) : sectionId === 'review-7' ? (
              <CustomerReview7 data={sectionData as any} />
            ) : sectionId === 'review-6' ? (
              <CustomerReview6 data={sectionData as any} />
            ) : sectionId === 'review-5' ? (
              <CustomerReview5 data={sectionData as any} />
            ) : sectionId === 'review-4' ? (
              <CustomerReview4 data={sectionData as any} />
            ) : sectionId === 'review-3' ? (
              <CustomerReview3 data={sectionData as any} />
            ) : sectionId === 'review-2' ? (
              <CustomerReview2 data={sectionData as any} />
            ) : sectionId === 'review-1' ? (
              <CustomerReview1 data={sectionData as any} />
            ) : sectionId === 'testimonial-20' ? (
              <Testimonial20 data={sectionData as any} />
            ) : sectionId === 'testimonial-19' ? (
              <Testimonial19 data={sectionData as any} />
            ) : sectionId === 'testimonial-18' ? (
              <Testimonial18 data={sectionData as any} />
            ) : sectionId === 'testimonial-17' ? (
              <Testimonial17 data={sectionData as any} />
            ) : sectionId === 'testimonial-16' ? (
              <Testimonial16 data={sectionData as any} />
            ) : sectionId === 'testimonial-15' ? (
              <Testimonial15 data={sectionData as any} />
            ) : sectionId === 'testimonial-14' ? (
              <Testimonial14 data={sectionData as any} />
            ) : sectionId === 'testimonial-13' ? (
              <Testimonial13 data={sectionData as any} />
            ) : sectionId === 'testimonial-12' ? (
              <Testimonial12 data={sectionData as any} />
            ) : sectionId === 'testimonial-11' ? (
              <Testimonial11 data={sectionData as any} />
            ) : sectionId === 'testimonial-10' ? (
              <Testimonial10 data={sectionData as any} />
            ) : sectionId === 'testimonial-9' ? (
              <Testimonial9 data={sectionData as any} />
            ) : sectionId === 'testimonial-8' ? (
              <Testimonial8 data={sectionData as any} />
            ) : sectionId === 'testimonial-7' ? (
              <Testimonial7 data={sectionData as any} />
            ) : sectionId === 'testimonial-6' ? (
              <Testimonial6 data={sectionData as any} />
            ) : sectionId === 'testimonial-5' ? (
              <Testimonial5 data={sectionData as any} />
            ) : sectionId === 'testimonial-4' ? (
              <Testimonial4 data={sectionData as any} />
            ) : sectionId === 'testimonial-3' ? (
              <Testimonial3 data={sectionData as any} />
            ) : sectionId === 'testimonial-2' ? (
              <Testimonial2 data={sectionData as any} />
            ) : sectionId === 'testimonial-1' ? (
              <Testimonial1 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-20' ? (
              <BrandShowcase20 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-19' ? (
              <BrandShowcase19 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-18' ? (
              <BrandShowcase18 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-17' ? (
              <BrandShowcase17 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-16' ? (
              <BrandShowcase16 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-15' ? (
              <BrandShowcase15 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-14' ? (
              <BrandShowcase14 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-13' ? (
              <BrandShowcase13 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-12' ? (
              <BrandShowcase12 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-11' ? (
              <BrandShowcase11 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-10' ? (
              <BrandShowcase10 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-9' ? (
              <BrandShowcase9 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-8' ? (
              <BrandShowcase8 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-7' ? (
              <BrandShowcase7 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-6' ? (
              <BrandShowcase6 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-5' ? (
              <BrandShowcase5 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-4' ? (
              <BrandShowcase4 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-3' ? (
              <BrandShowcase3 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-2' ? (
              <BrandShowcase2 data={sectionData as any} />
            ) : sectionId === 'brand-showcase-1' ? (
              <BrandShowcase1 data={sectionData as any} />
            ) : sectionId === 'why-us-20' ? (
              <WhyChooseUs20 data={sectionData as any} />
            ) : sectionId === 'why-us-19' ? (
              <WhyChooseUs19 data={sectionData as any} />
            ) : sectionId === 'why-us-18' ? (
              <WhyChooseUs18 data={sectionData as any} />
            ) : sectionId === 'why-us-17' ? (
              <WhyChooseUs17 data={sectionData as any} />
            ) : sectionId === 'why-us-16' ? (
              <WhyChooseUs16 data={sectionData as any} />
            ) : sectionId === 'why-us-15' ? (
              <WhyChooseUs15 data={sectionData as any} />
            ) : sectionId === 'why-us-14' ? (
              <WhyChooseUs14 data={sectionData as any} />
            ) : sectionId === 'why-us-13' ? (
              <WhyChooseUs13 data={sectionData as any} />
            ) : sectionId === 'why-us-12' ? (
              <WhyChooseUs12 data={sectionData as any} />
            ) : sectionId === 'why-us-11' ? (
              <WhyChooseUs11 data={sectionData as any} />
            ) : sectionId === 'why-us-10' ? (
              <WhyChooseUs10 data={sectionData as any} />
            ) : sectionId === 'why-us-9' ? (
              <WhyChooseUs9 data={sectionData as any} />
            ) : sectionId === 'why-us-8' ? (
              <WhyChooseUs8 data={sectionData as any} />
            ) : sectionId === 'why-us-7' ? (
              <WhyChooseUs7 data={sectionData as any} />
            ) : sectionId === 'why-us-6' ? (
              <WhyChooseUs6 data={sectionData as any} />
            ) : sectionId === 'why-us-5' ? (
              <WhyChooseUs5 data={sectionData as any} />
            ) : sectionId === 'why-us-4' ? (
              <WhyChooseUs4 data={sectionData as any} />
            ) : sectionId === 'why-us-3' ? (
              <WhyChooseUs3 data={sectionData as any} />
            ) : sectionId === 'why-us-2' ? (
              <WhyChooseUs2 data={sectionData as any} />
            ) : sectionId === 'why-us-1' ? (
              <WhyChooseUs1 data={sectionData as any} />
            ) : sectionId === 'promo-card-20' ? (
              <PromoCard20 data={sectionData as any} />
            ) : sectionId === 'promo-card-19' ? (
              <PromoCard19 data={sectionData as any} />
            ) : sectionId === 'promo-card-18' ? (
              <PromoCard18 data={sectionData as any} />
            ) : sectionId === 'promo-card-17' ? (
              <PromoCard17 data={sectionData as any} />
            ) : sectionId === 'promo-card-16' ? (
              <PromoCard16 data={sectionData as any} />
            ) : sectionId === 'promo-card-15' ? (
              <PromoCard15 data={sectionData as any} />
            ) : sectionId === 'promo-card-14' ? (
              <PromoCard14 data={sectionData as any} />
            ) : sectionId === 'promo-card-13' ? (
              <PromoCard13 data={sectionData as any} />
            ) : sectionId === 'promo-card-12' ? (
              <PromoCard12 data={sectionData as any} />
            ) : sectionId === 'promo-card-11' ? (
              <PromoCard11 data={sectionData as any} />
            ) : sectionId === 'promo-card-10' ? (
              <PromoCard10 data={sectionData as any} />
            ) : sectionId === 'promo-card-9' ? (
              <PromoCard9 data={sectionData as any} />
            ) : sectionId === 'promo-card-8' ? (
              <PromoCard8 data={sectionData as any} />
            ) : sectionId === 'promo-card-7' ? (
              <PromoCard7 data={sectionData as any} />
            ) : sectionId === 'promo-card-6' ? (
              <PromoCard6 data={sectionData as any} />
            ) : sectionId === 'promo-card-5' ? (
              <PromoCard5 data={sectionData as any} />
            ) : sectionId === 'promo-card-4' ? (
              <PromoCard4 data={sectionData as any} />
            ) : sectionId === 'promo-card-3' ? (
              <PromoCard3 data={sectionData as any} />
            ) : sectionId === 'promo-card-2' ? (
              <PromoCard2 data={sectionData as any} />
            ) : sectionId === 'promo-card-1' ? (
              <PromoCard1 data={sectionData as any} />
            ) : sectionId === 'image-text-20' ? (
              <ImageText20 data={sectionData as any} />
            ) : sectionId === 'split-image-20' ? (
              <SplitImage20 data={sectionData as any} />
            ) : sectionId === 'split-image-19' ? (
              <SplitImage19 data={sectionData as any} />
            ) : sectionId === 'split-image-18' ? (
              <SplitImage18 data={sectionData as any} />
            ) : sectionId === 'split-image-17' ? (
              <SplitImage17 data={sectionData as any} />
            ) : sectionId === 'split-image-16' ? (
              <SplitImage16 data={sectionData as any} />
            ) : sectionId === 'split-image-15' ? (
              <SplitImage15 data={sectionData as any} />
            ) : sectionId === 'split-image-14' ? (
              <SplitImage14 data={sectionData as any} />
            ) : sectionId === 'split-image-13' ? (
              <SplitImage13 data={sectionData as any} />
            ) : sectionId === 'split-image-12' ? (
              <SplitImage12 data={sectionData as any} />
            ) : sectionId === 'split-image-11' ? (
              <SplitImage11 data={sectionData as any} />
            ) : sectionId === 'split-image-10' ? (
              <SplitImage10 data={sectionData as any} />
            ) : sectionId === 'split-image-9' ? (
              <SplitImage9 data={sectionData as any} />
            ) : sectionId === 'split-image-8' ? (
              <SplitImage8 data={sectionData as any} />
            ) : sectionId === 'split-image-7' ? (
              <SplitImage7 data={sectionData as any} />
            ) : sectionId === 'split-image-6' ? (
              <SplitImage6 data={sectionData as any} />
            ) : sectionId === 'split-image-5' ? (
              <SplitImage5 data={sectionData as any} />
            ) : sectionId === 'split-image-4' ? (
              <SplitImage4 data={sectionData as any} />
            ) : sectionId === 'split-image-3' ? (
              <SplitImage3 data={sectionData as any} />
            ) : sectionId === 'split-image-2' ? (
              <SplitImage2 data={sectionData as any} />
            ) : sectionId === 'split-image-1' ? (
              <SplitImage1 data={sectionData as any} />
            ) : sectionId === 'image-text-19' ? (
              <ImageText19 data={sectionData as any} />
            ) : sectionId === 'image-text-18' ? (
              <ImageText18 data={sectionData as any} />
            ) : sectionId === 'image-text-17' ? (
              <ImageText17 data={sectionData as any} />
            ) : sectionId === 'image-text-16' ? (
              <ImageText16 data={sectionData as any} />
            ) : sectionId === 'image-text-15' ? (
              <ImageText15 data={sectionData as any} />
            ) : sectionId === 'image-text-14' ? (
              <ImageText14 data={sectionData as any} />
            ) : sectionId === 'image-text-13' ? (
              <ImageText13 data={sectionData as any} />
            ) : sectionId === 'image-text-12' ? (
              <ImageText12 data={sectionData as any} />
            ) : sectionId === 'image-text-11' ? (
              <ImageText11 data={sectionData as any} />
            ) : sectionId === 'image-text-10' ? (
              <ImageText10 data={sectionData as any} />
            ) : sectionId === 'image-text-9' ? (
              <ImageText9 data={sectionData as any} />
            ) : sectionId === 'image-text-8' ? (
              <ImageText8 data={sectionData as any} />
            ) : sectionId === 'image-text-7' ? (
              <ImageText7 data={sectionData as any} />
            ) : sectionId === 'image-text-6' ? (
              <ImageText6 data={sectionData as any} />
            ) : sectionId === 'image-text-5' ? (
              <ImageText5 data={sectionData as any} />
            ) : sectionId === 'image-text-4' ? (
              <ImageText4 data={sectionData as any} />
            ) : sectionId === 'image-text-3' ? (
              <ImageText3 data={sectionData as any} />
            ) : sectionId === 'image-text-2' ? (
              <ImageText2 data={sectionData as any} />
            ) : sectionId === 'image-text-1' ? (
              <ImageText1 data={sectionData as any} />
            ) : sectionId === 'featured-product-20' ? (
              <FeaturedProductTab20 data={sectionData as any} />
            ) : sectionId === 'featured-product-19' ? (
              <FeaturedProductTab19 data={sectionData as any} />
            ) : sectionId === 'featured-product-18' ? (
              <FeaturedProductTab18 data={sectionData as any} />
            ) : sectionId === 'featured-product-17' ? (
              <FeaturedProductTab17 data={sectionData as any} />
            ) : sectionId === 'featured-product-16' ? (
              <FeaturedProductTab16 data={sectionData as any} />
            ) : sectionId === 'featured-product-15' ? (
              <FeaturedProductTab15 data={sectionData as any} />
            ) : sectionId === 'featured-product-14' ? (
              <FeaturedProductTab14 data={sectionData as any} />
            ) : sectionId === 'featured-product-13' ? (
              <FeaturedProductTab13 data={sectionData as any} />
            ) : sectionId === 'featured-product-12' ? (
              <FeaturedProductTab12 data={sectionData as any} />
            ) : sectionId === 'featured-product-11' ? (
              <FeaturedProductTab11 data={sectionData as any} />
            ) : sectionId === 'featured-product-10' ? (
              <FeaturedProductTab10 data={sectionData as any} />
            ) : sectionId === 'featured-product-9' ? (
              <FeaturedProductTab9 data={sectionData as any} />
            ) : sectionId === 'featured-product-8' ? (
              <FeaturedProductTab8 data={sectionData as any} />
            ) : sectionId === 'featured-product-7' ? (
              <FeaturedProductTab7 data={sectionData as any} />
            ) : sectionId === 'featured-product-6' ? (
              <FeaturedProductTab6 data={sectionData as any} />
            ) : sectionId === 'featured-product-5' ? (
              <FeaturedProductTab5 data={sectionData as any} />
            ) : sectionId === 'featured-product-4' ? (
              <FeaturedProductTab4 data={sectionData as any} />
            ) : sectionId === 'featured-product-3' ? (
              <FeaturedProductTab3 data={sectionData as any} />
            ) : sectionId === 'featured-product-2' ? (
              <FeaturedProductTab2 data={sectionData as any} />
            ) : sectionId === 'featured-product-1' ? (
              <FeaturedProductTab1 data={sectionData as any} />
                        ) : sectionId === 'product-gallery-1' ? (
              <ProductGallery1 data={sectionData || productGallery1Data as any} />
            ) : sectionId === 'product-gallery-2' ? (
              <ProductGallery2 data={sectionData || productGallery2Data as any} />
            ) : sectionId === 'product-gallery-3' ? (
              <ProductGallery3 data={sectionData || productGallery3Data as any} />
            ) : sectionId === 'product-gallery-4' ? (
              <ProductGallery4 data={sectionData || productGallery4Data as any} />
            ) : sectionId === 'product-gallery-5' ? (
              <ProductGallery5 data={sectionData || productGallery5Data as any} />
            ) : sectionId === 'product-gallery-6' ? (
              <ProductGallery6 data={sectionData || productGallery6Data as any} />
            ) : sectionId === 'product-gallery-7' ? (
              <ProductGallery7 data={sectionData || productGallery7Data as any} />
            ) : sectionId === 'product-gallery-8' ? (
              <ProductGallery8 data={sectionData || productGallery8Data as any} />
            ) : sectionId === 'product-gallery-9' ? (
              <ProductGallery9 data={sectionData || productGallery9Data as any} />
            ) : sectionId === 'product-gallery-10' ? (
              <ProductGallery10 data={sectionData || productGallery10Data as any} />
) : sectionId === 'product-gallery-11' ? (
              <ProductGallery11 data={sectionData || productGallery11Data as any} />
            ) : sectionId === 'product-gallery-12' ? (
              <ProductGallery12 data={sectionData || productGallery12Data as any} />
            ) : sectionId === 'product-gallery-13' ? (
              <ProductGallery13 data={sectionData || productGallery13Data as any} />
            ) : sectionId === 'product-gallery-14' ? (
              <ProductGallery14 data={sectionData || productGallery14Data as any} />
            ) : sectionId === 'product-gallery-15' ? (
              <ProductGallery15 data={sectionData || productGallery15Data as any} />
            ) : sectionId === 'product-gallery-16' ? (
              <ProductGallery16 data={sectionData || productGallery16Data as any} />
            ) : sectionId === 'product-gallery-17' ? (
              <ProductGallery17 data={sectionData || productGallery17Data as any} />
            ) : sectionId === 'product-gallery-18' ? (
              <ProductGallery18 data={sectionData || productGallery18Data as any} />
            ) : sectionId === 'product-gallery-19' ? (
              <ProductGallery19 data={sectionData || productGallery19Data as any} />
            ) : sectionId === 'product-gallery-20' ? (
              <ProductGallery20 data={sectionData || productGallery20Data as any} />
            ) : sectionId.startsWith('product-grid-') ? (
              <div className="flex items-center justify-center flex-1 h-full min-h-[400px]">
                <p className="text-sm font-medium text-gray-500">Product Grid Preview (Coming Soon)</p>
              </div>
            ) : (
        <div className="flex items-center justify-center flex-1 h-full min-h-[400px]">
          <p className="text-sm font-medium text-gray-500">Preview not built out for {sectionId} yet.</p>
        </div>
      )}
    </>
  );

  if (isIframeMode) {
    return (
      <div className="w-full bg-white min-h-screen">
        {renderComponent()}
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-gray-100">
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-10 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            Back to Library
          </button>
          <div className="h-4 w-px bg-gray-300 mx-2" />
          <h2 className="text-sm font-semibold text-gray-900">{sectionId}</h2>
        </div>

        <div className="flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
          <button onClick={() => setViewport('desktop')} className={`p-1.5 rounded-md transition-colors ${viewport === 'desktop' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
            <Monitor size={16} />
          </button>
          <button onClick={() => setViewport('tablet')} className={`p-1.5 rounded-md transition-colors ${viewport === 'tablet' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
            <Tablet size={16} />
          </button>
          <button onClick={() => setViewport('mobile')} className={`p-1.5 rounded-md transition-colors ${viewport === 'mobile' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
            <Smartphone size={16} />
          </button>
        </div>

        <div className="w-[100px]"></div>
      </header>

      <div className="flex-1 flex overflow-hidden relative">
        <div className={`flex-1 overflow-auto flex justify-center items-start p-8 transition-all duration-300`}>
          {viewport === 'desktop' ? (
            <div 
              className="bg-white shadow-xl border border-gray-200 transition-all duration-300 flex flex-col text-gray-900 rounded-lg w-full max-w-full overflow-y-auto"
              style={{ minHeight: '400px' }}
            >
              {renderComponent()}
            </div>
          ) : (
            <iframe 
              src={`/?section=${sectionId}&iframeMode=true`}
              className="bg-white shadow-xl border border-gray-200 transition-all duration-300 rounded-lg"
              style={{
                width: viewport === 'tablet' ? '768px' : '375px',
                height: '100%',
                minHeight: '800px'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
