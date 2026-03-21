export interface Project {
  slug: string;
  title: string;
  
  // Hero Section
  heroImage: string;
  heroTitle: string;
  foundedYear?: string;
  tagline: string;
  
  // Introduction Section
  introTitle: string;
  introDescription: string;
  
  // Challenge Section
  challengeTitle: string;
  challengeDescription: string;
  
  // Photo Gallery (horizontal scroll)
  galleryImages: string[];
  
  // Solution Section
  solutionTitle: string;
  solutionDescription: string;
  
  // Testimonial
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  
  // Gallery thumbnail data (for work page)
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  thumbnailImageWidth: number;
  thumbnailImageHeight: number;
  thumbnailImageLeft: number;
  thumbnailImageTop: number;
}

export const projects: Project[] = [
  {
    slug: "2faces",
    title: "2FACES",
    
    // Hero
    heroImage: "/2faces-hero.jpg",
    heroTitle: "2FACES",
    foundedYear: "2021",
    tagline: "CLOTHING CURATED FOR TALENTS",
    
    // Introduction
    introTitle: "Who is 2FACES?",
    introDescription: "2FACES is a streetwear brand founded in 2021, dedicated to creating unique pieces that represent the duality of creative expression. Each garment tells a story of contrasts - tradition meets innovation, comfort meets style.",
    
    // Challenge
    challengeTitle: "The Challenge",
    challengeDescription: "2FACES needed a visual identity that would capture their brand essence and showcase their unique clothing line to a growing audience of creatives and artists.",
    
    // Gallery
    galleryImages: [
      "/2faces-1.jpg",
      "/2faces-2.jpg",
      "/2faces-3.jpg",
      "/2faces-4.jpg",
      "/2faces-5.jpg",
    ],
    
    // Solution
    solutionTitle: "How We Did It",
    solutionDescription: "We created a photoshoot that blended urban environments with vintage aesthetics. Using natural lighting and candid moments, we captured the essence of the brand.",
    
    // Testimonial
    testimonial: {
      quote: "Jalen captured exactly what 2FACES represents. The photos don't just show our clothes, they tell our story.",
      author: "Marcus Chen",
      role: "Founder, 2FACES",
    },
    
    // Thumbnail for gallery
    thumbnail: "/work1.jpg",
    thumbnailWidth: 358.38,
    thumbnailHeight: 321,
    thumbnailImageWidth: 427,
    thumbnailImageHeight: 320,
    thumbnailImageLeft: 0,
    thumbnailImageTop: 1,
  },
  {
    slug: "trents-m2",
    title: "Trent's M2",
    
    heroImage: "/m2-hero.jpg",
    heroTitle: "TRENT'S M2",
    tagline: "AUTOMOTIVE PHOTOGRAPHY",
    
    introTitle: "The Owner",
    introDescription: "Trent is a car enthusiast who wanted to showcase his BMW M2 in a way that captured both its performance capabilities and elegant design.",
    
    challengeTitle: "The Challenge",
    challengeDescription: "Create automotive photography that stands out in a saturated market. Highlight the M2's aggressive lines while maintaining editorial quality.",
    
    galleryImages: [
      "/m2-1.jpg",
      "/m2-2.jpg",
      "/m2-3.jpg",
      "/m2-4.jpg",
    ],
    
    solutionTitle: "How We Did It",
    solutionDescription: "We scouted locations that complemented the car's aesthetic. Shot during golden hour to capture dramatic lighting.",
    
    testimonial: {
      quote: "These photos exceeded my expectations. Jalen understood the assignment perfectly.",
      author: "Trent Williams",
      role: "BMW M2 Owner",
    },
    
    thumbnail: "/work2.jpg",
    thumbnailWidth: 246.25,
    thumbnailHeight: 220.6,
    thumbnailImageWidth: 247,
    thumbnailImageHeight: 329,
    thumbnailImageLeft: -0.38,
    thumbnailImageTop: -55,
  },
  {
    slug: "ny-photoshoot",
    title: "NY Photoshoot",
    
    heroImage: "/ny-hero.jpg",
    heroTitle: "NY PHOTOSHOOT",
    tagline: "STREET PHOTOGRAPHY SERIES",
    
    introTitle: "The Project",
    introDescription: "A three-day street photography series documenting the energy, diversity, and raw beauty of New York City.",
    
    challengeTitle: "The Challenge",
    challengeDescription: "Capture the essence of NYC in a fresh and authentic way. Show the real New York beyond the tourist spots.",
    
    galleryImages: [
      "/ny-1.jpg",
      "/ny-2.jpg",
      "/ny-3.jpg",
      "/ny-4.jpg",
      "/ny-5.jpg",
    ],
    
    solutionTitle: "How We Did It",
    solutionDescription: "Focused on candid moments and genuine interactions. Explored neighborhoods from Brooklyn to the Bronx.",
    
    testimonial: {
      quote: "This series perfectly captures the spirit of NYC. Real, unfiltered, beautiful.",
      author: "Sarah Martinez",
      role: "Art Director",
    },
    
    thumbnail: "/work3.jpg",
    thumbnailWidth: 358.38,
    thumbnailHeight: 321,
    thumbnailImageWidth: 358,
    thumbnailImageHeight: 477,
    thumbnailImageLeft: 0.38,
    thumbnailImageTop: -59,
  },
  // Add more projects here...
];