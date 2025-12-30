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
  // Optional: if you have a logo image rather than a photo
  imageContain?: boolean;
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
    name: "Baymont By Wyndham San Diego Downtown",
    url: "https://www.wyndhamhotels.com/baymont",
    addressLines: ["719 Ash St,", "San Diego, CA 92101"],
    description:
      "Our most budget-friendly hotel recommendation, the Baymont by Wyndham San Diego is conveniently located on the edge of the Gaslamp District and next to entrances for both I-5 and Route 163. This downtown hotel provides easy access to Balboa Park and its many attractions — like the Zoo and the San Diego Independent Film Festival.",
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

function HotelCard({ item, flip }: { item: HotelItem; flip?: boolean }) {
  return (
    <article
      className={[
        "rounded-[14px] border border-black/20 bg-white shadow-[0_10px_28px_rgba(0,0,0,0.12)]",
        "overflow-hidden",
      ].join(" ")}
    >
      <div
        className={[
          "flex flex-col md:min-h-[168px] md:flex-row",
          flip ? "md:flex-row-reverse" : "",
        ].join(" ")}
      >
        <div className="relative h-[170px] w-full md:h-auto md:w-[46%]">
          <Image
            src={item.imageSrc}
            alt={item.name}
            fill
            className={[
              item.imageContain ? "object-contain bg-white p-6" : "object-cover",
            ].join(" ")}
            sizes="(max-width: 768px) 100vw, 420px"
          />
        </div>

        <div className="w-full p-4 md:w-[54%] md:p-5">
          {/* Area label (small, left, like screenshot) */}
          <p className="text-[12px] font-bold text-black/70">{item.area}</p>

          {/* Name */}
          <h2 className="mt-1 font-rowdies text-[16px] font-extrabold text-black sm:text-[17px]">
            {item.name}
          </h2>

          {/* URL (tiny blue) */}
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block text-[11px] text-[#1212ee] underline"
          >
            {item.url.replace("https://", "").replace("http://", "")}
          </a>

          {/* Address */}
          <div className="mt-2 text-[12px] leading-[1.25] text-black">
            {item.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>

          {/* Description */}
          <p className="mt-3 text-[12px] leading-[1.35] text-black">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function HotelPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-[1120px] px-4 pb-16 pt-10 sm:px-6">
        <h1 className="text-center font-rowdies text-[38px] font-extrabold uppercase tracking-wide text-[#00AEEF] sm:text-[52px]">
          Hotels
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {HOTELS.map((item, idx) => (
            <HotelCard key={item.name} item={item} flip={idx % 2 === 1} />
          ))}
        </div>
      </div>
    </main>
  );
}
