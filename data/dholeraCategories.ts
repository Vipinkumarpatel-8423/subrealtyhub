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
    slug: "dholera-sir",
    icon: Building2,
    description:
      "Explore Dholera Special Investment Region and its growing infrastructure opportunities.",
  },
  {
    id: 2,
    title: "Commercial",
    slug: "commercial",
    icon: Store,
    description:
      "Discover commercial property and investment opportunities in Dholera.",
  },
  {
    id: 3,
    title: "Investment",
    slug: "investment",
    icon: TrendingUp,
    description:
      "Explore real estate investment opportunities and future growth potential.",
  },
  {
    id: 4,
    title: "Expressway",
    slug: "expressway",
    icon: Route,
    description:
      "Explore strategically located properties connected with major expressway infrastructure.",
  },
  {
    id: 5,
    title: "Smart City",
    slug: "smart-city",
    icon: Landmark,
    description:
      "Discover residential and commercial opportunities around Dholera Smart City.",
  },
];