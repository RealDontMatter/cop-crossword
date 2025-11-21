import {forwardRef, useRef} from "react";
import styles from "./GameTile.module.css";

export const GameTile = forwardRef(function GameTile({index, value, setValue, correctValue}, ref) {
    let wrong = value !== correctValue && value !== "";

    function onInputChange(ev) {
        ev.preventDefault();
        let value = ev.target.value;
        if(value === "") return;
        let processedValue = value[value.length - 1].toUpperCase();
        setValue(index, processedValue);
    }
    return (
        <input
            type="text"
            maxLength={2}
            onChange={onInputChange}
            value={value}
            className={`${styles.tile} ${wrong && styles.wrong}`}
            ref={ref}
        />
    )
})