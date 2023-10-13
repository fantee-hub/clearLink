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
      className={`lg:p-8 p-4 cursor-pointer ${
        isOpen
          ? "bg-gray-50 rounded-2xl border border-gray-200"
          : " bg-white border-b border-gray-200"
      }`}
    >
      <div className="flex justify-between lg:gap-3 gap-0 relative">
        <div className="text-gray-900 lg:text-xl text-sm font-semibold ssm:max-w-[38rem] max-w-[17rem]">
          {title}
        </div>
        <div className="absolute lg:-right-5 top-0 -right-0">
          <img src={!isOpen ? plus.src : minus.src} alt="" />
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <div className="text-slate-600 lg:text-lg text-sm leading-[28px] pt-2">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
