import React from 'react'
import AnimationContainer from "@/components/global/animation-container";
import { ArrowRightIcon } from "lucide-react";
import { Spotlight } from '@/components/ui/Spotlight';
import { ContainerTextFlip } from '@/components/ui/Flip-Text';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';



export default function Hero() {
    const words = [
        {
          text: "Mobile Applications",
          text2: "Wrap Speed."
        },
        {
          text: "Enterprise Software",
           text2: "Rapid Pace."
        },
        {
          text: "Blockchain Program",
           text2: "Swift Time."
        },
        {
            text: "Artificial Engine",
             text2: "Sharp Turn."
          },
          {
            text: "Automated Systems",
             text2: "Fast Track."
          },
          {
            text: "Predictive Models",
             text2: "Sharp Mind."
          },
       
      ];
    return (
     
            <BackgroundBeamsWithCollision className="relative w-screen h-screen lg:px-10 md:px-7 sm:px-2">
            <Spotlight
                className="-top-50 left-0 md:-top-40 md:left-10 sm:pb-0 sm:-left-10 sm:-top-10"
                fill="white"
            />
           <div id="home" className="flex flex-col justify-center items-center w-full h-full text-center bg-gradient-to-t from-background pt-2 sm:pt-10 pb-6 ">
                <div /> {/* Spacer or Logo if needed */}
            <AnimationContainer className="flex flex-col items-center justify-center w-full text-center px-4 sm:pt-8 sm:mt-10" >    
              <h1 className="text-foreground mt-1 text-center py-3 text-4xl font-medium tracking-normal text-balance sm:text-4xl md:text-6xl lg:text-8xl !leading-[1.15] w-full font-heading">
                         We Create Dream Into <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                        Reality
                         </span>
                     </h1>
           </AnimationContainer>   
           <AnimationContainer className="flex flex-col items-center justify-center w-full text-center px-4 mt-1 " delay={0.3}> 
                 <h2 className="text-foreground  text-center  text-3xl font-medium tracking-normal text-balance sm:text-2xl md:text-3xl lg:text-2xl !leading-[1.15] w-full font-mono">
                            Build World Class <ContainerTextFlip words={words.map((e) => e.text)}/> at <ContainerTextFlip words={words.map((e) => e.text2)}/> 
                        </h2>
              </AnimationContainer> 
           <p className="mt-6 pb-5 text-sm tracking-tight text-muted-foreground md:text-xl text-balance max-w-4xl font-mono">
                        Quantechbit offers a wide range of services that are tailored to meet the unique needs of our clients.
                    </p>
                <div className="mb-8 mt-2">
                    <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                        <span>
                            <span className="spark mask-gradient absolute inset-0 h-full w-full animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                        </span>
                        <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                        <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20" />
                        <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                            ✨ Let&apos;s Connect
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </span>
                    </button>
                </div>
            </div> 
            </BackgroundBeamsWithCollision>
     
    );
}

