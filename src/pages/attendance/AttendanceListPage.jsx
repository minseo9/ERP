import { useState, useEffect } from "react";

import FormFormat from "../../components/FormFormat";
import CheckListTable from "../../components/CheckListTable";
import Button from "../../components/Button";
import PageButton from "../../components/PageButton";

const AttendanceListPage = () => {
    const [attendancePage, setAttendancePage] = useState(1);
    const [attendanceData, setAttendanceData] = useState([]);
    const positionList = [
        "사원",
        "주임",
        "대리",
        "과장",
        "차장",
        "부장",
        "이사",
    ];
    const departmentList = [
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

    const pageNumber = Math.ceil(workDataList.length / 10);

    useEffect(() => {
        const start = (Number(attendancePage) - 1) * 10;
        const end = Number(attendancePage) * 10;
        const sliceWorkList = workDataList.slice(start, end);

        setAttendanceData(sliceWorkList);
    }, [attendancePage]);

    return (
        <div>
            <section className="flex w-full flex-col gap-3">
                <section>
                    <FormFormat label={"조회 기간"} htmlFor={"searchDate"}>
                        <input
                            type="date"
                            id="searchDate"
                            className="default-input mr-2 px-3"
                        />
                        -
                        <input
                            type="date"
                            className="default-input ml-2 px-3"
                        />
                    </FormFormat>
                </section>
                <section className="flex gap-4">
                    <FormFormat label={"사원번호"} htmlFor={"number"}>
                        <input
                            type="text"
                            id="number"
                            className="default-input px-3"
                        />
                    </FormFormat>
                    <FormFormat label={"이름"} htmlFor={"name"}>
                        <input
                            type="text"
                            id="name"
                            className="default-input px-3"
                        />
                    </FormFormat>
                    <FormFormat label={"부서"} htmlFor={"department"}>
                        <select
                            name=""
                            id="department"
                            defaultValue="default"
                            className="default-input pl-1"
                        >
                            <option value="default" disabled hidden>
                                선택
                            </option>
                            {departmentList.map((data) => (
                                <option value={data} key={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                    </FormFormat>
                    <FormFormat label={"직급"} htmlFor={"position"}>
                        <select
                            name=""
                            id="position"
                            defaultValue="default"
                            className="default-input pl-1"
                        >
                            <option value="default" disabled hidden>
                                선택
                            </option>
                            {positionList.map((data) => (
                                <option value={data} key={data}>
                                    {data}
                                </option>
                            ))}
                        </select>
                    </FormFormat>
                </section>
            </section>
            <hr className="border-default-gray my-5" />
            <section>
                <table className="border-default-gray w-full border-collapse border text-center text-sm">
                    <thead className="h-[30px]">
                        <CheckListTable list={listLabel} type />
                    </thead>
                    <tbody>
                        {attendanceData.map((list) => (
                            <CheckListTable key={list[1]} list={list} />
                        ))}
                    </tbody>
                </table>
            </section>
            <section className="pt-4 text-end">
                <Button text="수정" />
            </section>
            <section className="flex cursor-pointer items-center justify-center gap-5 text-sm text-gray-500">
                <PageButton page={attendancePage} pageNumber={pageNumber} />
            </section>
        </div>
    );
};

export default AttendanceListPage;
