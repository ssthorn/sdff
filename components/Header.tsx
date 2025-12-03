// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { NAV_GROUPS, HOME_LINK, SUBMIT_CTA } from "./navConfig";

const BLUE_LIGHT = "#90ddff";
const BLUE_MID = "#66ccff";
const BLUE_DARK = "#00aaff";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="relative w-full font-rowdies border-b-4 border-black">
      {/* --- TOP STRIPE --- */}
      <div
        style={{ backgroundColor: BLUE_LIGHT }}
        className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <span className="text-[2.6rem] sm:text-[2.9rem] md:text-[3.1rem] font-normal uppercase leading-[0.9]">
            SAN&nbsp;DIEGO
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <Navbar />
          </div>

          {/* Mobile icon */}
          <button
            className="md:hidden text-3xl font-bold text-black"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* --- MIDDLE STRIPE --- */}
      <div
        style={{ backgroundColor: BLUE_MID }}
        className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
      >
        <div className="mx-auto w-full max-w-6xl">
          <span className="text-white text-[2.6rem] sm:text-[2.9rem] md:text-[3.1rem] font-normal uppercase leading-[0.9]">
            INDEPENDENT
          </span>
        </div>
      </div>

      {/* --- BOTTOM STRIPE --- */}
      <div
        style={{ backgroundColor: BLUE_DARK }}
        className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
      >
        <div className="mx-auto w-full max-w-6xl">
          <span className="text-[2.6rem] sm:text-[2.9rem] md:text-[3.1rem] font-normal uppercase leading-[0.9]">
            FILM&nbsp;FESTIVAL
          </span>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN NAV (REFERENCE STYLE) --- */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black">
          <nav className="mx-auto w-full max-w-6xl text-black">
            {/* Section groups */}
            {NAV_GROUPS.map((group) => {
              const isOpen = openGroup === group.key;
              return (
                <div key={group.key} className="border-b border-black/20">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroup((prev) => (prev === group.key ? null : group.key))
                    }
                    className="w-full flex items-center justify-between px-4 py-4 text-lg font-bold uppercase"
                  >
                    <span>{group.label}</span>
                    <span className="text-xl leading-none">
                      {isOpen ? "˄" : "˅"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-4">
                      {group.links.map((item) =>
                        item.external ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="block px-6 py-1.5 text-base font-normal normal-case"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-6 py-1.5 text-base font-normal normal-case"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            })}

            {/* HOME row */}
            {HOME_LINK && (
              <div className="border-b border-black/20">
                <Link
                  href={HOME_LINK.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-4 text-lg font-bold uppercase"
                >
                  {HOME_LINK.label}
                </Link>
              </div>
            )}

            {/* SUBMIT bar at bottom */}
            {SUBMIT_CTA && (
              <div
                style={{ backgroundColor: BLUE_MID }}
                className="border-t border-black/20"
              >
                {SUBMIT_CTA.external ? (
                  <a
                    href={SUBMIT_CTA.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-4 py-4 text-xl font-bold uppercase text-white"
                  >
                    {SUBMIT_CTA.label}
                  </a>
                ) : (
                  <Link
                    href={SUBMIT_CTA.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-4 py-4 text-xl font-bold uppercase text-white"
                  >
                    {SUBMIT_CTA.label}
                  </Link>
                )}
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
