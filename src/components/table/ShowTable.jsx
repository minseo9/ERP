import CheckListTable from "./CheckListTable";
import DefaultListTable from "./DefaultListTable";

const ShowTable = ({
    headList,
    bodyList,
    isHeadCheck = false,
    isDefaultList = false,
}) => {
    return (
        <table className="border-default-gray w-full border-collapse border text-sm">
            <thead className="sticky top-0 z-10 h-[30px]">
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
