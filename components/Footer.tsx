// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

const FOOTER_BG = "#66ccff";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const COLUMN_1: FooterLink[] = [
  { label: "Festival Info", href: "/filmfest" },
  { label: "Tickets & Passes", href: "/filmprogram" },
  { label: "Film Program", href: "/filmprogram" },
  {
    label: "Submit Your Film",
    href: "https://filmfreeway.com",
    external: true,
  },
];

const COLUMN_2: FooterLink[] = [
  { label: "San Diego Tourism", href: "/tourism" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Hotels & Lodging", href: "/hotels" },
  { label: "Travel & Transport", href: "/travel" },
];

const COLUMN_3: FooterLink[] = [
  { label: "Membership", href: "/mission" },
  { label: "Cinemas", href: "/cinemas" },
  { label: "Film Awards", href: "/awards" },
  { label: "Press & Industry", href: "/contact" },
];

const COLUMN_4: FooterLink[] = [
  {
    label: "Film Submissions",
    href: "https://filmfreeway.com",
    external: true,
  },
  {
    label: "Screenplay Contest",
    href: "https://filmfreeway.com",
    external: true,
  },
  { label: "Submission Guide", href: "/faq" },
  { label: "Rules & Legal", href: "/rulesandterms" },
];

const COLUMNS = [COLUMN_1, COLUMN_2, COLUMN_3, COLUMN_4];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: FOOTER_BG }}
      className=" text-white "
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <h2 className="font-rowdies font-normal text-xl md:text-4xl text-center mb-8">
          San Diego Independent Film Festival
        </h2>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-14 md:gap-16 mb-8">
          <a
            href="#"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/social/instagram.png"
              alt="Instagram"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>

          <a
            href="#"
            aria-label="Letterboxd"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/social/letterboxd.png"
              alt="Letterboxd"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>

          <a
            href="#"
            aria-label="X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/social/x-white.svg"
              alt="X"
              width={48}
              height={48}
              className="w-9.5 h-9.5"
            />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/social/facebook.svg"
              alt="Facebook"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
          </a>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-16 text-lg">
          {COLUMNS.map((col, colIndex) => (
            <div key={colIndex} className="space-y-1">
              {col.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block hover:underline"
                  >
                    {item.label}
                  </Link>
                )
              )}
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
