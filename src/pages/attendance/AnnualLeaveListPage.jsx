import { useState } from "react";
import useShowData from "../../hooks/useShowData";

import Title from "../../components/Title";
import FormFormat from "../../components/input-format/FormFormat";
import TextInputFormat from "../../components/input-format/TextInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";
import Button from "../../components/Button";
import ShowTable from "../../components/table/ShowTable";
import PageButton from "../../components/PageButton";

import AnnualLeaveFormModal from "../../components/modal/attendance/AnnualLeaveFormModal";
import ChangeStatusModal from "../../components/modal/ChangeStatusModal";

const AnnualLeaveListPage = () => {
    const listLabel = [
        "사원번호",
        "이름",
        "부서",
        "신청서",
        "연차 종류",
        "신청일",
        "상태",
        "확인 날짜",
        "담당자",
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
    const stateList = ["전체", "접수", "승인", "반려"];
    const annualLeaveData = [
        [
            "1001",
            "김민서",
            "기술1팀",
            "연차 신청서",
            "연차",
            "2025-07-01",
            "승인 대기",
            "",
        ],
        [
            "1002",
            "이재훈",
            "보안 사업부",
            "연차 신청서",
            "반차",
            "2025-07-03",
            "승인",
            "김담당",
        ],
        [
            "1003",
            "박수빈",
            "경영지원부",
            "연차 신청서",
            "대체휴가",
            "2025-07-04",
            "반려",
            "김담당",
        ],
        [
            "1004",
            "최현우",
            "기술2팀",
            "연차 신청서",
            "포상휴가",
            "2025-07-05",
            "승인",
            "김담당",
        ],
        [
            "1005",
            "정세영",
            "기술본부",
            "연차 신청서",
            "연차",
            "2025-07-07",
            "승인 대기",
            "",
        ],
        [
            "1006",
            "한예진",
            "컨설팅 사업부",
            "연차 신청서",
            "병가",
            "2025-07-10",
            "승인",
            "김담당",
        ],
        [
            "1007",
            "김도윤",
            "솔루션 사업부",
            "연차 신청서",
            "공가",
            "2025-07-11",
            "반려",
            "김담당",
        ],
        [
            "1008",
            "이소민",
            "기술연구소",
            "연차 신청서",
            "경조사",
            "2025-07-12",
            "승인 대기",
            "",
        ],
        [
            "1009",
            "장우석",
            "기술2팀",
            "연차 신청서",
            "반차",
            "2025-07-14",
            "승인",
            "김담당",
        ],
        [
            "1010",
            "배지민",
            "보안 사업부",
            "연차 신청서",
            "연차",
            "2025-07-15",
            "승인",
            "김담당",
        ],
        [
            "1011",
            "서정우",
            "기술1팀",
            "연차 신청서",
            "대체휴가",
            "2025-07-16",
            "반려",
            "김담당",
        ],
    ];

    const [annualLeavePage, setAnnualLeavePage] = useState(1);
    const viewAnnualLeaveData = useShowData(annualLeavePage, annualLeaveData);
    const [annualLeaveFormModalOpen, setAnnualLeaveFormModalOpen] =
        useState(false);
    const [changeStatusModalOpen, setChangeStatusModalOpen] = useState(false);

    const openAnnualLeaveFormModal = () => {
        setAnnualLeaveFormModalOpen(true);
    };
    const closeAnnualLeaveFormModal = () => {
        setAnnualLeaveFormModalOpen(false);
    };
    const openChangeStatusModalOpen = () => {
        setChangeStatusModalOpen(true);
    };
    const closeChangeStatusModalOpen = () => {
        setChangeStatusModalOpen(false);
    };

    return (
        <div>
            <Title />
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
            <hr />
            <section>
                <ShowTable
                    headList={listLabel}
                    bodyList={viewAnnualLeaveData}
                    isHeadCheck
                    isEvent={openAnnualLeaveFormModal}
                />
            </section>
            <section className="flex justify-end gap-3 pt-4">
                <Button
                    text="상태 변경"
                    clickEvent={openChangeStatusModalOpen}
                />
                <Button text="삭제" />
            </section>
            <section>
                <PageButton
                    page={annualLeavePage}
                    length={annualLeaveData.length}
                />
            </section>
            <AnnualLeaveFormModal
                annualLeaveFormModalOpen={annualLeaveFormModalOpen}
                closeAnnualLeaveFormModal={closeAnnualLeaveFormModal}
                changeStatusModalOpen={changeStatusModalOpen}
                openChangeStatusModalOpen={openChangeStatusModalOpen}
                closeChangeStatusModalOpen={closeChangeStatusModalOpen}
            />
            <ChangeStatusModal
                changeStatusModalOpen={changeStatusModalOpen}
                closeChangeStatusModalOpen={closeChangeStatusModalOpen}
            />
        </div>
    );
};

export default AnnualLeaveListPage;
