const DateInputFormat = ({
    label,
    id,
    type = "date",
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
                        type={type}
                        id={id}
                        className={style}
                        readOnly={isReadOnly}
                    />
                </div>
            ) : (
                <input
                    type={type}
                    id={id}
                    className={style}
                    readOnly={isReadOnly}
                />
            )}
        </div>
    );
};

export default DateInputFormat;
