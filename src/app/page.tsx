import AboutSection from "@/sections/AboutSection";
import { ContactForm } from "@/sections/ContactForm";
import Feturesection, { Feturesectionnew } from "@/sections/Feature_section";
import Hero from "@/sections/Hero";
import { ProjectSection } from "@/sections/ProjectSection";
// import Navbar from "@/components/Navigation/navbar";
// import StarsCanvas from "@/sections/StarBackground";
import TapeSection from "@/sections/Tapeview";
import Testomorieal from "@/sections/Testomorieal";

export default function Home() {
    return (

    <main className="rmt-20 mx-auto w-full z-0 relative">
      <div className="overflow-x-hidden scrollbar-hide size-full">
         {/* <Navbar /> */}
      
        <Hero />
        <Feturesectionnew/>
        {/* <TapeSection /> */}
        <ProjectSection/>    
        <Testomorieal/>
        <ContactForm/>
      </div>
       
    </main>);
}
