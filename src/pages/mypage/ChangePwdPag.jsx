const ChangeMyPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="flex items-center gap-7">
                    <label htmlFor="currentPwd">현재 비밀번호</label>
                    <input
                        type="password"
                        id="currentPwd"
                        className="form-input h-[30px]"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <label htmlFor="currentPwd">변경할 비밀번호</label>
                    <input
                        type="password"
                        id="changePwd"
                        className="form-input h-[30px]"
                    />
                </div>
                <div className="flex items-center gap-7">
                    <label htmlFor="currentPwd">비밀번호 확인</label>
                    <input
                        type="password"
                        id="changePwdCheck"
                        className="form-input h-[30px]"
                    />
                </div>
            </div>
            <div className="mt-10">
                <button className="bg-main h-[40px] w-[150px] cursor-pointer rounded-md font-bold text-white">
                    비밀번호 변경
                </button>
            </div>
        </div>
    );
};

export default ChangeMyPage;
