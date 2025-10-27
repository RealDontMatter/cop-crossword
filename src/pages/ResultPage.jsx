import { ThemeChanger } from "../components";
import { GamePage, SettingsPage } from ".";
import {convertTime} from "../utility";

export function ResultPage({ setCurrentPage, success = true, time, difficulty }) {
    const setSettingsPage = () => setCurrentPage({ component: SettingsPage, props: {} })
    const setGamePage = () => setCurrentPage({ component: GamePage, props: {difficulty} })

    return (
        <div
            id="result-page"
            className="d-flex align-items-center justify-content-center vh-100 position-relative"
        >
            <ThemeChanger />
            <div className="result-container text-center p-4 shadow rounded bg-white">
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
        </div>
    );
}
