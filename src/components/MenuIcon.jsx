const MenuIcon = ({ text, Icon }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon />
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default MenuIcon;
