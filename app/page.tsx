export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-8">

      <h1 className="mb-8 text-5xl font-bold text-white">
        Compagnon
      </h1>

      <p className="mb-12 max-w-2xl text-left text-xl leading-8 text-gray-300">
        Blablablabla...
        Ici viendra l'introduction de ton jeu.
        Tu pourras expliquer que le joueur ne lit pas une histoire,
        mais qu'il va réellement la vivre accompagné d'un mystérieux personnage.
      </p>

      <button className="rounded-xl bg-white px-8 py-4 text-xl font-semibold text-black hover:bg-gray-200">
        Je veux vivre une aventure
      </button>

    </main>
  );
}