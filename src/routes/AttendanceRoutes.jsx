import AttendanceListPage from "../pages/attendance/AttendanceListPage";
import LeaveApplicationListPage from "../pages/attendance/LeaveApplicationListPage";
import LeaveApplicationFormPage from "../pages/attendance/LeaveApplicationFormPage";
import MyAttendanceStatePage from "../pages/attendance/MyAttendanceStatePage";

export const attendanceRoutesDate = [
    { element: <AttendanceListPage />, path: "/attendance/list" },
    { element: <LeaveApplicationListPage />, path: "/leave/list" },
    { element: <LeaveApplicationFormPage />, path: "/leave/form" },
    { element: <MyAttendanceStatePage />, path: "/attendance/mystate" },
];
