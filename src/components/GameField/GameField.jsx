import {createRef, useRef} from "react";
import {useTableMove} from "../../hooks";
import {GameTile} from "..";
import styles from "./GameField.module.css";

export function GameField() {
    // Navigation though table using arrow keys
    let tileRefs = [];
    tileRefs = Array(9).fill().map(
        (_, i) => tileRefs[i] || createRef()
    );
    useTableMove(tileRefs, 3, 3);


    return (
        <div className={styles.field}>
            {tileRefs.map((ref, index) => {
                return (
                    <GameTile
                        key={index}
                        index={index}
                        elRef={(el) => {tileRefs[index] = el;}}
                    />
                )
            })}
            {
                [1,2,3,4,5,6].map((value) => (
                    <div className={styles.hint} key={value}>{value}</div>
                )) 
            }
        </div>
    );
}
