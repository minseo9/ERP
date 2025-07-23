const LoginPage = () => {
    return (
        <div className="m-auto mt-[100px] w-[400px]">
            <h1 className="text-main text-center text-3xl font-bold">
                MJ SECURITY
            </h1>
            <div className="border-gray mt-4 rounded-md border border-solid p-5">
                <div className="border-gray flex flex-col rounded-md border border-solid">
                    <input
                        type="text"
                        placeholder="아이디"
                        className="border-gray border-b p-3 text-sm"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="p-3 text-sm"
                    />
                </div>
                <div className="my-3">
                    <input
                        type="checkbox"
                        id="state"
                        className="accent-main cursor-pointer"
                    />
                    <label
                        htmlFor="state"
                        className="cursor-pointer pl-2 text-sm"
                    >
                        로그인 상태 유지
                    </label>
                </div>
                <div>
                    <button className="bg-main h-[40px] w-full cursor-pointer rounded-md font-bold text-white">
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
