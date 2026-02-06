import Hero from "@/components/home/Hero";
import HomeEvents from "@/components/home/HomeEvents";
import HomeNoticesSection from "@/components/home/HomeNoticesSection";
import { eventsData } from "@/lib/Events";

import HomeClubsSection from "@/components/home/HomeClubsSection";
import { clubs } from "@/lib/Clubs";



export default function Home() {
  return (
    <main >
      
      <Hero />
      <HomeNoticesSection />
      <HomeEvents events={eventsData} />
       <HomeClubsSection clubs={clubs} />
    </main>
  );
}
