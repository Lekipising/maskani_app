import Image from "next/image";
import React from "react";
import BgImage from "../../public/bg_main.jpg";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-[90%] mx-auto mt-8 md:h-[70vh] max-h-[600px] h-[100vh] relative">
      <motion.div
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute hidden md:block border-yellow origin-top-left border-l-2 border-t-2 z-50 left-0 top-0 w-8 h-8 rounded-tl-lg"
      />
      <motion.div
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute hidden md:block border-yellow origin-top-left border-l-2 border-b-2 z-50 left-0 bottom-0 w-8 h-8 rounded-bl-lg"
      />
      <div className="md:w-[50%] w-full top-0 md:translate-y-[30%] flex flex-col gap-4 absolute left-0 z-30">
        <h1 className="text-white text-[72px]">
          Your guide through the real estate jungle{" "}
        </h1>
        <p className="text-white text-xl font-medium">
          <span className="text-yellow font-bold">Maskani, </span> is an
          augmented reality web platform that recreates the life-like experience
          of walking inside a real-sized house in any location, providing users
          a unique chance to visit the desired property without traveling miles
          away.
        </p>
      </div>
      <div className="absolute right-0 top-0 z-10 w-full">
        <div className="relative w-full h-[70vh] rounded-lg">
          <Image
            src={BgImage}
            fill
            className="object-cover object-center rounded-lg"
            alt="Maskani App Welcome"
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="absolute inset-0 overlay h-[70vh] w-[70%] z-20"></div>
    </section>
  );
}
