import { GameField } from "../components";
import { ThemeChanger } from "../components";

export function GamePage({
    setCurrentPage,
    chars = ["C", "A", "T", "A", "C", "E", "T", "E", "X"],
}) {
    return (
        <div
            id="game-page"
            className="d-flex align-items-center justify-content-center vh-100 position-relative"
            style={{ background: "var(--primary-bg)" }}
        >
            <ThemeChanger />
            <div className="game-container d-flex justify-content-center align-items-center rounded shadow p-4">
                <div className="position-relative d-flex flex-column align-items-center">
                    <GameField chars={chars} />
                    <button
                        className={"btn btn-warning"}
                        onClick={() => setCurrentPage("Result")}
                    >
                        Surrender
                    </button>
                </div>
            </div>

            <div className="hint-container d-flex justify-content-center align-items-center flex-column border border-2 gap-3 h5 py-2">
                <div>
                    <span className={"fw-bold"}>Right:</span> Puffy Friend
                </div>
                <div>
                    <span className={"fw-bold"}>Bottom:</span> Vehicle?
                </div>
            </div>
        </div>
    );
}
