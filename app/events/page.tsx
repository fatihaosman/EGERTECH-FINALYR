"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type EventType = {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/events/");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Failed to load events", err);
      }
    };

    fetchEvents();
  }, []);

  function formatEventDate(dateStr: string) {
    const date = new Date(dateStr);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    const ddNext = String(nextDay.getDate()).padStart(2, "0");
    const mmNext = String(nextDay.getMonth() + 1).padStart(2, "0");

    return `${yyyy}${mm}${dd}/${yyyy}${mmNext}${ddNext}`;
  }

  return (
    <section className="w-full min-h-screen bg-white py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10 sm:gap-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col lg:flex-row gap-2 items-center border-b border-gray-300 pb-2"
          >
            {/* LEFT: Date + Google Calendar */}
            <div className="relative flex flex-col items-start lg:w-1/4 text-left  mt-6 lg:mt-0">
              <span className="text-sm font-semibold text-gray-600 z-10">
                {new Date(event.created_at).toDateString()}
              </span>
              <a
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  event.title
                )}&dates=${formatEventDate(event.created_at)}&details=${encodeURIComponent(
                  event.description
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-brand-danger hover:underline text-xs z-10 font-semibold"
              >
                Add to Google Calendar
              </a>

              {/* Slanted Rectangle under the date */}
              <Image
                src="/slantrectangle.png"
                alt="Decorative rectangle"
                width={160}
                height={30}
                className="absolute -bottom-10 left-0 lg:-bottom-8 z-0"
              />
            </div>

            

            {/* VERTICAL LINE */}
            <div className="hidden lg:block w-px bg-gray-300 self-stretch mx-0"></div>

            {/* CENTER: Heading + Description */}
            <div className="flex-1 mt-3 lg:mx-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                {event.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-700">{event.description}</p>
            </div>

            {/* RIGHT: Event Poster */}
            <div className="w-100 lg:w-1/6 mt-3 mb-4 lg:mt-0">
              <Image
                src={event.image} // full backend URL
                alt={event.title}
                width={100}
                height={100}
                className="rounded-lg object-cover w-full"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}