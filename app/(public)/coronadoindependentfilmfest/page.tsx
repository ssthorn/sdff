import Image from "next/image";
import Link from "next/link";

export default function CoronadoIndependentFilmFestPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-2 pb-10">
      {/* Page title block */}
      <header className="pt-4 text-center mb-4">
        <h1 className="coronado-h1-blue">
          INDEPENDENT
          <br />
          FILM SCREENINGS
          <br />
          <span className="coronado-h1-blue text-black">
          CORONADO ISLAND
        </span>
        </h1>
        
      </header>

      {/* Image 1 */}
      <section className="w-full">
        <div className="relative w-full overflow-hidden">
          <div className="relative aspect-video w-full sm:aspect-21/9">
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

        <p className="coronado-p-body mt-6">
          Several times each year the{" "}
          <span className="font-semibold text-black">
            San Diego Independent Film Society
          </span>{" "}
          hosts Film Screening Events for New &amp; Undistributed Independent
          Films on Coronado Island, San Diego.
        </p>
      </section>

      {/* Tickets & Passes */}
      <section className="mt-6 text-center">
        <h3 className="coronado-h1-blue">
          TICKETS &amp; PASSES
        </h3>

        <p className="coronado-p-body mt-2">
          Upcoming Coronado Island film screening &amp; film event updates with
          event screening times will be posted on social media as they are
          scheduled.
        </p>

        <p className="coronado-p-body mt-6">
          Check out upcoming{" "}
          <span className="font-semibold text-black">
            Coronado Island Independent Film Screenings
          </span>{" "}
          {" "}
          <Link
            href="https://www.eventive.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:underline"
          >
            here
          </Link>
          .
        </p>
      </section>

      {/* Image 2 */}
      <section className="mt-10 w-full">
        <div className="relative w-full overflow-hidden ">
          <div className="relative aspect-video w-full sm:aspect-21/9">
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
      <section className="mt-6 text-center">
        <h3 className="coronado-h1-blue">
          PARTICIPATE
        </h3>

        <p className="coronado-p-body mt-2">
          To submit a film project for review and consideration to screen at
          Coronado Independent Film Fest screening events use{" "}
          <a
            href="https://filmfreeway.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:underline"
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
              className="h-auto w-[180px]"
              priority={false}
            />
          </a>
        </div>
      </section>

      {/* Image 3 */}
      <section className="mt-6 w-full">
        <div className="relative w-full overflow-hidden">
          <div className="relative aspect-4/3 md:aspect-video w-full">
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
