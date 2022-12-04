import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FilledLinkButton, OutlinedLinkButton } from "./buttons";
import Logo from "./logo";

export default function GlobalNavBar() {
  const router = useRouter();
  return (
    <header className="w-[90%] mx-auto items-center flex justify-between">
      <Logo />
      <div className="flex gap-12 justify-center w-max">
        <OneLink to="/" text="Home" isActive={router.pathname === "/"} />
        <OneLink
          to="/"
          text="Explore"
          isActive={router.pathname === "explore"}
        />
        <OneLink
          to="/"
          text="Agents"
          isActive={router.pathname === "agents"}
        />
      </div>
      <div className="flex justify-center gap-6">
        <OutlinedLinkButton to={"/"} text={"Join now"} />
        <FilledLinkButton to={"/"} text={"Login"} />
      </div>
    </header>
  );
}

function OneLink({
  to,
  text,
  isActive,
}: {
  to: string;
  text: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={to}
      className={`text-white px-4 py-1 rounded-md font-medium text-lg ${
        isActive ? "bg-yellow/10" : ""
      } transition-all ease-in duration hover:bg-yellow/10`}
    >
      {text}
    </Link>
  );
}
