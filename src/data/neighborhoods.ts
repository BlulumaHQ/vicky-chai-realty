export type Neighborhood = {
  slug: string;
  name: string;
  city: string;
  tagline: string;
  description: string;
  image: string;
};

export const neighborhoods: Neighborhood[] = [
  {
    slug: "richmond",
    name: "Richmond",
    city: "British Columbia",
    tagline: "Family living, world-class schools, and global culture.",
    description:
      "Richmond is a thriving multicultural city offering excellent schools, parks, dining, and convenient access to YVR and Vancouver. A long-standing favourite for families and investors alike.",
    image:
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1400&q=70",
  },
  {
    slug: "steveston",
    name: "Steveston",
    city: "Richmond",
    tagline: "Historic waterfront village with a relaxed lifestyle.",
    description:
      "Boutiques, fishing wharves, and ocean views define Steveston — one of Richmond's most coveted family neighbourhoods.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=70",
  },
  {
    slug: "broadmoor",
    name: "Broadmoor",
    city: "Richmond",
    tagline: "Quiet, established, premier school catchments.",
    description:
      "Mature trees, generous lots, and access to top-rated schools make Broadmoor a perennial favourite for families upgrading into Richmond.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=70",
  },
  {
    slug: "west-cambie",
    name: "West Cambie",
    city: "Richmond",
    tagline: "Modern condos, transit access, vibrant dining.",
    description:
      "A dynamic, walkable neighbourhood ideal for first-time buyers, professionals, and investors seeking new construction with strong rental demand.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=70",
  },
  {
    slug: "vancouver-west",
    name: "Vancouver West",
    city: "British Columbia",
    tagline: "Iconic neighbourhoods, ocean and mountain views.",
    description:
      "From UBC and Kitsilano to Shaughnessy, Vancouver's West Side offers premier real estate with exceptional long-term value.",
    image:
      "https://images.unsplash.com/photo-1609825488888-3a766db05542?auto=format&fit=crop&w=1400&q=70",
  },
];
