import React from "react";

const FreeTrial = () => {
  return (
    <section className="max-w-[1572px] 2xl:mx-auto mx-auto relative py-[96px]">
      <div className="flex items-center justify-between gap-[125px]">
        <div className="pl-10 max-w-[660px]">
          <div className="text-gray-900 text-5xl font-semibold leading-[60px] tracking-[-0.96px]">
            Ready to clear the path to perfect communication?
          </div>
          <div className="pt-8 flex flex-col gap-5">
            <div className="flex items-center gap-3 text-slate-600 text-2xl">
              <span>
                <img src="/assets/icons/check-circle.svg" alt="" />
              </span>
              <span>30 days free trial</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-2xl">
              <span>
                <img src="/assets/icons/check-circle.svg" alt="" />
              </span>
              <span>Cancel at any time</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-2xl">
              <span>
                <img src="/assets/icons/check-circle.svg" alt="" />
              </span>
              <span>Access to all features</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600 text-2xl">
              <span>
                <img src="/assets/icons/check-circle.svg" alt="" />
              </span>
              <span>Peronalized onboarding</span>
            </div>
          </div>
          <div className="pt-10 flex items-center gap-2">
            <div>
              <button className="w-36 h-12 bg-white rounded-full shadow border border-gray-400 flex items-center justify-center outline-none text-gray-900">
                Talk to sales
              </button>
            </div>
            <div>
              <button className="w-48 h-12 bg-blue-700 rounded-full shadow border border-gray-400 flex items-center justify-center outline-none text-white">
                Start your free trial
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/assets/images/screen mockup.png" alt="screen mockup" />
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
