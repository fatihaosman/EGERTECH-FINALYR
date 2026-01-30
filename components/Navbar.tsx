"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
  import { useState, useRef, useEffect } from "react";
export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href ||
    (pathname.startsWith(href) && href !== "/");
  const activeClass = "font-bold text-brand border-b-2  ";


  //  useState:Controls open/close: I want to rember whether the dropdown is open or closed open(flase)dropdown hideen and vice versa
//  useRef + useEffect :Detects outside clicks
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
//What useEffect really means:
//Run this code after the component exists in the browser.”
useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      dropdownRef.current &&
      //Was the click INSIDE the dropdown?”
      !dropdownRef.current.contains(event.target as Node)
    ) {  //If NO → close dropdown
      setOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);



  return (
    <nav>
      <div className="max-w-6xl mx-auto px-4 py-4 border-b border-gray-400 flex items-center justify-between font-heading">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="EgerConnect Logo" width={70} height={40} />
        </Link>

        {/* Links */}
        <div className="flex gap-8">
          <Link
            href="/"
            className={isActive("/") ? activeClass : ""}
          >
            Home
          </Link>

          <Link
            href="/clubs"
            className={isActive("/clubs") ? activeClass : ""}
          >
            Clubs
          </Link>

          <Link
            href="/notices"
            className={isActive("/notices") ? activeClass : ""}
          >
            Notices
          </Link>

          <Link
            href="/events"
            className={isActive("/events") ? activeClass : ""}
          >
            Events
          </Link>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="font-medium hover:text-brand"
          >
            Others
          </button>
          {/*absolute top-full: Places dropdown below “Others” */}
            {open && (
              <div className="absolute top-full mt-2 w-48 bg-white border shadow-md  rounded-md flex flex-col">
                <Link
                  href="/support"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-brand hover:text-white"
                >
                  Student Opportunities
                </Link>

                <Link
                  href="/lost-found"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-brand hover:text-white"
                >
                  Lost & Found
                </Link>

                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 hover:bg-brand hover:text-white"
                >
                  About Egerton
                </Link>
              </div>
            )}
          </div>

        </div>

        {/* Login */}
        <Link
          href="/login"
          className="bg-red-500 text-white px-4 py-1 rounded-md"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
