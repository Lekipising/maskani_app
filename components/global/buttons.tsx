import Link from "next/link";
import React from "react";

export function FilledLinkButton({ to, text }) {
  return (
    <Link
      href={to}
      className="bg-yellow animateLinkAsButton min-w-[120px] text-lg px-6 leading-none flex justify-center items-center py-1 rounded-lg font-semibold text-white"
    >
      {text}
    </Link>
  );
}

export function OutlinedLinkButton({ to, text }) {
  return (
    <Link
      className="text-yellow animateLinkAsButton min-w-[120px] hover:bg-yellow/50 transition-all ease-in duration-300 px-6 py-1 text-lg rounded-lg font-semibold border-2 border-yellow"
      href={to}
    >
      {text}
    </Link>
  );
}
