import React from "react";
import { useTranslation } from "next-i18next";
import { FiExternalLink } from "react-icons/fi";

const Reference = () => {
  const { t } = useTranslation("common");

  return (
    <div className="pt-2">
      <h3 className="text-left md:px-10 px-2 text-base sm:text-lg font-semibold py-3">
        {t("Reference")}
      </h3>
      <div className="flex md:px-10 px-2  ">
        <ul className="list-none">
          {t("ReferenceLinks", { returnObjects: true }).map((item) => (
            <li
              key={Math.random() * 100}
              className="pb-2 text-base text-slate-700 hover:font-semibold"
            >
              <a
                href={item.link}
                target="_blank"
                key={Math.random() * 100}
                rel="noopener noreferrer"
                className=" pb-3 "
              >
                <span className="inline-block text-slate-700">
                  <FiExternalLink />
                </span>{" "}
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reference;
