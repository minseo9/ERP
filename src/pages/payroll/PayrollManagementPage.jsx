import Title from "../../components/Title";
import Button from "../../components/Button";
import ShowTable from "../../components/table/ShowTable";
import FormFormat from "../../components/input-format/FormFormat";
import TextInputFormat from "../../components/input-format/TextInputFormat";
import PageButton from "../../components/PageButton";

const PayrollManagementPage = () => {
    return (
        <div>
            <Title />
            <section className="flex items-center gap-10">
                <div className="flex gap-5">
                    <FormFormat label={"귀속연월"} htmlFor={"month"}>
                        <input type="month" className="default-input px-1" />
                    </FormFormat>
                    <Button text={"조회"} />
                </div>
                <div className="flex gap-4">
                    <FormFormat label={"정산기간"} htmlFor={"payPeriod"}>
                        <input
                            type="text"
                            readOnly
                            className="mr-2 h-[25px] rounded-xl border border-gray-400 px-2 text-sm"
                        />
                        -
                        <input
                            type="text"
                            readOnly
                            className="ml-2 h-[25px] rounded-xl border border-gray-400 px-2 text-sm"
                        />
                    </FormFormat>
                    <TextInputFormat
                        label={"급여 지급일"}
                        id={"payDay"}
                        style={
                            "border rounded-xl text-sm px-2 h-[25px] border-gray-400"
                        }
                        isReadOnly
                    />
                </div>
            </section>
            <hr />
            <section className="mb-8 flex justify-between">
                <Button text={"지난급여정보불러오기"} />
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
                            <Button text={"추가"} />
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
                            <Button text={"추가"} />
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
        </div>
    );
};

export default PayrollManagementPage;
