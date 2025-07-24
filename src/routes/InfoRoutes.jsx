import CompanyInfoPage from "../pages/CompanyInfoPage";
import CompanyInfo from "../components/info/CompanyInfo";
import DepartmentInfo from "../components/info/DepartmentInfo";

export const infoRoutesData = [
    { element: <CompanyInfoPage />, path: "/info" },
    { element: <CompanyInfo />, path: "/info/company" },
    { element: <DepartmentInfo />, path: "/info/department" },
];
