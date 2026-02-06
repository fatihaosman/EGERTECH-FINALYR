// lib/events.ts
export type EventItem = {
  date: string; // ISO format
  image: string; // rename src → image
  alt?: string;  // optional
};

export const eventsData: EventItem[] = [
  { image: "/event1.jpeg", date: "2026-03-21", alt: "Event 1" },
  { image: "/event2.jpeg", date: "2026-03-23", alt: "Event 2" },
  { image: "/event3.jpeg", date: "2026-03-25", alt: "Event 3" },
  { image: "/event4.jpeg", date: "2026-03-26", alt: "Event 4" },
  { image: "/event5.jpeg", date: "2026-03-27", alt: "Event 5" },
  { image: "/event6.jpeg", date: "2026-03-28", alt: "Event 6" },
];
