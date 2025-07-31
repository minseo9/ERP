import FormFormat from "../../components/input-format/FormFormat";
import TextInputFormat from "../../components/input-format/TextInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";
import Button from "../../components/Button";

import companyLogo from "../../assets/company-logo.png";

const EmployeeRegisterFormPage = () => {
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
        <div>
            <section className="mb-10 flex flex-col gap-4">
                <img
                    src={companyLogo}
                    alt="사원 사진"
                    className="h-[150px] w-[150px]"
                />
                <div className="flex gap-1 text-sm">
                    <Button text="사진 등록" />
                    <Button text="사진 삭제" />
                </div>
            </section>
            <section className="grid w-[1000px] grid-cols-2 gap-5">
                <TextInputFormat
                    label={"이름"}
                    id={"name"}
                    style={"form-input h-[28px] w-[350px]"}
                    isFlex
                />
                <TextInputFormat
                    label={"사원번호"}
                    id={"number"}
                    style={"form-input h-[28px] w-[350px]"}
                    isFlex
                />
                <TextInputFormat
                    label={"연락처"}
                    id={"phone"}
                    style={"form-input h-[28px] w-[350px]"}
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
                    style={"form-input h-[28px] w-[350px]"}
                    isFlex
                />
                <TextInputFormat
                    label={"이메일"}
                    id={"email"}
                    style={"form-input h-[28px] w-[350px]"}
                    isFlex
                />
                <FormFormat label={"성별"} htmlFor={null}>
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
                <FormFormat label={"입사일"} htmlFor={"date"}>
                    <div className="mt-2 flex items-center">
                        <input
                            type="date"
                            id="date"
                            className="form-input-date"
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
            <section className="mt-10 flex w-[900px] items-center justify-center gap-2">
                <Button text="등록" />
                <Button text="초기화" />
            </section>
        </div>
    );
};

export default EmployeeRegisterFormPage;
