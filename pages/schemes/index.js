import React, { useState } from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FaFilePdf } from "react-icons/fa";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import * as AllApi from "../../components/allApi/TitleDocApi";
import HeadMeta from "../../components/HeadMeta";

const Index = ({ gadSanvardhan, adoptMonument }) => {
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
      <SubPageHeader title={t("Program")} />

      <div className="grid sm:grid-cols-12 grid-cols-1 relative py-5">
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
              {t("SchemeTabs", { returnObjects: true }).map((item) => (
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
            {t("SchemeTabs", { returnObjects: true }).map((item) => (
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
              <div>
                <h1 className="text-center md:px-10 px-2 text-base sm:text-lg font-semibold py-3">
                  {" "}
                  {t("Gad-Sanvardhan-Title")}{" "}
                </h1>
                <div className="px-5">
                  <p className="text-justify text-base sm:text-lg pb-3">
                    {" "}
                    {t("Gad-Sanvardhan-p1")}
                  </p>
                  <p className="text-justify text-base sm:text-lg pb-3">
                    {" "}
                    {t("Gad-Sanvardhan-p2")}
                  </p>
                  <p className="text-justify text-base sm:text-lg pb-3">
                    {" "}
                    {t("Gad-Sanvardhan-p3")}
                  </p>
                  <p className="text-justify text-base sm:text-lg pb-3">
                    {" "}
                    {t("Gad-Sanvardhan-p4")}
                  </p>
                </div>

                <div>
                  <h3 className="text-left px-5 text-base sm:text-lg font-semibold py-3">
                    {t("gad-stage1")}
                  </h3>
                  <div className=" mx-auto overflow-auto px-5">
                    <table className="table-auto  w-full  whitespace-no-wrap">
                      <thead>
                        <tr className="border border-gray-500">
                          <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                            {t("Division")}
                          </th>
                          <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                            {t("Sr-no")}
                          </th>
                          <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                            {t("Name-of-Monument")}
                          </th>
                        </tr>
                      </thead>
                      <tbody className=" border border-gray-500 text-center">
                        <tr className="border border-gray-500 ">
                          <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {t("Divi-Ratnagiri")}
                          </td>
                          <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                            1
                          </td>
                          <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {t("stage-1-1")}
                          </td>
                        </tr>
                        <tr className="border border-gray-500 ">
                          <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {t("Divi-Pune")}
                          </td>
                          <td className=" border border-gray-500 ">
                            2<br />
                            3<br />
                          </td>
                          <td className=" border border-gray-500">
                            {t("stage-1-2")}
                            <br />
                            {t("stage-1-3")}
                            <br />
                          </td>
                        </tr>
                        <tr className="border border-gray-500 ">
                          <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {t("Divi-Nashik")}
                          </td>
                          <td className=" border border-gray-500 ">
                            4<br />
                            5<br />
                          </td>
                          <td className=" border border-gray-500">
                            {t("stage-1-4")}
                            <br />
                            {t("stage-1-5")}
                            <br />
                          </td>
                        </tr>
                        <tr className="border border-gray-500 ">
                          <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {t("Divi-Nagpur")}
                          </td>
                          <td className=" border border-gray-500 ">
                            6<br />
                            7<br />
                            8<br />
                          </td>
                          <td className=" border border-gray-500">
                            {t("stage-1-6")}
                            <br />
                            {t("stage-1-7")}
                            <br />
                            {t("stage-1-8")}
                            <br />
                          </td>
                        </tr>
                        <tr className="border border-gray-500 ">
                          <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {t("Divi-Aurangabad")}
                          </td>
                          <td className=" border border-gray-500 ">
                            9<br />
                            10
                            <br />
                            11
                            <br />
                          </td>
                          <td className=" border border-gray-500">
                            {t("stage-1-9")}
                            <br />
                            {t("stage-1-10")}
                            <br />
                            {t("stage-1-11")}
                            <br />
                          </td>
                        </tr>
                        <tr className="border border-gray-500 ">
                          <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {t("Divi-Nanded")}
                          </td>
                          <td className=" border border-gray-500 ">
                            12
                            <br />
                            13
                            <br />
                            14
                            <br />
                          </td>
                          <td className=" border border-gray-500">
                            {t("stage-1-12")}
                            <br />
                            {t("stage-1-13")}
                            <br />
                            {t("stage-1-14")}
                            <br />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-left px-5 text-base sm:text-lg font-semibold py-3">
                    {" "}
                    {t("gad-stage2")}{" "}
                  </h3>
                  <div className=" mx-auto overflow-auto px-5">
                    <section className="">
                      <table className="table-auto  w-full  whitespace-no-wrap">
                        <thead>
                          <tr className="border border-gray-500">
                            <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                              {t("Division")}
                            </th>
                            <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                              {t("Sr-no")}
                            </th>
                            <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                              {t("Name-of-Monument")}
                            </th>
                          </tr>
                        </thead>
                        <tbody className=" border border-gray-500 text-center">
                          <tr className="border border-gray-500 ">
                            <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                              {t("Divi-Ratnagiri")}
                            </td>
                            <td className=" border border-gray-500 ">
                              1<br />
                              2<br />
                              3<br />
                              4<br />
                              5<br />
                            </td>
                            <td className=" border border-gray-500">
                              {t("stage-2-1")}
                              <br />
                              {t("stage-2-2")}
                              <br />
                              {t("stage-2-3")}
                              <br />
                              {t("stage-2-4")}
                              <br />
                              {t("stage-2-5")}
                              <br />
                            </td>
                          </tr>
                          <tr className="border border-gray-500 ">
                            <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                              {t("Divi-Pune")}
                            </td>
                            <td className=" border border-gray-500 ">
                              6<br />
                              7<br />
                              8<br />
                            </td>
                            <td className=" border border-gray-500">
                              {t("stage-2-6")}
                              <br />
                              {t("stage-2-7")}
                              <br />
                              {t("stage-2-8")}
                              <br />
                            </td>
                          </tr>
                          <tr className="border border-gray-500 ">
                            <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                              {t("Divi-Nashik")}
                            </td>
                            <td className=" border border-gray-500 ">
                              9<br />
                              10
                              <br />
                              11
                              <br />
                              12
                              <br />
                              13
                              <br />
                            </td>
                            <td className=" border border-gray-500">
                              {t("stage-2-9")}
                              <br />
                              {t("stage-2-10")}
                              <br />
                              {t("stage-2-11")}
                              <br />
                              {t("stage-2-12")}
                              <br />
                              {t("stage-2-13")}
                              <br />
                            </td>
                          </tr>
                          <tr className="border border-gray-500 ">
                            <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                              {t("Divi-Aurangabad")}
                            </td>
                            <td className=" border border-gray-500 ">14</td>
                            <td className=" border border-gray-500">
                              {t("stage-2-14")}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </section>
                  </div>
                </div>

                <div>
                  <div className="px-5">
                    <div className=" py-10">
                      <p className="text-left  py-2 font-semibold">
                        {t("Download")}
                      </p>
                      <div className="flex   ">
                        <ul className="list-none">
                          {gadSanvardhan != undefined &&
                            gadSanvardhan.map((item) => (
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
                  </div>
                </div>
              </div>
            )}
            {activeTab == "2" && (
              <>
                <div>
                  <h1 className="text-center md:px-10 px-2 text-base sm:text-lg font-semibold py-3">
                    {" "}
                    {t("Adopt")}{" "}
                  </h1>
                  <div className="px-5">
                    <p className="text-justify text-base sm:text-lg pb-3">
                      {" "}
                      {t("Adopt-p1")}
                    </p>
                    <p className="text-justify text-base sm:text-lg pb-3">
                      {" "}
                      {t("Adopt-p2")}
                    </p>
                    <p className="text-justify text-base sm:text-lg pb-3">
                      {" "}
                      {t("Adopt-p3")}
                    </p>
                    <p className="text-justify text-base sm:text-lg pb-3">
                      {" "}
                      {t("Adopt-p4")}
                    </p>
                  </div>

                  <div>
                    <div className="px-5">
                      <div className=" py-10">
                        <p className="text-left  py-2 font-semibold">
                          {t("Download")}
                        </p>
                        <div className="flex   ">
                          <ul className="list-none">
                            {adoptMonument != undefined &&
                              adoptMonument.map((item) => (
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
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ locale }) {
  const { data } = await AllApi.titleDocAPI("schemes-gadSanvardhan");
  const gadSanvardhan = data.actsAndLegislationCollection.items;

  const { data: adoptMonumentData } = await AllApi.titleDocAPI(
    "schemes-adoptMonument"
  );
  const adoptMonument = adoptMonumentData.actsAndLegislationCollection.items;

  return {
    props: {
      gadSanvardhan,
      adoptMonument,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
