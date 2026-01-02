// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";

type HomeTile = {
  title: string;
  href: string;
  imageSrc: string;
};

const HOME_TILES: HomeTile[] = [
  {
    title: "About / Membership",
    href: "/mission",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/1. HP IMAGE About_Membership_/1.)  AboutMembership.PNG",
  },
  {
    title: "Film Festival",
    href: "/filmfest",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/2. HP IMAGE Flim Festival/2.) Film Festival.png",
  },
  {
    title: "Tourism",
    href: "/tourism",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/3. HP IMAGE Tourism/3) Tourism.png",
  },
  {
    title: "Film Guide",
    href: "/filmprogram",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/4. HP IMAGE Film Guide/4.) Film Guide.jpg",
  },
  {
    title: "Tickets & Passes",
    href: "/filmprogram",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/5. HP IMAGE Tickets & Passes/5.) TicketsandPasses.PNG",
  },
  {
    title: "Submit",
    href: "www.filmfreeway.com",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/6. HP IMAGE Submit/6.) Submit.jpg",
  },
  {
    title: "Venues",
    href: "/cinema",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/7. HP IMAGE Venues_/7.) venues.jpg",
  },
  {
    title: "Awards",
    href: "/awards",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/8. HP IMAGE Awards/8.) Award 1st choice small_.jpg",
  },
  {
    title: "Dining",
    href: "/restaurants",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/9. HP IMAGE Dining/9.) Dining.jpg",
  },
  {
    title: "Lodging",
    href: "/hotels",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/10. HP IMAGE Lodging/10.) Lodging.png",
  },
  {
    title: "Travel",
    href: "/travel",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/11. HP IMAGE Travel/11.) Travel.jpg",
  },
  {
    title: "Press & Media",
    href: "/contact",
    imageSrc:
      "/1d. HOME PAGE IMAGES (by section)/12. HP IMAGE Press & Media/12.) Press_Media.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Slideshow hero */}
      <HeroSlideshow />

      {/* Film & Event Info section with tiles */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-4 py-8 sm:py-10">
          {/* Section header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-rowdies font-light uppercase text-[#00aaff] text-5xl lg:text-5xl sm:text-4xl">
              Film &amp; Event Info
            </h2>
            <div className="mt-2 h-0.5 w-[40%] bg-[#00aaff] mx-auto" />
          </div>

          {/* Tile grid */}
          <div className="grid gap-4 sm:gap-5 grid-cols-2 md:grid-cols-4">
            {HOME_TILES.map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                className="group flex flex-col items-center"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.18)] bg-black/5">
                  <Image
                    src={tile.imageSrc}
                    alt={tile.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                  />
                </div>
                <p className="mt-2.5 text-xs sm:text-sm md:text-base font-rowdies font-normal uppercase tracking-normal text-center">
                  {tile.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
