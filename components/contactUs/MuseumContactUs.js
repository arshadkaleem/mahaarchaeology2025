import React from "react";
import { useTranslation } from "next-i18next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { useRouter } from "next/router";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  },
  renderText: (text) => text.replace("!", "?"),
};

const MuseumContactUs = ({ museumData }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <div className="">
      <section className="">
        <div className="px-1 sm:px-1 py-3 mx-aut">
          <div className=" w-full mx-auto overflow-auto ">
            <table className="table-auto sm:table-fixed w-full  whitespace-no-wrap">
              <thead>
                <tr className="border border-gray-500">
                  <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                    {t("Museums-Name")}
                  </th>
                  <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                    {t("Museums-Post")}
                  </th>
                  <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                    {t("Museums-Museum")}
                  </th>
                  <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                    {t("Museums-Address")}
                  </th>
                  <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                    {t("Museums-Email")}
                  </th>
                  <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                    {t("Museums-ContactNo")}
                  </th>
                </tr>
              </thead>
              <tbody className=" border border-gray-500">
                {museumData != undefined &&
                  museumData.map((item) => (
                    <tr
                      className="border border-gray-500"
                      key={Math.random() * 100}
                    >
                      <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                        {router.locale === "en"
                          ? item.nameInEnglish
                          : item.name}
                      </td>
                      <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                        {documentToReactComponents(
                          router.locale === "en"
                            ? item.postInEnglish.json
                            : item.post.json,
                          options
                        )}
                      </td>
                      <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                        {router.locale === "en"
                          ? item.museumInEnglish
                          : item.museum}
                      </td>
                      <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                        {documentToReactComponents(
                          router.locale === "en"
                            ? item.addressInEnglish.json
                            : item.address.json,
                          options
                        )}
                      </td>
                      <td className="py-1   text-center text-gray-900 text-base   border border-gray-500">
                        {item.email}
                      </td>
                      <td className="py-1   text-center text-gray-900 text-base   border border-gray-500  ">
                        {item.contactNo}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MuseumContactUs;
