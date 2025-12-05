import { create } from "zustand/react";
import { getAnswerSet, selectRandomGame } from "../utility";

export const useGameStore = create((set, get) => ({
    gameIndex: null,
    gameSet: Array(9).fill(""),
    answerSet: [],
    startTime: 0,
    endTime: 0,
    status: "game",


    startGame: (difficulty) => {
        const index = selectRandomGame(difficulty);
        const answers = getAnswerSet(index);

        set({
            gameIndex: index,
            gameSet: Array(9).fill(""),
            answerSet: answers,
            startTime: new Date().getTime(),
            status: "game"
        });
    },
    updateTile: (index, value) => {
        let newSet = [...get().gameSet];
        let answers = [...get().answerSet]
        newSet[index] = value;
        const isWin = newSet.every((val, i) => val === answers[i]);
        if (isWin)
            set({gameSet: newSet, status: "success", endTime: new Date().getTime()});
        else
            set({gameSet: newSet});
    },
    surrender: () => {
        set({status: "surrender", endTime: new Date().getTime()})
    }

}));
