"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Active link
  const isActive = (href: string) =>
    pathname === href || (pathname.startsWith(href) && href !== "/");

  const activeClass = "font-bold text-brand border-b-2";

  // UI state
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);

  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    regNo: string;
  } | null>(null);

  const [mounted, setMounted] = useState(false);

  // ✅ Load auth + user (CLIENT ONLY)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const storedUser = localStorage.getItem("user");

    setIsLoggedIn(token !== null);

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setMounted(true);
  }, []);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Prevent hydration error
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 border-b border-gray-400 flex items-center justify-between font-heading">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="EgerConnect Logo" width={70} height={40} />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className={isActive("/") ? activeClass : ""}>Home</Link>
          <Link href="/clubs" className={isActive("/clubs") ? activeClass : ""}>Clubs</Link>
          <Link href="/notices" className={isActive("/notices") ? activeClass : ""}>Notices</Link>
          <Link href="/events" className={isActive("/events") ? activeClass : ""}>Events</Link>

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="font-medium hover:text-brand"
            >
              Others
            </button>

            {open && (
              <div className="absolute top-full mt-2 w-48 bg-white border shadow-md rounded-md flex flex-col">
                <Link href="/support" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-brand hover:text-white">
                  Student Opportunities
                </Link>
                <Link href="/lost-found" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-brand hover:text-white">
                  Lost & Found
                </Link>
                <Link href="/about" onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-brand hover:text-white">
                  About Egerton
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Profile / Login */}
        <div className="hidden md:block relative" ref={profileRef}>
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="bg-red-500 text-white px-4 py-1 rounded-md"
            >
              Login
            </Link>
          ) : (
            <div>
              <button
                onClick={() => setProfileOpen((prev) => !prev)}
                className="bg-green-500 text-white px-4 py-1 rounded-md"
              >
                {user?.name?.charAt(0) || "P"}
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border shadow-md rounded-md p-3">
                  
                  {/* User Info */}
                  <div className="border-b pb-2 mb-2">
                    <div className="font-semibold text-sm">{user?.name}</div>
                    <div className="text-xs text-gray-500">{user?.regNo}</div>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={() => router.push("/change-password")}
                    className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    Change Password
                  </button>

                  <button
                    onClick={() => {
                      localStorage.removeItem("authToken");
                      localStorage.removeItem("user");
                      router.push("/login");
                    }}
                    className="w-full text-left px-2 py-1 hover:bg-red-100 text-red-600 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 border-b border-gray-300 bg-brand/10">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/clubs" onClick={() => setMenuOpen(false)}>Clubs</Link>
          <Link href="/notices" onClick={() => setMenuOpen(false)}>Notices</Link>
          <Link href="/events" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link href="/support" onClick={() => setMenuOpen(false)}>Student Opportunities</Link>
          <Link href="/lost-found" onClick={() => setMenuOpen(false)}>Lost & Found</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Egerton</Link>

          {!isLoggedIn ? (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md w-fit"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("authToken");
                localStorage.removeItem("user");
                router.push("/login");
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-md w-fit"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}