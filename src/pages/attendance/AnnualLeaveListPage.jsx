import FormFormat from "../../components/input-format/FormFormat";
import TextInputFormat from "../../components/input-format/TextInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";
import Button from "../../components/Button";

const AnnualLeaveListPage = () => {
    const listLabel = [
        "사원번호",
        "이름",
        "부서",
        "연차 종류",
        "제출일",
        "상태",
    ];
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
    const stateList = ["전체", "승인 대기", "승인", "반려"];

    return (
        <div>
            <section className="flex flex-col justify-center gap-3">
                <section>
                    <FormFormat label={"제출일"} htmlFor={"submitDate"}>
                        <input
                            type="date"
                            id="submitDate"
                            className="default-input mr-3 px-3"
                        />
                        -
                        <input
                            type="date"
                            id="submitDate"
                            className="default-input ml-3 px-3"
                        />
                    </FormFormat>
                </section>
                <section className="flex items-center gap-4">
                    <TextInputFormat
                        label={"사원번호"}
                        id={"number"}
                        style={"default-input px-3"}
                    />
                    <TextInputFormat
                        label={"이름"}
                        id={"name"}
                        style={"default-input px-3"}
                    />
                    <SelectFormat
                        label={"연차 종류"}
                        id={"type"}
                        style={"default-input"}
                        list={annualLeaveType}
                    />
                    <SelectFormat
                        label={"신청 상태"}
                        id={"state"}
                        style={"default-input"}
                        list={stateList}
                    />
                    <Button text={"조회"} />
                </section>
            </section>
            <hr className="border-default-gray my-5" />
            <section></section>
            <section></section>
        </div>
    );
};

export default AnnualLeaveListPage;
