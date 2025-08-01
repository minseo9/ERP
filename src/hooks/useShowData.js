import { useState, useEffect } from "react";

const useShowData = (page, dataList) => {
    const [viewData, setViewData] = useState([]);

    useEffect(() => {
        const start = (Number(page) - 1) * 10;
        const end = Number(page) * 10;
        const sliceWorkList = dataList.slice(start, end);

        setViewData(sliceWorkList);
    }, [page]);

    return viewData;
};

export default useShowData;
