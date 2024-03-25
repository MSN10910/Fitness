import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Team from "@/components/Team";
import Membership from "@/components/Membership";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";
import Brands from "@/components/SearchExercises";
import Exercises from "@/components/Exercises";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Blog />
      {/* <div className="h-[3000px]"></div> */}
    </main>
  );
}
