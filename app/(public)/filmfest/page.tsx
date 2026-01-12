import Image from "next/image";
import Link from "next/link";
import MissionTitleBlock from "@/components/MissionTitleBlock";

export default function FilmFestPage() {
  return (
    <main className="mission-page">
      {/* TITLE BLOCK */}
      <section className="mission-title-section">
        <MissionTitleBlock accent="information" />
      </section>

      {/* IMAGE 1 – SEATED GUESTS */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/3. _filmfest IMAGES/1. filmfest Seated Guests.jpg"
              alt="Festival audience seated in a cinema"
              fill
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* FESTIVAL NEWS / TICKETS / PROGRAMMING */}
      <section className="filmfest-section py-6">
        <h2 className="filmfest-h2">Festival News</h2>
        <div className="mission-body">
          <p>
            The San Diego Independent Film Festival returns to the most beautiful
            city in the world once again this fall.
          </p>

          <p>
            Interested in learning more about the festival? You can read more
            about our history and focus on fostering independent filmmaking and
            supporting the independent cinemas of San Diego{" "}
            <Link href="/mission" className="filmfest-link">
              here
            </Link>
            .
          </p>

          <p>
            Interested in attending the festival? Feel free to visit our extensive
            Festival Attendance F.A.Q.{" "}
            <Link href="/festfaq" className="filmfest-link">
              here
            </Link>{" "}
            to learn more about the ins &amp; outs of fest attendance.
          </p>
        </div>

        <h2 className="filmfest-h2 filmfest-block">Tickets &amp; Passes</h2>
        <div className="mission-body">
          <p>
            Tickets &amp; Passes to the San Diego Independent Film Festival are
            released two weeks prior to Opening Day.
          </p>
          <p>
            Visit the festival Ticketing Page{" "}
            <Link href="/filmprogram" className="filmfest-link">
              here
            </Link>{" "}
            once Tickets &amp; Passes go on sale.
          </p>
        </div>

        <h2 className="filmfest-h2 filmfest-block">Programming</h2>
        <div className="mission-body">
          <p>
            The San Diego Independent Film Festival unveils its annual programming
            slate each fall, showcasing the most innovative and independent
            cinema from around the world, to be screened and honored in the
            beautiful city of San Diego.
          </p>
          <p>
            Visit our Festival Program Guide{" "}
            <Link href="/filmprogram" className="filmfest-link">
              here
            </Link>{" "}
            to find out when and where you can see the best new cinema.
          </p>
        </div>
      </section>

      {/* IMAGE 2 – BOTANICAL / BALBOA PARK */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/3. _filmfest IMAGES/2. filmfest Botanical.JPG"
              alt="Balboa Park botanical building"
              fill
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="mission-title-section">
        <MissionTitleBlock accent="membership" />
      </section>

      <section className="filmfest-section pb-6">
        <h2 className="filmfest-h2">San Diego Film Society</h2>
        <div className="mission-body">
          <p>
            The San Diego Independent Film Society currently hosts several
            quarterly screening events in addition to co-sponsoring our San Diego
            Independent Film Festival, with plans for membership and event
            expansion next year.
          </p>
          <p>
            San Diego Independent Film Society Membership is currently drawn from
            local San Diego film aficionados and film communities stemming from
            local universities including the University of California San Diego
            (UCSD), San Diego State University (SDSU), and the University of San
            Diego (USD).
          </p>
          <p>
            For information about the San Diego Independent Film Society click{" "}
            <Link href="/mission" className="filmfest-link">
              here
            </Link>
            .
          </p>
          <p>
            For information about joining the Film Society as a member, click{" "}
            <Link href="/contact" className="filmfest-link">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 3 – CORONADO */}
      <section className="mission-image-section">
        <div className="mission-image-frame">
          <div className="mission-image-aspect">
            <Image
              src="/3. _filmfest IMAGES/3. filmfest Coronado.JPG"
              alt="Coronado hotel and waterfront"
              fill
              className="mission-image"
            />
          </div>
        </div>
      </section>

      {/* SUBMISSIONS */}
      <section className="mission-title-section">
        <MissionTitleBlock accent="submissions" />
      </section>

      <section className="filmfest-section pb-8">
        <h2 className="filmfest-h2">Submit Your Film</h2>
        <div className="mission-body">
          <p>
            Interested in submitting a film to the festival? Check out our
            extensive Festival Submission F.A.Q.{" "}
            <Link href="/faq" className="filmfest-link">
              here
            </Link>
            .
          </p>
          <p>
            Visit us on{" "}
            <a
              href="https://filmfreeway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="filmfest-link"
            >
              FilmFreeway
            </a>{" "}
            to submit your film project.
          </p>
        </div>

        <h2 className="filmfest-h2 filmfest-block">Screenplay Submissions</h2>
        <div className="mission-body">
          <p>
            Interested in submitting your screenplay in our annual Screenplay
            Contest? Our annual competition features a $2,000.00 cash prize to the
            Grand Prize 1st Place Winner.
          </p>
          <p>
            Visit us on{" "}
            <a
              href="https://filmfreeway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="filmfest-link"
            >
              FilmFreeway
            </a>{" "}
            to learn more about requirements and deadlines.
          </p>
        </div>

        <div className="mission-center pt-6 pb-2">
          <a
            href="https://filmfreeway.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/3. _filmfest IMAGES/4. Film Freeway Button BLACK.png"
              alt="FilmFreeway submit button"
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
