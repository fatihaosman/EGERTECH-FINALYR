// export default async function SportsDetails({
//   params,
// } :{
//   params: Promise<{ sportsid: string }>;
// }) {
//   const sportsid = (await params).sportsid;
//   return <h1>each sports club details {sportsid}</h1>;
// }

// import ClubDetailCard from "@/components/clubs/ClubDetailCard";

// export default function FootballPage() {
//   return (
//     <main className="pt-28 px-4 pb-20">
//       <ClubDetailCard
//         name="Football Club"
//         description="The Football Club brings together students passionate about football, teamwork, and competitive play across campus."
//         image="/football.jpg"
//         whatsappLink="https://chat.whatsapp.com/example"
//         contactNumber="+254 712 345 678"
//       />
//     </main>
//   );
// }

import ClubDetailCard from "@/components/clubs/ClubDetailCard";

type SportsClub = {
  name: string;
  description: string;
  imageTop: string;      // top image
  imageBottom: string; 
  whatsappLink?: string;
  contactNumber?: string;
};

const sportsData: Record<string, SportsClub> = {
  football: {
    name: "Football Club",
       description:
      "The Football Club brings together students passionate about football and teamwork. Training and matches are held at the Pavilion sports ground, offering a welcoming environment for all skill levels to develop, compete, and enjoy the beautiful game.",
    imageTop: "/football-top.png",
    imageBottom: "/football-bottom.png",
    whatsappLink: "https://chat.whatsapp.com/example",
    contactNumber: "+254 712 345 678",
  },
  cricket: {
    name: "Cricket Club",
     description:
     "The Cricket Club is open to students who love cricket and team sports. All activities take place on the Pavilion sports ground, providing a fun and competitive environment for students to improve their skills and enjoy the spirit of the game.",
    imageTop: "/cricket-top.webp",
    imageBottom: "/cricket-bottom.jpg",
    whatsappLink: "https://chat.whatsapp.com/example2",
  },
  tennis: {
    name: "Tennis Club",
    description:
     "The Tennis Club is for students who enjoy competitive or recreational tennis. Sessions are held on the dedicated tennis courts next to the Pavilion sports ground, offering ample space and professional facilities to practice, play matches, and socialize with fellow tennis enthusiasts.",
    imageTop: "/tennis-top.jpg",
    imageBottom: "/tennis-bottom.jpg",
    contactNumber: "+254 700 111 222",
  },
   basketball: {
    name: "Basketball Club",
    description:
     "The Basketball Club welcomes students eager to play and learn basketball. Activities take place on the courts next to the Pavilion sports ground, providing a supportive environment to practice skills, play games, and enjoy team sports.",
    imageTop: "/basketball-top.jpg",
    imageBottom: "/basketball-bottom.jpg",
    contactNumber: "+254 700 111 222",
  },
   karate: {
    name: "Karate Club",
    description:
     "The Karate Club offers an inclusive environment for students of all levels to learn and practice martial arts. Training is held at the Student Center, open to both boys and girls, focusing on skill development, discipline, and personal growth.",
    imageTop: "/karate-top.jpg",
    imageBottom: "/karate-bottom.jpg",
    contactNumber: "+254 700 111 222",
  },
};

export default async function SportsDetailPage({
  params,
}: {
  params: Promise<{ sportsid: string }>;
}) {
  const { sportsid } = await params;

  const club = sportsData[sportsid];

  if (!club) {
    return <h1>Club not found</h1>;
  }

  return (
    <main className="pt-28 px-4 pb-20">
      <ClubDetailCard
        name={club.name}
        description={club.description}
         imageTop={club.imageTop}
         imageBottom={club.imageBottom}
        whatsappLink={club.whatsappLink}
        contactNumber={club.contactNumber}
      />
    </main>
    
  );
}
