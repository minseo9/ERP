export const mainMenuData = [
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
            { category: "연차 신청", to: "/leave/form" },
            { category: "연차 신청 관리", to: "/leave/list" },
        ],
    },
    {
        category: "급여관리",
        details: [
            { category: "급여 현황 조회", to: "/payroll/list" },
            { category: "급여 지급 관리", to: "/payroll/management" },
            { category: "수당 공제 관리", to: "/allowance-deduction" },
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
