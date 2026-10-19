// export interface DholeraProject {
//   id: number;
//   title: string;
//   slug: string;
//   image: string;
//   description: string;
// }

// export const dholeraProjects: DholeraProject[] = [
//   {
//     id: 1,
//     title: "India’s Smart Industrial Investment Destination",
//     slug: "smart-industrial-investment-destination",
//     image: "/images/projects/industrial-investment.jpg",
//     description:
//       "Explore the growing industrial ecosystem and investment opportunities in Dholera.",
//   },

//   {
//     id: 2,
//     title: "Residential Plot in Dholera SIR",
//     slug: "residential-plot-in-dholera-sir",
//     image: "/images/projects/residential-plot-dholera.jpg",
//     description:
//       "Discover residential plot opportunities in the Dholera Special Investment Region.",
//   },

//   {
//     id: 3,
//     title: "Master Plan & Investment Opportunity",
//     slug: "master-plan-investment-opportunity",
//     image: "/images/projects/master-plan.jpg",
//     description:
//       "Understand the Dholera master plan and explore strategic real estate opportunities.",
//   },

//   {
//     id: 4,
//     title: "India’s Future Investment Destination",
//     slug: "future-investment-destination",
//     image: "/images/projects/future-investment.jpg",
//     description:
//       "Explore Dholera as an emerging destination for future-focused real estate investment.",
//   },

//   {
//     id: 5,
//     title: "Multipurpose NA Plot on Expressway",
//     slug: "multipurpose-na-plot-expressway",
//     image: "/images/projects/na-plot-expressway.jpg",
//     description:
//       "Explore strategically located multipurpose NA plots with excellent connectivity.",
//   },

//   {
//     id: 6,
//     title: "Premium Residential Plots in Dholera Smart City",
//     slug: "premium-residential-plots-dholera-smart-city",
//     image: "/images/projects/premium-residential-plots.jpg",
//     description:
//       "Premium residential plot opportunities within the developing Dholera Smart City region.",
//   },

//   {
//     id: 7,
//     title: "Residential Plot in Dholera Smart City",
//     slug: "residential-plot-dholera-smart-city",
//     image: "/images/projects/residential-plot-smart-city.jpg",
//     description:
//       "Discover residential land opportunities in and around Dholera Smart City.",
//   },

//   {
//     id: 8,
//     title: "Premium Residential Land in Dholera Smart City",
//     slug: "premium-residential-land-dholera-smart-city",
//     image: "/images/projects/premium-residential-land.jpg",
//     description:
//       "Explore premium residential land options in the Dholera Smart City region.",
//   },

//   {
//     id: 9,
//     title: "Premium Commercial Plot in Dholera Smart City",
//     slug: "premium-commercial-plot-dholera-smart-city",
//     image: "/images/projects/premium-commercial-plot.jpg",
//     description:
//       "Explore commercial plot opportunities in strategically located areas of Dholera.",
//   },
// ];





// export interface ProjectImage {
//   src: string;
//   alt: string;
// }

// export interface ProjectSector {
//   title: string;
//   description?: string;
//   points?: string[];
// }

// export interface ProjectOverview {
//   label: string;
//   value: string;
// }

// export interface DholeraProject {
//   id: number;
//   title: string;
//   slug: string;
//   image: string;
//   description: string;

//   heroImages?: ProjectImage[];
//   introduction?: string[];
//   highlights?: string[];

//   advantages?: ProjectImage[];
//   sections?: ProjectSector[];
//   overview?: ProjectOverview[];
//   masterPlanImages?: ProjectImage[];
// }




export interface ProjectImage {
  src: string;
  alt: string;
  title?: string;
}

export interface ProjectSector {
  title: string;
  description?: string;
  points?: string[];
  conclusion?: string;
}

export interface ProjectOverview {
  label: string;
  value: string;
}

export interface DholeraProject {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;

  heroImages?: ProjectImage[];
  introduction?: string[];
  highlights?: string[];

  advantages?: ProjectImage[];
  sections?: ProjectSector[];
  overview?: ProjectOverview[];
  masterPlanImages?: ProjectImage[];
}



export const dholeraProjects: DholeraProject[] = [
  {
    id: 1,
    title: "India’s Smart Industrial Investment Destination",
    slug: "smart-industrial-investment-destination",
    image: "/images/projects/industrial-investment.jpg",
    description:
      "Explore the industrial ecosystem, infrastructure and investment opportunities in Dholera SIR.",

    heroImages: [
      {
        src: "/images/projects/industrial-investment.jpg",
        alt: "Dholera industrial development",
      },
      {
        src: "/images/projects/residential-plot-dholera.jpg",
        alt: "Dholera residential development",
      },
      {
        src: "/images/projects/master-plan.jpg",
        alt: "Dholera master plan",
      },
      {
        src: "/images/projects/future-investment.jpg",
        alt: "Dholera infrastructure",
      },
    ],

    introduction: [
      "Dholera Special Investment Region (Dholera SIR) is one of India's planned industrial and investment regions, strategically located in Gujarat.",
      "Planned under the Delhi-Mumbai Industrial Corridor (DMIC), Dholera is designed to become a global manufacturing and economic hub, supported by infrastructure, connectivity and investment opportunities.",
    ],

    highlights: [
      "Location: Dholera SIR, Gujarat",
      "Development: Planned industrial and smart city region",
      "Connectivity: Expressway, airport and regional transport infrastructure",
    ],

    advantages: [
      {
        src: "/images/advantages/expressway.jpg",
        alt: "Ahmedabad Dholera Expressway",
      },
      {
        src: "/images/advantages/airport.jpg",
        alt: "Dholera international airport",
      },
      {
        src: "/images/advantages/metro.jpg",
        alt: "Transport connectivity",
      },
      {
        src: "/images/advantages/waterfront.jpg",
        alt: "Waterfront development",
      },
      {
        src: "/images/advantages/knowledge-park.jpg",
        alt: "Knowledge and IT park concept",
      },
      {
        src: "/images/advantages/rail.jpg",
        alt: "Rail connectivity",
      },
    ],

    sections: [
      {
        title: "Key Industrial Opportunities",
        description:
          "Dholera is planned to support multiple industrial and commercial sectors.",
        points: [
          "Heavy engineering and manufacturing",
          "Solar and renewable energy",
          "Pharmaceuticals and research",
          "Food processing and agriculture",
        ],
      },
      {
        title: "World-Class Infrastructure",
        description:
          "The region is planned around modern infrastructure and future-ready urban development.",
        points: [
          "Road and transport connectivity",
          "Industrial and logistics infrastructure",
          "Utilities and supporting services",
          "Smart urban planning",
        ],
      },
      {
        title: "Strategic Location Advantage",
        description:
          "Dholera's location is intended to support industrial connectivity and access to regional markets.",
        points: [
          "Regional road connectivity",
          "Planned airport infrastructure",
          "Access to industrial and logistics networks",
        ],
      },
      {
        title: "Government Support and Development",
        description:
          "Dholera is being developed through planned infrastructure and industrial development initiatives.",
        points: [
          "Industrial infrastructure planning",
          "Infrastructure-led development",
          "Phased urban and industrial growth",
        ],
      },
      {
        title: "Future Growth Potential",
        description:
          "Investment outcomes depend on the specific property, project approvals, development timelines and market conditions.",
      },
    ],

    overview: [
      { label: "Location", value: "Dholera SIR, Gujarat" },
      { label: "Project Type", value: "Industrial and urban development region" },
      { label: "Connectivity", value: "Regional road and planned transport infrastructure" },
    ],

    masterPlanImages: [
      {
        src: "/images/projects/dholera-master-plan.jpg",
        alt: "Dholera SIR master plan",
      },
      {
        src: "/images/projects/dholera-industrial-sectors.jpg",
        alt: "Dholera industrial sectors",
      },
      {
        src: "/images/projects/dholera-investment-overview.jpg",
        alt: "Dholera investment overview",
      },
    ],
  },

  // {
  //   id: 2,
  //   title: "Residential Plot in Dholera SIR",
  //   slug: "residential-plot-in-dholera-sir",
  //   image: "/images/projects/residential-plot-dholera.jpg",
  //   description:
  //     "Explore residential plot information and location details in Dholera SIR.",
  //   heroImages: [
  //     {
  //       src: "/images/projects/residential-plot-dholera.jpg",
  //       alt: "Residential plot in Dholera SIR",
  //     },
  //   ],
  //   introduction: [
  //     "Explore residential plot opportunities in Dholera SIR. Add verified project details, location information and applicable approvals here.",
  //   ],
  //   overview: [
  //     { label: "Location", value: "Dholera SIR, Gujarat" },
  //     { label: "Property Type", value: "Residential plot" },
  //   ],
  // },

  
{
  id: 2,
  title: "FP No. 36, Bavaliyari",
  slug: "fp-no-36-bavaliyari",
  image: "/images/projects/residential-plot-dholera.jpg",
  description:
    "Explore FP No. 36 in Bavaliyari, Dholera SIR, with information about residential zoning, connectivity, infrastructure and property details.",

  heroImages: [
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "FP No. 36 Bavaliyari residential plot",
    },
    {
      src: "/images/projects/industrial-investment.jpg",
      alt: "Residential development in Dholera SIR",
    },
    {
      src: "/images/projects/master-plan.jpg",
      alt: "Premium residential property in Bavaliyari",
    },
    {
      src: "/images/projects/future-investment.jpg",
      alt: "Residential property investment in Dholera",
    },
  ],

  introduction: [
    "FP No. 36, Bavaliyari is presented as a residential plot opportunity in Dholera Special Investment Region, Gujarat.",
    "Explore the property's stated location, proposed residential zoning, transport connectivity and surrounding planned infrastructure. Verify the current land records, approvals and development status before making an investment decision.",
  ],

  highlights: [
    "Location: Village Bavaliyari, Dholera SIR",
    "Property Type: Residential plot",
    "FP Number: 36",
    "TP Scheme: TP 5B",
    "Road Access: Stated 55-meter-wide road",
    "Connectivity: Near the planned Ahmedabad–Dholera Expressway",
  ],

  advantages: [
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Ahmedabad–Dholera Expressway connectivity",
    },
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Dholera International Airport development",
    },
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Multimodal transport hub",
    },
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Freight and logistics connectivity",
    },
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Green and smart infrastructure",
    },
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Knowledge and IT park development",
    },
  ],

  sections: [
    {
      title: "Strategic Location Advantages",
      description:
        "The property's location can be evaluated based on its proximity to planned transport infrastructure and urban development in Dholera SIR.",
      points: [
        "Ahmedabad–Dholera Expressway connectivity",
        "Planned Dholera International Airport",
        "Multimodal transport infrastructure",
        "Freight and logistics connectivity",
        "Planned green spaces and smart infrastructure",
      ],
    },
    {
      title: "Smart Infrastructure & Government Support",
      description:
        "Dholera SIR is planned around modern infrastructure and smart-city development. The availability and completion status of individual facilities should be verified.",
      points: [
        "Planned utility and underground service networks",
        "ICT-based command and control infrastructure",
        "SCADA-based infrastructure monitoring",
        "Planned digital connectivity",
        "Phased infrastructure and urban development",
      ],
    },
    {
      title: "Why Invest in This Plot?",
      description:
        "Evaluate this property based on its location, documented land status, accessibility and suitability for your investment goals. Property appreciation and investment returns are not guaranteed.",
      points: [
        "Stated residential-zone location",
        "Road and regional transport connectivity",
        "Potential access to future urban infrastructure",
        "Opportunity to evaluate long-term land investment",
      ],
    },
    {
      title: "Modern Lifestyle in Dholera",
      description:
        "Dholera's planned urban development aims to support modern living through infrastructure, transport and community facilities.",
      points: [
        "Planned green spaces",
        "Urban utility infrastructure",
        "Transport connectivity",
        "Planned community development",
        "Smart-city infrastructure initiatives",
      ],
    },
    {
      title: "Future Growth Potential",
      description:
        "Future growth depends on infrastructure delivery, land-use permissions, market demand, project timelines and the property's legal status. Independent verification is essential.",
      points: [
        "Regional infrastructure development",
        "Planned industrial and urban growth",
        "Transport and logistics connectivity",
        "Long-term property-market considerations",
      ],
    },
    {
      title: "Why Choose This Property?",
      description:
        "Review the property's documents and location before deciding whether it meets your requirements.",
      points: [
        "Stated location in Village Bavaliyari",
        "FP No. 36",
        "Stated TP Scheme 5B",
        "Residential-zone designation to be verified",
        "Road access and plot dimensions to be confirmed",
      ],
    },
    {
      title: "Property Details",
      description:
        "The following details are based on the supplied project information and should be confirmed against the official land records and approved plans.",
      points: [
        "Location: Village Bavaliyari, Dholera SIR",
        "Zone: Residential, subject to official verification",
        "FP Number: 36",
        "Survey Number: 44, subject to verification",
        "TP Scheme: TP 5B, subject to verification",
        "Stated Plot Size: Approximately 9,378 square yards",
        "Stated Area: Approximately 84,402 square feet",
        "Stated Area: Approximately 7,047 square metres",
        "Stated Road Access: 55-meter-wide road",
        "Expressway proximity: Exact distance to be verified",
      ],
    },
  ],

  overview: [
    {
      label: "Location",
      value: "Village Bavaliyari, Dholera SIR, Gujarat",
    },
    {
      label: "Property Type",
      value: "Residential plot",
    },
    {
      label: "FP Number",
      value: "36",
    },
    {
      label: "TP Scheme",
      value: "TP 5B, subject to verification",
    },
    {
      label: "Survey Number",
      value: "44, subject to verification",
    },
    {
      label: "Stated Plot Size",
      value: "Approximately 9,378 square yards",
    },
  ],

  masterPlanImages: [
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Dholera SIR master plan and plot location",
    },
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Residential zone land-use specifications",
    },
  ],
},


{
  id: 3,
  title: "Master Plan & Investment Opportunity",
  slug: "master-plan-investment-opportunity",
  image: "/images/projects/master-plan.jpg",
  description:
    "Dholera Smart City is one of India's most ambitious and futuristic urban development projects, designed to redefine the way modern cities function.",

  heroImages: [
    {
      src: "/images/projects/master-plan.jpg",
      alt: "Dholera Smart City master plan",
    },
    {
      src: "/images/projects/future-investment.jpg",
      alt: "Dholera Smart City urban development",
    },
    {
      src: "/images/projects/residential-plot-dholera.jpg",
      alt: "Dholera residential development",
    },
    {
      src: "/images/projects/premium-residential-land.jpg",
      alt: "Dholera Smart City infrastructure",
    },
  ],

  introduction: [
    "Dholera Smart City is one of India's most ambitious and futuristic urban development projects, designed to redefine the way modern cities function.",
    "Located in Gujarat, Dholera is being developed as a part of the Delhi-Mumbai Industrial Corridor (DMIC), making it a strategic hub for industrial growth, infrastructure development, and smart living.",
    "The master plan of Dholera Smart City focuses on creating a world-class urban ecosystem that integrates advanced technology, sustainable infrastructure, and high-quality living standards. With a vision to become a global manufacturing and trading hub, Dholera is attracting investors, businesses, and homebuyers from across the country.",
  ],

  highlights: [
    "Location: Dholera Smart City, Gujarat",
    "Development: Planned smart city and industrial region",
    "Connectivity: Expressways and planned transport infrastructure",
    "Focus: Industrial growth, residential development and smart infrastructure",
  ],

  advantages: [
    {
      src: "/images/advantages/construction-building.jpg",
      alt: "SPV building fourth floor column progress",
      title: "SPV Building 4th Floor Column Progress",
    },
    {
      src: "/images/advantages/reinforcement-slab.jpg",
      alt: "Reinforcement for BEC slab",
      title: "Reinforcement for BEC Slab",
    },
    {
      src: "/images/advantages/compound-wall.jpg",
      alt: "Dholera compound wall construction",
      title: "Compound Wall",
    },
    {
      src: "/images/advantages/bec-shuttering.jpg",
      alt: "BEC second slab shuttering",
      title: "BEC 2nd Slab Shuttering",
    },
    {
      src: "/images/advantages/bec-auditorium.jpg",
      alt: "BEC auditorium construction",
      title: "BEC - Auditorium",
    },
    {
      src: "/images/advantages/reflecting-pool.jpg",
      alt: "Reflecting pool rubble soling work",
      title: "Reflecting Pool - Rubble Soling",
    },
  ],

  sections: [
    {
      title: "Key Highlights of Dholera Smart City",
      description:
        "The development of Dholera Smart City is based on cutting-edge planning and modern urban concepts. The city is divided into well-structured zones such as residential, commercial, industrial, and recreational areas, ensuring balanced growth and efficient land utilization.",
      points: [
        "Well-structured residential, commercial and industrial zones",
        "Modern urban planning and efficient land utilization",
        "Plug-and-play infrastructure designed to support businesses",
        "High-speed connectivity, wide roads, underground utilities and smart traffic management systems",
      ],
    },
    {
      title: "World-Class Infrastructure",
      description:
        "Dholera Smart City is being developed with state-of-the-art infrastructure to meet global standards. Some of the major infrastructure features include:",
      points: [
        "6–10 lane expressways and wide internal roads",
        "Underground drainage and sewage systems",
        "24/7 water and power supply",
        "Smart grids and renewable energy integration",
        "ICT-enabled services for governance and security",
      ],
      conclusion:
        "The city also includes advanced systems like automated waste management, real-time monitoring, and intelligent transport systems, making it a truly smart city.",
    },
    {
      title: "Strategic Location & Connectivity",
      description:
        "Dholera enjoys excellent connectivity through multiple transport networks. It is connected to major cities like Ahmedabad via expressways and is close to the upcoming international airport. The city is also part of major freight corridors, enhancing its industrial and logistics potential.",
      conclusion:
        "This strategic location makes Dholera an ideal destination for businesses looking for seamless connectivity and growth opportunities.",
    },
    {
      title: "Investment Potential",
      description:
        "Dholera Smart City is rapidly emerging as a top investment destination in India. With strong government backing and rapid infrastructure development, property prices are expected to appreciate significantly over time.",
      points: [
        "Early-stage investment opportunities",
        "High ROI potential",
        "Growing demand for residential and commercial spaces",
        "Government-supported development",
      ],
      conclusion:
        "Whether you are looking for residential plots, commercial land, or industrial investment, Dholera offers a wide range of options to suit different needs.",
    },
    {
      title: "Sustainable & Smart Living",
      description:
        "The master plan emphasizes sustainability and eco-friendly development. The city integrates green spaces, water conservation systems, and renewable energy solutions to ensure a clean and healthy environment.",
      points: [
        "Smart homes and digital services",
        "Efficient public transport systems",
        "Green parks and open spaces",
        "Safe and secure urban environment",
      ],
      conclusion:
        "This makes Dholera not just an investment opportunity but also a place to live and work.",
    },
    {
      title: "Future Growth & Development",
      description:
        "Dholera Smart City is still in its development phase, but rapid progress is being made across sectors. With the establishment of industries, IT hubs, and commercial centers, the city is expected to generate thousands of jobs and economic opportunities.",
      conclusion:
        "The government's long-term vision ensures continuous growth, making Dholera a future-ready city with global standards.",
    },
  ],

  overview: [
    {
      label: "Location",
      value: "Dholera Smart City, Gujarat",
    },
    {
      label: "Project Type",
      value: "Smart City and Urban Development",
    },
    {
      label: "Development Focus",
      value: "Residential, Commercial and Industrial Zones",
    },
    {
      label: "Infrastructure",
      value: "Roads, Utilities and Smart City Systems",
    },
  ],

  masterPlanImages: [
    {
      src: "/images/projects/dholera-land-use-plan.jpg",
      alt: "Dholera Smart City land use plan",
    },
    {
      src: "/images/projects/dholera-plot-sizes.jpg",
      alt: "Dholera Smart City plot sizes and zoning plan",
    },
  ],
},
  

{
  id: 4,
  title: "India’s Future Investment Destination",
  slug: "future-investment-destination",
  image: "/images/projects/future-investment.jpg",
  description:
    "Dholera Smart City is a planned urban development project in Gujarat focused on modern infrastructure, industrial growth and future-ready living.",

  heroImages: [
    {
      src: "/images/projects/future-investment.jpg",
      alt: "Dholera Smart City development",
    },
    {
      src: "/images/projects/dholera-master-plan.jpg",
      alt: "Dholera Smart City master plan",
    },
    {
      src: "/images/projects/dholera-land-use-plan.jpg",
      alt: "Dholera land use and zoning plan",
    },
    {
      src: "/images/projects/premium-residential-land.jpg",
      alt: "Dholera residential development",
    },
    {
      src: "/images/projects/dholera-industrial-sectors.jpg",
      alt: "Dholera industrial sectors",
    },
  ],

  introduction: [
    "Dholera Smart City is a planned urban development project in Gujarat, India, designed to support industrial growth, modern infrastructure and sustainable urban living.",
    "The project forms part of the Delhi-Mumbai Industrial Corridor (DMIC) initiative and is planned with industrial, residential, commercial and supporting infrastructure zones.",
    "Dholera's development plan includes transport connectivity, utilities, industrial infrastructure and smart-city facilities intended to support long-term regional development.",
  ],

  highlights: [
    "Location: Dholera Special Investment Region, Gujarat",
    "Project Type: Planned smart city and industrial development",
    "Development Focus: Industrial, residential and commercial zones",
    "Infrastructure: Roads, utilities and planned transport connectivity",
    "Planning: Integrated urban and industrial development",
  ],

  advantages: [
    {
      src: "/images/advantages/expressway.jpg",
      alt: "Ahmedabad Dholera Expressway",
      title: "Ahmedabad–Dholera Expressway",
    },
    {
      src: "/images/advantages/airport.jpg",
      alt: "Dholera International Airport",
      title: "Dholera International Airport",
    },
    {
      src: "/images/advantages/metro.jpg",
      alt: "Transport connectivity infrastructure",
      title: "Metro Station Connectivity",
    },
    {
      src: "/images/advantages/waterfront.jpg",
      alt: "Waterfront development",
      title: "Waterfront Side Location",
    },
    {
      src: "/images/advantages/knowledge-park.jpg",
      alt: "Knowledge and IT park development",
      title: "Knowledge and IT Park Zone",
    },
    {
      src: "/images/advantages/rail.jpg",
      alt: "Rail and public transport infrastructure",
      title: "Urban Ground Metro",
    },
  ],

  sections: [
    {
      title: "Why Dholera Smart City?",
      description:
        "Dholera Smart City is planned as a major urban and industrial development region with integrated infrastructure and dedicated development zones.",
      points: [
        "Planned industrial and residential development",
        "Integrated infrastructure planning",
        "Regional transport and logistics connectivity",
        "Dedicated commercial and industrial zones",
        "Long-term urban development potential",
      ],
    },
    {
      title: "Strategic Location Advantages",
      description:
        "The development plan emphasizes regional connectivity and access to infrastructure supporting industrial and urban growth.",
      points: [
        "Ahmedabad–Dholera Expressway connectivity",
        "Planned airport infrastructure",
        "Freight and logistics connectivity",
        "Multimodal transport planning",
        "Industrial and commercial development zones",
      ],
    },
    {
      title: "World-Class Infrastructure",
      description:
        "Dholera's planned infrastructure is intended to support industrial operations, urban services and future development.",
      points: [
        "Road networks and internal streets",
        "Water supply and drainage infrastructure",
        "Power distribution and utility networks",
        "Information and communication technology infrastructure",
        "Planned public facilities and urban services",
      ],
    },
    {
      title: "Industrial Development Opportunities",
      description:
        "The planned industrial region is intended to accommodate a range of manufacturing and supporting industries.",
      points: [
        "Engineering and manufacturing",
        "Electronics and semiconductor-related industries",
        "Renewable energy",
        "Pharmaceuticals and research",
        "Food processing and supporting industries",
      ],
    },
    {
      title: "Infrastructure Development & Connectivity",
      description:
        "Connectivity and supporting infrastructure are important elements of Dholera's planned development.",
      points: [
        "Regional road connections",
        "Planned airport connectivity",
        "Freight and logistics infrastructure",
        "Internal road networks",
        "Integrated urban utility planning",
      ],
    },
    {
      title: "Investment Opportunities",
      description:
        "Dholera offers different types of potential property and business opportunities. Investors should assess each property independently.",
      points: [
        "Residential land opportunities",
        "Commercial property opportunities",
        "Industrial land opportunities",
        "Location-specific infrastructure access",
        "Verification of ownership, approvals and applicable development rules",
      ],
    },
    {
      title: "Future Growth Potential",
      description:
        "Future development will depend on infrastructure delivery, industrial activity, project implementation and market conditions.",
      points: [
        "Planned urban expansion",
        "Industrial ecosystem development",
        "Supporting infrastructure",
        "Residential and commercial development",
      ],
      conclusion:
        "Property appreciation and investment returns are not guaranteed. Verify project approvals, land-use permissions, ownership and current development status before making an investment.",
    },
  ],

  overview: [
    {
      label: "Location",
      value: "Dholera SIR, Gujarat",
    },
    {
      label: "Project Type",
      value: "Planned Smart City Development",
    },
    {
      label: "Development Focus",
      value: "Industrial, Residential and Commercial Zones",
    },
    {
      label: "Connectivity",
      value: "Road, Airport and Freight Infrastructure Planning",
    },
    {
      label: "Planning",
      value: "Integrated Urban and Industrial Development",
    },
  ],

  masterPlanImages: [
    {
      src: "/images/projects/dholera-master-plan.jpg",
      alt: "Dholera Smart City master plan",
    },
    {
      src: "/images/projects/dholera-land-use-plan.jpg",
      alt: "Dholera land use plan",
    },
    {
      src: "/images/projects/dholera-plot-sizes.jpg",
      alt: "Dholera plot sizes and zoning plan",
    },
    {
      src: "/images/projects/dholera-industrial-sectors.jpg",
      alt: "Dholera prospective industrial sectors",
    },
    {
      src: "/images/projects/dholera-investment-overview.jpg",
      alt: "Dholera investment and development overview",
    },
    {
      src: "/images/projects/dholera-infrastructure.jpg",
      alt: "Dholera infrastructure planning",
    },
    {
      src: "/images/projects/dholera-connectivity.jpg",
      alt: "Dholera transport and connectivity plan",
    },
    {
      src: "/images/projects/dholera-development-plan.jpg",
      alt: "Dholera development planning",
    },
    {
      src: "/images/projects/dholera-industrial-map.jpg",
      alt: "Dholera industrial development map",
    },
    {
      src: "/images/projects/dholera-airport-plan.jpg",
      alt: "Dholera airport planning",
    },
    {
      src: "/images/projects/dholera-transport-plan.jpg",
      alt: "Dholera transport infrastructure plan",
    },
    {
      src: "/images/projects/dholera-sector-map.jpg",
      alt: "Dholera sector map",
    },
  ],
},


 
{
  id: 5,
  title: "Multipurpose NA Plot on Expressway",
  slug: "multipurpose-na-plot-expressway",
  image: "/images/projects/na-plot-expressway.jpg",
  description:
    "Prime investment opportunities in Dholera SIR with expressway connectivity, multipurpose non-agricultural plots and access to planned infrastructure.",

  heroImages: [
    {
      src: "/images/projects/na-plot-expressway.jpg",
      alt: "Dholera expressway and commercial property",
    },
    {
      src: "/images/projects/dholera-expressway-map.jpg",
      alt: "Dholera expressway connectivity map",
    },
    {
      src: "/images/projects/dholera-master-plan.jpg",
      alt: "Dholera Smart City master plan",
    },
    {
      src: "/images/projects/dholera-industrial-sectors.jpg",
      alt: "Dholera industrial development",
    },
    {
      src: "/images/projects/dholera-land-use-plan.jpg",
      alt: "Dholera land use and plot planning",
    },
  ],

  introduction: [
    "Dholera SIR offers planned development opportunities in Gujarat, including land parcels intended for different uses subject to applicable planning regulations and approvals.",
    "Plots located near the Ahmedabad–Dholera Expressway may offer connectivity advantages for residential, commercial and other permitted activities. The actual suitability of each plot depends on its location, zoning, access and legal status.",
    "Before purchasing a non-agricultural (NA) plot, investors should verify the land-use classification, title, applicable permissions, road access and development restrictions for the specific property.",
  ],

  highlights: [
    "Location: Dholera SIR, Gujarat",
    "Property Type: Multipurpose NA plot, subject to permitted land use",
    "Connectivity: Ahmedabad–Dholera Expressway corridor",
    "Planning: Verify the applicable TP scheme and plot zoning",
    "Due Diligence: Check title, approvals and permitted uses",
  ],

  advantages: [
    {
      src: "/images/advantages/expressway.jpg",
      alt: "Ahmedabad Dholera Expressway",
      title: "Ahmedabad–Dholera Expressway",
    },
    {
      src: "/images/advantages/airport.jpg",
      alt: "Dholera airport development",
      title: "Dholera Airport Connectivity",
    },
    {
      src: "/images/advantages/metro.jpg",
      alt: "Transport connectivity infrastructure",
      title: "Metro and Transport Connectivity",
    },
    {
      src: "/images/advantages/waterfront.jpg",
      alt: "Waterfront development",
      title: "Waterfront Side Location",
    },
    {
      src: "/images/advantages/knowledge-park.jpg",
      alt: "Knowledge and IT park development",
      title: "Knowledge and IT Park Zone",
    },
    {
      src: "/images/advantages/rail.jpg",
      alt: "Rail connectivity infrastructure",
      title: "Urban Rail Connectivity",
    },
  ],

  sections: [
    {
      title: "Strategic Location Advantage",
      description:
        "The plot's location in relation to the Ahmedabad–Dholera Expressway and planned infrastructure can influence accessibility and suitability for different permitted uses.",
      points: [
        "Assess access to the expressway",
        "Verify connectivity to commercial and industrial areas",
        "Check proximity to transport infrastructure",
        "Review surrounding development and road access",
      ],
    },
    {
      title: "Ideal for Multiple Uses",
      description:
        "The permitted uses of a plot depend on its official zoning, applicable development regulations and required approvals.",
      points: [
        "Commercial activities, where permitted",
        "Showrooms and retail spaces, where permitted",
        "Warehousing and logistics, where permitted",
        "Industrial or supporting activities, where permitted",
        "Other land uses specifically allowed by the relevant authority",
      ],
      conclusion:
        "Do not assume that every NA plot can be used for every commercial, residential or industrial purpose. Confirm the permitted use for the specific plot.",
    },
    {
      title: "Infrastructure & Connectivity",
      description:
        "Connectivity is an important consideration when assessing land near a major transport corridor.",
      points: [
        "Expressway connectivity: assess the actual access route",
        "Regional road infrastructure",
        "Transport and logistics connections",
        "Connectivity to nearby development areas",
      ],
    },
    {
      title: "Expressway Connectivity",
      description:
        "The Ahmedabad–Dholera Expressway is an important transport corridor associated with the region's development. Verify current access arrangements and the status of nearby connecting roads.",
      points: [
        "Review the distance from the plot to the expressway",
        "Check approved entry and exit access",
        "Confirm connecting roads and right-of-way",
        "Evaluate connectivity to the intended destination",
      ],
    },
    {
      title: "Landmark Connectivity",
      description:
        "Nearby infrastructure can help buyers assess the accessibility of a property. Actual distances and travel times should be verified using the precise plot location.",
      points: [
        "Connectivity to Dholera SIR development zones",
        "Access to regional road networks",
        "Proximity to relevant industrial and commercial areas",
        "Check the status of planned transport projects",
      ],
    },
    {
      title: "Growth & Price Appreciation Potential",
      description:
        "Infrastructure development may influence demand and land values, but appreciation is not guaranteed.",
      points: [
        "Compare the asking price with similar properties",
        "Evaluate existing infrastructure and actual road access",
        "Check local development activity",
        "Review holding costs and resale considerations",
      ],
      conclusion:
        "Any future price appreciation depends on market conditions, development progress, location, approvals and the property's legal status.",
    },
    {
      title: "Upcoming Developments",
      description:
        "Transport and urban infrastructure projects may affect the region over time. Check current official updates before relying on future development claims.",
      points: [
        "Expressway and regional road development",
        "Planned transport infrastructure",
        "Industrial and urban development",
        "Infrastructure implementation timelines",
      ],
    },
    {
      title: "Why Invest in This Plot?",
      description:
        "Evaluate the plot based on its verified location, permitted use and suitability for your intended purpose.",
      points: [
        "Expressway access, if officially available",
        "Multipurpose usage, only where permitted",
        "Potential connectivity advantages",
        "Entry price and long-term affordability",
        "Verified ownership and development permissions",
      ],
    },
  ],

  overview: [
    {
      label: "Location",
      value: "Dholera SIR, Gujarat",
    },
    {
      label: "Property Type",
      value: "Multipurpose NA Plot",
    },
    {
      label: "Connectivity",
      value: "Ahmedabad–Dholera Expressway Corridor",
    },
    {
      label: "Land Use",
      value: "Subject to official zoning and permissions",
    },
    {
      label: "Due Diligence",
      value: "Title, zoning, access and applicable approvals",
    },
  ],

  masterPlanImages: [
    {
      src: "/images/projects/dholera-master-plan.jpg",
      alt: "Dholera SIR master plan and proposed land use",
    },
    {
      src: "/images/projects/dholera-expressway-news.jpg",
      alt: "Expressway and regional development news reference",
    },
    {
      src: "/images/projects/dholera-connectivity-map.jpg",
      alt: "Dholera regional connectivity map",
    },
    {
      src: "/images/projects/dholera-expressway-plot-map.jpg",
      alt: "Expressway alignment and plot location map",
    },
  ],
},


  
{
  id: 6,
  title: "Premium Residential Plots in Dholera Smart City",
  slug: "premium-residential-plots-dholera-smart-city",
  image: "/images/projects/premium-residential-plots.jpg",
  description:
    "Explore residential plot opportunities in Dholera Smart City with planned infrastructure, regional connectivity and future-ready urban development.",

  heroImages: [
    {
      src: "/images/projects/premium-residential-plots.jpg",
      alt: "Premium residential plots in Dholera Smart City",
    },
    {
      src: "/images/projects/dholera-master-plan.jpg",
      alt: "Dholera Smart City master plan",
    },
    {
      src: "/images/projects/dholera-industrial-sectors.jpg",
      alt: "Dholera industrial and infrastructure development",
    },
    {
      src: "/images/projects/premium-residential-land.jpg",
      alt: "Residential development in Dholera",
    },
    {
      src: "/images/projects/dholera-land-use-plan.jpg",
      alt: "Dholera residential land use plan",
    },
  ],

  introduction: [
    "Dholera Smart City is a planned urban development project in Gujarat, India, designed to support modern infrastructure, industrial growth and organized residential development.",
    "Residential plots within the region should be evaluated according to their precise location, approved land use, connectivity, surrounding development and applicable permissions.",
    "Before purchasing a residential plot, buyers should verify ownership documents, zoning, applicable TP scheme details, road access and development approvals for the specific property.",
  ],

  highlights: [
    "Location: Dholera Smart City, Gujarat",
    "Property Type: Residential plots, subject to approved zoning",
    "Development: Planned smart city infrastructure",
    "Connectivity: Regional roads and planned transport infrastructure",
    "Due Diligence: Verify title, land use and applicable approvals",
  ],

  advantages: [
    {
      src: "/images/advantages/expressway.jpg",
      alt: "Ahmedabad Dholera Expressway",
      title: "Ahmedabad–Dholera Expressway",
    },
    {
      src: "/images/advantages/airport.jpg",
      alt: "Dholera airport infrastructure",
      title: "Dholera International Airport",
    },
    {
      src: "/images/advantages/metro.jpg",
      alt: "Transport connectivity",
      title: "Metro Station Connectivity",
    },
    {
      src: "/images/advantages/waterfront.jpg",
      alt: "Waterfront development",
      title: "Waterfront Side Location",
    },
    {
      src: "/images/advantages/knowledge-park.jpg",
      alt: "Knowledge and IT park development",
      title: "Knowledge and IT Park Zone",
    },
    {
      src: "/images/advantages/rail.jpg",
      alt: "Urban rail connectivity",
      title: "Urban Ground Metro",
    },
  ],

  sections: [
    {
      title: "Strategic Location Advantage",
      description:
        "A residential plot's location can influence accessibility, convenience and suitability for future development. Buyers should assess the actual plot location against verified infrastructure and approved plans.",
      points: [
        "Check connectivity to regional roads",
        "Verify access to nearby infrastructure",
        "Review surrounding residential and commercial development",
        "Confirm the actual distance to relevant transport corridors",
      ],
    },
    {
      title: "World-Class Smart Infrastructure",
      description:
        "Dholera's development plan incorporates infrastructure intended to support industrial activity and organized urban living.",
      points: [
        "Smart Roads and Connectivity",
        "24×7 Power Supply Planning",
        "Advanced Water Management",
        "Waste Management Systems",
        "ICT-Enabled Smart City Infrastructure",
      ],
    },
    {
      title: "Smart Roads & Connectivity",
      description:
        "Road networks and transport connectivity are important considerations for residential property buyers.",
      points: [
        "Planned road networks",
        "Internal roads and regional connections",
        "Connectivity to nearby development areas",
        "Verify the actual approach road to the plot",
      ],
    },
    {
      title: "24×7 Power Supply",
      description:
        "Utility infrastructure is an important part of planned urban development.",
      points: [
        "Check electricity infrastructure availability",
        "Verify the current status of utility connections",
        "Confirm service availability for the specific property",
      ],
    },
    {
      title: "Advanced Water Management",
      description:
        "Water infrastructure and drainage planning support organized urban development.",
      points: [
        "Check water supply arrangements",
        "Verify drainage and wastewater infrastructure",
        "Review applicable utility connection provisions",
      ],
    },
    {
      title: "Waste Management System",
      description:
        "Waste management is a component of sustainable urban planning.",
      points: [
        "Review planned waste collection facilities",
        "Check applicable local service arrangements",
        "Verify the status of supporting infrastructure",
      ],
    },
    {
      title: "ICT Enabled Smart City",
      description:
        "Information and communication technology can support modern urban services and infrastructure management.",
      points: [
        "Digital infrastructure planning",
        "Integrated urban management systems",
        "Smart-city service planning",
      ],
    },
    {
      title: "Surrounding Developments",
      description:
        "The surrounding area and the status of nearby development projects can help buyers assess the suitability of a residential property.",
      points: [
        "Residential development",
        "Commercial and retail facilities",
        "Educational and healthcare facilities",
        "Food and daily-needs facilities",
        "Recreational and community facilities",
      ],
      conclusion:
        "Verify which facilities currently exist and which remain proposed or under development before making a purchase decision.",
    },
    {
      title: "Why Invest in This Property?",
      description:
        "Residential plots should be evaluated on their location, legal status, permitted use and suitability for the buyer's requirements.",
      points: [
        "Assess potential appreciation without assuming guaranteed returns",
        "Verify government and planning approvals",
        "Review future infrastructure plans",
        "Confirm suitability for residential use",
        "Check ownership and applicable land records",
      ],
    },
    {
      title: "High Appreciation Potential",
      description:
        "Future property values depend on market demand, infrastructure delivery, location and the legal status of the land. Appreciation is not guaranteed.",
    },
    {
      title: "Government-Backed Development",
      description:
        "Dholera is part of a planned development initiative. Buyers should independently verify the status of infrastructure and approvals relevant to their property.",
    },
    {
      title: "Future-Ready Living",
      description:
        "Planned urban infrastructure aims to support organized development and modern living. Actual service availability varies by location and development stage.",
    },
    {
      title: "Ideal for Residential Use",
      description:
        "A plot is suitable for residential construction only when its approved land use and applicable development permissions allow it.",
    },
    {
      title: "Safe & Secure Investment",
      description:
        "Careful legal due diligence can help buyers identify property-related risks. No real estate investment is entirely risk-free.",
    },
    {
      title: "Who Should Invest?",
      description:
        "The property may be worth evaluating for buyers whose plans align with the plot's verified location, permitted use and budget.",
      points: [
        "Buyers evaluating residential land",
        "People planning a future home",
        "Investors comparing long-term property options",
        "Buyers who can complete the necessary legal checks",
      ],
    },
  ],

  overview: [
    {
      label: "Location",
      value: "Dholera Smart City, Gujarat",
    },
    {
      label: "Property Type",
      value: "Residential Plot",
    },
    {
      label: "Land Use",
      value: "Subject to approved residential zoning",
    },
    {
      label: "Connectivity",
      value: "Regional roads and planned infrastructure",
    },
    {
      label: "Investment Checks",
      value: "Title, zoning, approvals and road access",
    },
  ],

  masterPlanImages: [
    {
      src: "/images/projects/dholera-land-use-plan.jpg",
      alt: "Dholera property location and residential zone map",
    },
    {
      src: "/images/projects/dholera-infrastructure-benchmarking.jpg",
      alt: "Dholera world-class infrastructure benchmarking",
    },
    {
      src: "/images/projects/dholera-village-map.jpg",
      alt: "Dholera SIR village and development map",
    },
    {
      src: "/images/projects/dholera-development-regulations.jpg",
      alt: "Dholera development control regulations and land-use table",
    },
  ],
},

 
{
  id: 7,
  title: "Premium Residential Plot in Dholera Smart City",
  slug: "premium-residential-plot-dholera-smart-city",
  image: "/images/projects/residential-plot-smart-city.jpg",
  description:
    "Explore a residential plot opportunity in Dholera Smart City with planned infrastructure, modern urban development and future connectivity.",

  heroImages: [
    {
      src: "/images/projects/residential-plot-smart-city.jpg",
      alt: "Premium residential plot in Dholera Smart City",
    },
    {
      src: "/images/projects/dholera-commercial-development.jpg",
      alt: "Commercial development in Dholera",
    },
    {
      src: "/images/projects/dholera-hospital.jpg",
      alt: "Hospital infrastructure near Dholera",
    },
    {
      src: "/images/projects/dholera-nursing-home.jpg",
      alt: "Healthcare facility",
    },
    {
      src: "/images/projects/premium-residential-plots.jpg",
      alt: "Residential development in Dholera Smart City",
    },
  ],

  introduction: [
    "If you are looking for a residential property opportunity, this Dholera Smart City project introduces a planned residential development concept in Gujarat.",
    "Dholera Smart City is associated with India's broader industrial and urban development plans. Its infrastructure planning aims to support future residential, commercial and industrial activity.",
    "Before purchasing a plot, buyers should verify its exact location, approved residential land use, title documents, applicable Town Planning Scheme and development permissions.",
  ],

  highlights: [
    "Location: Dholera Smart City, Gujarat",
    "Property Type: Residential Plot, subject to approved zoning",
    "Development: Planned urban infrastructure",
    "Connectivity: Verify the actual approach road and nearby infrastructure",
    "Due Diligence: Confirm ownership, zoning and applicable permissions",
  ],

  advantages: [
    {
      src: "/images/advantages/expressway.jpg",
      alt: "Ahmedabad Dholera Expressway",
      title: "Ahmedabad–Dholera Expressway",
    },
    {
      src: "/images/advantages/airport.jpg",
      alt: "Dholera airport infrastructure",
      title: "Dholera International Airport",
    },
    {
      src: "/images/advantages/metro.jpg",
      alt: "Planned transport connectivity",
      title: "Metro Station Connectivity",
    },
    {
      src: "/images/advantages/waterfront.jpg",
      alt: "Waterfront development",
      title: "Waterfront Side Location",
    },
    {
      src: "/images/advantages/knowledge-park.jpg",
      alt: "Knowledge and IT park development",
      title: "Knowledge & IT Park Zone",
    },
    {
      src: "/images/advantages/rail.jpg",
      alt: "Urban rail connectivity",
      title: "Urban Ground Metro",
    },
  ],

  sections: [
    {
      title: "Why Invest in This Property?",
      description:
        "A residential plot should be evaluated according to its location, legal status, permitted use and suitability for your requirements.",
    },
    {
      title: "High Growth Potential",
      description:
        "Dholera is at an evolving stage of development. Property values depend on infrastructure delivery, market demand, location and legal approvals. Future appreciation is not guaranteed.",
    },
    {
      title: "Government-Approved Development",
      description:
        "Verify the specific plot's applicable Town Planning Scheme, ownership records and development permissions before making a purchase.",
    },
    {
      title: "Planned Infrastructure",
      description:
        "Roads, drainage systems, utilities and smart-city infrastructure form part of planned urban development. Their availability varies by location and implementation stage.",
    },
    {
      title: "Ideal for Multiple Uses",
      description:
        "The permitted use of a plot depends on its approved zoning and applicable regulations.",
      points: [
        "Residential construction, where permitted",
        "Long-term property ownership",
        "Future development, subject to applicable approvals",
      ],
    },
    {
      title: "Modern Living in Dholera Smart City",
      description:
        "Planned urban development aims to support modern infrastructure and organized residential communities.",
      points: [
        "Planned utilities and digital services",
        "Green spaces and parks",
        "Transport connectivity",
        "Organized urban development",
      ],
    },
    {
      title: "Future Development Scope",
      description:
        "Future development depends on infrastructure progress, approved land use, market conditions and implementation timelines. Buyers should distinguish operational facilities from proposed projects.",
    },
    {
      title: "Why Choose This Residential Plot?",
      description:
        "Review the specific property's documents and location before deciding whether it meets your requirements.",
      points: [
        "Verify the approved Town Planning Scheme",
        "Check plot dimensions and land records",
        "Confirm access roads and connectivity",
        "Verify permitted residential use",
        "Assess suitability for investors or homebuyers",
      ],
    },
  ],

  overview: [
    {
      label: "Location",
      value: "Dholera Smart City, Gujarat",
    },
    {
      label: "Zone",
      value: "Residential, subject to approved land-use records",
    },
    {
      label: "TP Scheme",
      value: "Verify the applicable scheme for the specific plot",
    },
    {
      label: "FP Number",
      value: "Verify from the property documents",
    },
    {
      label: "Survey Number",
      value: "Verify from the property documents",
    },
    {
      label: "Plot Size",
      value: "Confirm from the approved plot documents",
    },
    {
      label: "Plot Dimensions",
      value: "Confirm from the approved site plan",
    },
  ],

  masterPlanImages: [
    {
      src: "/images/projects/dholera-development-regulations.jpg",
      alt: "Dholera residential development guidelines and regulations",
    },
    {
      src: "/images/projects/dholera-land-use-plan.jpg",
      alt: "Dholera SIR land use and infrastructure development map",
    },
  ],
},


  
{
  id: 8,
  title: "Premium Residential Land in Dholera Smart City",
  slug: "premium-residential-land-dholera-smart-city",
  image: "/images/projects/premium-residential-land.jpg",
  description:
    "Explore residential land in Zanki, Dholera SIR, with planned infrastructure, residential development and connectivity opportunities.",

  heroImages: [
    {
      src: "/images/projects/zanki-residential-land.jpg",
      alt: "Premium residential land in Zanki, Dholera Smart City",
    },
    {
      src: "/images/projects/zanki-residential-development.jpg",
      alt: "Residential development in Dholera",
    },
    {
      src: "/images/projects/dholera-bank-building.jpg",
      alt: "Commercial and financial infrastructure",
    },
    {
      src: "/images/projects/dholera-industrial-facility.jpg",
      alt: "Industrial infrastructure in Dholera",
    },
    {
      src: "/images/projects/premium-residential-plots.jpg",
      alt: "Residential buildings in Dholera Smart City",
    },
  ],

  introduction: [
    "Build Your Dream Home in India's First Smart City. Discover a residential investment opportunity in Zanki, Dholera Special Investment Region (SIR), Gujarat.",
    "Located within the broader Dholera development region, this residential land opportunity is presented for buyers interested in planned urban development, future infrastructure and long-term property ownership.",
    "Before purchasing, verify the specific plot's ownership, approved land use, applicable Town Planning Scheme, survey and final plot numbers, and development permissions.",
  ],

  highlights: [
    "Location: Zanki Village, Dholera SIR, Gujarat",
    "Survey Number: 197",
    "Final Plot Number: Verify from the approved property documents",
    "Zone: Residential, subject to approved land-use records",
    "Connectivity: Verify actual road access and nearby infrastructure",
    "Property Type: Residential land",
  ],

  advantages: [
    {
      src: "/images/advantages/expressway.jpg",
      alt: "Ahmedabad–Dholera Expressway",
      title: "Ahmedabad–Dholera Expressway",
    },
    {
      src: "/images/advantages/airport.jpg",
      alt: "Dholera international airport infrastructure",
      title: "Dholera International Airport",
    },
    {
      src: "/images/advantages/metro.jpg",
      alt: "Planned transport connectivity",
      title: "Metro Station Connectivity",
    },
    {
      src: "/images/advantages/waterfront.jpg",
      alt: "Waterfront development",
      title: "Waterfront Side Location",
    },
    {
      src: "/images/advantages/knowledge-park.jpg",
      alt: "Knowledge and IT park development",
      title: "Knowledge & IT Park Zone",
    },
    {
      src: "/images/advantages/rail.jpg",
      alt: "Urban rail and metro connectivity",
      title: "Urban Ground Metro",
    },
  ],

  sections: [
    {
      title: "Strategic Residential Zone",
      description:
        "Residential land should be evaluated according to its approved zoning, location, surrounding infrastructure and suitability for the intended use.",
    },
    {
      title: "Smart Infrastructure & Modern Living",
      description:
        "Dholera's planned urban development includes infrastructure intended to support modern residential communities.",
    },
    {
      title: "Well-Planned Roads & Green Spaces",
      description:
        "Planned road networks, open spaces and organized urban development are part of the broader smart-city vision.",
      points: [
        "Planned road connectivity",
        "Dedicated cycle-track concepts",
        "Pedestrian-friendly transport planning",
        "Landscaped areas and green spaces",
      ],
    },
    {
      title: "24×7 Power Supply",
      description:
        "Utility availability should be confirmed for the specific plot and its current development stage.",
      points: [
        "Electricity infrastructure",
        "Smart metering where implemented",
        "Supporting utility systems",
      ],
    },
    {
      title: "Advanced Water Management",
      description:
        "Water and drainage arrangements depend on the relevant infrastructure package and implementation stage.",
      points: [
        "Water infrastructure planning",
        "Smart water-management systems",
        "Efficient water distribution",
        "Planned wastewater management",
      ],
    },
    {
      title: "Smart Waste Management",
      description:
        "Planned urban services may include organized waste collection and environmental management infrastructure.",
      points: [
        "Waste collection systems",
        "Recycling and resource management",
        "Wastewater treatment planning",
        "Environmental management facilities",
      ],
    },
    {
      title: "ICT Enabled Infrastructure",
      description:
        "Smart-city planning incorporates digital infrastructure to support urban services.",
      points: [
        "City-wide connectivity",
        "Integrated city-management systems",
        "Digital infrastructure",
      ],
    },
    {
      title: "Surrounding Developments",
      description:
        "The wider region is planned for residential, commercial and industrial development. Verify the status and distance of nearby facilities before making a decision.",
      points: [
        "Residential projects",
        "Commercial and financial institutions",
        "Educational facilities",
        "Healthcare facilities",
        "Retail and community amenities",
      ],
    },
    {
      title: "Why Choose This Property?",
      description:
        "Evaluate this residential land opportunity against your budget, intended use and property-document verification.",
    },
    {
      title: "High Growth Potential",
      description:
        "Future property appreciation is uncertain and depends on actual infrastructure delivery, market conditions, location and legal approvals.",
    },
    {
      title: "Future-Ready Lifestyle",
      description:
        "Planned infrastructure and urban development aim to support modern residential living.",
    },
    {
      title: "Secure Investment",
      description:
        "Review title documents, zoning, ownership history and applicable approvals before making a purchase.",
    },
    {
      title: "Large Land Area",
      description:
        "Confirm the actual plot dimensions and area through the approved site plan and registered property documents.",
    },
    {
      title: "Ideal For",
      description:
        "Suitability depends on the approved land use and the buyer's requirements.",
      points: [
        "Residential home construction, where permitted",
        "Long-term property ownership",
        "Buyers evaluating planned urban development",
        "Residential property planning",
      ],
    },
  ],

  overview: [
    {
      label: "Location",
      value: "Zanki Village, Dholera SIR, Gujarat",
    },
    {
      label: "Survey Number",
      value: "197",
    },
    {
      label: "Final Plot Number",
      value: "Verify from approved property documents",
    },
    {
      label: "Zone",
      value: "Residential, subject to approved land-use records",
    },
    {
      label: "TP Scheme",
      value: "Verify from the applicable Town Planning Scheme documents",
    },
    {
      label: "Road Access",
      value: "Verify from the approved site plan and on-site inspection",
    },
    {
      label: "Connectivity",
      value: "Verify actual road access and nearby infrastructure",
    },
    {
      label: "Property Type",
      value: "Residential land",
    },
  ],

  masterPlanImages: [
    {
      src: "/images/projects/dholera-zanki-property-location-map.jpg",
      alt: "Property location and residential zone on the Dholera DP map",
    },
    {
      src: "/images/projects/dholera-international-benchmarking.jpg",
      alt: "Dholera SIR international infrastructure benchmarking",
    },
    {
      src: "/images/projects/dholera-villages-map.jpg",
      alt: "Dholera SIR map showing villages and development zones",
    },
    {
      src: "/images/projects/dholera-development-regulations.jpg",
      alt: "Dholera development control regulations and residential guidelines",
    },
  ],
},


 
{
  id: 9,
  title: "Premium Commercial Plot in Dholera Smart City",
  slug: "premium-commercial-plot-dholera-smart-city",
  image: "/images/projects/premium-commercial-plot.jpg",
  description:
    "Explore commercial land opportunities in Khun Village, Dholera SIR, Gujarat, with planned infrastructure and regional connectivity.",

  heroImages: [
    {
      src: "/images/projects/khun-commercial-location.jpg",
      alt: "Khun Village commercial plot location in Dholera SIR",
    },
    {
      src: "/images/projects/dholera-commercial-development.jpg",
      alt: "Commercial development concept in Dholera",
    },
    {
      src: "/images/projects/dholera-commercial-district.jpg",
      alt: "Planned commercial district",
    },
    {
      src: "/images/projects/dholera-residential-buildings.jpg",
      alt: "Residential and commercial development in Dholera",
    },
    {
      src: "/images/projects/dholera-sports-facility.jpg",
      alt: "Sports and recreation infrastructure concept",
    },
  ],

  introduction: [
    "Discover commercial property opportunities in Khun Village, Dholera Special Investment Region (SIR), Gujarat. The project is intended for buyers exploring land for commercial use within the broader planned smart-city development.",
    "Dholera's long-term development vision includes industrial, commercial and urban infrastructure. Before purchasing, verify the specific plot's approved land use, title documents, survey and final plot numbers, and applicable development permissions.",
  ],

  highlights: [
    "Location: Khun Village, Dholera SIR, Gujarat",
    "Survey Number: 7",
    "Property Type: Commercial land opportunity, subject to approved land-use records",
    "TP Scheme: Verify from the applicable Town Planning Scheme documents",
    "Plot Area: Verify from approved property documents",
    "Connectivity: Confirm actual road access and nearby infrastructure",
  ],

  advantages: [
    {
      src: "/images/advantages/expressway.jpg",
      alt: "Ahmedabad–Dholera Expressway",
      title: "Ahmedabad–Dholera Expressway",
    },
    {
      src: "/images/advantages/airport.jpg",
      alt: "Dholera international airport infrastructure",
      title: "Dholera International Airport",
    },
    {
      src: "/images/advantages/metro.jpg",
      alt: "Planned metro and transport connectivity",
      title: "Metro Station Connectivity",
    },
    {
      src: "/images/advantages/waterfront.jpg",
      alt: "Waterfront development concept",
      title: "Waterfront Side Location",
    },
    {
      src: "/images/advantages/knowledge-park.jpg",
      alt: "Knowledge and IT park concept",
      title: "Knowledge & IT Park Zone",
    },
    {
      src: "/images/advantages/rail.jpg",
      alt: "Urban rail and metro infrastructure",
      title: "Urban Ground Metro",
    },
  ],

  sections: [
    {
      title: "Strategic Location Advantage",
      description:
        "A commercial plot should be evaluated according to its location, approved land use, road access and proximity to existing or planned infrastructure.",
      points: [
        "Verify the property's exact location",
        "Check approved commercial zoning",
        "Confirm road access and connectivity",
        "Review surrounding development plans",
      ],
    },
    {
      title: "Ideal for Multiple Commercial Uses",
      description:
        "Potential uses depend on the plot's approved zoning, applicable regulations and permitted activities.",
      points: [
        "Commercial complexes",
        "Showrooms and retail spaces",
        "Office and business premises",
        "Service-oriented establishments",
        "Other uses permitted under the applicable development regulations",
      ],
    },
    {
      title: "Smart Infrastructure & Facilities",
      description:
        "Dholera's wider development plan includes infrastructure intended to support future urban and commercial activity.",
    },
    {
      title: "Modern Road Infrastructure",
      description:
        "Road and transport infrastructure is an important consideration when evaluating commercial land. Confirm the current access conditions for the specific property.",
      points: [
        "Road connectivity",
        "Transport infrastructure planning",
        "Access to surrounding development zones",
      ],
    },
    {
      title: "24×7 Power Supply",
      description:
        "Verify electricity availability, connection requirements and utility infrastructure for the specific plot.",
    },
    {
      title: "Smart Water Management",
      description:
        "Confirm water supply, drainage and wastewater arrangements with the relevant authorities before purchase.",
    },
    {
      title: "Advanced Waste Management",
      description:
        "Planned urban infrastructure may include waste collection and environmental management services, subject to implementation.",
    },
    {
      title: "ICT Enabled Smart City Features",
      description:
        "Smart-city planning incorporates digital connectivity and technology-led urban services.",
      points: [
        "Digital infrastructure",
        "Integrated urban services",
        "Technology-enabled city management",
      ],
    },
    {
      title: "Surrounding Developments",
      description:
        "The wider Dholera region is planned to accommodate multiple development sectors. Verify which facilities are operational, under construction or proposed.",
      points: [
        "Commercial development",
        "Industrial facilities",
        "Residential projects",
        "Transport infrastructure",
        "Community and support facilities",
      ],
    },
    {
      title: "Why Invest in This Property?",
      description:
        "Assess this commercial land opportunity based on legal approvals, location, permitted use, infrastructure and your investment objectives.",
    },
    {
      title: "Dedicated Commercial Zone",
      description:
        "Confirm whether the individual plot is officially designated for commercial use in the applicable approved plan.",
    },
    {
      title: "High Demand Potential",
      description:
        "Future commercial demand depends on actual development, business activity, connectivity and market conditions.",
    },
    {
      title: "Large Plot Size",
      description:
        "Verify the plot's exact area and dimensions through approved plans and registered documents.",
    },
    {
      title: "Future Growth Potential",
      description:
        "Long-term value depends on infrastructure delivery, local market demand, approvals and the specific property's characteristics. Appreciation is not guaranteed.",
    },
    {
      title: "Smart Infrastructure",
      description:
        "Review the status of relevant road, electricity, water, drainage and digital infrastructure before making a decision.",
    },
    {
      title: "Who Should Invest?",
      description:
        "This property may be worth evaluating for buyers whose intended use matches the plot's verified legal classification.",
      points: [
        "Commercial property buyers",
        "Businesses evaluating future premises",
        "Investors assessing commercial land",
        "Buyers seeking long-term property ownership",
      ],
    },
    {
      title: "Secure Your Commercial Space Today",
      description:
        "Request the approved site plan, ownership documents, land-use classification and applicable permissions before proceeding with a purchase.",
    },
  ],

  overview: [
    {
      label: "Location",
      value: "Khun Village, Dholera SIR, Gujarat",
    },
    {
      label: "Survey Number",
      value: "7",
    },
    {
      label: "Final Plot Number",
      value: "Verify from approved property documents",
    },
    {
      label: "Zone",
      value: "Commercial, subject to approved land-use records",
    },
    {
      label: "TP Scheme",
      value: "Verify from applicable Town Planning Scheme documents",
    },
    {
      label: "Plot Area",
      value: "Verify from approved property documents",
    },
    {
      label: "Road Access",
      value: "Verify from approved site plan and on-site inspection",
    },
    {
      label: "Property Type",
      value: "Commercial land",
    },
  ],

  masterPlanImages: [
    {
      src: "/images/projects/khun-commercial-location-map.jpg",
      alt: "Khun Village property location and land-use map",
    },
    {
      src: "/images/projects/dholera-international-benchmarking.jpg",
      alt: "Dholera SIR international infrastructure benchmarking",
    },
    {
      src: "/images/projects/dholera-villages-map.jpg",
      alt: "Dholera SIR villages and development zones map",
    },
    {
      src: "/images/projects/khun-village-location-map.jpg",
      alt: "Khun Village survey and location map",
    },
    {
      src: "/images/projects/dholera-smart-infrastructure.jpg",
      alt: "Dholera smart infrastructure and utility planning",
    },
    {
      src: "/images/projects/dholera-development-regulations.jpg",
      alt: "Dholera development control regulations",
    },
  ],
},

];
