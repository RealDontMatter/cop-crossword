import styles from "./GameTile.module.css";

export function GameTile({index, value, setValue, correctValue, elRef}) {
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
            ref={elRef}
        />
    )
}