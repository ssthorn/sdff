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
  return (
    <span
      aria-hidden='true'
      className={[
        "ml-3 inline-flex h-7 w-7 items-center justify-center",
        open ? "text-black" : "text-white",
      ].join(" ")}
    >
      <svg viewBox='0 0 24 24' className='h-6 w-6'>
        <path
          d='M5 12h14'
          stroke='currentColor'
          strokeWidth='2.2'
          strokeLinecap='round'
        />
        {!open && (
          <path
            d='M12 5v14'
            stroke='currentColor'
            strokeWidth='2.2'
            strokeLinecap='round'
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
    <div className='border-b border-white/25 last:border-b-0'>
      <button
        type='button'
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className={[
          "w-full flex items-center justify-between",
          "px-4 sm:px-5 py-3",
          "text-left",
          "font-rowdies uppercase tracking-[0.06em]",
          "text-[12px] sm:text-[13px]",
          open ? "bg-white text-black" : "text-white",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
        ].join(" ")}
      >
        <span className='pr-2'>{q}</span>
        <PlusIcon open={open} />
      </button>

      {open && (
        <div
          id={id}
          className='bg-white px-4 sm:px-5 py-3 sm:py-4 text-[12.5px] leading-5 sm:text-sm sm:leading-6 text-black'
        >
          {children}
        </div>
      )}
    </div>
  );
}

function FaqGroup({
  title,
  items,
  openKeys,
  onToggle,
  groupKey,
}: {
  title: string;
  items: { q: string; a: React.ReactNode }[];
  openKeys: Record<string, boolean>;
  onToggle: (key: string) => void;
  groupKey: string;
}) {
  const BLUE = "#03ABFE";

  return (
    <section className=''>
      <div className='text-center'>
        <h2 className='font-rowdies font-light uppercase text-[#03ABFE] text-2xl tracking-tight'>
          {title}
        </h2>
      </div>

      <div
        className='rounded-[14px] overflow-hidden shadow-[0_10px_22px_rgba(0,0,0,0.14)]'
        style={{ backgroundColor: BLUE }}
      >
        {items.map((item, idx) => {
          const key = `${groupKey}-${idx}`;
          return (
            <AccordionRow
              key={key}
              id={key}
              q={item.q}
              open={!!openKeys[key]}
              onToggle={() => onToggle(key)}
            >
              {item.a}
            </AccordionRow>
          );
        })}
      </div>
    </section>
  );
}

export default function FestFaqPage() {
  const sections: FaqSection[] = useMemo(
    () => [
      {
        title: "",
        items: [
          {
            q: "How to Submit?",
            a: (
              <p>
                Our festival exclusively accepts film submissions via{" "}
                <a href='https://www.filmfreeway.com' className='text-link'>
                  FilmFreeway
                </a>
                .
                <br />
                <br />
                We also accept Screenplay Contest submissions through{" "}
                <a href='https://www.filmfreeway.com' className='text-link'>
                  FilmFreeway
                </a>
                .
                <br />
                <br />
                Submitters may need to create a free account with the submission
                platform to begin the process. While there is no cost to create
                an account, FilmFreeway charges submission fees and service fees
                at the time of submission. These fees are paid directly to the
                platform and are non-refundable.
                <br />
                <br />
                Submission platforms operate independently and are not
                affiliated with the festival beyond providing submission
                services.
              </p>
            ),
          },
          {
            q: "Submission Deadlines & Fees?",
            a: (
              <p>
                All submission deadlines and fees are listed on our{" "}
                <a href='https://www.filmfreeway.com' className='text-link'>
                  FilmFreeway
                </a>{" "}
                event page for both film projects and screenplay submissions.
                <br />
                <br />
                Incomplete submissions may be disqualified without refund after
                the Final Deadline of each submission season.
              </p>
            ),
          },
          {
            q: "Selecting a Submission Category?",
            a: (
              <p>
                A full list of submission categories is available on our{" "}
                <a href='https://www.filmfreeway.com' className='text-link'>
                  FilmFreeway
                </a>{" "}
                page.
                <br />
                <br />
                If your project fits multiple categories, choose the single
                category that best represents your work. Festival judges and
                programmers may reassign submissions to a different category
                during the review or programming process when appropriate, in
                order to give the project its best chance for consideration.
              </p>
            ),
          },
          {
            q: "Project Length?",
            a: (
              <p>
                The festival accepts Feature Length Films, Short Films, Episodic
                Television, and Streaming Projects.
                <br />
                <br />
                Eligible projects range from over 1 minute up to 4 hours in
                length. Specific runtime limits vary by category—please review
                the requirements listed on our{" "}
                <a href='https://www.filmfreeway.com' className='text-link'>
                  FilmFreeway
                </a>{" "}
                page for details.
              </p>
            ),
          },
          {
            q: "Screener Requirements?",
            a: (
              <>
                <p>
                  All film submissions must include an online screener to be uploaded through
                  <a href='https://www.filmfreeway.com' className='text-link'>
                    FilmFreeway
                  </a>{" "}
                  for festival judging and review.
                </p>
                <p className='mt-2'>
                  The festival cannot accept physical media such as DVDs or Blu-rays. 
                </p>
                <p className='mt-2'>
                  It is the submitters responsibility to ensure the screener link and full film remains active and viewable from the first day of submission, through the final deadline, and until the final judging announcements are made.
                </p>
              </>
            ),
          },
          {
            q: "Premiere Status?",
            a: (
              <p>
                World Premiere status is not required for submission or
                acceptance. Projects are evaluated independently of premiere or
                exclusivity status.
                <br />
                <br />
                However, to help maximize attendance, we recommend avoiding
                screenings within a 75-mile radius for at least four months
                before and/or after any festival screening.
              </p>
            ),
          },
          {
            q: "International Projects?",
            a: (
              <p>
                We accept submissions from all countries. Non-English language
                projects must include English subtitles.
                <br />
                <br />
                Please note that fee waivers are not available for international
                submissions.
              </p>
            ),
          },
          {
            q: "Works-in-Progress?",
            a: (
              <>
                <p>We welcome work-in-progress submissions.</p>
                <p className='mt-2'>
                  Clearly label the submission and screener as being a
                  “work-in-progress”, and make sure to detail which aspects
                  (e.g., visual effects, color grading) are incomplete at time
                  of submission.
                </p>
                <p className='mt-2'>
                  Note that all projects must be finalized prior to having an
                  accepted festival screening slot, as the festival cannot
                  screen unfinished film projects to an audience.
                </p>
              </>
            ),
          },
          {
            q: "Age Requirements?",
            a: (
              <p>
                Individuals aged 18 or older may submit directly.
                <br />
                <br />
                Submissions from minors must be completed by a parent or legal
                guardian on their behalf.
              </p>
            ),
          },
          {
            q: "Student Submissions?",
            a: (
              <p>
                Information regarding student submissions, eligibility, and
                discounts (if available) can be found on our{" "}
                <a href='https://www.filmfreeway.com' className='text-link'>
                  FilmFreeway
                </a>{" "}
                page.
              </p>
            ),
          },
          {
            q: "Multiple Submissions?",
            a: (
              <>
                <p>
                  You may submit multiple projects, provided each one adheres to our guidelines.
                </p>
                <p className="mt-2">
Each unique submission must be filed separately through FilmFreeway, including its own fee. One project’s acceptance to the festival has no bearing on the judging status of any other separately submitted project.                </p>
              </>
            ),
          },
          {
            q: "Film Ratings?",
            a: (
              <>
                <p>
                  Your project does not need an MPA rating to be eligible for
                  submission.
                </p>
                <p className='mt-2'>
                  You may use other languages as well as the classic MPA
                  guideline ratings as a guide to let the festival know the
                  maturity level and preferred audience age for your submitted
                  project.
                </p>
              </>
            ),
          },
          {
            q: "Resubmitting Projects?",
            a: (
              <>
                <p>
                  Previously submitted projects can be resubmitted next season
                  as long as they still meet our current eligibility criteria.
                </p>
                <p className='mt-2'>
                  Previously submitted projects may be resubmitted in the same
                  season if they have been changed (longer running time,
                  re-edited into a different film, etc.) as long as the new
                  submission still meets our current eligibility criteria.
                </p>
              </>
            ),
          },
          {
            q: "Contact Info Requirements?",
            a: (
              <p>
                Ensure your contact information is accurate and up-to-date on
                FilmFreeway. The festival cannot be held responsible for missed
                communications due to incorrect details or changes in contact
                info after submission.
              </p>
            ),
          },
          {
            q: "Unsolicited Submissions?",
            a: (
              <>
                <p>
                  Only submissions via FilmFreeway or other official submission
                  platform will be considered.
                </p>
                <p className='mt-2'>
                  Unsolicited materials, including mailed DVDs, will not be
                  reviewed. Only festival-contacted projects may by authorized a
                  festival waiver. Please do not contact the festival requesting
                  a waiver.
                </p>
              </>
            ),
          },
          {
            q: "Non-Filmmaker Submissions?",
            a: (
              <>
                <p>
                  By submitting, you confirm you have the legal right to do so.
                  The festival will not be held responsible for any disputes
                  regarding ownership or submission rights.
                </p>
                <p className='mt-2'>
                  If you are submitting on behalf of a filmmaker, as producer,
                  assistant, etc.: You must have the filmmaker and any rights
                  holders explicit permissions and provide their contact details
                  in order to submit to our festival.
                </p>
              </>
            ),
          },
          {
            q: "Feedback?",
            a: (
              <>
                <p>
                  Due to the high volume of submissions and the logical costs
                  involved; individual feedback is not provided for film or
                  screenplay submissions.
                </p>
                <p className='mt-2'>
                  Additional Screenplay Feedback & Judging Review notes that are
                  edited and prepared for submitters may be available for
                  additional fees - check our current submission platform page
                  to see if such services are available and the current fees
                  involved.
                </p>
              </>
            ),
          },
          {
            q: "Fees & Waivers?",
            a: (
              <>
                <ul className='list-disc pl-5 space-y-2 mt-2'>
                  <li>
                    <span className='font-semibold'>Submission Fees: </span>
                    Fee details are listed on our festival’s FilmFreeway page.
                    page.
                  </li>
                  <li className=''>
                    <span className='font-semibold'>Waivers: </span>To maintain
                    fairness, we do not offer fee waivers.
                  </li>
                  <li className=''>
                    <span className='font-semibold'>Refunds: </span>
                    Submission Fees are non-refundable under any circumstances,
                    including changes to premiere status, incorrect category
                    selection, or non-acceptance. Ticket purchases are also
                    non-refundable after purchase.
                  </li>
                </ul>
              </>
            ),
          },
          {
            q: "Submission Confirmation & Acceptance Notification?",
            a: (
              <>
                <p className='font-semibold uppercase'>
                  Submission Confirmation
                </p>
                <p>
                  Check your{" "}
                  <a href='https://www.filmfreeway.com' className='text-link'>
                    FilmFreeway
                  </a>{" "}
                  account for updates on yur submission's status.
                </p>
                <p className='font-semibold uppercase mt-2'>
                  Notification of Status
                </p>
                <p>
                  Check your{" "}
                  <a href='https://www.filmfreeway.com' className='text-link'>
                    FilmFreeway
                  </a>{" "}
                  account around the date of our festivals listed Final Deadline
                  Date and Notification Date (which may slightly change during
                  the season without notice) for updates on your submission’s
                  final accepted or non-accepted status.
                </p>
                <ul className='list-disc pl-5 space-y-2 mt-2'>
                  <li>
                    <span className='font-semibold'>Accepted Projects:</span>{" "}
                    Notifications are sent via email as well as through
                    FilmFreeway for Film Project submissions and also for
                    Screenplay Contest submissions.
                  </li>

                  <li>
                    <span className='font-semibold'>
                      Non-Accepted Projects:
                    </span>{" "}
                    Notifications will follow the official selection
                    announcements and sent via email and through FilmFreeway.
                  </li>
                </ul>
              </>
            ),
          },
          {
            q: "Screening & Award Information?",
            a: (
              <>
                <p className='font-semibold uppercase'>SCREENING GUARANTEE</p>
                <p>
                  Accepted film projects are programmed to have at least one
                  public film screening as part of our annual San Diego
                  Independent Film Festival - after being chosen by our festival
                  judges and programmers as an ACCEPTED project.
                </p>
                <p className='mt-2'>
                  This screening guarantee is only for submissions chosen by the
                  festival as ACCEPTED and also provide the festival an
                  exhibition print - in a festival and venue approved format -
                  by the print deadline dates requested by the festival and our
                  film print projection service partners.
                </p>{" "}
                <p className='mt-2'>
                  Any details related to an initial festival screening (or any
                  additional screenings), including scheduling, venue placement,
                  post screening events (if any), and platform decisions are all
                  entirely at the Festival’s sole discretion and may be subject
                  to change without notice.
                </p>
                <p className='font-semibold uppercase mt-2'>AWARDS</p>
                <p>
                  Our judges carefully evaluate submissions, but not all
                  accepted projects receive accolades. Submission to the
                  festival for review does not guarantee an award win. Selection
                  to the festival for a film project also does not automatically
                  guarantee an award win.
                </p>{" "}
                <p className='mt-2'>
                  Our event is not a laurel farm, not every submission is
                  accepted nor all all accepted films given awards.
                  <br />
                </p>
              </>
            ),
          },
          {
            q: "Travel Policies?",
            a: (
              <p>
                The festival is unable to provide travel or accommodation
                reimbursements for accepted film projects, award winners, or
                screenplay contest submissions.
              </p>
            ),
          },
          
          {
            q: "Festival Acceptance?",
            a: (
              <>
                <p>
                  Submitted projects are reviewed and judged by multiple judges,
                  reviewers, and programmers for potential award acknowledgement
                  and festival screening and inclusion.
                </p>
                <p className='mt-2'>
                  Submissions are then voted on by our San Diego Film Society
                  Membership with the highest judged films each season then
                  being selected for screening and awards at our annual film
                  festival.
                </p>
                <p className='mt-2'>
                  Submitting to the festival does not guarantee selection for
                  screening as part of our annual programming, nor does it
                  guarantee any award honors. Submission Fees are set to cover
                  the cost of judging submissions, and they cannot be refunded
                  if a project is not selected.
                </p>
              </>
            ),
          },
          {
            q: "Policies, Rules, Regulations, Terms & Conditions",
            a: (
              <>
              <p>
                All programming and judging decisions are final.
                </p>
                <p className='mt-2'>
                For the most up-to-date information about festival policies, and general festival
Rules, Regulations, Terms, & Conditions: visit our festival{" "}
                <a href='/rulesandterms' className='text-link'>
                  Rules & Terms page
                </a>{" "}
                 and be sure to read the rules and terms as listed on our current{" "}
                <a href='https://www.filmfreeway.com' className='text-link'>
                  FilmFreeway
                </a>{" "}
                Event Page as well.
              </p>
              </>
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
  const WHITE = "000000";
  return (
    <main className='bg-white'>
      <section className='mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 pb-16'>
        {/* Title block */}
        <div className='text-center'>
          <h1 className='faq-h1-black'>Film & Screenplay Submissions</h1>
          <p className=' text-lg'>Frequently Asked Questions</p>

          <div className='mt-6  mb-2'>
            <div className='font-rowdies font-light uppercase text-[#00aaff] text-2xl tracking-tight'>
              Submission F.A.Q.
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div
          className='rounded-[14px] overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.10)]'
          style={{ backgroundColor: WHITE }}
        >
          {sections.map((section) => {
            const groupKey = section.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");

            return (
              <FaqGroup
                key={section.title}
                title={section.title}
                items={section.items}
                openKeys={openKeys}
                onToggle={(key) => toggle(key)}
                groupKey={groupKey}
              />
            );
          })}

          <div className='h-6' />
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
