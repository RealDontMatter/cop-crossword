export function TmpPageSelector({ pages, currentPage, setCurrentPage }) {
    return (
        <nav className="d-flex align-items-center gap-3 p-2 bg-secondary">
            <span className="fs-3 text-danger me-3">Temporary Navbar</span>
            {pages.map((page) => (
                <button
                    key={page.name}
                    onClick={(ev) => setCurrentPage(ev.target.textContent)}
                    className={
                        "py-2 px-3 border rounded rounded-2 border-0 btn " +
                        (currentPage === page.name
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
