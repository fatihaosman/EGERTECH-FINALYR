"use client";

import { useEffect, useState } from "react";
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
};

export default function StudentSupportPage() {
  const [scholarships, setScholarships] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/scholarships/");
        const data = await res.json();

        const formatted: GalleryItem[] = data.map((item: ScholarshipType) => ({
          src: item.image, // full backend URL
          date: new Date(item.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          alt: item.title || "Scholarship notice",
        }));

        // sort newest first (optional but good)
        const sorted = formatted.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setScholarships(sorted);
      } catch (err) {
        console.error("Failed to load scholarships", err);
      }
    };

    fetchScholarships();
  }, []);

const [requests, setRequests] = useState<any[]>([]);
useEffect(() => {
  const fetchRequests = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) return;

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/posts/support-requests/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
      <div className="max-w-6xl mx-auto px-4 space-y-6">

        {/* PAGE HEADING */}
        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black">
          Scholarships & Bursaries
        </h1>

        {/* SINGLE ROW: SCHOLARSHIPS */}
        <ImageGallery items={scholarships} />

        {/* SUPPORT CONTENT WRAPPER */}
<div className="relative max-w-2xl">

  {/* CONTENT */}
  <div className="relative z-10 space-y-4">
    <h2 className="text-lg sm:text-xl font-semibold text-black">
      Having trouble with fees or payments?
    </h2>

    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
      If you are experiencing challenges with school fees, accommodation,
      or other study-related payments, this form allows you to share your
      situation so that available student support options can be considered.
    </p>

    <Link
      href="/support/form"
      className="inline-block mt-2 bg-brand-danger text-white px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
    >
      Fill Support Form
    </Link>
  </div>

  {/* DECORATIVE IMAGE */}
  <Image
    src="/slantrectangle.png"
    alt=""
    width={140}
    height={20}
    className="absolute bottom-10 left-0 z-0 pointer-events-none"
  />
</div>

{/* USER SUBMITTED REQUESTS */}

{requests.length > 0 && (
  <div className="mt-10 space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <h3 className="text-lg sm:text-xl font-semibold text-black">
      Your Submitted Requests
    </h3>

    <div className="space-y-4 ">
      {requests.map((req) => {
        const status = req.status || "pending";

        return (
          <div
            key={req.id}
            className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-200"
          >
            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
              <span className="text-lg">🏠</span>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              {/* TITLE + DATE */}
              <div className="flex items-center gap-2">
                <p className="font-semibold text-black">
                  {req.type_of_need}
                </p>
                <span className="text-gray-400 text-sm">|</span>
                <p className="text-sm text-gray-500">
                  {new Date(req.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              {/* STATUS BADGE */}
              <div className="mt-2">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${
                    status === "accepted"
                      ? "bg-green-100 text-green-600"
                      : status === "declined"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {status === "accepted" && "✔"}
                  {status === "declined" && "✖"}
                  {status === "pending" && "⏳"}

                  {status === "accepted"
                    ? "Reviewed"
                    : status === "declined"
                    ? "Declined"
                    : "Pending"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}


      </div>
    </section>
  );
}
