import React from "react";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <div className="container mx-auto max-w-lg px-4 lg:max-w-8xl py-10 lg:pt-20 lg:pb-16 ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo className="w-1/2" />
          {/* Menu */}
          <nav className="hidden lg:flex justify-end items-center w-1/2">
            <ul className="flex justify-between items-center space-x-10">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-soft-orange transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-soft-orange transition"
                >
                  New
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-soft-orange transition"
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-soft-orange transition"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-soft-orange transition"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu */}
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
}
