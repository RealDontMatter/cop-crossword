import { ThemeChanger } from "./index.jsx";
import { GamePage, SettingsPage } from "../pages";
import {convertTime, selectRandomGame} from "../utility";
import {createPortal} from "react-dom";
import {useContext} from "react";
import {AppContext} from "../AppContext.jsx";

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

        <div className="result-container text-center">
            <h2 className="mb-3 fw-bold">Game Results</h2>
            <p className="lead">
                Difficulty: <span className="fw-bold">{context["difficulty"]}</span>
            </p>
            <p className="lead">
                {context["success"] ? "Congratulations!🎉" : "Foo. Looser!!!"}{" "}
            </p>
            <p className="m-0 lead">
                Your time: <strong>{convertTime(context["endTime"] - context["startTime"])}</strong>
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
