import { useState } from "react";
import useShowData from "../../hooks/useShowData";

import Title from "../../components/Title";
import Button from "../../components/Button";
import ShowTable from "../../components/table/ShowTable";
import PageButton from "../../components/PageButton";

import SelectFormat from "../../components/input-format/SelectFormat";
import DateRangeInputFormat from "../../components/input-format/DateRangeInputFormat";
import TextInputFormat from "../../components/input-format/TextInputFormat";

const RetirementEmployeeListPage = () => {
    const listLabel = [
        "사원번호",
        "이름",
        "입사일",
        "퇴직일",
        "재직기간",
        "퇴직금",
    ];
    const dataList = [
        [
            "1001",
            "김민서",
            "2020-03-01",
            "2025-06-30",
            "5년 3개월",
            "50,000,000원",
        ],
        [
            "1002",
            "박지현",
            "2018-07-15",
            "2025-04-20",
            "6년 9개월",
            "62,000,000원",
        ],
        [
            "1003",
            "이준호",
            "2019-01-10",
            "2025-03-31",
            "6년 2개월",
            "58,500,000원",
        ],
        [
            "1004",
            "최유리",
            "2021-06-01",
            "2025-07-15",
            "4년 1개월",
            "45,000,000원",
        ],
        [
            "1005",
            "정우성",
            "2017-10-30",
            "2025-02-28",
            "7년 4개월",
            "70,000,000원",
        ],
        ["1006", "한예슬", "2022-01-05", "2025-01-05", "3년", "30,000,000원"],
        ["1007", "김지훈", "2016-05-20", "2025-05-31", "9년", "85,000,000원"],
        [
            "1008",
            "오하늬",
            "2015-12-01",
            "2025-06-01",
            "9년 6개월",
            "88,000,000원",
        ],
        [
            "1009",
            "배진영",
            "2023-02-28",
            "2025-07-01",
            "2년 5개월",
            "20,000,000원",
        ],
        [
            "1010",
            "윤보라",
            "2019-09-01",
            "2025-07-25",
            "5년 10개월",
            "55,000,000원",
        ],
        [
            "1011",
            "장도연",
            "2020-11-11",
            "2025-07-11",
            "4년 8개월",
            "48,000,000원",
        ],
    ];

    const [retirementEmployeePage, setRetirementEmployeePage] = useState(1);
    const viewRetirementEmployeeData = useShowData(
        retirementEmployeePage,
        dataList,
    );

    return (
        <div>
            <Title />
            <section className="flex flex-col justify-center gap-3">
                <section className="flex items-center gap-5">
                    <DateRangeInputFormat
                        label={"입사일"}
                        id={"joiningDate"}
                        leftStyle={"default-input mr-3 px-3"}
                        rightStyle={"default-input ml-3 px-3"}
                    />
                    <DateRangeInputFormat
                        label={"퇴직일"}
                        id={"retirementDate"}
                        leftStyle={"default-input mr-3 px-3"}
                        rightStyle={"default-input ml-3 px-3"}
                    />
                </section>
                <section className="flex items-center gap-4">
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
                    <div>
                        <span className="mr-2 text-sm">재직기간</span>
                        <input
                            type="text"
                            className="default-input mr-1 w-[40px] px-2"
                        />
                        년
                        <input
                            type="text"
                            className="default-input mx-1 w-[40px] px-2"
                        />
                        월
                        <input
                            type="text"
                            className="default-input mx-1 w-[40px] px-2"
                        />
                        일
                        <select className="default-input ml-3 pl-1">
                            <option>이상</option>
                            <option>이하</option>
                        </select>
                    </div>

                    <Button text={"조회"} />
                </section>
            </section>
            <hr />
            <section>
                <ShowTable
                    headList={listLabel}
                    bodyList={viewRetirementEmployeeData}
                />
            </section>
            <section className="flex justify-end gap-3 pt-4">
                <Button text={"퇴직 증명서 조회"} />
                <Button text={"퇴직금 명세서 조회"} />
            </section>
            <section>
                <PageButton
                    page={retirementEmployeePage}
                    length={dataList.length}
                />
            </section>
        </div>
    );
};

export default RetirementEmployeeListPage;
