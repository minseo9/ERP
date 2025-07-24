import PayrollPage from "../pages/PayrollPage";
import PayrollList from "../components/payroll/PayrollList";
import PayrollManagement from "../components/payroll/PayrollManagement";
import SalaryTable from "../components/payroll/SalaryTable";
import AllowanceDeductionManagement from "../components/payroll/AllowanceDeductionManagement";

export const payrollRoutesData = [
    { element: <PayrollPage />, path: "/payroll" },
    { element: <PayrollList />, path: "/payroll/list" },
    { element: <PayrollManagement />, path: "/payroll/management" },
    { element: <SalaryTable />, path: "/salarytable" },
    {
        element: <AllowanceDeductionManagement />,
        path: "/allowancededuction",
    },
];
