import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { mainMenuData } from "../data/mainMenuData";
import { myPageMenuData } from "../data/myPageMenuData";

const SideBar = ({ menu, setMenu, menuType }) => {
    const [sideBarData, setSideBarData] = useState(mainMenuData);
    const [selectedCategory, setSelectedCategory] = useState(menu.category);
    const [selectedDetail, setSelectedDetail] = useState(menu.detail);

    useEffect(() => {
        if (menuType === "main") {
            setSideBarData(mainMenuData);
            setSelectedCategory(menu.category);
            setSelectedDetail(menu.details);
        } else if (menuType === "myPage") {
            setSideBarData(myPageMenuData);

            const nextCategory = myPageMenuData[0].category;
            const nextDetail = myPageMenuData[0].details[0].category;
            setSelectedCategory(myPageMenuData[0].category);
            setSelectedDetail(myPageMenuData[0].details[0].category);
            setMenu({ category: nextCategory, detail: nextDetail });
            sessionStorage.setItem(
                "page",
                JSON.stringify({ category: nextCategory, detail: nextDetail }),
            );
        }
    }, [menuType]);

    return (
        <div className="w-[200px] text-sm">
            {sideBarData.map((data, index) => (
                <div key={index} className="group mb-4 w-full">
                    <div className="menu-category px-2 pb-2">
                        - {data.category}
                    </div>
                    <div className="bg-default-gray mb-5 flex w-[200px] flex-col space-y-2 rounded-sm p-4">
                        {data.details.map((d) => (
                            <Link
                                key={d.to}
                                to={d.to}
                                state={{ category: d.category }}
                                className={
                                    selectedCategory === data.category &&
                                    selectedDetail === d.category
                                        ? "text-main"
                                        : "text-black"
                                }
                                onClick={() => {
                                    setSelectedCategory(data.category);
                                    setSelectedDetail(d.category);
                                    setMenu({
                                        category: data.category,
                                        detail: d.category,
                                    });
                                    sessionStorage.setItem(
                                        "page",
                                        JSON.stringify({
                                            category: data.category,
                                            detail: d.category,
                                        }),
                                    );
                                }}
                            >
                                {d.category}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SideBar;
