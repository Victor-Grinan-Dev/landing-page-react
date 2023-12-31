import React from "react";
import Image from "../images/Image";

const Features = () => {
  return (
    <section className="section-container my-20">
      <div className="flex flex-col md:flex-row md:space-x-32 relative">
        <div className="md:w-1/2">
          <Image classes="md:absolute top-0 right-[50%]" name="imageComputer" />
        </div>
        <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16">
          <div>
            <h5>Quick Search</h5>
            <p className="feature-item">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div>
            <h5>iCloud Sync</h5>
            <p className="feature-item">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div>
            <h5>Completely History</h5>
            <p className="feature-item">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
