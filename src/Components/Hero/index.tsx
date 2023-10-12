import React from "react";
import bot from "../../../public/assets/icons/bot.svg";
import heroImage from "@/public/assets/images/hero-bg.png";

const Hero = () => {
  return (
    <section className="max-w-[1472px] 2xl:mx-auto px-10 mx-auto relative">
      <div className="bg-hero-background bg-cover bg-no-repeat w-full h-full">
        <div className="pt-[260px] flex justify-between gap-5 pb-[96px]">
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
            <div className="flex gap-4 mt-14">
              <div>
                <img src="/assets/images/Avatar group.png" alt="avatar group" />
              </div>
              <div>
                <div className="flex gap-2 text-slate-700">
                  <span>
                    <img src="/assets/icons/Stars.svg" alt="stars" />
                  </span>
                  <span>5.0</span>
                </div>
                <div className="text-slate-600">from 3,000+ reviews</div>
              </div>
            </div>
          </div>
          <div className="bg-sky-50 p-8 rounded-2xl shadow-[0px_32px_64px_12px_rgba(16_,24_,40_,0.14)] border border-sky-200">
            <div>
              <img src={heroImage.src} alt="hero bg" />
            </div>
            <div className="pt-10 flex justify-center items-center gap-4">
              <div className="w-11 h-11 flex justify-center items-center rounded-full bg-white shadow border border-blue-100">
                <img src="/assets/icons/microphone-01.svg" alt="microphone" />
              </div>
              <div className="w-11 h-11 flex justify-center items-center rounded-full bg-white shadow border border-blue-100">
                <img
                  src="/assets/icons/video-recorder.svg"
                  alt="video recorder"
                />
              </div>
              <div className="w-11 h-11 flex justify-center items-center rounded-full bg-white shadow border border-blue-100">
                <img src="/assets/icons/monitor-01.svg" alt="monitor" />
              </div>
              <div className="w-11 h-11 flex justify-center items-center rounded-full bg-white shadow border border-blue-100">
                <img src="/assets/icons/face-smile.svg" alt="face smile" />
              </div>
              <div className="w-11 h-11 flex justify-center items-center rounded-full bg-white shadow border border-blue-100">
                <img
                  src="/assets/icons/message-text-circle-02.svg"
                  alt="message"
                />
              </div>
              <div className="w-11 h-11 flex justify-center items-center rounded-full bg-white shadow border border-blue-100">
                <img src="/assets/icons/settings-01.svg" alt="microphone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
