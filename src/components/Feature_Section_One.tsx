import { cn } from "@/lib/util";
import {
  IconBrandAndroid,
  IconCameraBitcoin,
  IconChartBar,
  IconCloudComputing,
  IconCpu,
  IconHeadphones,
  IconLayoutDashboard,
  IconShieldLock,
  IconTopologyStar3,
  IconWorldWww,
} from "@tabler/icons-react";
import AnimationContainer from "./global/animation-container";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Smart Mobile App Development",
      description:
        "We build high-performance apps tailored for Android and iOS, optimized for usability, speed, and scalability.",
      icon: <IconBrandAndroid />,
    },
    {
      title: "Responsive Web Development",
      description:
        "Crafting modern, scalable websites and platforms with optimized performance across all devices.",
      icon: <IconWorldWww />,
    },
    {
      title: "Scalable System Architecture",
      description:
        "We design resilient systems built to handle growth, integrate seamlessly, and deliver long-term performance.",
      icon: <IconTopologyStar3 />,
    },
    {
      title: "User-Centered UI/UX Design",
      description:
        "Creating intuitive, beautiful interfaces that drive engagement and deliver seamless user experiences.",
      icon: <IconLayoutDashboard />,
    },
    {
      title: "Cloud Integration & Support",
      description:
        "Deploy, manage, and scale effortlessly with our secure and efficient cloud solutions.",
      icon: <IconCloudComputing />,
    },
    {
      title: "24/7 AI-Powered Customer Support",
      description:
        "We’re always here. Our AI support agents ensure round-the-clock assistance with real-time solutions.",
      icon: <IconHeadphones />,
    },
    {
      title: "Advanced Data Security Solutions",
      description:
        "We prioritize your data with top-tier encryption, threat monitoring, and compliance-focused protection.",
      icon: <IconShieldLock />,
    },
    {
      title: "End-to-End Media Production",
      description:
        "From concept to final cut—our team delivers high-quality media content, video editing, and creative assets.",
      icon: <IconCameraBitcoin />,
    },
    {
      title: "Automation & AI Integration",
      description:
        "Supercharge your workflows with intelligent automation and custom AI models built for your business needs.",
      icon: <IconCpu />,
    },
    {
      title: "IT Consulting & Strategy",
      description:
        "Unlock your business’s tech potential with expert consulting, roadmapping, and digital strategy planning.",
      icon: <IconChartBar />,
    },
  ];
  
  
  return (
    <div className="flex flex-col justify-center items-center text-center pb-6 px-10">
     <AnimationContainer>
     <h1 className="text-center lg:text-center text-6xl md:text-3xl !leading-[1.1] font-bold font-mono font-heading text-foreground mt-2 px-2">
       {/* From Strategy to Support — We've Got IT Covered */}
       Creative Solutions for Complex Challenges
          </h1>
          <p className="mt-4 text-center lg:text-center text-base text-muted-foreground px-2">
          Covered Gant IT Tech powers your digital evolution with cutting-edge solutions and intelligent infrastructure. From <br/> strategic innovation to real-time support, we engineer IT that scales with the future.
          </p>
     </AnimationContainer>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  relative z-10 py-10 px-10 w-full">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
   
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-5 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 5) && "lg:border-l dark:border-neutral-800",
        index < 5 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 5 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 5 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 lg:px-12 text-neutral-400  dark:text-neutral-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 lg:px-13">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
