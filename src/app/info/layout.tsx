import React from "react";
import { SectionContent, SectionHeading, InfoTab } from "../components";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BackgroundPage(props: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-3xl flex flex-col gap-6">{props.children}</div>
    </main>
  );

  // return (
  //   <main className="flex flex-col items-center mt-12 lg:mt-20">
  //     <div className="flex flex-col justify-center mx-auto">
  //       <div className="flex flex-col gap-16 lg:flex-row px-4">
  //         <div className="max-w-2xl flex flex-col gap-6 flex-[2]">
  //           <SectionHeading>Information about Homelessness</SectionHeading>
  //           <SectionContent>
  //             <div className="text-lg text-stone-300">
  //               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
  //               in eaque laborum mollitia autem soluta illo fuga sit sequi a
  //               repellendus quibusdam odio saepe ea animi!
  //             </div>
  //           </SectionContent>
  //           <div className="flex flex-col gap-4">
  //             <InfoTab
  //               title="Background"
  //               sub="Some contextual information on homelessness"
  //               link="background"
  //             />
  //             <InfoTab
  //               title="Statistics"
  //               sub="Numbers and figures on homelessness"
  //               link="statistics"
  //             />
  //             <InfoTab
  //               title="Implementation Details"
  //               sub="Challenges that prevent change"
  //               link="implementation"
  //             />
  //           </div>
  //         </div>
  //         <div className="flex-1">{props.children}</div>
  //       </div>
  //     </div>
  //   </main>
  // );
}
