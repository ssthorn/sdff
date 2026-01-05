// components/Header.tsx
"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import FloatingMenuButton from "@/components/FloatingMenuButton";
import { useEffect, useRef, useState } from "react";

import { NAV_GROUPS, HOME_LINK, SUBMIT_CTA } from "./navConfig";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ChevronDown } from "lucide-react";

const BLUE_LIGHT = "#90ddff";
const BLUE_MID = "#66ccff";
const BLUE_DARK = "#00aaff";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-20px",
      }
    );

    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="relative w-full font-rowdies border-b-4 border-black md:max-w-6xl md:mx-auto"
    >
      {/* --- TOP STRIPE (DESKTOP NAV + MOBILE TRIGGER) --- */}
      <div
        style={{ backgroundColor: BLUE_LIGHT }}
        className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
          <span className="text-[2.3rem] sm:text-[2.7rem] md:text-[3.1rem] font-normal uppercase leading-[0.9]">
            SAN&nbsp;DIEGO
          </span>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 justify-end">
            <Navbar />
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  onClick={() => setMobileOpen(true)}
                  className="inline-flex items-center justify-center p-2 text-2xl font-bold leading-none"
                >
                  ☰
                </button>
              </SheetTrigger>

              {/* FULL-SCREEN MOBILE MENU */}
              <SheetContent
                side="top"
                className={`
                  p-0 h-screen w-screen max-w-none border-0 bg-white flex flex-col
                  [&>button]:hidden  /* hide default shadcn close button */
                `}
              >
                {/* Festival stripes inside sheet */}
                <div className="w-full border-b-4 border-black">
                  {/* Top stripe + X (same position as hamburger) */}
                  <div
                    style={{ backgroundColor: BLUE_LIGHT }}
                    className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
                  >
                    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
                      <span className="text-[1.8rem] sm:text-[1.9rem] font-rowdies font-normal uppercase leading-[0.9]">
                        SAN&nbsp;DIEGO
                      </span>
                      <SheetClose
                        aria-label="Close navigation menu"
                        className="inline-flex items-center justify-center p-2 text-2xl font-normal leading-none"
                      >
                        ✕
                      </SheetClose>
                    </div>
                  </div>

                  {/* Middle stripe */}
                  <div
                    style={{ backgroundColor: BLUE_MID }}
                    className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
                  >
                    <Link href="/" className="mx-auto w-full max-w-6xl">
                      <span className="text-white text-[1.8rem] sm:text-[1.9rem] font-rowdies font-normal uppercase leading-[0.9]">
                        INDEPENDENT
                      </span>
                    </Link>
                  </div>

                  {/* Bottom stripe */}
                  <div
                    style={{ backgroundColor: BLUE_DARK }}
                    className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
                  >
                    <div className="mx-auto w-full max-w-6xl">
                      <span className="text-[1.8rem] sm:text-[1.9rem] font-rowdies font-normal uppercase leading-[0.9]">
                        FILM&nbsp;FESTIVAL
                      </span>
                    </div>
                  </div>
                </div>

                {/* NAV LIST */}
                <nav className="flex-1 overflow-y-auto text-black">
                  <div className="divide-y divide-black">
                    {NAV_GROUPS.map((group) => (
                      <details key={group.key} className="group">
                        <summary className="flex cursor-pointer items-center justify-between px-4 py-6 text-3xl font-rowdies font-normal uppercase tracking-wide">
                          <span>{group.label}</span>
                          <ChevronDown
                            className="ml-2 h-4 w-4 shrink-0 transition-transform group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <div className="pb-3">
                          {group.links.map((item) => {
                            const inner = item.external ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block px-6 py-4 text-[1.6rem] font-rowdies font-light normal-case leading-tight"
                              >
                                {item.label}
                              </a>
                            ) : (
                              <Link
                                href={item.href}
                                className="block px-6 py-4 text-[1.6rem] font-rowdies font-light normal-case leading-tight"
                              >
                                {item.label}
                              </Link>
                            );

                            return (
                              <SheetClose asChild key={item.label}>
                                {inner}
                              </SheetClose>
                            );
                          })}
                        </div>
                      </details>
                    ))}
                  </div>

                  {/* HOME row */}
                  {HOME_LINK && (
                    <div className="border-t border-black">
                      <SheetClose asChild>
                        <Link
                          href={HOME_LINK.href}
                          className="block px-4 py-6 text-3xl font-rowdies font-normal uppercase tracking-wide"
                        >
                          {HOME_LINK.label}
                        </Link>
                      </SheetClose>
                    </div>
                  )}

                  {SUBMIT_CTA && (
                  <div>
                    {SUBMIT_CTA.external ? (
                      <SheetClose asChild>
                        <a
                          href={SUBMIT_CTA.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block w-full text-center px-4 py-6 text-3xl font-rowdies font-bold uppercase tracking-wide"
                          style={{ backgroundColor: BLUE_MID, color: "white" }}
                        >
                          {SUBMIT_CTA.label}
                        </a>
                      </SheetClose>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={SUBMIT_CTA.href}
                          className="block w-full text-center px-4 py-4 text-[1.05rem] font-bold uppercase tracking-wide"
                          style={{ backgroundColor: BLUE_MID, color: "white" }}
                        >
                          {SUBMIT_CTA.label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                )}
                </nav>

                {/* SUBMIT CTA at bottom */}
                {/* {SUBMIT_CTA && (
                  <div>
                    {SUBMIT_CTA.external ? (
                      <SheetClose asChild>
                        <a
                          href={SUBMIT_CTA.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block w-full text-center px-4 py-6 text-3xl font-rowdies font-bold uppercase tracking-wide"
                          style={{ backgroundColor: BLUE_MID, color: "white" }}
                        >
                          {SUBMIT_CTA.label}
                        </a>
                      </SheetClose>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={SUBMIT_CTA.href}
                          className="block w-full text-center px-4 py-4 text-[1.05rem] font-bold uppercase tracking-wide"
                          style={{ backgroundColor: BLUE_MID, color: "white" }}
                        >
                          {SUBMIT_CTA.label}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                )} */}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* --- MIDDLE STRIPE (DESKTOP VIEW) --- */}
      <div
        style={{ backgroundColor: BLUE_MID }}
        className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
      >
        <Link href="/" className="mx-auto w-full max-w-6xl">
          <span className="text-white text-[2.3rem] sm:text-[2.7rem] md:text-[3.1rem] font-normal uppercase leading-[0.9]">
            INDEPENDENT
          </span>
        </Link>
      </div>

      {/* --- BOTTOM STRIPE (DESKTOP VIEW) --- */}
      <div
        style={{ backgroundColor: BLUE_DARK }}
        className="w-full h-[42px] px-4 sm:px-6 lg:px-8 flex items-center"
      >
        <div className="mx-auto w-full max-w-6xl">
          <span className="text-[2.3rem] sm:text-[2.7rem] md:text-[3.1rem] font-normal uppercase leading-[0.9]">
            FILM&nbsp;FESTIVAL
          </span>
        </div>
      </div>

      <FloatingMenuButton
        open={mobileOpen}
        visible={showFloating}
        onToggle={() => setMobileOpen((v) => !v)}
      />
    </header>
  );
}
