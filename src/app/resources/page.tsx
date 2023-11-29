import { unstable_noStore } from "next/cache";
import { CreateResource } from "../components";
import { prisma } from "../_lib/prisma";
import Link from "next/link";
import { Clock } from "lucide-react";

export default async function ResearchPage() {
  const data = await prisma.resource.findMany();

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col mx-auto p-8">
        <div className="flex justify-between w-full items-center gap-32">
          <h1 className="text-2xl font-medium">Resources to Help</h1>
          <CreateResource />
        </div>
        <ul className="flex flex-col gap-4 my-8">
          {data.map((resource) => (
            <Link href={resource.url} key={resource.id} target="_blank">
              <li className="flex flex-col items-start bg-stone-900 w-full p-4 rounded-md border-[0.0125rem] border-stone-700 hover:bg-stone-800 transition-colors">
                <div className="flex flex-col w-full max-w-2xl">
                  <div className="flex justify-between items-center w-full">
                    <p className="font-medium text-xl">{resource.name}</p>
                    <time className="flex items-center gap-2 text-sm text-stone-400 font-medium">
                      <Clock className="h-4 w-4" />
                      {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }).format(resource.createdAt)}
                    </time>
                  </div>
                  <p className="text-stone-300 line-clamp-4 mt-2">
                    {resource.description}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </main>
  );
}
