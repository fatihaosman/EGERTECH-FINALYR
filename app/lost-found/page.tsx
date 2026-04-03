"use client";

import { useEffect, useState } from "react";
import ImageGallery from "@/components/ImgGallery/ImgGallery";

type LostItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
};

type GalleryItem = {
  src: string;
  date: string;
  alt: string;
  type: string; // category type
};

export default function LostAndFoundPage() {
  const [rawItems, setRawItems] = useState<LostItemType[]>([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // 🔹 Filters
  const [selectedCategory, setSelectedCategory] = useState("All");

  // default year is current year
  const currentYear = new Date().getFullYear().toString();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState("All");

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/lost-found/");
        const data = await res.json();
        setRawItems(data);
      } catch (err) {
        console.error("Failed to load lost & found items", err);
      }
    };
    fetchLostItems();
  }, []);

  // ✅ Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(query);
      setShowSuggestions(query.length > 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // ✅ Determine item category
  const categorizeItem = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("school id")) return "School ID";
    if (t.includes("passport")) return "Passport";
    if (t.includes("kenyan id")) return "Kenyan ID";
    return "Other";
  };

  // ✅ Suggestions
  const suggestions = rawItems
    .filter((item) => {
      const q = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
      );
    })
    .slice(0, 5);

  // ✅ Filter items by search + category + year + month
  const filteredItems = rawItems.filter((item) => {
    const q = query.toLowerCase();
    const titleMatch = item.title.toLowerCase().includes(q);
    const descMatch = item.description.toLowerCase().includes(q);

    // Category
    const type = categorizeItem(item.title);
    const categoryMatch = selectedCategory === "All" || type === selectedCategory;

    // Year & Month
    const date = new Date(item.created_at);
    const itemYear = date.getFullYear().toString();
    const itemMonth = (date.getMonth() + 1).toString(); // 1-12
    const yearMatch = selectedYear === "All" || selectedYear === itemYear;
    const monthMatch = selectedMonth === "All" || selectedMonth === itemMonth;

    return (titleMatch || descMatch) && categoryMatch && yearMatch && monthMatch;
  });

  // ✅ Map to gallery
  const mappedItems: GalleryItem[] = filteredItems
    .map((item) => ({
      src: item.image,
      alt: item.title || "Lost Item",
      date: new Date(item.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      type: categorizeItem(item.title),
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // ✅ Split recent vs older
  const recent = mappedItems.slice(0, 6);
  const older = mappedItems.slice(6);

  // ✅ Extract unique years and months
  const years = Array.from(new Set(rawItems.map((i) => new Date(i.created_at).getFullYear().toString())));

  const monthsForYear =
    selectedYear === "All"
      ? []
      : Array.from(
          new Set(
            rawItems
              .filter((i) => new Date(i.created_at).getFullYear().toString() === selectedYear)
              .map((i) => (new Date(i.created_at).getMonth() + 1).toString())
          )
        );

  return (
    <section className="w-full min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        {/* 🔹 Cards + Filters (same line) */}
<div className="flex flex-wrap items-center justify-between gap-4">

  {/* 🔹 Category Cards (LEFT) */}
  <div className="flex flex-wrap gap-4">
    {["All", "School ID", "Passport", "Kenyan ID", "Other"].map((cat) => (
      <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        className={`px-4 py-3 rounded-lg text-sm font-semibold border ${
          selectedCategory === cat
            ? "bg-brand text-white border-brand"
            : "border-gray-300"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>

  {/* 🔹 Filters (RIGHT) */}
  <div className="flex gap-3">
    <select
      value={selectedYear}
      onChange={(e) => {
        setSelectedYear(e.target.value);
        setSelectedMonth("All");
      }}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm"
    >
      <option value="All">All Years</option>
      {years.map((y) => (
        <option key={y} value={y}>
          {y}
        </option>
      ))}
    </select>

    <select
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm"
      disabled={monthsForYear.length === 0}
    >
      <option value="All">All Months</option>
      {monthsForYear.map((m) => (
        <option key={m} value={m}>
          {new Date(0, parseInt(m) - 1).toLocaleString("en-US", {
            month: "short",
          })}
        </option>
      ))}
    </select>
  </div>

</div>

        {/* 🔍 SEARCH */}
        <div className="relative w-full mt-4">
          <input
            type="text"
            placeholder="Search lost items by title, description, or ID..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 z-50 max-h-60 overflow-auto">
              {suggestions.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between text-sm"
                  onClick={() => {
                    setQuery(item.title);
                    setShowSuggestions(false);
                  }}
                >
                  <span>{item.title}</span>
                  <span className="text-gray-400 text-xs">
                    {new Date(item.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 🔹 RECENT ITEMS */}
        {recent.length > 0 && (
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
              Recent
            </span>
            <ImageGallery items={recent} />
          </div>
        )}

        {/* 🔹 OLDER ITEMS */}
        {older.length > 0 && (
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
              Earlier Posts
            </span>
            <ImageGallery items={older} />
          </div>
        )}

        {/* ❌ EMPTY */}
        {mappedItems.length === 0 && (
          <p className="text-gray-500 text-center mt-6">
            No lost & found items match your filters.
          </p>
        )}
      </div>
    </section>
  );
}