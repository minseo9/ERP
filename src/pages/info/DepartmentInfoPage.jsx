import Title from "../../components/Title";
import chart from "../../assets/department-chart.png";

const DepartmentInfoPage = () => {
    return (
        <div>
            <Title />
            <img src={chart} alt="부서 조직도" />
        </div>
    );
};

export default DepartmentInfoPage;
