import { useGameStore } from "../../store";
import { getGameHints } from "../../utility";
import styles from "./HintContainer.module.css"

export function HintContainer() {
    const gameIndex = useGameStore(state => state.gameIndex);
    const hints = getGameHints(gameIndex);

    return (
        <div className={styles.container}>
            {hints.map((value, index) => {
                return (
                    <div key={index}>
                        <span className={styles.bold}>{index + 1}:</span> {value}
                    </div>
                )
            })}
        </div>
    );
}