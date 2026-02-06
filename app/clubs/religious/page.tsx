import CategoryHero from "@/components/clubs/Category";
import ClubsGrid from "@/components/clubs/ClubGrid";
const religiousClubs = [
  {
    name: "Muslim Students Association",
    description:
      "The Muslim Students Association brings together Muslim students across Egerton University to support one another spiritually, socially, and academically. Students are free to attend daily prayers at the university mosque located within the campus. The association also provides guidance for new students, organizes Islamic talks, and connects members through a WhatsApp group for announcements, support, and community activities.",
    href: "/clubs/religious/muslim",
  },
  {
    name: "EUASDA (Seventh Day Adventist)",
    description:
      "Egerton University Adventist Students Association (EUASDA) is a faith-based community for Seventh Day Adventist students. Members gather for worship, fellowship, and spiritual growth, with main prayer and worship services held on Saturdays in accordance with SDA beliefs. The association also supports students through Bible studies, outreach programs, and a strong sense of community on campus.",
    href: "/clubs/religious/euasda",
  },
  {
    name: "Catholic Students Association",
    description:
      "The Catholic Students Association serves Catholic students at Egerton University by providing a space for worship, fellowship, and spiritual development. Students attend Sunday Mass at the Catholic Church located near the Egerton University main gate. The association also organizes prayer meetings, catechism sessions, and community outreach activities throughout the semester.",
    href: "/clubs/religious/catholic",
  },
];

export default function ReligiousPage() {
  return (
    <main className="pt-2">
      <CategoryHero
        title="Religious Associations"
        image="/religion.jpg"
      />

      <ClubsGrid clubs={religiousClubs} />
    </main>
  );
}
