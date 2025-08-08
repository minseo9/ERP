import TextInputFormat from "../input-format/TextInputFormat";
import SelectFormat from "../input-format/SelectFormat";
import Button from "../Button";

import closeIcon from "../../assets/close-icon.png";

const AttendanceEditFormModal = ({ modalOpen, closeModal }) => {
    if (!modalOpen) return null;

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
            <div className="relative h-[600px] w-full max-w-[600px] rounded-xl bg-white py-5 shadow-lg">
                <section className="px-6 text-end">
                    <button
                        onClick={closeModal}
                        className="h-[20px] w-[20px] cursor-pointer"
                    >
                        <img src={closeIcon} alt="취소 버튼" />
                    </button>
                </section>
                <section className="px-10 py-4">
                    <div className="font-bold">사원번호 이름의 근태 정보</div>
                    <section className="mt-10 ml-19 flex flex-col gap-10">
                        <div className="flex gap-5">
                            <TextInputFormat
                                label={"출근시간"}
                                id={"time"}
                                style={"form-input"}
                                isFlex
                            />
                            <TextInputFormat
                                label={"퇴근시간"}
                                id={"time"}
                                style={"form-input"}
                                isFlex
                            />
                        </div>
                        <TextInputFormat
                            label={"초과시간"}
                            id={"time"}
                            style={"form-input w-[100px]"}
                            isFlex
                            isReadOnly
                        />
                        <div>
                            <label htmlFor="" className="mr-2">
                                외근 여부
                            </label>
                            <input type="checkbox" className="accent-main" />
                        </div>
                        <div className="flex gap-5">
                            <SelectFormat
                                label={"연차"}
                                id={"annualLeave"}
                                style={"form-input-select"}
                                list={annualLeaveType}
                            />
                            <SelectFormat
                                label={"기타"}
                                id={"etc"}
                                style={"form-input-select"}
                                list={["지각", "결석", "조퇴"]}
                            />
                        </div>
                    </section>
                </section>
                <section className="absolute right-10 bottom-10">
                    <Button text="수정" />
                </section>
            </div>
        </div>
    );
};

export default AttendanceEditFormModal;
