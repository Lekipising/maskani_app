import Image from "next/image";
import React from "react";
import { thousandSeparator } from "../../utils";

import { motion } from "framer-motion";

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
    <section className="w-full flex gap-16 flex-col items-center mt-16">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-yellow font-bold text-3xl ">Explore homes</h1>
        <p className="text-white font-medium text-lg">
          High quality, affordable and premium houses across Rwanda
        </p>
      </div>
      <div className="flex gap-6 justify-center flex-wrap pb-16">
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
  return (
    <motion.div
      transition={{ ease: "easeIn", duration: 0.3, delay: index * 0.1 }}
      initial={{ y: 30, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ amount: 1 }}
      className={`rounded-lg hover:bg-yellow/10 transition-all ease-in duration-300 gap-6 one-property p-4 flex w-[500px] h-auto`}
    >
      <div className="relative w-[150px] h-[180px] rounded-md">
        <Image
          src={property.image}
          fill
          className="object-cover object-center rounded-md"
          alt={property.title}
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-[28px] font-bold text-[#f8cc74]">
          {property.title}
        </h1>
        <p className="text-white tetx-[19px] font-medium flex justify-between">
          <span className="flex gap-2 items-center">
            <Image src="/beds.svg" width={20} height={20} alt="location" />{" "}
            {property.capacity + " Bedroom"}
          </span>
          <span className="flex gap-2 items-center">
            <Image src="/price.svg" width={20} height={20} alt="location" />{" "}
            {"Rwf " + thousandSeparator(property.price)}
          </span>
        </p>
        <div className="text-white tetx-[19px] font-medium flex justify-between">
          <div className="flex gap-2 items-center">
            <Image src="/location.svg" width={20} height={20} alt="location" />{" "}
            {property.location}
          </div>
          <a
            href="https://bit.ly/maskani-virtual-demo"
            target={"_blank"}
            className="bg-yellow px-8 py-1 rounded-xl font-bold"
            rel="noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </motion.div>
  );
}
