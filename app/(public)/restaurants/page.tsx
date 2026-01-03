import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurants | San Diego Independent Film Festival",
  description:
    "Recommended restaurants across San Diego neighborhoods and Coronado Island.",
};

type Restaurant = {
  name: string;
  neighborhood: string;
  websiteLabel: string; // what to display
  websiteUrl: string; // actual link
  addressLines: string[];
  description: string;
  imageSrc: string;
};

const RESTAURANTS: Restaurant[] = [
  {
    name: "Brisa",
    neighborhood: "Little Italy",
    websiteLabel: "www.brisasd.com/",
    websiteUrl: "https://www.brisasd.com/",
    addressLines: ["2101 Kettner Blvd,", "San Diego, CA 92101"],
    description:
      "Brisa Restaurant & Bar in the heart of Little Italy offers a vibrant atmosphere where flavorful Latin-Japanese fusion cuisine and personalized service to make every meal special.",
    imageSrc: "/restaurants/1.) Brisa NEWM.PNG",
  },
  {
    name: "Clayton’s Coffee Shop",
    neighborhood: "Coronado Island",
    websiteLabel: "www.claytonscoffeeshop.com",
    websiteUrl: "https://www.claytonscoffeeshop.com/",
    addressLines: ["979 Orange Ave,", "Coronado, CA 92118"],
    description:
      "The only original horseshoe counter left in San Diego County and is one the last true classic American diners, step back in time and enjoy classic diner dishes.",
    imageSrc: "/restaurants/2.) Claytons.jpg",
  },
  {
    name: "Extraordinary Desserts",
    neighborhood: "Little Italy",
    websiteLabel: "www.extraordinarydesserts.com",
    websiteUrl: "https://www.extraordinarydesserts.com/",
    addressLines: ["1430 Union Street,", "San Diego, CA 92101"],
    description:
      "Known for its selection of artisanal desserts, cakes and pastries, while also serving lunch and dinner alongside gourmet shopping.",
    imageSrc: "/restaurants/3.) Extraordinary DessertsNEW.jpg",
  },
  {
    name: "Greystone Prime Steakhouse & Seafood",
    neighborhood: "Gaslamp District",
    websiteLabel: "www.greystonesteakhouse.com",
    websiteUrl: "https://www.greystonesteakhouse.com/",
    addressLines: ["658 Fifth Ave,", "San Diego, CA 92101"],
    description:
      "This Gaslamp district landmark steakhouse, specializing in USDA Prime Steaks, Angus Steaks, and an international selection of hand-cut Wagyu that has a unique degree of marbling.",
    imageSrc: "/restaurants/4.) GreystoneNEW.png",
  },
  {
    name: "Juniper & Ivy",
    neighborhood: "Little Italy",
    websiteLabel: "www.juniperandivy.com/",
    websiteUrl: "https://www.juniperandivy.com/",
    addressLines: ["2228 Kettner Blvd.,", "San Diego, 92101"],
    description:
      "The premiere San Diego dining experience. Started as a love letter to the combination of San Diego, food, and wine - this restaurant has become a catalyst of eclectic west-coast fine dining; a movement defined by fresh, locally sourced ingredients, inventive chef-driven technique and artful plating designed for sharing.",
    imageSrc: "/restaurants/5.) Juniper Ivy_NEWM.png",
  },
  {
    name: "Kettner Exchange",
    neighborhood: "Little Italy",
    websiteLabel: "www.kettnerexchange.com/",
    websiteUrl: "https://www.kettnerexchange.com/",
    addressLines: ["2001 Kettner Blvd.,", "San Diego, 92101"],
    description:
      "With two levels of indoor and outdoor dining, and featuring a rotating menu of progressive American cuisine, created by one of the most innovative chefs in SD.",
    imageSrc: "/restaurants/6.) Kettner Exchange_NEWM.PNG",
  },
  {
    name: "Stone Brewing World Bistro and Gardens",
    neighborhood: "Little Italy / Gaslamp",
    websiteLabel: "stonebrewing.com/visit/bistros/liberty-station",
    websiteUrl: "https://www.stonebrewing.com/visit/bistros/liberty-station",
    addressLines: ["1202 Kettner Blvd. Suite 101,", "San Diego, CA 92101"],
    description:
      "Local brewery chain with tasting room, retail store and a patio garden. Located in the nationally registered historic McClintock Warehouse building, less than a block from the Santa Fe Depot train station between Little Italy in the Gaslamp District.",
    imageSrc: "/restaurants/7.) Stone Brewing_NEWM.PNG",
  },
  {
    name: "Turf Supper Club",
    neighborhood: "Golden Hill / Downtown",
    websiteLabel: "www.turfsupperclub.com/history/",
    websiteUrl: "https://www.turfsupperclub.com/history/",
    addressLines: ["1116 25th St,", "San Diego, CA 92102"],
    description:
      "An experience for the adventurous! Grill-your-own steakhouse and bar opened in the 1930’s. Located in Golden Hill area near the Gaslamp and Balboa Park, the Turf Supper Club is said to have been Lucille Ball & Desi Arnaz favorite spot when visiting San Diego.",
    imageSrc: "/restaurants/8.) TURF_NEW.jpg",
  },
];

function RestaurantCard({ r }: { r: Restaurant }) {
  return (
    <article
      className="
        overflow-hidden rounded-[14px]
        border border-black/20 bg-white
        shadow-[0_2px_8px_rgba(0,0,0,0.15)]
      "
    >
      {/* Desktop layout: image left + text right */}
      <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
        <div className="relative aspect-4/3 w-full sm:aspect-auto sm:h-full sm:min-h-[170px]">
          <Image
            src={r.imageSrc}
            alt={r.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 220px"
            priority={false}
          />
        </div>

        <div className="relative p-4 sm:p-4">
          <h3 className="font-rowdies font-light text-[18px] leading-tight text-black">
            {r.name}
          </h3>

          <div className=" font-istok text-[12px] leading-snug text-black/90">
            {r.addressLines.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>

          <div className="">
            <a
              href={r.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="font-istok text-[12px] text-[#0F84B5] underline"
            >
              {r.websiteLabel}
            </a>
          </div>

          <p className="font-istok text-[12px] leading-tight text-black/85">
            {r.description}
          </p>

          {/* Neighborhood label bottom-right like the screenshot */}
          <div className="pointer-events-none flex justify-end pt-4 pfont-istok text-[11px] text-black/60">
            {r.neighborhood}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function RestaurantsPage() {
  return (
    <main className="bg-white text-black">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-10 sm:px-6">
        <header className="text-center">
<h1 className="text-center font-rowdies text-[38px] font-light uppercase tracking-wide text-[#00AEEF] sm:text-[52px]">            RESTAURANTS
          </h1>
        </header>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {RESTAURANTS.map((r) => (
            <RestaurantCard key={r.name} r={r} />
          ))}
        </section>
      </div>
    </main>
  );
}
