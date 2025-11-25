// components/Header.tsx
import Navbar from "./Navbar";

const BLUE_LIGHT = "#90ddff";
const BLUE_MID = "#66ccff";
const BLUE_DARK = "#00aaff";

export default function Header() {
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
            aria-label="Open navigation menu"
          >
            ☰
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
    </header>
  );
}
