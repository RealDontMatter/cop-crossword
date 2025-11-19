import { ThemeChanger } from "../../components";
import {useContext, useState} from "react";
import { GamePage, RulesPage } from "../";
import {selectRandomGame} from "../../utility";
import {AppContext} from "../../AppContext.jsx";
import {useForm} from "react-hook-form";
import styles from "./SettingsPage.module.css"

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
        <div className={styles.page}>
            <ThemeChanger />
            <form
                className={styles.container}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.nicknameBox}>
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" id="nickname" {...register("nickname", {required: true})} />
                    { errors["nickname"] && <div className={styles.warning}>Nickname cannot be empty</div> }
                </div>

                <div className={styles.difficultyBox}>
                    <div className={styles.difficultyTitle}>Difficulty</div>
                    <div className={styles.difficultyOptions}>
                        <input
                            type="radio"
                            id="difficulty-radio-easy"
                            value="easy"
                            {...register("difficulty", {required: true})}
                        />
                        <label htmlFor="difficulty-radio-easy">
                            Easy
                        </label>

                        <input
                            type="radio"
                            id="difficulty-radio-normal"
                            value="normal"
                            {...register("difficulty", {required: true})}
                        />
                        <label htmlFor="difficulty-radio-normal">
                            Normal
                        </label>

                        <input
                            type="radio"
                            id="difficulty-radio-hard"
                            value="hard"
                            {...register("difficulty", {required: true})}
                        />
                        <label htmlFor="difficulty-radio-hard">
                            Hard
                        </label>
                    </div>
                    { errors["difficulty"] && <div className={styles.warning}>Please choose difficulty</div> }
                </div>


                <input
                    type="submit"
                    value="Start"
                    className={styles.submit}
                />

                <div className={styles.rulesBox}>
                    Do not know rules? Check
                    {' '}
                    <button
                        type="button"
                        onClick={setRulesPage}
                    >
                        rules
                    </button>
                    {' '}
                    page
                </div>

            </form>
        </div>
    );
}
