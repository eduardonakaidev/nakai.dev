import { FooterBar } from "@/components/footer-bar";
import { StacksCarousel } from "@/components/my-stack-section";
import { WelcomeSection } from "@/components/welcome-section";
import WorksSection from "@/components/works-section";

export default function Home() {


  return (
    <main className="w-full text-black flex flex-col gap-24">
      <WelcomeSection />
      <StacksCarousel />
      <WorksSection/>
      <FooterBar />
    
    </main>
  );
}
