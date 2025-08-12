import Title from "../../components/Title";
import Button from "../../components/Button";

import FormInputFormat from "../../components/input-format/FormInputFormat";

const RetirementFormPage = () => {
    return (
        <div>
            <Title />
            <section className="m-auto flex-col items-center justify-center">
                <section>
                    <h2>퇴직 신청서</h2>
                </section>
                <section className="border-default-gray m-auto mt-15 grid w-2/3 border">
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
                <section className="m-auto mt-10 w-2/3">
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
            <section className="mt-4 flex items-center justify-center gap-3">
                <Button text={"저장"} />
                <Button text={"제출"} />
            </section>
        </div>
    );
};

export default RetirementFormPage;
