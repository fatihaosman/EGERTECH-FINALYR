import Link from "next/link";

export default function ClubsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-4 pb-16">
      
      {/* Header Section */}
      <section className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand mb-4">
          Clubs & Associations
        </h1>

        <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed">
          Discover student-led groups that support talent, faith, academics,
          leadership, and personal growth. Whether you love sports, belong to a
          faith group, want academic support, or community engagement —
          there’s a place for you.
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Sports */}
        <div className=" rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-heading font-semibold text-brand mb-3">
            Sports Clubs
          </h2>

          <p className="text-gray-700 mb-5">
            For students passionate about football, basketball, athletics,
            and other sports activities across campus.
          </p>

          <Link
            href="/clubs/sports"
            className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
          >
            Explore Sports
          </Link>
        </div>

        {/* Religious */}
        <div className="rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-heading font-semibold text-brand mb-3">
            Religious Associations
          </h2>

          <p className="text-gray-700 mb-5">
            Faith-based groups that support spiritual growth, fellowship,
            and shared values within the university.
          </p>

          <Link
            href="/clubs/religion"
            className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
          >
            View Groups
          </Link>
        </div>

        {/* Course-based */}
        <div className="rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-heading font-semibold text-brand mb-3">
            Course-Based Associations
          </h2>

          <p className="text-gray-700 mb-5">
            Academic and departmental associations that promote learning,
            collaboration, and career development.
          </p>

          <Link
            href="/clubs/courses"
            className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
          >
            See Associations
          </Link>
        </div>

        {/* Others */}
        <div className="rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-heading font-semibold text-brand mb-3">
            Other Associations
          </h2>

          <p className="text-gray-700 mb-5">
            Peer counselling, community service, leadership, innovation,
            and other special-interest student groups.
          </p>

          <Link
            href="/clubs/others"
            className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md hover:opacity-90"
          >
            Discover More
          </Link>
        </div>

      </section>
    </main>
  );
}
