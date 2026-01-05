// app/tourism/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type NeighborhoodId =
  | "top"
  | "balboa-park"
  | "museums"
  | "embarcadero"
  | "gaslamp"
  | "old-town"
  | "bankers-hill"
  | "beaches"
  | "mission-beach"
  | "outdoor-adventures"
  | "sport-activities"
  | "golf-courses"
  | "shopping"
  | "universities";

interface TourismPlace {
  id: string;
  sectionId: NeighborhoodId;
  sectionLabel: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  url?: string;
  address?: string;
}

const PLACES: TourismPlace[] = [
  // --- TOP "SAN DIEGO TOURISM" FEATURED ---
  {
    id: "comic-con",
    sectionId: "top",
    sectionLabel: "SAN DIEGO TOURISM",
    title: "Comic-Con",
    imageSrc: "/5. _tourism IMAGES/1.) San_Diego_Comic_Con_attendees.jpg",
    imageAlt: "Crowd at San Diego Comic-Con",
    description:
      "San Diego Comic-Con is an annual, multi-genre entertainment and comic book convention that draws fans from around the globe. Held at the San Diego Convention Center, it is a mecca for pop-culture enthusiasts.",
    url: "https://www.comic-con.org/",
    address: "111 Harbor Dr, San Diego, CA 92101",
  },
  {
    id: "legoland",
    sectionId: "top",
    sectionLabel: "SAN DIEGO TOURISM",
    title: "Legoland",
    imageSrc: "/5. _tourism IMAGES/2.) Legoland_California.jpg",
    imageAlt: "Legoland entrance",
    description:
      "Legoland is a hands-on experience that celebrates creativity and imagination, with over 60 rides, shows, and attractions.",
    url: "https://www.legoland.com/california/",
    address: "One Legoland Dr, Carlsbad, CA 92008",
  },
  {
    id: "sd-wildlife-park",
    sectionId: "top",
    sectionLabel: "SAN DIEGO TOURISM",
    title: "S.D. Wildlife Park",
    imageSrc: "/5. _tourism IMAGES/3.) giraffe.jpg",
    imageAlt: "Giraffes at San Diego Wildlife Park",
    description:
      "The San Diego Wildlife Park is a leading conservation organization dedicated to saving species worldwide — an exciting adventure and an educational journey into global wildlife conservation.",
    url: "https://sdzsafaripark.org/",
    address: "15500 San Pasqual Valley Rd, Escondido, CA 92027",
  },

  // --- BALBOA PARK ATTRACTIONS ---
  {
    id: "sd-zoo",
    sectionId: "balboa-park",
    sectionLabel: "BALBOA PARK ATTRACTIONS",
    title: "San Diego Zoo",
    imageSrc: "/5. _tourism IMAGES/4.) flamingo.jpg",
    imageAlt: "Flamingos at San Diego Zoo",
    description:
      "A must-visit destination that combines education, conservation, and a fun-filled adventure for all ages.",
    url: "https://sandiegozoowildlifealliance.org/",
    address: "2920 Zoo Dr, San Diego, CA 92101",
  },
  {
    id: "sd-museum-of-art",
    sectionId: "balboa-park",
    sectionLabel: "BALBOA PARK ATTRACTIONS",
    title: "San Diego Museum of Art",
    imageSrc: "/5. _tourism IMAGES/5.) San_Diego_Museum_of_Art_NEWM.PNG",
    imageAlt: "San Diego Museum of Art building",
    description:
      "Located in the heart of Balboa Park, the museum is renowned for its extensive and diverse collection.",
    url: "https://www.sdmart.org/",
    address: "1450 El Prado, San Diego, CA 92102",
  },
  {
    id: "old-globe",
    sectionId: "balboa-park",
    sectionLabel: "BALBOA PARK ATTRACTIONS",
    title: "Old Globe Theater",
    imageSrc: "/5. _tourism IMAGES/6.) Old_Globe_Theatre,_San_Diego.jpg",
    imageAlt: "Old Globe Theatre in Balboa Park",
    description:
      "A three-venue complex offering classic Shakespeare, world-premiere musicals, and cutting-edge dramas.",
    url: "https://www.theoldglobe.org/",
    address: "1363 Old Globe Way, San Diego, CA 92101",
  },{
    id: "california-tower",
    sectionId: "balboa-park",
    sectionLabel: "BALBOA PARK ATTRACTIONS",
    title: "California Tower",
    imageSrc: "/5. _tourism IMAGES/7.) Balboa TowerNEWM.JPG",
    imageAlt: "California Tower in Balboa Park",
    description:
      "The California Tower, a majestic landmark within San Diego&;aposs Balboa Park, is a stunning example of Spanish Colonial architecture.",
    url: "https://www.balboapark.org/",
    address: "1350 El Prado San Diego, CA 92101",
  },{
    id: "san-diego-independent-film-fest",
    sectionId: "balboa-park",
    sectionLabel: "SAN DIEGO INDEPENDENT FILM SOCIETY",
    title: "San Diego Independent Film Fest",
    imageSrc: "/5. _tourism IMAGES/8.) SDIFF.jpg",
    imageAlt: "San Diego Independent Film Festival",
    description:
      "The biggest and best celebration of independent film in San Diego, showcasing emerging filmmakers and groundbreaking cinema.",
    url: "https://sandiegoindependentfilmfestival.com",
    address: "San Diego, CA",
  },
  {
    id: "fleet-science-center",
    sectionId: "balboa-park",
    sectionLabel: "BALBOA PARK ATTRACTIONS",
    title: "Fleet Science Center",
    imageSrc: "/5. _tourism IMAGES/9.) Fleet Science Center.jpg",
    imageAlt: "Fleet Science Center in Balboa Park",
    description:
      "A fantastic spot for families and curious minds to explore the wonders of science and technology through interactive exhibits and immersive experiences.",
    url: "https://www.fleetscience.org",
    address: "1875 El Prado, San Diego, CA 92101",
  },
  {
    id: "botanical-building",
    sectionId: "balboa-park",
    sectionLabel: "BALBOA PARK ATTRACTIONS",
    title: "Botanical Building",
    imageSrc: "/5. _tourism IMAGES/10.) Botanical Building.jpg",
    imageAlt: "Botanical Building at Balboa Park",
    description:
      "The Botanical Building is a San Diego landmark and one of the largest lath structures in the world, with a reflecting pool and historic architecture that make it one of the most photographed spots in the park.",
    url: "https://balboaparkbotanical.org",
    address: "1550 El Prado, San Diego, CA 92101",
  },
  {
    id: "japanese-friendship-garden",
    sectionId: "balboa-park",
    sectionLabel: "BALBOA PARK ATTRACTIONS",
    title: "Japanese Friendship Garden",
    imageSrc: "/5. _tourism IMAGES/11.) Japanese Friendship Garden.jpg",
    imageAlt: "Japanese Friendship Garden at Balboa Park",
    description:
      "A peaceful oasis and a living symbol of friendship between San Diego and its sister city Yokohama, the garden features tranquil paths, koi ponds, and beautiful landscape design.",
    url: "https://www.niwa.org",
    address: "2215 Pan American E Rd, San Diego, CA 92101",
  },
  {
    id: "spreckels-organ-pavilion",
    sectionId: "balboa-park",
    sectionLabel: "BALBOA PARK ATTRACTIONS",
    title: "Spreckels Organ Pavilion",
    imageSrc: "/5. _tourism IMAGES/12.) Spreckels_Organ_Pavilion,_Balboa_Park,_San_Diego_.jpg",
    imageAlt: "Spreckels Organ Pavilion in Balboa Park",
    description:
      "The Spreckels Organ Pavilion is a true civic treasure, where free public concerts are performed regularly, continuing a tradition that has delighted locals and visitors for over a century.",
    url: "https://www.spreckelsorgan.org",
    address: "2125 Pan American E Rd, San Diego, CA 92101",
  },
  

  // --- MUSEUMS (sample) ---
  {
    id: "nat-history",
    sectionId: "museums",
    sectionLabel: "MUSEUMS",
    title: "Natural History Museum",
    imageSrc: "/5. _tourism IMAGES/13.) Natural History Museum.jpg",
    imageAlt: "San Diego Natural History Museum exterior",
    description:
      "Discover the region’s unique flora and fauna, prehistoric fossils, and dynamic exhibits from dinosaurs to ecology.",
    url: "https://www.sdnhm.org/",
    address: "1788 El Prado, San Diego, CA 92101",
  },
  {
    id: "sd-museum-of-art-museums",
    sectionId: "museums",
    sectionLabel: "MUSEUMS",
    title: "The San Diego Museum of Art",
    imageSrc: "/5. _tourism IMAGES/14.) sd museum art.jpg",
    imageAlt: "The San Diego Museum of Art building",
    description:
      "Housed in a stunning Spanish Colonial-style building, the museum’s holdings are especially strong in Spanish and Italian Old Master paintings, as well as South Asian and German Expressionist art.",
    url: "https://www.sdmart.org/",
    address: "1450 El Prado, San Diego, CA 92102",
  },

  {
    id: "uss-midway",
    sectionId: "embarcadero",
    sectionLabel: "THE EMBARCADERO",
    title: "USS Midway Museum",
    imageSrc: "/5. _tourism IMAGES/19.) USS_Midway.jpg",
    imageAlt: "USS Midway aircraft carrier",
    description:
      "An interactive museum aboard the historic USS Midway aircraft carrier, showcasing naval aviation history.",
    url: "https://www.midway.org/",
    address: "910 N Harbor Dr, San Diego, CA 92101",
  },
  {
    id: "petco-park",
    sectionId: "gaslamp",
    sectionLabel: "GASLAMP DISTRICT",
    title: "Petco Park",
    imageSrc: "/5. _tourism IMAGES/22.) PetcoBallParkByPhilKonstantin.jpg",
    imageAlt: "Petco Park stadium",
    description:
      "Home of the San Diego Padres and a stunning downtown ballpark with great views and events.",
    url: "https://petcoparkevents.com",
    address: "100 Park Blvd, San Diego, CA 92101",
  },

    // --- MUSEUMS (continued) ---
    {
        id: "model-railroad-museum",
        sectionId: "museums",
        sectionLabel: "MUSEUMS",
        title: "Model Railroad Museum",
        imageSrc: "/5. _tourism IMAGES/15.) Model Railroad Museum.jpg",
        imageAlt: "San Diego Model Railroad Museum layout",
        description:
          "A one-of-a-kind destination for train enthusiasts and families, featuring over 27,000 square feet of meticulously crafted operating model railroad layouts.",
        url: "https://www.sdmrm.org",
        address: "1649 El Prado, San Diego, CA 92101",
      },
      {
        id: "air-and-space-museum",
        sectionId: "museums",
        sectionLabel: "MUSEUMS",
        title: "Air & Space Museum",
        imageSrc: "/5. _tourism IMAGES/16) air and space museum NEWM.JPG",
        imageAlt: "San Diego Air & Space Museum exterior",
        description:
          "A must-visit for anyone fascinated by flight, taking visitors on an incredible journey from the earliest attempts at aviation to the modern space age.",
        url: "https://sandiegoairandspace.org",
        address: "2001 Pan American Plaza, San Diego, CA 92101",
      },
      {
        id: "mingei-international-museum",
        sectionId: "museums",
        sectionLabel: "MUSEUMS",
        title: "Mingei International Museum",
        imageSrc: "/5. _tourism IMAGES/17.) Mingei_nternational_museum.jpg",
        imageAlt: "Mingei International Museum interior",
        description:
          'Guided by the Japanese concept of “mingei,” or “art of the people,” this museum showcases vibrant folk art, craft, and design from around the world.',
        url: "https://mingei.org",
        address: "1439 El Prado, San Diego, CA 92101",
      },
      {
        id: "timken-museum-of-art",
        sectionId: "museums",
        sectionLabel: "MUSEUMS",
        title: "Timken Museum of Art",
        imageSrc: "/5. _tourism IMAGES/18.)Timken_Museum_of_Art_NEWM.JPG",
        imageAlt: "Timken Museum of Art in Balboa Park",
        description:
          "A gem of Balboa Park offering free admission, the Timken invites visitors to enjoy its outstanding collection in a calm, elegant setting.",
        url: "https://www.timkenmuseum.org",
        address: "1500 El Prado, San Diego, CA 92101",
      },
    
      // --- THE EMBARCADERO (continued) ---
      {
        id: "seaport-village",
        sectionId: "embarcadero",
        sectionLabel: "THE EMBARCADERO",
        title: "Seaport Village",
        imageSrc: "/5. _tourism IMAGES/20.) sea port village carousel_NEWM.JPG",
        imageAlt: "Carousel at Seaport Village",
        description:
          "A waterfront shopping and dining village on the bay, with over 70 shops, galleries, and restaurants spread across 14 acres of scenic harborfront.",
        url: "https://www.seaportvillage.com",
        address: "849 W Harbor Dr, San Diego, CA 92101",
      },
      {
        id: "little-italy",
        sectionId: "embarcadero",
        sectionLabel: "THE EMBARCADERO",
        title: "Little Italy",
        imageSrc: "/5. _tourism IMAGES/21.) Little_Italy,_San_Diego.jpg",
        imageAlt: "Little Italy neighborhood sign in San Diego",
        description:
          "A walkable neighborhood packed with cocktail bars, brewpubs, restaurants, indie shops, music spots, and lively plazas.",
        url: "https://www.littleitalysd.com",
        address: "India St & Date St, San Diego, CA 92101",
      },
    
      // --- GASLAMP DISTRICT (continued) ---
      {
        id: "sd-convention-center",
        sectionId: "gaslamp",
        sectionLabel: "GASLAMP DISTRICT",
        title: "San Diego Convention Center",
        imageSrc: "/5. _tourism IMAGES/23.) sd convention center.jpg",
        imageAlt: "San Diego Convention Center waterfront view",
        description:
          "A striking waterfront venue in downtown, hosting conventions, trade shows, community events, and the world-famous San Diego Comic-Con.",
        url: "https://www.visitsandiego.com",
        address: "111 Harbor Dr, San Diego, CA 92101",
      },
      {
        id: "tivoli-bar-and-grill",
        sectionId: "gaslamp",
        sectionLabel: "GASLAMP DISTRICT",
        title: "Tivoli Bar and Grill",
        imageSrc: "/5. _tourism IMAGES/24.) tivoli.jpg",
        imageAlt: "Tivoli Bar and Grill exterior",
        description:
          "An old-school bar with authentic vintage charm and a no-frills atmosphere, offering a glimpse into San Diego’s historic nightlife.",
        url: "https://tivoli-bar-and-grill.restaurants-world.com",
        address: "505 Sixth Ave, San Diego, CA 92101",
      },
    
      // --- OLD TOWN ---
      {
        id: "junipero-serra-museum",
        sectionId: "old-town",
        sectionLabel: "OLD TOWN",
        title: "Junípero Serra Museum",
        imageSrc: "/5. _tourism IMAGES/25.) Junipero Serra Museum.jpg",
        imageAlt: "Junípero Serra Museum overlooking Old Town",
        description:
          "An iconic regional landmark perched above Old Town, marking one of the most historically significant sites on the West Coast.",
        url: "https://sandiegohistory.org/serramuseum",
        address: "2727 Presidio Dr, San Diego, CA 92101",
      },
      {
        id: "whaley-house",
        sectionId: "old-town",
        sectionLabel: "OLD TOWN",
        title: "Whaley House",
        imageSrc: "/5. _tourism IMAGES/26.) Whaley House.jpg",
        imageAlt: "Whaley House in Old Town San Diego",
        description:
          "Built in 1857, this former family home, store, and theater is famed as one of America’s most haunted houses, with many reports of paranormal activity.",
        url: "https://www.whaleyhousesandiego.com",
        address: "2476 San Diego Ave, San Diego, CA 92110",
      },
      {
        id: "el-campo-cemetery",
        sectionId: "old-town",
        sectionLabel: "OLD TOWN",
        title: "El Campo Cemetery",
        imageSrc: "/5. _tourism IMAGES/27.) El Campo Cemetery.jpg",
        imageAlt: "El Campo Santo Cemetery in Old Town",
        description:
          "A historic cemetery dating back to 1849, final resting place of many early settlers—later partly paved over, inspiring local ghost stories and legends.",
        url: "https://hiddensandiego.com/el-campo-santo-cemetery",
        address: "2410 San Diego Ave, San Diego, CA 92110",
      },
    
      // --- BANKERS HILL ---
      {
        id: "spruce-street-suspension-bridge",
        sectionId: "bankers-hill",
        sectionLabel: "BANKERS HILL",
        title: "Spruce Street Suspension Bridge",
        imageSrc:
          "/5. _tourism IMAGES/28.) Spruce Street Suspension Bridge NEWM.JPG",
        imageAlt: "Spruce Street Suspension Bridge in Bankers Hill",
        description:
          "A beloved hidden gem—a gently swaying footbridge with lush canyon views, perfect for a scenic stroll and photos.",
        url: "https://www.sprucestreetbridge.org",
        address: "220 W Spruce St, San Diego, CA 92103",
      },
      {
        id: "harpers-topiary-garden",
        sectionId: "bankers-hill",
        sectionLabel: "BANKERS HILL",
        title: "Harper's Topiary Garden",
        imageSrc:
          "/5. _tourism IMAGES/29.) Harper_s_Topiary_Garden_Jan_2009.jpg",
        imageAlt: "Harper's Topiary Garden front yard sculptures",
        description:
          "A private front yard transformed into a whimsical garden of more than 50 sculpted plants shaped into playful figures.",
        url: "https://en.wikipedia.org/wiki/HarperTopiaryGarden",
        address: "3549 Union St, San Diego, CA 92103",
      },
      {
        id: "bankers-hill-canyon-open-space",
        sectionId: "bankers-hill",
        sectionLabel: "BANKERS HILL",
        title: "Bankers Hill Canyon Open Space",
        imageSrc:
          "/5. _tourism IMAGES/30.) Bankers Hill Canyon Open Space.jpg",
        imageAlt: "Trail in Bankers Hill Canyon Open Space",
        description:
          "A peaceful urban escape of interconnected canyons, including Maple Canyon, with native vegetation and tranquil walking paths.",
        url: "https://en.wikipedia.org/wiki/Bankers_Hill,_San_Diego",
        address: "Spruce St, San Diego, CA 92103",
      },
    
      // --- SAN DIEGO BEACHES ---
      {
        id: "pacific-beach",
        sectionId: "beaches",
        sectionLabel: "BEACHES",
        title: "Pacific Beach",
        imageSrc: "/5. _tourism IMAGES/31.) Pacific Beach.jpg",
        imageAlt: "Pacific Beach shoreline",
        description:
          "A lively beach community with a vibrant nightlife scene, beachfront bars, casual eateries, and laid-back coastal energy.",
        url: "https://www.sandiego.gov/park-and-recreation",
        address: "1405 Diamond St, San Diego, CA 92109",
      },
      {
        id: "ocean-beach",
        sectionId: "beaches",
        sectionLabel: "BEACHES",
        title: "Ocean Beach",
        imageSrc: "/5. _tourism IMAGES/32.) Ocean Beach.jpg",
        imageAlt: "Ocean Beach shoreline and pier",
        description:
          "San Diego’s bohemian beach town with a free-spirited vibe, surf culture, and Dog Beach—a beloved off-leash haven for pups.",
        url: "https://sandiego.com/listing/ocean-beach",
        address: "1950 Abott St, San Diego, CA 92107",
      },
      {
        id: "coronado-island",
        sectionId: "beaches",
        sectionLabel: "BEACHES",
        title: "Coronado Island",
        imageSrc: "/5. _tourism IMAGES/33.) Coronado Island.jpg",
        imageAlt: "Coronado Island beach and Hotel del Coronado",
        description:
          'Home to the grand Victorian Hotel del Coronado, this “Crown City” offers pristine beaches, relaxed elegance, and iconic bay and bridge views.',
        url: "https://coronadovisitorcenter.com",
        address: "1100 Orange Ave, Coronado, CA 92118",
      },
    
      // --- MISSION BEACH ---
      {
        id: "mission-bay-park",
        sectionId: "mission-beach",
        sectionLabel: "MISSION BEACH",
        title: "Mission Bay Park",
        imageSrc:
          "/5. _tourism IMAGES/34.) Mission_Bay_Park_Sunset,_San_Dieg.jpg",
        imageAlt: "Mission Bay Park at sunset",
        description:
          "A sprawling bayside park with coves, inlets, and waterfront paths ideal for biking, picnics, and relaxing by the water.",
        url: "https://www.sandiego.org/mission-bay-park",
        address: "Mission Bay Park, San Diego, CA 92109",
      },
      {
        id: "seaworld",
        sectionId: "mission-beach",
        sectionLabel: "MISSION BEACH",
        title: "SeaWorld",
        imageSrc: "/5. _tourism IMAGES/35.) seaworld.jpg",
        imageAlt: "SeaWorld San Diego entrance and attractions",
        description:
          "A marine-themed park combining thrilling rides with up-close animal encounters and educational shows like Orca Encounter and Dolphin Adventures.",
        url: "https://seaworld.com",
        address: "500 Sea World Dr, San Diego, CA 92109",
      },
      {
        id: "belmont-park",
        sectionId: "mission-beach",
        sectionLabel: "MISSION BEACH",
        title: "Belmont Amusement Park",
        imageSrc: "/5. _tourism IMAGES/36.) Belmont Amusement Park.jpg",
        imageAlt: "Belmont Park Giant Dipper roller coaster",
        description:
          "A classic seaside amusement park featuring the historic 1925 Giant Dipper roller coaster and a variety of beachfront rides and attractions.",
        url: "https://www.belmontpark.com",
        address: "3146 Mission Blvd, San Diego, CA 92109",
      },
    
      // --- OUTDOOR ADVENTURES ---
      {
        id: "la-jolla-cove",
        sectionId: "outdoor-adventures",
        sectionLabel: "OUTDOOR ADVENTURES",
        title: "La Jolla Cove",
        imageSrc: "/5. _tourism IMAGES/37) La Jolla Cove.jpg",
        imageAlt: "La Jolla Cove cliffs and ocean",
        description:
          "A picturesque cove within a protected ecological reserve, famous for its clear water, sea life, and dramatic coastal scenery.",
        url: "https://en.wikipedia.org/wiki/La_Jolla_Cove",
        address: "1100 Coast Blvd, La Jolla, CA 92037",
      },
      {
        id: "torrey-pines-state-park",
        sectionId: "outdoor-adventures",
        sectionLabel: "OUTDOOR ADVENTURES",
        title: "Torrey Pines State Park",
        imageSrc: "/5. _tourism IMAGES/38.) Torrey Pines State Park.jpg",
        imageAlt: "Hiking trail at Torrey Pines State Park",
        description:
          "A breathtaking coastal reserve and one of the only places where rare Torrey pine trees grow, with cliffside trails and sweeping ocean views.",
        url: "https://torreypine.org",
        address: "12600 N Torrey Pines Rd, La Jolla, CA 92037",
      },
      {
        id: "cabrillo-national-monument",
        sectionId: "outdoor-adventures",
        sectionLabel: "OUTDOOR ADVENTURES",
        title: "Cabrillo National Monument",
        imageSrc: "/5. _tourism IMAGES/39.) CabrilloMonument.jpg",
        imageAlt: "Cabrillo National Monument and lighthouse",
        description:
          "Perched on the tip of Point Loma, it features the historic Old Point Loma Lighthouse and panoramic views of San Diego Bay and skyline.",
        url: "https://www.cnmf.org/visit-the-park",
        address: "1800 Cabrillo Memorial Dr, San Diego, CA 92106",
      },
    
      // --- SPORT ACTIVITIES ---
      {
        id: "boating-yachting",
        sectionId: "sport-activities",
        sectionLabel: "SPORT ACTIVITIES",
        title: "Boating & Yachting",
        imageSrc: "/5. _tourism IMAGES/40.) BoatingYachting.jpg",
        imageAlt: "Boats and yachts in San Diego Bay",
        description:
          "From chartered yachts to sailboat rentals and harbor tours, visitors can experience the bay and its iconic landmarks from the water.",
        url: "https://www.sandiego.org/things-to-do/boating-sailing",
        address: "San Diego, CA",
      },
      {
        id: "surfing",
        sectionId: "sport-activities",
        sectionLabel: "SPORT ACTIVITIES",
        title: "Surfing",
        imageSrc: "/5. _tourism IMAGES/41.) Surfing.jpg",
        imageAlt: "Surfer riding a wave in San Diego",
        description:
          "San Diego’s surf breaks range from beginner-friendly waves at La Jolla Shores and Pacific Beach to world-class spots like Black’s Beach and Windansea.",
        url: "https://www.surfline.com/travel/san-diego-surfing-and-beaches",
        address: "San Diego, CA",
      },
      {
        id: "del-mar-racetrack",
        sectionId: "sport-activities",
        sectionLabel: "SPORT ACTIVITIES",
        title: "Del Mar Racetrack",
        imageSrc: "/5. _tourism IMAGES/42.) Del Mar Racetrack.jpg",
        imageAlt: "Del Mar Racetrack grandstand",
        description:
          'A historic seaside racetrack where “the turf meets the surf,” blending old Hollywood glamour with top-tier thoroughbred racing.',
        url: "https://www.dmtc.com",
        address: "2260 Jimmy Durante Blvd, Del Mar, CA 92014",
      },
    
      // --- GOLF COURSES ---
      {
        id: "coronado-golf-course",
        sectionId: "golf-courses",
        sectionLabel: "GOLF COURSES",
        title: "Coronado Golf Course",
        imageSrc: "/5. _tourism IMAGES/43.) Coronado Golf Course.jpg",
        imageAlt: "Coronado Golf Course with bay views",
        description:
          "One of the nation’s best municipal courses, offering an approachable layout paired with stunning views just minutes from downtown.",
        url: "https://www.golfcoronado.com",
        address: "2000 Visalia Row, Coronado, CA 92118",
      },
      {
        id: "torrey-pines-golf-course",
        sectionId: "golf-courses",
        sectionLabel: "GOLF COURSES",
        title: "Torrey Pines Golf Course",
        imageSrc: "/5. _tourism IMAGES/44.) Torrey Pines Golf Course.jpg",
        imageAlt: "Torrey Pines Golf Course overlooking the ocean",
        description:
          "A legendary public course overlooking the Pacific, known for its championship history, challenging layout, and spectacular scenery.",
        url: "https://www.torreypines.com",
        address: "11480 N Torrey Pines Rd, La Jolla, CA 92037",
      },
      {
        id: "balboa-park-golf-course",
        sectionId: "golf-courses",
        sectionLabel: "GOLF COURSES",
        title: "Balboa Park Golf Course",
        imageSrc:
          "/5. _tourism IMAGES/45.) Balboa_Park_Golf_Course.jpg",
        imageAlt: "Balboa Park Golf Course fairway",
        description:
          "One of San Diego’s oldest public courses, offering classic golf with convenient access to all the attractions of Balboa Park.",
        url: "https://balboaparkgolf.com",
        address: "2600 Golf Course Dr, San Diego, CA 92102",
      },
    
      // --- SHOPPING ---
      {
        id: "mission-valley-mall",
        sectionId: "shopping",
        sectionLabel: "SHOPPING",
        title: "Mission Valley Mall",
        imageSrc:
          "/5. _tourism IMAGES/46.) Mission_Valley_West,_San_Diego,_CA,_USA_-_panoramio_(8).jpg",
        imageAlt: "Mission Valley shopping area",
        description:
          "A centrally located shopping hub with an easy-to-navigate layout, offering retail, dining, and convenient access to nearby attractions.",
        url: "https://www.mission-valley.com",
        address: "1640 Camino Del Rio N, San Diego, CA 92108",
      },
      {
        id: "hillcrest-district",
        sectionId: "shopping",
        sectionLabel: "SHOPPING",
        title: "Hillcrest District",
        imageSrc: "/5. _tourism IMAGES/47.) Hillcrest,_San_Diego_Sign.jpg",
        imageAlt: "Hillcrest neighborhood sign",
        description:
          "A vibrant, welcoming neighborhood and cultural hub with diverse restaurants, nightlife, and unique local shops.",
        url: "https://www.fabuloushillcrest.com",
        address: "499 University Ave, San Diego, CA 92103",
      },
      {
        id: "fashion-valley-mall",
        sectionId: "shopping",
        sectionLabel: "SHOPPING",
        title: "Fashion Valley Mall",
        imageSrc: "/5. _tourism IMAGES/48.) Fashion_Valley_Mall.jpg",
        imageAlt: "Fashion Valley outdoor mall",
        description:
          "San Diego’s premier outdoor luxury shopping destination, home to high-end department stores, designer boutiques, and upscale dining.",
        url: "https://www.simon.com/mall/fashion-valley",
        address: "7007 Friars Rd, San Diego, CA 92108",
      },
    
      // --- UNIVERSITIES ---
      {
        id: "ucsd",
        sectionId: "universities",
        sectionLabel: "UNIVERSITIES",
        title: "UC San Diego (UCSD)",
        imageSrc: "/5. _tourism IMAGES/49.) UCSD.jpg",
        imageAlt: "UC San Diego campus view",
        description:
          "A world-renowned research university in La Jolla, known for its innovative academics and the Stuart Collection of public art.",
        url: "https://www.ucsd.edu",
        address: "9500 Gilman Dr, La Jolla, CA 92093",
      },
      {
        id: "sdsu",
        sectionId: "universities",
        sectionLabel: "UNIVERSITIES",
        title: "San Diego State University (SDSU)",
        imageSrc: "/5. _tourism IMAGES/50) SDSU.jpg",
        imageAlt: "San Diego State University campus",
        description:
          "The region’s oldest and largest higher education institution, featuring a campus defined by Spanish Colonial and Mission Revival architecture.",
        url: "https://www.sdsu.edu",
        address: "5500 Campanile Dr, San Diego, CA 92182",
      },
      {
        id: "usd",
        sectionId: "universities",
        sectionLabel: "UNIVERSITIES",
        title: "University of San Diego (USD)",
        imageSrc: "/5. _tourism IMAGES/51.) USD.jpg",
        imageAlt: "University of San Diego campus",
        description:
          "A hilltop campus overlooking Mission Bay and the Pacific, widely regarded as one of the most beautiful university settings in the country.",
        url: "https://www.sandiego.edu",
        address: "5998 Alcala Park Way, San Diego, CA 92110",
      },
    
];

const NEIGHBORHOOD_FILTERS: { id: NeighborhoodId; label: string }[] = [
  { id: "top", label: "SAN DIEGO TOURISM" },
  { id: "balboa-park", label: "BALBOA PARK ATTRACTIONS" },
  { id: "bankers-hill", label: "BANKERS HILL" },
  { id: "beaches", label: "BEACHES" },
  { id: "embarcadero", label: "EMBARCADERO" },
  { id: "gaslamp", label: "GASLAMP DISTRICT" },
  { id: "golf-courses", label: "GOLF COURSES" },
  { id: "mission-beach", label: "MISSION BEACH" },
  { id: "museums", label: "MUSEUMS" },
  { id: "old-town", label: "OLD TOWN" },
  { id: "outdoor-adventures", label: "OUTDOOR ADVENTURES" },
  { id: "shopping", label: "SHOPPING" },
  { id: "sport-activities", label: "SPORT ACTIVITIES" },
  { id: "universities", label: "UNIVERSITIES" },
];

function scrollToSection(id: NeighborhoodId) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 120; // account for header
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function TourismCard({ place }: { place: TourismPlace }) {
  const cardInner = (
    <>
      <div className="relative w-full h-64 sm:h-72 overflow-hidden rounded-t-md">
        <Image
          src={place.imageSrc}
          alt={place.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-5 pb-5 pt-4 text-center">
        <h3 className="tourism-place-title">
          {place.title}
        </h3>
        <p className="tourism-place-description">{place.description}</p>
        {place.url && (
          <p className="tourism-place-url">
            {place.url.replace(/^https?:\/\//, "")}
          </p>
        )}
        {place.address && (
          <p className="tourism-place-address">
            {place.address}
          </p>
        )}
      </div>
    </>
  );

  return (
    <article className="bg-white rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.18)] overflow-hidden border border-black/8">
      {place.url ? (
        <Link href={place.url} target="_blank" rel="noreferrer">
          {cardInner}
        </Link>
      ) : (
        cardInner
      )}
    </article>
  );
}

export default function TourismPage() {
  const [open, setOpen] = useState(false);

  // group places by section id in display order
  const sections: { id: NeighborhoodId; label: string; places: TourismPlace[] }[] =
    [];
  for (const filter of NEIGHBORHOOD_FILTERS) {
    const places = PLACES.filter((p) => p.sectionId === filter.id);
    if (places.length > 0) {
      sections.push({ id: filter.id, label: filter.label, places });
    }
  }

  return (
    <main className="bg-white pb-16">
      {/* page anchor for "top" */}
      <div id="top" />

     {/* TITLE */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-2">
  <h1 className="tourism-page-title">SAN DIEGO TOURISM</h1>
</section>

{/* STICKY NEIGHBORHOOD CONTROL */}
<div className="sticky top-4 sm:top-6 md:top-8 z-30  ">

  <div className=" ">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 ">
      <div className="flex justify-center ">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className=" bg-white/80 backdrop-blur-soft mb-4 border-b-2 border-[#06a9ff] w-full max-w-xs sm:max-w-sm  py-3 px-4 flex items-center justify-center text-base"
        >
          <span className="text-[#0077cc] hover:italic ">Search By Neighborhood</span>
          <span className="text-xl leading-none">{open ? "✕" : null}</span>
        </button>
      </div>
    </div>
  </div>
</div>



        {/* DROPDOWN PANEL */}
        {open && (
          <div className="fixed inset-0 z-40 flex items-start justify-center pt-10 sm:pt-10 bg-black/30">
            <div className="w-full max-w-xs sm:max-w-sm bg-white border border-black shadow-xl">
              <div className="flex items-center justify-between  px-4 py-3 border-b border-black/15">
                <span className=" text-base tracking-wide text-[#0077cc] ">
                  Search By Neighborhood
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-xl leading-none"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <ul className="max-h-[70vh] overflow-y-auto border-b-40 border-b-[#66cbff]">
                {NEIGHBORHOOD_FILTERS.map((item, idx) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        setTimeout(() => scrollToSection(item.id), 50);
                      }}
                      className={clsx(
                        "w-full text-left px-5 py-3 border-t border-black/15 text-[0.95rem] font-bold uppercase",
                        
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      {/* SECTIONS WITH CARDS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-32">
            {/* hide heading for top group (already have big title) */}
            {section.id !== "top" && (
              <h2 className="tourism-section-title">
                {section.label}
              </h2>
            )}

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.places.map((place) => (
                <TourismCard key={place.id} place={place} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
