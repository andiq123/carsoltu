"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "react-feather";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-base-200 justify-center">
      <div className="flex w-full justify-between max-w-6xl">
        <Link href="/">
          <button className="btn btn-ghost normal-case text-xl">
            Cars Oltu
          </button>
        </Link>
        <div className="items-stretch hidden lg:flex">
          <Link href="/cars">
            <button className="btn btn-ghost">Auto</button>
          </Link>

          <a href="/#intro" className="btn btn-ghost">
            Home
          </a>
          <a href="/#about" className="btn btn-ghost">
            Chi Siamo
          </a>
          <a href="/#contact" className="btn btn-ghost">
            Contatti
          </a>
        </div>

        <button
          className="btn btn-square btn-ghost lg:hidden"
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-opacity-90 bg-base-100">
            <div className="flex flex-col gap-4 text-center">
              <Link href="/cars">
                <button
                  className="btn btn-ghost"
                  onClick={() => setIsOpen(false)}
                >
                  Auto
                </button>
              </Link>

              <a
                href="/#intro"
                className="btn btn-ghost"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>

              <a
                href="/#about"
                className="btn btn-ghost"
                onClick={() => setIsOpen(false)}
              >
                Chi Siamo
              </a>

              <a
                href="/#contact"
                className="btn btn-ghost"
                onClick={() => setIsOpen(false)}
              >
                Contatti
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
