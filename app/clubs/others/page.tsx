import CategoryHero from "@/components/clubs/CategoryHero";
import ClubsGrid from "@/components/clubs/ClubsGrid";
const otherClubs = [
  {
    name: "Peer Counseling",
    description:
      "The Peer Counseling group at Egerton University provides a safe and supportive space for students who may be facing emotional, academic, or personal challenges. The program focuses on helping students talk through their concerns with trained peers who understand campus life. Students can reach out for support, guidance, or simply someone to listen, promoting mental well-being and a supportive student community.",
    href: "/clubs/others/peer-counseling",
  },
];
export default function OthersPage() {
  return (
    <main className="pt-2">
      <CategoryHero
        title="Other Student Support Groups"
        image="/peers-main.jpg"
      />

      <ClubsGrid clubs={otherClubs} />
    </main>
  );
}
