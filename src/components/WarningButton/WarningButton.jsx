import {useWarning} from "../../hooks";
import styles from "./WarningButton.module.css"

export function WarningButton({text, warningText, onSuccess}){

    const [warningVisible, handleClick] = useWarning(onSuccess);
    return (
        <div className={styles.warningContainer}>
            <button onClick={handleClick} className={styles.warningButton}>{text}</button>
            {warningVisible && <div className={styles.warning}>{warningText}</div>}
        </div>
    )
}