import ImageGallery from "@/components/imageGallery/imagegallery";

export default function LostAndFoundPage() {
  const recentItems = [
    {
      src: "/lost1.jpeg",
      date: "Mar 20, 2026",
      alt: "Lost phone",
    },
    {
      src: "/lost2.jpeg",
      date: "Mar 22, 2026",
      alt: "Found ID card",
    },
    {
      src: "/lost3.jpeg",
      date: "Mar 24, 2026",
      alt: "Lost backpack",
    },
    {
      src: "/lost4.jpeg",
      date: "Mar 26, 2026",
      alt: "Found keys",
    },
    {
      src: "/lost5.jpeg",
      date: "Mar 26, 2026",
      alt: "Found keys",
    },

    {
      src: "/lost6.jpeg",
      date: "Mar 26, 2026",
      alt: "Found keys",
    },

  ];

  const olderItems = [
    {
      src: "/oder1.jpeg",
      date: "Mar 18, 2026",
      alt: "Lost calculator",
    },
    {
      src: "/oder2.jpeg",
      date: "Mar 17, 2026",
      alt: "Found charger",
    },
    {
      src: "/order3.jpg",
      date: "Mar 16, 2026",
      alt: "Lost notebook",
    },
    {
      src: "/order4.jpeg",
      date: "Mar 15, 2026",
      alt: "Found wallet",
    },
    {
      src: "/order5.jpeg",
      date: "Mar 14, 2026",
      alt: "Lost umbrella",
    },
    {
      src: "/oder6.jpeg",
      date: "Mar 13, 2026",
      alt: "Found water bottle",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* RECENT LOST & FOUND */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
            Recent
          </span>
          <ImageGallery items={recentItems} />
        </div>

        {/* OLDER ITEMS */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
            Earlier Posts
          </span>
          <ImageGallery items={olderItems} />
        </div>

      </div>
    </section>
  );
}
