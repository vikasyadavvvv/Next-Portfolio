"use client"
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // for mobile icon toggle
import { Socials } from "@/constants"; // Import Socials from the constants file
import Image from "next/image";

const scrollToSection = (id:string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 bg-[#030014c2] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 z-50 px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between px-2">
        {/* Logo / Name */}
        <div
          onClick={() => scrollToSection("about-me")}
          className="cursor-pointer"
        >
          <h1 className="text-xl md:text-4xl font-semibold text-white">
            𝓥𝓲𝓴𝓪𝓼 𝓨𝓪𝓭𝓪𝓿
          </h1>
        </div>

        {/* Desktop Nav Menu */}
        <div className="hidden md:flex w-[500px] items-center justify-center">
          <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200 text-sm shadow-md">
            {["about-me", "skills", "projects"].map((section) => (
              <div
                key={section}
                onClick={() => scrollToSection(section)}
                className="cursor-pointer capitalize px-3 py-1 hover:text-purple-400 transition-all duration-300"
              >
                {section.replace("-", " ")}
              </div>
            ))}
          </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link} // Use the link from the Socials array
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security for external links
              className="cursor-pointer hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#030014d6] backdrop-blur-md shadow-lg py-4 px-6">
          <ul className="space-y-4 text-white">
            {["about-me", "skills", "projects"].map((section) => (
              <li
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setIsMobileMenuOpen(false);
                }}
                className="capitalize cursor-pointer hover:text-purple-400"
              >
                {section.replace("-", " ")}
              </li>
            ))}
            <div className="flex gap-4 pt-2">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link} // Use the link from the Socials array
                  target="_blank" // Opens in a new tab
                  rel="noopener noreferrer" // Security for external links
                  className="cursor-pointer"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
