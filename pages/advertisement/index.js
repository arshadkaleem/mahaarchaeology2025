import React from "react";
import SubPageHeader from "../../components/SubPageHeader";
import Navigation from "../../components/home/Navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";
import Link from "next/link";

const Index = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div>
      <HeadMeta
        title="Advertisement - The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Advertisement")} />
      <div className="w-full px-3 py-10 sm:px-0 sm:w-11/12 mx-auto text-justify">
        <a href="https://assets.ctfassets.net/l47hkrce4wip/3OMRltYlK8rr6d1DwqCOQ/a733f2c9583adcb20401dd9459689af9/%C3%A0__%C3%A0__%C3%A0_%C2%B5%C3%A0__%C3%A0__%C3%A0__%C3%A0_%C2%B5%C3%A0__%C3%A0__%C3%A0__%C3%A0___%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0___%C3%A0_%C2%B5%C3%A0__%C3%A0_%C2%B5%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0___%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0___%C3%A0__.pdf" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 underline">
            Department Requirement Advertisement
          </a>
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
