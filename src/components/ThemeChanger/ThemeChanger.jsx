import { useContext } from 'react';
import {ThemeContext} from '../../ThemeContext.jsx'
import styles from './ThemeChanger.module.css'

export function ThemeChanger() {
    const {theme, setTheme} = useContext(ThemeContext);

    function changeTheme(ev) {
        setTheme(theme == "light" ? "dark" : "light");
    }
    return (
        <>
            <label className={styles.themeToggle}>
                <img src={"/images/moon.png"} alt={"Moon"} />
                <img src={"/images/sun.png"} alt={"Sun"} />
                <input type="checkbox" checked={theme !== "light"} onChange={changeTheme} />
                <span className={styles.slider}></span>
            </label>
        </>
    );
}
