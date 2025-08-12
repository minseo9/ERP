import AttendanceListPage from "../pages/attendance/AttendanceListPage";
import AnnualLeaveListPage from "../pages/attendance/AnnualLeaveListPage";
import AnnualLeaveFormPage from "../pages/attendance/AnnualLeaveFormPage";

export const attendanceRoutesDate = [
    { element: <AttendanceListPage />, path: "/attendance/list" },
    { element: <AnnualLeaveListPage />, path: "/leave/list" },
    { element: <AnnualLeaveFormPage />, path: "/leave/form" },
];
