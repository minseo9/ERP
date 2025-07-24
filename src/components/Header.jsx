import companyLogo from "../assets/company-logo.png";
import setting from "../assets/settings-icon.png";
import exitDoor from "../assets/exit-door-icon.png";

const Header = () => {
    return (
        <div className="bm border-default-gray flex border-b">
            <div className="border-default-gray flex flex-1 items-center justify-between border-r border-solid px-5 py-2">
                <img
                    src={companyLogo}
                    alt="회사 로고"
                    className="h-[50px] w-[50px]"
                />
                <span className="text-xs font-bold">000님</span>
            </div>
            <div className="border-default-gray flex items-center border-r border-solid px-5">
                <button className="cursor-pointer">
                    <img
                        src={setting}
                        alt="설정"
                        className="h-[20px] w-[20px]"
                    />
                </button>
            </div>
            <div className="flex items-center px-5">
                <button className="cursor-pointer">
                    <img
                        src={exitDoor}
                        alt="로그아웃"
                        className="h-[20px] w-[20px]"
                    />
                </button>
            </div>
        </div>
    );
};

export default Header;
