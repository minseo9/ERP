const FormFormat = ({ label, htmlFor, children }) => {
    return (
        <div>
            <label htmlFor={htmlFor} className="mr-2 text-sm">
                {label}
            </label>
            {children}
        </div>
    );
};

export default FormFormat;
