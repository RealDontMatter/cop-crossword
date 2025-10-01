import { useState } from "react";

import { TmpPageSelector } from "./components";
import { GamePage, SettingsPage, RulesPage, ResultPage } from "./pages";

const pages = [
    { name: "Settings", id: "settings", component: SettingsPage },
    { name: "Rules", id: "rules", component: RulesPage },
    { name: "Game", id: "game", component: GamePage },
    { name: "Result", id: "result", component: ResultPage },
];

function App() {
    const [currentPageId, setCurrentPageId] = useState("rules");

    // Settings -> Rules or Game -> Result
    // Rules -> Settings

    const page = pages.find((p) => p.id === currentPageId) || pages[0];
    const PageComponent = page.component;

    function handlePageChange(pageId) {
        setCurrentPageId(pageId);
    }

    return (
        <>
            <TmpPageSelector
                pages={pages}
                selPageId={currentPageId}
                onPageChange={handlePageChange}
            />
            <PageComponent />
        </>
    );
}

export default App;
