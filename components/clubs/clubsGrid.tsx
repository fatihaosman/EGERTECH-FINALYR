import ClubCard from '@/components/clubs/clubCard';

interface Club {
  name: string;
  description: string;
  href: string;
}

interface ClubsGridProps {
  clubs: Club[];
}

export default function ClubsGrid({ clubs }: ClubsGridProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 -mt-10 pb-20 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <ClubCard
            key={club.name}
            name={club.name}
            description={club.description}
            href={club.href}
          />
        ))}
      </div>
    </section>
  );
}
