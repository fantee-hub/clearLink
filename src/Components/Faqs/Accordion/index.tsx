import React from "react";
import { Collapse } from "react-collapse";

const Accordion = ({
  children,
  currentOpen,
  setCurrentOpen,
  num,
  title,
}: any) => {
  const isOpen = num === currentOpen;
  const handleToggle = () => {
    setCurrentOpen(isOpen ? false : num);
  };
  return (
    <div>
      <div onClick={handleToggle}>
        <div>{title}</div>
      </div>
      <Collapse isOpened={isOpen}>
        <div>{children}</div>
      </Collapse>
    </div>
  );
};

export default Accordion;
