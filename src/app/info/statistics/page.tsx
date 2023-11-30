import clsx from "clsx";
import { ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomelessCountPage() {
  return (
    <div className="prose text-white">
      <h2 className="text-stone-100">State of Homelessness in NYC</h2>
      <div
        className={clsx(
          "p-4 transition-all border-[0.0125rem] border-stone-700 bg-stone-900 rounded-md flex items-center justify-between"
        )}
      >
        <div>
          <div className="text-2xl font-semibold">87,907</div>
          <div className={clsx("text-stone-400")}>
            Homeless people sleeping in NYC&apos;s municipal shelter system. A
            68% increase in the past decade.
          </div>
        </div>
      </div>
      <p className="text-stone-400">
        Approximately 56 percent of heads of household in shelters are Black, 32
        percent are Hispanic/Latinx, 7 percent are White, less than 1 percent
        are Asian-American or Native American, and 4 percent are of unknown
        race/ethnicity
      </p>
      <h3 className="text-stone-100">Public Surveys on Homeless Policy</h3>
      <p className="text-stone-400">
        Research shows 79% of Americans believe people should be allowed to live
        in their cars without threat of criminal prosecution. Additionally, 68%
        believe homeless people should be free from so-called “sweeps” led by
        police and sanitation departments.
      </p>
      <p className="text-stone-400">
        When it comes to policy prescriptions, 82% support expanding public
        mental health services, and 75% support supportive housing and more
        navigation centers. Moreover, the research found that about two in three
        of those surveyed support rent control.
      </p>
      <div className="flex justify-between w-full">
        <Link
          href="/info/background"
          className="text-orange-700 flex items-center gap-2"
        >
          <span>
            <MoveLeft />
          </span>
          Background
        </Link>
        <Link
          href="/info/implementation"
          className="text-orange-700 flex items-center gap-2"
        >
          Implementation Challenges
          <span>
            <MoveRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
