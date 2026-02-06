"use client";

import Image from "next/image";

type EventItem = {
  date: string;
  image: string;
  alt?: string;
};

interface HomeEventsProps {
  events: EventItem[];
}

export default function HomeEvents({ events }: HomeEventsProps) {
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
      <div className="absolute inset-0 max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-brand/40 via-yellow-100/30 to-brand-danger/40 blur-2xl -z-10" />

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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
