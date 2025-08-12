const DateRangeInputFormat = ({ label, id, leftStyle, rightStyle }) => {
    return (
        <div>
            <label htmlFor={id} className="mr-2 text-sm">
                {label}
            </label>
            <input type="date" id={id} className={leftStyle} />
            -
            <input type="date" className={rightStyle} />
        </div>
    );
};

export default DateRangeInputFormat;
