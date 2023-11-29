import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

export default function HomelessCountPage() {
  return (
    <div className="prose text-white">
      <h2 className="text-stone-100">Lorem ipsum dolor</h2>
      <p className="text-stone-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        deserunt possimus soluta, ipsum id tempore expedita sint quaerat
        exercitationem eligendi laborum sed. Fuga sapiente beatae aspernatur
        deserunt ducimus. Dolor dignissimos architecto repellat exercitationem
        quam, consequatur voluptates fuga totam eius doloribus!
      </p>
      <h2 className="text-stone-100">Different Lorem ipsum dolor</h2>
      <p className="text-stone-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        deserunt possimus soluta, ipsum id tempore expedita sint quaerat
        exercitationem eligendi laborum sed. Fuga sapiente beatae aspernatur
        deserunt ducimus. Dolor dignissimos architecto repellat exercitationem
        quam, consequatur voluptates fuga totam eius doloribus!
      </p>
      <h2 className="text-stone-100">Different Lorem ipsum dolor sit amet</h2>
      <p className="text-stone-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        deserunt possimus soluta, ipsum id tempore expedita sint quaerat
        exercitationem eligendi laborum sed. Fuga sapiente beatae aspernatur
        deserunt ducimus. Dolor dignissimos architecto repellat exercitationem
        quam, consequatur voluptates fuga totam eius doloribus!
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