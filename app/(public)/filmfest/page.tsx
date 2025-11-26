// app/filmfest/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function FilmFestPage() {
  return (
    <main className="bg-white pb-12">
      {/* TITLE BLOCK */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6">
        <h1 className="font-rowdies uppercase leading-tight text-[#00aaff] text-3xl sm:text-4xl md:text-5xl">
          <span className="block">San Diego</span>
          <span className="block">Independent Film</span>
          <span className="block text-black">Fest Information</span>
        </h1>
      </section>

      {/* IMAGE 1 – SEATED GUESTS */}
      <section className="w-full">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/3. _filmfest IMAGES/1. filmfest Seated Guests.jpg"
              alt="Festival audience seated in a cinema"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FESTIVAL NEWS / TICKETS / PROGRAMMING */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-4 text-sm sm:text-base leading-relaxed">
        {/* FESTIVAL NEWS */}
        <h2 className="font-rowdies text-xl sm:text-2xl md:text-[1.6rem] uppercase text-black mb-2">
          Festival News
        </h2>
        <p>
          The San Diego Independent Film Festival returns to the most beautiful
          city in the world once again this fall.
        </p>
        <p className="mt-3">
          Interested in learning more about the festival? You can read more
          about our focus on fostering independent filmmaking and supporting the
          independent cinemas of San Diego{" "}
          <Link href="/mission" className="underline">
            here
          </Link>
          .
        </p>
        <p className="mt-3">
          Interested in attending the festival? Feel free to visit our extensive
          Festival Attendance F.A.Q.{" "}
          <Link href="/festfaq" className="underline">
            here
          </Link>{" "}
          to learn more about the ins &amp; outs of fest attendance.
        </p>

        {/* TICKETS & PASSES */}
        <h2 className="mt-8 font-rowdies text-xl sm:text-2xl md:text-[1.6rem] uppercase text-black mb-2">
          Tickets &amp; Passes
        </h2>
        <p>
          Tickets &amp; Passes to the San Diego Independent Film Festival are
          released two weeks prior to Opening Day.
        </p>
        <p className="mt-3">
          Visit the festival Ticketing Page{" "}
          <Link href="/filmprogram" className="underline">
            here
          </Link>{" "}
          once Tickets &amp; Passes go on sale.
        </p>

        {/* PROGRAMMING */}
        <h2 className="mt-8 font-rowdies text-xl sm:text-2xl md:text-[1.6rem] uppercase text-black mb-2">
          Programming
        </h2>
        <p>
          The San Diego Independent Film Festival unveils its annual programming
          slate each fall, showcasing the most innovative and independent
          cinema from around the world, to be screened and honored in the
          beautiful city of San Diego.
        </p>
        <p className="mt-3">
          Visit our Festival Program Guide{" "}
          <Link href="/filmprogram" className="underline">
            here
          </Link>{" "}
          to find out when and where you can see the best new cinema.
        </p>
      </section>

      {/* IMAGE 2 – BOTANICAL / BALBOA PARK */}
      <section className="w-full">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/3. _filmfest IMAGES/2. filmfest Botanical.JPG"
              alt="Balboa Park botanical building"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MEMBERSHIP / FILM SOCIETY */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-sm sm:text-base leading-relaxed">
        <h2 className="font-rowdies text-xl sm:text-2xl md:text-[1.6rem] uppercase text-[#00aaff] mb-1">
          San Diego Independent Film Fest Membership
        </h2>
        <h3 className="font-rowdies text-sm sm:text-base uppercase text-black mb-3">
          San Diego Film Society
        </h3>
        <p>
          The San Diego Independent Film Society currently hosts several
          quarterly screening events in addition to co-sponsoring our San Diego
          Independent Film Festival, with plans for membership and event
          expansion next year.
        </p>
        <p className="mt-3">
          San Diego Independent Film Society Membership is currently drawn from
          local San Diego film aficionados and film communities stemming from
          local universities including the University of California San Diego
          (UCSD), San Diego State University (SDSU), and the University of San
          Diego (USD).
        </p>
        <p className="mt-3">
          For information about the San Diego Independent Film Society click{" "}
          <Link href="/mission" className="underline">
            here
          </Link>
          .
        </p>
        <p className="mt-3">
          For information about joining the Film Society as a member, click{" "}
          <Link href="/contact" className="underline">
            here
          </Link>
          .
        </p>
      </section>

      {/* IMAGE 3 – CORONADO */}
      <section className="w-full">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/3. _filmfest IMAGES/3. filmfest Coronado.JPG"
              alt="Coronado hotel and waterfront"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SUBMISSIONS */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 text-sm sm:text-base leading-relaxed">
        <h2 className="font-rowdies text-xl sm:text-2xl md:text-[1.6rem] uppercase text-[#00aaff] mb-1">
          San Diego Independent Film Fest Submissions
        </h2>

        {/* SUBMIT YOUR FILM */}
        <h3 className="font-rowdies text-sm sm:text-base uppercase text-black mt-3 mb-2">
          Submit Your Film
        </h3>
        <p>
          Interested in submitting a film to the festival? Check out our
          extensive Festival Submission F.A.Q.{" "}
          <Link href="/faq" className="underline">
            here
          </Link>
          .
        </p>
        <p className="mt-3">
          Visit us on{" "}
          <a
            href="https://filmfreeway.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            FilmFreeway
          </a>{" "}
          to submit your film project.
        </p>

        {/* SCREENPLAY SUBMISSIONS */}
        <h3 className="font-rowdies text-sm sm:text-base uppercase text-black mt-6 mb-2">
          Screenplay Submissions
        </h3>
        <p>
          Interested in submitting your screenplay in our annual Screenplay
          Contest? Our annual competition features a $2,000.00 cash prize to the
          Grand Prize 1st Place Winner.
        </p>
        <p className="mt-3">
          Visit us on{" "}
          <a
            href="https://filmfreeway.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            FilmFreeway
          </a>{" "}
          to learn more about requirements and deadlines.
        </p>

        {/* FilmFreeway Button */}
        <div className="flex justify-center pt-6 pb-6">
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
              className="h-auto w-[180px] sm:w-[220px] md:w-[260px]"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
