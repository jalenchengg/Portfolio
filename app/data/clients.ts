export const clients = {
  blklst: {
    name: "BLKLST",
    description: "BLKLST is a clothing brand rooted in car culture, built around a darker, tougher aesthetic. Designed for those who live the lifestyle.",
    photos: [
      "/BLKLST/blklst1.jpg",
      "/BLKLST/blklst2.jpg",
      "/BLKLST/blklst3.jpg",
      "/BLKLST/blklst4.jpg",
      "/BLKLST/blklst5.jpg",
      "/BLKLST/blklst6.jpg",
      "/BLKLST/blklst7.jpg",
      "/BLKLST/blklst8.jpg",
      "/BLKLST/blklst9.jpg",
      "/BLKLST/blklst10.jpg",
    ],
  },
  adidas: {
    name: "Drift",
    description: "Drift is a Los Angeles based clothing brand focused on simple, everyday pieces with a clean, laid-back feel.",
    photos: [
      "/Drift/drift2.jpg",
      "/Drift/drift9.jpg",
      "/Drift/drift11.jpg",
      "/Drift/drift4.jpg",
      "/Drift/drift5.jpg",
      "/Drift/drift6.jpg",
      "/Drift/drift10.jpg",
      "/Drift/drift1.jpg",
    ],
  },
  sony: {
    name: "Sony",
    description: "Precision imaging and cinematic technology.",
    photos: [],
  },
  canon: {
    name: "Canon",
    description: "Photography tools built for professionals.",
    photos: [],
  },
};

export type ClientKey = keyof typeof clients;
export type Client = typeof clients[ClientKey];