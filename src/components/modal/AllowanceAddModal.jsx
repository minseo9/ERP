import TextInputFormat from "../../components/input-format/TextInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";
import Button from "../../components/Button";

import closeIcon from "../../assets/close-icon.png";

const AllowanceAddModal = ({ allowanceModalOpen, closeAllowanceModal }) => {
    console.log(allowanceModalOpen);
    if (!allowanceModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400/50">
            <div className="relative h-[450px] w-full max-w-[600px] rounded-xl bg-white py-5 shadow-lg">
                <section className="px-6 text-end">
                    <button
                        onClick={closeAllowanceModal}
                        className="h-[15px] w-[15px] cursor-pointer"
                    >
                        <img src={closeIcon} alt="취소 버튼" />
                    </button>
                </section>
                <section className="flex flex-col gap-5 px-10">
                    <div className="mb-3 font-bold">수당 항목 추가</div>
                    <TextInputFormat
                        label={"수당명칭"}
                        style={"form-input h-[30px]"}
                    />
                    <SelectFormat
                        label={"과세부분"}
                        list={["과세", "비과세"]}
                        isFlex
                    />

                    <SelectFormat
                        label={"지급유형"}
                        list={["고정", "변동"]}
                        isFlex
                    />
                    <div className="flex items-center text-sm">
                        <label htmlFor="" className="mr-5">
                            계산식
                        </label>
                        <textarea className="bg-default-gray h-[120px] w-[400px] resize-none rounded-sm p-2 outline-none"></textarea>
                    </div>
                </section>
                <section className="absolute right-8 bottom-8">
                    <Button text={"추가"} />
                </section>
            </div>
        </div>
    );
};

export default AllowanceAddModal;
