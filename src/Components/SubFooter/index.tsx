import React from "react";

const SubFooter = () => {
  return (
    <section className="relative py-12 bg-gray-50 px-10">
      <div className="max-w-[1472px] 2xl:mx-auto  mx-auto flex items-center justify-between">
        <div className="text-gray-500">
          © 2023 ClearLink. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
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
