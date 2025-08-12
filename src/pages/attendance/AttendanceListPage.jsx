import { useState } from "react";
import useShowData from "../../hooks/useShowData";

import Title from "../../components/Title";
import Button from "../../components/Button";
import ShowTable from "../../components/table/ShowTable";
import PageButton from "../../components/PageButton";

import TextInputFormat from "../../components/input-format/TextInputFormat";
import DateRangeInputFormat from "../../components/input-format/DateRangeInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";

import AttendanceEditFormModal from "../../components/modal/attendance/AttendanceEditFormModal";

const AttendanceListPage = () => {
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
        "근무일자",
        "사원번호",
        "이름",
        "부서",
        "직급",
        "출근시간",
        "퇴근시간",
        "외근",
        "초과",
        "연차",
        "기타", // 지각, 조퇴, 무단
    ];
    const workDataList = [
        [
            "2025-07-30",
            "1001",
            "김민서",
            "기술1팀",
            "사원",
            "09:00",
            "18:00",
            "",
            "",
            "",
            "",
        ],
        [
            "2025-07-30",
            "1002",
            "이재훈",
            "보안 사업부",
            "대리",
            "09:10",
            "18:30",
            "",
            "30분",
            "",
            "지각",
        ],
        [
            "2025-07-30",
            "1003",
            "박수빈",
            "솔루션 사업부",
            "주임",
            "09:00",
            "17:00",
            "",
            "",
            "",
            "조퇴",
        ],
        [
            "2025-07-30",
            "1004",
            "최현우",
            "기술연구소",
            "과장",
            "09:15",
            "18:45",
            "",
            "45분",
            "",
            "지각",
        ],
        [
            "2025-07-30",
            "1005",
            "정세영",
            "컨설팅 사업부",
            "사원",
            "",
            "",
            "외근",
            "",
            "",
            "",
        ],
        [
            "2025-07-30",
            "1006",
            "한예진",
            "경영지원부",
            "부장",
            "",
            "",
            "",
            "",
            "1일",
            "",
        ],
        [
            "2025-07-30",
            "1007",
            "김도윤",
            "기술2팀",
            "차장",
            "08:50",
            "20:00",
            "",
            "2시간",
            "",
            "",
        ],
        [
            "2025-07-30",
            "1008",
            "이소민",
            "기술본부",
            "사원",
            "09:20",
            "18:00",
            "",
            "",
            "",
            "지각",
        ],
        [
            "2025-07-30",
            "1009",
            "장우석",
            "기술1팀",
            "이사",
            "09:00",
            "18:00",
            "",
            "",
            "",
            "",
        ],
        [
            "2025-07-30",
            "배지민",
            "기술2팀",
            "대리",
            "09:00",
            "17:30",
            "",
            "",
            "",
            "조퇴",
        ],
    ];

    const [attendancePage, setAttendancePage] = useState(1);
    const viewAttendanceData = useShowData(attendancePage, workDataList);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Title />
            <section className="flex w-full flex-col gap-3">
                <section>
                    <DateRangeInputFormat
                        label={"조회 기간"}
                        id={"searchDate"}
                        leftStyle={"default-input mr-2 px-3"}
                        rightStyle={"default-input ml-2 px-3"}
                    />
                </section>
                <section className="flex gap-4">
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
                        style={"default-input pl-1"}
                        list={departmentList}
                    />
                    <SelectFormat
                        label={"직급"}
                        id={"position"}
                        style={"default-input pl-1"}
                        list={positionList}
                    />
                    <Button text={"조회"} />
                </section>
            </section>
            <hr />
            <section>
                <ShowTable headList={listLabel} bodyList={viewAttendanceData} />
            </section>
            <section className="pt-4 text-end">
                <Button text="수정" clickEvent={openModal} />
            </section>

            <section>
                <PageButton
                    page={attendancePage}
                    length={workDataList.length}
                />
            </section>
            <AttendanceEditFormModal
                modalOpen={modalOpen}
                closeModal={closeModal}
            />
        </div>
    );
};

export default AttendanceListPage;
