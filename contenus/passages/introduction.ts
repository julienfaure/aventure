const passage={
    id: "introduction",
    title: "Le commencement",
    resume: `Le héros demande au compagnon de lui faire vivre une aventure.`,   
    texte: `Depuis l'ombre d'un des peupliers qui bordent la place de l'église, vous observez la seule rue du village.
    Dans l'épaisse couche de poussière crayeuse blanche qui recouvre vos bottes, seules vos traces.
    Le ciel dégagé, à défaut de vous protéger de la chaleur estivale, vous permet d'apercevoir le pic rocheux du Nid
     s'élevant au dessus des versants vordoyants.`,
    illustration: null, 
    ambiance: `Ruelle vide d'un village de montagne en plein été. Il fait chaud. 
    Le héros est à l'ombre d'un arbre sur un banc.`,
     choix: [
        {
            texte: `je veux vivre une aventure`,
            destination: "scene-1"
        }
    ]
};

export default passage;