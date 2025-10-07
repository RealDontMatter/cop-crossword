import React from "react";
import { ThemeChanger } from "../components";

export function ResultPage({ setCurrentPage, success = true }) {
    return (
        <div
            id="result-page"
            className="d-flex align-items-center justify-content-center vh-100 position-relative"
        >
            <ThemeChanger />
            <div className="result-container text-center p-4 shadow rounded bg-white">
                <h2 className="mb-3 fw-bold">Game Results</h2>
                <p className="lead">
                    {success ? "Congratulations!🎉" : "Foo. Looser!!!"}{" "}
                </p>
                <p>
                    Your time: <strong>30s</strong>
                </p>
                <div className="d-flex justify-content-center mt-4">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => setCurrentPage("Settings")}
                    >
                        Go to Settings
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => setCurrentPage("Game")}
                    >
                        Play Again
                    </button>
                </div>
            </div>
        </div>
    );
}
