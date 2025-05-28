import React from "react";
import SubPageHeader from "../../components/SubPageHeader";
import Navigation from "../../components/home/Navigation";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BsCalendar, BsLink } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const IndexPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div>
      <div>
        <HeadMeta
          title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
          content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
        />
        <Navigation pagePath={router.route} />
        <SubPageHeader title={t("News")} />
      </div>

      {/* EVENT CARD */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="max-w-[1200px] px-4 w-full mx-auto py-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            class="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100"
          >
            <img
              className="object-contain w-full rounded-t-lg  h-auto md:w-[40%] md:rounded-none md:rounded-s-lg"
              src="/ACFImg_English.jpg"
              alt="Descriptive Alt Text"
            />

            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Vikasit Maharashtra - VM 2047 Soft Power” initiative
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                Under 150 Days program we are participating in{" "}
                <strong>
                  “Vikasit Maharashtra - VM 2047 Soft Power” initiative...
                </strong>
              </p>
              <a
                className="mb-3 font-normal text-blue-600 cursor-pointer"
                href="https://forms.gle/2cC5VsTQvAVcCkJg9"
                target="_blank"
              >
                <BsLink className="inline mr-3" />
                Click Here to submit your response by 15th June 2025
              </a>
              <p>
                <BsCalendar className="inline mr-3" />
                Events 15 May 2025 - 15 Jun 2025
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default IndexPage;
