import { TbPointFilled, MoveLeft } from "./index";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Notification() {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  return (
    <div className="h-[100vh] flex flex-col sm:shadow-lg">
      {/* Header */}
      <div className="bg-primary p-4 h-[119px] md:rounded-b-[3rem] rounded-b-[2.3rem] shadow-[0px_4px_20px_0px_#862CB340]">
        <div className="text-center text-white flex items-center justify-center mt-[1.2rem] font-medium">
          <Link to="/Home">
            <MoveLeft className="md:ml-[2rem] font-bold cursor-pointer" />
          </Link>
          <h1 className="text-white text-3xl grow">
            {t("Notification.Notification")}
          </h1>
        </div>
      </div>
      {/* List Activity */}
      <div className="mt-[2rem] mx-4 md:mx-10 grow  overflow-y-scroll custom-scrollbar">
        <h1 className="font-semibold md:text-lg md:text-[18px] text-[14px] mb-[2rem]">
          {t("Notification.New")}
        </h1>
        <div className="h-[79px] flex gap-[2rem] items-center bg-[#FFFFFF] shadow-[4px_4px_20px_0px_#0000001A] px-4">
          <img src="" alt="" className="w-[3rem] h-[3rem] rounded-full" />
          <div className="tracking-[-1%]">
            <p className="text-[14px] md:text-[17px]">
              Transferred from bank balance
            </p>
            <span className="md:text-[16px] text-[13px] font-medium">
              12 min ago
              <TbPointFilled className="inline text-[#356899] w-4 h-4" />
            </span>
          </div>
        </div>
        <div className="h-[79px] flex gap-[2rem] items-center bg-[#FFFFFF] shadow-[4px_4px_20px_0px_#0000001A] px-4">
          <img src="" alt="" className="w-[3rem] h-[3rem] rounded-full" />
          <div className="tracking-[-1%]">
            <p className="text-[14px] md:text-[17px]">
              Transferred from bank balance
            </p>
            <span className="md:text-[16px] text-[13px] font-medium">
              12 min ago
              <TbPointFilled className="inline text-[#356899] w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
