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
      target='_blank'
      rel='noopener noreferrer'
      className='inline-block'
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
    <h2 className='font-rowdies font-bold uppercase tracking-[0.08em] text-[#00aaff] text-sm sm:text-base text-center mt-10'>
      {children}
    </h2>
  );
}

function BigFestivalTitle() {
  return (
    <div className='text-center'>
      {/* This matches the mock: airy, centered, blue, Rowdies caps */}
      <h1 className='awards-h1-blue'>San Diego Independent</h1>
      <h1 className='awards-h1-blue'>Film Festival</h1>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <main className='bg-white'>
      <div className='mx-auto w-full max-w-[720px] md:max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10'>
        {/* Top titles */}
        <BigFestivalTitle />

        <div className='text-center mt-3 sm:mt-4'>
          <p className='awards-small-tag'>7th Annual</p>
          <h1 className='awards-h1-black'>Independent Film</h1>
          <p className='awards-h1-black'>Awards</p>
        </div>

        {/* Official Selection laurel */}
        <div className='flex justify-center'>
          <LaurelLink
            filename={"sd laurels28 OFFICAL SELECTION.jpg"}
            alt='Official Selection'
            className='awards-larel-large'
            sizes='(min-width: 1024px) 260px, 60vw'
            priority
          />
        </div>

        {/* Mid copy stack (tight, centered) */}
        <div className='text-center mt-5 sm:mt-6'>
          <h3 className='font-rowdies font-light uppercase text-2xl md:text-5xl'>
            27 Film Awards
          </h3>
          <h4 className='awards-small-tag'>
            Presented Annually
            <br />
            By The
          </h4>
          <h3 className='awards-h1-black italic mt-6'>
            San Diego Independent
            <br />
            Cinema Society
          </h3>
          <h4 className='awards-small-tag mt-6'>As part of the</h4>

          <div className='mt-6'>
            <h1 className='awards-h1-blue font-light'>
              San Diego Independent
              <br />
              Film Festival
              <br />
              <span className='text-black'>Award Ceremony</span>
            </h1>
          </div>

          <h4 className='awards-small-tag mt-6'>
            Held in the Balboa Park Culture District in
            <br />
            San Diego, California.
          </h4>
        </div>

        {/* 6 small Official Selection laurels row */}
<div className="mt-6 sm:mt-7 flex justify-center">
  <div className="grid grid-cols-6 gap-x-3 sm:gap-x-4 items-center">
    {Array.from({ length: 6 }).map((_, i) => (
      <LaurelLink
        key={i}
        filename="sd laurels28 OFFICAL SELECTION.jpg"
        alt={`Official Selection small ${i + 1}`}
        className="w-[72px] sm:w-[88px] h-auto"
        sizes="88px"
      />
    ))}
  </div>
</div>


        {/* Award Categories */}
        <h1 className='uppercase italic  tracking-tight text-3xl md:text-4xl text-center mt-18'>
          award categories
        </h1>

        {/* Best Picture */}
        <h1 className='awards-h1-blue mt-6'>BEST PICTURE</h1>
        <div className='flex justify-center mt-2'>
          <LaurelLink
            filename={"sd laurels1 BEST PICTURE.jpg"}
            alt='Best Picture'
            className='awards-laurel-large'
            sizes='(min-width: 1024px) 260px, 60vw'
          />
        </div>

        {/* Best Director */}
        <h1 className='awards-laurel-title'>BEST DIRECTOR</h1>
        <div className='flex justify-center'>
          <LaurelLink
            filename={"sd laurels2.jpg"}
            alt='Best Director'
            className='awards-laurel-large'
            sizes='(min-width: 1024px) 260px, 60vw'
          />
        </div>
<section className="md:flex justify-center md:space-x-20 ">
  <div>
    {/* Best Actor */}
        <h1 className='awards-laurel-title'>BEST Actor</h1>
        <div className='flex justify-center'>
          <LaurelLink
            filename={"sd laurels3.jpg"}
            alt='Best Actor'
            className='awards-laurel-medium'
            sizes='(min-width: 1024px) 200px, 45vw'
          />
        </div>
  </div>
<div>
{/* Best Actress */}
        <h1 className='awards-laurel-title'>BEST ACTRESS</h1>
        <div className='flex justify-center'>
          <LaurelLink
            filename={"sd laurels4.jpg"}
            alt='Best Actress'
            className='awards-laurel-medium'
            sizes='(min-width: 1024px) 200px, 45vw'
          />
        </div>
</div>
        
</section>
        

        

        {/* Best of San Diego */}
        <h1 className='awards-laurel-title'>BEST of SAN DIEGO</h1>
        <div className='flex justify-center mt-2'>
          <LaurelLink
            filename={"sd laurels5.jpg"}
            alt='Best of San Diego'
            className='awards-laurel-medium'
            sizes='(min-width: 1024px) 260px, 60vw'
          />
        </div>

        <section id='Genres' >
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div>
              <h1 className='awards-laurel-title md:text-2xl'>BEST DRAMA</h1>
              <div className='flex justify-center mt-2'>
                <LaurelLink
                  filename={"sd laurels6.jpg"}
                  alt='Best Drama'
                  className='awards-laurel-medium md:awards-laurel-small'
                  sizes='(min-width: 1024px) 260px, 60vw'
                />
              </div>
            </div>

            <div>
              <h1 className='awards-laurel-title md:text-2xl'>BEST COMEDY</h1>
              <div className='flex justify-center mt-2'>
                <LaurelLink
                  filename={"sd laurels7.jpg"}
                  alt='Best Comedy'
                  className='awards-laurel-medium md:awards-laurel-small'
                  sizes='(min-width: 1024px) 260px, 60vw'
                />
              </div>
            </div>

            <div>
              <h1 className='awards-laurel-title md:text-2xl'>BEST DOCUMENTARY</h1>
              <div className='flex justify-center mt-2'>
                <LaurelLink
                  filename={"sd laurels8.jpg"}
                  alt='Best Documentary'
                  className='awards-laurel-medium md:awards-laurel-small'
                  sizes='(min-width: 1024px) 260px, 60vw'
                />
              </div>
            </div>

            <div>
              <h1 className='awards-laurel-title md:text-2xl'>BEST ANIMATION</h1>
              <div className='flex justify-center mt-2'>
                <LaurelLink
                  filename={"sd laurels9.jpg"}
                  alt='Best Animation'
                  className='awards-laurel-medium md:awards-laurel-small'
                  sizes='(min-width: 1024px) 260px, 60vw'
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4-pack: Drama / Comedy / Documentary / Animation */}
        <div className='mt-8 sm:mt-10'>
          {/* <div className='text-center space-y-1'>
            <SectionTitle>BEST DRAMA</SectionTitle>
            <SectionTitle>BEST COMEDY</SectionTitle>
            <SectionTitle>BEST DOCUMENTARY</SectionTitle>
            <SectionTitle>BEST ANIMATION</SectionTitle>
          </div> */}

          {/* Desktop row of 4, mobile still in a neat row like mock */}
          {/* <div className='mt-2 grid grid-cols-4 gap-2 sm:gap-4 items-end'>
            <LaurelLink
              filename={"sd laurels6.jpg"}
              alt='Best Drama'
              className='h-auto w-full'
              sizes='(min-width: 1024px) 140px, 22vw'
            />
            <LaurelLink
              filename={"sd laurels7.jpg"}
              alt='Best Comedy'
              className='h-auto w-full'
              sizes='(min-width: 1024px) 140px, 22vw'
            />
            <LaurelLink
              filename={"sd laurels8.jpg"}
              alt='Best Documentary'
              className='h-auto w-full'
              sizes='(min-width: 1024px) 140px, 22vw'
            />
            <LaurelLink
              filename={"sd laurels9.jpg"}
              alt='Best Animation'
              className='h-auto w-full'
              sizes='(min-width: 1024px) 140px, 22vw'
            />
          </div> */}
        </div>
        {/* 6 small Official Selection laurels row */}
<div className="mt-6 sm:mt-7 flex justify-center">
  <div className="grid grid-cols-6 gap-x-3 sm:gap-x-4 items-center">
    {Array.from({ length: 6 }).map((_, i) => (
      <LaurelLink
        key={i}
        filename="sd laurels28 OFFICAL SELECTION.jpg"
        alt={`Official Selection small ${i + 1}`}
        className="w-[72px] sm:w-[88px] h-auto"
        sizes="88px"
      />
    ))}
  </div>
</div>
        <section id='Genres2'>
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div>
              <h1 className='awards-laurel-title md:text-2xl'>BEST THRILLER</h1>
              <div className='flex justify-center mt-2'>
                <LaurelLink
                  filename={"sd laurels10.jpg"}
                  alt='Best Thriller'
                  className='awards-laurel-medium md:awards-laurel-small'
                  sizes='(min-width: 1024px) 260px, 60vw'
                />
              </div>
            </div>

            <div>
              <h1 className='awards-laurel-title md:text-2xl'>BEST HORROR</h1>
              <div className='flex justify-center mt-2'>
                <LaurelLink
                  filename={"sd laurels11.jpg"}
                  alt='Best Horror'
                  className='awards-laurel-medium md:awards-laurel-small'
                  sizes='(min-width: 1024px) 260px, 60vw'
                />
              </div>
            </div>

            <div>
              <h1 className='awards-laurel-title md:text-2xl'>BEST EXPERIMENTAL</h1>
              <div className='flex justify-center mt-2'>
                <LaurelLink
                  filename={"sd laurels12.jpg"}
                  alt='Best Experimental'
                  className='awards-laurel-medium md:awards-laurel-small'
                  sizes='(min-width: 1024px) 260px, 60vw'
                />
              </div>
            </div>

            <div>
              <h1 className='awards-laurel-title leading-tight md:text-2xl'>
                BEST EPISODIC
                <span className='block text-xs leading-none'>
                  (streaming/television)
                </span>
              </h1>
              <div className='flex justify-center mt-2'>
                <LaurelLink
                  filename={"sd laurels13.jpg"}
                  alt='Best Episodic'
                  className='awards-laurel-medium md:awards-laurel-small'
                  sizes='(min-width: 1024px) 260px, 60vw'
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4-pack: Thriller / Horror / Experimental / Episodic */}
        {/* <div className='mt-10 sm:mt-12'>
          <div className='text-center space-y-1'>
            <SectionTitle>BEST THRILLER</SectionTitle>
            <SectionTitle>BEST HORROR</SectionTitle>
            <SectionTitle>BEST EXPERIMENTAL</SectionTitle>
            <SectionTitle>
              BEST EPISODIC
              <br />
              (STREAMING / TELEVISION)
            </SectionTitle>
          </div>

          <div className='mt-2 grid grid-cols-4 gap-2 sm:gap-4 items-end'>
            <LaurelLink
              filename={"sd laurels10.jpg"}
              alt='Best Thriller'
              className='h-auto w-full'
            />
            <LaurelLink
              filename={"sd laurels11.jpg"}
              alt='Best Horror'
              className='h-auto w-full'
            />
            <LaurelLink
              filename={"sd laurels12.jpg"}
              alt='Best Experimental'
              className='h-auto w-full'
            />
            <LaurelLink
              filename={"sd laurels13.jpg"}
              alt='Best Episodic Series'
              className='h-auto w-full'
            />
          </div>
        </div> */}

        <section id='Short-film'>
          <div>
            <h1 className='awards-laurel-title'>best short film</h1>
            <div className='flex justify-center mt-2'>
              <LaurelLink
                filename={"sd laurels14.jpg"}
                alt='Best short film'
                className='awards-laurel-large'
                sizes='(min-width: 1024px) 260px, 60vw'
              />
            </div>
          </div>

          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best drama
              <span className='block text-xs leading-none'>short film</span>
            </h1>
          </div>

          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best comedy
              <span className='block text-xs leading-none'>short film</span>
            </h1>
          </div>

          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best documentary
              <span className='block text-xs leading-none'>short film</span>
            </h1>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best animation
              <span className='block text-xs leading-none'>short film</span>
            </h1>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best thriller
              <span className='block text-xs leading-none'>short film</span>
            </h1>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best horror
              <span className='block text-xs leading-none'>short film</span>
            </h1>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best short form video
              <span className='block text-xs leading-none'>
                youtube / tiktok
              </span>
            </h1>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best music video
            </h1>
          </div>
        </section>

        {/* Best Short Film */}
        {/* <SectionTitle>BEST SHORT FILM</SectionTitle>
        <div className='flex justify-center mt-2'>
          <LaurelLink
            filename={"sd laurels14.jpg"}
            alt='Best Short Film'
            className='h-auto w-[210px] sm:w-[260px]'
            sizes='(min-width: 1024px) 260px, 60vw'
          />
        </div> */}

        {/* Short-form list (text-only like mock) */}
        {/* <div className='text-center mt-6 sm:mt-7 space-y-1'>
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
        </div> */}
        <section id='student-film' className='mt-18'>
          <div>
            <div>
              <h1 className='awards-laurel-title leading-tight'>
                best student film
                <span className='block text-xs leading-none'>(worldwide)</span>
              </h1>
            </div>
            <div className='flex justify-center mt-2'>
              <LaurelLink
                filename={"sd laurels23.jpg"}
                alt='Best Horror'
                className='awards-laurel-medium md:awards-laurel-small'
                sizes='(min-width: 1024px) 260px, 60vw'
              />
            </div>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best student film
              <span className='block text-xs leading-none'>(UCSD)</span>
            </h1>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best student film
              <span className='block text-xs leading-none'>(SDSU)</span>
            </h1>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best student film
              <span className='block text-xs leading-none'>(USD)</span>
            </h1>
          </div>
          <div>
            <h1 className='awards-laurel-title leading-tight'>
              best student film
              <span className='block text-xs leading-none'>(SDCC)</span>
            </h1>
          </div>
        </section>

        {/* Best Student Film */}
        {/* <SectionTitle>BEST STUDENT FILM</SectionTitle>
        <div className='flex justify-center mt-2'>
          <LaurelLink
            filename={"sd laurels15.jpg"}
            alt='Best Student Film'
            className='h-auto w-[210px] sm:w-[260px]'
            sizes='(min-width: 1024px) 260px, 60vw'
          />
        </div>

        <div className='text-center mt-5 sm:mt-6 space-y-1'>
          {["(Worldwide)", "(UCSD)", "(SDSU)", "(USD)", "(SDCC)"].map((t) => (
            <p
              key={t}
              className='font-rowdies font-bold uppercase tracking-widest text-[#00aaff] text-[12px] sm:text-sm'
            >
              BEST STUDENT FILM {t}
            </p>
          ))}
        </div> */}
        <section id='Grand-prizes'>
          <div>
            <h1 className='awards-h1-blue mt-18'>
              BEST SCREENPLAY
              <span className="block text-xs md:text-xl leading-none ">
                $3000 GRAND PRIZE WINNER
              </span>
            </h1>
            <div className='flex justify-center mt-2'>
              <LaurelLink
                filename={"sd laurels30 BEST SCREENPLAY.jpg"}
                alt='Best Screenplay'
                className='awards-laurel-large'
                sizes='(min-width: 1024px) 260px, 60vw'
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4">
          <div>
            <h1 className='awards-laurel-title md:text-xl'>
              BEST SCREENPLAY
              <span className="block text-xs leading-none'>">
                - 1st Runner up -
              </span>
            </h1>
            <div className='flex justify-center mt-2'>
              <LaurelLink
                filename={"sd laurels31.jpg"}
                alt='Best Screenplay First Runner Up'
                className='awards-laurel-large'
                sizes='(min-width: 1024px) 260px, 60vw'
              />
            </div>
          </div>

          <div>
            <h1 className='awards-laurel-title md:text-xl'>
              BEST SCREENPLAY
              <span className="block text-xs leading-none'>">
                - 2nd Runner up -
              </span>
            </h1>
            <div className='flex justify-center mt-2'>
              <LaurelLink
                filename={"sd laurels32.jpg"}
                alt='Best Screenplay Second Runner Up'
                className='awards-laurel-large'
                sizes='(min-width: 1024px) 260px, 60vw'
              />
            </div>
          </div>

          <div>
            <h1 className='awards-laurel-title md:text-2xl'>
              BEST TELEPLAY
            </h1>
            <div className='flex justify-center mt-2'>
              <LaurelLink
                filename={"sd laurels33.jpg"}
                alt='Best Teleplay'
                className='awards-laurel-large'
                sizes='(min-width: 1024px) 260px, 60vw'
              />
            </div>
          </div>

          <div>
            <h1 className='awards-laurel-title md:text-xl'>
              BEST SHORT TELEPLAY
              <span className="block text-xs leading-none'>">
                - UNDER 40 PAGES -
              </span>
            </h1>
            <div className='flex justify-center mt-2'>
              <LaurelLink
                filename={"sd laurels33.jpg"}
                alt='Best Short Teleplay'
                className='awards-laurel-large'
                sizes='(min-width: 1024px) 260px, 60vw'
              />
            </div>
          </div>
</div>

        </section>
        {/* Screenplay row (4 laurels) */}
        {/* <div className='mt-10 sm:mt-12 text-center'>
          <p className='font-rowdies font-bold uppercase tracking-[0.12em] text-[#00aaff] text-[14px] sm:text-base'>
            BEST
            <br />
            SCREENPLAY
          </p>
          <p className='font-rowdies font-bold uppercase tracking-[0.12em] text-[#00aaff] text-[12px] sm:text-sm -mt-1'>
            $2000 GRAND PRIZE
          </p>
        </div> */}

        {/* <div className='mt-4 grid grid-cols-4 gap-2 sm:gap-4 items-end'>
          <LaurelLink
            filename={"sd laurels30 BEST SCREENPLAY.jpg"}
            alt='Best Screenplay 1st Place'
            className='h-auto w-full'
          />
          <LaurelLink
            filename={"sd laurels31.jpg"}
            alt='Best Screenplay 1st Runner Up'
            className='h-auto w-full'
          />
          <LaurelLink
            filename={"sd laurels32.jpg"}
            alt='Best Teleplay'
            className='h-auto w-full'
          />
          <LaurelLink
            filename={"sd laurels33.jpg"}
            alt='Best Short Teleplay'
            className='h-auto w-full'
          />
        </div> */}

        {/* <div className='text-center mt-6 sm:mt-7 space-y-1'>
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
        </div> */}
      </div>
    </main>
  );
}
