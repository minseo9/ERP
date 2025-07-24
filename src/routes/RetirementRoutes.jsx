import RetirementFormPage from "../pages/retirement/RetirementFormPage";
import RetirementListPage from "../pages/retirement/RetirementListPage";
import RetirementEmployeeListPage from "../pages/retirement/RetirementEmployeeListPage";

export const retirementRoutesData = [
    { element: <RetirementFormPage />, path: "/retirement/form" },
    { element: <RetirementListPage />, path: "/retirement/list" },
    { element: <RetirementEmployeeListPage />, path: "/retirement/employee" },
];
