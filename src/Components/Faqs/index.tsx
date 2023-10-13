import React, { useState } from "react";
import { faqs } from "@/src/utils";
import Accordion from "./Accordion";

const Faqs = () => {
  const [currentOpen, setCurrentOpen] = useState(false);
  return (
    <section className="max-w-[1472px] 2xl:mx-auto px-10 mx-auto relative py-[96px]">
      <div className="flex justify-between">
        <div className="w-full">
          <div className="text-blue-700 text-lg font-semibold">Support</div>
          <div className="text-slate-800 text-5xl font-semibold pt-3">FAQs</div>
          <div className="pt-5 text-gray-500 text-2xl leading-[32px]">
            Everything you need to know about the product
            <br /> and billing. Can’t find the answer you’re looking
            <br /> for? Please{" "}
            <span className="underline leading-loose">
              chat to our friendly team.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          {faqs.map((item, index) => (
            <Accordion
              key={item.id}
              currentOpen={currentOpen}
              setCurrentOpen={setCurrentOpen}
              num={index}
              title={item.title}
            >
              {item.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
