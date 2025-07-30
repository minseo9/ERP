import FormFormat from "../../components/FormFormat";
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
                <FormFormat label={"이름"} htmlFor={"id"}>
                    <div className="mt-2 flex items-center">
                        <input
                            type="text"
                            id="id"
                            className="form-input h-[28px] w-[350px]"
                        />
                    </div>
                </FormFormat>
                <FormFormat label={"사원번호"} htmlFor={"number"}>
                    <div className="mt-2 flex items-center"></div>
                    <input
                        type="text"
                        id="number"
                        className="form-input h-[28px] w-[350px]"
                    />
                </FormFormat>
                <FormFormat label={"연락처"} htmlFor={"phone"}>
                    <div className="mt-2 flex items-center">
                        <input
                            type="text"
                            id="phone"
                            className="form-input h-[28px] w-[350px]"
                        />
                    </div>
                </FormFormat>
                <FormFormat label={"생년월일"} htmlFor={"birthday"}>
                    <div className="mt-2 flex items-center">
                        <input
                            type="date"
                            id="birthday"
                            className="form-input-date"
                        />
                    </div>
                </FormFormat>
                <FormFormat label={"주소"} htmlFor={"address"}>
                    <div className="mt-2 flex items-center">
                        <input
                            type="text"
                            id="address"
                            className="form-input h-[28px] w-[350px]"
                        />
                    </div>
                </FormFormat>
                <FormFormat label={"이메일"} htmlFor={"email"}>
                    <div className="mt-2 flex items-center">
                        <input
                            type="text"
                            id="email"
                            className="form-input h-[28px] w-[350px]"
                        />
                    </div>
                </FormFormat>
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
                <FormFormat label={"직급"} htmlFor={"position"}>
                    <select id="department" className="form-input-select">
                        {positionList.map((data) => (
                            <option value={data} key={data}>
                                {data}
                            </option>
                        ))}
                    </select>
                </FormFormat>
                <FormFormat label={"부서"} htmlFor={"department"}>
                    <select name="" id="position" className="form-input-select">
                        {departmentList.map((data) => (
                            <option value={data} key={data}>
                                {data}
                            </option>
                        ))}
                    </select>
                </FormFormat>
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
