import ClubDetailCard from "@/components/clubs/ClubDetail";
type OtherClub = {
  name: string;
  description: string;
  imageTop: string;
  imageBottom: string;
  whatsappLink?: string;
  contactNumber?: string;
};

const othersData: Record<string, OtherClub> = {
  "peer-counseling": {
    name: "Peer Counseling",
    description:
      "Peer Counseling at Egerton University is a student-centered support service designed to help students cope with emotional, social, academic, and personal challenges. The program allows students to speak openly with trained peer counselors in a non-judgmental and confidential environment. Whether a student is feeling overwhelmed, stressed, lonely, or simply needs guidance, the peer counseling team is available to listen, support, and help students find positive ways forward.",
    imageTop: "/peer-top.jpg",
    imageBottom: "/peer-bottom.jpg",
  },
};

export default async function OthersDetailPage({
  params,
}: {
  params: Promise<{ peerid: string }>;
}) {
  const { peerid } = await params;

  const club = othersData[peerid];

  if (!club) {
    return <h1>Support group not found</h1>;
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
