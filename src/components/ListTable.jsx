const ListTable = ({ list, type = "false" }) => {
    return (
        <tr>
            {type === "false" ? (
                <td className="border-default-gray h-[40px] border-r border-b text-center">
                    <input type="checkbox" />
                </td>
            ) : (
                <td className="bg-default-gray w-[30px]"></td>
            )}
            {list.map((data, index) => (
                <td
                    key={index}
                    className={
                        type === "true"
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

export default ListTable;
