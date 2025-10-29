import {forwardRef, useRef} from "react";


export const GameTile = forwardRef(function GameTile({index, value, setValue, correctValue}, ref) {
    let wrongClassName = ""
    if(value !== correctValue && value !== ""){
        wrongClassName = " wrong ";
    }

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
            className={wrongClassName}
            ref={ref}
        />
    )
})