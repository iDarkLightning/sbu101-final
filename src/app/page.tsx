import { motion } from "framer-motion";
import { HeroSplash, SectionContent, SectionHeading } from "./components";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-row-reverse items-center mt-20">
      <div className="flex justify-center flex-1">
        <div className="max-w-2xl flex flex-col gap-4">
          <SectionHeading>The stigma of homelessness</SectionHeading>
          <SectionContent>
            <p className="text-lg text-stone-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              in eaque laborum mollitia autem soluta illo fuga sit sequi a
              repellendus quibusdam odio saepe ea animi!
            </p>{" "}
            <p className="text-stone-300">
              Consequuntur porro velit a optio error minima cum, voluptatum
              voluptates quos impedit dolorum, maiores possimus alias itaque!
            </p>{" "}
          </SectionContent>
          <Link
            href="/background/homeless-count"
            className="font-medium bg-orange-700 text-stone-950 transition-all text-3xl px-2 py-4 text-center my-4 flex items-center justify-center gap-2"
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
