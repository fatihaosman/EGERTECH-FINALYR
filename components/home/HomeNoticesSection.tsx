
import ImageGallery from "@/components/ImgGallery/ImgGallery";
import { overallNotices, scienceNotices } from "@/lib/Notices";

export default function HomeNotices() {
  // 1. Combine all notices
  const allNotices = [...overallNotices, ...scienceNotices];

  // 2. Sort by most recent date
  const recentNotices = allNotices
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    .slice(0, 6); // show only latest 6

  return (
    <section className="w-full bg-white ">
      <div className="max-w-6xl mx-auto px-4 space-y-6">

        {/* Section header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-heading font-bold text-black">
            Latest Notices
          </h2>

          <span className="px-4 py-1 text-sm font-semibold bg-brand text-white rounded-full">
            Recent
          </span>
        </div>

        {/* Gallery */}
        <ImageGallery items={recentNotices} />

      </div>
    </section>
  );
}
