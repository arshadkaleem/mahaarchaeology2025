import React from "react";
import SubPageHeader from "../../components/SubPageHeader";
import Navigation from "../../components/home/Navigation";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";
import Link from "next/link";

const files = [
    { name: "001 SMP competition - Advertisment (1).pdf", path: "/recruitment/2026/001 SMP competition - Advertisment (1).pdf" },
    { name: "001 SMP competition - Advertisment.pdf", path: "/recruitment/2026/001 SMP competition - Advertisment.pdf" },
    { name: "002 SMP competition Rules & Regulations.pdf", path: "/recruitment/2026/002 SMP competition Rules & Regulations.pdf" },
    { name: "003 SMP - Format.pdf", path: "/recruitment/2026/003 SMP - Format.pdf" },
    { name: "ARCH ADD_0001.pdf", path: "/recruitment/2026/ARCH ADD_0001.pdf" },
    { name: "Advertisement_001.pdf", path: "/recruitment/2026/Advertisement_001.pdf" },
    { name: "covering ००2.pdf", path: "/recruitment/2026/covering ००2.pdf" }
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
                title="World Heritage Desk Application Advertisement - Directorate of Archaeology and Museums"
                content="World Heritage Desk Application Advertisements and Recruitment details of Directorate of Archaeology and Museums, Government of Maharashtra."
            />
            <Navigation pagePath={router.route} />
            <SubPageHeader title={t("World Heritage Desk Application Advertisement")} />

            <div className="w-full px-3 py-10 sm:px-0 sm:w-11/12 mx-auto">
                <div className="flex flex-col gap-4">
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
        </div>
    );
};

export default Index;

export const getServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});
