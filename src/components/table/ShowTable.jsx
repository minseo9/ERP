import CheckListTable from "./CheckListTable";
import DefaultListTable from "./DefaultListTable";

const ShowTable = ({
    headList,
    bodyList,
    isHeadCheck = false,
    isDefaultList = false,
}) => {
    return (
        <table className="border-default-gray border-collaps w-full border text-sm">
            <thead className="h-[30px]">
                {isDefaultList ? (
                    <DefaultListTable list={headList} isHead />
                ) : (
                    <CheckListTable
                        list={headList}
                        isHead
                        isHeadCheck={isHeadCheck}
                    />
                )}
            </thead>
            <tbody>
                {bodyList.map((data, index) =>
                    isDefaultList ? (
                        <DefaultListTable
                            key={`${data[0]}-${index}`}
                            list={data}
                            isHead={false}
                        />
                    ) : (
                        <CheckListTable
                            key={`${data[0]}-${index}`}
                            list={data}
                            isHead={false}
                        />
                    ),
                )}
            </tbody>
        </table>
    );
};

export default ShowTable;
