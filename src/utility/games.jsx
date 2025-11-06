
export const games = [
    {
        set: ["C", "A", "T", "A", "C", "E", "T", "E", "X"],
        hints: ["Puffy friend", "Game Card", "Not correct word", "Puffy friend", "Game Card", "Not correct word"]
    },
    {
        set: ["B", "O", "X", "O", "W", "L", "X", "L", "S"],
        hints: ["A container", "Hooting bird", "Size indicator", "A container", "Hooting bird", "Size indicator"]
    },
    {
        set: ["S", "U", "N", "A", "I", "R", "D", "A", "Y"],
        hints: ["Shining star", "Breathable gas", "A calendar period", "A Feeling", "Ukraine Internation Airlines", "Not Rich Yet"]
    },
    {
        set: ["H", "A", "T", "A", "N", "T", "T", "O", "P"],
        hints: ["Headwear", "Small insect", "The highest point", "Headwear", "Small insect", "Trusted Traveler Programs"]
    },
]

export function selectRandomGame() {
    return Math.floor(Math.random() * games.length);
}
export function getGameHints(index)
{
    return games[index].hints;
}
export function getAnswerSet(index)
{
    return games[index].set;
}

export function checkGameSet(set, answerSet) {
    let win = true
    set.forEach((value, index) => {
        if (value !== answerSet[index])
            win = false;
    })
    return win;
}