import { createRef, useRef, useState } from "react";
import {useTableMove} from "../../hooks";
import {GameTile} from "..";
import {checkGameSet} from "../../utility";
import styles from "./GameField.module.css";

export function GameField({ answerSet, onSolve }) {
    const rows = 3;
    const cols = 3;
    const tileCount = rows * cols;

    let tileRefs = [];
    tileRefs = Array(tileCount).fill().map(
        (_, i) => tileRefs[i] || createRef()
    );
    useTableMove(tileRefs, 3, 3);

    const [set, setSet] = useState(Array(9).fill(""));

    function setValue(index, value) {
        let newSet = [...set];
        newSet[index] = value;
        setSet(newSet);
        if(checkGameSet(newSet, answerSet)) onSolve();
    }

    return (
        <div className={styles.field}>
            {tileRefs.map((ref, index) => {
                return (
                    <GameTile
                        key={index}
                        value={set[index]}
                        setValue={setValue}
                        correctValue={answerSet[index]}
                        index={index}
                        elRef={(el) => {tileRefs[index] = el;}}
                    />
                )
            })}
            <div className={styles.hint}>1</div>
            <div className={styles.hint}>2</div>
            <div className={styles.hint}>3</div>
            <div className={styles.hint}>4</div>
            <div className={styles.hint}>5</div>
            <div className={styles.hint}>6</div>
        </div>
    );
}
