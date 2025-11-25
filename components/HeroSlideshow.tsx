"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 1 - SD COASTLINE_NEW.png",
    alt: "San Diego coastline and skyline",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 2 - Cary Grant_NEW.png",
    alt: "Classic film still with Cary Grant",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 3 - Balboa Park Garden_NEW.png",
    alt: "Balboa Park garden",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 4 - OneEyeJack_NEW.png",
    alt: "Film still – One Eye Jack",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 5 - SD Boat Skyline_NEW.png",
    alt: "Boats and San Diego skyline",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 6 - Flamingos_NEW.png",
    alt: "Flamingos at the zoo",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 7  - Last Man on Earth_NEW.png",
    alt: "Film still – Last Man on Earth",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 8 - Resort Pool_NEW.png",
    alt: "Resort pool",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 9 - Coranado Hotel Close Up_NEW.png",
    alt: "Coronado Hotel close-up",
  },
  {
    src: "/1b. HOMEPAGE SLIDESHOW IMAGES/SLIDE 10 - Beach Sunset_NEW.png",
    alt: "Beach sunset",
  },
];

const SLIDE_INTERVAL = 6000; // 6 seconds

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const goTo = (next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="relative w-full border-b border-black/10">
      <div className="relative w-full aspect-video max-h-[640px] overflow-hidden">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* gradient for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent" />

        {/* overlay text bar – keeps same proportion on all breakpoints */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="h-[26%] bg-black/40 flex items-center">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 pb-4">
              <div className="text-right ">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-racing font-light italic text-white leading-tight">
                  Lights, Camera, Coastline
                </h1>
                <p className="mt-2 text-lg sm:text-base md:text-3xl font-rowdies font-light text-white tracking-wide">
                  TICKETS &amp; PASSES –{" "}
                  <span className="text-[#90ddff] text-lg md:text-3xl font-light"> On Sale In Nov</span>
                </p>
              </div>
            </div>
          </div>
        </div>


        
      </div>
    </section>
  );
}
