import ButtonLang from "./buttonLang";
import { Link } from "react-router-dom";
import { MoveLeft } from "../pages/index";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  return (
    <div className="bg-primary h-[250px]">
      <div className="flex justify-between pl-8 pr-8 pt-10 text-white text-[20px] cursor-pointer">
        <Link to="/">
          <MoveLeft />
        </Link>
        <ButtonLang />
      </div>
      <div className="px-[1rem] sm:px-[5rem]  md:px-[3rem] lg:px-[8rem]">
        <h1 className="text-white text-2xl lg:text-3xl font-bold px-[2rem] mb-[12px]">
          {t("Header.Go")}
        </h1>
        <p className="text-[#94A3B8] text-sm lg:text-lg px-[2rem]">
          {t("Header.Sign")}
        </p>
      </div>
    </div>
  );
}
