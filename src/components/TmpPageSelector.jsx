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
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "0.5rem",
                background: "#eee",
            }}
        >
            <span
                style={{
                    fontSize: "1.5rem",
                    color: "darkred",
                    margin: "0 0.5rem 0 0",
                }}
            >
                Temporary Navbar
            </span>
            {pages.map((page) => (
                <button
                    key={page.id}
                    onClick={() => handleClick(page.id)}
                    className=""
                    style={{
                        padding: "0.5rem 1rem",
                        border: "none",
                        background:
                            selectedPageId === page.id
                                ? "#007bff"
                                : "transparent",
                        color: selectedPageId === page.id ? "#fff" : "#333",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight:
                            selectedPageId === page.id ? "bold" : "normal",
                        boxShadow:
                            selectedPageId === page.id
                                ? "0 2px 8px rgba(0,0,0,0.1)"
                                : "none",
                        transition: "background 0.2s, color 0.2s",
                    }}
                >
                    {page.name}
                </button>
            ))}
        </nav>
    );
}
