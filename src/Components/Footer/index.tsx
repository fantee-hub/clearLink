import React from "react";

const Footer = () => {
  return (
    <section className="max-w-[1472px] 2xl:mx-auto px-10 mx-auto relative py-[96px]">
      <div className="flex justify-between">
        <div className="max-w-[400px] flex flex-col gap-8">
          <div className="flex items-center gap-2 text-gray-900 text-2xl font-semibold">
            <span>
              <img src="/assets/logo/logo.svg" alt="logo" />
            </span>
            <span>ClearLink.</span>
          </div>
          <div className="text-slate-600 text-lg leading-[28px]">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </div>
        </div>
        <div>
          <div className="text-gray-500 font-semibold pb-4">Product</div>
          <ul className="flex flex-col gap-4 text-lg text-slate-600 font-semibold [&>*]:cursor-pointer">
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <div className="text-gray-500 font-semibold pb-4">Company</div>
          <ul className="flex flex-col gap-4 text-lg text-slate-600 font-semibold [&>*]:cursor-pointer">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="text-gray-500 font-semibold pb-4">Resources</div>
          <ul className="flex flex-col gap-4 text-lg text-slate-600 font-semibold [&>*]:cursor-pointer">
            <li>Blog</li>
            <li>Events</li>
            <li>Help Centre</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <div className="text-gray-500 font-semibold pb-4">Legal</div>
          <ul className="flex flex-col gap-4 text-lg text-slate-600 font-semibold [&>*]:cursor-pointer">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licences</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-blue-700 font-semibold">Get the app</div>
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
