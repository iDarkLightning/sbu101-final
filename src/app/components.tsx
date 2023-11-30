"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { createResource } from "./_lib/actions";

export const HeroSplash = () => {
  return (
    <motion.img
      className="max-h-[42rem] object-cover flex-1 rounded-md"
      src="https://images.unsplash.com/photo-1526168637801-e9f490d6bc04?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="splash"
    />
  );
};

export const SectionHeading: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <motion.h1
      className="text-5xl lg:text-7xl font-bold uppercase font-serif tracking-wide"
      // layoutId="section-heading"
    >
      {props.children}
    </motion.h1>
  );
};

export const SectionContent: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <motion.div className="flex flex-col gap-4">{props.children}</motion.div>
  );
};

export const InfoTab: React.FC<
  React.PropsWithChildren<{
    title: string;
    sub: string;
    link: string;
  }>
> = (props) => {
  return (
    <Link href={`/info/${props.link}`}>
      <div
        className={clsx(
          "p-4 transition-all border-[0.0125rem] border-stone-800 rounded-md flex items-center justify-between hover:bg-stone-800"
        )}
      >
        <div>
          <div className="text-2xl font-semibold">{props.title}</div>
          <div className={clsx("text-stone-400")}>{props.sub}</div>
        </div>
        <ChevronRight />
      </div>
    </Link>
  );
};

export const Nav = () => {
  const [segment] = useSelectedLayoutSegments();

  return (
    <nav className="flex flex-col justify-between gap-4 lg:flex-row py-4 sticky top-0 bg-stone-950/60 backdrop-blur-sm">
      <Link href="/" className="font-bold text-xl">
        Homeless Stigma.
      </Link>
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
            segment === "info" && "text-orange-700"
          )}
        >
          <Link href="/info">Information</Link>
        </li>
        <li
          className={clsx(
            "font-medium",
            segment === "resources" && "text-orange-700"
          )}
        >
          <Link href="/resources">Resources</Link>
        </li>
        <li
          className={clsx(
            "font-medium",
            segment === "citations" && "text-orange-700"
          )}
        >
          <Link href="/citations">Citations</Link>
        </li>
      </ul>
    </nav>
  );
};

export const CreateResource = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button className="px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded-md text-stone-950 font-medium flex items-center gap-2">
            <span>
              <Plus />
            </span>
            Add
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add a Resources</DialogTitle>
            <DialogDescription>
              Add a resource to help the homeless community. Please do not add
              any irrelevant resources. Thank you!
            </DialogDescription>
          </DialogHeader>
          <form action={createResource}>
            <div className="grid gap-3 py-4">
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="name" className="font-medium">
                  Label
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="rounded-md bg-stone-700 px-4 py-2 border-[0.0125rem] border-stone-600 shadow-inner placeholder:stone-200"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="url" className="font-medium">
                  Link
                </label>
                <input
                  type="url"
                  name="url"
                  id="url"
                  required
                  className="rounded-md bg-stone-700 px-4 py-2 border-[0.0125rem] border-stone-600 shadow-inner placeholder:stone-200"
                />
              </fieldset>
              <fieldset className="flex flex-col gap-2">
                <label htmlFor="description" className="font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  required
                  className="rounded-md bg-stone-700 px-4 py-2 border-[0.0125rem] border-stone-600 shadow-inner placeholder:stone-200"
                />
              </fieldset>
            </div>
            <DialogFooter>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded-md text-stone-950 font-medium flex items-center gap-2"
              >
                <span>
                  <Plus />
                </span>
                Create
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const ContentWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "max-w-[100rem] py-6 px-4 md:mx-auto md:w-[80%] lg:w-[85%] 2xl:w-[90%]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
