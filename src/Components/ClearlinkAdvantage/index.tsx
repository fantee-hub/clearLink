import React from "react";

const ClearlinkAdvantage = () => {
  return (
    <section className="max-w-[1472px] 2xl:mx-auto px-10 mx-auto relative py-[96px]">
      <div>
        <div className="text-blue-700 text-xl font-semibold">
          The ClearLink Advantage
        </div>
        <div className="text-slate-800 text-5xl font-semibold pt-3">
          Why choose ClearLink?
        </div>
        <div className="text-gray-500 text-2xl leading-[32px] pt-5">
          In a world where connection is everything, ClearLink takes the lead.
          Our
          <br /> cutting-edge video conferencing app offers:
        </div>

        <div className="pt-[80px] flex justify-between">
          <div className="flex gap-10 flex-wrap max-w-[800px]">
            <div>
              <div className="w-14 h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                <img
                  src="/assets/icons/video-recorder.svg"
                  alt="video recorder"
                />
              </div>
              <div className="text-gray-900 text-2xl font-semibold pt-9">
                Crystal-clear HD video
              </div>
              <div className="max-w-[360px] text-xl text-slate-600 leading-[28px] pt-2">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </div>
            </div>

            <div>
              <div className="w-14 h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                <img src="/assets/icons/recording-01.svg" alt="recording" />
              </div>
              <div className="text-gray-900 text-2xl font-semibold pt-9">
                Noise-canceling audio
              </div>
              <div className="max-w-[360px] text-xl text-slate-600 leading-[28px] pt-2">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </div>
            </div>

            <div>
              <div className="w-14 h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                <img src="/assets/icons/calendar.svg" alt="calendar" />
              </div>
              <div className="text-gray-900 text-2xl font-semibold pt-9">
                Scheduling made easy
              </div>
              <div className="max-w-[360px] text-xl text-slate-600 leading-[28px] pt-2">
                Streamline your agenda with ClearLink&apos;s intuitive
                scheduling. Set up meetings, send invitations, and receive
                reminders in one place.
              </div>
            </div>

            <div>
              <div className="w-14 h-14 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center">
                <img src="/assets/icons/lock-unlocked-04.svg" alt="lock" />
              </div>
              <div className="text-gray-900 text-2xl font-semibold pt-9">
                Bank-grade security
              </div>
              <div className="max-w-[360px] text-xl text-slate-600 leading-[28px] pt-2">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/assets/images/image1.png" alt="random image" />
            <div className="absolute -top-[43%] left-[40%] -translate-x-1/2">
              <img src="/assets/icons/Hand-drawn arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClearlinkAdvantage;
