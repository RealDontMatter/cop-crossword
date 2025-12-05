import {convertTime} from "../../utility";
import styles from "./Result.module.css"
import { Link } from "react-router";
import { useGameStore } from "../../store";

export function Result({difficulty}) {

    const success = useGameStore(state => state.status) == "success";
    const time = useGameStore(state => state.endTime - state.startTime);
    const startGame = useGameStore(state => state.startGame);
    
    const playAgain = () => startGame(difficulty);

    return (
        <div className={styles.card}>
            <h2>Game Results</h2>
            <p className={styles.lead}>
                {success ? "Congratulations!🎉" : "Foo. Looser!!!"}{" "}
            </p>
            <p className={styles.lead}>
                Difficulty: <span className={styles.bold}>{difficulty}</span>
            </p>
            <p className={styles.lead}>
                Your time: <span className={styles.bold}>{convertTime(time)}</span>
            </p>
            <div className={styles.buttonsBlock}>
                <Link to="/">
                    Go to Settings
                </Link>
                <button onClick={playAgain}>
                    Play Again
                </button>
            </div>
        </div>
    );
}
