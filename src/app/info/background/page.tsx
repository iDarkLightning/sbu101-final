import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

const paragraphOne = `
For the past decade, there has been an overwhelming stigma against the
homeless, criminalizing the community as a whole, despite the lack of
harm the majority of the homeless population present to the society. The
reason behind this can be explained as “an extension of the
over‐policing of public spaces (Wilking et al., 2018). A primary target
of these state‐sanctioned sweeps are individuals experiencing
homelessness (Mitchell, 2017), guilty only because of their perceived
inability to "contribute to society" in the traditionally preferred ways
of capitalist societies (Pawson, 2007). Casey et al. (2008) used the
term "flawed consumer" to refer to those without homes, who are trapped
between the seemingly impenetrable barriers of extreme poverty and
social stigmatization.” (Craven et al.)
`;

const paragraphTwo = `
A big reason why there exists this criminalization of homelessness is
because of unfair laws placed towards them. “Laws that bar people
experiencing homelessness from sitting, sleeping, or resting in public
spaces are prevalent across the country. Some laws prohibit people from
living in vehicles. Other laws turn loitering, asking for money, and
even sharing food with people into offenses punishable by fines or
arrest. In many cities, public restrooms are not available overnight—or
at all—yet cities prohibit public urination and defecation. All these
policy choices discriminate against unhoused people as authorities eject
them from public spaces; confiscate and destroy their property; and
segregate them in often unsanitary and inhumane mass shelters and
jails”. (Forbes)
`;

const paragraphThree = `
In NYC panhandling is protected by the right to free speech under the
First Amendment, however "beg with the intent to intimidate another
person into giving money or goods, by engaging in conduct which
threatens the person solicited which by its nature would place a
reasonable person in fear of harm "(NYCLU) is considered a Class B
Misdemeanor, which could result in jail sentences. The issue here is who
decides the harmful nature of panhandling? How should homeless
individuals earn money when no one is willing to offer them a job, a
place to live, or access to basic necessities?
`;

export default function HomelessCountPage() {
  return (
    <div className="prose text-white">
      <h2 className="text-stone-100">Social Stigma</h2>
      <p className="text-stone-400">{paragraphOne}</p>
      <h2 className="text-stone-100">Causes of Stigma</h2>
      <p className="text-stone-400">{paragraphTwo}</p>
      <h2 className="text-stone-100">Homelessness in NY</h2>
      <p className="text-stone-400">{paragraphThree}</p>
      <div className="flex justify-between w-full">
        <Link href="/info" className="text-orange-700 flex items-center gap-2">
          <span>
            <MoveLeft />
          </span>
          Information
        </Link>
        <Link
          href="/info/statistics"
          className="text-orange-700 flex items-center gap-2"
        >
          Statistics
          <span>
            <MoveRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
