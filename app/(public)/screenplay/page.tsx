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
  return (
    <span
      aria-hidden="true"
      className={[
        "ml-3 inline-flex h-7 w-7 items-center justify-center",
        open ? "text-black" : "text-white",
      ].join(" ")}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6">
        <path
          d="M5 12h14"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {!open && (
          <path
            d="M12 5v14"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        )}
      </svg>
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

  const BLUE = "#03ABFE"; // match the other accordion

  return (
    <section className="mx-auto max-w-3xl  ">
      {/* section header like the mock */}
      <div className="text-center">
        <h2 className="font-rowdies font-light uppercase text-black text-xl tracking-tight">
          {title}
        </h2>
      </div>

      <div
        className="mt-2 rounded-[14px] overflow-hidden shadow-[0_10px_22px_rgba(0,0,0,0.14)]"
        style={{ backgroundColor: BLUE }}
      >
        {items.map((it, idx) => {
          const open = openIndex === idx;

          return (
            <div key={it.q} className="border-t border-white/25 first:border-t-0">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : idx)}
                aria-expanded={open}
                className={[
                  "w-full flex items-center justify-between",
                  "px-2 py-3",
                  "text-left",
                  "font-rowdies font-light tracking-tight",
                  "text-base",
                  open ? "bg-white text-black" : "text-white",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                ].join(" ")}
              >
                <span className="pr-2">{it.q}</span>
                <PlusIcon open={open} />
              </button>

              {open && (
                <div className="bg-white px-4 sm:px-5 py-2 sm:py-4 text-sm leading-5 sm:text-sm sm:leading-6 text-black">
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
      <h3 className="text-center font-rowdies font-light uppercase text-xl tracking-tight">
        {title}
      </h3>
      <div className="mission-body mt-2">
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
            Submissions only available through <span className="whitespace-nowrap">
              <a
                className="text-link"
                href="https://filmfreeway.com"
                target="_blank"
                rel="noreferrer"
              >
                FilmFreeway.com
              </a>
            </span>.
            
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
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-6 pb-14">
        {/* Title */}
<h1 className="contact-h1-blue">          Screenplay Contest
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
          <h2 className="font-rowdies font-light uppercase text-xl">
            How To Enter Your Screenplay
          </h2>

          <p className="mission-body mt-2">
            See our contest submission platform (FilmFreeway) for current
            Screenplay Submission Categories, Fees, and Deadlines.
            <br />
            <br />
            Submissions available through <span className="whitespace-nowrap">
              <a
                className="text-link"
                href="https://filmfreeway.com"
                target="_blank"
                rel="noreferrer"
              >
                FilmFreeway.com
              </a>
            </span>.
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
          <div className="relative w-full aspect-video  overflow-hidden ">
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
        <section className="mt-6 text-center px-4">
          <h2 className="font-rowdies font-light uppercase text-2xl">
            Screenplay
            <br className="sm:hidden" /> Award Categories
          </h2>

          <div className="mt-4 text-2xl">
            <div className="">
              <h3 className="font-semibold italic">
                Best Screenplay
                <br />
                <span className="block font-normal text-xs leading-2">1st Place Grand Prize Winner</span>
                </h3>
              </div>

              <div className="mt-4">
              <h3 className="text-lg">
                Best Screenplay
                <br />
                <span className="block font-normal text-xs leading-2">- 1st Runner Up -</span>
                </h3>
              </div>

              <div className="mt-4">
              <h3 className="text-lg">
                Best Screenplay
                <br />
                <span className="block font-normal text-xs leading-2">- 2nd Runner Up -</span>
                </h3>
              </div>

              <div className="mt-4">
              <h3 className="text-lg">
                Best Teleplay</h3>
              </div>

              <div className="mt-4">
              <h3 className="text-lg">
                Best Short Teleplay</h3>
              </div>
            

            
          </div>
        </section>

        {/* FAQ */}
        <div className="mt-6">
          <BlueFaq title="Screenplay Submission F.A.Q." items={FAQ_ITEMS}/>
        </div>

        {/* VW Bus image */}
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="relative w-full aspect-video overflow-hidden shadow-[0_10px_22px_rgba(0,0,0,0.18)]">
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
          <Link href="/filmprogram" className="text-link">
            Festival Film Program &amp; Event Guide
          </Link>
        </div>
      </div>
    </main>
  );
}
