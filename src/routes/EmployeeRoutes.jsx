import EmployeePage from "../pages/EmployeePage";
import EmployeeList from "../components/employee/EmployeeList";
import EmployeeRegisterForm from "../components/employee/EmployeeRegisterForm";

export const employeeRoutesData = [
    { element: <EmployeePage />, path: "/employee" },
    { element: <EmployeeList />, path: "/employee/list" },
    { element: <EmployeeRegisterForm />, path: "/employee/register" },
];
