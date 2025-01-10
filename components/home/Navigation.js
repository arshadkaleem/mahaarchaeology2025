import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = ({ pagePath }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <div className="fixed top-0 left-0 right-0 opacity-80 bg-[#eee] z-50 border-b-2 border-slate-700 ">
        <div className="px-2 py-3">
          <div className="flex justify-between items-center pb-2">
            <div>
              <div className="flex items-center justify-start py-2">
                <img
                  src="/home/sarkarLogo.png"
                  alt="logo"
                  className="h-10 sm:h-14 w-10 sm:w-14"
                />

                <div className="flex flex-col">
                  <p className="text-slate-700 text-xs sm:text-sm font-bold drop-shadow">
                    {t("Government-of-Maharashtra")}
                  </p>
                  <p className="text-slate-700 text-xs sm:text-sm font-bold drop-shadow">
                    {t("Department-of-Cultural-Affairs")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/home/museumLogo.png"
                alt="logo"
                className="h-10 sm:h-14 w-10 sm:w-14"
              />
              <p className="text-slate-700 text-lg sm:text-3xl xl:text-4xl font-bold px-1 sm:px-2 drop-shadow">
                {t("Directorate-of-Archaeology-and-Museums")}
              </p>
            </div>
            <div className=" text-slate-700">
              <Link
                href={pagePath}
                locale={router.locale === "en" ? "mr-IN" : "en"}
              >
                <button className="text-xs sm:text-sm font-semibold drop-shadow">
                  {t("change_locale")}
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-between w-full px-2 sm:px-0 sm:w-11/12 mx-auto bg-[#eee] ">
       
          <div className=" text-slate-700">
            <Link href="/" locale={router.locale === "en" ? "mr-IN" : "en"}>
              <button className="text-xs sm:text-xl font-semibold drop-shadow-xl">
                {t("change_locale")}
              </button>
            </Link>
          </div>
        </div> */}
      </div>
      {/* menubar */}
      {/* {open && <Menubar setOpen={setOpen} />} */}
    </>
  );
};

export default Navigation;
