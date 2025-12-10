import { useStatisticsStore } from "../../store";
import { convertTime } from "../../utility";
import styles from "./StatisticTable.module.css"

export function StatisticTable(){

    const history = useStatisticsStore(state => state.getSlice)(0, 5);

    return (
        <div>
            <p className={styles.h2}>Game Stats</p>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>User</th>
                        <th className={styles.th}>Time</th>
                        <th className={styles.th}>Difficulty</th>
                        <th className={styles.th}>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((value) => (
                        <tr key={value.id} className={styles.tr}>
                            <td className={styles.td}>{value.username}</td>
                            <td className={`${styles.td} ${styles.duration}`}>{convertTime(value.duration)}</td>
                            <td className={styles.td}>{value.difficulty}</td>
                            <td 
                                className={`${styles.td} ${styles.result} ${
                                    value.result === 'Win' ? styles.win : 
                                    value.result === 'Loss' ? styles.loss : 
                                    styles.draw
                                }`}
                            >
                                {value.result}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className={styles.note}>Showing last {history.length} games.</p>
        </div>
    )
}