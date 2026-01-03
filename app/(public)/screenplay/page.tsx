// app/screenplay/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type FaqItem = {
  q: string;
  a: React.ReactNode;
};

function PlusIcon({ open }: { open: boolean }) {
  // matches the simple + / - vibe from the mock
  return (
    <span className="relative inline-block h-4 w-4">
      <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-white" />
      {!open && (
        <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-white" />
      )}
    </span>
  );
}

function BlueFaq({
  title,
  items,
  defaultOpenIndex = 2,
}: {
  title: string;
  items: FaqItem[];
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6">
      <h2 className="text-center font-rowdies font-light uppercase text-2xl">
        {title}
      </h2>

      <div className="mt-3 rounded-2xl bg-[#0aa6e8] shadow-[0_10px_22px_rgba(0,0,0,0.18)] overflow-hidden">
        {items.map((it, idx) => {
          const open = openIndex === idx;
          return (
            <div key={it.q} className="border-t border-white/35 first:border-t-0">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : idx)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-white text-center font-rowdies font-light uppercase text-xl">
                  {it.q}
                </span>
                <PlusIcon open={open} />
              </button>

              {open && (
                <div className="bg-white px-5 py-4 text-[12px] sm:text-[13px] leading-relaxed text-black">
                  {it.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function InfoBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/20 bg-white px-6 py-5 shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
      <h3 className="text-center font-rowdies font-light uppercase text-2xl">
        {title}
      </h3>
      <div className="mt-3 text-center text-lg">
        {children}
      </div>
    </div>
  );
}

export default function ScreenplayPage() {
  const FAQ_ITEMS: FaqItem[] = useMemo(
    () => [
      {
        q: "What Formats Are Accepted?",
        a: (
          <>
            Feature Films, Short Films, and Streaming / T.V. Pilots in all genres
            and styles are accepted.
          </>
        ),
      },
      {
        q: "What Genres Are Accepted?",
        a: <>Submissions are accepted regardless of genre.</>,
      },
      {
        q: "How Do I Submit?",
        a: (
          <>
            Submissions only available through FilmFreeway.{" "}
            <span className="whitespace-nowrap">
              <a
                className="underline font-semibold"
                href="https://filmfreeway.com"
                target="_blank"
                rel="noreferrer"
              >
                FilmFreeway.com
              </a>
            </span>
          </>
        ),
      },
      {
        q: "Are Submission Fees Refundable?",
        a: (
          <>
            Submission Fees are non-refundable and go towards readers and
            judging review costs.
          </>
        ),
      },
      {
        q: "What If I Need To Update My Submission?",
        a: (
          <>
            You would need to update your project on the platform it was
            submitted on. Please be aware that updated submissions may not be
            able to be thoroughly judged again after initial submission.
          </>
        ),
      },
      {
        q: "When Are Winners Notified?",
        a: <>Winners are notified two weeks before the festival event.</>,
      },
      {
        q: "How Are Winners Notified?",
        a: (
          <>
            Winners are notified through the submission platform and by email.
          </>
        ),
      },
      {
        q: "Do I Retain The Rights To My Script?",
        a: (
          <>
            You retain full rights and ownership of your script. It is of course
            best practice to register your script with the US Copyright Office
            and the Writers Guild of America (WGA).
          </>
        ),
      },
      {
        q: "Age Requirements?",
        a: (
          <>
            Individuals 18 or older may submit directly. Minors must have a
            parent or legal guardian submit on their behalf.
          </>
        ),
      },
    ],
    []
  );

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
        {/* Title */}
<h1 className="text-center font-rowdies text-[38px] font-light uppercase tracking-wide text-[#00AEEF] sm:text-[52px]">          Screenplay Contest
        </h1>

        {/* Top "Carousel" image */}
        <div className="mt-4 mx-auto max-w-3xl">
          <div className="relative w-full aspect-video overflow-hidden shadow-[0_10px_22px_rgba(0,0,0,0.18)]">
            <Image
              src="/screenplay/1.) Carousel.JPG"
              alt="Screenplay contest carousel"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
              priority
            />
          </div>
        </div>

        {/* How to enter */}
        <section className="mt-7 text-center">
          <h2 className="font-rowdies font-light uppercase text-4xl">
            How To Enter Your Screenplay
          </h2>

          <p className="mt-4 mx-auto max-w-2xl text-lg">
            See our contest submission platform (FilmFreeway) for current
            Screenplay Submission Categories, Fees, and Deadlines.
            <br />
            <br />
            Submissions available through FilmFreeway.
          </p>

          {/* FilmFreeway black button */}
          <div className="mt-4 flex justify-center">
            <a
              href="https://filmfreeway.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center"
              aria-label="Submit on FilmFreeway"
            >
              <Image
                src="/screenplay/2. Film Freeway Button BLACK transparent.png"
                alt="FilmFreeway"
                width={260}
                height={70}
                className="h-auto w-[220px] sm:w-[260px]"
              />
            </a>
          </div>
        </section>

        {/* Box sections */}
        <section className="mt-8 mx-auto max-w-3xl space-y-6">
          <InfoBox title="About The Screenplay Contest">
            The San Diego Independent Film Festival Screenplay Contest was
            created to champion new and original screenplays in order to assist
            writers in meeting professional collaborators, and to support new
            voices becoming a part of the film industry.
            <br />
            <br />
            This contest gives you the chance to win prizes and honors, while
            gaining access to industry professionals and collaborators, including
            independent film creators and producers.
          </InfoBox>

          <InfoBox title="Awards & Prizes">
            For those attending in person, a parchment certificate will also be
            presented.
            <br />
            <br />
            Additionally winners receive a unique digital award laurel featuring
            the project title and winner&apos;s name.
            <br />
            <br />
            All selected screenwriters will also receive one complimentary all
            screening festival pass.
            <br />
            <br />
            The Best Screenplay 1st Place Grand Prize will receive a $2,000 cash
            prize and an award statue at the festival.
            <br />
            <br />
            Award statues are also available for all other winners to purchase.
            Shipping is available for winners in the United States.
          </InfoBox>

          <InfoBox title="Judging">
            All script submissions go through several rounds of judging.
            Screenplays are first read and scored by multiple judges who will
            read and score them. Higher scored submissions go on to additional
            rounds.
            <br />
            <br />
            Finalists are voted on by the San Diego Film Society&apos;s panel of
            deciding judges, that includes current and past festival alumni,
            journalists, literary managers, and industry professionals.
          </InfoBox>
        </section>

        {/* Notebook image */}
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_10px_22px_rgba(0,0,0,0.18)]">
            <Image
              src="/screenplay/3.) SP_notebook.jpg"
              alt="Notebook"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
            />
          </div>
        </div>

        {/* Award categories */}
        <section className="mt-10 text-center px-4">
          <h2 className="font-rowdies font-light uppercase text-black text-4xl">
            Screenplay
            <br className="sm:hidden" /> Award Categories
          </h2>

          <div className="mt-4 text-2xl">
            <div className="font-semibold">Best Screenplay</div>
            <div className="text-black/70 italic text-base">1st Place Grand Prize Winner</div>

            <div className="mt-4">Best Screenplay</div>
            <div className="text-black/70 italic text-base">- 1st Runner Up -</div>

            <div className="mt-4">Best Screenplay</div>
            <div className="text-black/70 italic text-base">- 2nd Runner Up -</div>

            <div className="mt-4">Best Teleplay</div>
            <div className="mt-4">Best Short Teleplay</div>
          </div>
        </section>

        {/* FAQ */}
        <div className="mt-10">
          <BlueFaq title="Screenplay Submission F.A.Q." items={FAQ_ITEMS} />
        </div>

        {/* VW Bus image */}
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_10px_22px_rgba(0,0,0,0.18)]">
            <Image
              src="/screenplay/4.) VlW BusNEWM.png"
              alt="VW Bus on the beach"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
            />
          </div>
        </div>

        {/* Small helper links (optional; remove if you don't want) */}
        <div className="mt-8 text-center text-[11px] text-black/60">
          Looking for tickets?{" "}
          <Link href="/filmprogram" className="underline font-semibold">
            Festival Film Program &amp; Event Guide
          </Link>
        </div>
      </div>
    </main>
  );
}
