import TextInputFormat from "../../input-format/TextInputFormat";
import SelectFormat from "../../input-format/SelectFormat";
import Button from "../../Button";
import ModalCloseButton from "../../ModalCloseButton";

const DeductionAddModal = ({ deductionModalOpen, ModalCloseButton }) => {
    if (!deductionModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
            <div className="relative h-[350px] w-full max-w-[450px] rounded-xl bg-white py-5 shadow-lg">
                <ModalCloseButton clickEvent={ModalCloseButton} />
                <section className="flex flex-col gap-5 px-10">
                    <div className="mb-3 font-bold">공제 항목 추가</div>
                    <TextInputFormat
                        label={"공제명칭"}
                        style={"form-input h-[30px]"}
                    />
                    <SelectFormat
                        label={"공제구분"}
                        list={["법정공제", "임의공제"]}
                        isFlex
                    />
                    <TextInputFormat
                        label={"공제율"}
                        style={"form-input h-[30px] ml-3"}
                    />
                </section>
                <section className="absolute right-8 bottom-8">
                    <Button text={"추가"} />
                </section>
            </div>
        </div>
    );
};

export default DeductionAddModal;
