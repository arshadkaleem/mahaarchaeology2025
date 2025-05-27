import HomePageSlider from "../components/home/HomePageSlider";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import Navigation from "../components/home/Navigation";
import MonumentsSlider from "../components/home/MonumentsSlider";
import React from "react";
import Link from "next/link";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import * as AllImages from "../components/allApi/allImagesApi";
import { useRouter } from "next/router";
import HeadMeta from "../components/HeadMeta";
import ImageModal from "../components/modal/ImageModal";

const Home = ({ coverData, governmentData, homeSliderData }) => {
  const [active, setActive] = useState("Map");
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <ImageModal />
      <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <div className="fixed top-0 z-[99]">
        <Navigation pagePath={router.route} />
      </div>

      <div className="relative">
        <HomePageSlider coverData={coverData} />
      </div>
      <div className="bg-[url('/home/NewhomeBack.jpg')] h-full w-full ">
        <div className="bg-[#c88f35]">
          {/* <div className="w-11/12 mx-auto flex justify-end  text-base sm:text-2xl sm:px-0 px-2 font-bold py-1 sm:py-1 xl:py-3 text-slate-700 shadow-lg">
            <input
              type="search"
              className="form-control block w-[350px] px-1 sm:px-3 py-2 text-sm sm:text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition  ease-in-out m-0  focus:bg-white  focus:outline-none "
              placeholder="Search "
            />
          </div> */}
          <div className="w-11/12 mx-auto flex justify-between items-center text-xl  sm:px-0 px-2 font-bold py-1 sm:py-1 xl:py-3 text-slate-700 shadow-lg">
            <Link href="/administrative_setup?recruitment=2" legacyBehavior>
              <div className="blink flex items-center cursor-pointer">
                <span className="inner-text text-blue-800">
                  {t("Vacancy-Notify")}
                </span>
              </div>
            </Link>

            <input
              type="search"
              className="form-control block w-[350px] px-1 sm:px-3 py-2 text-sm sm:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
        rounded transition  ease-in-out m-0  focus:bg-white  focus:outline-none "
              placeholder="Search "
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-12 grid-cols-1 relative  w-11/12 mx-auto">
          {/* side Menu */}
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
              <div className="p-3 sm:p-3 absolute top-10 w-full z-40 bg-[#eee] grid grid-cols-1 divide-y-2 space-y-1 content-start  border-l-2 rounded-l-md">
                {t("subLinks", { returnObjects: true }).map((item) => (
                  <Link
                    href={item.slug}
                    as={item.slug}
                    legacyBehavior
                    key={Math.random() * 100}
                  >
                    <button
                      key={Math.random() * 100}
                      onClick={() => {
                        setActive(item.value), setOpen(!open);
                      }}
                      className={` border-2 p-2 text-left font-bold  border-gray-100 rounded-md w-full focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white 
                ${
                  item.value === active
                    ? "bg-slate-800 text-white focus:border-slate-700 "
                    : "bg-white text-slate-700"
                }`}
                    >
                      {" "}
                      {item.title}
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* desktop */}
          <div className="col-span-2  hidden sm:block ">
            <div className="px-2 py-3 h-full bg-white grid grid-cols-1  content-start  border-l-2 rounded-l-md">
              {t("subLinksLeft", { returnObjects: true }).map((item) => (
                <div key={Math.random() * 100}>
                  <div
                    className={`border-2 py-2 mb-5 px-2 text-left flex justify-between items-center shadow-md font-bold bg-[#eee] border-gray-100 rounded-md w-full focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white ${
                      item.value === active
                        ? "bg-slate-700  text-white focus:border-slate-700 "
                        : "bg-[#eee] text-slate-700"
                    }
                  `}
                  >
                    <Link href={item.slug} as={item.slug} legacyBehavior>
                      <button
                        onClick={() => {
                          setActive(item.value);
                        }}
                        className="w-full text-left"
                      >
                        {item.title}
                      </button>
                    </Link>
                    <span>
                      {" "}
                      {item.submenu && (
                        <BsChevronDown
                          className={`cursor-pointer ${
                            subMenuOpen && "rotate-180"
                          }`}
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                        />
                      )}
                    </span>
                  </div>
                  {item.subMenu && subMenuOpen && (
                    <div className="">
                      {item.subMenu.map((subMenuItem) => (
                        <Link
                          key={Math.random() * 100}
                          href={subMenuItem.slug}
                          as={subMenuItem.slug}
                          legacyBehavior
                        >
                          <button className="hover:bg-slate-700 font-semibold px-3 py-1 cursor-pointer w-full text-left rounded-md hover:text-white hover:focus:border-slate-700 focus:bg-slate-700 focus:text-white">
                            {subMenuItem.title}
                          </button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="sm:col-span-8 border-2 bg-white px-2 py-3">
            <div className="flex flex-col items-center justify-center ">
              <div className="grid grid-cols-5 gap-x-2 mb-2 z-10">
                {governmentData &&
                  governmentData.map((item) => (
                    <div key={Math.random() * 100}>
                      {item.img ? (
                        <img
                          src={item.img.url}
                          alt="random imgee"
                          className="w-full object-cover object-center  "
                        />
                      ) : (
                        <img
                          src="/home/user.png"
                          alt="random imgee"
                          className="w-full object-cover object-center  "
                        />
                      )}
                      <div className="relative  ">
                        <div className="rounded-2xl  p-1 shadow-md">
                          <div className="rounded-xl bg-white px-2 h-[90px] sm:h-[100px] xl:h-[70px]">
                            {item.title && (
                              <h6 className="text-xs text-center font-bold text-gray-900 ">
                                {router.locale === "en"
                                  ? item.titleInEnglish
                                  : item.title}
                              </h6>
                            )}

                            <p className="mt-1 text-xs text-center text-gray-500">
                              {router.locale === "en"
                                ? item.descInEnglish
                                : item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="my-5 ">
                <TransformWrapper initialScale={1}>
                  {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <React.Fragment>
                      <TransformComponent>
                        <img
                          src="/home/home_map.jpg"
                          className="h-[400px] w-[700px] sm:w-[600px] mx-auto"
                          alt="test"
                        />
                      </TransformComponent>
                      <div className="block m-auto">
                        <div className="tools mx-auto mt-2 flex items-center w-3/5">
                          <button
                            className="w-full px-4 py-2 text-xs font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100"
                            onClick={() => zoomIn()}
                          >
                            ZOOM IN +
                          </button>
                          <button
                            className="w-full px-4 py-2 text-xs font-medium text-black bg-white border hover:bg-gray-100"
                            onClick={() => resetTransform()}
                          >
                            RESET
                          </button>
                          <button
                            className="w-full px-4 py-2 text-xs font-medium text-black bg-white border-t border-b border-r rounded-r-md hover:bg-gray-100"
                            onClick={() => zoomOut()}
                          >
                            ZOOM OUT -
                          </button>
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </TransformWrapper>
              </div>
              <h4 className="text-center font-semibold text-slate-700 text-base py-1">
                {t("MapDetail")}
              </h4>
            </div>
          </div>

          <div className="col-span-2  hidden sm:block ">
            <div className="px-2 py-3 h-full bg-white  grid grid-cols-1  content-start  border-r-2 rounded-r-md">
              {t("subLinksRight", { returnObjects: true }).map((item) => (
                <div key={Math.random() * 100}>
                  <div
                    key={Math.random() * 100}
                    className={`border-2 py-2 mb-5 px-2 text-left flex justify-between items-center shadow-md font-bold bg-[#eee] border-gray-100 rounded-md w-full focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white ${
                      item.value === active
                        ? "bg-slate-700  text-white focus:border-slate-700 "
                        : "bg-[#eee] text-slate-700"
                    }
                  `}
                  >
                    <Link
                      href={item.slug}
                      as={item.slug}
                      legacyBehavior
                      key={Math.random() * 100}
                    >
                      <button
                        onClick={() => {
                          setActive(item.value);
                        }}
                        className="w-full text-left"
                      >
                        {" "}
                        {item.title}
                      </button>
                    </Link>
                    <span>
                      {" "}
                      {item.submenu && (
                        <BsChevronDown
                          className={`cursor-pointer ${
                            subMenuOpen && "rotate-180"
                          }`}
                          onClick={() => setSubMenuOpen(!subMenuOpen)}
                        />
                      )}
                    </span>
                  </div>
                  {item.subMenu && subMenuOpen && (
                    <div className="">
                      {item.subMenu.map((subMenuItem) => (
                        <Link
                          key={Math.random() * 100}
                          href={subMenuItem.slug}
                          as={subMenuItem.slug}
                          legacyBehavior
                        >
                          <button className="hover:bg-slate-700 font-semibold px-3 py-1 cursor-pointer w-full text-left rounded-md hover:text-white hover:focus:border-slate-700 focus:bg-slate-700 focus:text-white">
                            {subMenuItem.title}
                          </button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* monuments Gallery */}
        <div className="my-0 pal">
          <h1 className="text-center bg-[#c88f35] text-base sm:text-2xl sm:px-0 px-2 my-0 font-bold py-2 sm:py-3 xl:py-5 text-slate-700 shadow-lg"></h1>
          <MonumentsSlider homeSliderData={homeSliderData} />
          <h1 className="text-center bg-[#c88f35] text-base sm:text-2xl sm:px-0 px-2 my-0 font-bold py-2 sm:py-3 xl:py-5 text-slate-700 shadow-lg"></h1>
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps({ locale }) {
  const { data } = await AllImages.allImagesApi("home-cover-slider");
  const { data: government } = await AllImages.allImagesApi(
    "government-officials"
  );
  const { data: homeSlider } = await AllImages.allImagesApi("home-slider");

  const coverData = data.imagesCollection.items;
  const governmentData = government.imagesCollection.items;
  const homeSliderData = homeSlider.imagesCollection.items;

  return {
    props: {
      coverData,
      governmentData,
      homeSliderData,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
