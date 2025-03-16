import AboutSection from "@/sections/AboutSection";
import Hero from "@/sections/Hero";
import Navbar from "@/components/Navigation/navbar";
import StarsCanvas from "@/sections/StarBackground";
import TapeSection from "@/sections/Tapeview";
import Testomorieal from "@/sections/Testomorieal";

export default function Home() {


    return (<main className="relative Obg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <StarsCanvas />
        <Navbar />
        <Hero />
        <TapeSection />
        <Testomorieal/>
        <AboutSection/>
    </main>);
}
