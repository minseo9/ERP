import closeIcon from "../assets/close-icon.png";

const ModalCloseButton = ({ clickEvent }) => {
    return (
        <div className="px-6 text-end">
            <button
                onClick={clickEvent}
                className="h-[15px] w-[15px] cursor-pointer"
            >
                <img src={closeIcon} alt="취소 버튼" />
            </button>
        </div>
    );
};

export default ModalCloseButton;
