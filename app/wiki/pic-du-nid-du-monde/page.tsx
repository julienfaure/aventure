import { picDuNidDuMonde } from "@/contenus/wiki/pic-du-nid-du-monde";

export default function PagePicDuNidDuMonde() {
  const page = picDuNidDuMonde;

  return (
    <main className="min-h-screen bg-white px-8 py-10 text-gray-900">
      <article className="mx-auto max-w-4xl">
        <h1 className="border-b border-gray-400 pb-2 font-serif text-4xl">
          {page.titre}
        </h1>

        {page.resume && (
          <p className="mt-5 text-lg leading-7">
            {page.resume}
          </p>
        )}

        {page.sections.map((section) => (
          <section key={section.titre} className="mt-8">
            <h2 className="border-b border-gray-300 pb-1 font-serif text-2xl">
              {section.titre}
            </h2>

            {section.contenu.map((paragraphe, index) => (
              <p key={index} className="mt-4 leading-7">
                {paragraphe}
              </p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}