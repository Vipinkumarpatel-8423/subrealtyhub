
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react";

const address =
  "New Peoda Road, Shastri Nagar, Appo. Gali No. 6, Kaithal, Haryana 136027";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(address);

const contactCards = [
  {
    title: "Our Address",
    icon: MapPin,
    description: address,
    href: mapUrl,
    linkLabel: "Open directions",
    external: true,
  },
  {
    title: "Send Email",
    icon: Mail,
    description: "info@sabrealtyhub.com",
    href: "mailto:info@sabrealtyhub.com",
    linkLabel: "Send an email",
  },
  {
    title: "Call Us",
    icon: Phone,
    description: "+91 9896152870",
    secondDescription: "+91 9466097007",
    href: "tel:+919896152870",
    secondHref: "tel:+919466097007",
    linkLabel: "Call now",
  },
  {
    title: "Opening Hour",
    icon: Clock,
    description: "Sunday–Friday: 9 AM – 6 PM",
    secondDescription: "Saturday: 9 AM – 4 PM",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-background pb-10 sm:pb-14">
      {/* Map */}
      <div className="relative h-[300px] w-full overflow-hidden bg-light-bg sm:h-[380px] lg:h-[490px]">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          title="SAB Realty Hub location in Kaithal"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-brand shadow-md transition-colors hover:text-accent"
        >
          Open in Maps <MapPin size={15} />
        </a>
      </div>

      {/* Contact cards */}
      <div className="relative z-10 mx-auto -mt-10 grid max-w-[1400px] grid-cols-1 gap-4 px-4 sm:-mt-12 sm:grid-cols-2 sm:px-6 lg:-mt-16 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {contactCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="flex min-w-0 flex-col items-center rounded-2xl border border-border bg-background px-5 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-4 sm:py-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                <Icon size={24} strokeWidth={2.3} />
              </div>

              <h2 className="mt-4 break-words text-base font-semibold text-brand sm:text-lg">
                {card.title}
              </h2>

              <div className="mt-2 space-y-1 text-sm leading-6 text-brand-grey">
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="block break-words transition-colors hover:text-accent"
                  >
                    {card.description}
                  </a>
                ) : (
                  <p>{card.description}</p>
                )}

                {card.secondDescription && (
                  card.secondHref ? (
                    <a
                      href={card.secondHref}
                      className="block break-words transition-colors hover:text-accent"
                    >
                      {card.secondDescription}
                    </a>
                  ) : (
                    <p>{card.secondDescription}</p>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
