import ClubDetailCard from "@/components/clubs/ClubDetail";

type CourseClub = {
  name: string;
  description: string;
  imageTop: string;
  imageBottom: string;
  whatsappLink?: string;
  contactNumber?: string;
};

const coursesData: Record<string, CourseClub> = {
  euccosa: {
    name: "EUCCOSA",
    description:
      "The Egerton University Computer Science Students Association (EUCCOSA) provides a platform for computer science students to engage in hackathons, skill-building sessions, and practical workshops. Every Friday, students gather in the computer labs to learn new technologies, collaborate on projects, and meet guest speakers who share valuable industry insights.",
    imageTop: "/eucoosa1.jpg",
    imageBottom: "/eucossa2.jpg",
    whatsappLink: "https://chat.whatsapp.com/euccosa",
  },
  euassa: {
    name: "EUASSA",
    description:
      "The Egerton University Actuarial Science Students Association (EUASSA) organizes events, workshops, and study sessions for actuarial science students. Members can access revision papers, statistical tables, and notes, and participate in occasional events that strengthen both theoretical knowledge and practical problem-solving skills.",
    imageTop: "/euassa-top.jpg",
    imageBottom: "/euassa-bottom.jpg",
    whatsappLink: "https://chat.whatsapp.com/euassa",
  },
  agricultural: {
    name: "Agricultural Association",
    description:
      "The Agricultural Association is dedicated to students in the agriculture program. They organize educational trips, field visits, and engaging events that give students practical experience outside the classroom. The association fosters collaboration, learning, and networking opportunities within the agricultural community.",
    imageTop: "/agriculture-top.jpg",
    imageBottom: "/agriculture-bottom.jpg",
  },
};

export default async function CoursesDetailPage({
  params,
}: {
  params: Promise<{ courseid: string }>;
}) {
  const { courseid } = await params;

  const club = coursesData[courseid];

  if (!club) {
    return <h1>Course association not found</h1>;
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
