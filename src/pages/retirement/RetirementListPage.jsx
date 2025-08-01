import { useState } from "react";
import { useLocation } from "react-router-dom";
import useShowData from "../../hooks/useShowData";

import Title from "../../components/Title";
import FormFormat from "../../components/input-format/FormFormat";
import TextInputFormat from "../../components/input-format/TextInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";
import Button from "../../components/Button";
import ShowTable from "../../components/table/ShowTable";
import PageButton from "../../components/PageButton";

const RetirementListPage = () => {
    const location = useLocation().state.category;

    const stateList = ["전체", "접수", "승인", "반려"];
    const listLabel = [
        "사원번호",
        "이름",
        "신청서",
        "신청일",
        "퇴직 예정일",
        "상태",
        "확인 날짜",
        "담당자",
    ];
    const resignationData = [
        [
            "1001",
            "김민수",
            "퇴직 신청서",
            "2025-07-01",
            "2025-08-01",
            "접수",
            "2025-07-02",
            "이하늘",
        ],
        [
            "1002",
            "박지현",
            "퇴직 신청서",
            "2025-07-05",
            "2025-08-05",
            "승인",
            "2025-07-06",
            "최서연",
        ],
        [
            "1003",
            "이준호",
            "퇴직 신청서",
            "2025-07-07",
            "2025-08-07",
            "반려",
            "2025-07-08",
            "정예린",
        ],
        [
            "1004",
            "정유진",
            "퇴직 신청서",
            "2025-07-08",
            "2025-08-10",
            "접수",
            "2025-07-09",
            "김나연",
        ],
        [
            "1005",
            "최윤호",
            "퇴직 신청서",
            "2025-07-09",
            "2025-08-11",
            "승인",
            "2025-07-10",
            "이상우",
        ],
        [
            "1006",
            "한지원",
            "퇴직 신청서",
            "2025-07-10",
            "2025-08-15",
            "접수",
            "2025-07-11",
            "윤다은",
        ],
        [
            "1007",
            "서동현",
            "퇴직 신청서",
            "2025-07-12",
            "2025-08-20",
            "반려",
            "2025-07-13",
            "김해진",
        ],
        [
            "1008",
            "정세린",
            "퇴직 신청서",
            "2025-07-13",
            "2025-08-21",
            "승인",
            "2025-07-14",
            "박예준",
        ],
        [
            "1009",
            "문하연",
            "퇴직 신청서",
            "2025-07-14",
            "2025-08-25",
            "접수",
            "2025-07-15",
            "오승현",
        ],
        [
            "1010",
            "강도윤",
            "퇴직 신청서",
            "2025-07-15",
            "2025-08-28",
            "접수",
            "2025-07-16",
            "이서진",
        ],
        [
            "1011",
            "배지우",
            "퇴직 신청서",
            "2025-07-16",
            "2025-08-30",
            "반려",
            "2025-07-17",
            "임예빈",
        ],
    ];

    const [RetirementPage, setRetirementPage] = useState(1);
    const viewRetirementData = useShowData(RetirementPage, resignationData);

    return (
        <div>
            <Title text={location} />
            <section className="flex flex-col gap-3">
                <section className="flex gap-4">
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
                    <FormFormat label={"퇴직 예정일"} htmlFor={"submitDate"}>
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
                    <TextInputFormat
                        label={"담당자"}
                        id={"checker"}
                        style={"default-input px-3"}
                    />
                    <SelectFormat
                        label={"신청 상태"}
                        id={"state"}
                        style={"default-input"}
                        list={stateList}
                    />
                    <Button text={"조회"} />
                </section>
                <hr />
            </section>
            <section>
                <ShowTable
                    headList={listLabel}
                    bodyList={viewRetirementData}
                    isHeadCheck
                />
            </section>
            <section className="flex justify-end gap-4 pt-4">
                <Button text={"상태 변경"} />
                <Button text={"삭제"} />
            </section>
            <section>
                <PageButton
                    page={RetirementPage}
                    length={resignationData.length}
                />
            </section>
        </div>
    );
};

export default RetirementListPage;
