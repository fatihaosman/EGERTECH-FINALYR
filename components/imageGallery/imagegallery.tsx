"use client";

import { useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface GalleryItem {
  src: string;
  date: string;
  alt: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

export default function ImageGallery({ items }: ImageGalleryProps) {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);
  const [scrollX, setScrollX] = useState(0);

  // Scroll controls
  const scrollLeft = () => setScrollX((prev) => Math.max(prev - 300, 0));
  const scrollRight = () =>
    setScrollX((prev) =>
      Math.min(prev + 300, Math.max(0, items.length * 150 - 600))
    );

  return (
    <div className="relative w-full bg-brand-accent p-4 rounded-lg">
      {/* Horizontal scroll row */}
      <div className="flex items-center overflow-hidden relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-20 bg-white p-1 rounded-full shadow-md"
        >
          <IoChevronBack size={24} />
        </button>

        {/* Image row */}
        <div
          className="flex gap-12 overflow-hidden w-full transition-transform duration-300"
          style={{ transform: `translateX(-${scrollX}px)` }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative cursor-pointer flex-shrink-0 w-[100px] sm:w-[180px]"
              onClick={() => setZoomIndex(idx)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={180}
                height={180}
                className="rounded-md object-cover w-full h-[180px]"
              />
              <span className="block mt-1 text-xs text-white text-center font-semibold">
                {item.date}
              </span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-20 bg-white p-1 rounded-full shadow-md"
        >
          <IoChevronForward size={24} />
        </button>
      </div>

      {/* Lightbox */}
      {/* Lightbox */}
{zoomIndex !== null && (
  <div
    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
  >
    {/* Close button */}
    <button
      onClick={() => setZoomIndex(null)}
      className="absolute top-6 right-6 z-60 text-white bg-gray-800 bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 text-2xl font-bold shadow-md"
    >
      ×
    </button>

    {/* Zoomed image */}
    <Image
      src={items[zoomIndex].src}
      alt={items[zoomIndex].alt}
      width={600}
      height={600}
      className="rounded-lg object-contain max-h-[80vh]"
    />
  </div>
)}
    </div>
  );
}
