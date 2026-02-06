// lib/notices.ts

export type NoticeItem = {
  src: string;
  date: string; // ISO format
  alt: string;
};

export const overallNotices: NoticeItem[] = [
  { src: "/notice1.jpeg", date: "2026-03-20", alt: "General campus notice" },
  { src: "/notice2.jpeg", date: "2026-03-22", alt: "Library update" },
  { src: "/notice3.jpeg", date: "2026-03-24", alt: "Fee deadline notice" },
  { src: "/notice4.jpeg", date: "2026-03-26", alt: "Hostel allocation" },
];

export const scienceNotices: NoticeItem[] = [
  { src: "/noticef1.jpeg", date: "2026-03-21", alt: "Science faculty notice" },
  { src: "/noticef2.jpeg", date: "2026-03-23", alt: "Lab timetable update" },
  { src: "/noticef3.jpeg", date: "2026-03-27", alt: "Exam announcement" },
];
