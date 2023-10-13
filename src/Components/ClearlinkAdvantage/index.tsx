import React from "react";

const ClearlinkAdvantage = () => {
  return (
    <section className="max-w-[1472px] 2xl:mx-auto lg:px-10 px-4 mx-auto relative lg:py-[96px] py-[50px]">
      <div className="text-center lg:text-left">
        <div className="text-blue-700 lg:text-xl text-base font-semibold">
          The ClearLink Advantage
        </div>
        <div className="text-slate-800 lg:text-5xl text-2xl font-semibold lg:pt-3 pt-2">
          Why choose ClearLink?
        </div>
        <div className="text-gray-500 lg:text-2xl text-base leading-[32px] lg:pt-5 pt-3">
          In a world where connection is everything, ClearLink takes the lead.
          Our
          <br /> cutting-edge video conferencing app offers:
        </div>

        <div className="lg:pt-[80px] pt-10 flex justify-between lg:flex-row flex-col-reverse items-center lg:items-center">
          <div className="flex gap-10 flex-wrap lg:max-w-[800px] max-w-full lg:mx-0 mx-auto lg:flex-row flex-col lg:mt-0 mt-10">
            <div className="flex flex-col items-center lg:items-start">
              <div className="w-14 h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                <img
                  src="/assets/icons/video-recorder.svg"
                  alt="video recorder"
                />
              </div>
              <div className="text-gray-900 lg:text-2xl text-base font-semibold lg:pt-9 pt-4">
                Crystal-clear HD video
              </div>
              <div className="max-w-[360px] lg:text-xl text-sm text-slate-600 leading-[28px] pt-2">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="w-14 h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                <img src="/assets/icons/recording-01.svg" alt="recording" />
              </div>
              <div className="text-gray-900 lg:text-2xl text-base font-semibold lg:pt-9 pt-4">
                Noise-canceling audio
              </div>
              <div className="max-w-[360px] lg:text-xl text-sm text-slate-600 leading-[28px] pt-2">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="w-14 h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                <img src="/assets/icons/calendar.svg" alt="calendar" />
              </div>
              <div className="text-gray-900 lg:text-2xl text-base font-semibold lg:pt-9 pt-4">
                Scheduling made easy
              </div>
              <div className="max-w-[360px] lg:text-xl text-sm text-slate-600 leading-[28px] pt-2">
                Streamline your agenda with ClearLink&apos;s intuitive
                scheduling. Set up meetings, send invitations, and receive
                reminders in one place.
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <div className="w-14 h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                <img src="/assets/icons/lock-unlocked-04.svg" alt="lock" />
              </div>
              <div className="text-gray-900 lg:text-2xl text-base font-semibold lg:pt-9 pt-4">
                Bank-grade security
              </div>
              <div className="max-w-[360px] lg:text-xl text-sm text-slate-600 leading-[28px] pt-2">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/assets/images/image1.png" alt="random image" />
            <div className="absolute -top-[43%] left-[40%] -translate-x-1/2 lg:block hidden">
              <img src="/assets/icons/Hand-drawn arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClearlinkAdvantage;
