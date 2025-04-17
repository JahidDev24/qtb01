
import { IconCloud } from "@/components/magicui/icon-cloud";
import { BorderBeam } from "@/components/ui/border-beam";
import { LampContainer } from "@/components/ui/lamp";
import AnimationContainer2 from "@/components/global/animation-container2";
import { ParallaxScroll } from "@/components/ui/Parallex-scroll";
import Skills from "@/components/Skills";
import { FeaturesSectionDemo } from "@/components/Feature_Section_One";
import { FunctionComponent } from "react";
import AnimationContainer from "@/components/global/animation-container";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";

// import { motion } from "framer-motion";




export default function Feturesection() {
  return (
    <AnimationContainer2
      delay={0}
      className="relative h-screen w-screen self-center pt-0 pb-10 md:py-30 px-1 bg-transparent mx-auto"
      mywidth="100%"
    >

      {/* Background Gradient Layer */}
      <div className="absolute md:top-[3%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>

      {/* Main Content Box */}
      <div className="-m-2 rounded-l p-1 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl backdrop-blur-3xl relative z-10">
        {/* <BorderBeam size={250} duration={15} delay={11} /> */}
        <ParallaxScroll className="bg-transparent shadow-md h-screen w-screen">
          {[<FeaturesSectionDemo key={1} />,
          <Skills key={2} />, 
          <FeatureOne key={3} />,]}
        </ParallaxScroll>

        {/* Gradient Overlays */}
        {/* <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
          <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div> */}
      </div>

    </AnimationContainer2>
  );
}


type FeatureOneProps = object

const FeatureOne: FunctionComponent<FeatureOneProps> = () => {
  return (
    <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8 px-12">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
  );
}