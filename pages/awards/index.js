// import React from "react";
// import Navigation from "../../components/home/Navigation";
// import SubPageHeader from "../../components/SubPageHeader";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useRouter } from "next/router";

// const Index = () => {
//   const { t } = useTranslation("common");
//   const router = useRouter();
//   return (
//     <div>
//       <Navigation pagePath={router.route}/>
//       <SubPageHeader title={t("Awards")} />
//       <div className="sm:w-11/12 mx-auto w-full py-10 sm:px-0 px-3">
//         <h3 className="text-lg text-center py-3 font-semibold text-slate-700">
//           {t("Awards-T1")}
//         </h3>
//         <p className="text-justify text-lg  text-slate-700">{t("Awards-P1")}</p>
//       </div>
//     </div>
//   );
// };

// export default Index;

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });

import React, { useState } from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";

const Index = () => {
  
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();
  return (
    <div>
       <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Awards")} />
      <div className="grid sm:grid-cols-12 grid-cols-1 relative py-10">
        {/* Mobile */}
        <div className="block sm:hidden bg-white py-1 mx-3 my-2">
          <div className="flex justify-start items-center px-2">
            <div
              className="text-2xl  text-slate-700  cursor-pointer drop-shadow-xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <IoClose /> : <IoMenuSharp />}{" "}
            </div>
            <span className="text-base font-semibold  text-slate-700 pl-3">
              {t("menu")}
            </span>
          </div>
          {open && (
            <div className="p-3 sm:p-3 absolute top-10 w-11/12 z-40 bg-[#eee] grid grid-cols-1 divide-y-2 space-y-1 content-start  border-l-2 rounded-l-md">
              {t("AwardsTabs", { returnObjects: true }).map((item) => (
                <button
                  key={Math.random() * 100}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                    setOpen(false);
                  }}
                  className={` border-2 p-2 text-left font-bold  border-gray-100 rounded-md w-full focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white 
        ${
          item.id == activeTab
            ? "bg-slate-800 text-white focus:border-slate-700 "
            : "bg-white text-slate-700"
        }`}
                >
                  {" "}
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* desktop */}
        <div className="col-span-3  hidden sm:block ">
          <div className="px-3 py-7 bg-white ml-5 grid grid-cols-1 space-y-2 content-start   border-2 rounded-md rounded-r-none border-r-0">
            {t("AwardsTabs", { returnObjects: true }).map((item) => (
              <button
                key={Math.random() * 100}
                className={`border-2 p-2 text-left font-bold bg-[#eee]  border-gray-100 rounded-md w-full focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white
        ${
          item.id == activeTab
            ? "bg-slate-700  text-white focus:border-slate-700 "
            : "bg-[#eee] text-black"
        }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-9 border-2 rounded-r-md bg-white mx-3 sm:mx-0 sm:mr-5 ">
          <div className="pt-2">
            {activeTab == "1" && (
              <>
                <h3 className="text-lg text-center py-3  font-semibold text-slate-700">
                  {t("Awards-T1")}
                </h3>
                <p className="text-justify text-lg px-5  text-slate-700">
                  {t("Awards-P1")}
                </p>
              </>
            )}
            {activeTab == "2" && (
              <>
                <h3 className="text-lg text-center py-3 font-semibold text-slate-700">
                  {t("Scholarships-T1")}
                </h3>
                <p className="text-justify text-lg px-5 text-slate-700">
                  {t("Scholarships-P1")}
                </p>
              </>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Index;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
