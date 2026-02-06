"use client";

import Cake from "@/public/landing/track1.svg";
import Bear from "@/public/landing/track2.svg";
import StrawberryCake from "@/public/landing/track3.svg";
import Framer from "@/public/landing/track4.svg";
import { easeOut, motion } from "motion/react";

import Image from "next/image";

const tracks = [
  {
    image: Cake,
    title: "Slice of Insight",
    customStyles: "text-landing-brown-50",
  },
  {
    image: Bear,
    title: "Cookie Cutter Challenge",
    customStyles: "text-white",
  },
  {
    image: StrawberryCake,
    title: "Sustainable Sweets",
    customStyles: "text-landing-brown-50",
  },
  {
    image: Framer,
    title: "Framaccino",
    customStyles: "text-white",
  },
];

const trackAnimation = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { y: 0, opacity: 1 },
  transition: { delay: 0.2 * index, duration: 0.5 },
  viewport: { once: true },
});

const hoverAnimation = () => ({
  whileHover: { scale: 1.08, transition: { duration: 0.3, ease: easeOut } },
});

const Tracks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="font-inter text-landing-brown-300 py-8 text-center text-4xl font-bold md:text-7xl">
        TRACKS
      </p>
      <div className="flex flex-col flex-wrap justify-center gap-12 py-12 md:w-4/5 md:flex-row">
        {tracks.map(({ image, title, customStyles }, index) => (
          <motion.div key={index} {...trackAnimation(index)}>
            <motion.div
              {...hoverAnimation()}
              className="relative z-20 flex items-center justify-center"
            >
              <p
                className={`font-inter absolute top-20 z-10 w-48 text-center text-2xl font-semibold break-words md:top-28 ${customStyles}`}
              >
                {title}
              </p>
              <Image
                key={index}
                src={image}
                alt={title}
                className="w-3/4 md:w-full"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
