import EmployeeListPage from "../pages/employee/EmployeeListPage";
import EmployeeRegisterFormPage from "../pages/employee/EmployeeRegisterFormPage";
import EmployeeEditFormPage from "../pages/employee/EmployeeEditFormPage";

export const employeeRoutesData = [
    { element: <EmployeeListPage />, path: "/employee/list" },
    { element: <EmployeeRegisterFormPage />, path: "/employee/register" },
    { element: <EmployeeEditFormPage />, path: "/employee/edit" },
];
