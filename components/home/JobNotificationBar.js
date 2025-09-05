import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const JobNotificationBar = () => {
  const { t } = useTranslation("common");

  return (
    <div className="bg-[#c88f35]">
      {/* <div className="w-11/12 mx-auto flex justify-end  text-base sm:text-2xl sm:px-0 px-2 font-bold py-1 sm:py-1 xl:py-3 text-slate-700 shadow-lg">
      <input
        type="search"
        className="form-control block w-[350px] px-1 sm:px-3 py-2 text-sm sm:text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
  rounded transition  ease-in-out m-0  focus:bg-white  focus:outline-none "
        placeholder="Search "
      />
    </div> */}
      <div className="w-11/12 mx-auto flex justify-between items-center text-xl  sm:px-0 px-2 font-bold py-1 sm:py-1 xl:py-3 text-slate-700 shadow-lg">
        <Link href="/administrative_setup?recruitment=2" legacyBehavior>
          <div className="blink flex items-center cursor-pointer">
            <span className="inner-text text-blue-800">
              {t("Vacancy-Notify")}
            </span>
          </div>
        </Link>

        <input
          type="search"
          className="form-control block w-[350px] px-1 sm:px-3 py-2 text-sm sm:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
  rounded transition  ease-in-out m-0  focus:bg-white  focus:outline-none "
          placeholder="Search Page "
        />
      </div>
    </div>
  );
};

export default JobNotificationBar;
