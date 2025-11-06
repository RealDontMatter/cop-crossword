import { ThemeChanger } from "./index.jsx";
import { GamePage, SettingsPage } from "../pages/index.jsx";
import {convertTime, selectRandomGame} from "../utility/index.jsx";
import {createPortal} from "react-dom";

export function Result({ setCurrentPage, success = true, time, difficulty }) {
    const setSettingsPage = () => setCurrentPage({ component: SettingsPage, props: {} })
    const setGamePage = () => setCurrentPage({ component: GamePage, props: {
            difficulty,
            startTime: new Date().getTime(),
            gameIndex: selectRandomGame(difficulty),
            key: new Date().getTime()
    } })

    return createPortal((

        <div className="result-container text-center">
            <h2 className="mb-3 fw-bold">Game Results</h2>
            <p className="lead">
                Difficulty: <span className="fw-bold">{difficulty}</span>
            </p>
            <p className="lead">
                {success ? "Congratulations!🎉" : "Foo. Looser!!!"}{" "}
            </p>
            <p className="m-0 lead">
                Your time: <strong>{convertTime(time)}</strong>
            </p>
            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn btn-primary me-2"
                    onClick={setSettingsPage}
                >
                    Go to Settings
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={setGamePage}
                >
                    Play Again
                </button>
            </div>
        </div>

    ), document.getElementById("portal"));
}
