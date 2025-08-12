import { useState } from "react";

import Title from "../../components/Title";
import Button from "../../components/Button";
import ShowTable from "../../components/table/ShowTable";
import PageButton from "../../components/PageButton";

import TextInputFormat from "../../components/input-format/TextInputFormat";
import DateInputFormat from "../../components/input-format/DateInputFormat";

import PreviousSalaryModal from "../../components/modal/payroll/PreviousSalaryModal";
import PayrollAddModal from "../../components/modal/payroll/PayrollAddModal";

const PayrollManagementPage = () => {
    const [previousSalaryModalOpen, setPreviousSalaryModalOpen] =
        useState(false);
    const [payrollAddModalOpen, setPayrollAddModalOpen] = useState(false);
    const [addType, setAddType] = useState("");

    const openPreviousSalaryModal = () => {
        setPreviousSalaryModalOpen(true);
    };
    const closePreviousSalaryModal = () => {
        setPreviousSalaryModalOpen(false);
    };
    const openPayrollAddModal = (type) => {
        setAddType(type);
        setPayrollAddModalOpen(true);
    };
    const closePayrollAddModal = () => {
        setPayrollAddModalOpen(false);
    };

    return (
        <div>
            <Title />
            <section className="flex items-center gap-10">
                <div className="flex gap-5">
                    <DateInputFormat
                        label={"조회기간"}
                        id={"searchMonth"}
                        type={"month"}
                        style={"default-input px-3"}
                    />
                    <Button text={"조회"} />
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center">
                        <span className="mr-2 block text-sm">정산기간</span>
                        <div className="default-input mr-2 w-[100px]"></div>-
                        <div className="default-input ml-2 w-[100px]"></div>
                        <div></div>
                    </div>
                    <TextInputFormat
                        label={"급여 지급일"}
                        id={"payDay"}
                        style={"default-input"}
                        isReadOnly
                    />
                </div>
            </section>
            <hr />
            <section className="mb-8 flex justify-between">
                <Button
                    text={"지난급여 불러오기"}
                    clickEvent={openPreviousSalaryModal}
                />
                <Button text={"저장"} />
            </section>
            <main className="flex gap-5">
                <section className="flex-1">
                    <ShowTable
                        headList={["사원명", "부서", "직급"]}
                        bodyList={[["김인보", "보안사업부", "대리"]]}
                    />
                    <div className="mt-5">
                        <PageButton page={1} length={2} />
                    </div>
                </section>
                <section className="flex-1">
                    <div className="flex gap-3">
                        <div className="flex-2">
                            <ShowTable
                                headList={["지급항목", "지급액"]}
                                bodyList={[
                                    ["기본급", ""],
                                    ["직책수당", ""],
                                    ["식대", ""],
                                ]}
                                isDefaultList
                            />
                            <div className="border-default-gray mt-2 flex h-[30px] border text-sm">
                                <div className="bg-default-gray flex flex-2 items-center justify-center">
                                    합계
                                </div>
                                <div className="flex flex-1/2 items-center justify-end px-3">
                                    원
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button
                                text={"추가"}
                                clickEvent={() => {
                                    openPayrollAddModal("지급 항목");
                                }}
                            />
                            <Button text={"수정"} />
                        </div>
                    </div>
                </section>
                <section className="flex-1">
                    <div className="flex gap-3">
                        <div className="flex-2">
                            <ShowTable
                                headList={["공제항목", "공제액"]}
                                bodyList={[
                                    ["국민연금", ""],
                                    ["건강보험", ""],
                                    ["고용보험", ""],
                                    ["소득세", ""],
                                    ["지방소득세", ""],
                                ]}
                                isDefaultList
                            />
                            <div className="border-default-gray mt-2 flex h-[30px] border text-sm">
                                <div className="bg-default-gray flex flex-2 items-center justify-center">
                                    합계
                                </div>
                                <div className="flex flex-1/2 items-center justify-end px-3">
                                    원
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button
                                text={"추가"}
                                clickEvent={() => {
                                    openPayrollAddModal("공제 항목");
                                }}
                            />
                            <Button text={"수정"} />
                        </div>
                    </div>
                </section>
            </main>
            <section className="mt-10 flex justify-end">
                <div className="bg-default-gray flex gap-3 rounded-md p-3">
                    <div className="flex h-[40px] items-center rounded-md border-2 border-blue-300 px-2">
                        <span className="block w-[180px] flex-1 text-xs font-bold">
                            지급금액
                        </span>
                        <span className="block flex-2 text-end text-sm">
                            원
                        </span>
                    </div>
                    <div className="flex h-[40px] items-center rounded-md border-2 border-red-300 px-2">
                        <span className="block w-[180px] flex-1 text-xs font-bold">
                            공제금액
                        </span>
                        <span className="block flex-2 text-end text-sm">
                            원
                        </span>
                    </div>
                    <div className="flex h-[40px] items-center rounded-md border-2 border-purple-300 px-2">
                        <span className="block w-[180px] flex-1 text-xs font-bold">
                            실지급액
                        </span>
                        <span className="block flex-2 text-end text-sm">
                            원
                        </span>
                    </div>
                </div>
            </section>
            <PreviousSalaryModal
                previousSalaryModalOpen={previousSalaryModalOpen}
                closePreviousSalaryModal={closePreviousSalaryModal}
            />
            <PayrollAddModal
                payrollAddModalOpen={payrollAddModalOpen}
                closePayrollAddModal={closePayrollAddModal}
                addType={addType}
            />
        </div>
    );
};

export default PayrollManagementPage;
