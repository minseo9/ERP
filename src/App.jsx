import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import LoginPage from "./pages/LoginPage";
import MenuLabel from "./components/MenuLabel";

import { infoRoutesData } from "./routes/InfoRoutes";
import { employeeRoutesData } from "./routes/EmployeeRoutes";
import { attendanceRoutesDate } from "./routes/AttendanceRoutes";
import { payrollRoutesData } from "./routes/PayrollRoutes";
import { retirementRoutesData } from "./routes/RetirementRoutes";

function App() {
    const [login, setLogin] = useState(true);
    const savePage = JSON.parse(sessionStorage.getItem("page"));
    const [menu, setMenu] = useState(
        savePage
            ? savePage
            : {
                  category: "회사정보",
                  detail: "회사 기본 정보",
              },
    );
    const routesData = [
        { element: <LoginPage />, path: "/" },
        ...infoRoutesData,
        ...employeeRoutesData,
        ...attendanceRoutesDate,
        ...payrollRoutesData,
        ...retirementRoutesData,
    ];

    return (
        <div className="min-w-[1500px]">
            {login && <Header />}
            <div className="flex p-12">
                {login && <SideBar menu={menu} setMenu={setMenu} />}
                <main className="ml-20 w-full">
                    <section className="pb-4">
                        <MenuLabel menu={menu} />
                    </section>
                    <section>
                        <Routes>
                            {routesData.map((data) => (
                                <Route
                                    element={data.element}
                                    path={data.path}
                                />
                            ))}
                        </Routes>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
