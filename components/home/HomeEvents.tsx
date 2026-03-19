"use client";

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type BackendEvent = {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
};

type EventItem = {
  date: string;
  image: string;
  alt?: string;
};

export default function HomeEvents() {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/events/");
        const data = await res.json();

        const formatted = data.map((event: BackendEvent) => ({
          date: event.created_at,
          image: event.image,
          alt: event.title,
        }));

        setEvents(formatted);
      } catch (err) {
        console.error("Failed to load events", err);
      }
    };

    fetchEvents();
  }, []);

  // sort newest first
  const recentEvents = [...events].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const gridEvents = recentEvents.slice(0, 6);

  return (
    <section className="relative w-full  md:py-8  mt-8 sm:mt-2 mb-12">
       <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-black underline drop-shadow-md">
          Upcoming Events at Egerton University
        </h2>
      {/* Light gradient background, smaller blur */}
      <div className="absolute inset-0 max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-brand/30 via-yellow-100/20 to-brand-danger/30 blur-2xl -z-10" />

      <div className="max-w-lg md:max-w-2xl mx-auto px-4">
       

        {/* Grid: 2 columns small, 3 columns large */}
        <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {gridEvents.map((event, idx) => (
            <div
              key={idx}
              className="relative w-full rounded-xl overflow-hidden h-40 sm:h-48 md:h-52"
            >
              <Image
                src={event.image}
                alt={event.alt || "Event Image"}
                width={400}
                height={300}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
