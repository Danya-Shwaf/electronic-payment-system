import { MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiTransfer } from "react-icons/bi";
import { FaHome, FaWallet } from "react-icons/fa";

export default function Footer({ active }) {
  const links = [
    { to: "/Home", icon: <FaHome />, label: "Home" },
    { to: "/Transfer", icon: <BiTransfer />, label: "Transfer" },
    { to: "/Wallet", icon: <FaWallet />, label: "Wallet" },
    { to: "/Profile", icon: <MdPerson />, label: "Profile" },
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
            className={`text-3xl rounded-full p-[4px] text-white ${
              active === link.to ? "bg-[#52005e] " : "bg-gray-400 "
            }`}
          >
          {link.icon}
          </div>
          <h2
            className={`font-medium ${
              active === link.to ? "text-[#52005e]" : "text-gray-400"
            }`}
          >
            {link.label}
          </h2>
        </Link>
      ))}
    </div>
  );
};