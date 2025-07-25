const MenuLabel = ({ menu }) => {
    return (
        <div className="mb-6 text-xs text-gray-500">
            {menu.category} {">"} {menu.detail}
        </div>
    );
};

export default MenuLabel;
