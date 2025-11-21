import {useState} from "react";
import { SettingsPage, RulesPage, GamePage } from "./pages";
import {AppContext} from "./AppContext.jsx"
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
    const [context, setContext] = useState({});


    return (
        <AppContext.Provider value={{context, setContext}}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<SettingsPage/>} />
                    <Route path="/rules" element={<RulesPage/>} />
                    <Route path="/game/:nickname/:difficulty" element={<GamePage key={new Date().getTime()}/>} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
