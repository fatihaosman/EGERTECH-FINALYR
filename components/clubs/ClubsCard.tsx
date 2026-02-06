import Link from "next/link";

interface ClubCardProps {
  name: string;
  description: string;
  href: string;
}

export default function ClubCard({ name, description, href }: ClubCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-heading font-semibold text-brand mb-3 ">
        {name}
      </h2>

      <p className="text-gray-700 mb-6 font-body">
        {description}
      </p>

      <Link
        href={href}
        className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90   font-heading"
      >
        View More
      </Link>
    </div>
  );
}
