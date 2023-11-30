import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function HomelessCountPage() {
  return (
    <div className="prose text-white">
      <h2 className="text-stone-100">State Regulation and Rights</h2>
      <p className="text-stone-400">
        There is never a clear solution to modern-day problems, especially
        homelessness. Many regulations for homeless individuals, such as law
        enforcement of panhandling, loitering, and regulated uses of public
        space, are different from state to state in the US. This makes it
        incredibly difficult to come up with a solution that works for everyone
        because each state has its own political affiliation and agenda and
        oftentimes has different opinions toward homeless individuals. The
        matter of fact is that homelessness is a nationwide problem that needs
        to be addressed on a national level instead of being addressed at the
        state level with vague regulations.
      </p>
      <h2 className="text-stone-100">Public Opinion and Response</h2>
      <p className="text-stone-400">
        People are unwilling to make space for homeless shelters because the
        creation of homeless shelters brings down property values in the nearby
        area, making people who have a home less likely to vote for and support
        the creation of shelters for homeless individuals.Furthermore, the fact
        that a majority of Americans have a wide range of misunderstandings and
        prejudices toward homelessness makes them less likely to help and even
        vote for representatives who want to help. It can proceed with the
        advocacy of this campaign, for there will be legal questions about state
        rights, public space regulations, rent regulations, funding issues, and
        even the education of the public on matters of homelessness.
      </p>
      <div>
        <Link
          href="/info/statistics"
          className="text-orange-700 flex items-center gap-2"
        >
          <span>
            <MoveLeft />
          </span>
          Statistics
        </Link>
      </div>
    </div>
  );
}
