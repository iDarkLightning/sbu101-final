import { motion } from "framer-motion";
import { HeroSplash, SectionContent, SectionHeading } from "./components";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center lg:flex-row-reverse p-8">
      <div className="flex justify-center flex-1">
        <div className="max-w-2xl flex flex-col gap-4">
          <SectionHeading>The stigma of homelessness</SectionHeading>
          <SectionContent>
            <p className="text-stone-300 text-sm leading-6">
              Homelessness refers to the state of lacking a stable, safe, and
              permanent residence. It is currently one of the most complex and
              pervasive issues in our society. It encompasses a range of
              situations, from individuals living on the streets to those
              staying in temporary shelters.
            </p>{" "}
            <p className="text-stone-300 text-base leading-6">
              Despite the multifaceted causes of homelessness, there is a web of
              stigmas that often shroud the issue and thus, perpetuate
              misconceptions, create social biases and hinder empathy.Some of
              these stigmas are that all homeless individuals are lazy or
              unwilling to work, assumptions about mental health or addiction
              issues, and the misconception that homelessness is solely a result
              of poor personal choices. Other stigmas involve viewing
              homelessness as a temporary problem that individuals can easily
              overcome, overlooking the systemic factors that contribute to this
              complex issue.Such stereotypes can lead to social prejudices that
              act as a barrier to compassionately eliminating the issue and
              fostering a more empathetic community.
            </p>{" "}
          </SectionContent>
          <Link
            href="/background/homeless-count"
            className="font-medium bg-orange-700 text-stone-950 transition-all text-3xl rounded-md px-2 py-4 text-center my-4 flex items-center justify-center gap-2"
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
