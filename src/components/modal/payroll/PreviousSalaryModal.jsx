import { useState } from "react";

import ModalCloseButton from "../../ModalCloseButton";
import ShowTable from "../../table/ShowTable";
import PageButton from "../../PageButton";
import Button from "../../Button";

const PreviousSalaryModal = ({
    previousSalaryModalOpen,
    closePreviousSalaryModal,
}) => {
    const [previousSalaryPage, setPreviousSalaryPage] = useState(1);

    if (!previousSalaryModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
            <div className="relative h-[650px] w-full max-w-[800px] rounded-xl bg-white py-5 shadow-lg">
                <ModalCloseButton clickEvent={closePreviousSalaryModal} />
                <section className="flex flex-col gap-4 px-10 py-4">
                    <div className="font-bold">전월 자료 복사</div>
                    <ShowTable
                        headList={["귀속연월", "지급일자", "급여구분"]}
                        bodyList={[
                            ["2024-10", "2024-11-05", "급여"],
                            ["2024-09", "2024-11-05", "급여"],
                            ["2024-08", "2024-11-05", "급여"],
                            ["2024-07", "2024-11-05", "급여"],
                        ]}
                    />
                    <PageButton page={previousSalaryPage} length={20} />
                    <section className="absolute right-10 bottom-10">
                        <Button text={"선택"} />
                    </section>
                </section>
            </div>
        </div>
    );
};

export default PreviousSalaryModal;
