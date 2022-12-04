import Image from "next/image";
import React, { useState } from "react";
import { thousandSeparator } from "../../utils";

import { motion } from "framer-motion";
import { FilledButton } from "../global/buttons";

interface PropertyType {
  id: number;
  title: string;
  description?: string;
  price: number;
  location: string;
  image: string;
  capacity: number;
}

const sampleProperties: PropertyType[] = [
  {
    id: 0,
    title: "3 Bedroom Apartment",
    location: "Kimirinko, Kigali",
    capacity: 3,
    price: 1000000,
    image: "/house.png",
  },
  {
    id: 1,
    title: "1 Bedroom Apartment",
    location: "Kigali, Kigali",
    capacity: 1,
    price: 500000,
    image: "/house.png",
  },
  {
    id: 2,
    title: "5 Bedroom Apartment",
    location: "Bumbogo, Kigali",
    price: 2000000,
    capacity: 5,
    image: "/house.png",
  },
  {
    id: 3,
    title: "Studio Apartment",
    location: "Bumbogo, Kigali",
    price: 700000,
    capacity: 1,
    image: "/house.png",
  },
];

export default function Properties() {
  return (
    <section className="w-full md:px-0 px-4 flex gap-16 flex-col items-center mt-16">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-yellow font-bold text-3xl md:text-left text-center">
          Explore homes
        </h1>
        <p className="text-white font-medium text-lg">
          High quality, affordable and premium houses across Rwanda
        </p>
      </div>
      <div className="flex gap-6 md:px-0 px-4 justify-center flex-wrap pb-16">
        {sampleProperties.map((prp, i) => (
          <OneProperty key={prp.id} property={prp} index={i} />
        ))}
      </div>
    </section>
  );
}

function OneProperty({
  property,
  index,
}: {
  property: PropertyType;
  index?: number;
}) {
  const [btnText, setBtnText] = useState("Book a tour");
  return (
    <motion.div
      transition={{ ease: "easeIn", duration: 0.3, delay: index * 0.1 }}
      initial={{ y: 30, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 1, once: true }}
      className={`rounded-lg hover:bg-yellow/10 md:pb-6 pb-8 transition-all ease-in duration-300 gap-6 one-property p-4 flex md:flex-row flex-col md:w-[500px] w-full h-auto`}
    >
      <div className="relative md:w-[150px] md:min-w-[150px] w-full h-[180px] rounded-md">
        <Image
          src={property.image}
          fill
          className="object-cover object-center rounded-md"
          alt={property.title}
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-0 w-full justify-between">
        <h1 className="md:text-[28px] text-[22px] font-bold text-[#f8cc74]">
          {property.title}
        </h1>
        <p className="text-white tetx-[19px] font-medium flex justify-between">
          <span className="flex gap-2 text-sm items-center">
            <Image src="/location.svg" width={20} height={20} alt="location" />{" "}
            {property.location}
          </span>
          <span className="flex gap-2 text-sm items-center">
            <Image src="/price.svg" width={20} height={20} alt="location" />{" "}
            {"Rwf " + thousandSeparator(property.price)}
          </span>
        </p>
        <div className="text-white tetx-[19px] font-medium flex justify-between">
          <span className="flex gap-2 text-sm items-center">
            <Image src="/beds.svg" width={20} height={20} alt="location" />{" "}
            {property.capacity + " Bedroom"}
          </span>
          <FilledButton text={btnText} onClick={() => setBtnText("Booked!")} />
        </div>
      </div>
    </motion.div>
  );
}
