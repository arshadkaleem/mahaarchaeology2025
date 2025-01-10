import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const SubPageHeader = (props) => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-end shadow-sm bg-[url('/home/OtherBack2.jpg')] bg-auto h-[200px] sm:h-[250px] xl:h-[320px] ">
        <div className="w-11/12 mx-auto flex justify-between">
          <div className="self-end font-semibold  bg-slate-600 hover:bg-slate-700 text-white py-1 px-2  rounded-tl-lg rounded-tr-lg">
            <Link href="/">{t("Home")}</Link>
          </div>
          <h1 className=" text-xl sm:text-3xl xl:text-4xl pb-5  xl:pb-10 font-bold text-slate-700 ">
            {props.title}
          </h1>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default SubPageHeader;