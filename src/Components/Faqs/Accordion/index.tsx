import React from "react";
import { Collapse } from "react-collapse";
import plus from "../../../../public/assets/icons/plus-circle.svg";
import minus from "../../../../public/assets/icons/minus-circle.svg";

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
    <div
      onClick={handleToggle}
      className={`p-8 w-full cursor-pointer ${
        isOpen
          ? "bg-gray-50 rounded-2xl border border-gray-200"
          : " bg-white border-b border-gray-200"
      }`}
    >
      <div className="flex justify-between gap-3">
        <div className="text-gray-900 text-xl font-semibold pb-2">{title}</div>
        <div>
          <img src={!isOpen ? plus.src : minus.src} alt="" />
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="text-slate-600 text-lg leading-[28px]">{children}</div>
      </Collapse>
    </div>
  );
};

export default Accordion;
