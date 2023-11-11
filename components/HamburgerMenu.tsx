"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HamburgerMenu({}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={"lg:hidden"}>
      <Button onClick={handleClick}>
        <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#00001A" fillRule="evenodd">
            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
            <path d="M0 0h40v3H0z" />
          </g>
        </svg>
      </Button>

      <div
        className={cn(
          isOpen ? "opacity-100" : "opacity-0 -z-10",
          "flex fixed h-screen  overflow-y-auto bg-black/50 top-0 right-0 min-w-full justify-end"
        )}
      >
        <div
          className={cn(
            "ease-in-out w-2/3 flex flex-col bg-white p-6 transition-all duration-500",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex justify-end">
            <Button onClick={handleClick} className="mb-12">
              <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
                <g fill="#00001A" fillRule="evenodd">
                  <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                  <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
                </g>
              </svg>
            </Button>
          </div>

          <nav>
            <ul className="flex flex-col space-y-6 mt-12 text-lg">
              <li>
                <Link href={"#"}>Home</Link>
              </li>
              <li>
                <Link href={"#"}>New</Link>
              </li>
              <li>
                <Link href={"#"}>Popular</Link>
              </li>
              <li>
                <Link href={"#"}>Trending</Link>
              </li>
              <li>
                <Link href={"#"}>Categories</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
