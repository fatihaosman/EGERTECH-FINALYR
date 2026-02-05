import Image from "next/image";
import Link from "next/link";

export default function AboutEgertonPage() {
  return (
    <main className="pt-8 px-4 md:px-12 space-y-8">

      {/* 1️⃣ History of Egerton University - Overlapping Images */}
      <section className="flex flex-col md:flex-row items-center gap-6 font-body">
        {/* Text */}
        <div className="md:w-1/2 space-y-2">
          <h2 className="text-2xl font-heading font-bold text-brand font-heading">
            History of Egerton University
          </h2>
          <h1 className="text-black font-semibold">From a Farm School to a National University.</h1>
          <p className="text-gray-700">
            Egerton University began its journey in 1939, founded by Lord Maurice Egerton of Tatton, a visionary farmer who dreamt of transforming agriculture in Kenya. What started as a small Farm School for training young farmers quickly grew into a respected institution that shaped the agricultural future of the country.
          </p>
        </div>

        {/* Overlapping Images */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[260px] h-[220px]">
            <Image
              src="/egerton1-bottom.png"
              alt="History bottom"
              width={200}
              height={200}
              className="absolute bottom-0 right-0 rounded-lg object-cover"
            />
            <Image
              src="/egerton.png"
              alt="History top"
              width={180}
              height={180}
              className="absolute top-0 left-0 z-10 rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2️⃣ Rising Through the Decades - Single Image */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        {/* Text */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-heading font-bold text-brand">
            Rising Through the Decades
          </h2>
          <p className="text-gray-700">
            In 1950, the school was upgraded to an Agricultural College, offering diploma programs in modern farming and animal science. By 1979, with the support of the Government of Kenya and USAID, Egerton underwent a major expansion that paved the way for university-level education. A few years later, in 1986, it became a constituent college of the University of Nairobi, and in 1987, Egerton University was officially established through an Act of Parliament. It was later re-chartered in 2013 under the Universities Act No. 42 of 2012, reaffirming its place among Kenya’s top public universities.
          </p>
        </div>

        {/* Single Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/egerton2.png"
            alt="Rising decades"
            width={300}
            height={220}
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      {/* 3️⃣ The Heart of Egerton – Njoro and Beyond */}
      <section className="space-y-6">
        <h2 className="text-2xl font-heading font-bold text-brand">
          The Heart of Egerton – Njoro and Beyond
        </h2>
        <p className="text-gray-700">
          The Njoro Main Campus remains the heartbeat of Egerton University — home to vibrant faculties such as Agriculture, Education, Engineering, Science, and Veterinary Medicine. Beyond Njoro, Egerton continues to grow through its Nakuru Town Campus College and Kenyatta Campus, offering programs in commerce, health sciences, and capacity building.
        </p>

        {/* Grid for two campus colleges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* First campus */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-2 flex flex-col items-center">
            <Image
              src="/nakuru-campus.png"
              alt="Nakuru City Campus"
              width={300}
              height={180}
              className="rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-brand mb-2 ">
              Nakuru City Campus College
            </h3>
            <h2 className="text-black mb-2 text-center font-semibold">
              Located in Nakuru Town along the main Nakuru-Eldoret highway
            </h2>
            <p className="text-gray-500 mb-4 text-center">
              The only University’s Campus College, Nakuru City Campus College, hosts the Faculties of Commerce and Health Sciences
            </p>
            <Link
              href="#"
              className="bg-brand-accent text-white px-12 py-2 rounded-md hover:opacity-80"
            >
              Learn More
            </Link>
          </div>

          {/* Second campus - placeholder */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 flex flex-col items-center">
            <Image
              src="/kenyatta-campus.png"
              alt="Kenyatta Campus"
              width={300}
              height={180}
              className="rounded-lg object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-brand mb-2">
              Kenyatta Campus
            </h3>
            <h2 className="text-black mb-2 text-center font-semibold">
     Kenyatta Campus is located five (5) kilometres from Njoro Campus.
            </h2>
            <p className="text-gray-500 mb-4 text-center">
             Kenyatta campus is planned to house the Open and Distance Learning (CODL) programmes which is currently based at Njoro Campus.
            </p>
            <Link
              href="#"
              className="bg-brand-accent text-white px-12 py-2 rounded-md hover:opacity-80"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* 4️⃣ A Centre of Research and Innovation */}
      <section className="space-y-1">
        <h2 className="text-2xl font-heading font-bold text-black">
          A Centre of Research and Innovation
        </h2>
        <p className="text-gray-700">
          Egerton University is deeply rooted in research, community service, and innovation. Institutes such as the Tegemeo Institute of Agricultural Policy and Development and the Centre of Excellence in Sustainable Agriculture and Agribusiness Management (CESAAM) lead projects that impact food security, sustainability, and agricultural development across Africa. Through these and many other initiatives, Egerton continues to live its motto — “Transforming Lives through Quality Education.”
        </p>
      </section>

      {/* 5️⃣ Global Partnerships and Lifelong Learning */}
      <section className="space-y-1">
        <h2 className="text-2xl font-heading font-bold text-black">
          Global Partnerships and Lifelong Learning
        </h2>
        <p className="text-gray-700">
          Egerton’s influence extends beyond Kenya’s borders through collaborations with organizations such as UNESCO, the Confucius Institute, and the African Virtual University (AVU). These partnerships foster cultural exchange, global learning, and access to higher education through distance and online programs.
        </p>
      </section>

      {/* 6️⃣ Empowering Generations for the Future */}
      <section className="space-y-1 pb-20">
        <h2 className="text-2xl font-heading font-bold text-black">
          Empowering Generations for the Future
        </h2>
        <p className="text-gray-700">
          From mentoring new universities like Chuka, Kisii, and Laikipia, to contributing to Kenya’s Vision 2030, Egerton University remains a pillar of academic excellence and innovation. Today, it stands as a community of thousands — students, researchers, and alumni — working together to create a better, more sustainable future.
        </p>
      </section>
      {/* 7️⃣ A glimpse into life at Egerton University */}
      <section className="text-center mt-10 pb-10">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-brand mb-6">
          A Glimpse into Life at Egerton University
        </h2>

        {/* Video */}
        <div className="flex justify-center">
          <video
            src="/egerton-life.mp4" // replace with your video file in public folder
            controls
            className="w-full max-w-4xl rounded-lg shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>


    </main>
  );
}
