// app/hotel/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Hotels | San Diego Independent Film Festival",
};

type HotelItem = {
  area: string;
  name: string;
  url: string;
  addressLines: string[];
  description: string;
  imageSrc: string;
  imageContain?: boolean;
  forceContain?: boolean; // NEW: for wide "flag" logos that must never crop
};

const HOTELS: HotelItem[] = [
  {
    area: "Coronado",
    name: "Hotel del Coronado",
    url: "https://www.hoteldel.com/",
    addressLines: ["1500 Orange Ave,", "Coronado, CA 92118"],
    description:
      'Iconic grand Victorian beachfront hotel and resort, famous for being the setting of 1950’s “Some Like It Hot” starring Marilyn Monroe, Tony Curtis, Jack Lemmon.',
    imageSrc: "/hotel/1.) CoronadoSunNEWM.png",
  },
  {
    area: "Gaslamp District",
    name: "Baymont By Wyndham",
    url: "https://www.wyndhamhotels.com/baymont",
    addressLines: ["719 Ash St,", "San Diego, CA 92101"],
    description:
      "Our most budget-friendly recommendation, Baymont by Wyndham San Diego sits at the edge of the Gaslamp District near I-5 and Route 163, offering easy access to Balboa Park, the Zoo, and the San Diego Independent Film Festival.",
    imageSrc: "/hotel/2.) Baymont By Wyndham_NEW.png",
  },
  {
    area: "Gaslamp District",
    name: "Hilton San Diego Bayfront",
    url: "https://www.hilton.com/en/hotels/sancchh-hilton-san-diego-bayfront/",
    addressLines: ["1 Park Blvd,", "San Diego, CA 92101"],
    description:
      "Just steps from the Gaslamp Quarter, Petco Park, and Rady Shell at Jacobs Park, with suites overlooking the San Diego bay.",
    imageSrc: "/hotel/3.) HiltonBayfrontNEW.PNG",
  },
  {
    area: "Gaslamp District",
    name: "Horton Grand Hotel",
    url: "https://www.hortongrand.com/",
    addressLines: ["311 Island Ave,", "San Diego, CA 92101"],
    description:
      "Located in the very heart of downtown San Diego, the Horton Grand Hotel is one of the most charming urban boutique hotels the city has to offer.",
    imageSrc: "/hotel/4.) HortonGrand.png",
    imageContain: true,
  },
  {
    area: "Gaslamp District",
    name: "Manchester Grand Hyatt San Diego",
    url: "https://www.hyatt.com/grand-hyatt/en-US/sanrs-manchester-grand-hyatt-san-diego",
    addressLines: ["1 Market Pl,", "San Diego, CA 92101"],
    description:
      "The largest hotel in southern California with its distinctive two towers, this waterfront resort offers stunning Marina views, convenient to the convention center, Seaport Village and downtown.",
    imageSrc: "/hotel/5.) ManchesterGrandHyatt.png",
    forceContain: true, // NEW: ensures full logo always visible
  },
  {
    area: "Gaslamp District",
    name: "Marriott U.S. Grant",
    url: "https://www.marriott.com/en-us/hotels/sanlc-the-us-grant-a-luxury-collection-hotel-san-diego/",
    addressLines: ["326 Broadway,", "San Diego, CA 92101"],
    description:
      "This luxury hotel with French Provincial architecture and decor is conveniently located downtown and offers city or bay view suites.",
    imageSrc: "/hotel/6.) U.S. Grant_NEW.PNG",
  },
  {
    area: "Mission Valley",
    name: "Hilton Garden Inn San Diego Old Town",
    url: "https://www.hilton.com/en/hotels/sanswgi-hilton-garden-inn-san-diego-old-town-seaworld-area/",
    addressLines: ["4200 Taylor St,", "San Diego, CA 92110"],
    description:
      "Upscale hotel, located next to Presidio Park and Old Town district, located 5 miles from San Diego International Airport.",
    imageSrc: "/hotel/7.) Garden Inn_NEW.PNG",
  },
  {
    area: "Mission Valley",
    name: "Town and Country Resort",
    url: "https://www.towncountry.com/",
    addressLines: ["500 Hotel Cir N,", "San Diego, CA 92108"],
    description:
      "Newly renovated mid-century resort surrounded by tropical palms, this casual resort and hotel is 5 miles from the San Diego Zoo and Balboa Park.",
    imageSrc: "/hotel/8.) Town and Country Resort.png",
    imageContain: true,
  },
];

function hostOnly(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function HotelCard({ item }: { item: HotelItem }) {
  const displayUrl = hostOnly(item.url);

  return (
    <div className="w-full">
      {/* Area label outside card */}
      <div className="mb-1 pl-1 text-[12px] text-black/80">
        {item.area}
      </div>

      <article className="rounded-[12px] border border-black/30 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Mobile: vertical. Desktop: horizontal */}
        <div className="flex w-full flex-col md:flex-row">
          {/* Image: full width on mobile, half width on desktop, always square */}
          <div className="relative w-full md:w-1/2 aspect-square border-b md:border-b-0 md:border-r border-black/25">
            <Image
              src={item.imageSrc}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={
                item.forceContain
                  ? "object-contain p-6 bg-white"
                  : item.imageContain
                    ? "object-contain p-4"
                    : "object-cover"
              }
              style={{ objectPosition: "center" }}
            />
          </div>

          {/* Content: full width on mobile, half on desktop */}
          <div className="flex w-full md:w-1/2 flex-col px-4 py-4">
            <h2 className="font-rowdies text-[18px] md:text-xl font-light leading-[1.05] tracking-tight text-black">
              {item.name}
            </h2>

            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-[12px] md:text-xs leading-tight tracking-tight text-[#00aaff] underline break-all"
            >
              {displayUrl}
            </a>

            <div className="mt-2 text-[12px] md:text-xs leading-tight tracking-tight text-black">
              {item.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>

            <p className="mt-2 text-[13px] md:text-sm leading-[1.28] md:leading-[1.22] tracking-tight text-black">
              {item.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}


export default function HotelPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-[1120px] px-4 pb-16 pt-6">
        <h1 className="text-center font-rowdies text-3xl font-light uppercase tracking-tight text-[#00AEEF]">
          Hotels
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {HOTELS.map((item) => (
            <HotelCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
