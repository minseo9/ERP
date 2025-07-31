const TextInputFormat = ({
    label,
    id,
    style,
    isFlex = false,
    isReadOnly = false,
}) => {
    return (
        <div>
            <label htmlFor={id} className="mr-2 text-sm">
                {label}
            </label>
            {isFlex === true ? (
                <div className="mt-2 flex items-center">
                    <input
                        type="text"
                        id={id}
                        className={style}
                        readOnly={isReadOnly}
                    />
                </div>
            ) : (
                <input
                    type="text"
                    id={id}
                    className={style}
                    readOnly={isReadOnly}
                />
            )}
        </div>
    );
};

export default TextInputFormat;
