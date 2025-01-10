import React from "react";
import { useTranslation } from "next-i18next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { FaFilePdf } from "react-icons/fa";
import { useRouter } from "next/router";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p style={{ padding: 2, textAlign: "justify" }}>{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul style={{ listStyleType: "none", textAlign: "center" }}>{children}</ul>
    ),
  },
  renderText: (text) => text.replace("!", "?"),
};

const RTIDoc = ({ RtiDocs, rtiData }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div>
      {/* RTI Doc */}
      <div>
        <p className="text-left md:px-10 px-2 py-2 font-semibold">
          {t("Download")}
        </p>
        <div className="flex md:px-10 px-2  ">
          <ul className="list-none">
            {RtiDocs != undefined &&
              RtiDocs.map((item) => (
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

      {/* RTI Data */}
      <div className="px-5 py-3 mx-auto">
        <div className=" w-full mx-auto overflow-auto ">
          <table className="table-auto  w-full  whitespace-no-wrap">
            <thead>
              <tr className="border border-gray-500">
                <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500 ">
                  {t("RtiSrNo")}
                </th>
                <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                  {t("Rti-Department")}
                </th>
                <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                  {t("Rti-Officer")}
                </th>
                <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                  {t("Rti-Assistant")}
                </th>
                <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                  {t("Rti-Appellate")}
                </th>
                <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                  {t("Rti-Email")}
                </th>
                <th className="py-1  font-semibold text-center text-gray-900 text-base bg-gray-100  border-r border-gray-500">
                  {t("Rti-ContactNo")}
                </th>
              </tr>
            </thead>
            <tbody className=" border border-gray-500">
              {rtiData != undefined &&
                rtiData.map((item, key) => (
                  <tr className="" key={Math.random() * 100}>
                    <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                      {key + 1}
                    </td>
                    <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                      {router.locale === "en"
                        ? item.departmentInEnglish
                        : item.department}
                    </td>
                    <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                      {documentToReactComponents(
                        router.locale === "en"
                          ? item.rtiOfficerInEnglish.json
                          : item.rtiOfficer.json,
                        options
                      )}
                    </td>
                    <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                      {documentToReactComponents(
                        router.locale === "en"
                          ? item.assistantRtiOfficerInEnglish.json
                          : item.assistantRtiOfficer.json,
                        options
                      )}
                    </td>
                    <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                      {documentToReactComponents(
                        router.locale === "en"
                          ? item.appellateInEnglish.json
                          : item.appellate.json,
                        options
                      )}
                    </td>
                    <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500">
                      {item.email}
                    </td>
                    <td className=" py-1   text-center text-gray-900 text-base   border border-gray-500 ">
                      {item.contactNo}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RTIDoc;
