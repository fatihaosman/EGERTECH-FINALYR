"use client";

import { useEffect, useState } from "react";
import ImageGallery from "@/components/ImgGallery/ImgGallery";

type NoticeType = {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
};

export default function NoticesPage() {
  const [rawNotices, setRawNotices] = useState<NoticeType[]>([]);
  const [query, setQuery] = useState("");

  function getCurrentAcademicYear() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  return month >= 7 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
}
  // ✅ Academic year state
  const [selectedYear, setSelectedYear] = useState(getCurrentAcademicYear());

  // ✅ Suggestions state
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/notices/");
        const data = await res.json();
        setRawNotices(data);
      } catch (err) {
        console.error("Failed to load notices", err);
      }
    };

    fetchNotices();
  }, []);

  // ✅ Academic year logic
  function getAcademicYear(dateStr: string) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = date.getMonth();

    return month >= 7 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
  }

  // ✅ Unique years
  const academicYears = [
    "All",
    ...Array.from(
      new Set(rawNotices.map((n) => getAcademicYear(n.created_at)))
    ),
  ];

  // ✅ Search debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(query);
      setShowSuggestions(query.length > 0);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // ✅ Suggestions
  const suggestions = rawNotices
    .filter((notice) => {
      const q = searchTerm.toLowerCase();

      const titleMatch = notice.title?.toLowerCase().includes(q);

      const date = new Date(notice.created_at)
        .toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
        .toLowerCase();

      const dateMatch = date.includes(q);

      return titleMatch || dateMatch;
    })
    .slice(0, 5);

  // ✅ Filter notices
  const filteredNotices = rawNotices.filter((notice) => {
    const q = query.toLowerCase();

    const titleMatch = notice.title?.toLowerCase().includes(q);
    const descMatch = notice.description?.toLowerCase().includes(q);

    const dateObj = new Date(notice.created_at);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).toLowerCase();

    const dateMatch = formattedDate.includes(q);

    const yearMatch =
      selectedYear === "All" ||
      getAcademicYear(notice.created_at) === selectedYear;

    return (titleMatch || descMatch || dateMatch) && yearMatch;
  });

  // ✅ Map for gallery
  const mappedNotices = filteredNotices.map((notice) => ({
    src: notice.image,
    date: new Date(notice.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    alt: notice.title || "Campus Notice",
  }));

  // ✅ Grouping
  const now = new Date();

  const thisMonth = mappedNotices.filter((item) => {
    const d = new Date(item.date);
    return (
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    );
  });

  const lastMonth = mappedNotices.filter((item) => {
    const d = new Date(item.date);
    const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);

    return (
      d.getMonth() === lastMonthDate.getMonth() &&
      d.getFullYear() === lastMonthDate.getFullYear()
    );
  });

  const earlier = mappedNotices.filter((item) => {
  const d = new Date(item.date);

  const isThisMonth =
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();

  const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1);

  const isLastMonth =
    d.getMonth() === lastMonthDate.getMonth() &&
    d.getFullYear() === lastMonthDate.getFullYear();

  return !isThisMonth && !isLastMonth;
});

  return (
    <section className="w-full min-h-screen bg-white py-8 font-body">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div>

          {/* 🧾 HEADER + FILTER */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-brand font-heading">Campus Notices</h1>
              <p className="text-gray-500 text-sm font-body">
                Stay updated with the latest announcements and events
              </p>
            </div>

            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              {academicYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* 🔍 SEARCH */}
          <div className="relative w-full mb-6">
            <input
              type="text"
              placeholder="Search notices by title, example...closure of portal"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
            />

            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-md mt-1 z-50 max-h-60 overflow-auto">
                {suggestions.map((notice) => {
                  const formattedDate = new Date(
                    notice.created_at
                  ).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });

                  return (
                    <li
                      key={notice.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between text-sm"
                      onClick={() => {
                        setQuery(notice.title);
                        setShowSuggestions(false);
                      }}
                    >
                      <span>{notice.title}</span>
                      <span className="text-gray-400 text-xs">
                        {formattedDate}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* 📅 THIS MONTH */}
          {thisMonth.length > 0 && (
            <>
              <h2 className="text-lg font-semibold mb-2">This Month</h2>
              <ImageGallery items={thisMonth} />
            </>
          )}

          {/* 📅 LAST MONTH */}
          {lastMonth.length > 0 && (
            <>
              <h2 className="text-lg font-semibold mt-8 mb-2">
                Last Month
              </h2>
              <ImageGallery items={lastMonth} />
            </>
          )}
          {/* 📅 EARLIER */}
{earlier.length > 0 && (
  <>
    <h2 className="text-lg font-semibold mt-8 mb-2">
      Earlier This Academic Year
    </h2>
    <ImageGallery items={earlier} />
  </>
)}

          {/* ❌ EMPTY */}
          {mappedNotices.length === 0 && (
            <p className="text-gray-500 text-center mt-6">
              No notices found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}


// look at notices  on the filtering its 2025-2026 the default is the current year , and also we should do filtering based on month, but have noticed something, why shouldnt we like just post for the past two months like march and paril that mean we have toe know current month then for two months and earlie r like now from eb can be in the earlier this academic year. 
// okay now listen what i wnat is, to have  a dropwdown for month filtering just liike the year because  i feel like its laem to hav e thismonth , last month