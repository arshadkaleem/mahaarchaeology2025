import Navigation from "../../components/home/Navigation";
import SubPageHeader from "../../components/SubPageHeader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import HeadMeta from "../../components/HeadMeta";

const Index = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div>
      <HeadMeta
        title="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra."
        content="The Directorate of Archaeology and Museums functions under the Department of Culture Affairs, Government of Maharashtra and is further divided into two branches- Archaeology and Museums. The Directorate operates through its sub-offices at Ratnagiri, Nashik, Pune, Aurangabad, Nanded and Nagpur for administrative purposes."
      />
      <Navigation pagePath={router.route} />
      <SubPageHeader title={t("Seniority List of Officers/Employees")} />
      <div className="mt-5">
        <section className="">
          <div className="px-5 py-3 mx-auto">
            <div className=" w-full mx-auto overflow-auto container ">
              <ul className="w-full mx-auto">
                <li className="text-lg text-justify text-slate-700">
                  <a href="https://downloads.ctfassets.net/l47hkrce4wip/3W0vk8zmqjWhVbXGGojBqM/d01b6fa3cb342c510d952fbee7922168/Group_C_employees_Seniority_List..zip">
                    वर्ग ३ कर्मचारी जेष्ठता सुची
                  </a>
                </li>
                <li className="text-lg text-justify text-slate-700">
                  <a href="https://downloads.ctfassets.net/l47hkrce4wip/6pjaVrn581bQfHxICjUy4a/ca80f6c17e7710b84dcbf9e9c4db8bb8/___________________________________________._2024.pdf">
                    वर्ग ड मधील कर्मचारी यांची जेष्ठता सूचीबाबत. 2024
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
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
