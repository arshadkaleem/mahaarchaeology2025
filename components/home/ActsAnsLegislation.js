import React from "react";
import { useTranslation } from "next-i18next";
import { FaFilePdf } from "react-icons/fa";
import { useRouter } from "next/router";
const ActsAnsLegislation = ({ actsData }) => {

  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className="pt-2">
      <h3 className="text-left md:px-10 px-2 text-base sm:text-lg font-semibold py-3">
        {t("ActsHeading")}
      </h3>
      <p className="text-left md:px-10 px-2 py-2 font-semibold">
        {t("ActsSubHeading")}
      </p>
      <div className="flex md:px-10 px-2  ">
        <ul className="list-none">
          {actsData != undefined &&
            actsData.map((item) => (
              <li
                key={Math.random() * 100}
                className="pb-2 text-base text-slate-700 hover:font-semibold"
              >
                <a
                  href={item.file.url}
                  target="_blank"
                  key={Math.random() * 100}
                  rel="noopener noreferrer"
                  className=" pb-3 "
                >
                  <span className="inline-block text-slate-700">
                    <FaFilePdf />
                  </span>{" "}
                  {router.locale === "en" ? item.titleInEnglish : item.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ActsAnsLegislation;
