import {useKeyPress} from "./useKeyPress.jsx";

export function useTableMove(refs, cols, rows) {

    function MoveFocus(dx, dy){
        let focusedInput = refs.find((el) => el === document.activeElement)
        if(!focusedInput){
            refs[0].focus();
        }
        let index = refs.indexOf(focusedInput);

        let row = Math.floor(index / 3) + dy;
        let col = index % cols + dx;

        if (row >= rows) row = rows - 1;
        if (col >= cols) col = cols - 1;
        if (row < 0) row = 0;
        if (col < 0) col = 0;

        refs[row * 3 + col].focus();
    }
    useKeyPress("ArrowUp", () => MoveFocus(0, -1))
    useKeyPress("ArrowDown", () => MoveFocus(0, 1))
    useKeyPress("ArrowLeft", () => MoveFocus(-1, 0))
    useKeyPress("ArrowRight", () => MoveFocus(1, 0))
}