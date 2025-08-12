const FormInputFormat = ({ label, id, type = "text" }) => {
    return (
        <>
            <label
                htmlFor={id}
                className="bg-default-gray border-default-gray border-b py-3 text-center"
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="border-default-gray border-b px-3"
            />
        </>
    );
};

export default FormInputFormat;
