import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <Link
        href="/"
        className="text-xl tracking-tight font-serif text-gilt transition-colors duration-300 hover:text-bone"
      >
        Silent Prototype
      </Link>

      <nav className="flex gap-4 text-sm text-bone/80">
        <Link href="/" className="hover:text-bone transition-colors duration-200">
          Home
        </Link>
        <Link href="/portfolio" className="hover:text-bone transition-colors duration-200">
          Portfolio
        </Link>
      </nav>
    </header>
  );
};

export default Header;