
import type { NewsArticle } from "@/type/news";

export const dholeraNews: NewsArticle[] = [
  {
    id: 1,
    slug: "dholera-news-tata-semiconductor-plant-construction-reaches-50-percent",
    title:
      "Dholera News: Tata Semiconductor Plant Construction Reaches 50% Completion",
    category: "Dholera Smart City",
    image: "/images/news/tata-semiconductor.jpg",
    date: "April 13, 2026",
    readTime: "3 mins read",
    excerpt:
      "The Tata semiconductor manufacturing project at Dholera is an important development for India's semiconductor ecosystem.",
    featured: true,
    content: [
      {
        heading: "Dholera Semiconductor Project Overview",
        paragraphs: [
          "Dholera Special Investment Region is being developed as an industrial destination in Gujarat. Semiconductor manufacturing is one of the major sectors attracting attention to the region.",
          "The Tata semiconductor project has the potential to support industrial development, create employment opportunities and encourage supporting businesses around the manufacturing ecosystem.",
        ],
      },
      {
        heading: "Infrastructure and Investment Opportunities",
        paragraphs: [
          "Industrial development depends on reliable infrastructure, connectivity, utilities and a supporting supplier network. These factors are important when evaluating the long-term prospects of an industrial destination.",
          "Investors should review official project announcements, development timelines, applicable land-use rules and the details of any property before making an investment decision.",
        ],
        points: [
          "Industrial and manufacturing ecosystem",
          "Supporting supplier and service businesses",
          "Infrastructure and regional connectivity",
          "Long-term development potential",
        ],
      },
      {
        heading: "What Investors Should Know",
        paragraphs: [
          "Infrastructure announcements do not guarantee property appreciation or investment returns. Buyers should independently verify project approvals, title documents, land-use permissions and the status of proposed developments.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "dholera-news-220-kmph-semi-high-speed-rail",
    title:
      "Dholera News: 220 kmph Semi High-Speed Rail to Transform Gujarat's Biggest Smart City",
    category: "Dholera Smart City",
    image: "/images/news/dholera-railway.jpg",
    date: "April 13, 2026",
    readTime: "1 min read",
    excerpt:
      "Rail connectivity is an important factor in the long-term development of Dholera and surrounding economic areas.",
    content: [
      {
        heading: "Rail Connectivity and Dholera",
        paragraphs: [
          "Transport connectivity can play a significant role in supporting business activity, commuting and regional economic development.",
          "Proposed or planned rail projects should be evaluated using official announcements and the latest information from the relevant authorities.",
        ],
      },
      {
        heading: "Potential Regional Benefits",
        paragraphs: [
          "Improved transport links may help connect employment centres, industrial facilities and urban areas. Actual benefits depend on the approved route, construction progress and operational timelines.",
        ],
        points: [
          "Regional transport connectivity",
          "Access to employment and business centres",
          "Potential support for industrial development",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "dholera-semiconductor-hub-free-trade-zone-gujarat",
    title:
      "Dholera Semiconductor Hub: Global Chip Giants Seek Free Trade Zone in Gujarat",
    category: "Dholera Smart City",
    image: "/images/news/chip-free-trade-zone.jpg",
    date: "April 13, 2026",
    readTime: "2 mins read",
    excerpt:
      "Semiconductor manufacturing, logistics and supporting industries are important themes in Dholera's industrial development.",
    content: [
      {
        heading: "Semiconductor Manufacturing Ecosystem",
        paragraphs: [
          "A semiconductor ecosystem includes manufacturing, specialised suppliers, logistics, utilities and technical services. Supporting infrastructure is important for attracting and operating advanced manufacturing facilities.",
          "Any proposed free trade zone or new industrial facility should be verified through official government and project announcements.",
        ],
      },
      {
        heading: "What Could This Mean for Businesses?",
        paragraphs: [
          "Industrial expansion can create demand for a range of supporting services. However, individual business opportunities depend on actual investment, approvals, infrastructure readiness and market conditions.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "gujarat-first-sounding-rocket-launched-from-dholera",
    title:
      "Gujarat's First Sounding Rocket Launched from Dholera by Ahmedabad Startup: A Historic",
    category: "Dholera Smart City",
    image: "/images/news/sounding-rocket.jpg",
    date: "April 13, 2026",
    readTime: "2 mins read",
    excerpt:
      "A reported aerospace milestone highlights interest in innovation and technology-led activity in Gujarat.",
    content: [
      {
        heading: "Aerospace and Technology in Gujarat",
        paragraphs: [
          "Aerospace research and private technology ventures can contribute to the development of specialised industrial ecosystems.",
          "Specific launch details, organisations involved and project milestones should be confirmed through reliable official sources before publication.",
        ],
      },
      {
        heading: "Why Innovation Matters",
        paragraphs: [
          "Innovation-led businesses can create opportunities for technical services, manufacturing suppliers and skilled employment. Their long-term impact depends on continued investment and successful development.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "dholera-smart-city-semiconductor-fab-airport-investment-update",
    title:
      "Dholera Smart City 2026 Update: Semiconductor Fab, Airport & Investment Boom Explained",
    category: "Dholera Smart City",
    image: "/images/news/semiconductor-fab.jpg",
    date: "April 13, 2026",
    readTime: "1 min read",
    excerpt:
      "An overview of industrial development, airport infrastructure and investment considerations in Dholera.",
    content: [
      {
        heading: "Dholera Development Overview",
        paragraphs: [
          "Dholera's development includes planning for industrial areas, urban infrastructure and regional connectivity.",
          "Project status can change over time. Readers should consult official sources for current construction progress, commissioning dates and infrastructure updates.",
        ],
      },
      {
        heading: "Evaluating Investment Opportunities",
        paragraphs: [
          "Potential investors should consider legal approvals, infrastructure availability, location, ownership documents and the intended use of a property before purchasing land.",
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "gujarat-indo-taiwan-industrial-park-sanand-dholera",
    title:
      "Gujarat to Develop Indo-Taiwan Industrial Park in Sanand-Dholera, Aiming ₹1,000 Crore FDI and 12,000",
    category: "Dholera Smart City",
    image: "/images/news/industrial-park.jpg",
    date: "April 13, 2026",
    readTime: "1 min read",
    excerpt:
      "Industrial cooperation and manufacturing investments are key topics for Gujarat's industrial development.",
    content: [
      {
        heading: "Industrial Cooperation in Gujarat",
        paragraphs: [
          "Industrial parks can bring manufacturing businesses, suppliers and supporting services into a shared regional ecosystem.",
          "Investment figures, proposed employment numbers and project locations should be confirmed against official announcements before they are presented as established facts.",
        ],
      },
      {
        heading: "Regional Development Considerations",
        paragraphs: [
          "The potential effect of an industrial park depends on its final location, approvals, implementation schedule, infrastructure and the companies that ultimately establish operations.",
        ],
      },
    ],
  },

  
];

export function getNewsBySlug(slug: string) {
  return dholeraNews.find((article) => article.slug === slug);
}
