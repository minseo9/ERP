import Button from "../../Button";
import ModalCloseButton from "../../ModalCloseButton";
import FormInputFormat from "../../input-format/FormInputFormat";
import ChangeStatusModal from "../ChangeStatusModal";

const RetirementFormModal = ({
    retirementFormModalOpen,
    closeRetirementFormModal,
    changeStatusModalOpen,
    openChangeStatusModalOpen,
    closeChangeStatusModalOpen,
}) => {
    if (!retirementFormModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
            <div className="relative h-[650px] w-full max-w-[800px] rounded-xl bg-white py-5 shadow-lg">
                <ModalCloseButton clickEvent={closeRetirementFormModal} />
                <section className="px-10">
                    <h2>퇴직 신청서</h2>
                    <section className="border-default-gray mt-10 grid border">
                        <div className="grid grid-cols-[1fr_3fr_1fr_3fr]">
                            <FormInputFormat
                                label={"사원번호"}
                                id={"employeeNumber"}
                            />
                            <FormInputFormat label={"부서"} id={"department"} />
                            <FormInputFormat label={"이름"} id={"name"} />
                            <FormInputFormat label={"직급"} id={"position"} />
                            <FormInputFormat
                                label={"입사일"}
                                id={"joiningDate"}
                                type={"date"}
                            />
                            <FormInputFormat
                                label={"퇴직 예정일"}
                                id={"expectedRetirementDate"}
                                type={"date"}
                            />
                        </div>
                        <div className="grid grid-cols-[1fr_7fr]">
                            <label
                                htmlFor="reason"
                                className="bg-default-gray py-15 text-center"
                            >
                                사유
                            </label>
                            <textarea
                                id="reason"
                                className="resize-none p-3"
                            ></textarea>
                        </div>
                    </section>
                    <section className="m-auto mt-10">
                        <div className="mb-4 flex flex-col gap-4 text-center">
                            <span>
                                본인은 퇴직에 따른 회사 규정 및 절차를 충분히
                                이해하였으며, 이에 동의합니다.
                            </span>
                            <span>2025년 8월 1일</span>
                        </div>
                        <div className="pr-20 text-end">부서 이름</div>
                    </section>
                </section>
                <section className="absolute right-8 bottom-8 flex gap-2">
                    <Button
                        text={"상태 변경"}
                        clickEvent={openChangeStatusModalOpen}
                    />
                    <Button text={"수정"} />
                </section>
                <ChangeStatusModal
                    changeStatusModalOpen={changeStatusModalOpen}
                    closeChangeStatusModalOpen={closeChangeStatusModalOpen}
                />
            </div>
        </div>
    );
};

export default RetirementFormModal;
