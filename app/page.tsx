import passage from "../contenus/passages/introduction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-8">

      <h1 className="mb-8 text-5xl font-bold text-black">
        {passage.title}
      </h1>

      <p className="mb-12 max-w-2xl text-left text-xl leading-8 text-gray-800">
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