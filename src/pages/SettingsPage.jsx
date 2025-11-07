import { ThemeChanger } from "../components";
import {useContext, useState} from "react";
import { GamePage, RulesPage } from ".";
import {selectRandomGame} from "../utility/index.jsx";
import {AppContext} from "../AppContext.jsx";
import {useForm} from "react-hook-form";


export function SettingsPage({ setCurrentPage }) {
    const {context, setContext} = useContext(AppContext);

    const {register, formState:{errors}, handleSubmit} = useForm();
    function onSubmit(data) {
        console.log(data);
        let newContext = {...context}
        newContext["difficulty"] = data["difficulty"];
        newContext["startTime"] = new Date().getTime();
        newContext["gameIndex"] = selectRandomGame(data["difficulty"]);
        setContext(newContext);
        setCurrentPage({ component: GamePage, props: {} })
    }

    const setRulesPage = () => setCurrentPage({ component: RulesPage, props: {} })

    return (
        <div className="settings-page min-vh-100 d-flex align-items-center justify-content-center position-relative">
            <ThemeChanger />
            <form
                className="p-5 rounded-3 d-flex flex-column gap-3 shadow settings-component"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="d-flex gap-3">
                    <label htmlFor="nickname">Nickname:</label>
                    <input type="text" id="nickname" {...register("nickname", {required: true})} />
                </div>
                { errors["nickname"] && <div className="text-danger mb-3">Nickname cannot be empty</div> }

                <div className="d-flex justify-content-center gap-3">
                    <input
                        type="radio"
                        id="difficulty-radio-easy"
                        className="d-none"
                        value="easy"
                        {...register("difficulty", {required: true})}
                    />
                    <label htmlFor="difficulty-radio-easy" className="rounded-2 p-2">
                        Easy
                    </label>

                    <input
                        type="radio"
                        id="difficulty-radio-normal"
                        className="d-none"
                        value="normal"
                        {...register("difficulty", {required: true})}
                    />
                    <label        htmlFor="difficulty-radio-normal"
                                  className={"rounded-2 p-2"} >
                        Normal
                    </label>

                    <input
                        type="radio"
                        id="difficulty-radio-hard"
                        className="d-none"
                        value="hard"
                        {...register("difficulty", {required: true})}
                    />
                    <label        htmlFor="difficulty-radio-hard"
                                  className={"rounded-2 p-2"} >
                        Hard
                    </label>
                </div>

                { errors["difficulty"] && <div className="text-danger mb-3">Please choose difficulty</div> }

                <input
                    type="submit"
                    value="Start"
                    className="btn btn-secondary"
                />

                <div>
                    Do not know rules? Check
                    <button
                        type="button"
                        className="text-decoration-underline bg-transparent border-0 text-primary"
                        onClick={setRulesPage}
                    >
                        rules
                    </button>
                    page
                </div>

            </form>
        </div>
    );
}
