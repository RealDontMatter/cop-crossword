import {GameField, ThemeChanger, HintContainer, WarningButton, Result} from "../components";
import {getAnswerSet, getGameHints, selectRandomGame} from "../utility";
import {useContext, useState} from "react";
import {AppContext} from "../AppContext.jsx";



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
            <div
                id="game-page"
                className="d-flex align-items-center justify-content-center min-vh-100 position-relative"
                style={{ background: "var(--primary-bg)" }}
            >
                <ThemeChanger />
                <div className="game-container d-flex justify-content-center align-items-center rounded shadow p-4 position-relative">
                    <div className="position-relative">
                        <GameField answerSet={getAnswerSet(context["gameIndex"])} onSolve={onGameOver} />
                        <WarningButton text={"Surrender"} warningText={"Are you sure?"} onSuccess={Surrender}/>
                    </div>
                    <HintContainer hints={getGameHints(context["gameIndex"])} />
                </div>
            </div>
            {isResultShown && <Result setCurrentPage={setCurrentPage}/>}
        </>
    );
}
