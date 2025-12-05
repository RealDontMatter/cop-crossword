import {useEffect, useState} from "react";
import { SettingsPage, RulesPage, GamePage } from "./pages";
import {ThemeContext} from "./ThemeContext.jsx"
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(()=> {
        if (theme == "light")
            document.body.classList.remove("dark-theme");
        else
            document.body.classList.add("dark-theme");
    }, [theme]);

    return (
        <ThemeContext value={{theme, setTheme}}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<SettingsPage/>} />
                    <Route path="/rules" element={<RulesPage/>} />
                    <Route path="/game/:nickname/:difficulty" element={<GamePage key={new Date().getTime()}/>} />
                </Routes>
            </BrowserRouter>
        </ThemeContext>
    );
}

export default App;
