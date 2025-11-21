import styles from './ThemeChanger.module.css'

export function ThemeChanger() {
    function changeTheme(ev) {
        document.body.classList.toggle("dark-theme");
    }
    return (
        <>
            <label className={styles.themeToggle}>
                <img src={"/images/moon.png"} alt={"Moon"} />
                <img src={"/images/sun.png"} alt={"Sun"} />
                <input type="checkbox" onChange={changeTheme} />
                <span className={styles.slider}></span>
            </label>
        </>
    );
}
