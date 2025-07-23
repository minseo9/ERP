const LoginPage = () => {
    return (
        <div className="m-auto mt-[100px] w-[400px]">
            <h1 className="text-main text-center text-3xl font-bold">
                MJ SECURITY
            </h1>
            <div className="mt-3 rounded-md border border-solid border-gray-400 p-5">
                <div className="flex flex-col rounded-md border border-solid border-gray-400">
                    <input
                        type="text"
                        placeholder="아이디"
                        className="border-b border-gray-400 p-3 text-sm"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호"
                        className="p-3 text-sm"
                    />
                </div>
                <div className="my-3">
                    <input type="checkbox" className="accent-main" />
                    <span className="pl-2 text-sm">로그인 상태 유지</span>
                </div>
                <div>
                    <button className="bg-main h-[40px] w-full rounded-md font-bold text-white">
                        로그인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
