import { ThemeChanger } from "../../components";
import {useContext} from "react";
import {selectRandomGame} from "../../utility";
import {AppContext} from "../../AppContext.jsx";
import {useForm} from "react-hook-form";
import styles from "./SettingsPage.module.css"
import { useNavigate, Link } from "react-router";

export function SettingsPage() {
    const navigate = useNavigate();

    const {register, formState:{errors}, handleSubmit} = useForm();
    function onSubmit(data) {
        navigate(`/game/${data["nickname"]}/${data["difficulty"]}`);
    }


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
                    <Link to="/rules">
                        rules
                    </Link>
                    {' '}
                    page
                </div>

            </form>
        </div>
    );
}
