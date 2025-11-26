// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const FOOTER_BG = "#66ccff";

const COLUMN_1 = [
  { label: "Festival Info", href: "/festival-info" },
  { label: "Tickets & Passes", href: "/tickets-passes" },
  { label: "Film Program", href: "/film-program" },
  { label: "Submit Your Film", href: "/submit" },
];

const COLUMN_2 = [
  { label: "San Diego Tourism", href: "/san-diego-tourism" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Hotels & Lodging", href: "/hotels-lodging" },
  { label: "Travel & Transport", href: "/travel-transport" },
];

const COLUMN_3 = [
  { label: "Membership", href: "/membership" },
  { label: "Cinemas", href: "/cinemas" },
  { label: "Film Awards", href: "/awards" },
  { label: "Press & Industry", href: "/press-industry" },
];

const COLUMN_4 = [
  { label: "Film Submissions", href: "/film-submissions" },
  { label: "Screenplay Contest", href: "/screenplay-contest" },
  { label: "Submission Guide", href: "/submission-guide" },
  { label: "Rules & Legal", href: "/rules-legal" },
];

const COLUMNS = [COLUMN_1, COLUMN_2, COLUMN_3, COLUMN_4];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: FOOTER_BG }}
      className="mt-10 text-white font-istok"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Title */}
        <h2 className="font-rowdies font-normal text-2xl sm:text-3xl md:text-4xl text-center mb-8">
          San Diego Independent Film Festival
        </h2>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-10 sm:gap-12 md:gap-16 mb-10">

          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="block">
            <Image
              src="/social/instagram.png"
              alt="Instagram"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>

          {/* Letterboxd */}
          <a href="#" aria-label="Letterboxd" className="block">
            <Image
              src="/social/letterboxd.png"
              alt="Letterboxd"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>

          {/* X (white) */}
          <a href="#" aria-label="X (Twitter)" className="block">
            <Image
              src="/social/x-white.svg"
              alt="X"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>

          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="block">
            <Image
              src="/social/facebook.svg"
              alt="Facebook"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>

        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 md:gap-16 text-[20px] sm:text-base">
          {COLUMNS.map((col, colIndex) => (
            <div key={colIndex} className="space-y-2.5 sm:space-y-3">
              {col.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block hover:underline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="pb-6 text-center text-xs sm:text-sm opacity-90">
        © 2026 San Diego Independent Film Festival
      </div>
    </footer>
  );
}
