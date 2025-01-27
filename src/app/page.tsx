import { StacksCarousel } from "@/components/my-stack-section";
import { WelcomeSection } from "@/components/welcome-section";
export default function Home() {


  return (
    <main className="w-full text-black ">
      <WelcomeSection/>
      <StacksCarousel/>

    </main>
  );
}
