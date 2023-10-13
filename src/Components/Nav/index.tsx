import React, { useState } from "react";
import logo from "@/public/assets/logo/logo.svg";
import { FiChevronDown } from "react-icons/fi";
import { Rotate as Hamburger } from "hamburger-react";
import { Collapse } from "react-collapse";

const Navbar = () => {
  const [isProductVisible, setIsProductVisible] = useState(false);
  const [isSolutionsVisible, setIsSolutionsVisble] = useState(false);
  const [isResourceVisible, setIsResourceVisible] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const hamburgerHandler = () => {
    setToggleHamburger(!toggleHamburger);
  };
  return (
    <>
      <nav className="lg:flex justify-between items-center max-w-[1472px] w-full 2xl:mx-auto rounded-full h-20 bg-gray-100 py-4 px-8 fixed top-10 right-0 left-0 z-[999] hidden">
        <div className="flex items-center gap-2">
          <span>
            <img src={logo.src} alt="logo" />
          </span>
          <span className="text-2xl font-semibold text-[#101828]">
            ClearLink.
          </span>
        </div>
        <ul className="lg:flex items-center text-gray-500 text-lg font-semibold gap-10 hidden">
          <div
            onMouseEnter={() => setIsProductVisible(true)}
            onMouseLeave={() => setIsProductVisible(false)}
            className="cursor-pointer relative nav-item"
          >
            <li className="flex items-center gap-1">
              <span>Products</span>

              <span>
                <FiChevronDown />
              </span>
            </li>
            {isProductVisible && (
              <div className="absolute hidden top-full left-0 bg-white shadow-[0px_4px_6px_rgba_(0_,0_,0_,0.1)] opacity-0 py-4 rounded dropdown-content w-[120px] text-sm">
                <div className="py-2 px-4 hover:bg-gray-100">Product 1</div>
                <div className="py-2 px-4 hover:bg-gray-100">Product 2</div>
                <div className="py-2 px-4 hover:bg-gray-100">Product 3</div>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setIsSolutionsVisble(true)}
            onMouseLeave={() => setIsSolutionsVisble(false)}
            className="cursor-pointer relative nav-item"
          >
            <li className="flex items-center gap-1">
              <span>Solutions</span>

              <span>
                <FiChevronDown />
              </span>
            </li>
            {isSolutionsVisible && (
              <div className="absolute hidden top-full left-0 bg-white shadow-[0px_4px_6px_rgba_(0_,0_,0_,0.1)] opacity-0 py-4 rounded dropdown-content w-[120px] text-sm">
                <div className="py-2 px-4 hover:bg-gray-100">Item 1</div>
                <div className="py-2 px-4 hover:bg-gray-100">Item 2</div>
                <div className="py-2 px-4 hover:bg-gray-100">Item 3</div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => setIsResourceVisible(true)}
            onMouseLeave={() => setIsResourceVisible(false)}
            className="cursor-pointer relative nav-item"
          >
            <li className="flex items-center gap-1">
              <span>Resources</span>

              <span>
                <FiChevronDown />
              </span>
            </li>
            {isResourceVisible && (
              <div className="absolute hidden top-full left-0 bg-white shadow-[0px_4px_6px_rgba_(0_,0_,0_,0.1)] opacity-0 py-4 rounded dropdown-content w-[120px] text-sm">
                <div className="py-2 px-4 hover:bg-gray-100">Item 1</div>
                <div className="py-2 px-4 hover:bg-gray-100">Item 2</div>
                <div className="py-2 px-4 hover:bg-gray-100">Item 3</div>
              </div>
            )}
          </div>
          <li>Pricing</li>
        </ul>
        <div className="flex items-center gap-2">
          <div>
            <button className="w-36 h-12 flex items-center justify-center rounded-full py-3.5 bg-white shadow border border-gray-400 font-semibold">
              Talk to sales
            </button>
          </div>
          <div>
            <button className="w-40 h-12 py-3.5 bg-blue-700 rounded-full shadow justify-center items-center flex text-white font-semibold">
              Sign up for free
            </button>
          </div>
        </div>
      </nav>

      <nav className="lg:hidden fixed top-0 right-0 w-full z-[999] bg-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>
              <img src={logo.src} alt="logo" />
            </span>
            <span className="text-2xl font-semibold text-[#101828]">
              ClearLink.
            </span>
          </div>
          <div className="lg:hidden block" onClick={hamburgerHandler}>
            <div>
              <Hamburger toggled={toggleHamburger} size={24} />
            </div>
          </div>
        </div>
        <Collapse isOpened={toggleHamburger}>
          <ul className="flex items-center text-gray-500 text-sm font-semibold flex-col gap-5 justify-center py-5">
            <div
              onMouseEnter={() => setIsProductVisible(true)}
              onMouseLeave={() => setIsProductVisible(false)}
              className="cursor-pointer relative nav-item"
            >
              <li className="flex items-center gap-1">
                <span>Products</span>

                <span>
                  <FiChevronDown />
                </span>
              </li>
              {isProductVisible && (
                <div className="absolute hidden top-full left-0 bg-white shadow-[0px_4px_6px_rgba_(0_,0_,0_,0.1)] opacity-0 py-4 rounded dropdown-content w-[120px] text-sm z-20">
                  <div className="py-2 px-4 hover:bg-gray-100">Product 1</div>
                  <div className="py-2 px-4 hover:bg-gray-100">Product 2</div>
                  <div className="py-2 px-4 hover:bg-gray-100">Product 3</div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setIsSolutionsVisble(true)}
              onMouseLeave={() => setIsSolutionsVisble(false)}
              className="cursor-pointer relative nav-item"
            >
              <li className="flex items-center gap-1">
                <span>Solutions</span>

                <span>
                  <FiChevronDown />
                </span>
              </li>
              {isSolutionsVisible && (
                <div className="absolute hidden top-full left-0 bg-white shadow-[0px_4px_6px_rgba_(0_,0_,0_,0.1)] opacity-0 py-4 rounded dropdown-content w-[120px] text-sm z-20">
                  <div className="py-2 px-4 hover:bg-gray-100">Item 1</div>
                  <div className="py-2 px-4 hover:bg-gray-100">Item 2</div>
                  <div className="py-2 px-4 hover:bg-gray-100">Item 3</div>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setIsResourceVisible(true)}
              onMouseLeave={() => setIsResourceVisible(false)}
              className="cursor-pointer relative nav-item"
            >
              <li className="flex items-center gap-1">
                <span>Resources</span>

                <span>
                  <FiChevronDown />
                </span>
              </li>
              {isResourceVisible && (
                <div className="absolute hidden top-full left-0 bg-white shadow-[0px_4px_6px_rgba_(0_,0_,0_,0.1)] opacity-0 py-4 rounded dropdown-content w-[120px] text-sm z-20">
                  <div className="py-2 px-4 hover:bg-gray-100">Item 1</div>
                  <div className="py-2 px-4 hover:bg-gray-100">Item 2</div>
                  <div className="py-2 px-4 hover:bg-gray-100">Item 3</div>
                </div>
              )}
            </div>
            <li>Pricing</li>
          </ul>
          <div className="flex items-center gap-2 justify-center pb-4">
            <div>
              <button className="w-36 h-10 flex items-center justify-center rounded-full py-3.5 bg-white shadow border border-gray-400 font-semibold text-xs">
                Talk to sales
              </button>
            </div>
            <div>
              <button className="w-40 h-10 text-xs py-3.5 bg-blue-700 rounded-full shadow justify-center items-center flex text-white font-semibold">
                Sign up for free
              </button>
            </div>
          </div>
        </Collapse>
      </nav>
    </>
  );
};

export default Navbar;
