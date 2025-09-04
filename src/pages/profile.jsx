import Home from './home'
import { MoveLeft } from "../pages/index";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  IoPersonSharp,
  HiOutlineCalendarDateRange,
  Phone,
  LockKeyhole,
} from "./index";

function Profile() {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  return (
    <div className="h-[100vh] w-full sm:w-3/4 shadow-lg m-auto sm:shadow-lg">
      <div className="h-[250px] bg-primary">
        <div className="flex justify-between pl-8 pr-8 pt-10 text-white text-[20px] cursor-pointer">
          <Link to="/Home">
            <MoveLeft />
          </Link>
        </div>
        <div className="px-[1rem] sm:px-[5rem]  md:px-[3rem] lg:px-[5rem] text-center">
          <h1 className="text-white text-2xl lg:text-3xl font-bold px-[2rem] mb-[12px]">
            {t("Profile.experience")}
          </h1>
          <p className="text-[#94A3B8] text-sm lg:text-lg px-[2rem]">
            {t("Profile.enjoy")}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-t-4xl mt-[-36px] md:px-[2rem] md:pt-[2rem] sm:p-[3rem] p-[1rem]">
        <div className=" m-auto">
          <div className="w-19 h-19 border border-primary m-auto rounded-full flex items-center justify-center">
            <IoPersonSharp className="text-icon mx-4 text-4xl" />
          </div>
        </div>
        {/* Information */}
        <div className="flex flex-col gap-[10px] mt-[1rem]">
          <div className="w-full flex p-3 rounded-xl bg-white border border-[#a3a3a3]">
            <IoPersonSharp className="text-icon mx-4 text-2xl" />
            <div className="w-full focus:outline-none">
              {t("Profile.full name")}
            </div>
          </div>
          <div className="w-full flex p-3 rounded-xl bg-white border border-[#a3a3a3]">
            <Phone className="text-icon mx-4" />
            <div className="w-full focus:outline-none">
              {t("Profile.phone")}
            </div>
          </div>
          <div className="w-full flex p-3 rounded-xl bg-white border border-[#a3a3a3]">
            <LockKeyhole className="text-icon mx-4" />
            <div className="w-full focus:outline-none">
              {t("Profile.password")}
            </div>
          </div>
          <div className="w-full flex p-3 rounded-xl bg-white border border-[#a3a3a3]">
            <HiOutlineCalendarDateRange className="text-icon mx-4 text-2xl" />
            <div className="w-full focus:outline-none">
              {t("Profile.email")}
            </div>
          </div>
          <div className="w-full flex p-3 rounded-xl bg-white border border-[#a3a3a3]">
            <IoPersonSharp className="text-icon mx-4 text-2xl" />
            <div className="w-full focus:outline-none">
              {t("Profile.account number")}
            </div>
          </div>
        </div>
        {/* button Logout */}
        <div className="flex justify-center w-full mt-4 cursor-pointer   bg-primary hover:bg-icon text-[16px] font-medium text-white rounded-xl text-center p-4">
          <button>{t("Profile.Logout")}</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
