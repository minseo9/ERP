import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import CompanyInfoPage from "./pages/CompanyInfoPage";
import EmployeePage from "./pages/EmployeePage";
import AttendancePage from "./pages/AttendancePage";
import PayrollPage from "./pages/PayrollPage";
import RetirementPage from "./pages/RetirementPage";

function App() {
    const [login, setLogin] = useState(false);

    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/info" element={<CompanyInfoPage />} />
                <Route path="/employee" element={<EmployeePage />} />
                <Route path="/attendance" element={<AttendancePage />} />
                <Route path="/payroll" element={<PayrollPage />} />
                <Route path="/retirement" element={<RetirementPage />} />
            </Routes>
        </>
    );
}

export default App;
