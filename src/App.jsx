import { useState } from "react";

import { TmpPageSelector } from "./components";
import { GamePage, SettingsPage, RulesPage, ResultPage } from "./pages";

const pages = [
    { name: "Settings", component: SettingsPage },
    { name: "Rules", component: RulesPage },
    { name: "Game", component: GamePage },
    { name: "Result", component: ResultPage },
];

function App() {
    const [currentPage, setCurrentPage] = useState("Settings");

    // Settings -> Rules or Game -> Result
    // Rules -> Settings

    const page = pages.find((p) => p.name === currentPage);
    const PageComponent = page.component;

    return (
        <>
            <TmpPageSelector
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <PageComponent setCurrentPage={setCurrentPage} />
        </>
    );
}

export default App;
