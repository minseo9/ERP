import Title from "../../components/Title";
import Button from "../../components/Button";

import FormInputFormat from "../../components/input-format/FormInputFormat";

const AnnualLeaveFormPage = () => {
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
        <div>
            <Title />
            <section className="m-auto flex-col items-center justify-center">
                <section>
                    <h2>연차 신청서</h2>
                </section>
                <section className="border-default-gray m-auto mt-15 grid w-2/3 border">
                    <div className="grid grid-cols-[1.5fr_3fr_1fr_4fr]">
                        <FormInputFormat label={"이름"} id={"name"} />
                        <FormInputFormat label={"부서"} id={"department"} />
                        <FormInputFormat label={"비상연락망"} id={"phone"} />
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
                <section className="m-auto mt-10 w-2/3">
                    <div className="mb-4 flex flex-col gap-4 text-center">
                        <span>
                            위와 같은 사유로 연차를 신청하오니 허락하여 주시기
                            바랍니다.
                        </span>
                        <span>2025년 8월 1일</span>
                    </div>
                    <div className="pr-20 text-end">부서 이름</div>
                </section>
            </section>
            <section className="mt-4 flex items-center justify-center gap-3">
                <Button text={"저장"} />
                <Button text={"제출"} />
            </section>
        </div>
    );
};

export default AnnualLeaveFormPage;
