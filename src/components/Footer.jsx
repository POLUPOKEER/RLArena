import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f4f5f6] px-4 py-8 md:px-8 lg:px-16 xl:px-[260px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-[20px] md:text-[24px] font-bold pb-[20px] md:pb-[30px] text-[#141416]">
            RLArena
          </h1>
          <h2 className="text-[14px] md:text-[16px] font-bold pb-4 text-[#3B5266]">
            Наши контакты
          </h2>
          <div className="flex flex-col gap-3 text-[15px] md:text-[17px] text-center md:text-left">
            <span>RLArena@gmail.com</span>
            <span>+89002032071</span>
            <span className="max-w-[300px]">
              24/1 к., ул. Белинского, г. Екатеринбург, Россия
            </span>
          </div>
        </div>

        <img
          src="/footer_image.svg"
          alt="Footer illustration"
          className="w-[200px] md:w-[250px] lg:w-auto object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
