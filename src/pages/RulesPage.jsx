import { ThemeChanger } from "../components";

export function RulesPage({ setCurrentPage }) {
    return (
        <div
            id="rules-page"
            className="d-flex flex-column align-items-center justify-content-center vh-100 position-relative"
        >
            <ThemeChanger />
            <div className="rules-box p-4 rounded shadow">
                <h2 className="text-center mb-3">Mini Crossword Rules</h2>
                <p>
                    The Mini Crossword is a 3×3 grid puzzle. The goal is to fill
                    all the empty squares with letters, forming valid words
                    across and down.
                </p>
                <ul>
                    <li>Each word must match the given clues.</li>
                    <li>
                        Words read left to right (across) and top to bottom
                        (down).
                    </li>
                    <li>
                        All squares must be filled correctly to finish the
                        puzzle.
                    </li>
                </ul>
                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={() => setCurrentPage("Settings")}
                    >
                        Back to Settings
                    </button>
                </div>
            </div>
        </div>
    );
}
