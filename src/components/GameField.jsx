import {useRef, useState} from "react";

export function GameField({ answerSet, onSolve }) {

    let refs = useRef([]);


    function onInputChange(ev) {
        ev.preventDefault();
        let value = ev.target.value;
        let processedValue = value[value.length - 1].toUpperCase();

        let input = refs.current.find((input) => input === ev.target);
        input.value = processedValue;

        validateInput(input);
        validateGameEnd();
    }

    function validateInput(input) {
        if (input.value === answerSet[refs.current.indexOf(input)])
            input.classList.remove("wrong");
        else input.classList.add("wrong");
    }

    function validateGameEnd(){
        let win = true;
        refs.current.forEach((input, index) => {
            if (input.value !== answerSet[index]) {
                win = false;
                console.log("Validation failed on: " + index + ", current value is " + input.value, ", actual value is " + answerSet[index]);
            }
        })
        if(win) onSolve();
    }

    return (
        <div className={"game-field d-flex flex-column gap-3 position-relative"}>
            {[0, 1, 2].map((row) => {
                return (
                    <div key={row} className={"d-flex gap-3 position-relative"}>
                        {[0, 1, 2].map((col) => {
                            const index = row * 3 + col;
                            return (
                                <input
                                    key={index}
                                    ref={(el) => refs.current[index] = el}
                                    type="text"
                                    maxLength={2}
                                    onChange={onInputChange}
                                />
                            )
                        })}
                    </div>
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
