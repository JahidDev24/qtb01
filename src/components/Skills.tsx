import {
  All_Skill,
  App_skill,
  Full_stack,
  Other_skill,
  Web_Skill_data,
} from "../utils/constants/index";
import React from "react";
import SkillDataProvider from "./sub/SkillDataProvider";
import AnimationContainer from "./global/animation-container";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-1 h-full relative overflow-hidden pb-20 py-2"
      style={{ transform: "scale(0.9" }}
    >
        <AnimationContainer className="bg-transparent pt-2">
          <h1 className="text-center lg:text-center text-6xl md:text-3xl !leading-[1.1] font-bold font-heading text-foreground mt-2 px-2">
            {/* From Strategy to Support — We've Got IT Covered */}
            Technologies We Live
          </h1>
          <p className="mt-4 text-center lg:text-center text-base text-muted-foreground px-2">
            Covered Gant IT Tech powers your digital evolution with cutting-edge solutions and intelligent infrastructure. From <br /> strategic innovation to real-time support, we engineer IT that scales with the future.
          </p>
        </AnimationContainer>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Web_Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {App_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {All_Skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/image/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
