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

export default function HomeNotices() {
  const [recentNotices, setRecentNotices] = useState<
    { src: string; date: string; alt: string }[]
  >([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/notices/");
        const data = await res.json();

        const formatted = data
          .map((notice: NoticeType) => ({
            src: notice.image,
            date: new Date(notice.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            alt: notice.title || "Campus Notice",
            rawDate: new Date(notice.created_at),
          }))
          .sort((a: { rawDate: Date }, b: { rawDate: Date }) => b.rawDate.getTime() - a.rawDate.getTime())
          .slice(0, 6);

        setRecentNotices(formatted);
      } catch (err) {
        console.error("Failed to load notices", err);
      }
    };

    fetchNotices();
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-6">

        {/* Section header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-heading font-bold text-black">
            Latest Notices
          </h2>

          <span className="px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
            Recent
          </span>
        </div>

        {/* Gallery */}
        <ImageGallery items={recentNotices} />

      </div>
    </section>
  );
}