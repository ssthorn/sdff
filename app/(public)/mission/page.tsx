// app/mission/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function MissionPage() {
  return (
    <main className="bg-white pb-12">
      {/* TITLE BLOCK */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-2 sm:pt-2 pb-2">
        <h1 className="mx-[15vw] font-rowdies font-light uppercase leading-tight text-[#00aaff] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block">San Diego</span>
          <span className="block">Independent Film</span>
          <span className="block text-black">Fest Mission</span>
        </h1>
      </section>

      {/* IMAGE 1 – TROLLEY */}
      <section className="w-full">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-video">
            <Image
              src="/2. _mission IMAGES/1.) Mission - Trolley.JPG"
              alt="San Diego trolley in front of Balboa Park"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT THE FESTIVAL */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-10 pb-4">
        <h2 className="font-rowdies font-light text-center text-2xl sm:text-2xl md:text-4xl uppercase text-black mb-3">
          About the Festival
        </h2>
        <div className="space-y-2 text-sm sm:text-base leading-tight">
          <p>
            The San Diego Independent Film Festival was founded in 2016 out of
            a deeply held belief regarding cinema and its power to inspire,
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
            screenings and events hosted in our beautiful hometown of San
            Diego.
          </p>
          <p>
            For more information about attending the San Diego Independent Film
            Festival click{" "}
            <Link href="/filmfest" className="underline">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 2 – MOVIES */}
      <section className="w-full">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-video">
            <Image
              src="/2. _mission IMAGES/2.) Mission - Movies.png"
              alt="Movies marquee and glass facade"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MEMBERSHIP / CINEMA SOCIETY */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <h2 className="mx-6 font-rowdies font-light uppercase leading-tight text-[#00aaff] text-4xl sm:text-4xl md:text-5xl mb-3">
          San Diego Independent Film Fest <span className="text-black">Membership</span>
        </h2>
        <h3 className="mx-6 font-rowdies font-light text-center text-2xl sm:text-2xl md:text-4xl uppercase text-black mb-3">
          Join the Cinema Society
        </h3>
        <div className="space-y-3 text-sm sm:text-base leading-tight">
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
            <Link href="/contact" className="underline">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 3 – CONVENTION CENTER */}
      <section className="w-full">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-video">
            <Image
              src="/2. _mission IMAGES/3.) Mission - Convention Center.jpg"
              alt="San Diego Convention Center"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FESTIVAL NEWS / UPDATES */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <h2 className="mx-6 font-rowdies font-light uppercase leading-tight text-[#00aaff] text-4xl sm:text-4xl md:text-5xl mb-3">
          San Diego Independent Film Festival  <span className="text-black">News</span>
        </h2>
        <h3 className="mx-6 font-rowdies font-light text-center text-2xl sm:text-2xl md:text-4xl uppercase text-black mb-3">
          Festival Updates
        </h3>
        <div className="space-y-3 text-sm sm:text-base leading-tight">
          <p>
            The San Diego Independent Film Festival is excited to once again be
            hosting our award ceremony and several premiere screening events in
            the Balboa Park Cultural District. The San Diego Independent Festival
            Film Schedule will be released this fall, usually two-to-three weeks
            before the opening day of the fest.
          </p>
          <p>
            To learn more about this year&apos;s festival screenings, check out
            our{" "}
            <Link href="/filmfest" className="underline">
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
            <Link href="/festfaq" className="underline">
              here
            </Link>{" "}
            to learn more about the best way to navigate the festival attendance
            process.
          </p>
          <p>
            As the festival dates get closer, you can purchase film screening
            and event tickets{" "}
            <Link href="/filmprogram" className="underline">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 4 – BEACH PARTY */}
      <section className="w-full">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-video">
            <Image
              src="/2. _mission IMAGES/4.) Mission - Beach Party.png"
              alt="Beach party event"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CINEMAS */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <h2 className="mx-6 font-rowdies font-light uppercase leading-tight text-[#00aaff] text-4xl sm:text-4xl md:text-5xl mb-3">
          San Diego Independent Film Fest <span className="text-black">Cinemas</span>
        </h2>
        <h3 className="mx-6 font-rowdies font-light text-center text-2xl sm:text-2xl md:text-4xl uppercase text-black mb-3">
          San Diego Cinemas
        </h3>
        <div className="space-y-3 text-sm sm:text-base leading-tight">
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
            <Link href="/cinemas" className="underline">
              here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* IMAGE 5 – DIGITAL GYM THEATER */}
      <section className="w-full">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative w-full aspect-video">
            <Image
              src="/2. _mission IMAGES/5.) Mission - Digital Gym Theater.JPG"
              alt="Digital Gym Theater auditorium"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SUBMISSIONS / FILMFREEWAY */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-8">
        <h2 className="mx-6 font-rowdies font-light uppercase leading-tight text-[#00aaff] text-4xl sm:text-4xl md:text-5xl mb-3">
          San Diego Independent Film Fest <span className="text-black">Submissions</span>
        </h2>
        <h3 className="mx-6 font-rowdies font-light text-center text-2xl sm:text-2xl md:text-4xl uppercase text-black mb-3">
          Submit Your Project
        </h3>
        <div className="space-y-3 text-sm sm:text-base leading-tight mb-6">
          <p>
            <strong>Film Submissions:</strong> If you are interested in
            submitting a film to the festival, make sure to check out our
            extensive Festival Submission F.A.Q.{" "}
            <Link href="/faq" className="underline">
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
              className="underline"
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
              className="underline"
            >
              FilmFreeway
            </a>{" "}
            to submit.
          </p>
        </div>

        {/* FilmFreeway button */}
        <div className="flex justify-center pb-6">
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
              className="h-auto w-[180px] sm:w-[220px] md:w-[260px]"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
