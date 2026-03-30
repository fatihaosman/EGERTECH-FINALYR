"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Club = {
  name: string;
  description: string;
  category: string;
  image: string;
  href: string;
};

export default function ClubsPage() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Club[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  // fetch suggestions from API
  const fetchSuggestions = async (searchQuery: string) => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/posts/clubs/?search=${searchQuery}`);
      const data = await res.json();
      const mapped = data.map((club: any) => ({
        name: club.name,
        description: club.description,
        category: club.category,
        image: club.image,
        href: `/clubs/${club.category}/${club.slug}`,
      }));
      setSuggestions(mapped);
    } catch (err) {
      console.error("Failed to fetch clubs", err);
    }
  };

  // debounce typing
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSuggestions(query);
      setShowDropdown(!!query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <main className="max-w-6xl mx-auto px-4 pt-4 pb-16">
      {/* Header Section */}
      <section className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand mb-4">
          Clubs & Associations
        </h1>

        <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed">
          Discover student-led groups that support talent, faith, academics,
          leadership, and personal growth. Use the search bar below to quickly
          find any club.
        </p>

        {/* Search Bar */}
        <div className="relative mt-4 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search clubs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full"
          />
          {showDropdown && suggestions.length > 0 && (
            <ul className="absolute z-50 w-full bg-white border rounded-lg mt-1 max-h-60 overflow-auto shadow-lg">
              {suggestions.map((club) => (
                <li
                  key={club.name}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    window.location.href = club.href;
                  }}
                >
                  <p className="font-semibold">{club.name}</p>
                  <p className="text-sm text-gray-500">{club.category}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Keep your existing cards layout */}
      {/* ... your Sports / Religious / Courses / Others cards here ... */}

      {/* Cards Section */}
      <section className="relative">
        <section className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Sports */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-heading font-semibold text-brand mb-3">
              Sports Clubs
            </h2>
            <p className="text-gray-700 mb-5">
              For students passionate about football, basketball, athletics, and other sports activities across campus.
            </p>
            <Link
              href="/clubs/sports"
              className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              Explore Sports
            </Link>
          </div>

          {/* Religious */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-heading font-semibold text-brand mb-3">
              Religious Associations
            </h2>
            <p className="text-gray-700 mb-5">
              Faith-based groups that support spiritual growth, fellowship, and shared values within the university.
            </p>
            <Link
              href="/clubs/religious"
              className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              View Groups
            </Link>
          </div>

          {/* Courses */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-heading font-semibold text-brand mb-3">
              Course-Based Associations
            </h2>
            <p className="text-gray-700 mb-5">
              Academic and departmental associations that promote learning, collaboration, and career development.
            </p>
            <Link
              href="/clubs/courses"
              className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              See Associations
            </Link>
          </div>

          {/* Others */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-heading font-semibold text-brand mb-3">
              Other Associations
            </h2>
            <p className="text-gray-700 mb-5">
              Peer counselling, community service, leadership, innovation, and other special-interest student groups.
            </p>
            <Link
              href="/clubs/others"
              className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
            >
              Discover More
            </Link>
          </div>

        </section>

        {/* Image Section */}
        <section className="absolute top-39 lg:top-30 z-0 w-full flex justify-center ml-0 lg:-ml-24 pointer-events-none">
          <img
            src="/Group 125 (1).png"
            alt="Clubs highlights"
            className="w-full max-w-4xl"
          />
        </section>
      </section>
    </main>
  );
}

 