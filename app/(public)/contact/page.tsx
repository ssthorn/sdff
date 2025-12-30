// app/contact/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | San Diego Independent Film Festival",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-[18px] sm:text-[20px] font-bold tracking-wide text-black">
        {title}
      </h2>
      <div className="mt-2 space-y-2 text-[12px] sm:text-[13px] leading-5 text-black/85">
        {children}
      </div>
    </section>
  );
}

function EmailLine({
  label,
  email,
}: {
  label: string;
  email: string;
}) {
  return (
    <p className="text-[12px] sm:text-[13px] leading-5 text-black/85">
      {label}{" "}
      <a className="text-sky-600 hover:underline" href={`mailto:${email}`}>
        {email}
      </a>
    </p>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Page header spacing similar to mock */}
      <div className="mx-auto w-full max-w-[980px] px-5 sm:px-6 pb-16 pt-10 sm:pt-12">
        {/* Title */}
        <h1
          className="
            text-center font-extrabold uppercase
            tracking-[0.18em]
            text-[22px] sm:text-[28px]
            text-sky-500
          "
        >
          Information
        </h1>

        {/* Top sections */}
        <Section title="MEMBERSHIP">
          <p>
            The San Diego Independent Film Society currently hosts several
            quarterly screening events in addition to their co-sponsoring of the
            San Diego Independent Film Festival, with a large Film Society
            membership and event expansion being planned for next year.
          </p>
          <p>
            San Diego Independent Film Society Membership is currently drawn
            from San Diego film aficionados and film communities stemming from
            our local universities including the University of California San
            Diego (UCSD), San Diego State University (SDSU), San Diego Mesa
            College, and the University of San Diego (USD).
          </p>
          <p>
            For info about the San Diego Independent Film Society,{" "}
            <Link className="text-sky-600 hover:underline" href="/mission">
              click here
            </Link>
            .
          </p>
          <p>
            To attend the San Diego Independent Film Society events as an
            Official Film Society Member, or to support the Film Society efforts
            through an annual membership donation, please contact the Film
            Society directly for more information at:{" "}
            <a
              className="text-sky-600 hover:underline"
              href="mailto:membership@sdiff.film"
            >
              membership@sdiff.film
            </a>
          </p>
        </Section>

        <Section title="PRESS + MEDIA INQUIRIES">
          <p>
            Applications for Press &amp; Media Credentials begin each September.
            Professional Industry Accreditation requests are given out after
            tickets go on-sale each Fall. Stay tuned for future updates and
            announcements regarding upcoming opening dates for Media Credentials
            &amp; Professional Film Industry Accreditation applications.
          </p>
          <p>
            For inquiries regarding press credentials, interview requests, or
            press photography, contact our Press Coordinator and Communications
            Departments via email at:{" "}
            <a className="text-sky-600 hover:underline" href="mailto:press@sdiff.film">
              press@sdiff.film
            </a>
          </p>
        </Section>

        <Section title="GENERAL INQUIRIES">
          <p className="font-semibold text-black/90">
            For the fastest responses to inquiries, we recommend the following:
          </p>
          <p>
            For requests related to Film Society Membership, Press Credentials,
            Industry Requests, Volunteering, or Brand Partnership, Sponsorship
            and Advertising — visit the other sections on this page for specific
            contact information.
          </p>
          <p>
            For inquiries about festival attendance, visit our website first and
            be sure to read our specific{" "}
            <Link className="text-sky-600 hover:underline" href="/festfaq">
              Film Festival FAQ
            </Link>{" "}
            as all popular questions about festival attendance are answered
            there.
          </p>
          <p>
            For inquiries about submitting your film or screenplay to the
            festival, please make sure to read our{" "}
            <Link className="text-sky-600 hover:underline" href="/submissionfaq">
              Submission FAQ
            </Link>{" "}
            first, as all popular questions about submitting projects to the
            festival are answered there.
          </p>
          <p>
            For inquiries regarding an already submitted film project, the best
            recommendation is to first reach out to your submission platform
            (FilmFreeway, etc.) for any issues with content uploading or
            revision, as that usually would be the most efficient protocol.
          </p>
          <EmailLine
            label="For general festival inquiries, including ticketing issues occurring during the festival screening days and dates — contact the festival via email at:"
            email="office@sdiff.film"
          />
        </Section>

        {/* Big photo break */}
        <div className="mt-10 sm:mt-12">
          <div className="relative w-full overflow-hidden rounded-none border border-black/10">
            <div className="relative aspect-video sm:aspect-21/9">
              <Image
                src="/contact/1. contact page new.jpg"
                alt="Festival audience"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom sections */}
        <Section title="INDUSTRY REQUESTS">
          <EmailLine
            label="All major studio, distributor, and industry inquiries regarding festival programming screeners or attendance requests may reach out to our festival team at:"
            email="industry@sdiff.film"
          />
        </Section>

        <Section title="PARTNERSHIP OPPORTUNITIES">
          <EmailLine
            label="For brand partnership, sponsorship, or advertising opportunities, please contact the festival at:"
            email="sponsorships@sdiff.film"
          />
        </Section>

        <Section title="VOLUNTEERING">
          <EmailLine
            label="For inquiries about volunteering at the festival please email us at:"
            email="volunteer@sdiff.film"
          />
        </Section>

        <Section title="ACCEPTED FILMMAKERS">
          <p>
            For the fastest and most accurate replies, filmmakers who have been
            accepted to screen at the festival should reach out using the
            private email address provided at time of acceptance (for accepted
            festival filmmakers only), and not via any other mail address on
            this page.
          </p>
        </Section>

        <Section title="SUGGESTIONS & RECOMMENDATIONS">
          <p>
            While our volunteer staff is not able to reply to every question,
            request, recommendation, or suggestion, know that every email sent
            is read and thoughtfully considered.
          </p>
          <p>
            Suggestions on how to make the festival better are always welcome.
            Feel free to email us with any suggestions at:{" "}
            <a
              className="text-sky-600 hover:underline"
              href="mailto:office@sdiff.film"
            >
              office@sdiff.film
            </a>
          </p>
        </Section>
      </div>
    </main>
  );
}
