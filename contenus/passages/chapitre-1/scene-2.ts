const passage={
    id: "scene-2",
    number: "34",
    resume: `scène 2`,
    texte: [`texte de la scène 2, ce texte est vraiment très intéressant, on y apprend beaucoup de choses.`,],
    illustration: null, 
    choix: [
        {
            texte: `choix 1`,
            destination: "scene-1"
        },
        {
            texte: `choix 2`,
            destination: "scene-3"
        }
    ]
};

export default passage;