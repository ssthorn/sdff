// components/Navbar.tsx
"use client";

import Link from "next/link";
import { NAV_GROUPS } from "./navConfig";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 text-xs lg:text-sm font-rowdies text-black">
      {NAV_GROUPS.map((group) => (
        <div key={group.key} className="relative group">
          <button
            type="button"
            className="uppercase font-normal hover:underline"
          >
            {group.label}
          </button>

          {/* Hover bridge to prevent flicker when moving mouse down */}
          <div className="absolute left-0 right-0 top-full h-2" />

          <div
            className="
              absolute right-0 top-full
              min-w-[220px]
              bg-white text-black
              border border-black/10 shadow-lg py-2
              opacity-0 scale-95 pointer-events-none
              group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
              transition-all duration-150
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
                  className="block px-4 py-1.5 text-[11px] lg:text-xs font-light tracking-normal hover:bg-black/5"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-1.5 text-[11px] lg:text-xs font-light tracking-normal hover:bg-black/5"
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
