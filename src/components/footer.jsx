import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiTransfer } from "react-icons/bi";
import { FaHome, FaWallet } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function Footer({ active }) {
  const { t, i18n } = useTranslation();
  console.log(t, i18n.language);
  const links = [
    { to: "/Home", icon: <FaHome />, label: t("Footer.Home") },
    { to: "/Transfer", icon: <BiTransfer />, label: t("Footer.Transfer") },
    { to: "/Wallet", icon: <FaWallet />, label: t("Footer.Wallet") },
    { to: "/Profile", icon: <MdPerson />, label: t("Footer.Profile") },
  ];

  return (
    <div className="sticky bottom-0 container w-full flex justify-evenly items-center h-[90px] bg-white gap-[1rem] shadow-xl p-[1rem] border-t-1 border-gray-200">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="cursor-pointer flex flex-col justify-center items-center"
          >
            <div
              className={`text-3xl rounded-full p-[4px] text-white
                ${active === link.to ? "bg-icon" : "bg-gray-400 "}
                ${i18n.language == "ar" ?  "mr-[-20px]": "m-auto"}`
              }
            >
              {link.icon}
            </div>
            <div>
              <h2
                className={`font-medium ${
                  active === link.to ? "text-icon" : "text-gray-400"
                }`}
              >
                {link.label}
              </h2>

            </div>
          </Link>
        ))}
    </div>
  );
};