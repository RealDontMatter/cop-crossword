import { ThemeChanger } from "../components";
import { useState } from "react";
import { GamePage, RulesPage } from ".";

export function SettingsPage({ setCurrentPage }) {
    const [difficulty, setDifficulty] = useState("");
    const [nickname, setNickname] = useState("");
    const [nicknameWarningVisible, setNicknameWarningVisible] = useState(false);
    const [difficultyWarningVisible, setDifficultyWarningVisible] = useState(false);

    // Form
    const onNicknameChange = (e) => {setNickname(e.target.value);}
    const onDifficultyChange = (e) => {setDifficulty(e.target.value);}

    const setRulesPage = () => setCurrentPage({ component: RulesPage, props: {} })
    const setGamePage = () => setCurrentPage({ component: GamePage, props: {difficulty} })


    function validateForm() {
        setNicknameWarningVisible(nickname === "");
        setDifficultyWarningVisible(difficulty === "");

        if (nickname === "") {
            return;
        }
        if (difficulty === "") {
            return;
        }

        setGamePage();
    }

    return (
        <div className="settings-page min-vh-100 d-flex align-items-center justify-content-center position-relative">
            <ThemeChanger />
            <form className="p-5 rounded-3 d-flex flex-column gap-3 shadow settings-component">
                <div className="d-flex gap-3">
                    <label htmlFor="nickname">Nickname:</label>
                    <input type="text" id="nickname" value={nickname} onChange={onNicknameChange} />
                </div>
                {nicknameWarningVisible && <div className="text-danger mb-3">Nickname cannot be empty</div>}

                <div className="d-flex justify-content-center gap-3">
                    <input
                        type="radio"
                        name="difficulty"
                        value="easy"
                        checked={difficulty === "easy"}
                        id="difficulty-radio-easy"
                        className="d-none"
                        onChange={onDifficultyChange}
                    />
                    <label htmlFor="difficulty-radio-easy" className="rounded-2 p-2">
                        Easy
                    </label>

                    <input
                        type="radio"
                        name="difficulty"
                        value="normal"
                        checked={difficulty === "normal"}
                        id="difficulty-radio-normal"
                        className="d-none"
                        onChange={onDifficultyChange}
                    />
                    <label
                        htmlFor="difficulty-radio-normal"
                        className={"rounded-2 p-2"} >
                        Normal
                    </label>

                    <input
                        type="radio"
                        name="difficulty"
                        value="hard"
                        checked={difficulty === "hard"}
                        id="difficulty-radio-hard"
                        className="d-none"
                        onChange={onDifficultyChange}
                    />
                    <label
                        htmlFor="difficulty-radio-hard"
                        className={"rounded-2 p-2"} >
                        Hard
                    </label>
                </div>
                {difficultyWarningVisible && <div className="text-danger mb-3">Please choose difficulty</div>}

                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={validateForm}
                >
                    Start
                </button>

                <div>
                    Do not know rules? Check
                    <button
                        type="button"
                        className="text-decoration-underline bg-transparent border-0 text-primary"
                        onClick={setRulesPage}
                    >
                        rules
                    </button>
                    page
                </div>
            </form>
        </div>
    );
}
