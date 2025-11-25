// app/page.tsx
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

type HomeCard = {
  title: string;
  href: string;
  imageSrc: string;
};

const HOME_CARDS: HomeCard[] = [
  {
    title: "About/Membership",
    href: "/about",
    imageSrc: "/images/home/about-membership.jpg",
  },
  {
    title: "Film Festival",
    href: "/filmfest",
    imageSrc: "/images/home/film-festival.jpg",
  },
  {
    title: "Tourism",
    href: "/tourism",
    imageSrc: "/images/home/tourism.jpg",
  },
  {
    title: "Film Guide",
    href: "/filmguide",
    imageSrc: "/images/home/film-guide.jpg",
  },
  {
    title: "Tickets & Passes",
    href: "/filmprogram",
    imageSrc: "/images/home/tickets-passes.jpg",
  },
  {
    title: "Submit",
    href: "/submit",
    imageSrc: "/images/home/submit.jpg",
  },
  {
    title: "Venues",
    href: "/venues",
    imageSrc: "/images/home/venues.jpg",
  },
  {
    title: "Awards",
    href: "/awards",
    imageSrc: "/images/home/awards.jpg",
  },
  {
    title: "Dining",
    href: "/restaurants",
    imageSrc: "/images/home/dining.jpg",
  },
  {
    title: "Lodging",
    href: "/hotel",
    imageSrc: "/images/home/lodging.jpg",
  },
  {
    title: "Travel",
    href: "/travel",
    imageSrc: "/images/home/travel.jpg",
  },
  {
    title: "Media & Press",
    href: "/media",
    imageSrc: "/images/home/media-press.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* slideshow hero */}
      <HeroSlideshow />

      {/* FILM & EVENT INFO heading + card grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-4 py-8 sm:py-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-3xl md:text-5xl uppercase font-rowdies font-light text-[#00aaff]">
              Film &amp; Event Info
            </h2>
            <div className="mt-2 h-0.5 w-16 bg-[#00aaff] mx-auto" />
          </div>

          <div className="grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
            {HOME_CARDS.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col items-center"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.18)] bg-black/5">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-2.5 text-sm sm:text-base font-semibold text-black text-center">
                  {card.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
