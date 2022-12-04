import React from "react";
import GlobalNavBar from "../components/global/navbar";
import Hero from "../components/hero";
import Properties from "../components/properties";

export default function Home() {
  return (
    <main className="min-h-screen w-screen">
      <GlobalNavBar />
      <Hero />
      <Properties />
    </main>
  );
}
