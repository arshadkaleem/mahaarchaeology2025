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
      <SubPageHeader title="Court Order" />
      <div className="mt-5">
        <section className="">
          <div className="px-5 py-3 mx-auto">
            <div className=" w-full mx-auto overflow-auto container ">
              <ul className="w-full mx-auto">
                <li className="text-lg text-justify text-slate-700">
                  <a href="https://assets.ctfassets.net/l47hkrce4wip/5cMtASSKSPIZnQvK43L6yX/47e260fe422a91f3f06b65d94bab9978/2699-2023_Order_Vishalgad_Fort__11.02.2025.pdf">
                    2699-2023
                  </a>
                </li>

<li className="text-lg text-justify text-slate-700">
                  <a href="https://assets.ctfassets.net/l47hkrce4wip/6P3JTPFKbgjltZAtOjiGK4/a17da9bd5465bfe38b961859c36e8855/1972-2023_Order_Vishalgad_Fort_11.02.2025.pdf">
                    1972-2023
                  </a>
                </li>
<li className="text-lg text-justify text-slate-700">
                  <a href="https://assets.ctfassets.net/l47hkrce4wip/5NVPsaPGEsCDQZU7kMnpSr/004fc2d010768b6e6e0c35f3445b1494/9968-2024_Order_Vishalgad_Fort_11.02.2025.pdf">
                    9968-2024
                  </a>
                </li>

<li className="text-lg text-justify text-slate-700">
                  <a href="https://assets.ctfassets.net/l47hkrce4wip/GZqWUvhPB5rHht60nZZ73/7a1c09fe53a96b5a72b065891d8c236c/10774-2024_Order_Vishalgad_Fort_11.02.2025.pdf">
                    10774-2024
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
