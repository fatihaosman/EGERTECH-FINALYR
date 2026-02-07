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

  const [menuOpen, setMenuOpen] = useState(false);


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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">

      <div className="max-w-6xl mx-auto px-4 py-4 border-b border-gray-400 flex items-center justify-between font-heading">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="EgerConnect Logo" width={70} height={40} />
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 items-center">
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
          className="hidden md:block bg-red-500 text-white px-4 py-1 rounded-md"
        >
          Login
        </Link>

        {/* Mobile menu button */}
<button
  className="md:hidden text-2xl"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  ☰
</button>

      </div>
      {menuOpen && (
  <div className="md:hidden px-4 pb-4 flex flex-col gap-4 border-b border-gray-300 bg-brand">
    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link href="/clubs" onClick={() => setMenuOpen(false)}>Clubs</Link>
    <Link href="/notices" onClick={() => setMenuOpen(false)}>Notices</Link>
    <Link href="/events" onClick={() => setMenuOpen(false)}>Events</Link>
    <Link href="/support" onClick={() => setMenuOpen(false)}>Student Opportunities</Link>
    <Link href="/lost-found" onClick={() => setMenuOpen(false)}>Lost & Found</Link>
    <Link href="/about" onClick={() => setMenuOpen(false)}>About Egerton</Link>
    <Link
      href="/login"
      onClick={() => setMenuOpen(false)}
      className="bg-red-500 text-white px-4 py-2 rounded-md w-fit"
    >
      Login
    </Link>
  </div>
)}

    </nav>

    
  );
}








// ## NAVBAR

// # Why state?
//  Because:
// Clicking “Others” should change the UI
// React only re-renders when state changes

// **const [open, setOpen] = useState(false);**
//  useState:Controls open/close: I want to rember whether the dropdown is open or closed open(flase) 

// **onClick={() => setOpen((prev) => !prev)}**
// “If it was closed, open it.
// If it was open, close it.”

// ## USEREF
// # “Did the user click outside this dropdown?”
// **const dropdownRef = useRef<HTMLDivElement | null>(null);**
// A persistent pointer to a DOM element.
// Think of it as: “Hey React, remember this exact element on the page.”

// **<div ref={dropdownRef}>** later Sin jsx:
// this tells react:store a reference to this div in dropdownRef.current

// **Why do we need this?**
// Because we want to detect:
// “Did the user click outside this dropdown?”
// You cannot detect that with state alone.


// ## USEEFFECT
// What useEffect really means: Run this code after the component exists in the browser.    BECAUSE: muse events, windows and document dont exist on the server.
// thats why we use **use client**


// ## What we used(industry standard)
// Tool	Purpose
// useState	Is dropdown open or closed?
// useRef	Where is the dropdown in the DOM?
// useEffect	Listen to browser events
