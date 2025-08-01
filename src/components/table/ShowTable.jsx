import CheckListTable from "./CheckListTable";

const ShowTable = ({ headList, bodyList, isHeadCheck = false }) => {
    return (
        <table className="border-default-gray border-collaps w-full border text-sm">
            <thead className="h-[30px]">
                <CheckListTable
                    list={headList}
                    isHead
                    isHeadCheck={isHeadCheck}
                />
            </thead>
            <tbody>
                {bodyList.map((data, index) => (
                    <CheckListTable
                        key={`${data[0]}-${index}`}
                        list={data}
                        isHead={false}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ShowTable;
