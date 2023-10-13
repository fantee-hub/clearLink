import React from "react";

const SubFooter = () => {
  return (
    <section className="relative lg:py-12 py-6 bg-gray-50 lg:px-10 px-4">
      <div className="max-w-[1472px] 2xl:mx-auto  mx-auto flex items-center justify-between lg:flex-row flex-col-reverse gap-4 lg:gap-0">
        <div className="text-gray-500">
          © 2023 ClearLink. All rights reserved.
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          <img src="/assets/icons/linkedin.svg" alt="linkedin" />
          <img src="/assets/icons/twitter.svg" alt="twitter" />
          <img src="/assets/icons/facebook.svg" alt="facebook" />
          <img src="/assets/icons/instagram.svg" alt="instagram" />
          <img src="/assets/icons/github.svg" alt="github" />
          <img src="/assets/icons/youtube.svg" alt="youtube" />
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
