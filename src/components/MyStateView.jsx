const MyStateView = ({ title, data }) => {
    return (
        <div>
            <div className="border-default-gray flex justify-between border-b py-2">
                <span className="text-gray-600">{title}</span>
                <span className="font-medium">{data}</span>
            </div>
        </div>
    );
};

export default MyStateView;
