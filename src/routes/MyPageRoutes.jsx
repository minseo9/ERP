import MyStatePage from "../pages/mypage/MyStatePage";
import ChangeMyPage from "../pages/mypage/ChangePwdPag";
import ModifyMyInfoPage from "../pages/mypage/ModifyMyInfoPage";

export const myPageRoutesData = [
    { element: <MyStatePage />, path: "/mypage/state" },
    { element: <ChangeMyPage />, path: "/mypage/change-pwd" },
    { element: <ModifyMyInfoPage />, path: "/mypage/modify-info" },
];
