import Image from "next/image";
import Acmerop from "@/assets/images/avatar-florence-shaw.jpg"
import { Spotlight } from "@/components/ui/Spotlight";
import React from 'react'
import { SparklesPreview } from "@/components/SparklePriview";

export default function Hero() {
 

    return (
        <div className="py-32 md:py-48 lg:py-60">
            <Spotlight
                className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
                fill='pink'
            />
            <Spotlight
                className="h-[80vh] w-[50vw] top-10 left-full"
                fill="purple"
            /> 
            <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            <div>
                <SparklesPreview/>
                
            </div>
            <div className="container">

                <div className="flex flex-col items-center">
                    <Image src={Acmerop} alt={"tag"} className="size-[100px]" />
                    <div className=" bg-gray-900 border border-gray-800 px-4 inline-flex items-center gap-4 rounded-lg">
                        <div className="bg-blue-700 size-2.5 rounded-full"></div>
                        <div className="text-sm font-medium">Avialable for new projects</div>

                    </div >
                    <div className="max-w-lg mx-auto">
                        <h1 className="font-serif text-3xl md:5xl text-center mt-8 tracking-wide">Building a creative world with executing your idea's into reality</h1>
                        <p className="text-center mt-4 text-white/60 md:text-lg">Don't know where to start be help them to grow your bussiness to the next level</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-lg">
                            <span className="font-semibold"> Explore our work ⬇️</span>

                        </button>
                        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 rounded-lg px-6 h-12">
                            <span>👋</span>
                            <span className="font-semibold text-black"> Let's connect</span>

                        </button>
                    </div>
                </div>
            </div>
        </div>);


}
