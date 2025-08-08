import SelectFormat from "../input-format/SelectFormat";
import Button from "../Button";
import ShowTable from "../table/ShowTable";

import closeIcon from "../../assets/close-icon.png";

const SalaryTablePage = ({ salaryTableModalOpen, closeSalaryTableModal }) => {
    if (!salaryTableModalOpen) return null;

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
        "보안 사업부",
        "솔루션 사업부",
        "컨설팅 사업부",
        "기술본부",
        "기술연구소",
        "기술1팀",
        "기술2팀",
        "경영지원부",
    ];

    return (
        <div>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
                <div className="relative h-[550px] w-full max-w-[1000px] rounded-xl bg-white py-5 shadow-lg">
                    <section className="px-6 text-end">
                        <button
                            onClick={closeSalaryTableModal}
                            className="h-[20px] w-[20px] cursor-pointer"
                        >
                            <img src={closeIcon} alt="취소 버튼" />
                        </button>
                    </section>
                    <section className="px-10 py-4">
                        <section className="flex items-center justify-around">
                            <SelectFormat
                                label={"부서"}
                                id={"department"}
                                style={"default-input px-1"}
                                list={departmentList}
                            />
                            <SelectFormat
                                label={"직급"}
                                id={"position"}
                                style={"default-input px-1"}
                                list={positionList}
                            />
                        </section>
                        <section className="mt-4">
                            <div className="mb-3 font-bold">부서</div>
                            <ShowTable
                                headList={["", "1", "2", "3", "4", "5", "6"]}
                                bodyList={[
                                    [
                                        "사원",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                    ],
                                    [
                                        "대리",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                    ],
                                    [
                                        "사원",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                    ],
                                    [
                                        "사원",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                    ],
                                    [
                                        "사원",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                    ],
                                    [
                                        "사원",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                        "2,100,000",
                                    ],
                                ]}
                                isDefaultList
                            />
                        </section>
                        <section className="absolute right-10 bottom-10">
                            <Button text="수정" />
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SalaryTablePage;
