import {useState} from "react";
import { SettingsPage } from "./pages";
import {AppContext} from "./AppContext.jsx"

function App() {
    const [currentPage, setCurrentPage] = useState({
        component: SettingsPage,
        props: {},
    });
    const [context, setContext] = useState({});

    const renderPage = () => {
        let { component: PageComponent, props } = currentPage;
        return <PageComponent {...props} setCurrentPage={setCurrentPage} />;
    };

    return (
        <AppContext.Provider value={{context, setContext}}>
            <div>{renderPage()}</div>
        </AppContext.Provider>
    );
}

export default App;
