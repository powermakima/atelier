"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/cart", label: "Cart" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mx-3 mt-4 sm:mx-6">
      <div className="sketch-panel flex items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="wiggle-hover inline-flex items-center gap-2">
          <span
            className="inline-flex h-7 w-7 items-center justify-center"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 32 32"
              className="h-7 w-7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 9.2c-1.6-4.2-6.3-5.6-8.8-2.8-2.6 2.9-.9 7.5 3.3 8.8-4.2 1.6-5.6 6.3-2.8 8.9 2.9 2.6 7.5.8 8.8-3.3 1.6 4.2 6.3 5.6 8.9 2.8 2.6-2.9.8-7.5-3.3-8.8 4.2-1.6 5.6-6.3 2.8-8.9-2.9-2.6-7.5-.8-8.9 3.3Z"
                stroke="#5a393e"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="16" cy="16" r="2.8" fill="#f4b8c2" stroke="#5a393e" strokeWidth="1.4" />
              <path
                d="M16.1 26.7c-.1 1.6-.7 3-1.8 4.1"
                stroke="#5a393e"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-heading text-3xl text-stroked tracking-wide text-[#4f3035]">
            Atelier
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="wiggle-hover rounded-full border border-[#78595f] bg-[#fff6ec]/70 px-3 py-1 font-medium text-[#5d3b3f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="sketch-note sketch-outline rounded-xl bg-[#fff3e6] px-3 py-1 text-base md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          menu
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          className="sketch-panel mt-2 flex flex-col gap-2 px-4 py-3 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-[#7a5a5f] bg-[#fff6ec]/75 px-3 py-2 font-medium text-[#59393e]"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
