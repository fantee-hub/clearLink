import React from "react";

const Sponsors = () => {
  return (
    <section className="max-w-[1472px] 2xl:mx-auto px-10 mx-auto relative py-[96px]">
      <div className="text-center text-slate-600 text-xl font-medium">
        Join 1,500+ companies already video conferencing the ClearLink way
      </div>
      <div className="flex justify-center gap-[69px] flex-wrap items-center pt-12">
        <div>
          <img src="/assets/images/companies/Shopify.png" alt="shopify" />
        </div>
        <div>
          <img src="/assets/images/companies/Coinbase.png" alt="coinbase" />
        </div>
        <div>
          <img src="/assets/images/companies/Dropbox.png" alt="drop box" />
        </div>
        <div>
          <img src="/assets/images/companies/Intercom.png" alt="intercom" />
        </div>
        <div>
          <img src="/assets/images/companies/Marvel.png" alt="marvel" />
        </div>
        <div>
          <img src="/assets/images/companies/Automattic.png" alt="automattic" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
