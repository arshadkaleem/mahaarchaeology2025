import React from "react";
import SubPageHeader from "../../components/SubPageHeader";
import Navigation from "../../components/home/Navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";

const Index = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div>
       <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route}/>
      <SubPageHeader title={t("AboutUs")} />
      <div className="w-full px-3 py-10 sm:px-0 sm:w-11/12 mx-auto text-justify">
        <p className="pb-5 text-lg text-slate-700">{t("AboutUsData-p1")}</p>
        <p className="pb-5 text-lg text-slate-700">{t("AboutUsData-p2")}</p>
        <p className="pb-5 text-lg text-slate-700">{t("AboutUsData-p3")}</p>
        <p className="pb-5 text-lg text-slate-700">{t("AboutUsData-p4")}</p>
        <p className="pb-5 text-lg text-slate-700">{t("AboutUsData-p5")}</p>
      </div>
    </div>
  );
};

export default Index;


export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})