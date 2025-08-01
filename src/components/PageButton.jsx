const PageButton = ({ page, length }) => {
    const pageNumber = Math.ceil(length / 10);

    return (
        <div className="flex cursor-pointer items-center justify-center gap-5 text-sm text-gray-500">
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
            {pageNumber > 5 && <button>{"다음 >"}</button>}
        </div>
    );
};

export default PageButton;
