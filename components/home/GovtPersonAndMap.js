import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
const GovtPersonAndMap = ({ governmentData }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div className="sm:col-span-8 border-2 bg-white px-2 py-3">
      <div className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-5 gap-x-2 mb-2 z-10">
          {governmentData &&
            governmentData.map((item) => (
              <div key={Math.random() * 100}>
                {item.img ? (
                  <img
                    src={item.img.url}
                    alt="random imgee"
                    className="w-full object-cover object-center  "
                  />
                ) : (
                  <img
                    src="/home/user.png"
                    alt="random imgee"
                    className="w-full object-cover object-center  "
                  />
                )}
                <div className="relative  ">
                  <div className="rounded-2xl  p-1 shadow-md">
                    <div className="rounded-xl bg-white px-2 h-[90px] sm:h-[100px] xl:h-[70px]">
                      {item.title && (
                        <h6 className="text-xs text-center font-bold text-gray-900 ">
                          {router.locale === "en"
                            ? item.titleInEnglish
                            : item.title}
                        </h6>
                      )}

                      <p className="mt-1 text-xs text-center text-gray-500">
                        {router.locale === "en"
                          ? item.descInEnglish
                          : item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="my-5 ">
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <TransformComponent>
                  <img
                    src="/home/home_map.jpg"
                    className="h-[400px] w-[700px] sm:w-[600px] mx-auto"
                    alt="test"
                  />
                </TransformComponent>
                <div className="block m-auto">
                  <div className="tools mx-auto mt-2 flex items-center w-3/5">
                    <button
                      className="w-full px-4 py-2 text-xs font-medium text-black bg-white border-t border-b border-l rounded-l-md hover:bg-gray-100"
                      onClick={() => zoomIn()}
                    >
                      ZOOM IN +
                    </button>
                    <button
                      className="w-full px-4 py-2 text-xs font-medium text-black bg-white border hover:bg-gray-100"
                      onClick={() => resetTransform()}
                    >
                      RESET
                    </button>
                    <button
                      className="w-full px-4 py-2 text-xs font-medium text-black bg-white border-t border-b border-r rounded-r-md hover:bg-gray-100"
                      onClick={() => zoomOut()}
                    >
                      ZOOM OUT -
                    </button>
                  </div>
                </div>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
        <h4 className="text-center font-semibold text-slate-700 text-base py-1">
          {t("MapDetail")}
        </h4>
      </div>
    </div>
  );
};

export default GovtPersonAndMap;
