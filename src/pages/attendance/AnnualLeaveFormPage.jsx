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
                <section className="m-auto mt-15 w-2/3">
                    <div className="border-default-gray mb-3 flex items-center justify-center gap-1 border">
                        <label
                            htmlFor="name"
                            className="bg-default-gray px-3 py-2"
                        >
                            이름
                        </label>
                        <input type="text" id="name" className="flex-1" />
                        <label
                            htmlFor="department"
                            className="bg-default-gray px-3 py-2"
                        >
                            부서
                        </label>
                        <input type="text" id="department" className="flex-1" />
                        <label
                            htmlFor="position"
                            className="bg-default-gray px-3 py-2"
                        >
                            직급
                        </label>
                        <input type="text" id="position" className="flex-1" />
                    </div>
                    <div className="border-default-gray mb-3 flex items-center justify-center gap-1 border">
                        <label
                            htmlFor="type"
                            className="bg-default-gray px-3 py-2"
                        >
                            연차 종류
                        </label>
                        <select name="" id="type" className="flex-1">
                            {annualLeaveType.map((data) => (
                                <option value={data} key={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                        <label
                            htmlFor="phone"
                            className="bg-default-gray px-3 py-2"
                        >
                            비상연락망
                        </label>
                        <input type="text" id="phone" className="flex-1" />
                    </div>
                    <div className="border-default-gray mb-3 flex items-center gap-3 border">
                        <label
                            htmlFor="date"
                            className="bg-default-gray px-3 py-2"
                        >
                            기간
                        </label>
                        <input type="date" id="date" className="mr-2" />
                        -
                        <input type="date" id="date" className="ml-2" />
                    </div>
                    <div className="border-default-gray mb-3 flex h-[80px] border">
                        <label
                            htmlFor=""
                            className="bg-default-gray m-auto h-full px-3 py-6"
                        >
                            사유
                        </label>
                        <textarea className="h-full flex-1 resize-none p-2"></textarea>
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
