import React from 'react'
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import AnimationContainer from "@/components/global/animation-container";
import { ArrowRightIcon } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";
import Feturesection from './Feature_section';
import { Spotlight } from '@/components/ui/Spotlight';
import { ContainerTextFlip } from '@/components/ui/typewriter-effect';



export default function Hero() {
    const words = [
        {
          text: "Mobile Applications",
          text2: "Wrap Speed"
        },
        {
          text: "Websites",
           text2: "Minimal Cost"
        },
        {
          text: "AI System",
           text2: "With Expert Hand"
        },
       
      ];
    return (
        <MaxWidthWrapper className="relative w-screen h-screen">
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className="flex flex-col justify-between items-center w-full h-full text-center bg-gradient-to-t from-background py-12">
                <div /> {/* Spacer or Logo if needed */}
            <AnimationContainer className="flex flex-col items-center justify-center w-full text-center px-4" delay={2}> 
                 
              <h1 className="relative before:absolute before:inset-0 before:animate-typewriter text-foreground mt-8 text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                         We Create Dream Into <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
                        Reality
                         </span>
                     </h1>
           </AnimationContainer>   
           {/* <AnimationContainer className="flex flex-col items-center justify-center w-full text-center px-4" delay={3}> 
                 <h3 className="text-foreground mt-8 text-center py-6 text-2xl font-medium tracking-normal text-balance sm:text-4xl md:text-3xl lg:text-3xl !leading-[1.15] w-full font-mono">
                            Build World Class <ContainerTextFlip words={words.map((e) => e.text)}/> at <ContainerTextFlip words={words.map((e) => e.text2)}/> 
                        </h3>
              </AnimationContainer>  */}
           <p className="mt-4 text-sm tracking-tight text-muted-foreground md:text-xl text-balance max-w-4xl">
                        As a provider of innovative and high-quality products and services in the information technology and application development industry. Quantechbit offers a wide range of services that are tailored to meet the unique needs of our clients.
                    </p>
                <div className="mb-4">
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
        </MaxWidthWrapper>
    );
}

