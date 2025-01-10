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
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Festivals")} />
        <div className="mt-5">
          <section className="">
            <div className="px-5 py-3 mx-auto">
              <div className=" w-full mx-auto overflow-auto ">
                <table className="table-auto sm:table-fixed w-full  whitespace-no-wrap">
                  <caption class="caption-top text-base sm:text-lg font-semibold p-2">
                    {t("Festival-title")}
                  </caption>
                  <thead>
                    <tr className="border border-gray-500">
                      <th
                        className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100 rounded-tl rounded-bl 
              border-r border-gray-500 "
                      >
                        {t("Festival-No")}
                      </th>
                      <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                        {t("Festival-Names")}
                      </th>
                      <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                        {t("Festival-Anniversary")}
                      </th>
                      <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                        {t("Festival-Date")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" border border-gray-500">
                    {t("Festival-table", { returnObjects: true }).map(
                      (item) => (
                        <tr className="" key={Math.random() * 100}>
                          <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {item.SrNo}
                          </td>
                          <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {item.Names}
                          </td>
                          <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {item.Birth}
                          </td>
                          <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                            {item.Date}
                          </td>
                        </tr>
                      )
                    )}
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

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
