import Image from "next/image";
import Link from "next/link";

export default function CoronadoIndependentFilmFestPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-16">
      {/* Page title block */}
      <header className="py-10 text-center">
        <h1 className="font-rowdies text-4xl font-extrabold tracking-wide text-sky-500 sm:text-5xl">
          INDEPENDENT
          <br />
          FILM SCREENINGS
        </h1>
        <h2 className="mt-2 font-rowdies text-3xl font-extrabold tracking-wide text-black sm:text-4xl">
          CORONADO ISLAND
        </h2>
      </header>

      {/* Image 1 */}
      <section className="w-full">
        <div className="relative w-full overflow-hidden rounded-sm border border-black/20">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/coronado/1.) Hotel Coronado NEWM.JPG"
              alt="Hotel del Coronado"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, 900px"
            />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-black/80 sm:text-base">
          Several times each year the{" "}
          <span className="font-semibold text-black">
            San Diego Independent Film Society
          </span>{" "}
          hosts Film Screening Events for New &amp; Undistributed Independent
          Films on Coronado Island, San Diego.
        </p>
      </section>

      {/* Tickets & Passes */}
      <section className="mt-12 text-center">
        <h3 className="font-rowdies text-3xl font-extrabold tracking-wide text-sky-500 sm:text-4xl">
          TICKETS &amp; PASSES
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-black/80 sm:text-base">
          Upcoming Coronado Island film screening &amp; film event updates with
          event screening times will be posted on social media as they are
          scheduled.
        </p>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-black/80 sm:text-base">
          Check out upcoming{" "}
          <span className="font-semibold text-black">
            Coronado Island Independent Film Screenings
          </span>{" "}
          {" "}
          <Link
            href="https://www.eventive.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 underline underline-offset-2"
          >
            here
          </Link>
          .
        </p>
      </section>

      {/* Image 2 */}
      <section className="mt-10 w-full">
        <div className="relative w-full overflow-hidden rounded-sm border border-black/20">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/coronado/2.) Village Theater NEWM.JPG"
              alt="Village Theater"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 900px"
            />
          </div>
        </div>
      </section>

      {/* Participate */}
      <section className="mt-12 text-center">
        <h3 className="font-rowdies text-3xl font-extrabold tracking-wide text-sky-500 sm:text-4xl">
          PARTICIPATE
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-black/80 sm:text-base">
          To submit a film project for review and consideration to screen at
          Coronado Independent Film Fest screening events use{" "}
          <a
            href="https://filmfreeway.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 underline underline-offset-2"
          >
            FilmFreeway
          </a>{" "}
          to submit a film or screenplay.
        </p>

        {/* FilmFreeway button image */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://filmfreeway.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            aria-label="Submit on FilmFreeway"
          >
            <Image
              src="/coronado/4.) FilmFreeway Button BLUE.png"
              alt="Click to Submit on FilmFreeway"
              width={520}
              height={160}
              className="h-auto w-[260px] sm:w-[340px]"
              priority={false}
            />
          </a>
        </div>
      </section>

      {/* Image 3 */}
      <section className="mt-12 w-full">
        <div className="relative w-full overflow-hidden rounded-sm border border-black/20">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="/coronado/3.) Beach Party VW NEWM.png"
              alt="Beach party with VW bus"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 900px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
