import {createRef, useState} from "react";
import {useTableMove} from "../hooks";
import {GameTile} from ".";

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

    let win = true;
    set.forEach((value, index) => {
        if (value !== answerSet[index]) {
            win = false;
        }
    })
    if(win) onSolve();

    function setValue(index, value) {
        let newSet = [...set];
        newSet[index] = value;
        setSet(newSet);
    }

    return (
        <div className="game-field">
            {tileRefs.map((ref, index) => {
                return (
                    <GameTile
                        key={index}
                        value={set[index]}
                        setValue={setValue}
                        correctValue={answerSet[index]}
                        ref={ref}
                        index={index}
                    />
                )
            })}

            <div className="position-absolute end-100 top-0 game-hint">1</div>
            <div className="position-absolute end-100 top-50 game-hint">2</div>
            <div className="position-absolute end-100 bottom-0 game-hint">3</div>
            <div className="position-absolute bottom-100 start-0 game-hint">4</div>
            <div className="position-absolute bottom-100 start-50 game-hint">5</div>
            <div className="position-absolute bottom-100 end-0 game-hint">6</div>

        </div>
    );
}
