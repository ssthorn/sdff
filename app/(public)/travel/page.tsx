// app/travel/page.tsx
import Image from "next/image";
import Link from "next/link";

type TravelItem = {
  title: string;
  href: string;
  displayUrl: string;
  description: string;
  imgSrc: string; // stored in /public/travel/...
  imgAlt: string;
  imgClassName?: string;
};

type Section = {
  heading: string;
  items: TravelItem[];
};

const BLUE = "#11a7df"; // close to the cyan in your refs

const SECTIONS: Section[] = [
  {
    heading: "AIR TRAVEL",
    items: [
      {
        title: "San Diego International Airport",
        href: "https://www.san.org/",
        displayUrl: "www.san.org",
        description:
          "The primary airport serving the festival and surrounding San Diego area.",
        imgSrc: "/travel/1.) san-diego-airport-logo.png",
        imgAlt: "San Diego International Airport logo",
        imgClassName: "object-contain",
      },
    ],
  },
  {
    heading: "AUTOMOBILE TRAVEL",
    items: [
      {
        title: "Highways",
        href: "https://highways.dot.gov/highway-history/interstate-system",
        displayUrl: "Highways",
        description:
          "The I-5, I-8, I-805 and I-15 interstate highways all connect to San Diego",
        imgSrc: "/travel/2.) Highways.png",
        imgAlt: "Interstate shield",
        imgClassName: "object-contain",
      },
    ],
  },
  {
    heading: "TRAIN TRAVEL",
    items: [
      {
        title: "Amtrak Pacific Surfliner",
        href: "https://www.pacificsurfliner.com/",
        displayUrl: "www.pacificsurfliner.com",
        description:
          "Trainline servicing the coast of Southern California between San Diego and San Luis Obispo.",
        imgSrc: "/travel/3.) Amtrak Pacific Surfliner.png",
        imgAlt: "Amtrak Pacific Surfliner logo",
        imgClassName: "object-contain",
      },
      {
        title: "San Diego Coaster",
        href: "https://www.gonctd.com/services/coaster-commuter-rail/",
        displayUrl: "gonctd.com/services/coaster-commuter-rail/",
        description:
          "San Diego's commuter rail serving the greater San Diego community.",
        imgSrc: "/travel/4.) COASTER_logo.svg.png",
        imgAlt: "COASTER logo",
        imgClassName: "object-contain",
      },
    ],
  },
  {
    heading: "OCEAN TRAVEL",
    items: [
      {
        title: "Port of San Diego",
        href: "https://www.portofsandiego.org/",
        displayUrl: "www.portofsandiego.org",
        description:
          "Cruise ships arrive and depart from San Diego's cruise ship terminal on B Street Pier.",
        imgSrc: "/travel/5.) Port_of_San_Diego_logo.svg.png",
        imgAlt: "Port of San Diego logo",
        imgClassName: "object-contain",
      },
    ],
  },
  {
    heading: "LOCAL TRAVEL",
    items: [
      {
        title: "San Diego Trolley",
        href: "https://www.sdmts.com/transit-services/trolley",
        displayUrl: "www.sdmts.com/transit-services/trolley",
        description:
          "Light rail service connecting downtown with East County, UC San Diego, South Bay, and the Mexico border.",
        imgSrc: "/travel/6.)mtslogo-red.jpg",
        imgAlt: "MTS logo",
        imgClassName: "object-contain",
      },
    ],
  },
];

function TravelCard({ item }: { item: TravelItem }) {
  return (
    <div
      className="
        w-full max-w-5xl
        rounded-xl border-2 border-black/50 bg-white
        shadow-[0_6px_0_rgba(0,0,0,0.18)]
        px-5 py-4 sm:px-7 sm:py-6
      "
    >
      <div className="flex items-center gap-5 sm:gap-7">
        {/* Logo block (left) */}
        <div
          className="
            relative
            h-[72px] w-[92px]
            sm:h-[86px] sm:w-[120px]
            shrink-0
          "
        >
          <Image
            src={item.imgSrc}
            alt={item.imgAlt}
            fill
            className={item.imgClassName ?? "object-contain"}
            sizes="(max-width: 640px) 120px, 160px"
            priority={false}
          />
        </div>

        {/* Text block (right) */}
        <div className="min-w-0">
          <div className="font-rowdies font-light text-[16px] sm:text-[20px] leading-tight text-black">
            {item.title}
          </div>

          <div className="mt-0.5 sm:mt-1">
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-[12px] text-cyan-700 hover:underline"
            >
              {item.displayUrl}
            </Link>
          </div>

          <p className="mt-2 text-[12px] sm:text-[13px] leading-snug text-black/80">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TravelPage() {
  return (
    <main className="bg-white">
      {/* Top spacing like your refs (big white gap under the header bar) */}
      <div className="h-10 sm:h-14" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pb-14">
        {/* Page title */}
        <h1
          className="
            text-center font-rowdies font-light tracking-wide
            text-[34px] sm:text-[56px]
            mb-10 sm:mb-14
          "
          style={{ color: BLUE }}
        >
          TRAVEL
        </h1>

        {/* Sections */}
        <div className="space-y-10 sm:space-y-14">
          {SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[18px] sm:text-[22px] font-rowdies font-light text-black tracking-wide mb-4 sm:mb-6">
                {section.heading}
              </h2>

              <div className="flex flex-col items-center gap-5 sm:gap-6">
                {section.items.map((item) => (
                  <TravelCard key={item.title} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
