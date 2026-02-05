import Image from "next/image";

export default function EventsPage() {
  const events = [
    {
      date: "Mon, Mar 25, 2026",
      title: "Cultural Week",
      description:
        "Celebrate the vibrant traditions of our campus! Cultural Week brings together music, dance, art, and performances from various student clubs. Open to everyone on campus.",
      image: "/cultural-week.jpeg",
    },
    {
      date: "Fri, Apr 10, 2026",
      title: "Computer Science Hackathon",
      description:
        "A 48-hour coding challenge for students passionate about tech. Teams will compete to build innovative software solutions. While organized by the CS department, students from all fields are welcome to participate.",
      image: "/hackathon.jpeg",
    },
    {
      date: "Sat, Jun 20, 2026",
      title: "50th Graduation Ceremony",
      description:
        "Join us in celebrating the Class of 2026! Graduation day will include speeches, awards, and the conferring of degrees. Family and friends are warmly invited.",
      image: "/graduation.jpeg",
    },
  ];

  function formatEventDate(dateStr: string) {
  const date = new Date(dateStr);
  // Format for Google Calendar: YYYYMMDD
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  
  // For all-day events, Google uses YYYYMMDD/YYYYMMDD (end date is next day)
  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1);
  const ddNext = String(nextDay.getDate()).padStart(2, "0");
  const mmNext = String(nextDay.getMonth() + 1).padStart(2, "0");

  return `${yyyy}${mm}${dd}/${yyyy}${mmNext}${ddNext}`;
}


  return (
    <section className="w-full min-h-screen bg-white py-4 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10 sm:gap-12">

        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row gap-2 items-center border-b border-gray-300 pb-2"
          >
            {/* LEFT: Date + Google Calendar */}
            <div className="relative flex flex-col items-start lg:w-1/4 text-left">
                <span className="text-sm font-semibold text-gray-600 z-10">{event.date}</span>
                <a
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                  event.title
                )}&dates=${formatEventDate(event.date)}&details=${encodeURIComponent(
                  event.description
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-brand-danger hover:underline text-xs z-10 font-semibold"
              >
                Add to Google Calendar
              </a>


                {/* Slanted Rectangle under the date */}
                <Image
                  src="/slantrectangle.png"
                  alt="Decorative rectangle"
                  width={160}
                  height={20}
                  className="absolute -bottom-10 left-0 lg:-bottom-8 z-0"
                />
            </div>

             {/* VERTICAL LINE */}
  <div className="hidden lg:block w-px bg-gray-300 self-stretch mx-0"></div>


            {/* CENTER: Heading + Description */}
            <div className="flex-1 lg:mx-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{event.title}</h2> 
              <p className="text-sm sm:text-base text-gray-700">{event.description}</p>
            </div>

            {/* RIGHT: Event Poster */}
            <div className="lg:w-1/6 lg:mt-0">
              <Image
                src={event.image}
                alt={event.title}
                width={100}
                height={100}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
