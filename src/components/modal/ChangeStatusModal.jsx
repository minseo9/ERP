import Button from "../../components/Button";
import ModalCloseButton from "../ModalCloseButton";

const ChangeStatusModal = ({
    changeStatusModalOpen,
    closeChangeStatusModalOpen,
}) => {
    if (!changeStatusModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative h-[200px] w-[300px] rounded-xl bg-white py-5 shadow-xl">
                <ModalCloseButton clickEvent={closeChangeStatusModalOpen} />
                <section className="flex flex-col items-center justify-center gap-3">
                    <label htmlFor="" className="font-bold">
                        상태 변경
                    </label>
                    <select
                        name=""
                        id=""
                        className="form-input-select h-[30px] w-[100px] text-center"
                    >
                        <option value="승인">승인</option>
                        <option value="반려">반려</option>
                    </select>
                </section>
                <section className="absolute right-5 bottom-5">
                    <Button text={"저장"} />
                </section>
            </div>
        </div>
    );
};

export default ChangeStatusModal;
