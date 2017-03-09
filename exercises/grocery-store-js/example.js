var music = {
    type: {
        rock: "Led Zepplin",
        country: "Dustin Lynch",
        pop: ["Britney Spears", "Christina Aguilera"]
    },
    mood: ["happy", "depressing", "reflective"],
    age : ["1980s", "1990s", "2000s", "2010s"],
    findBestArtist: function () {
        return (music.type.pop[Math.floor(Math.random()*music.type.pop.length)]);
    }
};
