const SelectFormat = ({ label, id, style, list, isFlex = false }) => {
    return (
        <div className={isFlex ? "flex items-center" : ""}>
            <label htmlFor={id} className="mr-2 text-sm">
                {label}
            </label>
            <select
                id={id}
                className={
                    isFlex ? "bg-default-gray rounded-sm p-0.5 text-sm" : style
                }
            >
                {list.map((data) => (
                    <option value={data} key={data}>
                        {data}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectFormat;
