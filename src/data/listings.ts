// Real listings extracted from rew.ca for Vicky Chai (RE/MAX Westcoast).
// CMS-ready structure: replace this static export with a fetcher
// (Supabase, custom CMS, or CREA DDF) without changing components.

export type Listing = {
  id: string;
  slug: string;
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
  mlsNumber?: string;
  description: string;
  highlights: string[];
  image: string;
  images: string[];
  sourceUrl: string;
};

const rew = (id: string, file: string) =>
  `https://assets-listings.rew.ca/listing/brc_idx_rew/${id}/${file}.jpeg?auto=format&fit=crop&w=1600&h=1000&q=80`;

export const featuredListings: Listing[] = [
  {
    id: "berton-110",
    slug: "110-5728-berton-avenue",
    status: "active",
    price: "$1,038,800",
    address: "110 – 5728 Berton Avenue",
    neighborhood: "University (UBC)",
    city: "Vancouver",
    beds: 2,
    baths: 2,
    sqft: 940,
    propertyType: "Apartment / Condo",
    description:
      "A bright and beautifully appointed two-bedroom residence in the heart of UBC's University neighbourhood. Thoughtful layout, premium finishes, and an unbeatable walk-to-campus location ideal for families, professionals, or long-term investors.",
    highlights: [
      "Walk to UBC campus, parks, and shops",
      "Open-concept living with floor-to-ceiling windows",
      "Two full bathrooms and primary suite layout",
      "Secure parking and well-managed building",
    ],
    image: rew("263115644", "00_8d841cdd4b10e2c4dea377426115ea08"),
    images: [
      rew("263115644", "00_8d841cdd4b10e2c4dea377426115ea08"),
    ],
    sourceUrl:
      "https://www.rew.ca/properties/110-5728-berton-avenue-vancouver-bc",
  },
  {
    id: "adams-6040",
    slug: "6040-adams-place",
    status: "active",
    price: "$2,499,000",
    address: "6040 Adams Place",
    neighborhood: "Granville",
    city: "Richmond",
    beds: 5,
    baths: 5,
    sqft: 3256,
    lotSize: "50 x 100 ft",
    propertyType: "House",
    description:
      "An exceptional 5-bedroom family home set on a generous lot in Richmond's sought-after Granville neighbourhood. Spacious principal rooms, a chef-style kitchen, and an inviting backyard make this a turn-key residence for growing families.",
    highlights: [
      "5 bedrooms and 5 bathrooms across 3,256 sq ft",
      "Quiet, family-friendly cul-de-sac location",
      "Top-ranked Richmond school catchment",
      "Spacious 50 x 100 ft lot with private yard",
    ],
    image: rew("263137273", "00_7a1474cf771137efe6db9f1818cf0b83"),
    images: [
      rew("263137273", "00_7a1474cf771137efe6db9f1818cf0b83"),
      rew("263137273", "00_fe6f50e2c84b2ecda81ab70e69b13512"),
      rew("263137273", "00_a13663374ffd55a4147d7e2ddb2c6457"),
      rew("263137273", "00_20eb544ac5c2cb522acd50a664b70d1c"),
      rew("263137273", "00_e82dd528937611a8a0c722b2d784613c"),
      rew("263137273", "00_2935badbf7a9a8a1cc140e4355bae4bc"),
      rew("263137273", "00_4d5cd598a922ef8bee04cb74ac15d9b9"),
      rew("263137273", "00_e6ba18a279786110a24dc35b3b85cd63"),
    ],
    sourceUrl: "https://www.rew.ca/properties/6040-adams-place-richmond-bc",
  },
];

export const soldListings: Listing[] = [
  {
    id: "alexandra-227",
    slug: "227-9551-alexandra-road",
    status: "sold",
    price: "$548,000",
    address: "227 – 9551 Alexandra Road",
    neighborhood: "West Cambie",
    city: "Richmond",
    beds: 1,
    baths: 1,
    sqft: 638,
    propertyType: "Apartment / Condo",
    description:
      "A well-located one-bedroom condo in Richmond's West Cambie neighbourhood. Successfully represented by Vicky Chai.",
    highlights: [
      "Central West Cambie location",
      "Walk to shops, dining, and transit",
      "Successfully represented on the listing side",
    ],
    image: rew("263097125", "00_a5bb4554a1d7975a3f9c3a58b58ed57c"),
    images: [
      rew("263097125", "00_a5bb4554a1d7975a3f9c3a58b58ed57c"),
    ],
    sourceUrl:
      "https://www.rew.ca/insights/19015460/227-9551-alexandra-road-richmond-bc",
  },
];

export const allListings: Listing[] = [...featuredListings, ...soldListings];

export const getListingBySlug = (slug: string): Listing | undefined =>
  allListings.find((l) => l.slug === slug);
