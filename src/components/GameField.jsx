export function GameField() {
    function onInputChange(ev) {
        let value = ev.target.value;
        if (value.length > 1) {
            let char = value[value.length - 1].toUpperCase();
            ev.target.value = char;
        }
        // Save only the last entered char
        // You can actually limit input length but this method will rewrite input
    }

    return (
        <div className={"game-field d-flex flex-column gap-3"}>
            <div className={"d-flex gap-3 position-relative"}>
                <input type="text" maxLength={2} onChange={onInputChange} />
                <input type="text" maxLength={2} onChange={onInputChange} />
                <input type="text" maxLength={2} onChange={onInputChange} />
            </div>
            <div className={"d-flex gap-3"}>
                <input type="text" maxLength={2} onChange={onInputChange} />
                <input type="text" maxLength={2} onChange={onInputChange} />
                <input type="text" maxLength={2} onChange={onInputChange} />
            </div>
            <div className={"d-flex gap-3"}>
                <input type="text" maxLength={2} onChange={onInputChange} />
                <input type="text" maxLength={2} onChange={onInputChange} />
                <input type="text" maxLength={2} onChange={onInputChange} />
            </div>
        </div>
    );
}
