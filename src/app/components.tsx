"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  useParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import React from "react";

export const HeroSplash = () => {
  return (
    <motion.img
      className="h-[42rem] object-cover flex-1 ml-32 mr-8 rounded-md"
      src="https://images.unsplash.com/photo-1526168637801-e9f490d6bc04?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="splash"
    />
  );
};

export const SectionHeading: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <motion.h1
      className="text-7xl font-bold uppercase font-serif tracking-wide"
      layoutId="section-heading"
    >
      {props.children}
    </motion.h1>
  );
};

export const SectionContent: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <motion.div
      className="max-w-xl flex flex-col gap-4"
      layoutId="section-content"
    >
      {props.children}
    </motion.div>
  );
};

export const Stat: React.FC<
  React.PropsWithChildren<{
    count: number;
    label: string;
    stat: string;
  }>
> = (props) => {
  const count = new Intl.NumberFormat("en-US").format(props.count);
  const segment = useSelectedLayoutSegment();

  return (
    <Link href={`/background/${props.stat}`}>
      <div
        className={clsx(
          "p-4 transition-all border-2 rounded-md flex items-center justify-between",

          segment === props.stat
            ? "bg-orange-700 text-stone-950 border-transparent"
            : " border-stone-700"
        )}
      >
        <div>
          <div className="text-3xl font-bold">{count}</div>
          <div className="text-lg">{props.label}</div>
        </div>
        <ChevronRight />
      </div>
    </Link>
  );
};

export const Nav = () => {
  const [segment] = useSelectedLayoutSegments();

  console.log(segment);

  return (
    <nav className="flex justify-between gap-4 p-4 mx-16 my-4">
      <p className="font-bold text-xl">Homeless Stigma.</p>
      <ul className="flex gap-4">
        <li
          className={clsx(
            "font-medium",
            segment === undefined && "text-orange-700"
          )}
        >
          <Link href="/">Home</Link>
        </li>

        <li
          className={clsx(
            "font-medium",
            segment === "background" && "text-orange-700"
          )}
        >
          <Link href="/background">Background</Link>
        </li>
        <li
          className={clsx(
            "font-medium",
            segment === "how-to=help" && "text-orange-700"
          )}
        >
          <Link href="/how-to-help">How to Help</Link>
        </li>
      </ul>
    </nav>
  );
};
