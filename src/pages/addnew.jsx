
import { MoveLeft } from "./index";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Footer,
} from "./index";
import {
  IoPersonSharp,
  Phone,
} from "./index";
export default function AddNew() {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  return (
    <div className="bg-white h-[100vh] flex flex-col sm:shadow-lg">
      {/* Header */}
      <div className="bg-primary p-4 h-[119px] md:rounded-b-[3rem] rounded-b-[2.3rem] shadow-[0px_4px_20px_0px_#862CB340]">
        <div className="text-center text-white flex items-center justify-center mt-[2rem] font-medium">
          <Link to="/Home">
            <MoveLeft className="md:ml-[2rem] font-bold cursor-pointer" />
          </Link>
          <h1 className="text-white text-xl grow">
            {t("Add.New")}
          </h1>
        </div>
      </div>
      <div className="bg-white md:px-[2rem] md:pt-[2rem] sm:p-[3rem] p-[1rem] flex-1">
        <div className=" m-auto">
          <div className="w-19 h-19 border border-primary m-auto rounded-full flex items-center justify-center">
            <IoPersonSharp className="text-icon mx-4 text-4xl" />
          </div>
        </div>
        <form action="" className="flex flex-col mt-[2rem] gap-[0.5rem] flex-1">
          <div className="w-full flex p-3 rounded-xl bg-white border border-[#a3a3a3]">
            <IoPersonSharp className="text-icon mx-4 text-2xl" />
            <input
              type="text"
              name="FullName"
              id="name"
              placeholder={t("Register.Name")}
              className="w-full  focus:outline-none"
              required
            />
          </div>
          <div className="w-full flex p-3 rounded-xl bg-white border border-[#a3a3a3]">
            <Phone className="text-icon mx-4" />
            <input
              type="Phone"
              name="number"
              id="number"
              placeholder={t("Login.Phone")}
              className="w-full  focus:outline-none"
              required
            />
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
          <div className="bg-primary hover:bg-icon w-full mt-2 cursor-pointer bg-primary-500 text-lg font-medium text-white rounded-xl text-center p-4">
            <Link to="/Home">{t("Add.Save")}</Link>
          </div>
        </form>
      </div>
      <Footer active="none" />
    </div>
  );
}
