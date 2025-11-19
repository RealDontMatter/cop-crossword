import { GamePage, SettingsPage } from "../../pages";
import {convertTime, selectRandomGame} from "../../utility";
import {createPortal} from "react-dom";
import {useContext} from "react";
import {AppContext} from "../../AppContext.jsx";
import styles from "./Result.module.css"

export function Result({ setCurrentPage }) {
    const {context, setContext} = useContext(AppContext);

    const setSettingsPage = () => setCurrentPage({ component: SettingsPage, props: {} })
    const setGamePage = () => {

        let newContext = {...context};
        newContext["gameIndex"] = selectRandomGame(context["difficulty"]);
        newContext["startTime"] = new Date().getTime();
        setContext(newContext);

        setCurrentPage({ component: GamePage, props: {
            key: new Date().getTime()
        }})
    }

    return createPortal((
        <div className={styles.page}>
            <div className={styles.container}>
                <h2>Game Results</h2>
                <p className={styles.lead}>
                    Difficulty: <span className={styles.bold}>{context["difficulty"]}</span>
                </p>
                <p className={styles.lead}>
                    {context["success"] ? "Congratulations!🎉" : "Foo. Looser!!!"}{" "}
                </p>
                <p className={styles.lead}>
                    Your time: <span className={styles.bold}>{convertTime(context["endTime"] - context["startTime"])}</span>
                </p>
                <div className={styles.buttonsBlock}>
                    <button onClick={setSettingsPage}>
                        Go to Settings
                    </button>
                    <button onClick={setGamePage}>
                        Play Again
                    </button>
                </div>
            </div>
        </div>

    ), document.getElementById("portal"));
}
