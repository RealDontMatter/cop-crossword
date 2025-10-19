
export function HintContainer({ hints }) {
    return (
        <div className="position-absolute top-100 d-flex flex-column gap-1 h5 pt-5 ">
            {hints.map((value, index) => {
                return (
                    <div key={index}>
                        <span className={"fw-bold"}>{index + 1}:</span> {value}
                    </div>
                )
            })}
        </div>
    );
}