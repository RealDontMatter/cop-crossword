export function ThemeChanger() {
    return (
        <>
            <label className={"theme-toggle"}>
                <img src={"/images/moon.png"} alt={"Moon"} />
                <img src={"/images/sun.png"} alt={"Sun"} />
                <input type="checkbox" />
                <span className={"slider"}></span>
            </label>
        </>
    );
}
