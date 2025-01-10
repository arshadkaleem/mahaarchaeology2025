import React from "react";
import SubPageHeader from "../../components/SubPageHeader";
import Navigation from "../../components/home/Navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as AllApi from "../../components/allApi/RtiApi";
import * as DocApi from "../../components/allApi/TitleDocApi";
import RTIDoc from "../../components/RTIDoc";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";

const Index = ({ rtiData, RtiDocs }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div>
      <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("RTI-Title")} />
      <RTIDoc rtiData={rtiData} RtiDocs={RtiDocs} />
    </div>
  );
};

export default Index;

export async function getServerSideProps({ locale }) {
  const { data } = await AllApi.rtiAPI();
  const { data: rtiDoc } = await DocApi.titleDocAPI("rtiDoc");
  const RtiDocs = rtiDoc.actsAndLegislationCollection.items;
  const rtiData = data.rtiContactUsCollection.items;

  return {
    props: {
      rtiData,
      RtiDocs,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
