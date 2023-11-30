import { unstable_noStore } from "next/cache";
import { CreateResource } from "../components";
import { prisma } from "../_lib/prisma";
import Link from "next/link";
import { Clock } from "lucide-react";

export default async function ResearchPage() {
  unstable_noStore();
  const data = await prisma.resource.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="flex flex-col items-center max-w-3xl mx-auto gap-8">
      <div className="flex justify-between w-full items-center bg-neutral-900 p-4 rounded-md border-[0.0125rem] border-neutral-800">
        <h1 className="text-2xl font-medium">Resources to Help</h1>
        <CreateResource />
      </div>
      <ul className="flex flex-col gap-4">
        {data.map((resource) => (
          <Link href={resource.url} key={resource.id} target="_blank">
            <li className="flex flex-col items-start bg-stone-900 w-full p-4 rounded-md border-[0.0125rem] border-stone-700 hover:bg-stone-800 transition-colors">
              <div className="flex flex-col w-full">
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
    </main>
  );
}
