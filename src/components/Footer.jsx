import React from "react";
import Image from "../images/Image";

const Footer = () => {
  return (
    <footer className="section-container bg-gray-50">
      <div className="flex flex-col items-center justify-between ">
        <Image name="logo" classes="scale-50" />
      </div>
      <div className="flex flex-col items-center justify-around flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
        
              <a href="/" className="hover:text-strongCyan">
                FAQs
              </a>

              <a href="/" className="hover:text-strongCyan">
                Contact Us
              </a>


              <a href="/" className="hover:text-strongCyan">
                Privacy Policy
              </a>

              <a href="/" className="hover:text-strongCyan">
                Press Kit
              </a>


              <a href="/" className="hover:text-strongCyan">
                Install Guide
              </a>
   
        </div>

        <div className="flex justify-between w-32 py-1 m-auto my-20">
          <a href="/">

            <Image name="facebook" classes="duration-200 ficon"/>
          </a>
          <a href="/">

            <Image name="twitter" classes="duration-200 ficon"/>
          </a>
          <a href="/">

            <Image name="instagram" classes="duration-200 ficon"/>
          </a>
        
      </div>
    </footer>
  );
};

export default Footer;
