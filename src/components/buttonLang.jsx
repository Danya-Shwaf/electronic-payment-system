import { useState } from "react";
import { GiUsaFlag } from "react-icons/gi";



export default function ButtonLang() {
  const [language,setLanguage] = useState("en");
  return (
    <div className="flex border items-center justify-center border-[#FFFFFF] w-fit py-3 px-[11px] rounded-lg gap-2">
      <img src="../../public/English.png" alt="USA_Flag" className="w-6 h-[17.45px]" />
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="outline-none bg-transparent cursor-pointer"
      >
        <option value="ar" className="bg-white text-black cursor-pointer">English</option>
        <option value="en">Arabic</option>
      </select>
    </div>
  );
}
