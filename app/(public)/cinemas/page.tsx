// app/cinema/page.tsx
import Image from "next/image";
import Link from "next/link";

type Cinema = {
  name: string;
  href: string;
  hrefLabel: string;
  address: string;
  description: string;
  imageSrc: string;
};

const CINEMAS: Cinema[] = [
  {
    name: "AMC Mission Valley 20",
    href: "https://www.amctheatres.com/movie-theatres/san-diego/amc-mission-valley-20",
    hrefLabel: "www.amctheatres.com/movie-theatres/san-diego/amc-mission-valley-20",
    address: "1640 Camino Del Rio N.,\nSan Diego, California 92108",
    description:
      "Twenty-screen multiplex with luxury recliners, innovative menus, IMAX, Dolby Cinema, and more.",
    // Put your image at: /public/cinema/amc-mission-valley-20.jpg
    imageSrc: "/cinema/1.) AMC_MissionValley20_CROP.jpg",
  },
  {
    name: "AMC UTC 14 Westfield University",
    href: "https://www.amctheatres.com/movie-theatres/san-diego/amc-utc-14",
    hrefLabel: "www.amctheatres.com/movie-theatres/san-diego/amc-utc-14",
    address: "4425 La Jolla Village Dr Suite # H-60,\nSan Diego, CA 92122",
    description:
      "This former Arclight cinema located at the Westfield UTC mall has been reborn as the area’s newest AMC state of the art multiplex.",
    imageSrc: "/cinema/2.) AMC-Theater-Westfield-UTC-Mall-La-Jolla.jpg",
  },
  {
    name: "Angelika Film Center & Café",
    href: "https://www.angelikafilmcenter.com/sandiego",
    hrefLabel: "www.angelikafilmcenter.com/sandiego",
    address: "11620 Carmel Mountain Rd.\nSan Diego, CA 92128",
    description:
      "Multiplex and cafe for screening everything from blockbusters to indie & classic films.",
    imageSrc: "/cinema/3.) Angelika Film Center & Café.jpg",
  },
  {
    name: "Cinema Under the Stars",
    href: "https://www.topspresents.com/",
    hrefLabel: "www.topspresents.com/",
    address: "4040 Goldfinch St.,\nSan Diego, CA 92103",
    description:
      "A unique and intimate theater hosting outdoor screenings and premieres. Featuring - 20-foot screen with HD projection and surround sound.",
    imageSrc: "/cinema/4.) Cinema Under the Stars.jpg",
  },
  {
    name: "Digital Gym",
    href: "https://www.digitalgym.org/",
    hrefLabel: "www.digitalgym.org/",
    address: "1100 Market St Fl 2nd\nSan Diego, CA 92104",
    description:
      "Downtown’s newest cinema offers an intimate theater and lounge showing independent, international films and documentaries.",
    imageSrc: "/cinema/5.) DigitalGym_NEWM.png",
  },
  {
    name: "THE LOT Liberty Station",
    href: "https://www.thelotent.com/movie-theater/libertystation",
    hrefLabel: "www.thelotent.com/movie-theater/libertystation",
    address: "2620 Truxtun Rd,\nSan Diego, CA 92106",
    description:
      "Located inside the Liberty Station with state-of-the-art, dine-in screening rooms, a bar and restaurant with locally sourced food.",
    imageSrc: "/cinema/6.) TheLOT_NEWM.png",
  },
  {
    name: "Coronado Village Theater",
    href: "https://www.vintagecinemas.com/village/",
    hrefLabel: "www.vintagecinemas.com/village/",
    address: "820 Orange Ave Coronado,\nSan Diego CA 92118",
    description:
      "Originally constructed in 1947, the 9,000-square foot art deco style, was the source of multimillion dollar restoration, including upgrades to the newest in digital projection.",
    imageSrc: "/cinema/7.) VillageTheater_NEWM.png",
  },
  {
    name: "UltraStar Mission Valley Cinemas",
    href: "https://www.ultrastarmovies.com/",
    hrefLabel: "www.ultrastarmovies.com/",
    address: "7510 Hazard Ctr Dr\nSan Diego, CA 92108",
    description:
      "Located in the Hazard Center, surrounded by many cafes, restaurants and shopping opportunities, with fully digital projection and sound.",
    imageSrc: "/cinema/8.) UltraStar_NEWM.png",
  },
];

function CinemaCard({ cinema }: { cinema: Cinema }) {
  return (
    <article className="rounded-[12px] border border-black/35 bg-white overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
      {/* Title bar */}
      <div className="px-4 py-2.5 text-center border-b border-black/25">
        <h3 className="cinema-card-title">
          {cinema.name}
        </h3>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square bg-black/5">
        <Image
          src={cinema.imageSrc}
          alt={cinema.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 92vw"
          priority={false}
        />
      </div>

      {/* Info */}
      <div className="px-4 pt-3 pb-4">
        <div className="text-sm leading-tight text-black/90 whitespace-pre-line">
          {cinema.address}
        </div>

        <Link
          href={cinema.href}
          target="_blank"
          rel="noreferrer"
          className="mt-1 block text-xs text-cyan-700 hover:underline underline-offset-2 wrap-break-word"
        >
          {cinema.hrefLabel}
        </Link>

        <p className="mt-2 text-sm leading-tight text-black/85">
          {cinema.description}
        </p>
      </div>
    </article>
  );
}

export default function CinemaPage() {
  return (
    <div className="bg-white">
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-4 pt-8 sm:pt-10 pb-10">
          {/* Page title */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="cinema-h1-blue">
              <span className="">San Diego</span>{" "}
              <span className="">Cinemas</span>
            </h1>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:gap-7 md:grid-cols-2">
            {CINEMAS.map((cinema) => (
              <CinemaCard key={cinema.name} cinema={cinema} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
