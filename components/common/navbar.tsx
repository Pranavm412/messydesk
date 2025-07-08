"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="font-sans w-full fixed z-20">
      <nav className="max-w-8xl mx-auto px-4 py-4 lg:px-8 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl min-[425px]:text-3xl font-bold font-decalotype tracking-tighter pl-2"
        >
          Messy Desk Studio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg pr-4">
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute right-4 top-20 w-64 rounded-xl shadow-lg py-6 px-6 z-50 animate-fade-in">
          <ul className="flex flex-col gap-5 text-lg">
            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
