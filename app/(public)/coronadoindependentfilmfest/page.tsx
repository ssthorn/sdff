import Image from "next/image";
import Link from "next/link";

export default function CoronadoIndependentFilmFestPage() {
  return (
    <main className="mission-page">
      {/* TITLE BLOCK (same structure as Mission) */}
      <header className="mission-title-section">
  <h1 className="mission-hero-title mission-hero-title--coronado">
    <span className="block">INDEPENDENT</span>
    <span className="block">FILM SCREENINGS</span>
    <span className="mission-hero-accent block whitespace-nowrap">
      CORONADO ISLAND
    </span>
  </h1>
</header>




      {/* IMAGE 1 */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/coronado/1.) Hotel Coronado NEWM.JPG"
              alt="Hotel del Coronado"
              fill
              className="mission-image"
              priority
              sizes="(max-width: 640px) 100vw, 900px"
            />
          </div>
        </div>
      </section>

      {/* INTRO COPY */}
      <section className="mission-section mission-section-tight-top">
        <div className="mission-body">
          <p>
            Several times each year the{" "}
            <span className="font-semibold text-black">
              San Diego Independent Film Society
            </span>{" "}
            hosts Film Screening Events for New &amp; Undistributed Independent
            Films on Coronado Island, San Diego.
          </p>
        </div>
      </section>

      {/* TICKETS & PASSES */}
      <section className="mission-section mission-section-default">
        <h2 className="mission-h2">Tickets &amp; Passes</h2>

        <div className="mission-body">
          <p>
            Upcoming Coronado Island film screening &amp; film event updates with
            event screening times will be posted on social media as they are
            scheduled.
          </p>

          <p>
            Check out upcoming{" "}
            <span className="font-semibold text-black">
              Coronado Island Independent Film Screenings
            </span>{" "}
            <Link
              href="https://www.eventive.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mission-link"
            >
              {" "}
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 2 */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/coronado/2.) Village Theater NEWM.JPG"
              alt="Village Theater"
              fill
              className="mission-image"
              sizes="(max-width: 640px) 100vw, 900px"
            />
          </div>
        </div>
      </section>

      {/* PARTICIPATE */}
      <section className="mission-section mission-section-tight-top">
        <h2 className="mission-h2">Participate</h2>

        <div className="mission-body">
          <p>
            To submit a film project for review and consideration to screen at
            Coronado Independent Film Fest screening events use{" "}
            <a
              href="https://filmfreeway.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mission-link"
            >
              FilmFreeway
            </a>{" "}
            to submit a film or screenplay.
          </p>
        </div>

        {/* FilmFreeway button image (centered like Mission sections) */}
        <div className="mission-center pb-6 pt-4">
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
              className="film-freeway-logo"
            />
          </a>
        </div>
      </section>

      {/* IMAGE 3 */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          {/* keep this one 4:3 on mobile like you had, but still using Mission frames */}
          <div className="relative w-full aspect-4/3 md:aspect-video">
            <Image
              src="/coronado/3.) Beach Party VW NEWM.png"
              alt="Beach party with VW bus"
              fill
              className="mission-image"
              sizes="(max-width: 640px) 100vw, 900px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
