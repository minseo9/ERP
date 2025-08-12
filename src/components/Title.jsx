import { useLocation } from "react-router-dom";

const Title = ({ text }) => {
    const location = useLocation();
    const categoryFromState = location.state?.category;

    const displayText = text || categoryFromState;

    return (
        <div className="mb-7 text-sm font-bold">
            {"|"} {displayText}
        </div>
    );
};

export default Title;
