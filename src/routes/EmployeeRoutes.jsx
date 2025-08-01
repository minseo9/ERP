import EmployeeListPage from "../pages/employee/EmployeeListPage";
import EmployeeRegisterFormPage from "../pages/employee/EmployeeRegisterFormPage";

export const employeeRoutesData = [
    { element: <EmployeeListPage />, path: "/employee/list" },
    { element: <EmployeeRegisterFormPage />, path: "/employee/register" },
];
