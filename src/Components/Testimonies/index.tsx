import React from "react";

const Testimonies = () => {
  return (
    <section className=" relative lg:py-[96px] py-[50px] lg:px-10 px-4 bg-gray-50">
      <div className="max-w-[1472px] 2xl:mx-auto  mx-auto flex justify-center gap-[64px] items-center lg:flex-row flex-col-reverse">
        <div className="max-w-[640px] flex flex-col lg:gap-12 gap-6 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="/assets/images/companies/Shopify.png"
              alt="shopify"
              className="w-28 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <img src="/assets/icons/Stars.svg" alt="stars" />
          </div>
          <div className="text-gray-900 lg:text-5xl text-2xl font-medium lg:leading-[60px] leading-normal tracking-[-0.88px]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </div>
          <div className="flex justify-between items-center lg:flex-row flex-col text-left">
            <div className="flex items-center gap-4">
              <div>
                <img src="/assets/images/Avatar1.png" alt="avatar" />
              </div>
              <div>
                <div className="lg:text-xl text-sm text-gray-900 font-semibold">
                  Sarah Thompson
                </div>
                <div className="lg:text-lg text-sm text-slate-600">
                  Project Manager, Shopify
                </div>
              </div>
            </div>
            <div className="flex items-center gap-8 lg:mt-0 mt-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white bg-opacity-90 border border-blue-100 cursor-pointer">
                <img src="/assets/icons/arrow-left.svg" alt="arrow left" />
              </div>
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white bg-opacity-90 border border-blue-100 cursor-pointer">
                <img src="/assets/icons/arrow-right.svg" alt="arrow right" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/images/testimony-bg.png" alt="testimony image" />
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
