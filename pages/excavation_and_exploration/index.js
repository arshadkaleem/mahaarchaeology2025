import React from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import * as AllApi from "../../components/allApi/ExcavationApi";
import * as AllDoc from "../../components/allApi/TitleDocApi";
import { useRouter } from "next/router";
import { FaFilePdf } from "react-icons/fa";
import HeadMeta from "../../components/HeadMeta";

const Index = ({ docData, excavationData }) => {
  const { t } = useTranslation("common");
  
  const router = useRouter();

  return (
    <div>
       <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Excavation&Exploration")} />
      <div className="w-full px-2 pt-10 sm:px-0 sm:w-11/12 mx-auto">
        <p className="pb-5 text-base text-slate-700">
          {t("Excavation&Exploration-p1")}
        </p>
        <p className="pb-5 text-base text-slate-700">
          {t("Excavation&Exploration-p2")}
        </p>
        <p className=" text-base text-slate-700">
          {t("Excavation&Exploration-p3")}
        </p>
      </div>

      <div className="my-5 w-full px-2  sm:px-0 sm:w-11/12 mx-auto">
        <p className="text-left  py-2 font-semibold">{t("Download")}</p>
        <div className="flex   ">
          <ul className="list-none">
            <li className="pb-2 text-base text-slate-700 hover:font-semibold">
              <a
                href={docData[0].file.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" pb-3 "
              >
                <span className="inline-block text-slate-700">
                  <FaFilePdf />
                </span>{" "}
                {router.locale === "en"
                  ? docData[0].titleInEnglish
                  : docData[0].title}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-5 ">
        <section className="">
          <div className="px-5 py-3 mx-auto">
            <div className="sm:px-5 px-0 w-full sm:w-10/12 lg:w-8/12 mx-auto overflow-auto ">
              <table className="table-auto w-full  whitespace-no-wrap">
                <caption className="caption-top text-base sm:text-lg font-semibold">
                  {t("TableTitle")}
                </caption>
                <thead>
                  <tr className="border text-gray-900 text-left border-gray-500">
                    <th className="py-1  font-semibold text-center text-base bg-gray-100  border-r border-gray-500  ">
                      {t("Excavation&Ex-no")}
                    </th>
                    <th className="py-1  font-semibold text-center text-base bg-gray-100  border-r border-gray-500  ">
                      {t("Excavation&Ex-Site")}
                    </th>
                    <th className="py-1  font-semibold  text-center text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Excavation&Ex-Year's")}
                    </th>
                    <th className="py-1  font-semibold  text-center text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Excavation&Ex-Excavated")}
                    </th>
                    <th className="py-1  font-semibold text-center  text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Excavation&Ex-Reference")}
                    </th>
                    <th className="py-1  font-semibold text-center  text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Excavation&Ex-Downloads")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-left border text-gray-900 border-gray-500">
                  {excavationData != undefined &&
                    excavationData.map((item, key) => (
                      <tr className="" key={Math.random() * 100}>
                        <td className="py-1 text-center text-base border border-gray-500">
                          {key + 1}
                        </td>
                        <td className="py-1 pl-2 text-base border border-gray-500">
                          {router.locale === "en"
                            ? item.siteInEnglish
                            : item.site}
                        </td>
                        <td className="py-1 pl-2 text-base border border-gray-500">
                          {router.locale === "en"
                            ? item.yearInEnglish
                            : item.year}
                        </td>
                        <td className="py-1 pl-2 text-base border border-gray-500">
                          {router.locale === "en"
                            ? item.excavatedByInEnglish
                            : item.excavatedBy}
                        </td>
                        <td className="py-1 pl-2 text-base border border-gray-500">
                          {router.locale === "en"
                            ? item.referenceInEnglish
                            : item.reference}
                        </td>
                        <td className="py-1 px-2 text-sm border border-gray-500">
                          <ul className="list-none">
                            {item.downloadsCollection.items?.map((download) => (
                              <li
                                key={Math.random() * 100}
                                className=" pb-2 text-slate-700 hover:font-semibold"
                              >
                                <a
                                  href={download.url}
                                  target="_blank"
                                  key={Math.random() * 100}
                                  rel="noopener noreferrer"
                                  className="  "
                                >
                                  <span className="inline-block text-slate-700">
                                    <FaFilePdf />
                                  </span>{" "}
                                  {download.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ locale }) {
  const { data } = await AllApi.excavationPageAPI();
  const excavationData = data.excavationAndExplorationCollection.items;
  const { data: DocData } = await AllDoc.titleDocAPI("Excavation");
  const docData = DocData.actsAndLegislationCollection.items;

  return {
    props: {
      docData,
      excavationData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
