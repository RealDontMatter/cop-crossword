import { ThemeChanger } from "../components";

export function SettingsPage() {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center position-relative">
            <ThemeChanger />
            <div className="p-4 rounded-3 d-flex align-items-center flex-column gap-3 shadow">
                <h2 className="m-0">Choose Difficulty</h2>
                <div className="d-flex gap-3">
                    <button className="btn btn-success">Easy</button>
                    <button className="btn btn-warning">Normal</button>
                    <button className="btn btn-danger">Hard</button>
                </div>
                <div>
                    Do not know rules? Check
                    <button className="text-decoration-underline bg-transparent border-0 text-primary">
                        rules
                    </button>
                    page
                </div>
            </div>
        </div>
    );
}
