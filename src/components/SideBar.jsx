import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = ({ menu, setMenu }) => {
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
                { category: "근태 정보", to: "/attendance/list" },
                { category: "나의 근무 현황", to: "/attendance/mystate" },
                { category: "연차 신청", to: "/leave/form" },
                { category: "연차 신청 관리", to: "/leave/list" },
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
                { category: "퇴직 신청 관리", to: "/retirement/list" },
                { category: "퇴직 직원 조회", to: "/retirement/employee" },
            ],
        },
    ];
    const [selectedCategory, setSelectedCategory] = useState(menu.category);
    const [selectedDetail, setSelectedDetail] = useState(menu.detail);

    return (
        <div className="w-[200px] text-sm">
            {menuData.map((data, index) => (
                <div key={index} className="group mb-4 w-full">
                    <div className="menu-category px-2 pb-2">
                        - {data.category}
                    </div>
                    <div className="bg-default-gray mb-5 flex w-[200px] flex-col space-y-2 rounded-sm p-4">
                        {data.details.map((d) => (
                            <Link
                                key={d.to}
                                to={d.to}
                                state={{ category: d.category }}
                                className={
                                    selectedCategory === data.category &&
                                    selectedDetail === d.category
                                        ? "text-main"
                                        : "text-black"
                                }
                                onClick={() => {
                                    setSelectedCategory(data.category);
                                    setSelectedDetail(d.category);
                                    setMenu({
                                        category: data.category,
                                        detail: d.category,
                                    });
                                    sessionStorage.setItem(
                                        "page",
                                        JSON.stringify({
                                            category: data.category,
                                            detail: d.category,
                                        }),
                                    );
                                }}
                            >
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
