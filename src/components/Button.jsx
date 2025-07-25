const Button = ({ text }) => {
    return (
        <button className="bg-default-gray h-[30px] w-[70px] cursor-pointer rounded-2xl text-xs">
            {text}
        </button>
    );
};

export default Button;
