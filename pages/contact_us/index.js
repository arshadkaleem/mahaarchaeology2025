import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import ArchaeologyContactUs from "../../components/contactUs/ArchaeologyContactUs";
import MuseumContactUs from "../../components/contactUs/MuseumContactUs";
import * as AllApi from "../../components/allApi/ContactUsApi";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";


const Index = ({ archaeologyData, museumData }) => {
  const [openTab, setOpenTab] = useState(1);
  const { t } = useTranslation("common");
  const router = useRouter();
  

  return (
    <div>
       <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route}/>
      <SubPageHeader title={t("ContactUs")} />
      <div className="w-full px-2 py-10 sm:px-0 sm:w-11/12 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "border border-slate-700 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-slate-700"
                      : "text-slate-700 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {t("Archaeology")}
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "border border-slate-700 text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-slate-700"
                      : "text-slate-700 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  {t("MuseumsContactUs")}
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <ArchaeologyContactUs archaeologyData={archaeologyData} />
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <MuseumContactUs museumData={museumData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps({ locale }) {
  const { data } = await AllApi.contactPageAPI();
  const museumData = data.museumsContactUsCollection.items;
  const archaeologyData = data.archaeologyContactUsCollection.items;

  return {
    props: {
      museumData,
      archaeologyData,
      ...await serverSideTranslations(locale, ['common']),
    },
  };
}
