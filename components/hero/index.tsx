import Image from "next/image";
import React from "react";
import BgImage from "../../public/bg_main.jpg";

export default function Hero() {
  return (
    <section className="w-[90%] mx-auto mt-8 h-[70vh] relative">
      <div className="w-[50%] top-0 translate-y-[30%] flex flex-col gap-4 absolute left-0 z-30">
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
