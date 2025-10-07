export function GameField({ chars }) {
    function onInputChange(ev, row, col) {
        let value = ev.target.value;
        let char = value[value.length - 1].toUpperCase();
        ev.target.value = char;

        if (ev.target.value === chars[row * 3 + col])
            ev.target.classList.remove("wrong");
        else ev.target.classList.add("wrong");

        // Save only the last entered char
        // You can actually limit input length but this method will rewrite input
    }

    return (
        <div className={"game-field d-flex flex-column gap-3"}>
            <div className={"d-flex gap-3 position-relative"}>
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 0, 0)}
                />
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 0, 1)}
                />
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 0, 2)}
                />
            </div>
            <div className={"d-flex gap-3"}>
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 1, 0)}
                />
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 1, 1)}
                />
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 1, 2)}
                />
            </div>
            <div className={"d-flex gap-3"}>
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 2, 0)}
                />
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 2, 1)}
                />
                <input
                    type="text"
                    maxLength={2}
                    onChange={(ev) => onInputChange(ev, 2, 2)}
                />
            </div>
        </div>
    );
}
