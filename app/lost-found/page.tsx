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
};

export default function LostAndFoundPage() {
  const [recentItems, setRecentItems] = useState<GalleryItem[]>([]);
  const [olderItems, setOlderItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/lost-found/");
        const data = await res.json();

        const formatted: GalleryItem[] = data.map((item: LostItemType) => ({
          src: item.image, // already full URL from backend
          date: new Date(item.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          alt: item.title || "Lost Item",
        }));

        // 🔥 Sort newest first
        const sorted = formatted.sort(
          (a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // 🔥 Split like your original design
        setRecentItems(sorted.slice(0, 6));
        setOlderItems(sorted.slice(6));
      } catch (err) {
        console.error("Failed to load lost & found items", err);
      }
    };

    fetchLostItems();
  }, []);

  return (
    <section className="w-full min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* RECENT LOST & FOUND */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
            Recent
          </span>
          <ImageGallery items={recentItems} />
        </div>

        {/* OLDER ITEMS */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
            Earlier Posts
          </span>
          <ImageGallery items={olderItems} />
        </div>

      </div>
    </section>
  );
}
