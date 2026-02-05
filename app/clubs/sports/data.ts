export type SportsClub = {
  name: string;
  description: string;
  imageTop: string;
  imageBottom: string;
  whatsappLink?: string;
  contactNumber?: string;
};

export const sportsData: Record<string, SportsClub> = {
  football: {
    name: "Football Club",
    description: "The Football Club brings together students passionate about football and teamwork. Training is held at the Pavilion sports ground, offering a welcoming environment for all skill levels.",
    imageTop: "/football-top.png",
    imageBottom: "/football-bottom.png",
    whatsappLink: "https://chat.whatsapp.com/example",
    contactNumber: "+254 712 345 678",
  },
  cricket: {
    name: "Cricket Club",
    description: "A club for students interested in cricket and team sports. All activities take place on the Pavilion sports ground, similar to football.",
    imageTop: "/cricket-top.png",
    imageBottom: "/cricket-bottom.png",
    whatsappLink: "https://chat.whatsapp.com/example2",
  },
  tennis: {
    name: "Tennis Club",
    description: "The Tennis Club is for students who enjoy competitive or recreational tennis. Sessions are held on the dedicated tennis courts next to the Pavilion.",
    imageTop: "/tennis-top.png",
    imageBottom: "/tennis-bottom.png",
    contactNumber: "+254 700 111 222",
  },
  karate: {
    name: "Karate Club",
    description: "The Karate Club offers an inclusive environment for students of all levels. Training is held at the Student Center, open to both boys and girls.",
    imageTop: "/karate-top.png",
    imageBottom: "/karate-bottom.png",
  },
  basketball: {
    name: "Basketball Club",
    description: "The Basketball Club welcomes students eager to play and learn basketball. Activities take place on the courts next to the Pavilion.",
    imageTop: "/basketball-top.png",
    imageBottom: "/basketball-bottom.png",
  },
};
