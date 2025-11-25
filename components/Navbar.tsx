// components/Navbar.tsx
"use client";

import Link from "next/link";
import { NAV_GROUPS } from "./navConfig";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 text-xs lg:text-sm font-rowdies text-black ">
      {NAV_GROUPS.map((group) => (
        <div key={group.key} className="relative group">
          {/* Main toolbar text: Rowdies Regular */}
          <button
            type="button"
            className="uppercase font-normal  hover:underline"
          >
            {group.label}
          </button>

          {/* Dropdown under trigger */}
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-150 absolute right-0 mt-2 min-w-[220px] bg-white text-black border border-black/10 shadow-lg py-2 z-20">
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

      {/* HOME */}
      {/* <Link
        href={HOME_LINK.href}
        className="uppercase font-normal tracking-[0.18em] hover:underline"
      >
        {HOME_LINK.label}
      </Link> */}

      {/* SUBMIT pill */}
      {/* {SUBMIT_CTA.external ? (
        <a
          href={SUBMIT_CTA.href}
          target="_blank"
          rel="noreferrer"
          className="ml-2 rounded-full px-4 py-1 text-xs lg:text-sm font-[700] tracking-[0.16em] uppercase text-white bg-[#66ccff] hover:bg-[#00aaff] transition-colors"
        >
          {SUBMIT_CTA.label}
        </a>
      ) : (
        <Link
          href={SUBMIT_CTA.href}
          className="ml-2 rounded-full px-4 py-1 text-xs lg:text-sm font-[700] tracking-[0.16em] uppercase text-white bg-[#66ccff] hover:bg-[#00aaff] transition-colors"
        >
          {SUBMIT_CTA.label}
        </Link>
      )} */}
    </nav>
  );
}
