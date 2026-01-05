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
          "w-full flex items-center justify-between",
          "px-4 sm:px-5 py-3",
          "text-left",
          "font-rowdies uppercase tracking-[0.06em]",
          "text-[12px] sm:text-[13px]",
          open ? "bg-white text-black" : "text-white",
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
    <section className="">
      <div className="text-center">
        <h2 className="font-rowdies font-light uppercase text-[#03ABFE] text-2xl tracking-tight">
          {title}
        </h2>
      </div>

      <div
        className="rounded-[14px] overflow-hidden shadow-[0_10px_22px_rgba(0,0,0,0.14)]"
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
      <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a>.
      <br /><br />
      We also accept Screenplay Contest submissions through <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a>.
      <br /><br />
      Submitters may need to create a free account with the submission platform
      to begin the process. While there is no cost to create an account,
      FilmFreeway charges submission fees and service fees at the time of
      submission. These fees are paid directly to the platform and are
      non-refundable.
      <br /><br />
      Submission platforms operate independently and are not affiliated with
      the festival beyond providing submission services.
    </p>
  ),
}
,
          {
  q: "Submission Deadlines & Fees?",
  a: (
    <p>
      All submission deadlines and fees are listed on our <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a> event
      page for both film projects and screenplay submissions.
      <br /><br />
      Incomplete submissions may be disqualified without refund after the
      Final Deadline of each submission season.
    </p>
  ),
}
,
          {
  q: "Selecting a Submission Category?",
  a: (
    <p>
      A full list of submission categories is available on our{" "}
      <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a>{" "}
      page.
      <br /><br />
      If your project fits multiple categories, choose the single category
      that best represents your work. Festival judges and programmers may
      reassign submissions to a different category during the review or
      programming process when appropriate, in order to give the project its
      best chance for consideration.
    </p>
  ),
}
,
          {
  q: "Project Length?",
  a: (
    <p>
      The festival accepts Feature Length Films, Short Films, Episodic
      Television, and Streaming Projects.
      <br /><br />
      Eligible projects range from over 1 minute up to 4 hours in length.
      Specific runtime limits vary by category—please review the requirements
      listed on our <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a> page for details.
    </p>
  ),
}
,
          {
  q: "Screener Requirements?",
  a: (
    <p>
      All submissions must include an online screener uploaded through
      <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a> for judging and review.
      <br /><br />
      Physical media such as DVDs or Blu-rays are not accepted.
      <br /><br />
      It is the submitter’s responsibility to ensure that all screener links
      remain active and viewable from submission through final judging
      notifications.
    </p>
  ),
}
,
          {
  q: "Premiere Status?",
  a: (
    <p>
      World Premiere status is not required for submission or acceptance.
      Projects are evaluated independently of premiere or exclusivity status.
      <br /><br />
      However, to help maximize attendance, we recommend avoiding screenings
      within a 75-mile radius for at least four months before and/or after any
      festival screening.
    </p>
  ),
}
,{
  q: "International Projects?",
  a: (
    <p>
      We accept submissions from all countries. Non-English language projects
      must include English subtitles.
      <br /><br />
      Please note that fee waivers are not available for international
      submissions.
    </p>
  ),
},{
  q: "Works-in-Progress?",
  a: (
    <p>
      Work-in-progress submissions are welcome.
      <br /><br />
      Please clearly label the project as a work-in-progress and specify which
      elements are incomplete at the time of submission.
      <br /><br />
      All accepted projects must be fully completed prior to screening, as the
      festival cannot exhibit unfinished films.
    </p>
  ),
}
,{
  q: "Age Requirements?",
  a: (
    <p>
      Individuals aged 18 or older may submit directly.
      <br /><br />
      Submissions from minors must be completed by a parent or legal guardian
      on their behalf.
    </p>
  ),
},{
  q: "Student Submissions?",
  a: (
    <p>
      Information regarding student submissions, eligibility, and discounts
      (if available) can be found on our <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a> page.
    </p>
  ),
}
,{
  q: "Multiple Submissions?",
  a: (
    <p>
      Multiple projects may be submitted, provided each submission meets all
      eligibility requirements.
      <br /><br />
      Each project must be submitted separately through <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a> and
      requires its own submission fee. Acceptance of one project does not
      affect the status of other submissions.
    </p>
  ),
}
, {
  q: "Film Ratings?",
  a: (
    <p>
      An official MPA rating is not required for submission.
      <br /><br />
      Filmmakers may indicate content advisories or maturity guidance to help
      inform programming decisions and audience suitability.
    </p>
  ),
}
,{
  q: "Resubmitting Projects?",
  a: (
    <p>
      Projects submitted in previous seasons may be resubmitted if they still
      meet current eligibility criteria.
      <br /><br />
      Projects may also be resubmitted within the same season if substantial
      changes have been made, such as re-editing or runtime changes.
    </p>
  ),
}
, {
  q: "Fees & Waivers?",
  a: (
    <>
      <p>
        Submission fees are listed on our <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a> page.
      </p>
      <p className="mt-3">
        To maintain fairness, the festival does not offer fee waivers.
      </p>
      <p className="mt-3 font-semibold">
        All submission fees are non-refundable under any circumstances.
      </p>
    </>
  ),
}
,{
  q: "Festival Acceptance & Awards?",
  a: (
    <p>
      Submissions are reviewed by multiple judges, programmers, and festival
      members. Selection is competitive and submission does not guarantee
      screening or awards.
      <br /><br />
      The festival is not a laurel farm. Not all accepted films receive awards,
      and not all submissions are selected.
    </p>
  ),
},{
  q: "Policies, Rules & Terms?",
  a: (
    <p>
      All programming and judging decisions are final.
      <br /><br />
      For complete and current festival rules, regulations, and terms, please
      review our{" "}
      <a href="/rulesandterms" className="text-link">
        Rules & Terms
      </a>{" "}
      page and the official <a href="https://www.filmfreeway.com" className="text-link">
        FilmFreeway
      </a> event listing.
    </p>
  ),
}




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
  const WHITE ="000000"
  return (
    <main className='bg-white'>
      <section className='mx-auto max-w-[760px] px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 pb-16'>
        {/* Title block */}
        <div className='text-center'>
          <h1 className='faq-h1-black'>
            Film & Screenplay Submissions
          </h1>
          <p className=' text-lg'>
            Frequently Asked Questions
          </p>

          <div className='mt-6'>
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

<div className="h-6" />

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
