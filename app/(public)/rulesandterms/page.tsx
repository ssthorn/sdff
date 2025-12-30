import Link from "next/link";

export const metadata = {
  title: "Rules & Terms | San Diego Independent Film Festival",
};

export default function RulesAndTermsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-16">
        {/* Page title */}
        <div className="text-center">
          <h1 className="font-arial uppercase font-bold text-[#03ABFE] text-[22px] sm:text-3xl tracking-[0.06em]">
            Rules &amp; Terms
          </h1>
        </div>

        {/* Body */}
        <article className="mx-auto mt-8 max-w-[760px] text-black">
          {/* AGREEMENT */}
          <h2 className="font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Agreement
          </h2>

          <div className="mt-3 space-y-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            <p>
              By submitting to the Film Festival, Screenplay Contest, or any
              associated events or services, all submitters and participants
              acknowledge and agree to comply with all the terms, conditions,
              and regulations set forth in this Agreement.
            </p>
            <p>
              By use of this website and/or any associated services, all users
              acknowledge and agree to comply with all the terms, conditions,
              and regulations set forth in this Agreement.
            </p>
            <p>
              This Agreement, along with any additional terms governing
              submissions, purchases, ticket sales, contest entries, festival
              attendance, participation, and use of the festival website (and
              affiliated websites), constitutes the entire agreement between the
              parties.
            </p>
            <p>
              These terms will remain in effect even after termination or
              expiration of the agreement. If any provision is deemed invalid or
              unenforceable, that provision will be severed from the Agreement,
              and the remaining provisions will remain fully enforceable. You
              agree to allow the festival to assign this Agreement to a third
              party at its discretion. Section headings are provided for
              convenience and do not affect the interpretation or scope of the
              Agreement. Failure by the festival to enforce any provision will
              not waive the festival’s right to enforce future breaches.
            </p>
          </div>

          {/* RULES AND REGULATIONS */}
          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Rules and Regulations
          </h2>

          <ol className="mt-3 space-y-3 pl-5 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6 list-decimal">
            <li>
              <span className="font-semibold">Eligibility:</span> Participants
              in any festival competition or event must be at least 18 years
              old. Entries are void where prohibited by law. Entry fees must be
              paid in U.S. dollars before films are reviewed. All decisions made
              by festival judges, readers, screeners, programmers, and the event
              director are final.
            </li>
            <li>
              <span className="font-semibold">Submission Authorization:</span>{" "}
              By submitting or screening a project at the festival, the
              submitter confirms that all listed creators, owners, and rights
              holders have authorized the submission and its public screening or
              other use at the festival.
            </li>
            <li>
              <span className="font-semibold">Originality and Copyright:</span>{" "}
              By submitting your project, you confirm that it is your original
              work or that you hold the necessary ownership and copyright and
              that it does not infringe upon the rights of others. If a project
              has multiple authors, awards and prizes will be distributed
              equally among the creators listed in the submission at the time of
              acceptance.
            </li>
            <li>
              <span className="font-semibold">Materials:</span> Do not send
              original master copies. The festival is not responsible for any
              lost or damaged materials.
            </li>
            <li>
              <span className="font-semibold">Disruptive Conduct:</span> Any
              participant, attendee, or associate who engages in disruptive,
              aggressive, or threatening behavior towards any festival member,
              volunteer, staff, contractor, employee, guest, or venue personnel
              may have their film removed from exhibition without a refund. They
              and their associates may be removed from the festival and its
              events.
            </li>
            <li>
              <span className="font-semibold">Submission and Screening:</span>{" "}
              Submission does not guarantee acceptance, screening, awards, or
              representation by the festival at any live or online event.
              However, by submitting, you grant the festival permission to
              download, play, and publicly screen the submitted work for judges,
              staff, and programmers during the submission season and throughout
              the festival event dates.
            </li>
            <li>
              <span className="font-semibold">Schedule Changes:</span> All
              submission deadlines, contest deadlines, notification dates, and
              event dates (live and online) are subject to change without notice
              or refund. Screening times, dates, venues, and live event
              schedules (including screenings, parties, ceremonies, and red
              carpets) may be delayed, canceled, or rescheduled at the
              festival’s discretion, without refund or prior notice.
            </li>
            <li>
              <span className="font-semibold">Refunds:</span> All submission fees
              and purchases, including event, party, and screening tickets, are
              final and non-refundable. This policy applies to payments made to
              the festival, affiliated services, and the Screenplay Contest.
            </li>
            <li>
              <span className="font-semibold">Shipping and Delivery:</span> The
              festival is not responsible for lost, misplaced, or damaged shipped
              or messengered items. This includes materials delivered to rented
              venues, cinemas, or event spaces. Submitted items (e.g., film
              print, BluRay, DVD, press materials, hard drives) may not be
              returned.
            </li>
            <li>
              <span className="font-semibold">Film Print/DCP Handling:</span> The
              submitter is responsible for handling all film print and
              professional DCP returns, drop-offs, and pick-ups — in
              coordination with the festival according to established guidelines
              and protocols. The submitter is additionally responsible for
              handling all film print and professional DCP returns, drop-offs,
              and pick-ups — in coordination with the authorized DCP authoring
              and testing festival partner services.
            </li>
          </ol>

          {/* RIGHT TO ENTER */}
          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Right To Enter
          </h2>
          <div className="mt-3 space-y-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            <p>
              Entrants warrant that they possess the legal right to submit their
              work to the festival. As submitter of the film or screenplay,
              entrants represent that the film is original, does not violate any
              third-party rights, and that they own or control the film and its
              components. Submitted films must not be involved in any ongoing or
              threatened legal action.
            </p>
            <p>
              All submitted films are presumed by the festival to be not involved
              in any ongoing or threatened legal action and by submitting a film
              project to the festival entrants (“submitter”) assumes the total
              and full legal responsibility for any and all claims, damages,
              and/or any other legal costs accrued in the event legal action is
              taken against the festival or its staff, partners, employees,
              contract workers, volunteers or owners, including but not limited
              to any and all legal costs accrued by the festival in its own
              defense.
            </p>
          </div>

          {/* TERMS OF USE */}
          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Terms of Use
          </h2>
          <div className="mt-3 space-y-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            <p>
              Failure to comply with any festival guidelines, rules, or
              regulations may result in disqualification and removal from
              competition or screenings.
            </p>
            <p>
              By submitting, you confirm that you have read, understood, and
              agreed to these Terms of Use and the Rules and Regulations, and
              that all members of your team will comply with them. You must
              confirm that you are at least 18 years old.
            </p>

            <ul className="mt-2 list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Release and Hold Harmless:</span>{" "}
                You agree to release and hold harmless the festival, its
                directors, staff, volunteers, and partners from any claims,
                damages, or actions arising from your participation, attendance,
                and/or submission to the festival.
              </li>
              <li>
                <span className="font-semibold">Use of Materials:</span> You
                grant the festival the right to use screen grabs, stills, and
                press materials for promotional purposes for at least 25 months
                before the festival and for 6 years after the festival year you
                submitted to.
              </li>
              <li>
                <span className="font-semibold">Screening Rights:</span> You
                grant the festival the right to screen your film publicly for at
                least one time and up to two times in association with the
                festival release year you submitted. This right is granted for no
                longer than 15 months after the submission was received, except
                in the case of mutual agreement to screen the following season,
                in which case the right would be granted to screen for up to 28
                months following your initial submission.
              </li>
              <li>
                <span className="font-semibold">No Refunds for Technical Difficulties:</span>{" "}
                The festival is not responsible for films that cannot be screened
                due to technical difficulties, and no refunds will be issued.
              </li>
              <li>
                <span className="font-semibold">Festival Rights:</span> The
                festival reserves the right to refuse service and remove
                non-compliant participants without refund.
              </li>
              <li>
                <span className="font-semibold">Use of Film for Promotion:</span>{" "}
                The festival may use any publicly accessible (available on the
                internet) trailers (up to 9 minutes in length), stills, and/or
                screen grabs from your film for public (and private) festival
                promotion and marketing, including as disseminated press
                material, for up to 12 months before the festival and additionally
                for 12 years after the festival, with these timelines starting
                from date of your submission being accepted by the festival.
              </li>
            </ul>
          </div>

          {/* Remaining sections */}
          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            General Terms
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            In the event that any provision of this Agreement is deemed
            unenforceable, it shall be severed, and the remaining provisions
            shall remain valid. The festival may assign this Agreement to a third
            party. Section headings are for convenience and do not define the
            scope or intent of the sections. This Agreement, along with any
            ancillary terms and conditions, represents the entire understanding
            between the parties.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Governing Law
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            This Agreement is governed by the laws of the State of California,
            excluding its conflicts of law principles. Any disputes will be
            resolved in the federal or state courts located in California.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            International Rules
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            The festival is administered from the United States. Participants
            from outside the U.S. must comply with applicable local laws. You
            agree not to use festival content in ways prohibited by local laws.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Indemnification
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            You agree to indemnify and hold harmless the festival, its staff, and
            partners from any claims, expenses, or demands arising from your
            breach of this Agreement or violation of applicable laws.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Risk of Loss
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            The festival is not responsible for any failures, delays, or
            interruptions related to ordering, delivery, or use of passes,
            tickets, or services. The festival is also not liable for failures
            related to submissions or festival events, with refunds provided
            solely at the festival&apos;s discretion.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Trademarks
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            All trademarks, logos, designs, and service names related to the
            festival are the property of the festival and are protected by U.S.
            trademark law. Unauthorized use of these trademarks is prohibited.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            DMCA
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            The festival adheres to copyright law and handles copyright disputes
            in accordance with the Digital Millennium Copyright Act (DMCA). If
            you believe copyright infringement has occurred, please contact the
            festival with a completed DMCA 512(c)(3) Notice of Infringement form.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Disclaimer of Warranties
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            The festival makes no representations or warranties about the
            accuracy, completeness, or usefulness of any content on the website
            or in festival materials. The website and event screenings are
            provided &quot;as is.&quot; The festival disclaims any implied
            warranties, including merchantability or fitness for a particular
            purpose.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Limitation of Liability
          </h2>
          <p className="mt-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            Under no circumstances will the festival be liable for indirect,
            incidental, special, or punitive damages, including loss of profits,
            arising from the use of the website or participation in festival
            events.
          </p>

          <h2 className="mt-8 font-arial uppercase font-bold text-[13px] tracking-[0.05em]">
            Updates to Agreement
          </h2>
          <div className="mt-3 space-y-3 text-[12.5px] leading-[1.55] sm:text-sm sm:leading-6">
            <p>
              Additionally, by submitting to the Film Festival, Screenplay
              Contest, or any associated events or services, submitters and
              participants not only acknowledge and agree to comply with all the
              terms, conditions, rules and regulations set forth in this
              Agreement, but also acknowledge and agree to comply with any and
              all terms, conditions, rules, and regulations additionally set
              forth on any official festival Rules &amp; Regulation section as
              posted on the festival&apos;s submission webpage on FilmFreeway or
              any other festival-connected submission portal service page used to
              submit to the festival.
            </p>
            <p>
              The festival reserves the right to amend these Rules and
              Regulations at any time. The latest version will supersede any
              prior versions. It is recommended that participants review these
              terms as well as all posted festival terms, conditions, rules, and
              regulations periodically for updates, both on this website and on
              any officially related festival submission website or service used
              to submit a film or screenplay project to the festival.
            </p>
          </div>

          {/* (Optional) quick internal link */}
          <div className="mt-10 text-center text-[12px] sm:text-sm">
            <Link href="/" className="underline font-arial uppercase">
              Return Home
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
