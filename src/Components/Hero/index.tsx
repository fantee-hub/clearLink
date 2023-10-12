import React from "react";
import bot from "../../../public/assets/icons/bot.svg";

const Hero = () => {
  return (
    <section className="max-w-[1472px] 2xl:mx-auto px-4 mx-auto relative">
      <div className="bg-hero-background bg-cover bg-no-repeat w-full h-full">
        <div className="pt-[260px]">
          <div className="flex flex-col gap-6">
            <div className="text-slate-800 text-6xl font-semibold leading-[1.1]">
              Uniting the world,
              <br /> one video call at a time
            </div>
            <div className="text-gray-500">
              Experience the future of communication with ClearLink – <br />{" "}
              where crystal-clear video conferencing meets
              <br /> unparalleled simplicity.
            </div>
            <div className="mt-6 flex items-center gap-5">
              <div>
                <button className="w-56 h-14 flex items-center justify-center bg-blue-700 rounded-full shadow text-white font-semibold">
                  Start your free trial
                </button>
              </div>
              <div className="text-blue-700 text-lg font-semibold flex items-center gap-3">
                <span>
                  <img src={bot.src} alt="bot" />
                </span>
                <span>Discover AI assistant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
