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

  return (
    <section className="w-full min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

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


      </div>
    </section>
  );
}
