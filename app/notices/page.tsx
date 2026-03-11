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

  const [notices, setNotices] = useState<
    { src: string; date: string; alt: string }[]
  >([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/notices/");
        const data = await res.json();

        const formatted = data.map((notice: NoticeType) => ({
          src: notice.image,
          date: new Date(notice.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          alt: notice.title || "Campus Notice",
        }));

        setNotices(formatted);

      } catch (err) {
        console.error("Failed to load notices", err);
      }
    };

    fetchNotices();
  }, []);

  return (
    <section className="w-full min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
            Overall
          </span>

          <ImageGallery items={notices} />

        </div>

      </div>
    </section>
  );
}