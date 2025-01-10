import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import Link from "next/link";

const Menubar = ({ setOpen }) => {
  const { t } = useTranslation("common");
  const showAnimation = {
    initial: {
      opacity: 0,
      //   x: "calc(100vw - 40%)",
      x: "-100vw",
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      opacity: 1,
      x: "0",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div
      className={`z-50 ${
        open ? "fixed" : "hidden"
      }  w-full h-auto top-16 sm:top-28 left-0 z-50  bottom-0 shadow-xl `}
    >
      <motion.div
        className="   absolute top-0  bottom-0 left-0 right-[10%] sm:right-[40%] bg-[#eee] opacity-100 border-black overflow-auto rounded-i-[15px] shadow-xl"
        {...showAnimation}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <ul className="  divide-y-1 pl-10 2xl:pl-16 font-semibold text-base py-3">
          {t("links", { returnObjects: true }).map((item) => (
            <li
              key={item.slug}
              className=" py-2 w-full   my-2 text-slate-700  hover:text-[#c88f35]"
            >
              <Link href={item.slug} as={item.slug} legacyBehavior>
                <a
                  className="  font-semibold cursor-pointer text-sm sm:text-lg xl:text-xl px-3 "
                  onClick={() => setOpen(!open)}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Menubar;
