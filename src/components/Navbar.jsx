import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 text-lg font-bold text-white">
            DS
          </div>

          <span className="text-2xl font-bold text-slate-900">
            Dev<span className="text-pink-500">Stack</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-slate-700 transition hover:text-pink-500">
            Home
          </a>

          <a
            href="#technologies"
            className="text-slate-700 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a href="#projects" className="text-slate-700 transition hover:text-pink-500">
            Projects
          </a>

          <a href="#about" className="text-slate-700 transition hover:text-pink-500">
            About
          </a>

          <a href="#contact" className="text-slate-700 transition hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="font-medium text-slate-700 hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-500 to-violet-600 px-5 py-2.5 font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-2xl text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#" onClick={closeMenu} className="text-slate-700">
              Home
            </a>

            <a
              href="#technologies"
              onClick={closeMenu}
              className="text-slate-700"
            >
              Technologies
            </a>

            <a href="#projects" onClick={closeMenu} className="text-slate-700">
              Projects
            </a>

            <a href="#about" onClick={closeMenu} className="text-slate-700">
              About
            </a>

            <a href="#contact" onClick={closeMenu} className="text-slate-700">
              Contact
            </a>

            <div className="flex gap-3 pt-2">
              <button className="rounded-full border border-slate-200 px-5 py-2 font-medium text-slate-700">
                Sign In
              </button>

              <button className="rounded-full bg-gradient-to-r from-orange-500 to-violet-600 px-5 py-2 font-semibold text-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;