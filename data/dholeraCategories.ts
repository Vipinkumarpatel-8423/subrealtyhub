import {
  Building2,
  Store,
  TrendingUp,
  Route,
  Landmark,
  LucideIcon,
} from "lucide-react";

export interface DholeraCategory {
  id: number;
  title: string;
  slug: string;
  icon: LucideIcon;
  description: string;
}

export const dholeraCategories: DholeraCategory[] = [
  {
    id: 1,
    title: "Dholera SIR",
    slug: "smart-industrial-investment-destination",
    icon: Building2,
    description:
      "Explore Dholera Special Investment Region and its growing infrastructure opportunities.",
  },
  {
    id: 2,
    title: "Commercial",
    slug: "premium-commercial-plot-dholera-smart-city",
    icon: Store,
    description:
      "Discover commercial property and investment opportunities in Dholera.",
  },
  {
    id: 3,
    title: "Investment",
    slug: "master-plan-investment-opportunity",
    icon: TrendingUp,
    description:
      "Explore real estate investment opportunities and future growth potential.",
  },
  {
    id: 4,
    title: "Expressway",
    slug: "multipurpose-na-plot-expressway",
    icon: Route,
    description:
      "Explore strategically located properties connected with major expressway infrastructure.",
  },
  {
    id: 5,
    title: "Smart City",
    slug: "premium-residential-plot-dholera-smart-city",
    icon: Landmark,
    description:
      "Discover residential and commercial opportunities around Dholera Smart City.",
  },
];