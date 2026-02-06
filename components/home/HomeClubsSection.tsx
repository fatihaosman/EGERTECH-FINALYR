"use client";

import Link from "next/link";

interface ClubItem {
  title: string;
  description: string;
  href: string;
}

interface HomeClubsProps {
  clubs: ClubItem[];
}

export default function HomeClubsSection({ clubs }: HomeClubsProps) {
  return (
    <section className="relative w-full py-8 mt-0 mb-4 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-6 text-black underline drop-shadow-md">
          Explore Student Clubs & Associations
        </h2>

        {/* Horizontal scroll row */}
        <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
          {clubs.map((club, idx) => (
            <div
  key={idx}
  className="
  flex-shrink-0 w-64 h-64
  bg-white
  rounded-xl
  p-6
  border border-gray-200
  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
  hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]
  transform transition-all duration-300 hover:-translate-y-1
  relative z-10 mt-6
">


              <h3 className="text-xl font-semibold text-brand mb-2">
                {club.title}
              </h3>
              <p className="text-gray-700 mb-4">{club.description}</p>
              <Link
                href={club.href}
                className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Decorative Image */}
        <div className="absolute bottom-10 inset-x-0 -z-10 flex justify-center pointer-events-none">
        <img
          src="/rectangle 43.png"
          alt="Clubs highlights"
          className="w-full max-w-5xl mx-auto"
        />
      </div>

      </div>
    </section>
  );
}
