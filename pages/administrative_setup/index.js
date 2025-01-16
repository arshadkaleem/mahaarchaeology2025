import React, { useEffect, useState } from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import HeadMeta from "../../components/HeadMeta";
import { FaFilePdf, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import * as AllApi from "../../components/allApi/TitleDocApi";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const Index = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [activeFolderData, setActiveFolderData] = useState([]);
  const [activeFolderTab, setActiveFolderTab] = useState(false);
  const [activesubTab, setActivesubTab] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.query.recruitment) {
      setActiveTab(2);
    }
  }, []);

  const getPDFDoc = async (slug) => {
    const { data } = await AllApi.titleDocAPI(slug);
    // console.log(data, "data");
    const recruitmentDoc = data.actsAndLegislationCollection.items;
    setActiveFolderData(recruitmentDoc);
  };
  // console.log(activeFolderData);
  return (
    <div>
      <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("AdministrativeSetup")} />
      <div className="bg-white ">
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
                {t("AdministrativeSetUpTabs", { returnObjects: true }).map(
                  (item) => (
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
                  )
                )}
              </div>
            )}
          </div>

          {/* desktop */}
          <div className="col-span-3  hidden sm:block ">
            <div className="px-3 py-7 bg-white ml-5 grid grid-cols-1 space-y-2 content-start   border-2 rounded-md rounded-r-none border-r-0">
              {t("AdministrativeSetUpTabs", { returnObjects: true }).map(
                (item) => (
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
                )
              )}
            </div>
          </div>
          <div className="sm:col-span-9 border-2 rounded-r-md bg-white mx-3 sm:mx-0 sm:mr-5 ">
            <div className="pt-2">
              {activeTab == "1" && (
                <div className=" px-3 sm:px-0 py-10 w-full sm:w-11/12 mx-auto">
                  <div className=" ">
                    <p className="text-base text-justify py-3">
                      {t("Administrative-p1")}
                    </p>
                    <p className="text-base text-justify py-3">
                      {t("Administrative-p2")}
                    </p>
                    <img
                      alt="admin_image"
                      src="/home/Administrative-Setup.png"
                      className="h-[1100px] w-[800px]"
                    />
                  </div>
                </div>
              )}
              {activeTab == "2" && (
                <div>
                  <h1 className="text-center md:px-10 px-2 text-base sm:text-lg font-semibold py-3">
                    {" "}
                    {t("Recruitment")}{" "}
                  </h1>
                  <div className="px-5 py-2">
                    <p className="text-left  py-2 font-semibold">
                      {t("helpline-heading")}
                    </p>
                    <p>{t("helpline-desc")}</p>
                    <p>
                      {t("link")}:-{" "}
                      <span>
                        {" "}
                        <a
                          href="https://cgrs.ibps.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" pb-3 "
                        >
                          <span className="inline-block text-slate-700">
                            https://cgrs.ibps.in/
                          </span>{" "}
                        </a>
                      </span>{" "}
                    </p>
                    <p>{t("help-line")}:- 1800 222 366/ 1800 103 4566</p>
                  </div>
                  <div className="px-5 py-2 cursor-pointer">
                    <a
                      href="https://ibpsonline.ibps.in/dambcdjun23/oecla_nov23/login.php?appid=d5db2073747120508c11f020e0ca1da0"
                      target="_blank"
                      legacyBehavior
                      className=""
                      rel="noreferrer"
                    >
                      <p className="text-blue-600 inner-text text-xl font-semibold hover:font-bold">
                        {t("Link-to-Download-Admit-Card")}
                      </p>
                    </a>
                  </div>
                  {/* <div className="px-5 py-2 cursor-pointer">
                    <a
                      href="http://ibpsonline.ibps.in/dambcdjun23/oecla_nov23/login.php?appid=d5db2073747120508c11f020e0ca1da0"
                      target="_blank"
                      legacyBehavior
                      className=""
                      rel="noreferrer"
                    >
                      <p className="text-blue-600 inner-text text-xl font-semibold hover:font-bold">
                        {t("Link-to-Download-Admit-Card-24-2-24")}
                      </p>
                    </a>
                  </div> */}
                  <div className="px-5 py-2 cursor-pointer">
                    <a
                      href="https://ibpsonline.ibps.in/dambcdjun23"
                      legacyBehavior
                      target="_blank"
                      className=""
                      rel="noreferrer"
                    >
                      <p className="text-blue-600 inner-text text-xl font-semibold hover:font-bold">
                        Link for Updating SEBC category for Open Category
                        Candidates.
                      </p>
                    </a>
                  </div>

                  <div className="px-5 ">
                    <a
                      href="https://assets.ctfassets.net/l47hkrce4wip/pooozGymLMcWNdMlBERoj/b240f7d6bed7c2c0bf8952fa4e81fedb/____________________________________.pdf"
                      target="_blank"
                      key={Math.random() * 100}
                      className=" pb-3 "
                      rel="noopener noreferrer"
                    >
                      सहाय्यक (दर्शन‍िका व‍िभाग) न‍िवडयादी
                    </a>
                    <br />

                    <a
                      href="https://assets.ctfassets.net/l47hkrce4wip/14valdNd9fhlmyxsSGpYN7/765854a63a2eaa741967ed8fad69d824/________________________________________________.pdf"
                      target="_blank"
                      key={Math.random() * 100}
                      className=" pb-3 "
                      rel="noopener noreferrer"
                    >
                      सहाय्यक (दर्शन‍िका व‍िभाग) न‍िकाल प्रसिद्धीपत्रक
                    </a>
                    <br />
                    <a
                      href="https://assets.ctfassets.net/l47hkrce4wip/2VT7giQSFkir8XGIgRvsPr/7452120b1d9718199cfa1c198387656a/Assistant__Gazetteer_Department__BSL.pdf"
                      target="_blank"
                      key={Math.random() * 100}
                      className=" pb-3 "
                      rel="noopener noreferrer"
                    >
                      Assistant (Gazetteer Department) BSL
                    </a>
                    <br />
                    <a
                      href="https://assets.ctfassets.net/l47hkrce4wip/2DF8LEfHbl2wms0NMx1vuG/f412cc54ad4564f557acf37dc02a3f56/Provisional_selection_list_against_OBC__EX-Servicemen__of_Assistant_Archaeologist.pdf"
                      target="_blank"
                      key={Math.random() * 100}
                      className=" pb-3 "
                      rel="noopener noreferrer"
                    >
                      Provisional selection list against OBC (EX-Servicemen) of
                      Assistant Archaeologist
                    </a>
                    <br />
                  </div>

                  <div className="px-5 ">
                    <p className="text-left  py-2 font-semibold">
                      {t("Download")}
                    </p>
                    <div className="">
                      {/* <li className="pb-2 text-base text-slate-700 hover:font-semibold">
                        <a
                          href={recruitmentDoc[0].file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" pb-3 "
                        >
                          <span className="inline-block text-slate-700">
                            <FaFilePdf />
                          </span>{" "}
                          {router.locale === "en"
                            ? recruitmentDoc[0].titleInEnglish
                            : recruitmentDoc[0].title}
                        </a>
                      </li> */}
                      {/* {recruitmentDoc != undefined &&
                        recruitmentDoc.map((item) => (
                          <li
                            key={Math.random() * 100}
                            className="pb-2 text-base text-slate-700 hover:font-semibold"
                          >
                            <a
                              href={item.file.url}
                              target="_blank"
                              key={Math.random() * 100}
                              rel="noopener noreferrer"
                              className=" pb-3 "
                            >
                              <span className="inline-block text-slate-700">
                                <FaFilePdf />
                              </span>{" "}
                              {router.locale === "en"
                                ? item.titleInEnglish
                                : item.title}
                            </a>
                          </li>
                        ))} */}
                      {t("recruitment-folder", { returnObjects: true }).map(
                        (item, i) => (
                          <div key={i}>
                            <div className="mb-2">
                              <div
                                className=" bg-[#f5f5f5]  border-[#ddd] border-0 h-10 py-2 cursor-pointer"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setActiveFolderTab(!activeFolderTab);
                                  // if (isActive == title) {
                                  //   setIsActive("");
                                  // }else{
                                  //   setIsActive(title);
                                  // }
                                  setActivesubTab(item.id);
                                  getPDFDoc(item.slug);
                                }}
                              >
                                <div className="flex items-center ">
                                  {" "}
                                  <span className="px-3 ">
                                    {activeFolderTab &&
                                    activesubTab == item.id ? (
                                      <FaMinusCircle
                                        color="#d31145"
                                        className="text-xl"
                                      />
                                    ) : (
                                      <FaPlusCircle
                                        color="#d31145"
                                        className="text-xl"
                                      />
                                    )}{" "}
                                  </span>{" "}
                                  <span className="pt-2">{item.title}</span>
                                </div>
                              </div>
                              {activeFolderTab && activesubTab == item.id ? (
                                <div className="p-2  border-2">
                                  <div className="flex flex-col ">
                                    {activeFolderData.map((item, index) => (
                                      <div
                                        key={Math.random() * 100}
                                        className="pb-2 pl-3 text-base text-slate-700 hover:font-semibold"
                                      >
                                        <a
                                          href={item.file.url}
                                          target="_blank"
                                          key={Math.random() * 100}
                                          rel="noopener noreferrer"
                                          className=" pb-3 "
                                        >
                                          <span className="inline-block text-slate-700">
                                            <FaFilePdf />
                                          </span>{" "}
                                          {router.locale === "en"
                                            ? item.titleInEnglish
                                            : item.title}
                                        </a>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="px-5 py-2 cursor-pointer">
                    <Link
                      href="https://ibpsonline.ibps.in/dambcdjun23/"
                      target="_blank"
                      legacyBehavior
                      className=""
                    >
                      <p className="text-blue-600 inner-text text-xl font-semibold hover:font-bold">
                        {t("Click-to-fill-form")}
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ locale }) {
  // const { data } = await AllApi.titleDocAPI("recruitment");

  // const recruitmentDoc = data.actsAndLegislationCollection.items;

  return {
    props: {
      // recruitmentDoc,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
