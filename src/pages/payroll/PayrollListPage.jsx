import { useState } from "react";
import useShowData from "../../hooks/useShowData";

import Title from "../../components/Title";
import Button from "../../components/Button";
import ShowTable from "../../components/table/ShowTable";
import PageButton from "../../components/PageButton";

import TextInputFormat from "../../components/input-format/TextInputFormat";
import DateInputFormat from "../../components/input-format/DateInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";

const PayrollListPage = () => {
    const positionList = [
        "전체",
        "사원",
        "주임",
        "대리",
        "과장",
        "차장",
        "부장",
        "이사",
    ];
    const departmentList = [
        "전체",
        "보안 사업부",
        "솔루션 사업부",
        "컨설팅 사업부",
        "기술본부",
        "기술연구소",
        "기술1팀",
        "기술2팀",
        "경영지원부",
    ];
    const listLabel = [
        "사원번호",
        "이름",
        "부서",
        "직급",
        "지급일",
        "지급총액",
        "공제항목",
        "실지급액",
    ];
    const dataList = [
        [
            "1001",
            "김민서",
            "개발팀",
            "사원",
            "2025-07-25",
            "3,000,000원",
            "500,000원",
            "2,500,000원",
        ],
        [
            "1002",
            "박지현",
            "디자인팀",
            "대리",
            "2025-07-25",
            "3,500,000원",
            "600,000원",
            "2,900,000원",
        ],
        [
            "1003",
            "이준호",
            "영업팀",
            "과장",
            "2025-07-25",
            "4,200,000원",
            "600,000원",
            "3,600,000원",
        ],
        [
            "1004",
            "최유리",
            "인사팀",
            "주임",
            "2025-07-25",
            "3,200,000원",
            "500,000원",
            "2,700,000원",
        ],
        [
            "1005",
            "정우성",
            "총무팀",
            "차장",
            "2025-07-25",
            "4,800,000원",
            "700,000원",
            "4,100,000원",
        ],
        [
            "1006",
            "한예슬",
            "기획팀",
            "사원",
            "2025-07-25",
            "3,000,000원",
            "450,000원",
            "2,550,000원",
        ],
        [
            "1007",
            "김지훈",
            "개발팀",
            "대리",
            "2025-07-25",
            "3,800,000원",
            "600,000원",
            "3,200,000원",
        ],
        [
            "1008",
            "오하늬",
            "디자인팀",
            "과장",
            "2025-07-25",
            "4,100,000원",
            "600,000원",
            "3,500,000원",
        ],
        [
            "1009",
            "배진영",
            "영업팀",
            "사원",
            "2025-07-25",
            "2,800,000원",
            "400,000원",
            "2,400,000원",
        ],
        [
            "1010",
            "윤보라",
            "기획팀",
            "주임",
            "2025-07-25",
            "3,500,000원",
            "500,000원",
            "3,000,000원",
        ],
        [
            "1011",
            "장도연",
            "개발팀",
            "대리",
            "2025-07-25",
            "3,900,000원",
            "600,000원",
            "3,300,000원",
        ],
    ];

    const [payrollPage, setPayrollPage] = useState(1);
    const viewPayrollData = useShowData(payrollPage, dataList);

    return (
        <div>
            <section className="flex items-center gap-4">
                <DateInputFormat
                    label={"조회기간"}
                    id={"searchMonth"}
                    type={"month"}
                    style={"default-input px-3"}
                />
                <TextInputFormat
                    label={"사원번호"}
                    id={"employeeNumber"}
                    style={"default-input px-3"}
                />
                <TextInputFormat
                    label={"이름"}
                    id={"name"}
                    style={"default-input px-3"}
                />
                <SelectFormat
                    label={"부서"}
                    id={"department"}
                    list={departmentList}
                    style={"default-input pl-1"}
                />
                <SelectFormat
                    label={"직급"}
                    id={"position"}
                    list={positionList}
                    style={"default-input pl-1"}
                />
                <Button text={"조회"} />
            </section>
            <hr />
            <section className="flex gap-2">
                <section className="border-default-gray flex-2 rounded-md border px-2 py-3">
                    <Title text={"월별 급여 내역"} />
                    <ShowTable headList={listLabel} bodyList={dataList} />
                    <section className="mt-4">
                        <PageButton
                            page={payrollPage}
                            length={dataList.length}
                        />
                    </section>
                </section>
                <section className="border-default-gray flex-1 rounded-md border px-2 py-3">
                    <section section className="mb-5">
                        <Title text={"지급항목내역"} />
                        <ShowTable
                            headList={["지급항목", "금액"]}
                            bodyList={[
                                ["TOTAL", "2,300,000"],
                                ["기본급", "2,000,000"],
                                ["직책수당", ""],
                                ["식대", "100,000"],
                                ["야간수당", ""],
                            ]}
                            isDefaultList
                        />
                    </section>
                    <section>
                        <Title text={"공제항목내역"} />
                        <ShowTable
                            headList={["공제항목", "금액"]}
                            bodyList={[
                                ["TOTAL", "209,670"],
                                ["국민연금", "68,980"],
                                ["건강보험", "48,850"],
                                ["고용보험", "23,460"],
                                ["소득세", ""],
                            ]}
                            isDefaultList
                        />
                    </section>
                    <section className="mt-5 text-end">
                        <Button text={"급여명세서 출력"} />
                    </section>
                </section>
            </section>
        </div>
    );
};

export default PayrollListPage;
