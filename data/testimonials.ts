
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Customer",
    feedback:
      "Very professional team. Smooth process and honest guidance throughout.",
    image: "/images/testimonials/priya-sharma.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Customer",
    feedback:
      "Transparent deals and reliable support. Highly recommend Sab Realty Hub.",
    image: "/images/testimonials/amit-verma.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Customer",
    feedback:
      "The team provided helpful guidance and made the property process easier to understand.",
    image: "/images/testimonials/rahul-mehta.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Gupta",
    role: "Customer",
    feedback:
      "Professional communication and support throughout the property selection process.",
    image: "/images/testimonials/neha-gupta.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikas Sharma",
    role: "Customer",
    feedback:
      "A helpful experience with clear information about real estate opportunities.",
    image: "/images/testimonials/vikas-sharma.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Anjali Verma",
    role: "Customer",
    feedback:
      "The team was responsive and explained the available options clearly.",
    image: "/images/testimonials/anjali-verma.jpg",
    rating: 5,
  },
];
