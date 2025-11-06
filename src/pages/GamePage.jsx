import {GameField, ThemeChanger, HintContainer, WarningButton, Result} from "../components";
import {getAnswerSet, getGameHints, selectRandomGame} from "../utility";
import {useState} from "react";



export function GamePage({ setCurrentPage, difficulty, startTime, gameIndex }) {
    let [isResultShown, setIsResultShown] = useState(false);
    let [win, setWin] = useState(false);

    function onGameOver(win = true) {
        setIsResultShown(true);
        setWin(win);
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
                        <GameField answerSet={getAnswerSet(gameIndex)} onSolve={onGameOver} />
                        <WarningButton text={"Surrender"} warningText={"Are you sure?"} onSuccess={Surrender}/>
                    </div>
                    <HintContainer hints={getGameHints(gameIndex)} />
                </div>
            </div>
            {isResultShown &&
                <Result difficulty={difficulty} time={new Date().getTime() - startTime} setCurrentPage={setCurrentPage} success={win}/>
            }
        </>
    );
}
