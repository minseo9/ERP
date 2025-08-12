const CheckBoxInputFormat = ({ label, id }) => {
    return (
        <div>
            <label htmlFor={id} className="mr-2 text-sm">
                {label}
            </label>
            <input type="checkbox" id={id} className="accent-main" />
        </div>
    );
};

export default CheckBoxInputFormat;
