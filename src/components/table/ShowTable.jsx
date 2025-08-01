import CheckListTable from "./CheckListTable";

const ShowTable = ({ headList, bodyList }) => {
    return (
        <table className="border-default-gray border-collaps w-full border text-sm">
            <thead className="h-[30px]">
                <CheckListTable list={headList} type />
            </thead>
            <tbody>
                {bodyList.map((data) => (
                    <CheckListTable key={data[0]} list={data} />
                ))}
            </tbody>
        </table>
    );
};

export default ShowTable;
