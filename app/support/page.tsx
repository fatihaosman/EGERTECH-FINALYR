"use client";

import { 
  Clock, CheckCircle, XCircle,
  Home, Wallet, Utensils, BookOpen
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import ImageGallery from "@/components/ImgGallery/ImgGallery";
import Image from "next/image";

type ScholarshipType = {
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
  title: string;
  year: number;
  academicYear: string;
};

export default function StudentSupportPage() {
  const [scholarships, setScholarships] = useState<GalleryItem[]>([]);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedYear, setSelectedYear] = useState(getCurrentAcademicYear());
  const [selectedMonth, setSelectedMonth] = useState("All"); // month filter
  const [requests, setRequests] = useState<any[]>([]);

  // HELPER: Current academic year
  function getCurrentAcademicYear() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0 = Jan, 7 = Aug
    return month >= 7 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
  }

  // FETCH SCHOLARSHIPS
  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/scholarships/");
        const data: ScholarshipType[] = await res.json();

        const formatted: GalleryItem[] = data.map((item) => {
          const dateObj = new Date(item.created_at);
          const year = dateObj.getFullYear();
          const month = dateObj.getMonth();
          const academicYear = month >= 7 ? `${year}-${year + 1}` : `${year - 1}-${year}`;

          return {
            src: item.image,
            date: dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            alt: item.title || "Scholarship notice",
            title: item.title || "",
            year,
            academicYear,
          };
        });

        // Sort newest first
        formatted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setScholarships(formatted);
      } catch (err) {
        console.error("Failed to load scholarships", err);
      }
    };

    fetchScholarships();
  }, []);

  // DEBOUNCE SEARCH INPUT
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(query);
      setShowSuggestions(query.length > 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // UNIQUE YEARS FOR FILTER
  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(scholarships.map(s => s.academicYear))).sort().reverse();
    return ["All", ...uniqueYears];
  }, [scholarships]);

  // UNIQUE MONTHS BASED ON SELECTED YEAR
  const months = useMemo(() => {
    const monthNames = ["All","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    if (selectedYear === "All") return monthNames;
    const filteredByYear = scholarships.filter(s => s.academicYear === selectedYear);
    const uniqueMonths = Array.from(new Set(filteredByYear.map(s => new Date(s.date).getMonth() + 1)));
    return ["All", ...uniqueMonths.map(m => monthNames[m])];
  }, [scholarships, selectedYear]);

  // FILTER SCHOLARSHIPS BASED ON SEARCH + YEAR + MONTH
  const filteredScholarships = useMemo(() => {
    const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return scholarships.filter(item => {
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
      const matchesYear = selectedYear === "All" || item.academicYear === selectedYear;
      const itemMonthIndex = new Date(item.date).getMonth();
      const matchesMonth = selectedMonth === "All" || selectedMonth === monthNames[itemMonthIndex];
      return matchesQuery && matchesYear && matchesMonth;
    });
  }, [scholarships, query, selectedYear, selectedMonth]);

  // SEARCH SUGGESTIONS
  const suggestions = useMemo(() => {
    return scholarships
      .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                      (selectedYear === "All" || item.academicYear === selectedYear))
      .slice(0, 5);
  }, [scholarships, searchTerm, selectedYear]);

  // FETCH USER SUPPORT REQUESTS
  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/support-requests/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setRequests(data);
      } catch (err) {
        console.error("Failed to load support requests", err);
      }
    };

    fetchRequests();
  }, []);

  return (
    <section className="w-full min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* HEADER */}
        <div className="mb-4">
          <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black">
            Scholarships & Bursaries
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Explore available financial support opportunities for students
          </p>
        </div>

        {/* SEARCH + YEAR + MONTH FILTER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search scholarships by title... EUASA BURSARY"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />

            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 z-50 max-h-60 overflow-auto">
                {suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between text-sm"
                    onClick={() => {
                      setQuery(item.title);
                      setShowSuggestions(false);
                    }}
                  >
                    <span>{item.title}</span>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* YEAR FILTER */}
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setSelectedMonth("All"); // reset month
            }}
            className="border border-gray-300 rounded-lg px-4 py-2 mt-2 sm:mt-0 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            {years.map((year, idx) => (
              <option key={idx} value={year}>{year}</option>
            ))}
          </select>

          {/* MONTH FILTER */}
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 mt-2 sm:mt-0 focus:outline-none focus:ring-2 focus:ring-brand"
          >
            {months.map((month, idx) => (
              <option key={idx} value={month}>{month}</option>
            ))}
          </select>
        </div>

        {/* SCHOLARSHIPS GALLERY */}
        <ImageGallery items={filteredScholarships} />

        {/* SUPPORT FORM SECTION */}
        <div className="relative max-w-2xl">
          <div className="relative z-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-black mb-2">
              Having trouble with fees or payments?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If you are experiencing challenges with school fees, accommodation,
              or other study-related payments, this form allows you to share your
              situation so that available student support options can be considered.
            </p>
            <Link
              href="/support/form"
              className="inline-block mt-4 bg-brand-danger text-white px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
            >
              Fill Support Form
            </Link>
          </div>
          <Image
            src="/slantrectangle.png"
            alt=""
            width={140}
            height={20}
            className="absolute bottom-9 left-0 z-0 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}