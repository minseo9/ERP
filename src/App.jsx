import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LoginPage from "./pages/LoginPage";

import { infoRoutesData } from "./routes/InfoRoutes";
import { employeeRoutesData } from "./routes/EmployeeRoutes";
import { attendanceRoutesDate } from "./routes/AttendanceRoutes";
import { payrollRoutesData } from "./routes/PayrollRoutes";
import { retirementRoutesData } from "./routes/RetirementRoutes";

function App() {
    const [login, setLogin] = useState(true);
    const routesData = [
        { element: <LoginPage />, path: "/" },
        ...infoRoutesData,
        ...employeeRoutesData,
        ...attendanceRoutesDate,
        ...payrollRoutesData,
        ...retirementRoutesData,
    ];

    console.log(routesData);

    return (
        <>
            {login && <Header />}
            <div>
                {login && <SideBar />}
                <main>
                    <Routes>
                        {routesData.map((data) => (
                            <Route element={data.element} path={data.path} />
                        ))}
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default App;
