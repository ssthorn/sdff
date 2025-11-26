// app/filmprogram/page.tsx
import Image from "next/image";

export default function FilmProgramPage() {
  return (
    <main className="min-h-screen bg-[#6fd2ff] pb-16">
      {/* PAGE TITLE */}
      <section className="mx-auto max-w-4xl px-4 pt-8 sm:pt-10 text-center text-black">
        <h1 className="font-rowdies uppercase leading-tight text-3xl sm:text-4xl md:text-5xl">
          <span className="block">Film Festival</span>
          <span className="block">Program Guide</span>
        </h1>
      </section>

      {/* POSTER + CAPTION */}
      <section className="mx-auto max-w-4xl px-4 pt-8 pb-10">
        <div className="rounded-md border border-black/10 bg-[#8fe0ff] px-3 pt-4 pb-5 sm:px-6 sm:pt-6 sm:pb-7 shadow-md">
          {/* framed poster */}
          <div className="mx-auto max-w-2xl bg-[#6fd2ff] p-3 sm:p-4">
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

          <p className="mt-4 text-center font-rowdies text-lg sm:text-xl text-black">
            Festival Film Guide
          </p>
        </div>
      </section>

      {/* TICKETS CARD */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="rounded-2xl border border-black/15 bg-white px-5 py-8 sm:px-10 sm:py-10 text-center shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
          <h2 className="font-rowdies uppercase text-2xl sm:text-3xl tracking-wide text-black mb-4">
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
            className="mt-7 inline-flex items-center justify-center rounded-md border-2 border-[#00aaff] bg-white px-10 py-3 text-base font-rowdies uppercase tracking-wide text-black shadow-sm hover:bg-[#e6f8ff] focus:outline-none focus:ring-2 focus:ring-[#00aaff] focus:ring-offset-2"
          >
            Buy Tickets
          </button>
        </div>
      </section>

      {/* SCHEDULE CARD */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="rounded-2xl border border-black/15 bg-white px-5 py-8 sm:px-10 sm:py-10 text-center shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
          <h2 className="font-rowdies uppercase text-2xl sm:text-3xl tracking-wide text-black mb-4">
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
            className="mt-7 inline-flex items-center justify-center rounded-md border-2 border-[#00aaff] bg-white px-10 py-3 text-base font-rowdies uppercase tracking-wide text-black shadow-sm hover:bg-[#e6f8ff] focus:outline-none focus:ring-2 focus:ring-[#00aaff] focus:ring-offset-2"
          >
            View Film Program
          </button>
        </div>
      </section>
    </main>
  );
}
