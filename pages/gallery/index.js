import React, { useEffect, useState } from "react";
import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import HeadMeta from "../../components/HeadMeta";

const Index = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [galleryData, setGalleryData] = useState([]);
  const router = useRouter();

  const galleryImages = async (divi) => {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "post", // GraphQL always uses POST requests!
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY}`,
          "Content-Type": "application/json",
        },
        // send the query we wrote in GraphiQL as a string
        body: JSON.stringify({
          // query as payload...all requests start with "query: ", so we'll stringify that for convenience
          query: `
              query {
                imagesCollection(where: { slug:"${divi}" },order:id_ASC){
                    items{
                        title
                        titleInEnglish: title(locale: "en")
                        desc
                        descInEnglish: desc(locale: "en")
                        img{
                          url
                          width
                          height
                        }
                        }
              
                    }
    
              }            
          `,
        }),
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setGalleryData(json.data.imagesCollection.items);
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    galleryImages("ratnagiriDivision");
  }, [0]);

  return (
    <div>
       <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Gallery")} />
      <div className="grid sm:grid-cols-12 grid-cols-1 relative py-10">
        {/* Mobile */}
        <div className="block sm:hidden bg-white py-1 mx-3 my-2">
          <div className="flex justify-start items-center px-2">
            <div
              className="text-2xl  text-slate-700  cursor-pointer drop-shadow-xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <IoClose /> : <IoMenuSharp />}{" "}
            </div>
            <span className="text-base font-semibold  text-slate-700 pl-3">
              {t("menu")}
            </span>
          </div>
          {open && (
            <div className="p-3 sm:p-3 absolute top-10 w-11/12 z-40 bg-[#eee] grid grid-cols-1 divide-y-2 space-y-1 content-start  border-l-2 rounded-l-md">
              {t("MonumentsSitesTabs", { returnObjects: true }).map((item) => (
                <button
                  key={Math.random() * 100}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                    setOpen(false);
                  }}
                  className={` border-2 p-2 text-left font-bold  border-gray-100 rounded-md w-full focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white 
              ${
                item.id == activeTab
                  ? "bg-slate-800 text-white focus:border-slate-700 "
                  : "bg-white text-slate-700"
              }`}
                >
                  {" "}
                  {item.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* desktop */}
        <div className="col-span-3 overflow-auto hidden sm:block h-[350px] xl:h-[500px] border-2 rounded-md rounded-r-none border-r-0">
          <div className="px-3 py-7 bg-white ml-5 grid grid-cols-1 space-y-2 content-start">
            {t("MonumentsSitesTabs", { returnObjects: true }).map((item) => (
              <button
                key={Math.random() * 100}
                className={`border-2 p-2 text-left font-bold bg-[#eee]  border-gray-100 rounded-md w-full focus:bg-slate-700 focus:text-white hover:bg-slate-700 hover:text-white
              ${
                item.id == activeTab
                  ? "bg-slate-700  text-white focus:border-slate-700 "
                  : "bg-[#eee] text-black"
              }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(item.id);
                  galleryImages(item.gallerySlug);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-9 border-2 rounded-r-md overflow-auto h-[350px] xl:h-[500px] bg-white mx-3 sm:mx-0 sm:mr-5 ">
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryData.length > 0 &&
              galleryData.map((item) => (
                <div
                  key={Math.random() * 100}
                  className="flex flex-col justify-center items-center m-1"
                >
                  <div class="w-64  m-auto  shadow-md">
                    <img src={item.img.url} alt="img" class="h-44 w-64" />
                    <div class="relative w-full p-2 bg-white text-center">
                      <p class="mb-2 text-base font-medium text-gray-800">
                        {router.locale === "en"
                          ? item.titleInEnglish
                          : item.title}
                      </p>
                      <p class="text-xs text-gray-600">
                        {router.locale === "en"
                          ? item.descInEnglish
                          : item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
