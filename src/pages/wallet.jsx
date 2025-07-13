import {Footer,BiTransfer,RiFolderSettingsFill,FaWifi,} from './index';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Wallet() {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  return (
    <div className="container mx-auto h-[100vh] w-[100%] flex flex-col sm:shadow-lg">
      {/* Header */}
      <div className="bg-primary p-4 md:h-[20%] h-[17%] md:rounded-b-[3rem] rounded-b-[2.3rem] shadow-lg">
        <div className="text-center text-white md:mt-4">
          <h2 className="text-xl font-medium text-[#ffffffde]">
            {t("Wallet.Balance")}
          </h2>
          <p className="text-5xl font-bold">$ 0</p>
        </div>
      </div>
      {/* List */}
      <div className="mx-4 mt-5 md:mx-10 min-h-[260px] overflow-y-scroll grow custom-scrollbar">
        <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
          <div className="flex md:gap-[4rem] gap-[2rem]">
            <BiTransfer className="text-4xl text-white bg-icon rounded-full p-[3px] text-center" />
            <div>
              <h1 className="font-medium text-xl">{t("Wallet.Transfer")}</h1>
              <p className="text-gray-500">date</p>
            </div>
          </div>
          <p> - $500000 </p>
        </div>
        <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
          <div className="flex md:gap-[4rem] gap-[2rem]">
            <RiFolderSettingsFill className="text-4xl text-white bg-icon rounded-full p-[3px] text-center" />
            <div>
              <h1 className="font-medium text-xl">{t("Wallet.Top Up")}</h1>
              <p className="text-gray-500">date</p>
            </div>
          </div>
          <p> - $500000 </p>
        </div>
        <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
          <div className="flex md:gap-[4rem] gap-[2rem]">
            <FaWifi className="text-4xl text-white bg-icon rounded-full p-[3px] text-center" />
            <div>
              <h1 className="font-medium text-xl">{t("Wallet.Internet")}</h1>
              <p className="text-gray-500">date</p>
            </div>
          </div>
          <p> - $500000 </p>
        </div>
        <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
          <div className="flex md:gap-[4rem] gap-[2rem]">
            <FaWifi className="text-4xl text-white bg-icon rounded-full p-[3px] text-center" />
            <div>
              <h1 className="font-medium text-xl">{t("Wallet.Internet")}</h1>
              <p className="text-gray-500">date</p>
            </div>
          </div>
          <p> - $500000 </p>
        </div>
        <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
          <div className="flex md:gap-[4rem] gap-[2rem]">
            <FaWifi className="text-4xl text-white bg-icon rounded-full p-[3px] text-center" />
            <div>
              <h1 className="font-medium text-xl">{t("Wallet.Internet")}</h1>
              <p className="text-gray-500">date</p>
            </div>
          </div>
          <p> - $500000 </p>
        </div>
        <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
          <div className="flex md:gap-[4rem] gap-[2rem]">
            <FaWifi className="text-4xl text-white bg-icon rounded-full p-[3px] text-center" />
            <div>
              <h1 className="font-medium text-xl">{t("Wallet.Internet")}</h1>
              <p className="text-gray-500">date</p>
            </div>
          </div>
          <p> - $500000 </p>
        </div>
        <div className="flex justify-between md:mb-[1rem] mb-[2rem]">
          <div className="flex md:gap-[4rem] gap-[2rem]">
            <FaWifi className="text-4xl text-white bg-icon rounded-full p-[3px] text-center" />
            <div>
              <h1 className="font-medium text-xl">{t("Wallet.Internet")}</h1>
              <p className="text-gray-500">date</p>
            </div>
          </div>
          <p> - $500000 </p>
        </div>
      </div>
      {/* Footer */}
      <Footer active="/Wallet" />
    </div>
  );
}

export default Wallet;
