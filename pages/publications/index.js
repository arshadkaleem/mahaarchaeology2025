import React from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as AllApi from "../../components/allApi/CommonPublicationApi";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";

const Index = ({
  GuidebookData,
  ArcheolgyData,
  ExcavationData,
  OtherDataAdd,
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div>
       <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route}/>
      <SubPageHeader title={t("Publication")} />
      <div className="w-full px-3 py-10 sm:px-0 sm:w-11/12 mx-auto">
        <p className="text-lg text-justify text-slate-700">{t("Publication-p1")}</p>
      </div>

      {/* Publication-Guidbook */}

      <div className="mb-3">
        <section className="">
          <div className="px-5 py-3 mx-auto">
            <div className=" w-full mx-auto overflow-auto ">
              <table className="table-auto sm:table-fixed w-full  whitespace-no-wrap">
                <caption class="caption-top text-base sm:text-lg font-semibold">
                  {t("Publication-Guidbook")}
                </caption>
                <thead>
                  <tr className="border border-gray-500">
                    <th
                      className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100 rounded-tl rounded-bl 
              border-r border-gray-500 "
                    >
                      {t("Publication-Name")}
                    </th>
                    <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                      {t("Publication-Author")}
                    </th>
                    <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                      {t("Publication-Language")}
                    </th>
                    <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                      {t("Publication-Year")}
                    </th>
                  </tr>
                </thead>
                <tbody className=" border border-gray-500">
                  {GuidebookData != undefined &&
                    GuidebookData.map((item) => (
                      <tr className="" key={Math.random() * 100}>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.nameInEnglish
                            : item.name}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.authorInEnglish
                            : item.author}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.languageInEnglish
                            : item.language}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {item.year}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Publication-Archaeology */}

      <div className="mb-3">
        <section className="">
          <div className="px-5 py-3 mx-auto">
            <div className=" w-full mx-auto overflow-auto ">
              <table className="table-auto sm:table-fixed w-full  whitespace-no-wrap">
                <caption class="caption-top text-base sm:text-lg font-semibold">
                  {t("Publication-Archaeology")}
                </caption>
                <thead>
                  <tr className="border border-gray-500">
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Publication-Name")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                      {t("Publication-Author")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                      {t("Publication-Language")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                      {t("Publication-Year")}
                    </th>
                  </tr>
                </thead>
                <tbody className=" border border-gray-500">
                  {ArcheolgyData != undefined &&
                    ArcheolgyData.map((item) => (
                      <tr className="" key={Math.random() * 100}>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.nameInEnglish
                            : item.name}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.authorInEnglish
                            : item.author}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.languageInEnglish
                            : item.language}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {item.year}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      {/* Publication Excavation Report */}

      <div className="mb-3">
        <section className="">
          <div className="px-5 py-3 mx-auto">
            <div className=" w-full mx-auto overflow-auto ">
              <table className="table-auto sm:table-fixed w-full  whitespace-no-wrap">
                <caption class="caption-top text-base sm:text-lg font-semibold">
                  {t("Publication-Excavation")}
                </caption>
                <thead>
                  <tr className="border border-gray-500">
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500  ">
                      {t("Publication-Name")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Publication-Author")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Publication-Language")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Publication-Year")}
                    </th>
                  </tr>
                </thead>
                <tbody className=" border border-gray-500">
                  {ExcavationData != undefined &&
                    ExcavationData.map((item) => (
                      <tr className="" key={Math.random() * 100}>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.nameInEnglish
                            : item.name}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.authorInEnglish
                            : item.author}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.languageInEnglish
                            : item.language}
                        </td>
                        <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {item.year}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* Publication-Other */}
      <div className="mb-3">
        <section className="">
          <div className="px-5 py-3 mx-auto">
            <div className=" w-full mx-auto overflow-auto ">
              <table className="table-auto sm:table-fixed w-full  whitespace-no-wrap">
                <caption class="caption-top text-base sm:text-lg font-semibold">
                  {t("Publication-Other")}
                </caption>
                <thead>
                  <tr className="border border-gray-500">
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500  ">
                      {t("Publication-Name")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Publication-Author")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Publication-Language")}
                    </th>
                    <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                      {t("Publication-Year")}
                    </th>
                  </tr>
                </thead>
                <tbody className=" border border-gray-500">
                  {OtherDataAdd != undefined &&
                    OtherDataAdd.map((item) => (
                      <tr className="" key={Math.random() * 100}>
                        <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.nameInEnglish
                            : item.name}
                        </td>
                        <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.authorInEnglish
                            : item.author}
                        </td>
                        <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {router.locale === "en"
                            ? item.languageInEnglish
                            : item.language}
                        </td>
                        <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                          {item.year}
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
  const { data } = await AllApi.commonPublicationAPI("Guidebook");
  const { data: ArchData } = await AllApi.commonPublicationAPI("Archaeology");
  const { data: ExcavaData } = await AllApi.commonPublicationAPI("Excavation");
  const { data: OtherData } = await AllApi.commonPublicationAPI("Other");

  const GuidebookData = data.publicationGuidebookCollection.items;
  const ArcheolgyData = ArchData.publicationGuidebookCollection.items;
  const ExcavationData = ExcavaData.publicationGuidebookCollection.items;
  const OtherDataAdd = OtherData.publicationGuidebookCollection.items;

  return {
    props: {
      GuidebookData,
      ArcheolgyData,
      ExcavationData,
      OtherDataAdd,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}