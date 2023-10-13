import React, { useState } from "react";
import { faqs } from "@/src/utils";
import Accordion from "./Accordion";

const Faqs = () => {
  const [currentOpen, setCurrentOpen] = useState(false);
  return (
    <section className="max-w-[1472px] 2xl:mx-auto lg:px-10 px-4 mx-auto relative lg:py-[96px] py-[50px]">
      <div className="flex justify-between lg:flex-row flex-col">
        <div className="w-full text-center lg:text-left">
          <div className="text-blue-700 lg:text-lg text-base font-semibold">
            Support
          </div>
          <div className="text-slate-800 lg:text-5xl text-2xl font-semibold pt-3">
            FAQs
          </div>
          <div className="lg:pt-5 pt-3 text-gray-500 lg:text-2xl text-base lg:leading-[32px] leading-normal max-w-[35rem] mx-auto lg:mx-0">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <span className="underline leading-loose">
              chat to our friendly team.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 pt-5 lg:pt-0">
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
