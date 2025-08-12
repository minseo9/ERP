import { useState } from "react";
import Title from "../../components/Title";

import MyStateView from "../../components/MyStateView";

const MyStatePage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const todayAttendanceData = {
        name: "김민부",
        startTime: "08:50",
        endTime: "18:00",
        workHours: "8h 10m",
        overtime: "-",
        nightWork: "-",
    };

    return (
        <div>
            {currentPage === 1 ? (
                <div>
                    <div className="mb-10 flex items-center justify-between">
                        <input
                            type="date"
                            className="rounded-md border border-gray-300 px-3 py-2"
                        />
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentPage(1)}
                                className="bg-default-gray flex h-[30px] w-[20px] cursor-pointer items-center justify-center rounded-md text-xl text-gray-500"
                            >
                                {"<"}
                            </button>
                            <button
                                onClick={() => setCurrentPage(2)}
                                className="bg-default-gray flex h-[30px] w-[20px] cursor-pointer items-center justify-center rounded-md text-xl text-gray-500"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <MyStateView
                                    title={"이름"}
                                    data={todayAttendanceData.name}
                                />
                                <MyStateView
                                    title={"출근 시각"}
                                    data={todayAttendanceData.startTime}
                                />
                                <MyStateView
                                    title={"퇴근 시각"}
                                    data={todayAttendanceData.startTime}
                                />
                                <MyStateView
                                    title={"근무 시간"}
                                    data={todayAttendanceData.workHours}
                                />
                                <MyStateView
                                    title={"연장 근무 시간"}
                                    data={todayAttendanceData.overtime}
                                />
                                <MyStateView
                                    title={"외근 시간"}
                                    data={todayAttendanceData.nightWork}
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <MyStateView
                                    title={"지각"}
                                    data={todayAttendanceData.name}
                                />
                                <MyStateView
                                    title={"조퇴"}
                                    data={todayAttendanceData.startTime}
                                />
                                <MyStateView
                                    title={"무단 결근"}
                                    data={todayAttendanceData.startTime}
                                />
                                <MyStateView
                                    title={"연차"}
                                    data={todayAttendanceData.workHours}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="mb-10 flex items-center justify-end">
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentPage(1)}
                                className="bg-default-gray flex h-[30px] w-[20px] cursor-pointer items-center justify-center rounded-md text-xl text-gray-500"
                            >
                                {"<"}
                            </button>
                            <button
                                onClick={() => setCurrentPage(2)}
                                className="bg-default-gray flex h-[30px] w-[20px] cursor-pointer items-center justify-center rounded-md text-xl text-gray-500"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <Title text={"월별 근태 정보"} />
                                <input
                                    type="month"
                                    className="mb-5 rounded-md border border-gray-300 px-3 py-2"
                                />
                                <MyStateView
                                    title={"근무 / 연차 / 결근 일수"}
                                    data={todayAttendanceData.name}
                                />
                                <MyStateView
                                    title={"총 근무 시간"}
                                    data={todayAttendanceData.startTime}
                                />
                                <MyStateView
                                    title={"총 연장 근무 시간"}
                                    data={todayAttendanceData.startTime}
                                />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="rounded-lg bg-gray-50 p-6">
                                <Title text={"연도별 근태 정보"} />
                                <input
                                    type="date"
                                    className="mb-5 rounded-md border border-gray-300 px-3 py-2"
                                />
                                <MyStateView
                                    title={"근무 / 연차 / 결근 일수"}
                                    data={todayAttendanceData.name}
                                />
                                <MyStateView
                                    title={"총 근무 시간"}
                                    data={todayAttendanceData.startTime}
                                />
                                <MyStateView
                                    title={"총 연장 근무 시간"}
                                    data={todayAttendanceData.startTime}
                                />
                            </div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-6">
                            <Title text={"연차 정보"} />
                            <MyStateView
                                title={"사용 연차 개수"}
                                data={todayAttendanceData.name}
                            />
                            <MyStateView
                                title={"남은 연차 개수"}
                                data={todayAttendanceData.startTime}
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="mt-5 text-end text-sm">{currentPage} / 2</div>
        </div>
    );
};

export default MyStatePage;
