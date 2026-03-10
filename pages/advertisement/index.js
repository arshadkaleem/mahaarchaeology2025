import React from "react";
import SubPageHeader from "../../components/SubPageHeader";
import Navigation from "../../components/home/Navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";
import Link from "next/link";


const files = [
  { name: "01} Nagpur Division SMP Competition Advertisment.pdf", path: "/recruitment/2026/01} Nagpur Division SMP Competition Advertisment.pdf" },
  { name: "02} Pune & Ratnagiri Division SMP Competition Advertisment.pdf", path: "/recruitment/2026/02} Pune & Ratnagiri Division SMP Competition Advertisment.pdf" },
  { name: "03} Nashik Division SMP Competition Advertisment.pdf", path: "/recruitment/2026/03} Nashik Division SMP Competition Advertisment.pdf" },
  { name: "04} Chha. Sambhaji Nagar Division SMP Competition Advertisment.pdf", path: "/recruitment/2026/04} Chha. Sambhaji Nagar Division SMP Competition Advertisment.pdf" },
  { name: "05} Nanded Division SMP Competition Advertisment.pdf", path: "/recruitment/2026/05} Nanded Division SMP Competition Advertisment.pdf" },
  // { name: "06} SMP COMPETITION 2026 - 2027 - Google Forms.pdf", path: "/recruitment/2026/SMP COMPETITION 2026 - 2027 - Google Forms.pdf" },
  { name: "06} Google Form Link", path: "https://forms.gle/VLmgbC9Nghy3dH169" }
];


const Index = () => {
  const { t } = useTranslation("common");
  const router = useRouter();


  const getCleanTitle = (filename) => {
    return filename.replace('.pdf', '');
  };
  return (
    <div>
      <HeadMeta
        title="Advertisement - The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Advertisement")} />
      <div className="w-full px-3 py-10 sm:px-0 sm:w-11/12 mx-auto text-justify">
        <a href="https://assets.ctfassets.net/l47hkrce4wip/3OMRltYlK8rr6d1DwqCOQ/a733f2c9583adcb20401dd9459689af9/%C3%A0__%C3%A0__%C3%A0_%C2%B5%C3%A0__%C3%A0__%C3%A0__%C3%A0_%C2%B5%C3%A0__%C3%A0__%C3%A0__%C3%A0___%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0___%C3%A0_%C2%B5%C3%A0__%C3%A0_%C2%B5%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0___%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0__%C3%A0___%C3%A0__.pdf" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 underline">
          Department Requirement Advertisement
        </a>

        <hr className="my-4" />
        {files.map((file, index) => (
          <a
            key={index}
            href={file.path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-600 hover:text-blue-800 underline flex items-center gap-2"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            {getCleanTitle(file.name)}
          </a>
        ))}
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
