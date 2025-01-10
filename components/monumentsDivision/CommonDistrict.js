import React, { useState } from "react";
import Accordion from "../Accordion";
import MainTitle from "../MainTitle";
import { useTranslation } from "next-i18next";

const CommonDistrict = ({ allDistrictData, openTitle, isParams }) => {
  const { t } = useTranslation("common");
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div>
        <MainTitle title={t(openTitle)} />

        <div className="w-11/12 mx-auto">
          {isParams
            ? allDistrictData
                .slice(0, 1)
                .map(
                  ({
                    title,
                    paragraph,
                    imgCollection,
                    titleEnglish,
                    paragraphInEnglish,
                  }) => (
                    <Accordion
                      title={title}
                      titleInEnglish={titleEnglish}
                      paragraphInEnglish={paragraphInEnglish}
                      paragraph={paragraph}
                      imgCollection={imgCollection}
                      key={title}
                      setIsActive={setIsActive}
                      isActive={title}
                    />
                  )
                )
            : allDistrictData.map(
                ({
                  title,
                  paragraph,
                  imgCollection,
                  titleEnglish,
                  paragraphInEnglish,
                }) => (
                  <Accordion
                    title={title}
                    titleInEnglish={titleEnglish}
                    paragraphInEnglish={paragraphInEnglish}
                    paragraph={paragraph}
                    imgCollection={imgCollection}
                    key={title}
                    setIsActive={setIsActive}
                    isActive={isActive}
                  />
                )
              )}
        </div>
      </div>
    </>
  );
};

export default CommonDistrict;
