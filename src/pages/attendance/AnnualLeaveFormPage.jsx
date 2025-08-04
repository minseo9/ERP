import { useLocation } from "react-router-dom";

import Title from "../../components/Title";
import TextInputFormat from "../../components/input-format/TextInputFormat";
import FormFormat from "../../components/input-format/FormFormat";
import Button from "../../components/Button";

const AnnualLeaveFormPage = () => {
    const location = useLocation().state.category;

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
            <Title text={location} />
            <section className="m-auto flex-col items-center justify-center">
                <section>
                    <h2>연차 신청서</h2>
                </section>
                <section className="border-default-gray m-auto mt-15 grid w-2/3 border">
                    <div className="grid grid-cols-[1.5fr_3fr_1fr_4fr]">
                        <label
                            htmlFor="name"
                            className="bg-default-gray border-default-gray border-b py-3 text-center"
                        >
                            이름
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border-default-gray border-b px-3"
                        />
                        <label
                            htmlFor="department"
                            className="bg-default-gray border-default-gray border-b py-3 text-center"
                        >
                            부서
                        </label>
                        <input
                            type="text"
                            id="department"
                            className="border-default-gray border-b px-3"
                        />
                        <label
                            htmlFor="phone"
                            className="bg-default-gray border-default-gray border-b py-3 text-center"
                        >
                            비상연락망
                        </label>
                        <input
                            type="text"
                            id="phone"
                            className="border-default-gray border-b px-3"
                        />
                        <label
                            htmlFor="position"
                            className="bg-default-gray border-default-gray border-b py-3 text-center"
                        >
                            직급
                        </label>
                        <input
                            type="text"
                            id="position"
                            className="border-default-gray border-b px-3"
                        />
                    </div>
                    <div className="grid grid-cols-[1.5fr_3fr_1fr_4fr]">
                        <label
                            htmlFor="type"
                            className="bg-default-gray border-default-gray border-b py-3 text-center"
                        >
                            연차 종류
                        </label>
                        <select
                            name=""
                            id="type"
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
                            htmlFor=""
                            className="bg-default-gray border-default-gray border-b py-3 text-center"
                        >
                            사유
                        </label>
                        <textarea className="h-full resize-none p-2"></textarea>
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
