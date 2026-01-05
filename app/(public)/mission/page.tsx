import Image from "next/image";
import Link from "next/link";

export default function MissionPage() {
  return (
    <main className="mission-page">
      {/* TITLE BLOCK */}
      <section className="mission-title-section">
        <h1 className="mission-hero-title">
          San Diego
          <br />
          Independent Film
          <br />
          Fest <span className="mission-hero-accent">Mission</span>
        </h1>
      </section>

      {/* IMAGE 1 – TROLLEY */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/2. _mission IMAGES/1.) Mission - Trolley.JPG"
              alt="San Diego trolley in front of Balboa Park"
              fill
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* ABOUT THE FESTIVAL */}
      <section className="mission-section mission-section-tight-top">
        <h2 className="mission-h2">About the Festival</h2>
        <div className="mission-body">
          <p>
            The San Diego Independent Film Festival was founded in 2016 out of a
            deeply held belief regarding cinema and its power to inspire,
            connect, and entertain.
          </p>
          <p>
            Created with an organizational mission focused on growing and
            nurturing the San Diego film community into a more vibrant and
            expansive scene for both moviemakers and film lovers.
          </p>
          <p>
            The San Diego Independent Film Festival is uniquely focused on the
            curation, promotion, and exhibition of innovative and powerful
            independent cinema storytelling that stimulates reflection,
            understanding, and meaningful conversations.
          </p>
          <p>
            Each fall the festival hosts curated showcases of the most
            innovative and independent new film work from around the world, and
            across the country, culminating with multiple days of premiere
            screenings and events hosted in our beautiful hometown of San Diego.
          </p>
          <p>
            For more information about attending the San Diego Independent Film
            Festival click{" "}
            <Link href="/filmfest" className="mission-link">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 2 – MOVIES */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/2. _mission IMAGES/2.) Mission - Movies.png"
              alt="Movies marquee and glass facade"
              fill
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* MEMBERSHIP / CINEMA SOCIETY */}
      <section className="mission-title-section">
        <h1 className="mission-hero-title">
          San Diego
          <br />
          Independent Film
          <br />
          Fest <span className="mission-hero-accent">Membership</span>
        </h1>
      </section>

      <section className="mission-section mission-section-default">
        <h2 className="mission-h2 mission-h2--inset">Join the Cinema Society</h2>
        <div className="mission-body">
          <p>
            We are grateful to be co-sponsored by the San Diego Independent Film
            Society.
          </p>
          <p>
            In addition to the sponsorship of the San Diego Independent Film
            Festival, the San Diego Independent Film Society also hosts multiple
            semi-quarterly screening events throughout the year, in venues
            across San Diego County, with plans for more SDIFS event expansion
            for the upcoming season.
          </p>
          <p>
            San Diego Independent Film Society Membership is currently drawn
            from local San Diego film aficionados and student film communities
            from local universities, including the University of California San
            Diego (UCSD), San Diego State University (SDSU), San Diego Mesa
            College, and the University of San Diego (USD).
          </p>
          <p>
            For more information about joining the San Diego Independent Film
            Society membership, click{" "}
            <Link href="/contact" className="mission-link">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 3 – CONVENTION CENTER */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/2. _mission IMAGES/3.) Mission - Convention Center.jpg"
              alt="San Diego Convention Center"
              fill
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* FESTIVAL NEWS / UPDATES */}
      <section className="mission-title-section">
        <h1 className="mission-hero-title">
          San Diego
          <br />
          Independent Film
          <br />
          Fest <span className="mission-hero-accent">News</span>
        </h1>
      </section>

      <section className="mission-section mission-section-default">
        <h2 className="mission-h2 mission-h2--inset">Festival Updates</h2>
        <div className="mission-body">
          <p>
            The San Diego Independent Film Festival is excited to once again be
            hosting our award ceremony and several premiere screening events in
            the Balboa Park Cultural District. The San Diego Independent
            Festival Film Schedule will be released this fall, usually
            two-to-three weeks before the opening day of the fest.
          </p>
          <p>
            To learn more about this year&apos;s festival screenings, check out
            our{" "}
            <Link href="/filmfest" className="mission-link">
              Film Fest page
            </Link>{" "}
            as well as our social media pages—for the most up-to-date
            information about the upcoming screening schedule.
          </p>
          <p>
            We are pleased to announce that several filmmaker mixers and
            meet-and-greet party events are again being planned for this year&apos;s
            festival.
          </p>
          <p>
            If you are interested in attending the festival, take a look at our
            extensive Festival Attendance F.A.Q.{" "}
            <Link href="/festfaq" className="mission-link">
              here
            </Link>{" "}
            to learn more about the best way to navigate the festival attendance
            process.
          </p>
          <p>
            As the festival dates get closer, you can purchase film screening
            and event tickets{" "}
            <Link href="/filmprogram" className="mission-link">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 4 – BEACH PARTY */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/2. _mission IMAGES/4.) Mission - Beach Party.png"
              alt="Beach party event"
              fill
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* CINEMAS */}
      <section className="mission-title-section">
        <h1 className="mission-hero-title">
          San Diego
          <br />
          Independent Film
          <br />
          Fest <span className="mission-hero-accent">Cinemas</span>
        </h1>
      </section>

      <section className="mission-section mission-section-default">
        <h2 className="mission-h2 mission-h2--inset">San Diego Cinemas</h2>
        <div className="mission-body">
          <p>San Diego offers an amazing array of cinemas.</p>
          <p>
            From multiplexes like the AMC theaters in Mission Valley and La
            Jolla, to unique outdoor venues like the Cinema Under The Stars in
            Mission Hills.
          </p>
          <p>
            Independent venues like the Digital Gym, Coronado&apos;s recently
            restored Village Theater, the UltraStar Mission Valley, and the
            upscale Angelika—all of which offer film screenings you can&apos;t
            see anywhere else.
          </p>
          <p>
            Learn more about the cinemas of San Diego by clicking{" "}
            <Link href="/cinemas" className="mission-link">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 5 – DIGITAL GYM THEATER */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/2. _mission IMAGES/5.) Mission - Digital Gym Theater.JPG"
              alt="Digital Gym Theater auditorium"
              fill
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* SUBMISSIONS / FILMFREEWAY */}
      <section className="mission-title-section">
        <h1 className="mission-hero-title">
          San Diego
          <br />
          Independent Film
          <br />
          Fest <span className="mission-hero-accent">Submissions</span>
        </h1>
      </section>

      <section className="mission-section mission-section-default">
        <h2 className="mission-h2 mission-h2--inset">Submit Your Project</h2>

        <div className="mission-body mb-6">
          <p>
            <strong>Film Submissions:</strong> If you are interested in
            submitting a film to the festival, make sure to check out our
            extensive Festival Submission F.A.Q.{" "}
            <Link href="/faq" className="mission-link">
              here
            </Link>
            .
          </p>
          <p>
            Visit the San Diego Independent Film Festival on{" "}
            <a
              href="https://filmfreeway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mission-link"
            >
              FilmFreeway
            </a>{" "}
            to submit a film project.
          </p>
          <p>
            <strong>Screenplay Contest Submissions:</strong> If you are
            interested in submitting your screenplay in our annual Screenplay
            Contest, visit us on{" "}
            <a
              href="https://filmfreeway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mission-link"
            >
              FilmFreeway
            </a>{" "}
            to submit.
          </p>
        </div>

        <div className="mission-center pb-6">
          <a
            href="https://filmfreeway.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/2. _mission IMAGES/6.) Film Freeway Button BLACK.png"
              alt="Submit via FilmFreeway"
              width={260}
              height={80}
              className="film-freeway-logo"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
