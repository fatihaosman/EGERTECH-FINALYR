import ClubDetailCard from "@/components/clubs/ClubDetail";
type ReligiousClub = {
  name: string;
  description: string;
  imageTop: string;
  imageBottom: string;
  whatsappLink?: string;
  contactNumber?: string;
};

const religiousData: Record<string, ReligiousClub> = {
  muslim: {
    name: "Muslim Students Association",
    description:
      "The Muslim Students Association at Egerton University supports Muslim students in practicing their faith comfortably while on campus. Students are welcome to attend daily prayers at the university mosque, which is conveniently located within the school compound. The association also helps new students settle in, provides spiritual guidance, and maintains a WhatsApp group where members can receive announcements, ask questions, and connect with fellow Muslim students.",
    imageTop: "/muslim-top.jpg",
    imageBottom: "/muslim-bottom.jpg",
    whatsappLink: "https://chat.whatsapp.com/muslim-egerton",
  },

  euasda: {
    name: "EUASDA (Seventh Day Adventist)",
    description:
      "EUASDA is a Christian association for Seventh Day Adventist students at Egerton University. The group focuses on spiritual growth, fellowship, and mutual support among members. Worship services and prayers are mainly held on Saturdays, in line with SDA beliefs. The association also organizes Bible study sessions, outreach activities, and mentorship programs to help students grow spiritually and socially during their time at the university.",
    imageTop: "/euasda-top.jpg",
    imageBottom: "/euasda-bottom.jpg",
    whatsappLink: "https://chat.whatsapp.com/euasda-egerton",
  },

  catholic: {
    name: "Catholic Students Association",
    description:
      "The Catholic Students Association provides a spiritual home for Catholic students at Egerton University. Members attend Sunday Mass at the Catholic Church located near the Egerton University main gate. The association also organizes regular prayer meetings, faith formation sessions, and community service activities. Through fellowship and worship, the group helps students maintain their faith while balancing academic life.",
    imageTop: "/catholic-top.jpg",
    imageBottom: "/catholic-bottom.jpg",
  },
};

export default async function ReligiousDetailPage({
  params,
}: {
  params: Promise<{ religiousid: string }>;
}) {
  const { religiousid } = await params;

  const club = religiousData[religiousid];

  if (!club) {
    return <h1>Religious association not found</h1>;
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
