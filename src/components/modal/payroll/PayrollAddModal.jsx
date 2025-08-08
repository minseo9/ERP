import ModalCloseButton from "../../ModalCloseButton";
import SelectFormat from "../../input-format/SelectFormat";
import TextInputFormat from "../../input-format/TextInputFormat";
import Button from "../../Button";

const PayrollAddModal = ({
    payrollAddModalOpen,
    closePayrollAddModal,
    addType,
}) => {
    if (!payrollAddModalOpen) return null;

    const allowanceList = ["기본급", "직책수당"];
    const deductionList = ["국민연금", "건강보험", "고용보험"];

    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
                <div className="relative h-[250px] w-full max-w-[400px] rounded-xl bg-white py-5 shadow-lg">
                    <ModalCloseButton clickEvent={closePayrollAddModal} />
                    <section className="flex flex-col gap-6 px-10">
                        <div className="font-bold">{addType} 추가</div>
                        <SelectFormat
                            label={addType}
                            list={
                                addType === "지급 항목"
                                    ? allowanceList
                                    : deductionList
                            }
                            style={"form-input-select"}
                            isFlex
                        />
                        <TextInputFormat
                            label={"금액"}
                            style={"form-input h-[30px]"}
                        />
                    </section>
                    <section className="absolute right-7 bottom-7">
                        <Button text={"추가"} />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PayrollAddModal;
