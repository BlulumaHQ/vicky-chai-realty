// Real listings extracted from rew.ca for Vicky Chai (RE/MAX Westcoast).
// Architecture is CMS-ready: replace this static export with a fetcher
// (Supabase, custom CMS, or CREA DDF) without changing components.

export type Listing = {
  id: string;
  status: "active" | "sold";
  price: string;
  address: string;
  neighborhood: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSize?: string;
  propertyType: string;
  mls?: string;
  image: string;
  sourceUrl: string;
};

export const featuredListings: Listing[] = [
  {
    id: "berton-110",
    status: "active",
    price: "$1,038,800",
    address: "110 – 5728 Berton Avenue",
    neighborhood: "University (UBC)",
    city: "Vancouver",
    beds: 2,
    baths: 2,
    sqft: 940,
    propertyType: "Apt / Condo",
    mls: "R2-IDX",
    image:
      "https://assets-listings.rew.ca/listing/brc_idx_rew/263115644/00_8d841cdd4b10e2c4dea377426115ea08.jpeg?auto=format&fit=crop&w=1200&h=900",
    sourceUrl:
      "https://www.rew.ca/properties/110-5728-berton-avenue-vancouver-bc",
  },
];

export const soldListings: Listing[] = [
  {
    id: "alexandra-227",
    status: "sold",
    price: "$548,000",
    address: "227 – 9551 Alexandra Road",
    neighborhood: "West Cambie",
    city: "Richmond",
    beds: 1,
    baths: 1,
    sqft: 638,
    propertyType: "Apt / Condo",
    image:
      "https://assets-listings.rew.ca/listing/brc_idx_rew/263097125/00_a5bb4554a1d7975a3f9c3a58b58ed57c.jpeg?auto=format&fit=crop&w=1200&h=900",
    sourceUrl:
      "https://www.rew.ca/insights/19015460/227-9551-alexandra-road-richmond-bc",
  },
];
