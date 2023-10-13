import React from "react";

const Footer = () => {
  return (
    <section className="max-w-[1472px] 2xl:mx-auto lg:px-10 px-4 mx-auto relative lg:py-[96px] py-[50px]">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="max-w-[400px] flex flex-col lg:gap-8 gap-4">
          <div className="flex items-center gap-2 text-gray-900 text-2xl font-semibold">
            <span>
              <img src="/assets/logo/logo.svg" alt="logo" />
            </span>
            <span>ClearLink.</span>
          </div>
          <div className="text-slate-600 lg:text-lg text-base leading-[28px]">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="text-gray-500 font-semibold lg:pb-4 pb-2 text-sm lg:text-base">
            Product
          </div>
          <ul className="flex flex-col lg:gap-4 gap-2 lg:text-lg text-base text-slate-600 font-semibold [&>*]:cursor-pointer">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="text-gray-500 font-semibold lg:pb-4 pb-2 lg:text-base text-sm">
            Company
          </div>
          <ul className="flex flex-col lg:gap-4 gap-2 lg:text-lg text-base text-slate-600 font-semibold [&>*]:cursor-pointer">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="text-gray-500 font-semibold lg:pb-4 pb-2 lg:text-base text-sm">
            Resources
          </div>
          <ul className="flex flex-col lg:gap-4 gap-2 lg:text-lg text-base text-slate-600 font-semibold [&>*]:cursor-pointer">
            <li>Blog</li>
            <li>Events</li>
            <li>Help Centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="text-gray-500 font-semibold lg:pb-4 pb-2 lg:text-base text-sm">
            Legal
          </div>
          <ul className="flex flex-col lg:gap-4 gap-2 lg:text-lg text-base text-slate-600 font-semibold [&>*]:cursor-pointer">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licences</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-8 lg:mt-0">
          <div className="text-blue-700 font-semibold lg:text-base text-sm">
            Get the app
          </div>
          <div>
            <img src="/assets/images/Mobile app store.png" alt="apple store" />
          </div>
          <div>
            <img src="/assets/images/google play.png" alt="google play" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
