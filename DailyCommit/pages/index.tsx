import Head from "next/head";
import React from "react";
import GlobalNavBar from "../components/global/navbar";
import Hero from "../components/hero";
import Properties from "../components/properties";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maskani App - Your guide through the real estate jungle</title>
        <meta
          property="title"
          content={"Maskani App - Your guide through the real estate jungle"}
        />
        <meta
          property="og:title"
          content={"Maskani App - Your guide through the real estate jungle"}
        />
        <meta
          name="twitter:title"
          content={"Maskani App - Your guide through the real estate jungle"}
        />
        <meta
          name="description"
          content={"Maskani App - Your guide through the real estate jungle"}
        />
        <meta
          property="og:description"
          content={"Maskani App - Your guide through the real estate jungle"}
        />
        <meta
          name="twitter:description"
          content={"Maskani App - Your guide through the real estate jungle"}
        />
        <meta
          property="image"
          content={
            "https://visengine.com/wp-content/uploads/2021/04/Photoreal-VR-Tour-Meraas2-min.jpg"
          }
        />
        <meta
          property="og:image"
          content={
            "https://visengine.com/wp-content/uploads/2021/04/Photoreal-VR-Tour-Meraas2-min.jpg"
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://visengine.com/wp-content/uploads/2021/04/Photoreal-VR-Tour-Meraas2-min.jpg"
          }
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1 user-scalable=no"
        />
      </Head>
      <main className="min-h-screen w-screen">
        <GlobalNavBar />
        <Hero />
        <Properties />
      </main>
    </>
  );
}
