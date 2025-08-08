import PayrollListPage from "../pages/payroll/PayrollListPage";
import PayrollManagementPage from "../pages/payroll/PayrollManagementPage";
import AllowanceDeductionManagementPage from "../pages/payroll/AllowanceDeductionManagementPage";

export const payrollRoutesData = [
    { element: <PayrollListPage />, path: "/payroll/list" },
    { element: <PayrollManagementPage />, path: "/payroll/management" },
    {
        element: <AllowanceDeductionManagementPage />,
        path: "/allowancededuction",
    },
];
