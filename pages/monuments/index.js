import React, { useEffect, useState } from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BsChevronDown } from "react-icons/bs";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import CommonDistrict from "../../components/monumentsDivision/CommonDistrict";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";

const Index = () => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState();
  const [openTitle, setOpenTitle] = useState("");
  const [openName, setOpenName] = useState("");
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [getDistrictData, setDistrictData] = useState([]);
  const [open, setOpen] = useState(false);
  const [getNewData, setNewData] = useState(false);
  const [getDivision, setDivision] = useState([]);
  const [getMeta, setMeta] = useState(
    "The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
  );
  const router = useRouter();

  const districtData = async (distName, divi) => {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "post", // GraphQL always uses POST requests!
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
          "Content-Type": "application/json",
        },
        // send the query we wrote in GraphiQL as a string
        body: JSON.stringify({
          // query as payload...all requests start with "query: ", so we'll stringify that for convenience
          query: `
                query {
                  	${divi}DivisionCollection(where: { district:"${distName}" }){
      items{
        title
        titleEnglish:title(locale:"en")
        district
        paragraph{
          json
        }
        paragraphInEnglish: paragraph(locale:"en"){
          json
      }
        imgCollection{
          items{
            url
            width
            height
          }
        }

      }
    }
                }
            `,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        const keyNames = Object.keys(json.data);
        const dynamicKey = keyNames[0];
        const items = json.data[dynamicKey].items;
        return items;
      })
      .catch((error) => {
        return error;
      });
  };

  const divisionData = async (divi) => {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "post", // GraphQL always uses POST requests!
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
          "Content-Type": "application/json",
        },
        // send the query we wrote in GraphiQL as a string
        body: JSON.stringify({
          // query as payload...all requests start with "query: ", so we'll stringify that for convenience
          query: `
                query {
                  listOfMonumentsCollection(where: {division:"${divi}"},order:id_ASC){
                    items{
                      nameOfMonument
                      nameOfMonumentEnglish:nameOfMonument(locale:"en")
                      place
                      placeInEnglish:place(locale:"en")
                      taluka
                      talukaInEnglish:taluka(locale:"en")
                      district
                      districtInEnglish:district(locale:"en")
                      notificationStatus
                      notificationStatusInEnglish:notificationStatus(locale:"en")
                      notification
                      notificationInEnglish:notification(locale:"en")
                      monumentType
                      monumentTypeInEnglish:monumentType(locale:"en")
                      slug
                      id
                      division
                      divisionInEnglish:division(locale:"en")
                    }
                     }
                }
            `,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setDivision(json.data.listOfMonumentsCollection.items);
      })
      .catch((error) => {
        return error;
      });
  };

  const districtApiFunction = async (Distname, Divi) => {
    const res = await districtData(Distname, Divi);
    setDistrictData(res);
  };
  const uniqueDistricts = [
    ...new Set(
      getDivision.map((item) =>
        router.locale === "en" ? item.districtInEnglish : item.district
      )
    ),
  ];

  useEffect(() => {
    if (router.query.divi == "mumbai") {
      districtApiFunction("mumbaiDistrict", "ratnagiri");
      setNewData(true);
      divisionData("ratnagiri");
    }
  }, []);

  return (
    <div>
      <HeadMeta
        title={getMeta}
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Monuments")} />
      <div className="grid sm:grid-cols-12 grid-cols-1 relative py-10 ">
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
            <div className="p-2 absolute top-10 w-11/12 z-40 bg-[#eee] grid grid-cols-1 divide-y-2 space-y-1 content-start  border-l-2 rounded-l-md">
              {t("MonumentsSitesTabs", { returnObjects: true }).map((item) => (
                <div key={Math.random() * 100} className="">
                  <div
                    className={`border-2 p-2 text-left border-gray-100 rounded-md w-11/12 focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white
                    flex justify-between items-center
                ${
                  item.id == activeTab
                    ? "bg-slate-800 text-white focus:border-slate-700 "
                    : "bg-white text-slate-700"
                }`}
                  >
                    {" "}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(item.id);
                        setMeta(item.title);
                        setDivision([]);
                        divisionData(item.divi);
                        setOpen(false);
                        setOpenName(item.id);
                      }}
                    >
                      {item.title}
                    </button>
                    {item.submenu && (
                      <BsChevronDown
                        className={`${
                          item.id == activeTab && subMenuOpen && "rotate-180"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(item.id);
                          setSubMenuOpen(!subMenuOpen);
                        }}
                      />
                    )}
                  </div>
                  {item.id == activeTab && subMenuOpen && (
                    <ul>
                      {item.subMenu.map((subMenuItem, index) => (
                        <li
                          key={Math.random() * 100}
                          className="hover:bg-slate-700 font-semibold px-3 py-1 cursor-pointer rounded-md hover:text-white hover:focus:border-slate-700 focus:bg-slate-700 focus:text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenTitle(subMenuItem.title);
                            setMeta(subMenuItem.title);
                            setOpenName(undefined);
                            setDistrictData();
                            districtApiFunction(
                              subMenuItem.name,
                              subMenuItem.divi
                            );
                            setOpen(false);
                          }}
                        >
                          {subMenuItem.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* desktop left side Division tabs*/}
        <div className="col-span-3 overflow-auto border-2 rounded-md rounded-r-none border-r-0 h-[500px] sm:ml-5  hidden sm:block ">
          <div className="px-3 py-7 bg-white ml-5 grid grid-cols-1 space-y-2 content-start   ">
            {t("MonumentsSitesTabs", { returnObjects: true }).map((item) => (
              <>
                <button
                  key={Math.random() * 100}
                  className={`border-2 p-2 text-left flex justify-between items-center bg-[#eee] font-bold  border-gray-100 rounded-md w-full focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white
                  ${
                    item.id == activeTab
                      ? "bg-slate-700  text-white focus:border-slate-700 "
                      : "bg-[#eee] text-black"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                    setOpenName(item.id);
                    setSubMenuOpen(!subMenuOpen);
                    setDivision([]);
                    divisionData(item.divi);
                    setMeta(item.title);
                    setNewData(false);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <span>{item.title}</span>

                  {item.submenu && (
                    <BsChevronDown
                      className={`${
                        item.id == activeTab && subMenuOpen && "rotate-180"
                      }`}
                      // onClick={() => setSubMenuOpen(!subMenuOpen)}
                    />
                  )}
                </button>
                {item.id == activeTab && subMenuOpen && (
                  <ul>
                    {item.subMenu.map((subMenuItem, index) => (
                      <li
                        key={Math.random() * 100}
                        className="hover:bg-slate-500 font-semibold px-3 py-1 cursor-pointer rounded-md hover:text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenName(undefined);
                          setOpenTitle(subMenuItem.title);
                          setMeta(subMenuItem.title);
                          setDistrictData();
                          districtApiFunction(
                            subMenuItem.name,
                            subMenuItem.divi
                          );
                        }}
                      >
                        {subMenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </div>
        </div>

        {/* desktop right side Division Info*/}

        <div className="sm:col-span-9 overflow-auto  h-[500px] border-2 rounded-r-md bg-white mx-3 sm:mx-0 sm:mr-5 ">
          {getNewData && getDistrictData.length > 0 ? (
            // For QR Code
            <div className="pt-2">
              <CommonDistrict
                allDistrictData={getDistrictData}
                openTitle={
                  router.locale === "en" ? "District Mumbai" : "जिल्हा मुंबई"
                }
                isParams={true}
              />
            </div>
          ) : (
            <div className="pt-2">
              {/* basic Info of Monument & sites */}
              {openName == 0 && (
                <>
                  <div className="w-full px-2 py-10 sm:px-0 sm:w-11/12 mx-auto">
                    <p className="pb-5 text-lg text-slate-700">
                      {t("Monuments-p1")}
                    </p>
                    <p className="pb-5 text-lg text-slate-700">
                      {t("Monuments-p2")}
                    </p>
                    <h3 className="pb-5 font-semibold text-lg text-slate-700">
                      {t("Monuments-h1")}
                    </h3>
                    <h3 className="pb-5 font-semibold text-lg text-slate-700">
                      {t("Monuments-h2")}
                    </h3>
                    <h3 className="pb-5 font-semibold text-lg text-slate-700">
                      {t("Monuments-h3")}
                    </h3>
                    <h3 className="pb-5 font-semibold text-lg text-slate-700">
                      {t("Monuments-h4")}
                    </h3>
                    <p className="pb-5 text-lg text-slate-700">
                      {t("Monuments-p3")}
                    </p>
                    <p className="pb-5 text-lg text-slate-700">
                      {t("Monuments-p4")}
                    </p>
                    <h3 className="pb-5 font-semibold text-lg text-slate-700">
                      {t("Monuments-h5")}
                    </h3>
                    <p className="pb-1 text-lg text-slate-700">
                      {t("Monuments-p5")}
                    </p>
                  </div>
                </>
              )}
              {/* // Particular district monuments Info*/}
              {getDistrictData && openName == undefined && (
                <CommonDistrict
                  allDistrictData={getDistrictData}
                  openTitle={openTitle}
                  isParams={false}
                />
              )}
              {openName == activeTab && (
                // List of monuments of Division
                <>
                  <div className="px-5 py-3 mx-auto">
                    <div className="">
                      {t("MonumentsSitesTabs", { returnObjects: true }).map(
                        (item, index) => (
                          <div key={Math.random() * 100}>
                            {item.id == activeTab ? (
                              <h1 className="text-center md:px-10 px-2 text-base sm:text-xl font-semibold pb-2">
                                {" "}
                                {item.TableTitle}{" "}
                              </h1>
                            ) : null}
                          </div>
                        )
                      )}
                    </div>
                    <div className="w-full mx-auto overflow-auto ">
                      {getDivision.length > 0 && (
                        <table className="table-auto  w-full  whitespace-no-wrap">
                          <thead>
                            <tr className="border border-gray-500">
                              <th
                                className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100 rounded-tl rounded-bl 
              border-r border-gray-500 "
                              >
                                {t("SrNo")}
                              </th>
                              <th
                                className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100 rounded-tl rounded-bl 
              border-r border-gray-500 "
                              >
                                {t("Name-of-Monuments")}
                              </th>
                              <th
                                className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100 rounded-tl rounded-bl 
              border-r border-gray-500 "
                              >
                                {t("Place")}
                              </th>
                              <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                                {t("Taluka")}
                              </th>
                              <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                                {t("District")}
                              </th>
                              <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                                {t("Notification-Status")}
                              </th>
                              <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                                {t("Notification")}
                              </th>
                              <th className=" py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                                {t("Monument-Type")}
                              </th>
                            </tr>
                          </thead>
                          <tbody className=" border border-gray-500 ">
                            {uniqueDistricts.map((taluka) => (
                              // <div key={taluka}>
                              <>
                                <tr key={Math.random() * 100}>
                                  <th className="py-1" colSpan="8">
                                    {t("District")} {taluka}
                                  </th>
                                </tr>
                                {getDivision.map((item) => {
                                  if (
                                    item.districtInEnglish === taluka ||
                                    item.district == taluka
                                  ) {
                                    return (
                                      <tr key={Math.random() * 100}>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.id
                                            : item.id}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.nameOfMonumentEnglish
                                            : item.nameOfMonument}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.placeInEnglish
                                            : item.place}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.talukaInEnglish
                                            : item.taluka}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.districtInEnglish
                                            : item.district}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.notificationStatusInEnglish
                                            : item.notificationStatus}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.notificationInEnglish
                                            : item.notification}
                                        </td>
                                        <td className="py-1 text-center text-gray-900 text-base border border-gray-500">
                                          {router.locale === "en"
                                            ? item.monumentTypeInEnglish
                                            : item.monumentType}
                                        </td>
                                      </tr>
                                    );
                                  }
                                  return null;
                                })}
                              </>
                              // </div>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
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
