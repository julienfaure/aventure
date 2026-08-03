import { WikiPage } from "./template-wiki";

export const picDuNidDuMonde: WikiPage = {
  slug: "pic-du-nid-du-monde",

  titre: "Pic du Nid du Monde",

  resume:
    "Le Pic du Nid du Monde est le plus haut sommet connu des Montagnes Grises.",

  infobox: [
    {
      label: "Type",
      valeur: "Montagne",
    },
    {
      label: "Altitude",
      valeur: "Inconnue",
    },
    {
      label: "Région",
      valeur: "Montagnes Grises",
    },
  ],

  sections: [
    {
      titre: "Description",
      contenu: [
        "Le Pic du Nid du Monde domine toute la vallée.",
        "Son sommet disparaît presque toujours dans les",
      ],
    },

    {
      titre: "Histoire",
      contenu: [
        "Les premières chroniques mentionnent déjà son existence.",
      ],
    },
  ],

  voirAussi: [
    "montagnes-grises",
    "village-de-valbois",
  ],

  categories: [
    "Géographie",
    "Montagnes",
  ],

  debloquee: false,
};