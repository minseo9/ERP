const CheckListTable = ({ list, isHead, isHeadCheck }) => {
    console.log(isHeadCheck);

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
                            : "border-default-gray border-r border-b text-center"
                    }
                >
                    {data}
                </td>
            ))}
        </tr>
    );
};

export default CheckListTable;
