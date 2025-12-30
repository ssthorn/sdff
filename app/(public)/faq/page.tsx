"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type FaqItem = {
  q: string;
  a: React.ReactNode;
};

type FaqSection = {
  title: string;
  items: FaqItem[];
};

function PlusIcon({ open }: { open: boolean }) {
  // Simple + / − like the mock
  return (
    <span
      aria-hidden="true"
      className="ml-4 inline-flex h-7 w-7 items-center justify-center text-white/95"
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

function AccordionRow({
  id,
  q,
  children,
  open,
  onToggle,
}: {
  id: string;
  q: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/25 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className={[
          "w-full",
          "px-4 sm:px-5",
          "py-3",
          "flex items-center justify-between",
          "text-left",
          "text-white",
          "font-rowdies uppercase tracking-[0.06em]",
          "text-[12px] sm:text-[13px]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        ].join(" ")}
      >
        <span className="pr-2">{q}</span>
        <PlusIcon open={open} />
      </button>

      {open && (
        <div
          id={id}
          className="bg-white px-4 sm:px-5 py-3 sm:py-4 text-[12.5px] leading-5 sm:text-sm sm:leading-6 text-black"
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default function FestFaqPage() {
  const sections: FaqSection[] = useMemo(
    () => [
      {
        title: "Festival Attendance",
        items: [
          {
            q: "What Films Are Shown at the Fest?",
            a: (
              <>
                <p>
                  A curated selection of independent films from all around the
                  world, released during the current festival season.
                </p>
                <p className="mt-3">
                  Films screening at the festival have either been acquired by
                  the festival programmers and curators, or had been submitted
                  for review by our San Diego Film Society Membership and judged
                  by our Membership as being among the best film submissions of
                  the past year.
                </p>
              </>
            ),
          },
          {
            q: "Where Can I Find Screening Times?",
            a: (
              <p>
                Screening Times and locations will be listed in our online and
                print versions of our Festival Film Program and Event Guide.{" "}
                <Link href="/filmprogram" className="underline">
                  (See Film Program)
                </Link>
              </p>
            ),
          },
          {
            q: "When Do Screenings Start?",
            a: (
              <>
                <p>
                  Screenings often begin promptly at the listed start time,
                  without trailers or pre-show content.
                </p>
                <p className="mt-3">
                  Make sure to plan to arrive, park, get concessions, and be in
                  your seat at the exact time listed on your ticket to make sure
                  you see the whole film.
                </p>
              </>
            ),
          },
          {
            q: "How Early Should I Arrive?",
            a: (
              <p>
                We recommend arriving an hour before the scheduled start time to
                ensure smooth entry.
              </p>
            ),
          },
          {
            q: "Are The Films Rated?",
            a: (
              <p>
                The MPAA is now known as the MPA. Independent films may not have
                MPA ratings, but we will provide guidance on audience
                appropriateness whenever possible and we always try to schedule
                films in groups of similarly themed content and maturity levels
                as best as we can.
              </p>
            ),
          },
          {
            q: "Will There Be Q&A’s After Every Film?",
            a: (
              <>
                <p>
                  Not all films screening at the festival will have Q&amp;As
                  before or after the film. As often as can be accomplished, the
                  festival does try to have Q&amp;A events.
                </p>
                <p className="mt-3">
                  Feature Films with high attendance very often have Q&amp;A’s.
                  Short Films often screen in programming blocks containing many
                  films (which can create logistical and audience issues that
                  can complicate or negate Q&amp;A possibilities.)
                </p>
                <p className="mt-3">
                  Q&amp;A availability always depends on multiple factors
                  including filmmaker requests, guest speaker attendance, host
                  attendance and availability, audience size, and festival &amp;
                  venue programming and scheduling concerns.
                </p>
              </>
            ),
          },
        ],
      },
      {
        title: "Tickets & Passes",
        items: [
          {
            q: "How Can I Purchase Tickets?",
            a: (
              <p>
                Tickets and passes can be purchased exclusively online through
                our ticketing platform.{" "}
                <Link href="/filmprogram" className="underline">
                  (See Film Program)
                </Link>
              </p>
            ),
          },
          {
            q: "When Should I Buy My Tickets?",
            a: (
              <>
                <p>
                  It is recommended to purchase tickets online and in advance —
                  in order to best secure your spot and to avoid potential
                  ticketing sell-outs.
                </p>
                <p className="mt-3">
                  Tickets go on-sale generally about 3–10 weeks prior to the
                  festival dates. Information about where to buy tickets will be
                  released on our festival website on our social media accounts
                  as we get closer to our festival event dates.
                </p>
              </>
            ),
          },
          {
            q: "Can I Buy Tickets At The Door?",
            a: (
              <p>
                A limited number of tickets are generally available on-site, but
                availability is not guaranteed as venues often have different
                and changing policies about on-site sales. To be certain of
                attendance, it is recommended that you purchase your tickets
                online in advance.
              </p>
            ),
          },
          {
            q: "What If A Screening Is Sold Out?",
            a: (
              <>
                <p>
                  Some events do sell out with no more tickets available.
                  However, in some instances additional tickets may be released
                  at the door due to an additional screening or a move to a
                  larger venue.
                </p>
                <p className="mt-3">
                  Any additional tickets released on-sale or additional
                  screenings will be announced online (and by email to
                  filmmakers), as well as on our social media accounts.
                </p>
                <p className="mt-3">
                  Additionally, all festival attendees are free to contact our
                  Box Office Staff in person (45 minutes prior to the start of
                  any sold-out screening or event) to inquire about last minute
                  rush tickets. Availability varies and is not guaranteed.
                </p>
                <p className="mt-3">
                  Sold Out may simply mean that an event or film screening is
                  fully Sold Out (with no additional seats available). If there
                  is a film you truly must see in person, it is highly
                  recommended to purchase tickets as soon as possible.
                </p>
              </>
            ),
          },
          {
            q: "Do I Need A Ticket Or Pass For All Events?",
            a: <p>Yes, a ticket or pass is required to attend any screening or event.</p>,
          },
          {
            q: "Are Single-Screening Tickets Available?",
            a: (
              <>
                <p>Yes, individual tickets for screenings are available.</p>
                <p className="mt-3">
                  However, for screening blocks containing multiple films (short
                  films are often screened in programming blocks with other
                  shorts), the festival kindly asks that you stay for the entire
                  programming block, to avoid disrupting the event.
                </p>
              </>
            ),
          },
          {
            q: "Can I Bring A Guest?",
            a: (
              <p>
                Yes, but each guest must have their own ticket or pass for each
                event they want to attend.
              </p>
            ),
          },
          {
            q: "Refund Policy?",
            a: (
              <>
                <p>
                  Refunds are not available for tickets purchased to attend any
                  screenings or events taking place at the festival.
                </p>
                <p className="mt-3">
                  If you miss your film screening that ticket was still held
                  from being sold. The festival cannot refund tickets for missed
                  screenings or changed plans.
                </p>
                <p className="mt-3 font-semibold">All ticket and pass sales are final. No Refunds.</p>
              </>
            ),
          },
          {
            q: "Applying For Press Coverage?",
            a: (
              <p>
                Press coverage must be pre-approved. Visit our{" "}
                <Link href="/contact" className="underline">
                  contact page
                </Link>{" "}
                for more details about applying for press accreditation.
              </p>
            ),
          },
          {
            q: "Can I Volunteer?",
            a: (
              <p>
                For volunteer opportunities, please visit our{" "}
                <Link href="/contact" className="underline">
                  contact page
                </Link>
                .
              </p>
            ),
          },
        ],
      },
      {
        title: "Attendees & Guests",
        items: [
          {
            q: "Who Can Attend The Festival?",
            a: (
              <p>
                The festival is open to everyone, including filmmakers, fans,
                and general audiences. Only those who are mean and unpleasant to
                other guests (and our staff and volunteers) are not allowed. : )
              </p>
            ),
          },
          {
            q: "Can Minors Attend The Festival?",
            a: (
              <p>
                Yes, minors are welcome but must be accompanied by an adult.
                Some events may not be suitable for younger audiences.
              </p>
            ),
          },
          {
            q: "Will Filmmakers Be Present?",
            a: (
              <p>
                Many filmmakers attend the festival every year (including
                filmmakers who are not screening films too), but note that
                filmmaker participation always depends on their individual
                schedules.
              </p>
            ),
          },
          {
            q: "Are There Celebrities Attending?",
            a: (
              <>
                <p>
                  High-profile attendees have attended festival screenings in
                  the past, but note that festival participation always depends
                  on individual schedules and our celebrity filmmakers and
                  alumni are not guaranteed to attend screenings or events.
                </p>
                <p className="mt-3">
                  High-profile guests often appear unannounced, or are announced
                  very close to our event dates. This is due to ensuring there
                  are no last minute scheduling commitments.
                </p>
                <p className="mt-3">
                  Even with this precaution please note that guest appearances
                  are not guaranteed and are always subject to last minute
                  cancellation.
                </p>
              </>
            ),
          },
          {
            q: "Is There A Dress Code?",
            a: (
              <>
                <p>
                  Business Casual attire would be recommended for most festival
                  events. For more formal occasions, dress to impress.
                </p>
                <p className="mt-3">
                  For film screenings, Casual to Business Casual attire is the
                  general norm.
                </p>
              </>
            ),
          },
        ],
      },
      {
        title: "Venue & Fest Policies",
        items: [
          {
            q: "Phone, Photo & Video Policy?",
            a: (
              <>
                <p>Phone use is not allowed during film screenings.</p>
                <p className="mt-3">
                  All photography and video recording (including phone audio and
                  video recording and photography) is prohibited during
                  screenings and prohibited in all movie theaters and screening
                  rooms.
                </p>
                <p className="mt-3">
                  Failure to comply will lead to expulsion from festival events
                  and screenings. This rule is to make sure the films screened
                  are not pirated and our venues are firm on this issue.
                </p>
                <p className="mt-3">
                  Professional photography at any part of the festival requires
                  prior application and approval by the Festival Publicity
                  Department as well as property ownership.
                </p>
              </>
            ),
          },
          {
            q: "Are Pets Allowed?",
            a: (
              <p>
                Pets usually are not permitted at most festival screenings,
                parties, ceremonies, or other festival events.
              </p>
            ),
          },
          {
            q: "Can I Bring A Service Animal?",
            a: (
              <p>
                Check with each specific venue for the most up to date and
                accurate details regarding service animal attendance.
              </p>
            ),
          },
        ],
      },
      {
        title: "Submissions",
        items: [
          {
            q: "How Do I Submit My Film?",
            a: (
              <p>
                All film submissions must be made through the festival <a
            href="https://filmfreeway.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            FilmFreeway
          </a> page.
              </p>
            ),
          },
        ],
      },
    ],
    []
  );

  // multi-open (like your mock screenshots)
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({
    // start with a couple open to mirror the mock’s “some expanded” feel
    "festival-attendance-0": true,
    "tickets-passes-0": false,
  });

  const toggle = (key: string) =>
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));

  const BLUE = "#03ABFE"; // sampled from the mock

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-16">
        {/* Title block */}
        <div className="text-center">
          <h1 className="font-rowdies uppercase font-bold text-black text-[22px] sm:text-3xl tracking-[0.02em]">
            Film Screenings &amp; Events
          </h1>
          <p className="mt-2 text-black text-sm sm:text-base">
            Frequently Asked Questions
          </p>

          <div className="mt-6">
            <div className="font-rowdies font-bold uppercase text-[#03ABFE] text-lg sm:text-xl tracking-[0.08em]">
              Submission F.A.Q.
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div
          className="mt-6 sm:mt-8 rounded-[14px] overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.10)]"
          style={{ backgroundColor: BLUE }}
        >
          {sections.map((section, si) => (
            <div key={section.title} className="border-t border-white/25 first:border-t-0">
              {/* Section label (white background like the mock text blocks) */}
              <div className="bg-white px-4 sm:px-5 py-3">
                <h2 className="font-rowdies uppercase font-bold text-black text-[13px] sm:text-sm tracking-[0.06em]">
                  {section.title}
                </h2>
              </div>

              <div style={{ backgroundColor: BLUE }}>
                {section.items.map((item, ii) => {
                  const key = `${section.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}-${ii}`;

                  const open = !!openKeys[key];

                  return (
                    <AccordionRow
                      key={key}
                      id={key}
                      q={item.q}
                      open={open}
                      onToggle={() => toggle(key)}
                    >
                      {item.a}
                    </AccordionRow>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer callout link (as per your spec) */}
        {/* <div className="mt-10 text-center">
          <a
            href="https://filmfreeway.com"
            target="_blank"
            rel="noreferrer"
            className="font-rowdies uppercase underline text-sm"
          >
            FilmFreeway.com
          </a>
        </div> */}
      </section>
    </main>
  );
}
