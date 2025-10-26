import {useWarning} from "../hooks/index.jsx";

export function WarningButton({text, warningText, onSuccess}){

    const [warningVisible, handleClick] = useWarning(onSuccess);
    return (
        <div className="d-flex gap-3 align-items-center mt-3">
            <button onClick={handleClick} className="btn btn-warning">{text}</button>
            {warningVisible && <div className="text-danger text-center">{warningText}</div>}
        </div>
    )
}