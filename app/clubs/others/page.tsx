"use client";

import { useEffect, useState } from "react";
import CategoryHero from "@/components/clubs/Category";
import ClubsGrid from "@/components/clubs/ClubGrid";

type Club = {
  name: string;
  description: string;
  href: string;
};

export default function OthersPage() {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/posts/clubs/");
        const data = await res.json();

        const others = data
          .filter((club: { category: string }) => club.category === "others")
          .map((club: { name: string; description: string }) => ({
            name: club.name,
            description: club.description,
            href: `/clubs/others/${club.name.toLowerCase()}`,
          }));

        setClubs(others);
      } catch (err) {
        console.error("Failed to load other clubs", err);
      }
    };

    fetchClubs();
  }, []);

  return (
    <main className="pt-2">
      <CategoryHero
        title="Other Student Support Groups"
        image="/peers-main.jpg"
      />
      <ClubsGrid clubs={clubs} />
    </main>
  );
}