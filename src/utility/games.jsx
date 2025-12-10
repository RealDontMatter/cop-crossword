
export const difficulties = {
    easy: "easy",
    normal: "normal",
    hard: "hard"
}

export const games = [
    {
        // R1: COT, R2: ALL, R3: WEB
        // C1: CAW, C2: OLE, C3: TLB (Acronym)
        set: ["C", "O", "T", "A", "L", "L", "W", "E", "B"],
        hints: [
            "A small bed",
            "Every single one",
            "Spider's sticky net",
            "Crow's sound",
            "Cheer in Spanish",
            "The body's memory buffer (Initials)"
        ],
        difficulty: difficulties.easy
    },
    {
        // R1: TIN, R2: ARE, R3: PET
        // C1: TAP, C2: IRE, C3: NET
        set: ["T", "I", "N", "A", "R", "E", "P", "E", "T"],
        hints: [
            "Shiny metal",
            "To exist (Verb)",
            "Companion animal",
            "Faucet for water",
            "Intense anger",
            "Fishing gear"
        ],
        difficulty: difficulties.easy
    },
    {
        // R1: M O O, R2: O I L, R3: A C T
        // C1: M O A, C2: O I C (Acronym), C3: O L T
        set: ["M", "O", "O", "O", "I", "L", "A", "C", "T"],
        hints: [
            "Cow's noise",
            "A slippery liquid",
            "Perform on stage",
            "Vast treeless plain",
            "Organization of Islamic Cooperation (Initials)",
            "A young male horse"
        ],
        difficulty: difficulties.normal
    },
    {
        // R1: S E T, R2: A R T, R3: T E A
        // C1: S A T, C2: E R T (Acronym), C3: T T A (Acronym)
        set: ["S", "E", "T", "A", "R", "T", "T", "E", "A"],
        hints: [
            "To place down",
            "Creative expression",
            "A hot drink",
            "Resting, past tense",
            "Environmental response team (Initials)",
            "Telecommunications Technology Association (Initials)"
        ],
        difficulty: difficulties.normal
    },
    {
        // R1: B A T, R2: I C E, R3: D O T
        // C1: B I D, C2: A C O (Acronym), C3: T E T
        set: ["B", "A", "T", "I", "C", "E", "D", "O", "T"],
        hints: [
            "Nocturnal flying mammal",
            "Frozen water",
            "A small mark",
            "To offer money",
            "African regional cooperation body (Initials)",
            "Vietnamese New Year"
        ],
        difficulty: difficulties.hard
    },
    {
        // R1: H A M, R2: A P E, R3: M E T (Symmetrical, but works)
        // C1: H A M, C2: A P E, C3: M E T
        set: ["H", "A", "M", "A", "P", "E", "M", "E", "T"],
        hints: [
            "Pork cut",
            "Large monkey",
            "Past tense of meet",
            "Deli meat",
            "Primate",
            "Encountered"
        ],
        difficulty: difficulties.hard
    },
    {
        // R1: W I N, R2: O N E, R3: W E T
        // C1: W O W, C2: I N E (Sufix), C3: N E T
        set: ["W", "I", "N", "O", "N", "E", "W", "E", "T"],
        hints: [
            "To achieve victory",
            "The lowest number",
            "Damp or soaked",
            "Expression of surprise",
            "Suffix meaning 'related to'",
            "A zero-emissions vehicle (Initials)"
        ],
        difficulty: difficulties.easy
    },
    {
        // R1: T R Y, R2: A D O, R3: T A G
        // C1: T A T, C2: R D A (Acronym), C3: Y O G
        set: ["T", "R", "Y", "A", "D", "O", "T", "A", "G"],
        hints: [
            "Make an attempt",
            "A big fuss",
            "Children's chasing game",
            "Tattoo, informally",
            "Recommended dietary allowance (Initials)",
            "Yogurt, informally"
        ],
        difficulty: difficulties.normal
    },
    {
        // R1: C U P, R2: A L E, R3: B O Y
        // C1: C A B, C2: U L O (No) -> U B Y (No)
        // R1: C A R, R2: E A T, R3: R O D
        set: ["C", "A", "R", "E", "A", "T", "R", "O", "D"],
        hints: [
            "An automobile",
            "To consume food",
            "A long, thin stick",
            "To look closely",
            "Verb 'to exist'",
            "Past tense of 'do'"
        ],
        difficulty: difficulties.normal
    },
    {
        // R1: M A N, R2: E R A, R3: N E W
        // C1: M E N, C2: A R E, C3: N A W
        set: ["M", "A", "N", "E", "R", "A", "N", "E", "W"],
        hints: [
            "Adult male",
            "A distinct period of time",
            "Not old",
            "Adult males (Plural)",
            "Unit of land area",
            "To bite persistently"
        ],
        difficulty: difficulties.hard
    },
]

export function selectRandomGame(difficulty) {
    let gamesByDifficulty = []
    games.forEach((game, index) => {
        if(game.difficulty === difficulty)
            gamesByDifficulty.push(index)
    })
    let randomGame = Math.floor(Math.random() * gamesByDifficulty.length);
    return gamesByDifficulty[randomGame];
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