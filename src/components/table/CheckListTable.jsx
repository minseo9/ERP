const CheckListTable = ({ list, isHead, isHeadCheck, isEvent }) => {
    const formCheck = (data) => data.includes("신청서");

    return (
        <tr>
            {isHead === false ? (
                <td className="border-default-gray h-[40px] border-r border-b text-center">
                    <input
                        type="checkbox"
                        name="check"
                        className="accent-main"
                    />
                </td>
            ) : isHeadCheck === false ? (
                <td className="bg-default-gray w-[30px]"></td>
            ) : (
                <td className="bg-default-gray w-[30px] text-center">
                    <input
                        type="checkbox"
                        name="check"
                        className="accent-main"
                    />
                </td>
            )}
            {list.map((data, index) => (
                <td
                    key={index}
                    className={
                        isHead === true
                            ? "bg-default-gray text-center"
                            : formCheck(data)
                              ? "border-default-gray cursor-pointer border-r border-b text-center"
                              : "border-default-gray border-r border-b text-center"
                    }
                    onClick={() => (formCheck(data) ? isEvent() : null)}
                >
                    {data}
                </td>
            ))}
        </tr>
    );
};

export default CheckListTable;
