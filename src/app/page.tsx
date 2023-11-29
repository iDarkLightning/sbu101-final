import { motion } from "framer-motion";
import { HeroSplash, SectionContent, SectionHeading } from "./components";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center lg:flex-row-reverse gap-8 lg:gap-16">
      <div className="flex justify-center flex-1">
        <div className="max-w-2xl flex flex-col gap-4">
          <SectionHeading>The stigma of homelessness</SectionHeading>
          <SectionContent>
            <p className="text-stone-300 leading-6">
              Homelessness refers to the state of lacking a stable, safe, and
              permanent residence. It is currently one of the most complex and
              pervasive issues in our society. It encompasses a range of
              situations, from individuals living on the streets to those
              staying in temporary shelters.
            </p>{" "}
          </SectionContent>
          <Link
            href="/info"
            className="font-medium bg-orange-700 hover:bg-orange-600 hover:underline text-stone-950 transition-all text-3xl rounded-md px-2 py-4 text-center my-4 flex items-center justify-center gap-2"
          >
            Learn More
            <span>
              <ChevronRight className="h-8 w-8 mt-1" />
            </span>
          </Link>
        </div>
      </div>
      <HeroSplash />
    </main>
  );
}
