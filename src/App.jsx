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
    const [currentPage, setCurrentPage] = useState({
        component: SettingsPage,
        props: {},
    });

    const renderPage = () => {
        let { component: PageComponent, props } = currentPage;
        return <PageComponent {...props} setCurrentPage={setCurrentPage} />;
    };

    return (
        <>
            <TmpPageSelector
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <div>{renderPage()}</div>
        </>
    );
}

export default App;
