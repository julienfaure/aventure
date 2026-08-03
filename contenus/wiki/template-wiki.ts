export type WikiPage = {
  slug: string;

  // Nom de la page
  titre: string;

  // Court résumé affiché juste sous le titre
  resume?: string;

  // Contenu principal
  sections: WikiSection[];

  // Petit encadré à droite (optionnel)
  infobox?: WikiInfo[];

  // Pages liées
  voirAussi?: string[];

  // Catégories
  categories?: string[];

  // Débloquée ou non (pour le développement)
  debloquee?: boolean;
};

export type WikiSection = {
  titre: string;
  contenu: string[];
};

export type WikiInfo = {
  label: string;
  valeur: string;
};