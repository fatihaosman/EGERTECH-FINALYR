// export default function SportsPage() {
//   return <h1>Sports</h1>;
// }
{/*local host:3000
  /main product pageseeing all the pages
  /then view each product
  /then view  each review link inside the each product
  */}

//   import Image from "next/image";
// import Link from "next/link";

// const sports = [
//   {
//     name: "Football",
//     description:
//       "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   },
//   {
//     name: "Cricket",
//     description:
//       "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   },
//   {
//     name: "Tennis",
//     description:
//       "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   },
//   {
//     name: "Karate",
//     description:
//       "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   },
//   {
//     name: "Basketball",
//     description:
//       "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
//   },
// ];

// export default function SportsPage() {
//   return (
//     <main className="pt-24">
      
//       {/* Hero Image Section */}
//       <section className="relative h-[50vh] w-full">
//         <Image
//           src="/sports-hero.jpg" // replace with your image
//           alt="Students playing sports"
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Optional dark overlay */}
//         <div className="absolute inset-0 bg-black/40" />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-5xl font-heading font-bold">
//             Sports Clubs
//           </h1>
//         </div>
//       </section>

//       {/* Cards Section */}
//       <section className="max-w-6xl mx-auto px-4 -mt-24 pb-20 relative z-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {sports.map((sport) => (
//             <div
//               key={sport.name}
//               className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
//             >
//               <h2 className="text-xl font-heading font-semibold text-brand mb-3">
//                 {sport.name}
//               </h2>

//               <p className="text-gray-700 mb-6">
//                 {sport.description}
//               </p>

//               <Link
//                 href="#"
//                 className="inline-block bg-brand text-white px-4 py-2 rounded-md hover:opacity-90"
//               >
//                 View More
//               </Link>
//             </div>
//           ))}
//         </div>
//       </section>

//     </main>
//   );
// }


import CategoryHero from '@/components/clubs/Category';
import ClubsGrid from "@/components/clubs/ClubGrid";


const sportsClubs = [
  {
    name: "Football",
    description:
      "The Football Club brings together students passionate about football and teamwork. Training and matches are held at the Pavilion sports ground, offering a welcoming environment for all skill levels to develop, compete, and enjoy the beautiful game.",
    href: "/clubs/sports/football",
  },
  {
    name: "Cricket",
    description:
     "The Cricket Club is open to students who love cricket and team sports. All activities take place on the Pavilion sports ground, providing a fun and competitive environment for students to improve their skills and enjoy the spirit of the game.",
    href: "/clubs/sports/cricket",
  },
  {
    name: "Tennis",
    description:
     "The Tennis Club is for students who enjoy competitive or recreational tennis. Sessions are held on the dedicated tennis courts next to the Pavilion sports ground, offering ample space and professional facilities to practice, play matches, and socialize with fellow tennis enthusiasts.",
    href: "/clubs/sports/tennis",
  },
  {
    name: "Karate",
    description:
      "The Karate Club offers an inclusive environment for students of all levels to learn and practice martial arts. Training is held at the Student Center, open to both boys and girls, focusing on skill development, discipline, and personal growth.",
    href: "/clubs/sports/karate",
  },
  {
    name: "Basketball",
    description:
     "The Basketball Club welcomes students eager to play and learn basketball. Activities take place on the same courts as the tennis area next to the Pavilion, providing a supportive environment to practice skills, play games, and enjoy team sports.",
    href: "/clubs/sports/basketball",
  },
];

export default function SportsPage() {
  return (
    <main className="pt-2">
      <CategoryHero
        title="Sports Clubs"
        image="/Image.png"
      />

      <ClubsGrid clubs={sportsClubs} />
    </main>
  );
}
