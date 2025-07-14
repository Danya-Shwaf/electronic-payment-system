import { useState } from "react";
import { useTranslation } from "react-i18next";



export default function ButtonLang() {
  const [language,setLanguage] = useState("en");
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  return (
    <div className="flex border items-center justify-center border-[#FFFFFF] w-fit py-3 px-[11px] rounded-lg gap-2">
      <img
        src="../../public/English.png"
        alt="USA_Flag"
        className="w-6 h-[17.45px]"
        loading="lazy"
      />
      <select
        id="language"
        value={language}
        onChange={(e) => {
          const lang = e.target.value;
          setLanguage(lang);
          i18n.changeLanguage(lang);
          localStorage.setItem("appLanguage", lang);
        }}
        className="outline-none bg-transparent cursor-pointer"
      >
        <option value="en" className="bg-white text-black cursor-pointer">
          {t("EA.English")}
        </option>
        <option value="ar">{t("EA.Arabic")}</option>
      </select>
    </div>
  );
}
