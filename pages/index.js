import HomePageSlider from "../components/home/HomePageSlider";
import JobNotificationBar from "../components/home/JobNotificationBar";
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
import SideBarRight from "../components/home/SideBarRight";
import SideBarLeft from "../components/home/SideBarLeft";
import GovtPersonAndMap from "../components/home/GovtPersonAndMap";

const Home = ({ coverData, governmentData, homeSliderData }) => {
  const [active, setActive] = useState("Map");
  const [open, setOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <div className="fixed top-0 z-[99]">
        <Navigation pagePath={router.route} />
      </div>

      <HomePageSlider coverData={coverData} />
      <div className="bg-[url('/home/NewhomeBack.jpg')] h-full w-full ">
        <JobNotificationBar />

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
            <SideBarLeft active={active} setActive={setActive} />
          </div>

          {/* Government Person and Map */}
          <GovtPersonAndMap governmentData={governmentData} />
          <SideBarRight active={active} setActive={setActive} />
        </div>
        {/* monuments Gallery */}
        <MonumentsSlider homeSliderData={homeSliderData} />
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
