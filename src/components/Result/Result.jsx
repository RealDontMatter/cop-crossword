import { Link } from "react-router";
import {convertTime} from "../../utility";
import styles from "./Result.module.css"
import { useGameStore, useSettingsStore, useStatisticsStore } from "../../store";
import { StatisticTable } from "../";

export function Result() {

    const success = useGameStore(state => state.status) == "success";
    const time = useGameStore(state => state.endTime - state.startTime);
    const startGame = useGameStore(state => state.startGame);
    const history = useStatisticsStore(state => state.getSlice)(0, 5);
    const difficulty = useSettingsStore(state => state.difficulty);

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
                <button onClick={startGame}>
                    Play Again
                </button>
            </div>
            <StatisticTable />
        </div>
    );
}
