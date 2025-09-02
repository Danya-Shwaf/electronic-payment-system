import { BiTransfer } from "react-icons/bi";
import { TbArrowBarDown } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import  { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Transferr({ active }) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    console.log("Language changed:", i18n.language);
  }, [i18n.language]);
  console.log(t, i18n.language);
  const links = [
    {
      to: "/Incoming",
      icon: <BiTransfer />,
      label: t("Transfer.Incoming"),
    },
    {
      to: "/Outgoing",
      icon: <TbArrowBarDown />,
      label: t("Transfer.Outgoing"),
    },
  ];
  return (
    <div className="bg-white md:w-3/4 w-[80%] h-[74px] shadow-lg flex justify-around mx-auto p-2 text-lg mt-[-34px] md:mt-[-3rem] rounded-lg">
      {links.map((link) => (
        <div key={link.to} className="flex flex-col justify-center items-center">
          <Link to={`${link.to}`}
            className={`text-3xl w-9 h-9 flex justify-center items-center text-white rounded-full p-[2px] cursor-pointer ${
              active == link.to || active == "/Transfer&Incoming"
                ? "bg-icon"
                : "bg-[#999999]"
            }`}
          >
            {link.icon}
          </Link>
          <h3 className="ml-[-1rem] font-medium">{link.label}</h3>
        </div>
      ))}
    </div>
  );
}
