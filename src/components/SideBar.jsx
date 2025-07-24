import { Link } from "react-router-dom";

const SideBar = () => {
    const menuData = [
        {
            category: "회사정보",
            details: [
                { category: "회사 기본 정보", to: "/info/company" },
                { category: "부서 정보", to: "/info/department" },
            ],
        },
        {
            category: "인사관리",
            details: [
                { category: "사원 정보", to: "/employee/list" },
                { category: "사원 등록", to: "/employee/register" },
            ],
        },
        {
            category: "근태관리",
            details: [
                { category: "사원 근태 관리", to: "/attendance/list" },
                { category: "휴가 신청서 관리", to: "/leave/list" },
                { category: "휴가 신청서 작성", to: "/leave/form" },
                { category: "나의 근무 현황", to: "/attendance/mystate" },
            ],
        },
        {
            category: "급여관리",
            details: [
                { category: "급여 현황 조회", to: "/payroll/list" },
                { category: "급여지급관리", to: "/payroll/management" },
                { category: "봉급표", to: "/salarytable" },
                { category: "수당/공제 관리", to: "/allowancededuction" },
            ],
        },
        {
            category: "퇴직관리",
            details: [
                { category: "퇴직 신청", to: "/retirement/form" },
                { category: "퇴직 진행 현황", to: "/retirement/list" },
                { category: "퇴직 직원 조회", to: "/retirement/employee" },
            ],
        },
    ];
    return (
        <div className="mt-10 w-[200px] text-sm">
            {menuData.map((data, index) => (
                <div
                    key={index}
                    className="group border-default-gray text-default-gray mb-4 w-full border-b"
                >
                    <div className="px-2 pb-4">{data.category}</div>
                    <div className="mb-5 box-border hidden flex-col space-y-2 rounded-sm bg-gray-200 p-4 group-hover:flex">
                        {data.details.map((d) => (
                            <Link key={d.to} to={d.to} className="text-black">
                                {d.category}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideBar;
