import React from "react";
import { useTranslation } from "next-i18next";

const Administrative = () => {
  const { t } = useTranslation("common");
  return (
    <div className="pt-2">
      <h3 className="text-left md:px-10 px-2 text-base sm:text-lg font-semibold py-3">
        {t("Administrative")}
      </h3>
      <p className="text-left md:px-10 px-2 py-2 ">{t("Administrative-p1")}</p>
      <p className="text-left md:px-10 px-2 py-2 ">{t("Administrative-p2")}</p>
    </div>
  );
};

export default Administrative;
