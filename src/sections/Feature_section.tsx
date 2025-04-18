
import { BorderBeam } from "@/components/ui/border-beam";
import AnimationContainer2 from "@/components/global/animation-container2";
import { ParallaxScroll } from "@/components/ui/Parallex-scroll";
import Skills from "@/components/Skills";
import { FeaturesService } from "@/components/Feature_Section_One";
import { FunctionComponent } from "react";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";

// import { motion } from "framer-motion";




function Feturesection() {
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
          {[<FeaturesService key={1} />,
          <Skills key={2} />,
          <FeatureFlow key={3} />,]}
        </ParallaxScroll>

        {/* Gradient Overlays */}
        {/* <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
          <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div> */}
      </div>

    </AnimationContainer2>
  );
}
function Feturesectionnew() {
  return (
    [<FeaturesService key={1} />,
    <Skills key={2} />,
    <FeatureFlow key={3} />,]


  );
}



const FeatureFlow: FunctionComponent = () => {
  return (
    <AnimationContainer2
      delay={0}
      className="relative h-full w-screen self-center pt-0 pb-10 md:py-30 p-5 bg-transparent mx-auto"
    >
      {/* Background Gradient Layer */}
      <div className="absolute md:top-[3%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
      {/* Main Content Box */}
      <div className="-m-2 rounded-l p-1 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl backdrop-blur-3xl relative z-10 mb-20">

        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white dark:text-white">
          Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From Image generation to video generation, Everything AI has APIs for
          literally everything. It can even create this website copy for you.
        </p>
        <BorderBeam size={250} duration={15} delay={7} />
        <BentoGrid className="py-5 px-8">
          {CARDS.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
        <div className="h-[150px] sm:hidden w-screen "> 
        
        </div>
      </div>
      {/* Gradient Overlays */}
      <div className="absolute -bottom-0 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-40"></div>
        <div className="absolute bottom-0 md:-bottom-2 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50">
       
        </div>
    </AnimationContainer2>
  );
}

export { Feturesectionnew, Feturesection }