import AttendancePage from "../pages/AttendancePage";
import AttendanceList from "../components/attendance/AttendanceList";
import LeaveApplicationList from "../components/attendance/LeaveApplicationList";
import LeaveApplicationForm from "../components/attendance/LeaveApplicationForm";
import MyAttendanceState from "../components/attendance/MyAttendanceState";

export const attendanceRoutesDate = [
    { element: <AttendancePage />, path: "/attendance" },
    { element: <AttendanceList />, path: "/attendance/list" },
    { element: <LeaveApplicationList />, path: "/leave/list" },
    { element: <LeaveApplicationForm />, path: "/leave/form" },
    { element: <MyAttendanceState />, path: "/attendance/mystate" },
];
