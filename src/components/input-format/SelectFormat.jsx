const SelectFormat = ({ label, id, style, list }) => {
    return (
        <div>
            <label htmlFor={id} className="mr-2 text-sm">
                {label}
            </label>
            <select id={id} className={style}>
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
