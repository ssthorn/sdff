// components/navConfig.ts

export type NavGroupKey = "filmFestival" | "visitSD" | "sdFilm" | "submissions";

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavGroup = {
  key: NavGroupKey;
  label: string;
  links: NavLink[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    key: "filmFestival",
    label: "Film Festival",
    links: [
      { label: "Festival Info", href: "/filmfest" },
      { label: "Tickets", href: "/filmprogram" },
      { label: "Film Program", href: "/filmprogram" },
      { label: "History", href: "/mission" },
      { label: "Submit Your Film", href: "https://filmfreeway.com", external: true },
    ],
  },
  {
    key: "visitSD",
    label: "Visit San Diego",
    links: [
      { label: "S.D. Tourism", href: "/tourism" },
      { label: "Restaurants", href: "/restaurants" },
      { label: "Hotels & Lodging", href: "/hotels" },
      { label: "Travel & Transport", href: "/travel" },
    ],
  },
  {
    key: "sdFilm",
    label: "SD Film",
    links: [
      { label: "Mission", href: "/mission" },
      { label: "S.D. Cinemas", href: "/cinemas" },
      { label: "Film Awards", href: "/awards" },
      { label: "Press & Industry", href: "/contact" },
      { label: "Membership", href: "/mission" },
    ],
  },
  {
    key: "submissions",
    label: "Submissions",
    links: [
      { label: "Submit Your Film", href: "https://filmfreeway.com", external: true },
      { label: "Screenplay Contest", href: "/screenplay" },
      { label: "Submission Guide", href: "/faq" },
      { label: "Festival Rules", href: "/rulesandterms" },
    ],
  },
];

export const HOME_LINK = { label: "Home", href: "/" };

export const SUBMIT_CTA = {
  label: "Submit",
  href: "https://filmfreeway.com",
  external: true,
};
