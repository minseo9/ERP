import FormFormat from "../../components/input-format/FormFormat";
import TextInputFormat from "../../components/input-format/TextInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";
import Button from "../../components/Button";

import companyLogo from "../../assets/company-logo.png";
import closeIcon from "../../assets/close-icon.png";

const EmployeeEditFormModal = ({ modalOpen, closeModal }) => {
    if (!modalOpen) return null;

    const positionList = [
        "사원",
        "주임",
        "대리",
        "과장",
        "차장",
        "부장",
        "이사",
    ];
    const departmentList = [
        "보안 사업부",
        "솔루션 사업부",
        "컨설팅 사업부",
        "기술본부",
        "기술연구소",
        "기술1팀",
        "기술2팀",
        "경영지원부",
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
            <div className="relative h-[650px] w-full max-w-[600px] rounded-xl bg-white py-5 shadow-lg">
                <section className="px-6 text-end">
                    <button
                        onClick={closeModal}
                        className="h-[20px] w-[20px] cursor-pointer"
                    >
                        <img src={closeIcon} alt="취소 버튼" />
                    </button>
                </section>
                <section className="mb-6 flex gap-3 pl-25">
                    <img
                        src={companyLogo}
                        alt="사원 사진"
                        className="h-[130px] w-[130px]"
                    />
                    <div className="flex items-end justify-end">
                        <button className="bg-default-gray cursor-pointer rounded-sm px-2 py-1 text-xs">
                            사진 수정
                        </button>
                    </div>
                </section>
                <section className="mx-auto grid w-fit grid-cols-2 gap-x-10 gap-y-3">
                    <TextInputFormat
                        label={"사원번호"}
                        id={"number"}
                        style={"form-input py-1"}
                        isFlex
                        isReadOnly
                    />
                    <TextInputFormat
                        label={"이름"}
                        id={"name"}
                        style={"form-input py-1"}
                        isFlex
                    />
                    <TextInputFormat
                        label={"연락처"}
                        id={"phone"}
                        style={"form-input py-1"}
                        isFlex
                    />
                    <FormFormat label={"생년월일"} htmlFor={"birthday"}>
                        <div className="mt-2 flex items-center">
                            <input
                                type="date"
                                id="birthday"
                                className="form-input-date"
                            />
                        </div>
                    </FormFormat>
                    <TextInputFormat
                        label={"주소"}
                        id={"address"}
                        style={"form-input py-1"}
                        isFlex
                    />
                    <TextInputFormat
                        label={"이메일"}
                        id={"email"}
                        style={"form-input py-1"}
                        isFlex
                    />
                    <FormFormat label={"성별"} htmlFor={"name"}>
                        <div className="accent-main mt-2 flex w-[123px] items-center gap-2 text-sm">
                            <label htmlFor="man">남자</label>
                            <input
                                type="radio"
                                id="man"
                                name="gender"
                                className="mr-3"
                            />
                            <label htmlFor="woman">여자</label>
                            <input type="radio" id="woman" name="gender" />
                        </div>
                    </FormFormat>
                    <FormFormat label={"입사일"} htmlFor={"name"}>
                        <div className="mt-2 flex items-center">
                            <input
                                type="date"
                                id="id"
                                className="form-input-date"
                                readOnly
                            />
                        </div>
                    </FormFormat>
                    <SelectFormat
                        label={"직급"}
                        id={"position"}
                        style={"form-input-select"}
                        list={positionList}
                    />
                    <SelectFormat
                        label={"부서"}
                        id={"department"}
                        style={"form-input-select"}
                        list={departmentList}
                    />
                    <FormFormat label={"상태"} htmlFor={null}>
                        <div className="accent-main mt-2 flex w-[123px] items-center gap-2 text-sm">
                            <label htmlFor="work">재직</label>
                            <input
                                type="radio"
                                id="work"
                                name="state"
                                className="mr-3"
                            />
                            <label htmlFor="retirement">퇴직</label>
                            <input type="radio" id="retirement" name="state" />
                        </div>
                    </FormFormat>
                </section>
                <section className="absolute right-5 bottom-5">
                    <Button text="수정" />
                </section>
            </div>
        </div>
    );
};

export default EmployeeEditFormModal;
