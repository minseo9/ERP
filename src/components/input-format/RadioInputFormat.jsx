const RadioInputFormat = ({ title, children }) => {
    return (
        <div>
            <span className="mr-2 text-sm">{title}</span>
            <div className="accent-main mt-2 flex w-[123px] items-center gap-2 text-sm">
                {children}
            </div>
        </div>
    );
};

export default RadioInputFormat;
