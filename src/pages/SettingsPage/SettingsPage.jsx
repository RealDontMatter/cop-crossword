import { ThemeChanger } from "../../components";
import {difficulties} from "../../utility"
import {useForm} from "react-hook-form";
import styles from "./SettingsPage.module.css"
import { useNavigate, Link } from "react-router";
import {Fragment} from "react"

export function SettingsPage() {
    const navigate = useNavigate();

    const {register, formState:{errors}, handleSubmit} = useForm();
    function onSubmit(data) {
        navigate(`/game/${data["nickname"]}/${data["difficulty"]}`);
    }

    const difficultyValidation = (value) => Object.values(difficulties).includes(value);

    return (
        <div className={styles.page}>
            <ThemeChanger />
            <form
                className={styles.container}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.nicknameBox}>
                    <label htmlFor="nickname">Nickname</label>
                    <input 
                        type="text" 
                        id="nickname" 
                        {...register("nickname", {required: true, minLength:4, maxLength:20, })} 
                    />
                    { errors["nickname"] && <div className={styles.warning}>Nickname has to be at least 4 characters and less than 20 characters</div> }
                </div>

                <div className={styles.difficultyBox}>
                    <div className={styles.difficultyTitle}>Difficulty</div>
                    <div className={styles.difficultyOptions}>
                        {
                            Object.values(difficulties).map((value) => {
                                return (
                                    <Fragment key={value}>
                                        <input
                                            type="radio"
                                            id={`difficulty-radio-${value}`}
                                            value={value}
                                            {...register("difficulty", {required: true, validate: difficultyValidation})} 
                                        />
                                        <label htmlFor={`difficulty-radio-${value}`} >
                                            {value}
                                        </label>
                                    </Fragment>
                                );
                            })
                        }
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
