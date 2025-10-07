export function ThemeChanger() {
    function changeTheme(ev) {
        document.body.classList.toggle("dark-theme");
    }
    return (
        <>
            <label className={"theme-toggle"}>
                <img src={"/images/moon.png"} alt={"Moon"} />
                <img src={"/images/sun.png"} alt={"Sun"} />
                <input type="checkbox" onChange={changeTheme} />
                <span className={"slider"}></span>
            </label>
        </>
    );
}
