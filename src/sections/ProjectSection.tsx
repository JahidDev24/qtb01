import { Marquee } from "@/components/magicui/marquee";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import AnimationContainer from "@/components/global/animation-container";
import MagicBadge from "@/components/ui/magic-badge";
const project = [
  {
    title: "Cracker.At",
    discription: "Keep Prepare For Jobs",
    tag: ["Andriod", "IoS"],
    url: "https://quantechbit.com/images/portfolio-1.jpg",
    img: "https://quantechbit.com/images/portfolio-1.jpg",
  },
  {
    title: "Book-Worm",
    discription: "Source to Sell/Buy Books",
    tag: ["Andriod", "IoS"],
    url: "https://quantechbit.com/images/portfolio-2.jpg",
    img: "https://quantechbit.com/images/portfolio-2.jpg",
  },
  {
    title: "Zenith Mice",
    discription: "Plan You Company Holiday.",
    tag: ["Andriod", "IoS", "Web"],
    url: "https://quantechbit.com/images/portfolio-2.jpg",
    img: "https://quantechbit.com/images/portfolio-2.jpg",
  },
  {
    title: "SoftChip",
    discription: "An Smart Alarm App",
    tag: ["Web Application"],
    url: "https://quantechbit.com/images/portfolio-2.jpg",
    img: "https://quantechbit.com/images/portfolio-2.jpg",
  },
  {
    title: "HomeDoc",
    discription: "Debities Predictions Application",
    tag: ["Andriod", "IoS"],
    url: "https://quantechbit.com/images/portfolio-3.jpg",
    img: "https://quantechbit.com/images/portfolio-3.jpg",
  },
  {
    title: "ACL Explosives LLP",
    discription: "Generate QR/Sheet Automation",
    tag: ["Andriod", "Web Application"],
    url: "https://quantechbit.com/images/portfolio-6.jpg",
    img: "https://quantechbit.com/images/portfolio-6.jpg",
  },
  {
    title: "ITNobel",
    discription: "Bussiness WebSite",
    tag: ["Web Page"],
    url: "https://quantechbit.com/images/portfolio-4.jpg",
    img: "https://quantechbit.com/images/portfolio-4.jpg",
  },
  {
    title: "Iskcondamodardesh",
    discription: "A dubai Based App for arti,devote,depdaan and more.",
    tag: ["Web Page", "Dubai based"],
    url: "https://quantechbit.com/images/portfolio-8.jpg",
    img: "https://quantechbit.com/images/portfolio-8.jpg",
  },


];

const firstRow = project.slice(0, project.length);

export function ProjectSection() {
  return (
    <div>

      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-4  mx-auto">
          <MagicBadge title="Work Done" />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            Yes, We Delivered Successfully
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground px-20 ">
            Our client is a leading provider of innovative and high-quality productsand services in the technology sector. With a strong commitment tocustomer satisfaction, they have built a reputation for excellence andreliability in the industry. Their team of experienced professionals isdedicated to delivering customized solutions that meet the unique needsof each client.
          </p>
        </div>
      </AnimationContainer>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s">
          {firstRow.map((pro) => (
            <AnimatedPinDemo key={pro.title} projectile={pro} />
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((pro) => (
            <AnimatedPinDemo key={pro.title} projectile={pro} />
          // <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-background"></div>
        {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
      </div>
    </div>

  );
}




function AnimatedPinDemo({ projectile }: { projectile: any }) {
  return (
    <div className="h-[20rem] w-full flex items-center justify-center ">
      <PinContainer
        title={projectile.title}
        href={projectile.url}
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[15rem] ">
          <h3 className="max-w-xs !pb-1 !m-0 font-bold  text-base text-slate-100">
            {projectile.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {projectile.discription}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-2 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 relative h-[350px]">
            <Image
              src={projectile.img}
              alt="Picture of the jk"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

        </div>
      </PinContainer>
    </div>
  );
}

