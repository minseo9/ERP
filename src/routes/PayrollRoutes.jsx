import PayrollListPage from "../pages/payroll/PayrollListPage";
import PayrollManagementPage from "../pages/payroll/PayrollManagementPage";
import SalaryTablePage from "../pages/payroll/SalaryTablePage";
import AllowanceDeductionManagementPage from "../pages/payroll/AllowanceDeductionManagementPage";

export const payrollRoutesData = [
    { element: <PayrollListPage />, path: "/payroll/list" },
    { element: <PayrollManagementPage />, path: "/payroll/management" },
    { element: <SalaryTablePage />, path: "/salarytable" },
    {
        element: <AllowanceDeductionManagementPage />,
        path: "/allowancededuction",
    },
];
