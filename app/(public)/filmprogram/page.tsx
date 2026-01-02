// app/filmprogram/page.tsx
import Image from "next/image";

export default function FilmProgramPage() {
  return (
    <main className="bg-[#6fd2ff]">
      {/* PAGE TITLE */}
      <section className="mx-auto max-w-4xl px-4 pt-8 sm:pt-10 text-center text-black">
        <h1 className="font-rowdies uppercase leading-tight text-3xl sm:text-4xl md:text-5xl">
          <span className="block">Film Festival</span>
          <span className="block">Program Guide</span>
        </h1>
      </section>

      {/* POSTER + CAPTION */}
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-10">
          {/* framed poster */}
          <div className="mx-auto max-w-6xl bg-[#6fd2ff] p-3 sm:p-4">
            <div className="relative w-full aspect-3/4">
              <Image
                src="/4. _filmprogram IMAGES/1. 2026 poster.png"
                alt="2026 San Diego Independent Film Festival poster"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          
      </section>

      {/* TICKETS CARD */}
      <section className="mx-auto  px-4 pb-8 bg-white pt-8">
        <div className="rounded-2xl border border-black/15 bg-white max-w-7xl mx-auto px-5 py-8 sm:px-10 sm:py-10 text-center shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
          <h2 className="font-rowdies font-light uppercase text-4xl  tracking-wide text-black mb-4">
            Tickets
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-black">
            Tickets to the San Diego Independent Film Festival
            <br />
            go on sale each Fall.
          </p>

          <p className="mt-5 text-sm sm:text-base leading-relaxed text-black">
            Individual Tickets: $14–22 per screening
            <br />
            Day Passes: $39 per day (includes all film screenings)
            <br />
            VIP Passes: $100 per day
          </p>

          {/* For now this button intentionally doesn’t link anywhere */}
          <button
            type="button"
            className="mt-7 inline-flex items-center justify-center rounded-md border-4 border-[#00aaff] bg-white px-10 py-3 text-base font-rowdies uppercase tracking-wide text-black shadow-sm hover:bg-[#e6f8ff] focus:outline-none focus:ring-2 focus:ring-[#00aaff] focus:ring-offset-2"
          >
            Buy Tickets
          </button>
        </div>
      </section>

      {/* SCHEDULE CARD */}
      <section className="mx-auto px-4 pb- bg-white">
        <div className="rounded-2xl border border-black/15 bg-white max-w-7xl mx-auto px-5 py-8 sm:px-10 sm:py-10 text-center shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
          <h2 className="font-rowdies font-light uppercase text-4xl  tracking-wide text-black mb-4">
            Schedule
          </h2>

          <p className="text-sm sm:text-base leading-relaxed text-black">
            The San Diego Independent Film Festival&apos;s complete Film Schedule
            &amp; Festival Event Program, featuring the complete festival Film
            Schedule, will be released several weeks prior to the Fall &amp;
            Winter announcement of festival dates.
          </p>

          {/* Also a placeholder button per client notes */}
          <button
            type="button"
            className="mt-7 inline-flex items-center justify-center rounded-md border-4 border-[#00aaff] bg-white px-10 py-3 text-base font-rowdies uppercase tracking-wide text-black hover:bg-[#e6f8ff] focus:outline-none focus:ring-2 focus:ring-[#00aaff] focus:ring-offset-2 mb-20"
          >
            View Film Program
          </button>
        </div>
      </section>
    </main>
  );
}
