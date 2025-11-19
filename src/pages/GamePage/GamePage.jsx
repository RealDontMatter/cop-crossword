import {GameField, ThemeChanger, HintContainer, WarningButton, Result} from "../../components";
import {getAnswerSet, getGameHints} from "../../utility";
import {useContext, useState} from "react";
import {AppContext} from "../../AppContext.jsx";
import styles from "./GamePage.module.css";


export function GamePage({ setCurrentPage }) {
    const {context, setContext} = useContext(AppContext);
    let [isResultShown, setIsResultShown] = useState(false);

    function onGameOver(success = true) {
        setIsResultShown(true);

        let newContext = {...context};
        newContext["success"] = success;
        newContext["endTime"] = new Date().getTime();
        setContext(newContext);
    }
    function Surrender() { onGameOver(false); }


    return (
        <>
            <div className={styles.page} >
                <ThemeChanger />
                <div className={styles.container}>
                    <GameField answerSet={getAnswerSet(context["gameIndex"])} onSolve={onGameOver} />
                    <WarningButton text={"Surrender"} warningText={"Are you sure?"} onSuccess={Surrender}/>
                    <HintContainer hints={getGameHints(context["gameIndex"])} />
                </div>
            </div>
            {isResultShown && <Result setCurrentPage={setCurrentPage}/>}
        </>
    );
}
