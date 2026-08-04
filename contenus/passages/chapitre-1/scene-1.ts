const passage={
    id: "scene-1",
    number: "1",
    resume: `Marqueurs d'abandon des lieux. Premier choix du héros.`,   
    texte: [`Depuis l'ombre d'un des platanes qui bordent la place de l'église, vous observez la rue commerçante du village.
    Il n'y a que vos traces de pas dans l'épaisse couche de poussière crayeuse blanche qui recouvre aussi vos bottes.
    Le ciel dégagé vous permet d'apercevoir le `, 
    {
        wiki: "pic-du-nid-du-monde",
        texte: "Pic du Nid du Monde",
    },
    `, encore enneigé, 
    s'élevant au dessus des versants vordoyants.
    `],
    illustration: null, 
     choix: [
        {
            texte: `Se diriger vers le parvis de l'église (qui est aussi la place du village).`,
            destination: "PlaceCentrale"
        },
        {
            texte:`Descendre la rue vers la taverne`,
            destination: 'Boulangerie'
        },
        {
            texte:`Monter la rue vers le maréchal ferrand.`,
            destination: 'Boucherie'
        }
    ]
};

export default passage;