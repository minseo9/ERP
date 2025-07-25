import { useLocation } from "react-router-dom";

import Title from "../../components/Title";
import chart from "../../assets/department-chart.png";

const DepartmentInfoPage = () => {
    const location = useLocation().state.category;

    return (
        <div>
            <Title text={location} />
            <img src={chart} alt="부서 조직도" />
        </div>
    );
};

export default DepartmentInfoPage;
