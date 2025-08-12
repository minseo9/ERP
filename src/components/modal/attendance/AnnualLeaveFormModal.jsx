import Button from "../../Button";
import ModalCloseButton from "../../ModalCloseButton";
import FormInputFormat from "../../input-format/FormInputFormat";
import ChangeStatusModal from "../ChangeStatusModal";

const AnnualLeaveFormModal = ({
    annualLeaveFormModalOpen,
    closeAnnualLeaveFormModal,
    changeStatusModalOpen,
    openChangeStatusModalOpen,
    closeChangeStatusModalOpen,
}) => {
    if (!annualLeaveFormModalOpen) return null;

    const annualLeaveType = [
        "전체",
        "연차",
        "반차",
        "대체휴가",
        "포상휴가",
        "경조사",
        "병가",
        "공가",
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
            <div className="relative h-[650px] w-full max-w-[800px] rounded-xl bg-white py-5 shadow-lg">
                <section className="px-10">
                    <ModalCloseButton clickEvent={closeAnnualLeaveFormModal} />
                    <h2>연차 신청서</h2>
                    <section className="border-default-gray mt-15 grid border">
                        <div className="grid grid-cols-[1.5fr_3fr_1fr_4fr]">
                            <FormInputFormat label={"이름"} id={"name"} />
                            <FormInputFormat label={"부서"} id={"department"} />
                            <FormInputFormat
                                label={"비상연락망"}
                                id={"phone"}
                            />
                            <FormInputFormat label={"직급"} id={"position"} />
                        </div>
                        <div className="grid grid-cols-[1.5fr_3fr_1fr_4fr]">
                            <label
                                htmlFor="annualLeaveType"
                                className="bg-default-gray border-default-gray border-b py-3 text-center"
                            >
                                연차 종류
                            </label>
                            <select
                                name="annualLeaveType"
                                id="annualLeaveType"
                                className="border-default-gray border-b px-3"
                            >
                                {annualLeaveType.map((data) => (
                                    <option value={data} key={data}>
                                        {data}
                                    </option>
                                ))}
                            </select>
                            <label
                                htmlFor="date"
                                className="bg-default-gray border-default-gray border-b py-3 text-center"
                            >
                                기간
                            </label>
                            <div className="border-default-gray flex items-center justify-center gap-4 border-b">
                                <input type="date" id="date" className="" />
                                -
                                <input type="date" id="date" className="" />
                            </div>
                        </div>
                        <div className="grid h-[80px] grid-cols-[1.5fr_8fr]">
                            <label
                                htmlFor="reason"
                                className="bg-default-gray border-default-gray border-b py-3 text-center"
                            >
                                사유
                            </label>
                            <textarea
                                id="reason"
                                className="h-full resize-none p-2"
                            ></textarea>
                        </div>
                    </section>
                    <section className="m-auto mt-10">
                        <div className="mb-4 flex flex-col gap-4 text-center">
                            <span>
                                위와 같은 사유로 연차를 신청하오니 허락하여
                                주시기 바랍니다.
                            </span>
                            <span>2025년 8월 1일</span>
                        </div>
                        <div className="pr-20 text-end">부서 이름</div>
                    </section>
                    <section className="absolute right-8 bottom-8 flex gap-2">
                        <Button
                            text={"상태 변경"}
                            clickEvent={openChangeStatusModalOpen}
                        />
                        <Button text={"수정"} />
                    </section>
                </section>
                <ChangeStatusModal
                    changeStatusModalOpen={changeStatusModalOpen}
                    closeChangeStatusModalOpen={closeChangeStatusModalOpen}
                />
            </div>
        </div>
    );
};

export default AnnualLeaveFormModal;
