import {convertTime} from "../../utility";
import {createPortal} from "react-dom";
import styles from "./Result.module.css"
import { Link } from "react-router";

export function Result({success, time, difficulty, playAgain}) {
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
