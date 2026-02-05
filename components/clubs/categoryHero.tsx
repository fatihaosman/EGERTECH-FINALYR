import Image from "next/image";

interface CategoryHeroProps {
  title: string;
  image: string;
}

export default function CategoryHero({ title, image }: CategoryHeroProps) {
  return (
    <section className="relative h-[50vh] w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-heading font-bold">
          {title}
        </h1>
      </div>
    </section>
  );
}
