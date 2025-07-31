const PageButton = ({ page, pageNumber }) => {
    return (
        <div>
            {page >= 6 && <button>{"< 이전"}</button>}
            <div className="flex gap-3">
                {Array.from({ length: 5 }, (_, i) =>
                    pageNumber > i ? (
                        <button
                            key={i}
                            className={i + 1 === page ? "text-black" : null}
                        >
                            {i + 1}
                        </button>
                    ) : null,
                )}
            </div>
            ;{pageNumber > 5 && <button>{"다음 >"}</button>}
        </div>
    );
};

export default PageButton;
