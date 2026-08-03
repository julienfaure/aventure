import passage from "../contenus/passages/introduction";
import { EB_Garamond } from "next/font/google";
export const EB = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
});


export default function Home() {
  return (
    <main className={`${EB.className} flex min-h-screen flex-col items-center bg-white px-8 pt-32`}>

      <div className="mb-8 flex w-full max-w-md items-center gap-5">
        <div className="h-px flex-1 bg-gray-500" />

        <h1 className="text-lg font-bold leading-none text-black">
          {passage.number}
        </h1>

        <div className="h-px flex-1 bg-gray-500" />
      </div>

      <p className="mb-12 max-w-xl text-[1.08 rem] leading-[1.45rem] text.indent:1.5em 
      text-justify text-xl text-gray-900">
        {passage.texte}
      </p>

      <div>
        {passage.choix.map((choix, index) => (
          <button key={choix.destination} className="mb-4 rounded-xl bg-black px-8 py-4 text-xl font-semibold text-white hover:bg-gray-800">
            {choix.texte}
          </button>
        ))}
      </div>
  
    </main>
  );
}