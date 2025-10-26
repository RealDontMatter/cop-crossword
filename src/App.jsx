import { useState } from "react";
import { SettingsPage } from "./pages";

function App() {
    const [currentPage, setCurrentPage] = useState({
        component: SettingsPage,
        props: {},
    });

    const renderPage = () => {
        let { component: PageComponent, props } = currentPage;
        return <PageComponent {...props} setCurrentPage={setCurrentPage} />;
    };

    return <div>{renderPage()}</div>;
}

export default App;
