import React from "react";

interface TabTitleProps {
  name: string;
  icon: JSX.Element;
}

const TabTitle = ({ name, icon }: TabTitleProps) => {
  return (
    <div className="tab__title">
      <h2>{name}</h2>
      {icon}
    </div>
  );
};

export default TabTitle;
