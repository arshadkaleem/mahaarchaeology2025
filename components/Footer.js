import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="bg-slate-800 px-4 md:px-0 py-4 md:py-10 text-white ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-24">
            <div className="order-1">
              <h4 className="font-semibold text-base leading-loose mb-2">
                {t("other link")}
              </h4>
              <div className="flex flex-col mb-3 text-sm">
                {/* <Link href="/Services/Design"> */}
                <a className="flex items-center gap-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  {t("News")}
                </a>
                {/* </Link> */}
              </div>
              <div className="flex flex-col mb-3 text-sm">
                {/* <Link href="/Services/Furniture"> */}
                <a className="flex items-center gap-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  {t("Events")}
                </a>
                {/* </Link> */}
              </div>
            </div>
            <div className="order-2">
              <h4 className="font-semibold text-base  leading-loose mb-2">
                {t("IMPORTANT LINK")}
              </h4>
              <div className="flex flex-col mb-3 text-sm">
                <Link
                  href="https://gazetteers.maharashtra.gov.in/"
                  legacyBehavior
                >
                  <a className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    On maharashtra.gov.in
                  </a>
                </Link>
              </div>
            </div>
            <div className="order-3">
              <h4 className="font-semibold text-base leading-loose mb-2">
                {t("Apps")}
              </h4>
              <div className="flex flex-col mb-3 text-sm">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.tslms.mahamuseums"
                  legacyBehavior
                >
                  <a className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    MahaMuseums (on Google Play)
                  </a>
                </Link>
              </div>
            </div>
            <div className="order-4">
              <h4 className="font-semibold text-base leading-loose mb-2">
                {t("CONTACT")}
              </h4>
              <div className="flex flex-col mb-3 text-sm">
                <Link
                  href="https://www.youtube.com/@maharashtraarchaeology3092"
                  legacyBehavior
                >
                  <a className="flex items-center gap-2">
                    <img className="w-6 h-6" src="/home/youtube.png" alt="" />
                    Youtube
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
