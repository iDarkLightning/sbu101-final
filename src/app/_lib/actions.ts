"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma";

export const createResource = async (data: FormData) => {
  await prisma.resource.create({
    data: {
      name: data.get("name") as string,
      description: data.get("description") as string,
      url: data.get("url") as string,
    },
  });

  revalidatePath("/resources");
};
