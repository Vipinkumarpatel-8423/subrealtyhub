import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | SAB Realty Hub",
  description:
    "Contact SAB Realty Hub in Kaithal for property enquiries, real estate guidance and Dholera Smart City investment information.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactInfo />
      <ContactForm />
    </main>
  );
}