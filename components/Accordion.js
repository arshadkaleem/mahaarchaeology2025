import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="my-2 text-justify">{children}</p>
    ),
  },
  renderText: (text) => text.replace("!", "?"),
};

function Accordion({
  title,
  paragraph,
  imgCollection,
  isActive,
  setIsActive,
  titleInEnglish,
  paragraphInEnglish,
}) {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <div className="mb-2">
        <div
          className=" bg-[#f5f5f5]  border-[#ddd] border-0 h-10 py-2 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            if (isActive == title) {
              setIsActive("");
            } else {
              setIsActive(title);
            }
          }}
        >
          <div className="flex items-center">
            {" "}
            <span className="px-3 ">
              {isActive == title ? (
                <FaMinusCircle color="#d31145" />
              ) : (
                <FaPlusCircle color="#d31145" />
              )}{" "}
            </span>{" "}
            <span className="pt-2">
              {router.locale === "en" ? titleInEnglish : title}
            </span>
          </div>
        </div>
        {isActive == title ? (
          <div className="p-2  border-2">
            <div className="flex gap-x-4 justify-center items-center w-10/12 mx-auto">
              {imgCollection.items.map((item, index) => (
                <img src={item.url} key={index} className="h-60 xl:h-72" />
              ))}
            </div>
            <div className="px-2 py-3">
              {documentToReactComponents(
                router.locale === "en"
                  ? paragraphInEnglish.json
                  : paragraph.json,

                options
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Accordion;
