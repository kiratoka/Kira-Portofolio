
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyTech from "@/components/MyTech";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";


export default function Home() {
  return (
    <div>
      <main className="relative flex bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <MyTech />
          <Approach />

        </div>
      </main>
      <Footer />
    </div>

  );
}
