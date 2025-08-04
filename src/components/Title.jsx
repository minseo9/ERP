import { useLocation } from "react-router-dom";

const Title = ({ text }) => {
    const location = useLocation().state.category;

    return (
        <div className="mb-7 text-sm font-bold">
            {"|"} {text ? text : location}
        </div>
    );
};

export default Title;
