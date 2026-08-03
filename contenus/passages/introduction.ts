const passage={
    id: "introduction",
    number: "1",
    resume: `Le héros demande au compagnon de lui faire vivre une aventure.`,   
    texte: [`Depuis l'ombre d'un des platanes qui bordent la place de l'église, vous observez la rue commerçante du village.
    Il n'y a que vos traces de pas dans l'épaisse couche de poussière crayeuse blanche qui recouvre aussi vos bottes.
    Le ciel dégagé vous permet d'apercevoir le `, 
    {
        wiki: "pic-du-nid-du-monde",
        texte: "Pic du Nid du Monde",
    },
    `, encore enneigé, 
    s'élevant au dessus des versants vordoyants.
    Vous pestez contre le bruit lointain de la mine qui vous empêche de dormir, de jour comme de nuit.
    Vous reconnaissez toutefois que votre agacement trahit surtout votre ennui profond. Vous vous tournez vers votre compagnon:
    `],
    illustration: null, 
     choix: [
        {
            texte: `je veux vivre une aventure`,
            destination: "scene-1"
        }
    ]
};

export default passage;