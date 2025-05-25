"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Tilt from "react-parallax-tilt";

export default function HeroContent() {
  return (
        <section id="about-me" className="w-full min-h-screen flex items-center justify-center">

    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10 sm:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start" >
        {/* Welcome Tag */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] rounded-full bg-opacity-20 backdrop-blur-md flex items-center gap-2"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-white">Full Stack Developer</h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl sm:text-6xl font-extrabold text-white max-w-[600px] w-auto"
        >
          <span>
            Providing
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-text-shimmer">
              {" "}the best{" "}
            </span>
           project experience
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-4 max-w-[600px] leading-relaxed">
          I&apos;m a passionate Full Stack Developer proficient in the MERN stack, with hands-on experience
          building real-time web applications. Explore my projects to see how I blend creativity with functionality.
        </motion.p>

        {/* Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Right-side Image with Tilt Effect */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500}>
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={500}
            width={500}
            className="drop-shadow-2xl"
          />
        </Tilt>
      </motion.div>
    </motion.div>
    </section>
  );
}
