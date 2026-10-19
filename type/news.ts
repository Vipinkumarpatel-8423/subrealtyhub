
export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: {
    heading: string;
    paragraphs: string[];
    points?: string[];
  }[];
  featured?: boolean;
}
