import Title from "../../components/Title";
import ShowTable from "../../components/table/ShowTable";
import Button from "../../components/Button";

const AllowanceDeductionManagementPage = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <Title text={"수당 항목"} />
                <div className="mr-4 mb-2">
                    <Button text={"봉급표"} />
                </div>
            </div>

            <section>
                <div className="max-h-[180px] overflow-y-scroll">
                    <ShowTable
                        headList={[
                            "수당명칭",
                            "과세구분",
                            "지급유형",
                            "계산식",
                        ]}
                        bodyList={[
                            ["기본급", "과세", "고정", "-"],
                            ["직책수당", "과세", "고정", "-"],
                            ["식대", "비과세", "고정", "-"],
                            ["야간수당", "과세", "변동", "-"],
                            ["기본급", "과세", "고정", "-"],
                            ["기본급", "과세", "고정", "-"],
                            ["기본급", "과세", "고정", "-"],
                            ["기본급", "과세", "고정", "-"],
                        ]}
                        isDefaultList
                    />
                </div>
                <div className="mt-3 mb-8 flex gap-2">
                    <Button text={"항목 추가"} />
                    <Button text={"수정"} />
                    {/* 수정 버튼 누르면 저장으로 변경 */}
                </div>
            </section>
            <Title text={"공제 항목"} />
            <section>
                <div className="max-h-[180px] overflow-y-scroll">
                    <ShowTable
                        headList={["공제명칭", "공제구분", "여율"]}
                        bodyList={[
                            ["소득세", "법정공제", "-"],
                            ["국민연금", "법정공제", "4.5"],
                            ["건강보험", "법정공제[", "-"],
                            ["고용보험", "법정공제", "-"],
                            ["고용보험", "법정공제", "-"],
                            ["고용보험", "법정공제", "-"],
                            ["고용보험", "법정공제", "-"],
                            ["고용보험", "법정공제", "-"],
                            ["고용보험", "법정공제", "-"],
                        ]}
                        isDefaultList
                    />
                </div>
                <div className="mt-3 flex gap-2">
                    <Button text={"항목 추가"} />
                    <Button text={"수정"} />
                    {/* 수정 버튼 누르면 저장으로 변경 */}
                </div>
            </section>
        </div>
    );
};

export default AllowanceDeductionManagementPage;
