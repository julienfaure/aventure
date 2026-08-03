const passage={
    id: "scene-1",
    number: "170",
    resume: `scène 1`,
    texte: [`texte de la scène 1, ce texte est vraiment très intéressant, on y apprend beaucoup de choses.`,],
    illustration: null, 
    choix: [
        {
            texte: `choix 1`,
            destination: "scene-2"
        },
        {
            texte: `choix 2`,
            destination: "scene-3"
        }
    ]
};

export default passage;