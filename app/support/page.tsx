import Link from "next/link";
import ImageGallery from "@/components/ImageGallery/Imagegallery";
import Image from "next/image";
export default function StudentSupportPage() {
  const scholarships = [
    {
      src: "/notice1.png",
      date: "Mar 20, 2026",
      alt: "Scholarship notice",
    },
    {
      src: "/notice2.png",
      date: "Mar 22, 2026",
      alt: "Bursary announcement",
    },
    {
      src: "/notice3.png",
      date: "Mar 24, 2026",
      alt: "Financial aid update",
    },
    {
      src: "/notice4.png",
      date: "Mar 26, 2026",
      alt: "Student funding notice",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-12">

        {/* PAGE HEADING */}
        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black">
          Scholarships & Bursaries
        </h1>

        {/* SINGLE ROW: SCHOLARSHIPS */}
        <ImageGallery items={scholarships} />

        {/* SUPPORT CONTENT WRAPPER */}
<div className="relative max-w-2xl">

  {/* CONTENT */}
  <div className="relative z-10 space-y-4">
    <h2 className="text-lg sm:text-xl font-semibold text-black">
      Having trouble with fees or payments?
    </h2>

    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
      If you are experiencing challenges with school fees, accommodation,
      or other study-related payments, this form allows you to share your
      situation so that available student support options can be considered.
    </p>

    <Link
      href="/support/form"
      className="inline-block mt-2 bg-brand-danger text-white px-6 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
    >
      Fill Support Form
    </Link>
  </div>

  {/* DECORATIVE IMAGE */}
  <Image
    src="/slantrectangle.png"
    alt=""
    width={140}
    height={20}
    className="absolute bottom-10 left-0 z-0 pointer-events-none"
  />
</div>


      </div>
    </section>
  );
}
