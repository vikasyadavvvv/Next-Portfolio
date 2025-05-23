"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
 <div className="w-full h-auto flex flex-col items-center justify-center z-[1] px-4 text-center">
  <motion.div
    initial="hidden"
    animate="visible"
    variants={slideInFromTop}
    className="Welcome-box py-2 px-3 border border-[#7042f88b] opacity-90 flex items-center gap-2"
  >
    <SparklesIcon className="text-[#b49bff] h-5 w-5" />
    <h1 className="Welcome-text text-sm md:text-base">
      Tools I Use to Build Scalable Web Apps
    </h1>
  </motion.div>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={slideInFromLeft(0.5)}
    className="font-medium mt-3 mb-4 text-white text-2xl sm:text-3xl md:text-4xl"
  >
    Full Stack Technologies at Your Service
  </motion.div>

  <motion.div
    initial="hidden"
    animate="visible"
    variants={slideInFromRight(0.5)}
    className="text-gray-300 mt-2 mb-8 text-base sm:text-lg md:text-xl font-light"
  >
𝕱𝖗𝖔𝖒 𝕱𝖗𝖔𝖓𝖙𝖊𝖓𝖉 𝖋𝖑𝖆𝖎𝖗 𝖙𝖔 𝕭𝖆𝖈𝖐𝖊𝖓𝖉 𝖇𝖗𝖆𝖎𝖓𝖘 — 𝖍𝖊𝖗𝖊’𝖘 𝖜𝖍𝖆𝖙 𝖕𝖔𝖜𝖊𝖗𝖘 𝖒𝖞 𝖕𝖗𝖔𝖏𝖊𝖈𝖙𝖘  </motion.div>
</div>

  );
};

export default SkillText;
