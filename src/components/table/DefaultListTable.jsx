const DefaultListTable = ({ list, isHead }) => {
    return (
        <tr>
            {list.map((data, index) => (
                <td
                    key={index}
                    className={
                        isHead === true
                            ? "bg-default-gray text-center"
                            : index === 0
                              ? "border-default-gray h-[30px] border-r border-b text-center"
                              : "border-default-gray h-[30px] border-r border-b text-center"
                    }
                >
                    {data}
                </td>
            ))}
        </tr>
    );
};

export default DefaultListTable;
