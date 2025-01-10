import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
const SideBarLeft = ({ active, setActive, subMenuOpen, setSubMenuOpen }) => {
  const { t } = useTranslation("common");
  return (
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
                  className={`cursor-pointer ${subMenuOpen && "rotate-180"}`}
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
                    {subMenuItem.title} Pal
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBarLeft;
