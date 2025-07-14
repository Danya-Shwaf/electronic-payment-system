import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { BsFillFilePersonFill , Footer ,MoveLeft, RiFolderSettingsFill} from "./index";
import SuccessfulTransfer from "../components/successfulTransfer";

function TransferForm() {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

  const handleProcessClick = () => {
    setShowSuccessModal(true);
  };
  return (
    <div className="h-[100vh] flex flex-col sm:shadow-lg">
      {/* Header */}
      <div className="bg-primary text-white p-6 h-[141px] md:rounded-b-[3rem] rounded-b-[2.3rem] shadow-[0px_4px_20px_0px_#862CB340]">
        <Link to="/Transfer">
          <MoveLeft className="font-bold cursor-pointer" />
        </Link>
        <div className="flex justify-between items-center p-3">
          <div>
            <p className="font-medium">{t("Transfer Process.Balance")}</p>
            <h1 className="font-bold text-2xl">Rp 24.321.900</h1>
          </div>
          <div className="flex items-center md:gap-2 gap-1 font-bold  h-9 py-2 px-3 text-icon bg-white rounded-4xl">
            <RiFolderSettingsFill className="w-6 h-6" />
            <p>{t("Transfer Process.Top Up")}</p>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="mt-[2rem] mx-4 md:mx-10 grow min-h-[353px] overflow-y-scroll custom-scrollbar">
        <form action="">
          <div className="flex gap-3 items-center justify-between">
            <input
              type="phone"
              placeholder={t("Transfer Process.Phone")}
              required
              className=" outline-none py-2 px-4 border-b border-[#363636] w-3/4"
            />
            <div className="w-13 h-13 rounded-full p-3 bg-[#F9F5FE]">
              <BsFillFilePersonFill className="text-3xl text-[#642345]" />
            </div>
          </div>
          <div className="my-10 text-center">
            <h1 className="text-xl font-medium m-2">
              {t("Transfer Process.Amount")}
            </h1>
            <input type="number"  className="font-[600] text-[1rem] outline-none border-b  p-2 border-b-gray-300"/>
          </div>
          <div className="my-5">
            <h1 className="font-medium text-lg mb-2">
              {t("Transfer Process.Notes")}
              <span className="text-[#999999] font-light text-sm">
                {t("Transfer Process.Optional")}
              </span>
            </h1>
            <textarea
              name="notes"
              id=""
              placeholder={t("Transfer Process.Your notes")}
              className="min-h-[100px] w-full border border-[#E6E6E6] bg-[#F7F7F7] p-5 rounded-xl"
            ></textarea>
          </div>
        </form>
        <div className="text-center rounded-[20px] bg-primary hover:bg-icon py-4 px-2 text-white mt-10 cursor-pointer">
          <button className="font-bold text-xl cursor-pointer" onClick={handleProcessClick}>
            {t("Transfer Process.Process")}
          </button>
        </div>
      </div>
      {/* Footer */}
      <Footer active="/Transfer" />
      {showSuccessModal && (
        <SuccessfulTransfer onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
  );
}

export default TransferForm;