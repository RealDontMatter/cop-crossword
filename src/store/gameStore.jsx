import { create } from "zustand/react";
import { getAnswerSet, selectRandomGame } from "../utility";
import { useStatisticsStore, useSettingsStore } from ".";

export const useGameStore = create((set, get) => ({
    gameIndex: null,
    gameSet: Array(9).fill(""),
    answerSet: [],
    startTime: 0,
    endTime: 0,
    status: "game",


    startGame: () => {
        const difficulty = useSettingsStore.getState().difficulty;
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
        
        if (isWin) {
            const recordGame = useStatisticsStore.getState().recordGame;
            const startTime = get().startTime;
            const endTime = new Date().getTime();
            const difficulty = useSettingsStore.getState().difficulty;

            recordGame("success", endTime - startTime);
            set({gameSet: newSet, status: "success", endTime});
        }
        else
            set({gameSet: newSet});
    },
    surrender: () => {
        const recordGame = useStatisticsStore.getState().recordGame;
        const startTime = get().startTime;
        const endTime = new Date().getTime();
        const difficulty = useSettingsStore.getState().difficulty;
        recordGame("surrender", endTime -  startTime);
        set({status: "surrender", endTime})
    }

}));
