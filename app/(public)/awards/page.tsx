// app/awards/page.tsx
import Image from "next/image";
import Link from "next/link";

const FILMFREEWAY = "https://filmfreeway.com";

// Helper: your laurel filenames contain spaces, so encode them safely.
function laurelSrc(filename: string) {
  return encodeURI(
    `/awards/AWARD LAURELS San Diego Independent Film Fest/${filename}`
  );
}

function LaurelLink({
  filename,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 260px, 42vw",
  priority = false,
}: {
  filename: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={FILMFREEWAY}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
      aria-label={`Open FilmFreeway (laurel): ${alt}`}
    >
      <Image
        src={laurelSrc(filename)}
        alt={alt}
        width={520}
        height={520}
        className={className}
        sizes={sizes}
        priority={priority}
      />
    </Link>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-rowdies font-bold uppercase tracking-[0.08em] text-[#00aaff] text-sm sm:text-base text-center mt-10">
      {children}
    </h2>
  );
}

function BigFestivalTitle() {
  return (
    <div className="text-center mt-4 sm:mt-6">
      {/* This matches the mock: airy, centered, blue, Rowdies caps */}
      <p className="font-rowdies font-bold text-[#00aaff] uppercase tracking-[0.12em] text-sm sm:text-base">
        San Diego Independent
      </p>
      <p className="font-rowdies font-bold text-[#00aaff] uppercase tracking-[0.12em] text-sm sm:text-base -mt-0.5">
        Film Festival
      </p>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-[720px] px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Top titles */}
        <BigFestivalTitle />

        <div className="text-center mt-3 sm:mt-4">
          <p className="font-rowdies font-bold uppercase tracking-[0.14em] text-[11px] sm:text-xs">
            7th Annual
          </p>
          <p className="font-rowdies font-bold uppercase tracking-[0.14em] text-[13px] sm:text-sm mt-0.5">
            Independent Film
          </p>
          <p className="font-rowdies font-bold uppercase tracking-[0.14em] text-[13px] sm:text-sm -mt-0.5">
            Awards
          </p>
        </div>

        {/* Official Selection laurel */}
        <div className="flex justify-center mt-6 sm:mt-7">
          <LaurelLink
            filename={"sd laurels28 OFFICAL SELECTION.jpg"}
            alt="Official Selection"
            className="h-auto w-[210px] sm:w-[260px]"
            sizes="(min-width: 1024px) 260px, 60vw"
            priority
          />
        </div>

        {/* Mid copy stack (tight, centered) */}
        <div className="text-center mt-5 sm:mt-6">
          <p className="font-rowdies font-bold uppercase tracking-[0.12em] text-[12px] sm:text-sm">
            27 Film Awards
          </p>
          <p className="text-[11px] sm:text-xs mt-1">Presented Annually</p>
          <p className="text-[11px] sm:text-xs">
            By The
            <br />
            <span className="font-rowdies font-bold uppercase tracking-widest">
              San Diego Independent
            </span>
            <br />
            <span className="font-rowdies font-bold uppercase tracking-widest">
              Cinema Society
            </span>
          </p>

          <div className="mt-3">
            <BigFestivalTitle />
          </div>

          <p className="font-rowdies font-bold uppercase tracking-[0.12em] text-[12px] sm:text-sm mt-2">
            Award Ceremony
          </p>
          <p className="text-[11px] sm:text-xs mt-1">
            Held in the Balboa Park Culture District in
            <br />
            San Diego, California.
          </p>
        </div>

        {/* 6 small Official Selection laurels row */}
        <div className="mt-6 sm:mt-7 flex justify-center">
          <div className="grid grid-cols-3 gap-x-3 gap-y-3 sm:grid-cols-6 sm:gap-x-4 sm:gap-y-0 items-center">
            {Array.from({ length: 6 }).map((_, i) => (
              <LaurelLink
                key={i}
                filename={"sd laurels28 OFFICAL SELECTION.jpg"}
                alt={`Official Selection small ${i + 1}`}
                className="h-auto w-[86px] sm:w-[88px]"
                sizes="88px"
              />
            ))}
          </div>
        </div>

        {/* Award Categories */}
        <SectionTitle>AWARD CATEGORIES</SectionTitle>

        {/* Best Picture */}
        <SectionTitle>BEST PICTURE</SectionTitle>
        <div className="flex justify-center mt-2">
          <LaurelLink
            filename={"sd laurels1 BEST PICTURE.jpg"}
            alt="Best Picture"
            className="h-auto w-[210px] sm:w-[260px]"
            sizes="(min-width: 1024px) 260px, 60vw"
          />
        </div>

        {/* Best Director */}
        <SectionTitle>BEST DIRECTOR</SectionTitle>
        <div className="flex justify-center mt-2">
          <LaurelLink
            filename={"sd laurels2.jpg"}
            alt="Best Director"
            className="h-auto w-[210px] sm:w-[260px]"
            sizes="(min-width: 1024px) 260px, 60vw"
          />
        </div>

        {/* Best Actor / Actress (paired like mock) */}
        <SectionTitle>
          BEST ACTOR
          <br />
          BEST ACTRESS
        </SectionTitle>
        <div className="mt-2 grid grid-cols-2 gap-4 sm:gap-6 items-end">
          <div className="flex justify-center">
            <LaurelLink
              filename={"sd laurels3.jpg"}
              alt="Best Actor"
              className="h-auto w-40 sm:w-[200px]"
              sizes="(min-width: 1024px) 200px, 45vw"
            />
          </div>
          <div className="flex justify-center">
            <LaurelLink
              filename={"sd laurels4.jpg"}
              alt="Best Actress"
              className="h-auto w-40 sm:w-[200px]"
              sizes="(min-width: 1024px) 200px, 45vw"
            />
          </div>
        </div>

        {/* Best of San Diego */}
        <SectionTitle>BEST of SAN DIEGO</SectionTitle>
        <div className="flex justify-center mt-2">
          <LaurelLink
            filename={"sd laurels5.jpg"}
            alt="Best of San Diego"
            className="h-auto w-[210px] sm:w-[260px]"
            sizes="(min-width: 1024px) 260px, 60vw"
          />
        </div>

        {/* 4-pack: Drama / Comedy / Documentary / Animation */}
        <div className="mt-8 sm:mt-10">
          <div className="text-center space-y-1">
            <SectionTitle>BEST DRAMA</SectionTitle>
            <SectionTitle>BEST COMEDY</SectionTitle>
            <SectionTitle>BEST DOCUMENTARY</SectionTitle>
            <SectionTitle>BEST ANIMATION</SectionTitle>
          </div>

          {/* Desktop row of 4, mobile still in a neat row like mock */}
          <div className="mt-2 grid grid-cols-4 gap-2 sm:gap-4 items-end">
            <LaurelLink
              filename={"sd laurels6.jpg"}
              alt="Best Drama"
              className="h-auto w-full"
              sizes="(min-width: 1024px) 140px, 22vw"
            />
            <LaurelLink
              filename={"sd laurels7.jpg"}
              alt="Best Comedy"
              className="h-auto w-full"
              sizes="(min-width: 1024px) 140px, 22vw"
            />
            <LaurelLink
              filename={"sd laurels8.jpg"}
              alt="Best Documentary"
              className="h-auto w-full"
              sizes="(min-width: 1024px) 140px, 22vw"
            />
            <LaurelLink
              filename={"sd laurels9.jpg"}
              alt="Best Animation"
              className="h-auto w-full"
              sizes="(min-width: 1024px) 140px, 22vw"
            />
          </div>
        </div>

        {/* 4-pack: Thriller / Horror / Experimental / Episodic */}
        <div className="mt-10 sm:mt-12">
          <div className="text-center space-y-1">
            <SectionTitle>BEST THRILLER</SectionTitle>
            <SectionTitle>BEST HORROR</SectionTitle>
            <SectionTitle>BEST EXPERIMENTAL</SectionTitle>
            <SectionTitle>
              BEST EPISODIC
              <br />
              (STREAMING / TELEVISION)
            </SectionTitle>
          </div>

          <div className="mt-2 grid grid-cols-4 gap-2 sm:gap-4 items-end">
            <LaurelLink
              filename={"sd laurels10.jpg"}
              alt="Best Thriller"
              className="h-auto w-full"
            />
            <LaurelLink
              filename={"sd laurels11.jpg"}
              alt="Best Horror"
              className="h-auto w-full"
            />
            <LaurelLink
              filename={"sd laurels12.jpg"}
              alt="Best Experimental"
              className="h-auto w-full"
            />
            <LaurelLink
              filename={"sd laurels13.jpg"}
              alt="Best Episodic Series"
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Best Short Film */}
        <SectionTitle>BEST SHORT FILM</SectionTitle>
        <div className="flex justify-center mt-2">
          <LaurelLink
            filename={"sd laurels14.jpg"}
            alt="Best Short Film"
            className="h-auto w-[210px] sm:w-[260px]"
            sizes="(min-width: 1024px) 260px, 60vw"
          />
        </div>

        {/* Short-form list (text-only like mock) */}
        <div className="text-center mt-6 sm:mt-7 space-y-1">
          {[
            "BEST DRAMA",
            "BEST COMEDY",
            "BEST DOCUMENTARY",
            "BEST ANIMATION",
            "BEST THRILLER",
            "BEST HORROR",
            "BEST SHORT FORM VIDEO",
            "(YouTube / TikTok)",
            "BEST MUSIC VIDEO",
          ].map((t) => (
            <p
              key={t}
              className={`font-rowdies font-bold uppercase tracking-widest ${
                t.startsWith("(")
                  ? "text-[11px] sm:text-xs text-black/70"
                  : "text-[#00aaff] text-[12px] sm:text-sm"
              }`}
            >
              {t}
            </p>
          ))}
        </div>

        {/* Best Student Film */}
        <SectionTitle>BEST STUDENT FILM</SectionTitle>
        <div className="flex justify-center mt-2">
          <LaurelLink
            filename={"sd laurels15.jpg"}
            alt="Best Student Film"
            className="h-auto w-[210px] sm:w-[260px]"
            sizes="(min-width: 1024px) 260px, 60vw"
          />
        </div>

        <div className="text-center mt-5 sm:mt-6 space-y-1">
          {["(Worldwide)", "(UCSD)", "(SDSU)", "(USD)", "(SDCC)"].map((t) => (
            <p
              key={t}
              className="font-rowdies font-bold uppercase tracking-widest text-[#00aaff] text-[12px] sm:text-sm"
            >
              BEST STUDENT FILM {t}
            </p>
          ))}
        </div>

        {/* Screenplay row (4 laurels) */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="font-rowdies font-bold uppercase tracking-[0.12em] text-[#00aaff] text-[14px] sm:text-base">
            BEST
            <br />
            SCREENPLAY
          </p>
          <p className="font-rowdies font-bold uppercase tracking-[0.12em] text-[#00aaff] text-[12px] sm:text-sm -mt-1">
            $2000 GRAND PRIZE
          </p>
        </div>

        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-4 items-end">
          <LaurelLink
            filename={"sd laurels30 BEST SCREENPLAY.jpg"}
            alt="Best Screenplay 1st Place"
            className="h-auto w-full"
          />
          <LaurelLink
            filename={"sd laurels31.jpg"}
            alt="Best Screenplay 1st Runner Up"
            className="h-auto w-full"
          />
          <LaurelLink
            filename={"sd laurels32.jpg"}
            alt="Best Teleplay"
            className="h-auto w-full"
          />
          <LaurelLink
            filename={"sd laurels33.jpg"}
            alt="Best Short Teleplay"
            className="h-auto w-full"
          />
        </div>

        <div className="text-center mt-6 sm:mt-7 space-y-1">
          {[
            "BEST SCREENPLAY",
            "1st Runner Up",
            "BEST SCREENPLAY",
            "2nd Runner Up",
            "BEST TELEPLAY",
            "BEST SHORT TELEPLAY",
            "- UNDER 40 PAGES -",
          ].map((t) => (
            <p
              key={t}
              className={`font-rowdies font-bold uppercase tracking-widest ${
                t.startsWith("-")
                  ? "text-[11px] sm:text-xs text-black/70"
                  : "text-[#00aaff] text-[12px] sm:text-sm"
              }`}
            >
              {t}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
