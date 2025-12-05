import { useGameStore } from "../../store";
import styles from "./GameTile.module.css";

export function GameTile({elRef, index}) {

    const value = useGameStore(state => state.gameSet[index]);
    const correctValue = useGameStore(state => state.answerSet[index]);
    const updateTile = useGameStore(state => state.updateTile);
    
    let wrong = value !== correctValue && value !== "";

    function onInputChange(ev) {
        ev.preventDefault();
        let value = ev.target.value;
        if(value === "") return;

        let processedValue = value[value.length - 1].toUpperCase();
        updateTile(index, processedValue);
    }
    return (
        <input
            type="text"
            maxLength={2}
            onChange={onInputChange}
            value={value}
            className={`${styles.tile} ${wrong && styles.wrong}`}
            ref={elRef}
        />
    )
}