import React from "react";
import Image from "../images/Image";
import Btn from "./Btn";

const HeroBanner = () => {
  return (
    <section id="hero">
      <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
        <Image classes="mx-auto my-16" name="logo" />
        <h3>A history of everything you copy</h3>
        <p className="section-content">
          Clipboard allows you to track and organize everything you copy.
          Instantly acces your clipboard on all your devices
        </p>
        <div className="btnContainer flex flex-col justify-center items-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-6 md:m-y-0 md:m-x-4 md:items-end">
          <Btn type="primary" caption="Download for IOS" />
          <Btn type="secondary" caption="Download for Mac" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
