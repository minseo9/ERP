const Button = ({ text, clickEvent }) => {
    return (
        <button
            onClick={clickEvent}
            className="bg-default-gray min-h-[30px] min-w-[70px] cursor-pointer rounded-2xl px-3 text-xs"
        >
            {text}
        </button>
    );
};

export default Button;
