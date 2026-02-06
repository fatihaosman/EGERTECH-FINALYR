import CategoryHero from "@/components/clubs/Category";
import ClubsGrid from "@/components/clubs/ClubGrid";

const courseClubs = [
  {
    name: "EUCCOSA",
    description:
      "The Egerton University Computer Science Students Association (EUCCOSA) provides a platform for computer science students to engage in hackathons, skill-building sessions, and practical workshops. Every Friday, students gather in the computer labs to learn new technologies, collaborate on projects, and meet guest speakers who share valuable industry insights.",
    href: "/clubs/courses/euccosa",
  },
  {
    name: "EUASSA",
    description:
      "The Egerton University Actuarial Science Students Association (EUASSA) organizes events, workshops, and study sessions for actuarial science students. Members can access revision papers, statistical tables, and notes, and participate in occasional events that strengthen both theoretical knowledge and practical problem-solving skills.",
    href: "/clubs/courses/euassa",
  },
  {
    name: "Agricultural Association",
    description:
      "The Agricultural Association is dedicated to students in the agriculture program. They organize educational trips, field visits, and engaging events that give students practical experience outside the classroom. The association fosters collaboration, learning, and networking opportunities within the agricultural community.",
    href: "/clubs/courses/agricultural",
  },
];

export default function CoursesPage() {
  return (
    <main className="pt-2">
      <CategoryHero
        title="Course Associations"
        image="/course.png"  // hero image for courses
      />

      <ClubsGrid clubs={courseClubs} />
    </main>
  );
}
