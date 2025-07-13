import { Link } from "react-router-dom";
import { Transferr, Footer, FaPlus } from "./index";
import { useTranslation } from "react-i18next";

function Transfer() {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  return (
    <div className="h-[100vh] flex flex-col sm:shadow-lg">
      {/* Header */}
      <div className="bg-primary p-4 h-[141px] md:rounded-b-[3rem] rounded-b-[2.3rem] shadow-[0px_4px_20px_0px_#862CB340]">
        <div className="text-center text-white flex items-center justify-center mt-[1.2rem] font-medium"></div>
      </div>
      {/* Transfer And Incoming */}
      <Transferr active="/Transfer" />
      {/* Latest Transfer */}
      <div className="mt-[2rem] mx-4 md:mx-10 grow">
        <h1 className="font-bold text-xl mb-[2rem]">
          {t("Transfer.Latest Transfer")}
        </h1>
        <div className="min-h-[260px] overflow-y-scroll custom-scrollbar">
          <div className="h-[79px] flex gap-[2rem] justify-between bg-[#FFFFFF] shadow-[4px_4px_20px_0px_#0000001A] p-4">
            <div className="tracking-[-1%] flex items-center justify-center gap-5 ">
              <img src="" alt="" className="w-[3rem] h-[3rem] rounded-full" />
              <div>
                <p className="text-[14px] md:text-[17px] font-medium ">
                  Bank Syria
                </p>
                <span className="md:text-[16px] text-[13px] font-[400] text-[#999999]">
                  Yesterday 19:12
                </span>
              </div>
            </div>
            <div className="font-[600] text-lg ">
              <p>600.000$</p>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}
      <Link
        to="/TransferForm"
        className="flex justify-center items-center m-4 ml-auto text-white w-[50px] h-[50px] rounded-full bg-blue-500 cursor-pointer shadow-[4px_4px_20px_0px_#00000040]"
      >
        <FaPlus />
      </Link>
      {/* Footer */}
      <Footer active="/Transfer" />
    </div>
  );
}
export default Transfer;
