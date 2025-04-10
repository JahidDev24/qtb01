
import { IconCloud } from "@/components/magicui/icon-cloud";
import { BorderBeam } from "@/components/ui/border-beam";
import { LampContainer } from "@/components/ui/lamp";
import AnimationContainer2 from "@/components/global/animation-container2";
import { ParallaxScroll } from "@/components/ui/Parallex-scroll";
import { FunctionComponent } from "react";
import Skills from "@/components/Skills";
// import { motion } from "framer-motion";




export default function Feturesection() {

  return (
    <AnimationContainer2 delay={0.4}
      className="relative self-center pt-16 pb-33 md:py-30 px-12 bg-transparent mx-auto"
      mywidth="100%">
      <div className="relative">
        {/* Background Gradient Layer */}
        <div className="absolute md:top-[3%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>

        {/* Main Content Box */}
        <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl backdrop-blur-3xl relative z-10">
          <BorderBeam size={250} duration={12} delay={9} />

          <ParallaxScroll className="bg-transparent rounded-2xl shadow-md ">
            {[<Skills key ={0}/>, <FeatureOne key={1} />]}
          </ParallaxScroll>


          {/* Gradient Overlays */}
          <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
          <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
        </div>
      </div>
    </AnimationContainer2>
  );
}
const images = [
  "https://images.icon-icons.com/2107/PNG/96/file_type_flutter_icon_130599.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://tse3.mm.bing.net/th?id=OIP.xArBXEOC16qTDqmQ4EcLxwHaFm&w=358&h=358&c=7",
  "https://tse1.mm.bing.net/th?id=OIP.jap_cRszSOiPk-lu65mFLwHaEK&w=266&h=266&c=7",
  "https://tse2.mm.bing.net/th?id=OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK&w=266&h=266&c=7",
  "https://miro.medium.com/v2/resize:fit:966/1*w0N9MHgWeUpAc4w8q7mmbg.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png",
  "https://pbs.twimg.com/profile_images/993555605078994945/Yr-pWI4G_400x400.jpg",
  "https://static-00.iconduck.com/assets.00/windows-icon-255x256-9245m6g6.png",
  "https://styles.redditmedia.com/t5_3h7yi/styles/communityIcon_nsrozhr9igl91.png",
  "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  "https://www.nss.com.tw/wp-content/uploads/2022/01/14-142698_logo-android-png-android-logo-png-2019-transparent.png",
  "https://pendidikanindonesia-fib.ub.ac.id/wp-content/uploads/2023/06/AI.jpg",
  "https://images.icon-icons.com/2107/PNG/96/file_type_flutter_icon_130599.png",
  "https://cdn-icons-png.freepik.com/256/15379/15379746.png?semt=ais_hybrid",
  "https://images.icon-icons.com/2107/PNG/96/file_type_flutter_icon_130599.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://tse3.mm.bing.net/th?id=OIP.xArBXEOC16qTDqmQ4EcLxwHaFm&w=358&h=358&c=7",
  "https://tse1.mm.bing.net/th?id=OIP.jap_cRszSOiPk-lu65mFLwHaEK&w=266&h=266&c=7",
  "https://tse2.mm.bing.net/th?id=OIP.fqZ9-PPqcG_cm0k3JfoINQHaEK&w=266&h=266&c=7",
  "https://miro.medium.com/v2/resize:fit:966/1*w0N9MHgWeUpAc4w8q7mmbg.png",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC97Z8BResg5dlPqczsRCFhP6zewWX0X0e7fVPG-G7PuUZwwZVsi9OPoqJYkgqT2h0FI95SsmWzVEgpt8b8HAqFiIxZ98TFtY4lE0b8UrtVJ2HrJebRwl6C9DslsQDl9KnBIrdHS6LtkY/s1600/jetpack+compose+icon_RGB.png",
  "https://pbs.twimg.com/profile_images/993555605078994945/Yr-pWI4G_400x400.jpg",
  "https://static-00.iconduck.com/assets.00/windows-icon-255x256-9245m6g6.png",
  "https://styles.redditmedia.com/t5_3h7yi/styles/communityIcon_nsrozhr9igl91.png",
  "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  "https://www.nss.com.tw/wp-content/uploads/2022/01/14-142698_logo-android-png-android-logo-png-2019-transparent.png",
  "https://pendidikanindonesia-fib.ub.ac.id/wp-content/uploads/2023/06/AI.jpg",
  "https://images.icon-icons.com/2107/PNG/96/file_type_flutter_icon_130599.png",
  "https://cdn-icons-png.freepik.com/256/15379/15379746.png",
];


interface FeatureOneProps {
  
}
 
const FeatureOne: FunctionComponent<FeatureOneProps> = () => {
  return ( 
 <div  className="w-[100%]">
                <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                  Technologies We Live
                </h2>
                <LampContainer className="h-100">
                  <div className="absolute left-1/2 mt-40 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                    {/* <MagicBadge title="Technologia" /> */}

                    <div className="flex mt-4 size-full max-w-lg items-center justify-center overflow-hidden">
                      <IconCloud images={images} />
                    </div>
                  </div>
                </LampContainer>
              </div>
);
}