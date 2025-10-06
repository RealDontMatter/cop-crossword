import { useState } from "react";

export function TmpPageSelector({ pages, selPageId, onPageChange }) {
    const [selectedPageId, setSelectedPageId] = useState(selPageId);

    const handleClick = (pageId) => {
        setSelectedPageId(pageId);
        if (onPageChange) {
            onPageChange(pageId);
        }
    };

    return (
        <nav className="d-flex align-items-center gap-3 p-2 bg-secondary">
            <span className="fs-3 text-danger me-3">Temporary Navbar</span>
            {pages.map((page) => (
                <button
                    key={page.name}
                    onClick={() => handleClick(page.id)}
                    className={
                        "py-2 px-3 border rounded rounded-2 border-0 btn " +
                        (selectedPageId === page.id
                            ? "btn-primary text-secondary fw-bold"
                            : "text-white")
                    }
                >
                    {page.name}
                </button>
            ))}
        </nav>
    );
}
