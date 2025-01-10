import React from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
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
      <SubPageHeader title={t("antiquities")} />
      <div className="bg-gray-100">
        <h2 className="text-xl md:text-3xl font-bold text-center py-32  md:py-40 text-slate-700">
          {t("Page is Under Construction")}
        </h2>
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