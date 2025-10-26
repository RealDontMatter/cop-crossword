import { GameField, ThemeChanger, HintContainer } from "../components";
import { ResultPage } from ".";
import {useRef, useState} from "react";
import {useWarning} from "../hooks";

const defaultGames = [
    {
        set: ["C", "A", "T", "A", "C", "E", "T", "E", "X"],
        hints: ["Puffy friend", "Game Card", "Not correct word", "Puffy friend", "Game Card", "Not correct word"]
    },
    {
        set: ["B", "O", "X", "O", "W", "L", "X", "L", "S"],
        hints: ["A container", "Hooting bird", "Size indicator", "A container", "Hooting bird", "Size indicator"]
    },
    {
        set: ["S", "U", "N", "A", "I", "R", "D", "A", "Y"],
        hints: ["Shining star", "Breathable gas", "A calendar period", "A Feeling", "Ukraine Internation Airlines", "Not Rich Yet"]
    },
    {
        set: ["H", "A", "T", "A", "N", "T", "T", "O", "P"],
        hints: ["Headwear", "Small insect", "The highest point", "Headwear", "Small insect", "Trusted Traveler Programs"]
    },
]

export function GamePage({ setCurrentPage, difficulty }) {
    // Here must be some logic that defines difficulty, but for now Random set is selected
    let gameIndex = Math.floor(Math.random()*defaultGames.length);
    let startTime = new Date().getTime();

    function onGameOver(win = true) {
        let success = win;
        let time = new Date().getTime() - startTime;
        let difficulty = "easy"

        setCurrentPage({ component:ResultPage, props: {success, time, difficulty} });
    }
    function Surrender() { onGameOver(false); }

    const [isSurrenderWarningVisible, handleSurrenderButtonClick] = useWarning(Surrender);

    return (
        <div
            id="game-page"
            className="d-flex align-items-center justify-content-center min-vh-100 position-relative"
            style={{ background: "var(--primary-bg)" }}
        >
            <ThemeChanger />
            <div className="game-container d-flex justify-content-center align-items-center rounded shadow p-4 position-relative">
                <div className="position-relative">
                    <GameField answerSet={defaultGames[gameIndex].set} onSolve={onGameOver} />

                    <div className="d-flex gap-3 align-items-center mt-3">
                        <button onClick={handleSurrenderButtonClick} className="btn btn-warning">Surrender</button>
                        {isSurrenderWarningVisible && <div className="text-danger text-center">Are you sure?</div>}
                    </div>
                </div>
                <HintContainer hints={defaultGames[gameIndex].hints} />
            </div>
        </div>
    );
}
