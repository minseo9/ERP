import { useState, useEffect } from "react";

import FormFormat from "../../components/input-format/FormFormat";
import TextInputFormat from "../../components/input-format/TextInputFormat";
import SelectFormat from "../../components/input-format/SelectFormat";
import Button from "../../components/Button";
import ShowTable from "../../components/table/ShowTable";
import PageButton from "../../components/PageButton";
import EmployeeEditFormModal from "./EmployeeEditFormModal";

const EmployeeListPage = () => {
    const [employeePage, setEmployeePage] = useState(1);
    const [viewEmployeeData, setViewEmployeeData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const positionList = [
        "전체",
        "사원",
        "주임",
        "대리",
        "과장",
        "차장",
        "부장",
        "이사",
    ];
    const departmentList = [
        "전체",
        "보안 사업부",
        "솔루션 사업부",
        "컨설팅 사업부",
        "기술본부",
        "기술연구소",
        "기술1팀",
        "기술2팀",
        "경영지원부",
    ];
    const listLabel = [
        "사원번호",
        "이름",
        "생년월일",
        "연락처",
        "주소",
        "이메일",
        "입사일",
        "직급",
        "부서",
        "상태",
    ];
    const employeeData = [
        [
            "E001",
            "김민수",
            "1990-03-15",
            "010-1234-5678",
            "서울시 강남구 역삼동",
            "minsu.kim@example.com",
            "2020-01-02",
            "대리",
            "개발팀",
            "재직중",
        ],
        [
            "E002",
            "이서연",
            "1988-07-21",
            "010-5678-1234",
            "서울시 마포구 연남동",
            "seoyeon.lee@example.com",
            "2019-05-15",
            "과장",
            "기획팀",
            "재직중",
        ],
        [
            "E003",
            "박지훈",
            "1992-12-30",
            "010-8888-9999",
            "서울시 송파구 잠실동",
            "jihoon.park@example.com",
            "2021-03-01",
            "사원",
            "마케팅팀",
            "재직중",
        ],
        [
            "E004",
            "최윤아",
            "1995-06-10",
            "010-9999-1111",
            "경기도 성남시 분당구",
            "yuna.choi@example.com",
            "2022-08-01",
            "사원",
            "디자인팀",
            "재직중",
        ],
        [
            "E005",
            "정우성",
            "1985-11-22",
            "010-2222-3333",
            "서울시 중구 필동",
            "woosung.jung@example.com",
            "2015-04-10",
            "차장",
            "영업팀",
            "재직중",
        ],
        [
            "E006",
            "한지민",
            "1991-09-17",
            "010-4444-5555",
            "서울시 강서구 화곡동",
            "jimin.han@example.com",
            "2018-06-20",
            "대리",
            "개발팀",
            "퇴사",
        ],
        [
            "E007",
            "서강준",
            "1989-01-05",
            "010-6666-7777",
            "부산시 해운대구",
            "kangjun.seo@example.com",
            "2017-09-01",
            "과장",
            "기획팀",
            "재직중",
        ],
        [
            "E008",
            "이하늬",
            "1993-02-11",
            "010-3333-2222",
            "서울시 서초구 서초동",
            "hani.lee@example.com",
            "2023-01-10",
            "사원",
            "디자인팀",
            "재직중",
        ],
        [
            "E009",
            "오세훈",
            "1987-08-19",
            "010-1212-3434",
            "대구시 수성구",
            "sehun.oh@example.com",
            "2016-11-30",
            "부장",
            "영업팀",
            "재직중",
        ],
        [
            "E010",
            "문채원",
            "1996-05-08",
            "010-2323-4545",
            "광주시 북구",
            "chaewon.moon@example.com",
            "2024-04-01",
            "인턴",
            "개발팀",
            "재직중",
        ],
        [
            "E011",
            "장동건",
            "1982-10-02",
            "010-7878-9898",
            "인천시 남동구",
            "donggun.jang@example.com",
            "2010-02-01",
            "이사",
            "경영지원팀",
            "재직중",
        ],
    ];

    useEffect(() => {
        const start = (Number(employeePage) - 1) * 10;
        const end = Number(employeePage) * 10;
        const sliceEmployeeList = employeeData.slice(start, end);

        setViewEmployeeData(sliceEmployeeList);
    }, [employeePage]);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <section className="flex flex-col justify-center gap-3">
                <section className="flex items-center gap-4">
                    <FormFormat label={"입사일"} htmlFor={"date"}>
                        <input
                            type="date"
                            id="date"
                            className="default-input mr-3 px-3"
                        />
                        -
                        <input
                            type="date"
                            className="default-input ml-3 px-3"
                        />
                    </FormFormat>
                    <FormFormat label={"생년월일"} htmlFor={"birthday"}>
                        <input
                            type="date"
                            id="birthday"
                            className="default-input px-3"
                        />
                    </FormFormat>
                    <SelectFormat
                        label={"부서"}
                        id={"department"}
                        style={"default-input pl-1"}
                        list={departmentList}
                    />
                    <SelectFormat
                        label={"직급"}
                        id={"position"}
                        style={"default-input pl-1"}
                        list={positionList}
                    />
                    <FormFormat label={"재직 여부"} htmlFor={"state"}>
                        <input
                            type="checkbox"
                            id="state"
                            className="accent-main"
                        />
                    </FormFormat>
                </section>
                <section className="flex items-center gap-4">
                    <TextInputFormat
                        label={"사원번호"}
                        id={"number"}
                        style={"default-input px-3"}
                    />
                    <TextInputFormat
                        label={"이름"}
                        id={"name"}
                        style={"default-input px-3"}
                    />
                    <TextInputFormat
                        label={"이메일"}
                        id={"email"}
                        style={"default-input px-3"}
                    />
                    <TextInputFormat
                        label={"주소"}
                        id={"address"}
                        style={"default-input px-3"}
                    />
                    <Button text="조회" />
                </section>
            </section>
            <hr className="border-default-gray my-5" />
            <section>
                <ShowTable headList={listLabel} bodyList={viewEmployeeData} />
            </section>
            <section className="pt-4 text-end">
                <Button text="수정" clickEvent={openModal} />
            </section>
            <section>
                <PageButton page={employeePage} length={employeeData.length} />
            </section>
            <EmployeeEditFormModal
                modalOpen={modalOpen}
                closeModal={closeModal}
            />
        </div>
    );
};

export default EmployeeListPage;
