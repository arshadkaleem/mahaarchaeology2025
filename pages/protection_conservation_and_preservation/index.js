import React, { useState } from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as AllApi from "../../components/allApi/conservationPreservationApi";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";

const Index = ({ conservationData, conservationTableData }) => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showModalCount, setShowModalCount] = useState(0);

  const uniqueDistrict = [
    ...new Set(
      conservationTableData.map((item) =>
        router.locale === "en" ? item.districtEnglish : item.district
      )
    ),
  ];

  return (
    <div>
       <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Protection")} />
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
              {t("ProtectionTabs", { returnObjects: true }).map((item) => (
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
            {t("ProtectionTabs", { returnObjects: true }).map((item) => (
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
              <div className="bg-white sm:px-0 px-3 ">
                <div className="py-3 px-3">
                  <div className=" ">
                    {t("Protection-para", { returnObjects: true }).map(
                      (item) => (
                        <p
                          key={Math.random() * 100}
                          className="text-justify text-base py-2 "
                        >
                          {item.title}
                        </p>
                      )
                    )}
                  </div>
                  <div className="py-5">
                    <h5 className="font-semibold">{t("Protection-steps")}</h5>
                    <ul className="list-decimal list-inside">
                      {t("Prot-steps", { returnObjects: true }).map((item) => (
                        <li
                          key={Math.random() * 100}
                          className="text-justify text-base py-2 "
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="py-5">
                    <h5 className="font-semibold">{t("Prot-stepFooter")}</h5>
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg">{t("seeImgs")}</h2>
                    {conservationData != undefined &&
                      conservationData.map((item) => (
                        <div key={Math.random() * 100} className="m-2">
                          <h5
                            // onClick={() => }
                            onClick={(e) => {
                              e.preventDefault();
                              setShowModal(true);
                              setShowModalCount(item.slug);
                            }}
                            className="inline cursor-pointer text-base sm:text-lg text-blue-500 font-medium"
                          >
                            {router.locale === "en"
                              ? item.titleInEnglish
                              : item.title}
                          </h5>
                          <div>
                            {showModal && showModalCount == item.slug ? (
                              <>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                    <div className="w-full p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800 mt-8">
                                      <div className="w-full h-full text-center">
                                        <div className="flex flex-col  justify-between h-full">
                                          <div className="flex">
                                            <div className="h-1/2 w-1/2 m-1">
                                              <img
                                                alt="img"
                                                src={item.before.url}
                                                className="w-full h-full border-black border"
                                              />
                                              <h6>
                                                {router.locale === "en"
                                                  ? item.before.titleInEnglish
                                                  : item.before.title}
                                              </h6>
                                            </div>
                                            <div className="h-1/2 w-1/2 m-1">
                                              <img
                                                alt="img"
                                                src={item.after.url}
                                                className="w-full h-full border-black border"
                                              />
                                              <h6>
                                                {router.locale === "en"
                                                  ? item.after.titleInEnglish
                                                  : item.after.title}
                                              </h6>
                                            </div>
                                          </div>
                                          <div className="flex items-center justify-center w-full mt-8">
                                            <button
                                              onClick={() =>
                                                setShowModal(false)
                                              }
                                              type="button"
                                              className="py-2 px-4 w-2/6  bg-white hover:bg-gray-100 focus:ring-black focus:ring-offset-indigo-200 text-black transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg border border-black"
                                            >
                                              Close
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                              </>
                            ) : null}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab == "2" && (
              <>
                <div>
                  <div className="px-5 py-3 mx-auto">
                    <div className="w-full mx-auto overflow-auto ">
                      {conservationTableData.length > 0 && (
                        <table className="table-auto  w-full  whitespace-no-wrap">
                          <thead>
                            <tr className="border border-gray-500">
                              <th
                                className=" py-1  font-semibold text-center text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl 
              border-r border-gray-500 "
                              >
                                {t("SrNo")}
                              </th>
                              <th
                                className=" py-1  font-semibold text-center text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl 
              border-r border-gray-500 "
                              >
                                {t("Name-of-Monuments")}
                              </th>
                              <th
                                className=" py-1  font-semibold text-center text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl 
              border-r border-gray-500 "
                              >
                                {t("dateOfSubmission")}
                              </th>
                              <th className=" py-1  font-semibold text-center text-gray-900 text-sm bg-gray-100  border-r border-gray-500">
                                {t("dateOfAdministrative")}
                              </th>
                              <th className=" py-1  font-semibold text-center text-gray-900 text-sm bg-gray-100  border-r border-gray-500">
                                {t("Commencement")}
                              </th>
                              <th className=" py-1  font-semibold text-center text-gray-900 text-sm bg-gray-100  border-r border-gray-500">
                                {t("Completion")}
                              </th>
                            </tr>
                          </thead>
                          <tbody className=" border border-gray-500 ">
                            {uniqueDistrict.map((district) => (
                              <>
                                <th className="py-1 underline" colSpan="8">
                                  {district == "Mumbai"
                                    ? "Ratnagiri Divivion"
                                    : district == "मुंबई"
                                    ? "रत्नागिरी विभाग"
                                    : null}
                                  {district == "Pune"
                                    ? "Pune Divivion"
                                    : district == "पुणे"
                                    ? "पुणे विभाग"
                                    : null}
                                </th>
                                <tr key={Math.random() * 100}>
                                  <th className="py-1" colSpan="8">
                                    {t("district")} {district}
                                  </th>
                                </tr>

                                {conservationTableData.map((item) => {
                                  if (
                                    // item.divisionEnglish === division && item.districtEnglish === district ||
                                    // item.division === division && item.district === district
                                    item.districtEnglish === district ||
                                    item.district === district
                                  ) {
                                    return (
                                      <tr key={item.id}>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.id
                                            : item.id}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.nameEnglish
                                            : item.name}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {item.dateOfSubmission}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {item.dateOfAdministrative}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {item.commencementWork}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {item.completionWork}
                                        </td>
                                      </tr>
                                    );
                                  }
                                  return null;
                                })}
                              </>
                            ))}
                          </tbody>
                        </table>
                      )}
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
  const { data } = await AllApi.conservationPreservation();

  const { data: tableData } = await AllApi.protectionTable();

  const conservationData = data.conservationAndPreservationCollection.items;

  const conservationTableData =
    tableData.conservationAndPreservationTableCollection.items;

  return {
    props: {
      conservationData,
      conservationTableData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
