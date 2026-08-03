import Link from "next/link";
import { EB_Garamond } from "next/font/google";

export const EB = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
});

type PassageProps = {
  passage: any;
};

export default function Passage({ passage }: PassageProps) {
  return (
    <main
      className={`${EB.className} flex min-h-screen flex-col items-center bg-white px-8 pt-32`}
    >
      <div className="mb-8 flex w-full max-w-md items-center gap-5">
        <div className="h-px flex-1 bg-gray-500" />

        <h1 className="text-lg font-bold leading-none text-black">
          {passage.number}
        </h1>

        <div className="h-px flex-1 bg-gray-500" />
      </div>

      <p className="mb-12 max-w-xl text-justify text-xl leading-[1.45rem] text-gray-900 [text-indent:1.5em]">
        {passage.texte.map((element: any, index: number) => {
          if (typeof element === "string") {
            return <span key={index}>{element}</span>;
          }

          return (
            <Link
              key={index}
              href={`/wiki/${element.wiki}`}
              className="text-blue-700 underline decoration-blue-700/40 underline-offset-2 hover:text-blue-900"
            >
              {element.texte}
            </Link>
          );
        })}
      </p>

      <div className="flex flex-col gap-4">
        {passage.choix.map((choix: any) => (
          <Link
            key={choix.destination}
            href={`/scene/${choix.destination}`}
            className="rounded-xl bg-black px-8 py-4 text-center text-xl font-semibold text-white hover:bg-gray-800"
          >
            {choix.texte}
          </Link>
        ))}
      </div>
    </main>
  );
}