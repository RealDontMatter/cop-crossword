import { ThemeChanger } from "../../components";
import styles from "./RulesPage.module.css"
import { Link } from "react-router";

export function RulesPage() {
    return (
        <div className={styles.page}>
            <ThemeChanger />
            <div className={styles.rules}>
                <h2>Mini Crossword Rules</h2>
                <p>
                    The Mini Crossword is a 3x3 grid puzzle. The goal is to fill
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
                <div className={styles.return}>
                    <Link to="/" >Back to Settings</Link>
                </div>
            </div>
        </div>
    );
}
