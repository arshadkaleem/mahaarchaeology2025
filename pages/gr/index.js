import React from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as AllApi from "../../components/allApi/TitleDocApi";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";
import { FaFilePdf } from "react-icons/fa";

const Index = ({ grData }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div>
      <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("GR")} />
      <div className="w-full px-2 py-10 sm:px-0 sm:w-11/12 mx-auto">
        <p className="text-left  py-2 font-semibold">
          {t("GR")}
        </p>
        <div className="flex   ">
          <ul className="list-none">
            {grData != undefined &&
              grData.map((item) => (
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
                    {router.locale === "en" ? item.titleInEnglish : item.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ locale }) {
  const { data } = await AllApi.titleDocAPI("GR");
  const grData = data.actsAndLegislationCollection.items;

  return {
    props: {
      grData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
