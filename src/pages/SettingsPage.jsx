import { ThemeChanger } from "../components";
import { useState } from "react";
import { GamePage, RulesPage } from ".";

export function SettingsPage({ setCurrentPage }) {
    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center position-relative"
            id="settings-page"
        >
            <ThemeChanger />
            <form
                action=""
                className="p-5 rounded-3 d-flex flex-column gap-3 shadow settings-component"
            >
                <div className={"d-flex gap-3"}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex gap-3">
                        <label
                            htmlFor="difficulty-radio-easy"
                            className={"rounded-2 p-2"}
                        >
                            <input
                                type="radio"
                                name="difficulty"
                                value="easy"
                                id="difficulty-radio-easy"
                                className="d-none"
                            />
                            Easy
                        </label>
                        <label
                            htmlFor="difficulty-radio-normal"
                            className={"rounded-2 p-2"}
                        >
                            <input
                                type="radio"
                                name="difficulty"
                                value="normal"
                                id="difficulty-radio-normal"
                                className="d-none"
                            />
                            Normal
                        </label>
                        <label
                            htmlFor="difficulty-radio-hard"
                            className={"rounded-2 p-2"}
                        >
                            <input
                                type="radio"
                                name="difficulty"
                                value="hard"
                                id="difficulty-radio-hard"
                                className="d-none"
                            />
                            Hard
                        </label>
                    </div>
                </div>
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                        setCurrentPage({ component: GamePage, props: {} })
                    }
                >
                    Start
                </button>
                <div>
                    Do not know rules? Check
                    <button
                        type="button"
                        className="text-decoration-underline bg-transparent border-0 text-primary"
                        onClick={() =>
                            setCurrentPage({ component: RulesPage, props: {} })
                        }
                    >
                        rules
                    </button>
                    page
                </div>
            </form>
        </div>
    );
}
