import ImageGallery from "@/components/ImageGallery/Imagegallery";

export default function NoticesPage() {
  const overallNotices = [
  {
    src: "/notice1.jpeg",
    date: "Mar 20, 2026",
    alt: "General campus notice",
  },
  {
    src: "/notice2.jpeg",
    date: "Mar 22, 2026",
    alt: "Library update",
  },
  {
    src: "/notice3.jpeg",
    date: "Mar 24, 2026",
    alt: "Fee deadline notice",
  },
  {
    src: "/notice4.jpeg",
    date: "Mar 26, 2026",
    alt: "Hostel allocation",
  },
   {
    src: "/notice5.jpeg",
    date: "Mar 26, 2026",
    alt: "Hostel allocation",
  },
   {
    src: "/notice6.jpeg",
    date: "Mar 26, 2026",
    alt: "Hostel allocation",
  },
   {
    src: "/notice7.jpeg",
    date: "Mar 26, 2026",
    alt: "Hostel allocation",
  },
];
const scienceNotices= [
  {
    src: "/noticef1.jpeg",
    date: "Mar 20, 2026",
    alt: "General campus notice",
  },
  {
    src: "/noticef2.jpeg",
    date: "Mar 22, 2026",
    alt: "Library update",
  },
  {
    src: "/noticef3.jpeg",
    date: "Mar 24, 2026",
    alt: "Fee deadline notice",
  },
  {
    src: "/noticef4.jpeg",
    date: "Mar 26, 2026",
    alt: "Hostel allocation",
  },
   {
    src: "/noticef5.jpeg",
    date: "Mar 27, 2026",
    alt: "Hostel allocation",
  },
   {
    src: "/noticef6.jpeg",
    date: "Mar 28, 2026",
    alt: "Hostel allocation",
  },
];



  return (
    <section className="w-full min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* OVERALL NEWS */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
            Overall
          </span>
          <ImageGallery items={overallNotices} />
        </div>

        {/* FACULTY OF SCIENCE */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">

            Faculty of Science
          </span>
          <ImageGallery items={scienceNotices} />
        </div>

      </div>
    </section>
  );
}
