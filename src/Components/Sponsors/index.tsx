import React from "react";

const Sponsors = () => {
  return (
    <section className="max-w-[1472px] 2xl:mx-auto lg:px-10 px-4 mx-auto relative lg:py-[96px] py-[50px]">
      <div className="text-center text-slate-600 lg:text-xl font-medium text-base">
        Join 1,500+ companies already video conferencing the ClearLink way
      </div>
      <div className="flex justify-center lg:gap-[69px] gap-5 flex-wrap items-center pt-12">
        <div>
          <img
            src="/assets/images/companies/Shopify.png"
            alt="shopify"
            className="w-24 object-contain lg:w-auto lg:h-auto"
          />
        </div>
        <div>
          <img
            src="/assets/images/companies/Coinbase.png"
            alt="coinbase"
            className="w-24 object-contain lg:w-auto lg:h-auto"
          />
        </div>
        <div>
          <img
            src="/assets/images/companies/Dropbox.png"
            alt="drop box"
            className="w-24 object-contain lg:w-auto lg:h-auto"
          />
        </div>
        <div>
          <img
            src="/assets/images/companies/Intercom.png"
            alt="intercom"
            className="w-24 object-contain lg:w-auto lg:h-auto"
          />
        </div>
        <div>
          <img
            src="/assets/images/companies/Marvel.png"
            alt="marvel"
            className="w-24 object-contain lg:w-auto lg:h-auto"
          />
        </div>
        <div>
          <img
            src="/assets/images/companies/Automattic.png"
            alt="automattic"
            className="w-24 object-contain lg:w-auto lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
