import React from "react";
import Btn from "./Btn";

const CTA = () => {
  return (
    <section className="section-container my-20">
      <h3>Clipboard for iOS and MacOS</h3>
      <p className="section-content mb-10 text-xl">
      Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
      </p>
      <div className="btnContainer flex flex-col justify-center items-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-6 md:m-y-0 md:m-x-4 md:items-end">

      <Btn type="primary" caption="Download for IOS"/>
      <Btn type="secondary" caption="Download for Mac"/>
      </div>

    </section>
  );
};

export default CTA;
