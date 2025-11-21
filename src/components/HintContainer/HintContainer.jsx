import styles from "./HintContainer.module.css"

export function HintContainer({ hints }) {
    return (
        <div className={styles.container}>
            {hints.map((value, index) => {
                return (
                    <div key={index}>
                        <span className={styles.bold}>{index + 1}:</span> {value}
                    </div>
                )
            })}
        </div>
    );
}