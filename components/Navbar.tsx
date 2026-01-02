// components/Navbar.tsx
"use client";

import Link from "next/link";
import { NAV_GROUPS } from "./navConfig";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 text-sm lg:text-sm font-rowdies text-white">
      {NAV_GROUPS.map((group) => (
        <div key={group.key} className="relative group">
          <button
            type="button"
            className="
              inline-flex items-center
              uppercase font-light
              px-3 py-2
              leading-none
              border border-transparent
              group-hover:bg-white group-hover:text-black
              group-hover:border-black/10 group-hover:shadow-lg
              group-hover:border-b-0
            "
          >
            {group.label}
          </button>

          {/* Hover bridge to prevent flicker when moving mouse down */}
          <div className="absolute left-0 right-0 top-full h-2" />

          <div
            className="
              absolute left-0 top-full
              mt-0
              min-w-full
              bg-white text-black
              border border-black/10 shadow-lg
              border-t-0
              border-b-[#66cbff] border-b-[6px]
              opacity-0 scale-95 pointer-events-none
              group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
              origin-top-left
              z-30
            "
          >
            {group.links.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    block
                    px-3 py-1.5
                    text-[11px] lg:text-xs
                    font-light
                    leading-tight
                    whitespace-nowrap
                    hover:bg-black/5
                  "
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="
                    block
                    px-3 py-1.5
                    text-[11px] lg:text-xs
                    font-light
                    leading-tight
                    whitespace-nowrap
                    hover:bg-black/5
                  "
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
