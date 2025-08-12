import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MenuLabel from "./components/MenuLabel";
import LoginPage from "./pages/LoginPage";

import { mainMenuData } from "./data/mainMenuData";
import { infoRoutesData } from "./routes/InfoRoutes";
import { employeeRoutesData } from "./routes/EmployeeRoutes";
import { attendanceRoutesDate } from "./routes/AttendanceRoutes";
import { payrollRoutesData } from "./routes/PayrollRoutes";
import { retirementRoutesData } from "./routes/RetirementRoutes";
import { myPageRoutesData } from "./routes/MyPageRoutes";

function App() {
    const location = useLocation();
    const nav = useNavigate();
    const [login, setLogin] = useState(true); // 로그인 여분
    const [menuType, setMenuType] = useState("main"); // 메뉴 타입(main, myPage)
    const savePage = JSON.parse(sessionStorage.getItem("page")); // 최근에 선택한 페이지 정보
    // 현재 선택한 메뉴 정보
    const [menu, setMenu] = useState(
        savePage || {
            category: mainMenuData[0].category,
            detail: mainMenuData[0].details[0].category,
        },
    );
    // mypage로 이동 전 마지막으로 접속해 있던 main 페이지
    const [lastMainMenu, setLastMainMenu] = useState(
        sessionStorage.getItem("lastMainMenu") || {
            category: "회사정보",
            detail: "회사 기본 정보",
            path: "/info/company",
        },
    );

    const routesData = [
        { element: <LoginPage />, path: "/" },
        ...infoRoutesData,
        ...employeeRoutesData,
        ...attendanceRoutesDate,
        ...payrollRoutesData,
        ...retirementRoutesData,
        ...myPageRoutesData,
    ];
    const isMyPage = location.pathname.startsWith("/mypage");

    const changeMyPage = () => {
        const lastMenu = { ...menu, path: location.pathname };

        setMenuType("myPage");
        sessionStorage.setItem("lastMainMenu", lastMenu);
        setLastMainMenu(lastMenu);
        nav("/mypage/state");
    };

    const changeMainPage = () => {
        setMenuType("main");
        setMenu({
            category: lastMainMenu.category,
            detail: lastMainMenu.detail,
        });
        nav(lastMainMenu.path);
    };

    return (
        <div className="min-w-[1500px]">
            {login && <Header changeMyPage={changeMyPage} />}
            <div className="flex p-12">
                {login && (
                    <SideBar
                        menu={menu}
                        setMenu={setMenu}
                        menuType={menuType}
                    />
                )}
                <main className="ml-20 w-full">
                    {isMyPage && (
                        <button
                            className="mb-4 cursor-pointer text-xl"
                            onClick={changeMainPage}
                        >
                            {"<"}
                        </button>
                    )}
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
