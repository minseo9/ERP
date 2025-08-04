import Title from "../../components/Title";
import Button from "../../components/Button";
import companyLogo from "../../assets/company-logo.png";

const ComPanyInfoPage = () => {
    const companyData = [
        { key: "companyName", label: "회사명", value: "MJ SECURITY" },
        {
            key: "businessNumber",
            label: "사업자 등록 번호",
            value: "120-11-22330",
        },
        { key: "phone", label: "전화", value: "02-2000-1000" },
        { key: "ceo", label: "대표", value: "김대표" },
        { key: "establishedDate", label: "개업일", value: "2009-10-22" },
        {
            key: "headOfficeAddress",
            label: "본점 주소",
            value: "서울시 관악구",
        },
        {
            key: "businessPlaceAddress",
            label: "사업장 주소",
            value: "서울시 관악구",
        },
        { key: "businessType", label: "업태", value: "정보통신업" },
        {
            key: "businessItem",
            label: "업종",
            value: "컴퓨터 프로그래밍, 시스템 통합 및 관리업",
        },
    ];

    return (
        <div>
            <section className="mb-10">
                <Title text={"회사 로고"} />
                <div className="mt-5 h-[200px] w-[200px]">
                    <img src={companyLogo} alt="" />
                </div>
            </section>
            <section>
                <div className="mb-4 flex items-center justify-between">
                    <Title />
                    <Button text={"수정"} />
                </div>
                <div className="grid grid-cols-2 gap-1">
                    {companyData.map((data) => (
                        <div key={data.key} className="flex text-sm">
                            <div className="w-40 bg-gray-100 px-2 py-1">
                                {data.label}
                            </div>
                            <div
                                className={
                                    "border-default-gray flex-grow border px-2 py-1"
                                }
                            >
                                {data.value}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ComPanyInfoPage;
