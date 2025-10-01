import { useState } from "react";
const difficulties = ["Easy", "Medium", "Hard"];
export function SettingsPage({ onStart }) {
    const [selected, setSelected] = useState(difficulties[0]);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    padding: 32,
                    borderRadius: 12,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.1)",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 24,
                }}
            >
                <h2>Choose Difficulty</h2>
                <div style={{ display: "flex", gap: 16 }}>
                    {difficulties.map((diff) => (
                        <button
                            key={diff}
                            onClick={() => setSelected(diff)}
                            style={{
                                padding: "10px 24px",
                                borderRadius: 6,
                                border:
                                    selected === diff
                                        ? "2px solid #007bff"
                                        : "1px solid #ccc",
                                background:
                                    selected === diff ? "#e7f1ff" : "#f9f9f9",
                                cursor: "pointer",
                                fontWeight:
                                    selected === diff ? "bold" : "normal",
                            }}
                        >
                            {diff}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => onStart && onStart(selected)}
                    style={{
                        padding: "12px 32px",
                        borderRadius: 6,
                        border: "none",
                        background: "#007bff",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: 16,
                    }}
                >
                    Start Game
                </button>
            </div>
        </div>
    );
}
