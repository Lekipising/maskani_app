import Link from "next/link";
import React from "react";

export function FilledLinkButton({ to, text }) {
  return (
    <Link
      href={to}
      className="bg-yellow text-lg px-6 py-1 rounded-lg font-semibold text-white"
    >
      {text}
    </Link>
  );
}

export function OutlinedLinkButton({ to, text }) {
  return (
    <Link
      className="text-yellow px-6 py-1 text-lg rounded-lg font-semibold border-2 border-yellow"
      href={to}
    >
      {text}
    </Link>
  );
}
