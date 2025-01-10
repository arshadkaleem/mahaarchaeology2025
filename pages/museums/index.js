import React, { useState } from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as AllApi from "../../components/allApi/MuseumsApi";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import * as DocApi from "../../components/allApi/TitleDocApi";
import { FaFilePdf } from "react-icons/fa";
import HeadMeta from "../../components/HeadMeta";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p style={{ padding: 5, textAlign: "justify" }}>{children}</p>
    ),
  },
  renderText: (text) => text.replace("!", "?"),
};
const Index = ({ museumData, pdfData }) => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("MuseumsContactUs")} />
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
              {t("MuseumTabs", { returnObjects: true }).map((item) => (
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
            {t("MuseumTabs", { returnObjects: true }).map((item) => (
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
            {museumData != undefined &&
              museumData.map((item) =>
                item.id == activeTab ? (
                  <div key={Math.random() * 100}>
                    <h3 className="text-center md:px-10 px-2 text-base sm:text-lg font-semibold py-3">
                      {router.locale === "en"
                        ? item.titleInEnglish
                        : item.title}
                    </h3>
                    <img
                      alt="img"
                      src={item.img.url}
                      className="h-1/3 w-1/2 mx-auto border-black border"
                    />
                    <div className="px-2 my-5">
                      <table className="table-auto   whitespace-no-wrap">
                        <tbody className=" border border-gray-500 ">
                          <tr>
                            <td
                              colSpan="2"
                              className="py-1  px-1 text-left  text-gray-900 text-base border border-gray-500"
                            >
                              <span className="font-semibold">
                                {t("Opening-hours")}
                              </span>
                              {t("Timing")}
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan="2"
                              className="py-1  px-1 text-left  text-gray-900 text-base border border-gray-500"
                            >
                              <span className="font-semibold">
                                {t("Closed-on")}
                              </span>
                              {t("Day")}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 px-1  text-left text-gray-900 text-base border border-gray-500">
                              {t("School-Student-title")}
                            </td>
                            <td className="py-1 px-1 text-left text-gray-900 text-base border border-gray-500">
                              {t("School-Student-rate")}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 px-1  text-left text-gray-900 text-base border border-gray-500">
                              {t("College-Student-title")}
                            </td>
                            <td className="py-1 px-1 text-left text-gray-900 text-base border border-gray-500">
                              {t("College-Student-rate")}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 px-1  text-left text-gray-900 text-base border border-gray-500">
                              {t("Adult-above15-title")}
                            </td>
                            <td className="py-1 px-1 text-left text-gray-900 text-base border border-gray-500">
                              {t("Adult-above15-rate")}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 px-1  text-left text-gray-900 text-base border border-gray-500">
                              {t("Foreigner-title")}
                            </td>
                            <td className="py-1 px-1 text-left text-gray-900 text-base border border-gray-500">
                              {t("Foreigner-rate")}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="px-2">
                      {documentToReactComponents(
                        router.locale === "en"
                          ? item.paragraphInEnglish.json
                          : item.paragraph.json,

                        options
                      )}
                    </div>
                  </div>
                ) : null
              )}
          </div>
          {activeTab == 0 && (
            <div className="pt-2">
              <p className="text-left md:px-10 px-2 py-2 font-semibold">
                {t("Download")}
              </p>
              <div className="flex md:px-10 px-2  ">
                <ul className="list-none">
                  {pdfData != undefined &&
                    pdfData.map((item) => (
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
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ locale }) {
  const { data } = await AllApi.museumPageAPI();

  const museumData = data.museumCollection.items;
  const { data: museumPdf } = await DocApi.titleDocAPI("museumsPdf");

  const pdfData = museumPdf.actsAndLegislationCollection.items;

  return {
    props: {
      museumData,
      pdfData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
