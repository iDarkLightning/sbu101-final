import { redirect } from "next/navigation";
import { InfoTab, SectionContent, SectionHeading } from "../components";
import Link from "next/link";
import { ChevronRight, MoveRight } from "lucide-react";

export default function BackgroundPage() {
  return (
    <>
      <h1 className="text-5xl uppercase font-semibold font-serif">
        Homelessness in Detail
      </h1>
      <SectionContent>
        <p className="text-stone-300 text-base leading-6">
          Despite the multifaceted causes of homelessness, there is a web of
          stigmas that often shroud the issue and thus, perpetuate
          misconceptions, create social biases and hinder empathy.Some of these
          stigmas are that all homeless individuals are lazy or unwilling to
          work, assumptions about mental health or addiction issues, and the
          misconception that homelessness is solely a result of poor personal
          choices. Other stigmas involve viewing homelessness as a temporary
          problem that individuals can easily overcome, overlooking the systemic
          factors that contribute to this complex issue.Such stereotypes can
          lead to social prejudices that act as a barrier to compassionately
          eliminating the issue and fostering a more empathetic community.
        </p>{" "}
      </SectionContent>
      <div className="flex flex-col gap-4">
        <InfoTab
          title="Background"
          sub="Some contextual information on homelessness"
          link="background"
        />
        <InfoTab
          title="Statistics"
          sub="Numbers and figures on homelessness"
          link="statistics"
        />
        <InfoTab
          title="Implementation Details"
          sub="Challenges that prevent change"
          link="implementation"
        />
        <div className="flex justify-end">
          <Link
            href="/resources"
            className="text-orange-700 flex items-center gap-2 underline font-medium"
          >
            Resources to Help
            <span>
              <MoveRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
