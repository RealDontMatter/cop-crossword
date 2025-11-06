import {GameField, ThemeChanger, HintContainer, WarningButton} from "../components";
import { ResultPage } from ".";
import {getAnswerSet, getGameHints, selectRandomGame} from "../utility";



export function GamePage({ setCurrentPage, difficulty }) {
    let gameIndex = selectRandomGame(difficulty);
    let startTime = new Date().getTime();

    function onGameOver(win = true) {
        setCurrentPage({
            component:ResultPage,
            props: {success: win, time:(new Date().getTime() - startTime), difficulty}
        });
    }
    function Surrender() { onGameOver(false); }


    return (
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
    );
}
