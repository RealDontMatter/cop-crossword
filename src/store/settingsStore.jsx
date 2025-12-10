import { create } from "zustand/react";
import { difficulties } from "../utility";

export const useSettingsStore = create(
    (set, get) => ({
        username: "User1",
        difficulty: Object.values(difficulties)[0],
        
        setUsername: (name) => set({username: name}),
        setDifficulty: (diff) => set({difficulty: diff})
    })
);