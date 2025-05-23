"use client";

import React from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-transparent backdrop-blur-md shadow-lg py-10 px-6 mt-10 border-t border-[#2A0E61]"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Contact Section - Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white max-w-sm"
        >
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="text-sm text-gray-300">
            Feel free to reach out via phone or email.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            📞 <a href="tel:+919082539010" className="hover:text-purple-400 transition duration-200">+91 9082539010</a><br />
            📧 <a href="mailto:vy532555@gmail.com" className="hover:text-purple-400 transition duration-200">vy532555@gmail.com</a>
          </p>
        </motion.div>

        {/* About Section - Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white text-left"
        >
          <h3 className="font-bold text-lg mb-4">𝓥𝓲𝓴𝓪𝓼 𝓨𝓪𝓭𝓪𝓿</h3>
          <p className="text-sm text-gray-300 max-w-xs">
Full Stack Developer passionate about building digital experiences that solve real-world problems. Let’s connect and build something amazing together.          </p>
        </motion.div>
      </div>

      {/* Socials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-white mt-10 text-center"
      >
        <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          {Socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 text-white hover:text-purple-400"
            >
              <Image src={social.src} alt={social.name} width={24} height={24} />
              <span className="text-sm">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4"
      >
        &copy; {new Date().getFullYear()} Vikas Yadav. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;


