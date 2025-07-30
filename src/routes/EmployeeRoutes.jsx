import EmployeeListPage from "../pages/employee/EmployeeListPage";
import EmployeeRegisterFormPage from "../pages/employee/EmployeeRegisterFormPage";
import EmployeeEditFormModal from "../pages/employee/EmployeeEditFormModal";

export const employeeRoutesData = [
    { element: <EmployeeListPage />, path: "/employee/list" },
    { element: <EmployeeRegisterFormPage />, path: "/employee/register" },
    { element: <EmployeeEditFormModal />, path: "/employee/edit" },
];
