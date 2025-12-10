import { create } from "zustand/react";
import { useSettingsStore } from ".";
import { persist } from "zustand/middleware";

export const useStatisticsStore = create(
    persist (
        (set, get) => ({
            history: [],

            recordGame: (result, duration) => {
                const difficulty = useSettingsStore.getState().difficulty;
                const username = useSettingsStore.getState().username;
                const newRecord = {
                    id: new Date().getTime(),
                    username,
                    result,
                    difficulty,
                    duration,
                };
                set(state => {
                    return {history: [newRecord, ...state.history]}
                });
            },
            getSlice: (start, end) => {
                return get().history.slice(start, end);
            }
        })
    )
);