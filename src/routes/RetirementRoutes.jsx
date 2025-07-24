import RetirementPage from "../pages/RetirementPage";
import RetirementForm from "../components/retirement/RetirementForm";
import RetirementList from "../components/retirement/RetirementList";
import RetirementEmployeeList from "../components/retirement/RetirementEmployeeList";

export const retirementRoutesData = [
    { element: <RetirementPage />, path: "/retirement" },
    { element: <RetirementForm />, path: "/retirement/form" },
    { element: <RetirementList />, path: "/retirement/list" },
    { element: <RetirementEmployeeList />, path: "/retirement/employee" },
];
